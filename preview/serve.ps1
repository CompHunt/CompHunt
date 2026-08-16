$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8934
$http = New-Object System.Net.HttpListener
$http.Prefixes.Add("http://localhost:$port/")
$http.Start()
Write-Host "Serving $root on http://localhost:$port/"

while ($http.IsListening) {
    try {
        $context = $http.GetContext()
        $reqPath = $context.Request.Url.LocalPath
        if ($reqPath -eq "/") { $reqPath = "/index.html" }
        $filePath = Join-Path $root ($reqPath.TrimStart("/"))

        # Mirrors vercel.json's SPA rewrite: any path that isn't a real static file
        # falls back to index.html so the client-side router can handle real paths
        # like /opportunities/some-slug (no # fragment) on direct load/refresh.
        if (-not (Test-Path $filePath -PathType Leaf)) {
            $filePath = Join-Path $root "index.html"
        }

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".svg"  { "image/svg+xml" }
                default { "application/octet-stream" }
            }
            $context.Response.ContentType = $contentType
            $context.Response.KeepAlive = $false
            $context.Response.Headers.Set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
            $context.Response.Headers.Set("Pragma", "no-cache")
            $context.Response.Headers.Set("Expires", "0")
            $context.Response.ContentLength64 = $bytes.Length
            $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $context.Response.StatusCode = 404
            $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $reqPath")
            $context.Response.OutputStream.Write($notFound, 0, $notFound.Length)
        }
        $context.Response.OutputStream.Close()
    } catch {
        Write-Host "Error: $_"
    }
}
