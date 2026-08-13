"use client";

import { createContext, useCallback, useContext, useMemo, ReactNode } from "react";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { EMPTY_PROFILE, StudentProfile } from "@/lib/types";

interface RecentlyViewedEntry {
  slug: string;
  viewedAt: number;
}

interface AppState {
  profile: StudentProfile;
  updateProfile: (partial: Partial<StudentProfile>) => void;
  resetProfile: () => void;
  completeOnboarding: () => void;
  savedSlugs: string[];
  toggleSaved: (slug: string) => void;
  isSaved: (slug: string) => boolean;
  recentlyViewed: RecentlyViewedEntry[];
  addRecentlyViewed: (slug: string) => void;
  hydrated: boolean;
}

const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile, profileHydrated] = useLocalStorage<StudentProfile>(
    "oh_profile",
    EMPTY_PROFILE
  );
  const [savedSlugs, setSavedSlugs, savedHydrated] = useLocalStorage<string[]>("oh_saved", []);
  const [recentlyViewed, setRecentlyViewed, recentHydrated] = useLocalStorage<RecentlyViewedEntry[]>(
    "oh_recent",
    []
  );

  const updateProfile = useCallback(
    (partial: Partial<StudentProfile>) => {
      setProfile((prev) => ({ ...prev, ...partial }));
    },
    [setProfile]
  );

  const resetProfile = useCallback(() => {
    setProfile(EMPTY_PROFILE);
  }, [setProfile]);

  const completeOnboarding = useCallback(() => {
    setProfile((prev) => ({ ...prev, onboardingComplete: true }));
  }, [setProfile]);

  const toggleSaved = useCallback(
    (slug: string) => {
      setSavedSlugs((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
    },
    [setSavedSlugs]
  );

  const isSaved = useCallback((slug: string) => savedSlugs.includes(slug), [savedSlugs]);

  const addRecentlyViewed = useCallback(
    (slug: string) => {
      setRecentlyViewed((prev) => {
        const filtered = prev.filter((e) => e.slug !== slug);
        return [{ slug, viewedAt: Date.now() }, ...filtered].slice(0, 20);
      });
    },
    [setRecentlyViewed]
  );

  const value = useMemo<AppState>(
    () => ({
      profile,
      updateProfile,
      resetProfile,
      completeOnboarding,
      savedSlugs,
      toggleSaved,
      isSaved,
      recentlyViewed,
      addRecentlyViewed,
      hydrated: profileHydrated && savedHydrated && recentHydrated,
    }),
    [
      profile,
      updateProfile,
      resetProfile,
      completeOnboarding,
      savedSlugs,
      toggleSaved,
      isSaved,
      recentlyViewed,
      addRecentlyViewed,
      profileHydrated,
      savedHydrated,
      recentHydrated,
    ]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
}
