const testimonials = [
  {
    quote:
      "I had no idea programs like Simons Summer Research existed until my Fit Score showed it at 91%. I applied and got in.",
    name: "Maya",
    detail: "11th grade, California",
  },
  {
    quote:
      "The deadline tracker actually saved me. I would've missed the Diamond Challenge submission without the countdown.",
    name: "Diego",
    detail: "10th grade, Texas",
  },
  {
    quote:
      "I filtered for free and no-essay programs and still found things I was genuinely excited about, not just leftovers.",
    name: "Aanya",
    detail: "9th grade, New Jersey",
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-50/60 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            What students are saying
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-sm font-semibold text-white">
                  {t.name[0]}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900 dark:text-slate-50">{t.name}</span>
                  <span className="block text-xs text-slate-400">{t.detail}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-slate-400">
          Placeholder testimonials for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
