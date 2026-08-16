"use strict";

/* ======================================================================
   ICONS — minimal hand-drawn stroke icons (lucide-style, 24x24 viewBox)
   ====================================================================== */
const ICONS = {
  sparkles: '<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 14l.6 1.9 1.9.6-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.6.6-1.9z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  moon: '<path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
  dashboard: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a13 13 0 010 18 13 13 0 010-18z"/>',
  mapPin: '<path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  externalLink: '<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6M10 14L21 3"/>',
  graduationCap: '<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
  bookmark: '<path d="M6 3h12a1 1 0 011 1v17l-7-4-7 4V4a1 1 0 011-1z"/>',
  star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9L18.2 21 12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  rotateCcw: '<path d="M3 12a9 9 0 109-9 9.7 9.7 0 00-6.7 2.7L3 8"/><path d="M3 3v5h5"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-11M12 6V3M20 21v-5M20 12V3"/><path d="M1 14h6M9 8h6M17 16h6"/>',
  listChecks: '<path d="M9 6h11M9 12h11M9 18h11"/><path d="M3 6l1.3 1.3L6.5 5"/><path d="M3 12l1.3 1.3 2.2-2.3"/><path d="M3 18l1.3 1.3 2.2-2.3"/>',
  fileText: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>',
  lightbulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-3 11.2c.6.4 1 1.1 1 1.8h4c0-.7.4-1.4 1-1.8A6 6 0 0012 3z"/>',
  trophy: '<path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M7 5H4a3 3 0 003 3M17 5h3a3 3 0 01-3 3"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.3 2.3L16 10"/>',
  xCircle: '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
  cornerDownLeft: '<path d="M9 10l-5 5 5 5"/><path d="M20 4v7a4 4 0 01-4 4H4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  gauge: '<path d="M12 21a9 9 0 100-18 9 9 0 000 18z"/><path d="M12 12l4-3"/>',
  timer: '<path d="M10 2h4M12 6v6l3 2"/><circle cx="12" cy="14" r="8"/>',
  banknote: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 10v0M18 14v0"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>',
  clipboard: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1"/><path d="M9 11h6M9 15h6"/>',
  columns: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18"/>',
  scale: '<path d="M12 3v18"/><path d="M6 6h12"/><path d="M4 6l3 7a3 3 0 006 0L10 6"/><path d="M14 6l3 7a3 3 0 006 0L20 6"/>',
  radar: '<circle cx="12" cy="12" r="9"/><path d="M12 12L20 6"/><path d="M12 12a5 5 0 10-3.5-8.5"/>',
  plusCircle: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8v.01"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.5 13.5L6 22l6-3 6 3-2.5-8.5"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 8l9 5 9-5"/>',
  questmark: '<circle cx="10" cy="14" r="7"/><circle cx="10" cy="14" r="2.5"/><path d="M15 9L21 3M21 3h-5.5M21 3v5.5"/>',
};

function icon(name, extraClass, size) {
  const s = size || 16;
  return (
    '<svg class="' + (extraClass || '') + '" width="' + s + '" height="' + s +
    '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg>'
  );
}

/* ======================================================================
   UTILS
   ====================================================================== */
function cls() {
  return Array.prototype.slice.call(arguments).filter(Boolean).join(' ');
}
function escapeHtml(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, function (s) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s];
  });
}
function truncate(text, max) {
  if (!text || text.length <= max) return text || '';
  return text.slice(0, max).trimEnd() + '…';
}
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function daysRemaining(dateStr) {
  const deadline = new Date(dateStr + 'T00:00:00');
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((deadline.getTime() - now.getTime()) / 86400000);
}
function countdownLabel(dateStr) {
  const days = daysRemaining(dateStr);
  if (days < 0) return 'Deadline passed';
  if (days === 0) return 'Due today';
  if (days === 1) return '1 day remaining';
  return days + ' days remaining';
}
function countdownUrgency(dateStr) {
  const days = daysRemaining(dateStr);
  if (days < 0) return 'passed';
  if (days <= 7) return 'urgent';
  if (days <= 30) return 'soon';
  return 'normal';
}
/* The "opens" date in timeline[0] is free text ("May 11, 2026", "Fall 2026") and can go
   stale — if that date has already passed but the deadline hasn't, the opportunity is
   currently open, not "opening" on a day that's already gone. Best-effort parse; if the
   text isn't parseable (e.g. "Varies by region") we leave the original label/date alone. */
function opensStatus(o) {
  const first = o.timeline && o.timeline[0];
  if (!first) return null;
  const parsed = new Date(first.date);
  const isRealDate = !isNaN(parsed.getTime()) && /\d{4}/.test(first.date);
  if (isRealDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (parsed.getTime() <= today.getTime()) {
      const days = daysRemaining(o.deadline);
      return { label: 'Status', value: days >= 0 ? 'Currently open' : 'Applications closed', isStatus: true };
    }
  }
  return { label: first.label, value: first.date, isStatus: false };
}

/* ======================================================================
   MATCHING / FIT SCORE
   ====================================================================== */
const WEIGHTS = { interests: 35, opportunityType: 15, budget: 15, location: 15, grade: 10, country: 10 };

function scoreInterests(profile, o) {
  if (!profile.interests || profile.interests.length === 0) return WEIGHTS.interests * 0.6;
  const matches = o.tags.filter(function (t) { return profile.interests.indexOf(t) !== -1; }).length;
  if (matches === 0) return WEIGHTS.interests * 0.15;
  const ratio = Math.min(matches / Math.min(profile.interests.length, 3), 1);
  return WEIGHTS.interests * ratio;
}
/* Maps the onboarding's broader nationality list onto the dataset's actual country field.
   International opportunities always score fully — they're open to every nationality by definition. */
function scoreCountry(profile, o) {
  if (!profile.country || profile.country === 'Other / International') return WEIGHTS.country;
  if (o.country === 'International') return WEIGHTS.country;
  if (o.country === profile.country) return WEIGHTS.country;
  if (o.locationType === 'Online' || o.locationType === 'Both') return WEIGHTS.country * 0.6;
  return WEIGHTS.country * 0.25;
}
function scoreOpportunityType(profile, o) {
  if (!profile.opportunityTypes || profile.opportunityTypes.length === 0) return WEIGHTS.opportunityType * 0.7;
  const hasMatch = o.opportunityTypes.some(function (t) { return profile.opportunityTypes.indexOf(t) !== -1; });
  return hasMatch ? WEIGHTS.opportunityType : WEIGHTS.opportunityType * 0.1;
}
function scoreBudget(profile, o) {
  if (!profile.budget || profile.budget === 'Any') return WEIGHTS.budget;
  if (profile.budget === 'Free only') return o.cost === 'Free' ? WEIGHTS.budget : WEIGHTS.budget * 0.1;
  if (profile.budget === 'Under $100') {
    return o.cost === 'Free' || o.cost === 'Under $100' ? WEIGHTS.budget : WEIGHTS.budget * 0.2;
  }
  return WEIGHTS.budget * 0.5;
}
function scoreLocation(profile, o) {
  if (!profile.location || profile.location === 'Both') return WEIGHTS.location;
  if (o.locationType === 'Both') return WEIGHTS.location;
  return profile.location === o.locationType ? WEIGHTS.location : WEIGHTS.location * 0.25;
}
function scoreGrade(profile, o) {
  if (!profile.grade) return WEIGHTS.grade;
  return o.gradeLevels.indexOf(profile.grade) !== -1 ? WEIGHTS.grade : WEIGHTS.grade * 0.3;
}
function computeFitScore(profile, o) {
  const total =
    scoreInterests(profile, o) +
    scoreOpportunityType(profile, o) +
    scoreBudget(profile, o) +
    scoreLocation(profile, o) +
    scoreGrade(profile, o) +
    scoreCountry(profile, o);
  return Math.round(Math.min(total, 100));
}
function getRecommendations(profile, opps, limit) {
  const scored = opps.map(function (o) {
    const copy = Object.assign({}, o);
    copy.fitScore = computeFitScore(profile, o);
    return copy;
  });
  scored.sort(function (a, b) { return b.fitScore - a.fitScore || b.prestige - a.prestige; });
  return limit ? scored.slice(0, limit) : scored;
}
function hasProfileSignal(profile) {
  return Boolean(profile && ((profile.interests && profile.interests.length) || (profile.opportunityTypes && profile.opportunityTypes.length) || profile.grade || profile.budget || profile.location || profile.country || profile.timeAvailable));
}
/* Converts the onboarding's time-availability choice into an hours/week ceiling,
   reusing the same field opportunities already expose (hoursPerWeek). */
function maxHoursFromProfile(profile) {
  if (profile.timeAvailable === '2 hours') return 2;
  if (profile.timeAvailable === '5 hours') return 5;
  return null;
}
/* Why-this-matches reasons: every reason traces to a real profile/opportunity field comparison, never invented. */
function getMatchReasons(profile, o) {
  const reasons = [];
  if (!hasProfileSignal(profile)) return reasons;
  if (profile.grade && o.gradeLevels.indexOf(profile.grade) !== -1) {
    reasons.push("You're in Grade " + profile.grade + ", and it's open to that grade");
  }
  if (profile.interests && profile.interests.length) {
    const matchedTags = o.tags.filter(function (t) { return profile.interests.indexOf(t) !== -1; });
    if (matchedTags.length) {
      reasons.push('Matches your interest in ' + matchedTags.slice(0, 2).join(' and '));
    }
  }
  if (profile.opportunityTypes && profile.opportunityTypes.length) {
    const matchedTypes = o.opportunityTypes.filter(function (t) { return profile.opportunityTypes.indexOf(t) !== -1; });
    if (matchedTypes.length) {
      reasons.push("It's a " + matchedTypes[0].toLowerCase() + ' opportunity, which you selected');
    }
  }
  if (profile.location && profile.location !== 'Both') {
    if (o.locationType === 'Both' || profile.location === o.locationType) {
      reasons.push(o.locationType === 'Both' ? 'Available both online and in-person' : "It's " + o.locationType.toLowerCase() + ', matching your preference');
    }
  }
  if (profile.budget === 'Free only' && o.cost === 'Free') reasons.push("It's free to enter");
  else if (profile.budget === 'Under $100' && (o.cost === 'Free' || o.cost === 'Under $100')) reasons.push('Fits your budget (' + o.cost.toLowerCase() + ')');
  if (profile.country && profile.country === o.country) reasons.push('Based in ' + o.country + ', matching your location');
  else if (o.country === 'International') reasons.push("It's open internationally");
  const maxHours = maxHoursFromProfile(profile);
  if (maxHours != null) {
    const nums = String(o.hoursPerWeek).match(/\d+/g);
    const maxFound = nums ? Math.max.apply(null, nums.map(Number)) : null;
    if (maxFound != null && maxFound <= maxHours) reasons.push('Fits within ' + maxHours + ' hours/week');
  }
  return reasons;
}
/* CompHunt Opportunity Score: CompHunt's own composite assessment, derived only from
   verified fields already in the database (prestige, country/recognition scope, and the
   featured flag set during data curation). Not an official ranking or acceptance-rate estimate. */
function computeOpportunityScore(o) {
  const prestigePoints = (o.prestige / 5) * 55;
  const recognitionPoints = o.country === 'International' ? 25 : 20;
  const curationPoints = o.featured ? 20 : 12;
  return Math.round(prestigePoints + recognitionPoints + curationPoints);
}
const REPUTATION_LABELS = { 1: 'Emerging', 2: 'Good', 3: 'Strong', 4: 'High', 5: 'Elite' };
const COMPETITIVENESS_LABELS = { Easy: 'Low', Moderate: 'Moderate', Competitive: 'High', Elite: 'Very High' };
function getReputationAssessment(o) {
  return {
    reputation: REPUTATION_LABELS[o.prestige] || 'Good',
    competitiveness: COMPETITIVENESS_LABELS[o.difficulty] || 'Moderate',
    recognition: o.country === 'International' ? 'International' : o.country,
  };
}

/* ======================================================================
   STORE (localStorage)
   ====================================================================== */
const STORAGE_KEYS = { profile: 'oh_profile', saved: 'oh_saved', recent: 'oh_recent', theme: 'oh_theme' };
const EMPTY_PROFILE = { interests: [], careerInterests: '', opportunityTypes: [], onboardingComplete: false };

function loadJSON(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v !== null ? JSON.parse(v) : fallback;
  } catch (e) {
    return fallback;
  }
}
function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    /* ignore quota errors */
  }
}

const Store = {
  getProfile: function () {
    return Object.assign({}, EMPTY_PROFILE, loadJSON(STORAGE_KEYS.profile, {}));
  },
  setProfile: function (p) {
    saveJSON(STORAGE_KEYS.profile, p);
  },
  updateProfile: function (partial) {
    const p = Object.assign({}, this.getProfile(), partial);
    this.setProfile(p);
    return p;
  },
  /* Pipeline entries: [{slug, status, savedAt}]. Transparently migrates the old
     string[]-of-slugs format (pre-pipeline) into the new object format on read. */
  getPipeline: function () {
    const raw = loadJSON(STORAGE_KEYS.saved, []);
    if (raw.length && typeof raw[0] === 'string') {
      const migrated = raw.map(function (slug) { return { slug: slug, status: 'Saved', savedAt: Date.now() }; });
      saveJSON(STORAGE_KEYS.saved, migrated);
      return migrated;
    }
    return raw;
  },
  getSaved: function () {
    return this.getPipeline().map(function (e) { return e.slug; });
  },
  isSaved: function (slug) {
    return this.getSaved().indexOf(slug) !== -1;
  },
  getStatus: function (slug) {
    const entry = this.getPipeline().filter(function (e) { return e.slug === slug; })[0];
    return entry ? entry.status : null;
  },
  setStatus: function (slug, status) {
    const pipeline = this.getPipeline();
    const idx = pipeline.map(function (e) { return e.slug; }).indexOf(slug);
    if (idx !== -1) {
      pipeline[idx] = Object.assign({}, pipeline[idx], { status: status });
      saveJSON(STORAGE_KEYS.saved, pipeline);
    }
    return pipeline;
  },
  toggleSaved: function (slug) {
    const pipeline = this.getPipeline();
    const idx = pipeline.map(function (e) { return e.slug; }).indexOf(slug);
    const next = idx === -1
      ? pipeline.concat({ slug: slug, status: 'Saved', savedAt: Date.now() })
      : pipeline.filter(function (e) { return e.slug !== slug; });
    saveJSON(STORAGE_KEYS.saved, next);
    return next.map(function (e) { return e.slug; });
  },
  getRecent: function () {
    return loadJSON(STORAGE_KEYS.recent, []);
  },
  addRecent: function (slug) {
    const recent = this.getRecent().filter(function (e) { return e.slug !== slug; });
    recent.unshift({ slug: slug, viewedAt: Date.now() });
    saveJSON(STORAGE_KEYS.recent, recent.slice(0, 20));
  },
  getTheme: function () {
    return localStorage.getItem(STORAGE_KEYS.theme);
  },
  setTheme: function (t) {
    localStorage.setItem(STORAGE_KEYS.theme, t);
  },
};

const PIPELINE_STAGES = ['Saved', 'Considering', 'Applying', 'Submitted', 'Results'];

/* Comparison tray: up to 4 slugs, session-scoped (sessionStorage), separate from saved/pipeline. */
const CompareStore = {
  key: 'cq_compare',
  max: 4,
  get: function () {
    try { return JSON.parse(sessionStorage.getItem(this.key) || '[]'); } catch (e) { return []; }
  },
  set: function (arr) {
    sessionStorage.setItem(this.key, JSON.stringify(arr));
  },
  has: function (slug) {
    return this.get().indexOf(slug) !== -1;
  },
  toggle: function (slug) {
    const arr = this.get();
    const idx = arr.indexOf(slug);
    if (idx !== -1) {
      arr.splice(idx, 1);
      this.set(arr);
      return { ok: true, list: arr };
    }
    if (arr.length >= this.max) return { ok: false, list: arr, reason: 'max' };
    arr.push(slug);
    this.set(arr);
    return { ok: true, list: arr };
  },
  clear: function () {
    this.set([]);
  },
};

/* ======================================================================
   SMALL RENDER HELPERS
   ====================================================================== */
function renderStars(prestige) {
  let html = '<span class="stars" title="Prestige ' + prestige + '/5">';
  for (let i = 1; i <= 5; i++) {
    html += icon('star', i <= prestige ? 'star-filled' : 'star-empty', 14);
  }
  return html + '</span>';
}

const DIFFICULTY_TONE = { Easy: 'green', Moderate: 'brand', Competitive: 'amber', Elite: 'red' };
const CATEGORY_TONE = {
  Business: 'orange',
  STEM: 'brand',
  Research: 'indigo',
  Writing: 'pink',
  Arts: 'fuchsia',
  Olympiads: 'purple',
  Hackathons: 'cyan',
  'MUN & Debate': 'red',
  Leadership: 'amber',
  'Summer Programs': 'teal',
  Internships: 'lime',
  Scholarships: 'rose',
  Volunteering: 'green',
};
function categoryTone(category) {
  return CATEGORY_TONE[category] || 'brand';
}
function renderDifficultyBadge(difficulty) {
  return '<span class="badge badge-' + DIFFICULTY_TONE[difficulty] + '">' + difficulty + '</span>';
}
function renderBadge(text, tone) {
  return '<span class="badge badge-' + (tone || 'neutral') + '">' + escapeHtml(text) + '</span>';
}

function renderFitRing(score, size) {
  size = size || 44;
  const stroke = size <= 44 ? 3.5 : 4;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.max(0, Math.min(score, 100)) / 100) * circumference;
  const colorVar =
    score >= 80 ? 'var(--emerald-500)' : score >= 60 ? 'var(--brand-500)' : score >= 40 ? 'var(--amber-500)' : 'var(--slate-400)';
  return (
    '<span class="fit-ring" style="width:' + size + 'px;height:' + size + 'px" title="Fit score ' + score + '%">' +
    '<svg width="' + size + '" height="' + size + '" style="transform:rotate(-90deg)">' +
    '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + radius + '" fill="none" stroke-width="' + stroke + '" stroke="var(--slate-200)"/>' +
    '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + radius + '" fill="none" stroke-width="' + stroke +
    '" stroke="' + colorVar + '" stroke-linecap="round" stroke-dasharray="' + circumference + '" stroke-dashoffset="' + offset +
    '" style="transition:stroke-dashoffset .6s ease"/></svg>' +
    '<span class="fit-score-label" style="position:absolute;font-size:' + (size <= 44 ? 10 : 12) + 'px;font-weight:600;">' + score + '%</span>' +
    '</span>'
  );
}

function renderDeadline(deadline) {
  const urgency = countdownUrgency(deadline);
  return (
    '<span class="deadline deadline-' + urgency + '">' + icon('clock') + countdownLabel(deadline) + '</span>'
  );
}

function renderBookmarkButton(slug, size) {
  const saved = Store.isSaved(slug);
  const px = size === 'lg' ? 24 : size === 'sm' ? 15 : 17;
  return (
    '<button type="button" class="bookmark-btn' + (saved ? ' saved' : '') + '" data-action="bookmark" data-slug="' +
    escapeHtml(slug) + '" aria-pressed="' + saved + '" aria-label="Save opportunity">' +
    icon('bookmark', '', px) +
    '</button>'
  );
}
function updateBookmarkButtonEl(el, slug) {
  const saved = Store.isSaved(slug);
  el.classList.toggle('saved', saved);
  el.setAttribute('aria-pressed', String(saved));
  el.classList.remove('pop');
  void el.offsetWidth;
  el.classList.add('pop');
  // sync every other bookmark button for the same slug (card appears in multiple views)
  document.querySelectorAll('[data-action="bookmark"][data-slug="' + CSS.escape(slug) + '"]').forEach(function (btn) {
    btn.classList.toggle('saved', saved);
    btn.setAttribute('aria-pressed', String(saved));
  });
}

function renderMatchBadge(fitScore, slug) {
  if (typeof fitScore !== 'number') return '';
  return (
    '<button type="button" class="match-badge" data-action="why-match" data-slug="' + escapeHtml(slug) + '" data-score="' + fitScore + '">' +
    fitScore + '% Match' + icon('info', '', 12) +
    '</button>'
  );
}
function renderCompareCheckbox(slug) {
  const checked = CompareStore.has(slug);
  return (
    '<label class="compare-check' + (checked ? ' checked' : '') + '" title="Add to comparison">' +
    '<input type="checkbox" data-action="compare-toggle" data-slug="' + escapeHtml(slug) + '"' + (checked ? ' checked' : '') + ' />' +
    '<span>' + icon('check', '', 11) + '</span>' +
    '</label>'
  );
}
function renderOpportunityCard(o, fitScore) {
  const oppScore = computeOpportunityScore(o);
  return (
    '<div class="card opportunity-card">' +
    '<div class="card-top">' +
    '<div style="display:flex;align-items:center;gap:.5rem;min-width:0">' + renderCompareCheckbox(o.slug) + renderBadge(o.category, categoryTone(o.category)) + '</div>' +
    '<div style="display:flex;align-items:center;gap:.4rem;flex-shrink:0">' + renderBookmarkButton(o.slug, 'sm') + '</div>' +
    '</div>' +
    (typeof fitScore === 'number' ? '<div class="card-match-row">' + renderMatchBadge(fitScore, o.slug) + '</div>' : '') +
    '<a href="/opportunities/' + encodeURIComponent(o.slug) + '" class="card-title-row">' +
    renderOrgAvatar(o, 32) +
    '<span><h3>' + escapeHtml(o.title) + '</h3>' +
    '<p class="organizer">' + escapeHtml(o.organizer) + '</p></span>' +
    '</a>' +
    '<p class="description">' + escapeHtml(truncate(o.shortDescription, 120)) + '</p>' +
    '<div class="tag-row">' +
    renderDifficultyBadge(o.difficulty) +
    renderBadge(o.cost, o.cost === 'Free' ? 'green' : 'neutral') +
    renderBadge(o.locationType, 'neutral') +
    renderBadge(o.country, 'neutral') +
    '</div>' +
    '<div class="card-footer-row"><span class="opp-score-chip" title="CompHunt Opportunity Score: ' + oppScore + '/100">' + icon('award', '', 13) + ' ' + oppScore + '</span><span>' + icon('clock', '', 13) + ' ' + escapeHtml(o.hoursPerWeek) + '</span></div>' +
    '<p class="eligibility-line">' + icon('graduationCap', '', 14) + '<span>' + escapeHtml(o.eligibility[0]) + '</span></p>' +
    '<div class="card-divider">' +
    (function () {
      const status = opensStatus(o);
      if (!status) return '<span></span>';
      const text = status.isStatus ? status.value : 'Opens ' + status.value;
      return '<span class="opens-line' + (status.isStatus ? ' opens-line-active' : '') + '">' + escapeHtml(text) + '</span>';
    })() +
    renderDeadline(o.deadline) +
    '</div>' +
    '<div class="card-actions">' +
    '<a class="btn btn-primary btn-sm btn-block" href="/opportunities/' + encodeURIComponent(o.slug) + '">View Details</a>' +
    '<a class="btn btn-outline btn-sm btn-icon" href="' + escapeHtml(o.officialWebsite) + '" target="_blank" rel="noopener noreferrer" aria-label="Official website">' + icon('externalLink') + '</a>' +
    '</div>' +
    '</div>'
  );
}

function renderCardsGrid(items, fitScores, cols3) {
  if (items.length === 0) return '';
  return (
    '<div class="grid-cards' + (cols3 ? ' cols-3' : '') + '">' +
    items.map(function (o) { return renderOpportunityCard(o, fitScores ? o.fitScore : undefined); }).join('') +
    '</div>'
  );
}

function renderSkeletonGrid(count) {
  let cards = '';
  for (let i = 0; i < count; i++) {
    cards +=
      '<div class="skeleton-card">' +
      '<div style="display:flex;justify-content:space-between;gap:.75rem">' +
      '<div class="skeleton-block" style="height:1.25rem;width:60%"></div>' +
      '<div class="skeleton-block" style="height:2.5rem;width:2.5rem;border-radius:999px"></div>' +
      '</div>' +
      '<div class="skeleton-block" style="height:1rem;width:100%;margin-top:.75rem"></div>' +
      '<div class="skeleton-block" style="height:1rem;width:80%;margin-top:.5rem"></div>' +
      '<div style="display:flex;gap:.5rem;margin-top:1.25rem">' +
      '<div class="skeleton-block" style="height:1.5rem;width:4rem"></div>' +
      '<div class="skeleton-block" style="height:1.5rem;width:5rem"></div>' +
      '</div>' +
      '</div>';
  }
  return '<div class="grid-cards cols-3">' + cards + '</div>';
}

function renderEmptyState(iconName, title, description, actionHtml) {
  return (
    '<div class="empty-state">' +
    '<div class="icon-wrap">' + icon(iconName, '', 26) + '</div>' +
    '<h3>' + escapeHtml(title) + '</h3>' +
    '<p>' + escapeHtml(description) + '</p>' +
    (actionHtml ? '<div class="empty-action">' + actionHtml + '</div>' : '') +
    '</div>'
  );
}

/* ======================================================================
   SHELL — navbar, mobile menu, footer, command palette (rendered once)
   ====================================================================== */
function renderShell() {
  const app = document.getElementById('app');
  app.innerHTML =
    '<header class="navbar">' +
    '<div class="container navbar-inner">' +
    '<a href="/" class="brand"><span class="brand-badge">' + icon('questmark') + '</span><span>CompHunt</span></a>' +
    '<nav class="nav-links">' +
    '<a href="/opportunities" class="nav-link" data-path="/opportunities">' + icon('compass') + 'Discover</a>' +
    '<a href="/deadlines" class="nav-link" data-path="/deadlines">' + icon('radar') + 'Deadlines</a>' +
    '<a href="/dashboard" class="nav-link" data-path="/dashboard">' + icon('dashboard') + 'Dashboard</a>' +
    '</nav>' +
    '<div class="nav-actions">' +
    '<button type="button" class="search-trigger" id="search-trigger">' + icon('search') + 'Search<kbd>Ctrl K</kbd></button>' +
    '<button type="button" class="icon-btn" id="theme-toggle" aria-label="Toggle dark mode"></button>' +
    '<a href="/onboarding" class="btn btn-primary btn-sm" id="nav-cta" style="display:none">Get Started</a>' +
    '<button type="button" class="icon-btn hamburger" id="hamburger-btn" aria-label="Toggle menu">' + icon('menu') + '</button>' +
    '</div>' +
    '</div>' +
    '<div class="mobile-menu" id="mobile-menu" hidden>' +
    '<a href="/opportunities" class="nav-link">' + icon('compass') + 'Discover</a>' +
    '<a href="/deadlines" class="nav-link">' + icon('radar') + 'Deadlines</a>' +
    '<a href="/dashboard" class="nav-link">' + icon('dashboard') + 'Dashboard</a>' +
    '<a href="/onboarding" class="btn btn-primary btn-sm" style="margin-top:.5rem;justify-content:center">Get Started</a>' +
    '</div>' +
    '</header>' +
    '<main id="app-main"></main>' +
    renderFooter() +
    renderCommandPaletteShell();

  document.getElementById('nav-cta').style.display = 'inline-flex';

  bindShellEvents();
  applyThemeIcon();
}

function renderFooter() {
  return (
    '<footer class="footer"><div class="container">' +
    '<div class="footer-grid">' +
    '<div style="grid-column:span 2 / span 2">' +
    '<a href="/" class="brand"><span class="brand-badge">' + icon('questmark') + '</span><span>CompHunt</span></a>' +
    '<p style="margin-top:.75rem;max-width:20rem;font-size:.875rem;line-height:1.6;color:var(--text-muted)">Helping students discover the competitions, programs, and scholarships that fit who they are.</p>' +
    '</div>' +
    '<div><h4>Explore</h4><ul>' +
    '<li><a href="/opportunities">Discover Opportunities</a></li>' +
    '<li><a href="/dashboard">Dashboard</a></li>' +
    '<li><a href="/onboarding">Take the Quiz</a></li>' +
    '</ul></div>' +
    '<div><h4>Categories</h4><ul>' +
    '<li><a href="/opportunities?category=STEM">STEM &amp; Research</a></li>' +
    '<li><a href="/opportunities?category=Business">Business</a></li>' +
    '<li><a href="/opportunities?category=Summer%20Programs">Summer Programs</a></li>' +
    '<li><a href="/opportunities?category=Scholarships">Scholarships</a></li>' +
    '</ul></div>' +
    '</div>' +
    '<div class="footer-bottom"><p>© ' + new Date().getFullYear() + ' CompHunt. A student project prototype.</p><p>Created by Reyaansh Agarwal</p></div>' +
    '</div></footer>'
  );
}

function renderCommandPaletteShell() {
  return (
    '<div class="cmdk-overlay" id="cmdk-overlay" hidden>' +
    '<div class="cmdk-panel">' +
    '<div class="cmdk-input-row">' + icon('search') +
    '<input type="text" class="cmdk-input" id="cmdk-input" placeholder="Search opportunities, categories, or pages…" />' +
    '<kbd style="border:1px solid var(--border);border-radius:.35rem;padding:.1rem .35rem;font-size:.65rem;color:var(--text-faint)">ESC</kbd>' +
    '</div>' +
    '<div class="cmdk-results" id="cmdk-results"></div>' +
    '</div>' +
    '</div>'
  );
}

function applyThemeIcon() {
  const theme = document.documentElement.getAttribute('data-theme') || 'light';
  document.getElementById('theme-toggle').innerHTML = theme === 'dark' ? icon('sun', '', 18) : icon('moon', '', 18);
}

function bindShellEvents() {
  document.getElementById('theme-toggle').addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    Store.setTheme(next);
    applyThemeIcon();
  });

  document.getElementById('hamburger-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    const isHidden = menu.hasAttribute('hidden');
    if (isHidden) {
      menu.removeAttribute('hidden');
      this.innerHTML = icon('x');
    } else {
      menu.setAttribute('hidden', '');
      this.innerHTML = icon('menu');
    }
  });
  document.getElementById('mobile-menu').addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      this.setAttribute('hidden', '');
      document.getElementById('hamburger-btn').innerHTML = icon('menu');
    }
  });

  document.getElementById('search-trigger').addEventListener('click', openCommandPalette);
  const overlay = document.getElementById('cmdk-overlay');
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeCommandPalette();
  });
  document.getElementById('cmdk-input').addEventListener('input', function (e) {
    renderCommandResults(e.target.value);
  });
  document.getElementById('cmdk-input').addEventListener('keydown', function (e) {
    const results = document.getElementById('cmdk-results');
    const items = Array.prototype.slice.call(results.querySelectorAll('.cmdk-item'));
    let activeIdx = items.findIndex(function (it) { return it.classList.contains('active'); });
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      setActiveCmdkItem(items, activeIdx);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      setActiveCmdkItem(items, activeIdx);
    } else if (e.key === 'Enter' && items[activeIdx]) {
      items[activeIdx].click();
    }
  });

  window.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const overlayEl = document.getElementById('cmdk-overlay');
      overlayEl.hasAttribute('hidden') ? openCommandPalette() : closeCommandPalette();
    }
    if (e.key === 'Escape') closeCommandPalette();
  });

  // global delegated click handler — persists across all route renders
  document.getElementById('app').addEventListener('click', function (e) {
    const bookmarkBtn = e.target.closest('[data-action="bookmark"]');
    if (bookmarkBtn) {
      e.preventDefault();
      Store.toggleSaved(bookmarkBtn.dataset.slug);
      updateBookmarkButtonEl(bookmarkBtn, bookmarkBtn.dataset.slug);
      return;
    }
    const faqBtn = e.target.closest('[data-action="faq-toggle"]');
    if (faqBtn) {
      faqBtn.closest('.faq-item').classList.toggle('open');
    }
    const whyBtn = e.target.closest('[data-action="why-match"]');
    if (whyBtn) {
      e.preventDefault();
      e.stopPropagation();
      toggleWhyMatchPopover(whyBtn);
      return;
    }
    if (!e.target.closest('.why-match-popover') && !e.target.closest('[data-action="why-match"]')) {
      closeAllWhyMatchPopovers();
    }
  });
  document.getElementById('app').addEventListener('change', function (e) {
    const compareBox = e.target.closest('[data-action="compare-toggle"]');
    if (compareBox) {
      const slug = compareBox.dataset.slug;
      const result = CompareStore.toggle(slug);
      if (!result.ok) {
        compareBox.checked = false;
        showToast('You can compare up to ' + CompareStore.max + ' at a time.');
        return;
      }
      compareBox.closest('.compare-check').classList.toggle('checked', result.list.indexOf(slug) !== -1);
      renderCompareBar();
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('cq-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cq-toast';
    toast.className = 'cq-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function () { toast.classList.remove('visible'); }, 2600);
}

function closeAllWhyMatchPopovers() {
  document.querySelectorAll('.why-match-popover').forEach(function (p) { p.remove(); });
}
function toggleWhyMatchPopover(btn) {
  const existing = btn.parentElement.querySelector('.why-match-popover');
  closeAllWhyMatchPopovers();
  if (existing) return;
  const slug = btn.dataset.slug;
  const score = btn.dataset.score;
  const o = getOpportunityBySlug(slug);
  if (!o) return;
  const profile = Store.getProfile();
  const reasons = getMatchReasons(profile, o);
  const pop = document.createElement('div');
  pop.className = 'why-match-popover';
  pop.innerHTML =
    '<strong>' + score + '% match because:</strong>' +
    (reasons.length
      ? '<ul>' + reasons.map(function (r) { return '<li>' + icon('check', 'match-check', 13) + escapeHtml(r) + '</li>'; }).join('') + '</ul>'
      : '<p>Complete your profile to see personalized match reasons.</p>');
  btn.parentElement.style.position = 'relative';
  btn.parentElement.appendChild(pop);
}

/* Floating comparison tray — persists across route renders, lives outside #app content flow */
function renderCompareBar() {
  let bar = document.getElementById('compare-bar');
  const list = CompareStore.get();
  if (list.length === 0) {
    if (bar) bar.remove();
    return;
  }
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'compare-bar';
    bar.className = 'compare-bar';
    document.body.appendChild(bar);
  }
  const items = list.map(function (slug) { return getOpportunityBySlug(slug); }).filter(Boolean);
  bar.innerHTML =
    '<div class="compare-bar-inner">' +
    '<div class="compare-bar-items">' +
    items.map(function (o) {
      return '<span class="compare-chip">' + escapeHtml(truncate(o.title, 24)) +
        '<button type="button" data-action="compare-remove" data-slug="' + escapeHtml(o.slug) + '" aria-label="Remove">' + icon('x', '', 12) + '</button></span>';
    }).join('') +
    '</div>' +
    '<div class="compare-bar-actions">' +
    '<button type="button" class="btn btn-ghost btn-sm" data-action="compare-clear">Clear</button>' +
    '<a href="/compare" class="btn btn-primary btn-sm">Compare (' + items.length + ')' + icon('arrowRight', '', 14) + '</a>' +
    '</div></div>';
  bar.querySelectorAll('[data-action="compare-remove"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      CompareStore.toggle(btn.dataset.slug);
      document.querySelectorAll('.compare-check input[data-slug="' + CSS.escape(btn.dataset.slug) + '"]').forEach(function (cb) {
        cb.checked = false;
        cb.closest('.compare-check').classList.remove('checked');
      });
      renderCompareBar();
    });
  });
  const clearBtn = bar.querySelector('[data-action="compare-clear"]');
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      CompareStore.clear();
      document.querySelectorAll('.compare-check.checked').forEach(function (el) {
        el.classList.remove('checked');
        el.querySelector('input').checked = false;
      });
      renderCompareBar();
    });
  }
}

function setActiveCmdkItem(items, idx) {
  items.forEach(function (it, i) { it.classList.toggle('active', i === idx); });
}

function openCommandPalette() {
  const overlay = document.getElementById('cmdk-overlay');
  overlay.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  const input = document.getElementById('cmdk-input');
  input.value = '';
  renderCommandResults('');
  setTimeout(function () { input.focus(); }, 30);
}
function closeCommandPalette() {
  const overlay = document.getElementById('cmdk-overlay');
  if (!overlay || overlay.hasAttribute('hidden')) return;
  overlay.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

const STATIC_PAGES = [
  { label: 'Discover Opportunities', sub: 'Browse & filter all programs', href: '/opportunities', iconName: 'compass' },
  { label: 'Dashboard', sub: 'Saved, recent, and recommended', href: '/dashboard', iconName: 'dashboard' },
  { label: 'Take the Quiz', sub: 'Personalize your recommendations', href: '/onboarding', iconName: 'sparkles' },
];

/* Organizer avatar: shows the real official logo (fetched from Wikipedia) when we have
   a verified one in ORG_LOGOS; otherwise falls back to a colored monogram derived from
   the organizer's name and category, so results stay scannable at a glance either way. */
function getOrgInitials(name) {
  const words = String(name).replace(/[()]/g, '').split(/[\s&,-]+/).filter(Boolean);
  if (words.length === 0) return '?';
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
function renderOrgAvatar(o, size) {
  size = size || 30;
  const logoSrc = typeof ORG_LOGOS !== 'undefined' ? ORG_LOGOS[o.organizer] : undefined;
  if (logoSrc) {
    return (
      '<span class="org-avatar org-avatar-logo" style="width:' + size + 'px;height:' + size +
      'px" title="' + escapeHtml(o.organizer) + '"><img src="' + logoSrc + '" alt="" loading="lazy" /></span>'
    );
  }
  const initials = getOrgInitials(o.organizer);
  const tone = categoryTone(o.category);
  return (
    '<span class="org-avatar org-avatar-' + tone + '" style="width:' + size + 'px;height:' + size +
    'px;font-size:' + Math.round(size * 0.36) + 'px" title="' + escapeHtml(o.organizer) + '">' + initials + '</span>'
  );
}

function renderCommandResults(query) {
  const q = query.trim().toLowerCase();
  let results;
  if (!q) {
    results = STATIC_PAGES;
  } else {
    const pages = STATIC_PAGES.filter(function (p) { return p.label.toLowerCase().indexOf(q) !== -1; });
    const opps = opportunities
      .filter(function (o) {
        return (
          o.title.toLowerCase().indexOf(q) !== -1 ||
          o.organizer.toLowerCase().indexOf(q) !== -1 ||
          o.category.toLowerCase().indexOf(q) !== -1 ||
          o.tags.some(function (t) { return t.toLowerCase().indexOf(q) !== -1; })
        );
      })
      .slice(0, 8)
      .map(function (o) {
        return { label: o.title, sub: o.category + ' · ' + o.organizer, href: '/opportunities/' + encodeURIComponent(o.slug), iconName: 'search', org: o };
      });
    results = pages.concat(opps);
  }

  const container = document.getElementById('cmdk-results');
  if (results.length === 0) {
    container.innerHTML = '<p class="cmdk-empty">No matches found.</p>';
    return;
  }
  container.innerHTML = results
    .map(function (r, i) {
      return (
        '<a href="' + r.href + '" class="cmdk-item' + (i === 0 ? ' active' : '') + '">' +
        '<span class="cmdk-item-icon">' + (r.org ? renderOrgAvatar(r.org, 26) : icon(r.iconName, '', 15)) + '</span>' +
        '<span class="cmdk-item-text"><span class="cmdk-item-title">' + escapeHtml(r.label) + '</span>' +
        (r.sub ? '<span class="cmdk-item-sub">' + escapeHtml(r.sub) + '</span>' : '') + '</span>' +
        '<span style="color:var(--text-faint)">' + icon('cornerDownLeft', '', 13) + '</span>' +
        '</a>'
      );
    })
    .join('');
  container.querySelectorAll('.cmdk-item').forEach(function (item) {
    item.addEventListener('click', function () { closeCommandPalette(); });
    item.addEventListener('mouseenter', function () {
      container.querySelectorAll('.cmdk-item').forEach(function (i) { i.classList.remove('active'); });
      item.classList.add('active');
    });
  });
}

/* ======================================================================
   VIEW: HOME
   ====================================================================== */
const HOW_IT_WORKS_STEPS = [
  { iconName: 'clipboard', title: 'Tell us what you’re interested in', desc: "A quick, skippable quiz about your interests, grade, budget, and how much time you have each week." },
  { iconName: 'sparkles', title: 'Get matched', desc: 'We score every opportunity against your profile with a transparent Match Score, so the best-fit programs float to the top.' },
  { iconName: 'columns', title: 'Compare your best options', desc: 'Line up 2–4 opportunities side by side — match, difficulty, cost, time, and recognition — before you commit.' },
  { iconName: 'rocket', title: 'Track your applications', desc: "Move opportunities through your own pipeline from saved to submitted, with deadline countdowns along the way." },
];

const USP_BLOCKS = [
  { iconName: 'target', title: 'Personalized Matching', desc: 'Every card shows a Match Score built from your grade, interests, budget, and schedule — and you can always see exactly why it matched.' },
  { iconName: 'scale', title: 'Time vs. Value', desc: "Know what you're getting into before you commit: real time commitment, cost, and CompHunt's own Opportunity Score, side by side." },
  { iconName: 'columns', title: 'Smart Comparison', desc: 'Select up to 4 competitions and compare match, difficulty, cost, deadline, and recognition in one clean table.' },
  { iconName: 'radar', title: 'Deadline Radar', desc: "See what's closing this week, this month, or later — so nothing you care about slips through the cracks." },
  { iconName: 'listChecks', title: 'Application Tracker', desc: 'Move each saved opportunity through your own pipeline: Saved → Considering → Applying → Submitted → Results.' },
];

const FAQS = [
  { q: 'Is CompHunt free to use?', a: 'Yes. Browsing, filtering, saving opportunities, comparing, and getting personalized recommendations are all free.' },
  { q: 'How is the Match Score calculated?', a: "We compare your interests, budget, location preference, grade, and desired opportunity types against each program's profile to produce a 0–100% match score. It updates instantly as you change filters or your profile, and you can click any match badge to see exactly why it scored that way." },
  { q: "What is the CompHunt Opportunity Score?", a: "It's CompHunt's own assessment of a program's overall reputation and recognition, built from our prestige rating, whether it's internationally recognized, and our editorial curation — not an official ranking, acceptance rate, or admissions predictor." },
  { q: 'Do I need to create an account?', a: 'No account is required. Your profile, saved opportunities, and application pipeline are stored locally in your browser so you can get started immediately.' },
  { q: 'Can I skip the quiz?', a: 'Absolutely. Every onboarding question has a Skip button, and you can always browse and filter opportunities manually instead.' },
  { q: 'Is this only for U.S. students?', a: "No — many opportunities are international or open to students worldwide. You can filter by country to find what's available to you." },
];

const HOME_STATS = [
  { num: String(opportunities.length) + '+', label: 'Competitions' },
  { num: String(Array.from(new Set(opportunities.map(function (o) { return o.category; }))).length), label: 'Categories' },
  { num: String(opportunities.filter(function (o) { return o.cost === 'Free'; }).length), label: 'Free to Enter' },
  { num: String(Array.from(new Set(opportunities.map(function (o) { return o.country; }))).length), label: 'Countries &amp; Regions' },
];

function renderHome(container) {
  const profile = Store.getProfile();
  const signal = hasProfileSignal(profile);
  const eligible = profile.grade ? opportunities.filter(function (o) { return o.gradeLevels.indexOf(profile.grade) !== -1; }) : opportunities;
  const recommended = signal ? getRecommendations(profile, eligible.length ? eligible : opportunities, 6) : [];
  const featured = opportunities.filter(function (o) { return o.featured; }).slice(0, 6);
  const closingSoon = opportunities
    .filter(function (o) { const d = daysRemaining(o.deadline); return d >= 0 && d <= 21; })
    .sort(function (a, b) { return new Date(a.deadline) - new Date(b.deadline); })
    .slice(0, 6);
  const freeToEnter = opportunities.filter(function (o) { return o.cost === 'Free'; }).slice(0, 6);
  const topRated = opportunities.filter(function (o) { return o.prestige >= 4; }).sort(function (a, b) { return b.prestige - a.prestige; }).slice(0, 6);

  container.innerHTML =
    '<section class="hero"><span class="hero-shape-star" aria-hidden="true"></span><span class="hero-shape-ring" aria-hidden="true"></span><div class="container-narrow">' +
    '<div class="hero-eyebrow">' + icon('sparkles', '', 14) + opportunities.length + ' real competitions, matched to you</div>' +
    '<h1>Find competitions <span class="gradient-text">worth your time.</span></h1>' +
    '<p class="subtitle">Discover opportunities matched to your interests, goals, schedule and eligibility — not just another endless list.</p>' +
    '<div class="hero-actions">' +
    '<a href="/onboarding" class="btn btn-primary btn-lg">Find My Competitions' + icon('arrowRight') + '</a>' +
    '<a href="/opportunities" class="btn btn-outline btn-lg">Explore All Competitions</a>' +
    '</div>' +
    '<p class="hero-note">Free to use. No account needed to get started.</p>' +
    '</div></section>' +

    '<div class="container"><div class="stats-row">' +
    HOME_STATS.map(function (s) { return '<div class="stat-cell"><span class="stat-num">' + s.num + '</span><span class="stat-label">' + s.label + '</span></div>'; }).join('') +
    '</div></div>' +

    '<section class="section" id="how-it-works"><div class="container">' +
    '<div class="section-header"><h2>How it works</h2><p>Four simple steps between you and your next real opportunity.</p></div>' +
    '<div class="steps-grid">' +
    HOW_IT_WORKS_STEPS.map(function (s, i) {
      return (
        '<div class="card step-card"><span class="step-num">' + (i + 1) + '</span>' +
        '<div class="step-icon">' + icon(s.iconName, '', 22) + '</div>' +
        '<h3>' + s.title + '</h3><p>' + s.desc + '</p></div>'
      );
    }).join('') +
    '</div></div></section>' +

    (signal
      ? '<section class="section section-subtle"><div class="container">' +
        '<div class="section-top-row"><div><h2 style="font-size:1.9rem;font-weight:800;letter-spacing:-.02em">Best matches for you</h2>' +
        '<p style="margin-top:.75rem;color:var(--text-muted);max-width:34rem">Ranked by your Match Score, based on the profile you gave us.</p></div>' +
        '<a href="/opportunities" class="btn btn-outline">View all ' + opportunities.length + icon('arrowRight') + '</a></div>' +
        renderCardsGrid(recommended, true, true) +
        '</div></section>'
      : '<section class="section section-subtle"><div class="container">' +
        '<div class="section-top-row"><div><h2 style="font-size:1.9rem;font-weight:800;letter-spacing:-.02em">Featured competitions</h2>' +
        '<p style="margin-top:.75rem;color:var(--text-muted);max-width:34rem">A sample of the highest-rated, real programs already in CompHunt.</p></div>' +
        '<a href="/opportunities" class="btn btn-outline">View all ' + opportunities.length + icon('arrowRight') + '</a></div>' +
        renderCardsGrid(featured, false, true) +
        '</div></section>') +

    '<section class="section"><div class="container">' +
    '<div class="section-header"><h2>Built for students who want more than a list</h2><p>CompHunt is a decision tool, not just a directory.</p></div>' +
    '<div class="usp-blocks">' +
    USP_BLOCKS.map(function (f) {
      return (
        '<div class="usp-block"><div class="usp-block-icon">' + icon(f.iconName, '', 24) + '</div>' +
        '<div><h3>' + f.title + '</h3><p>' + f.desc + '</p></div></div>'
      );
    }).join('') +
    '</div></div></section>' +

    (closingSoon.length
      ? '<section class="section section-subtle"><div class="container">' +
        '<div class="section-top-row"><div><h2 style="font-size:1.5rem;font-weight:800;letter-spacing:-.01em">⚡ Closing soon</h2>' +
        '<p style="margin-top:.5rem;color:var(--text-muted)">Deadlines within the next three weeks.</p></div>' +
        '<a href="/deadlines" class="btn btn-outline">Deadline Radar' + icon('arrowRight') + '</a></div>' +
        renderCardsGrid(closingSoon, false, true) +
        '</div></section>'
      : '') +

    (!signal && topRated.length
      ? '<section class="section"><div class="container">' +
        '<div class="section-header"><h2>High-reputation competitions</h2><p>Programs rated 4–5 by CompHunt\'s own assessment.</p></div>' +
        renderCardsGrid(topRated, false, true) +
        '</div></section>'
      : '') +

    (!signal && freeToEnter.length
      ? '<section class="section section-subtle"><div class="container">' +
        '<div class="section-header"><h2>Free to enter</h2><p>No entry fee required.</p></div>' +
        renderCardsGrid(freeToEnter, false, true) +
        '</div></section>'
      : '') +

    '<section class="section" id="faq"><div class="container-narrow">' +
    '<div class="section-header"><h2>Frequently asked questions</h2></div>' +
    '<div>' +
    FAQS.map(function (f, i) {
      return (
        '<div class="faq-item' + (i === 0 ? ' open' : '') + '">' +
        '<button type="button" class="faq-question" data-action="faq-toggle">' + f.q + icon('chevronDown') + '</button>' +
        '<div class="faq-answer"><p>' + f.a + '</p></div></div>'
      );
    }).join('') +
    '</div></div></section>';
}

/* ======================================================================
   VIEW: ONBOARDING
   ====================================================================== */
const COUNTRIES = ['United States', 'Canada', 'United Kingdom', 'India', 'Australia', 'Singapore', 'United Arab Emirates', 'Nigeria', 'Other / International'];
const AGES = [13, 14, 15, 16, 17, 18];
const GRADES = [8, 9, 10, 11, 12];
const INTERESTS = ['Business', 'Economics', 'Entrepreneurship', 'Engineering', 'Programming', 'Medicine', 'Biology', 'Physics', 'Chemistry', 'Math', 'AI', 'Writing', 'Debate', 'MUN', 'Environment', 'Art', 'Music', 'Sports', 'Finance'];
const OPPORTUNITY_TYPES = ['Competitions', 'Scholarships', 'Research', 'Summer Programs', 'Internships', 'Volunteering', 'Leadership'];
const BUDGETS = ['Free only', 'Under $100', 'Any'];
const LOCATIONS = ['Online', 'In-person', 'Both'];
const TIMES = ['2 hours', '5 hours', '10+ hours'];
const STEP_TITLES = [
  'How old are you?', 'What grade are you in?', 'Where are you located?', 'What are you into?',
  'Any career interests?', 'What kinds of opportunities interest you?', "What's your budget?",
  'Online or in-person?', 'How much time can you give it?',
];

function renderOnboarding(container) {
  const state = { step: 0, draft: { interests: [], careerInterests: '', opportunityTypes: [] } };

  container.innerHTML =
    '<div class="onboarding-wrap">' +
    '<div class="onboarding-progress-row">' +
    '<span class="brand-badge">' + icon('questmark') + '</span>' +
    '<div class="onboarding-progress-info">' +
    '<div class="onboarding-progress-top"><span id="ob-step-label"></span>' +
    '<button type="button" id="ob-skip-all">Skip quiz entirely</button></div>' +
    '<div class="progress-track"><div class="progress-fill" id="ob-progress-fill"></div></div>' +
    '</div></div>' +
    '<div class="card onboarding-card" id="ob-card"></div>' +
    '</div>';

  document.getElementById('ob-skip-all').addEventListener('click', function (e) {
    e.preventDefault();
    navigate('/opportunities');
  });

  function optionGrid(options, selected, fieldSetter, colsClass) {
    return (
      '<div class="option-grid' + (colsClass ? ' ' + colsClass : '') + '">' +
      options
        .map(function (opt) {
          return (
            '<button type="button" class="option-btn' + (selected === opt ? ' selected' : '') + '" data-value="' + escapeHtml(String(opt)) + '">' +
            escapeHtml(String(opt)) + '</button>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  function chipGrid(options, selectedArr) {
    return (
      '<div class="chip-grid">' +
      options
        .map(function (opt) {
          const active = selectedArr.indexOf(opt) !== -1;
          return (
            '<button type="button" class="chip-btn' + (active ? ' selected' : '') + '" data-value="' + escapeHtml(opt) + '">' +
            (active ? icon('check') : '') + escapeHtml(opt) + '</button>'
          );
        })
        .join('') +
      '</div>'
    );
  }

  function renderStep() {
    const d = state.draft;
    let body = '';
    switch (state.step) {
      case 0:
        body = optionGrid(AGES, d.age, null);
        break;
      case 1:
        body = optionGrid(GRADES, d.grade, null);
        break;
      case 2:
        body = '<div class="option-grid cols-2">' + COUNTRIES.map(function (c) {
          return '<button type="button" class="option-btn' + (d.country === c ? ' selected' : '') + '" data-value="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>';
        }).join('') + '</div>';
        break;
      case 3:
        body = '<p class="onboarding-hint">Pick as many as you like.</p>' + chipGrid(INTERESTS, d.interests);
        break;
      case 4:
        body =
          '<p class="onboarding-hint">Optional — tell us if you have a career direction in mind.</p>' +
          '<textarea class="onboarding-textarea" rows="4" id="ob-career" placeholder="e.g. Software engineering, medicine, investment banking, environmental policy…">' +
          escapeHtml(d.careerInterests || '') + '</textarea>';
        break;
      case 5:
        body = '<p class="onboarding-hint">Pick as many as you like.</p>' + chipGrid(OPPORTUNITY_TYPES, d.opportunityTypes);
        break;
      case 6:
        body = optionGrid(BUDGETS, d.budget, null);
        break;
      case 7:
        body = optionGrid(LOCATIONS, d.location, null);
        break;
      case 8:
        body = optionGrid(TIMES, d.timeAvailable, null);
        break;
    }

    const card = document.getElementById('ob-card');
    card.innerHTML =
      '<h1>' + STEP_TITLES[state.step] + '</h1><div style="margin-top:1.5rem">' + body + '</div>' +
      '<div class="onboarding-footer">' +
      '<button type="button" class="link-btn" id="ob-back" ' + (state.step === 0 ? 'disabled' : '') + '>' + icon('arrowLeft') + ' Back</button>' +
      '<div class="onboarding-footer-actions">' +
      '<button type="button" class="link-btn" id="ob-skip">Skip</button>' +
      '<button type="button" class="btn btn-primary" id="ob-next">' + (state.step === STEP_TITLES.length - 1 ? 'See my matches' : 'Continue') + icon('arrowRight') + '</button>' +
      '</div></div>';

    document.getElementById('ob-step-label').textContent = 'Step ' + (state.step + 1) + ' of ' + STEP_TITLES.length;
    document.getElementById('ob-progress-fill').style.width = ((state.step + 1) / STEP_TITLES.length) * 100 + '%';

    card.querySelectorAll('.option-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const val = btn.dataset.value;
        if (state.step === 0) d.age = Number(val);
        else if (state.step === 1) d.grade = Number(val);
        else if (state.step === 2) d.country = val;
        else if (state.step === 6) d.budget = val;
        else if (state.step === 7) d.location = val;
        else if (state.step === 8) d.timeAvailable = val;
        renderStep();
      });
    });
    card.querySelectorAll('.chip-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const val = btn.dataset.value;
        const arr = state.step === 3 ? d.interests : d.opportunityTypes;
        const idx = arr.indexOf(val);
        if (idx === -1) arr.push(val);
        else arr.splice(idx, 1);
        renderStep();
      });
    });
    const careerInput = document.getElementById('ob-career');
    if (careerInput) careerInput.addEventListener('input', function (e) { d.careerInterests = e.target.value; });

    document.getElementById('ob-back').addEventListener('click', function () {
      if (state.step > 0) { state.step -= 1; renderStep(); }
    });
    document.getElementById('ob-skip').addEventListener('click', goNext);
    document.getElementById('ob-next').addEventListener('click', goNext);
  }

  function goNext() {
    if (state.step === STEP_TITLES.length - 1) {
      Store.updateProfile(Object.assign({}, state.draft, { onboardingComplete: true }));
      navigate('/opportunities');
    } else {
      state.step += 1;
      renderStep();
    }
  }

  renderStep();
}

/* ======================================================================
   VIEW: OPPORTUNITIES (browse / filter / search)
   ====================================================================== */
const CATEGORIES = ['Business', 'STEM', 'Research', 'Writing', 'Arts', 'Olympiads', 'Hackathons', 'MUN & Debate', 'Leadership', 'Summer Programs', 'Internships', 'Scholarships', 'Volunteering'];
const DIFFICULTIES = ['Easy', 'Moderate', 'Competitive', 'Elite'];
const COST_TIERS = ['Free', 'Under $100', '$100-$500', '$500+'];
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DEFAULT_FILTERS = { category: 'All', country: 'All', difficulty: 'All', cost: 'All', grade: 'All', deadlineWithin: 'Any', opensMonth: 'Any', freeOnly: false, noEssay: false, onlineOnly: false, beginnerFriendly: false };

function getOpensMonth(o) {
  const label = o.timeline && o.timeline[0] && o.timeline[0].date;
  if (!label) return null;
  for (let i = 0; i < MONTH_NAMES.length; i++) {
    if (label.indexOf(MONTH_NAMES[i]) !== -1) return i + 1;
  }
  return null;
}

/* Lightweight natural-language search: detects filter-shaped phrases in free text
   ("free international business competitions for grade 9 under 5 hours a week")
   and translates them into real filter values, using only fields that exist on
   Opportunity. Returns the filters to apply plus the leftover text to keyword-search. */
function parseNaturalQuery(raw, countries) {
  let text = ' ' + raw.toLowerCase() + ' ';
  const filters = {};
  const strip = function (re) { text = text.replace(re, ' '); };

  if (/\bfree\b/.test(text) && !/\bfree\s*(response|write)/.test(text)) { filters.freeOnly = true; strip(/\bfree\b/); }
  if (/\bno[\s-]?essay\b/.test(text)) { filters.noEssay = true; strip(/\bno[\s-]?essay(s)?\b/); }
  if (/\bonline\b/.test(text)) { filters.onlineOnly = true; strip(/\bonline\b/); }
  if (/\bbeginner([\s-]friendly)?\b/.test(text)) { filters.beginnerFriendly = true; strip(/\bbeginner([\s-]friendly)?\b/); }
  if (/\binternational(ly)?\b/.test(text)) { filters.country = 'International'; strip(/\binternational(ly)?\b/); }
  else if (countries) {
    countries.forEach(function (c) {
      if (c !== 'International' && text.indexOf(c.toLowerCase()) !== -1) {
        filters.country = c;
        text = text.replace(new RegExp('\\b' + c.toLowerCase() + '\\b', 'g'), ' ');
      }
    });
  }
  const gradeMatch = text.match(/grade\s*(\d{1,2})/);
  if (gradeMatch) { filters.grade = Number(gradeMatch[1]); strip(/grade\s*\d{1,2}/); }
  const hourMatch = text.match(/under\s*(\d{1,2})\s*hours?/);
  if (hourMatch) { filters.maxHoursPerWeek = Number(hourMatch[1]); strip(/under\s*\d{1,2}\s*hours?(\s*(a|per)\s*week)?/); }
  if (/closing\s*(this\s*month|soon)/.test(text)) { filters.deadlineWithin = '30'; strip(/closing\s*(this\s*month|soon)/); }
  else if (/closing\s*this\s*week/.test(text)) { filters.deadlineWithin = '7'; strip(/closing\s*this\s*week/); }
  if (/prestigious|elite|highly[\s-]?competitive/.test(text)) { filters.difficulty = 'Elite'; strip(/prestigious|elite|highly[\s-]?competitive/); }
  MONTH_NAMES.forEach(function (m, i) {
    if (new RegExp('\\bopen(s|ing)?\\s*(in\\s*)?' + m.toLowerCase() + '\\b').test(text)) {
      filters.opensMonth = String(i + 1);
      text = text.replace(new RegExp('open(s|ing)?\\s*(in\\s*)?' + m.toLowerCase(), 'g'), ' ');
    }
  });
  CATEGORIES.forEach(function (c) {
    const cLower = c.toLowerCase();
    if (text.indexOf(cLower) !== -1 || (cLower === 'stem' && /\bscience\b/.test(text))) {
      filters.category = c;
      text = text.replace(new RegExp('\\b' + cLower.replace(/[&]/g, '\\&') + '\\b', 'g'), ' ');
    }
  });
  strip(/\b(competitions?|opportunit(y|ies)|programs?|for|students?|from|a|the|and|me|i\s*can\s*enter|entries?)\b/g);
  return { filters: filters, remaining: text.replace(/\s+/g, ' ').trim() };
}

function renderOpportunities(container, params) {
  const countries = Array.from(new Set(opportunities.map(function (o) { return o.country; }))).sort();
  const grades = Array.from(new Set(opportunities.reduce(function (acc, o) { return acc.concat(o.gradeLevels); }, []))).sort(function (a, b) { return a - b; });

  const state = { search: '', searchKeywords: null, maxHoursPerWeek: null, detectedFilters: [], filters: Object.assign({}, DEFAULT_FILTERS), quizFiltersApplied: [] };
  const categoryParam = params.get('category');
  if (categoryParam) state.filters.category = categoryParam;

  const profile = Store.getProfile();
  const signal = hasProfileSignal(profile);

  /* Apply the quiz's objective, eligibility-style answers (grade, free-only budget,
     online-only preference, weekly time limit) as real filters — not just sort signals —
     so completing the quiz actually narrows the list. Taste signals (interests, opportunity
     types) stay sort-only, since one interest shouldn't hide an otherwise-good match. */
  if (signal && !categoryParam) {
    if (profile.grade && grades.indexOf(profile.grade) !== -1) {
      state.filters.grade = profile.grade;
      state.quizFiltersApplied.push('Grade ' + profile.grade);
    }
    if (profile.budget === 'Free only') {
      state.filters.freeOnly = true;
      state.quizFiltersApplied.push('Free only');
    }
    if (profile.location === 'Online') {
      state.filters.onlineOnly = true;
      state.quizFiltersApplied.push('Online');
    }
    const quizMaxHours = maxHoursFromProfile(profile);
    if (quizMaxHours != null) {
      state.maxHoursPerWeek = quizMaxHours;
      state.quizFiltersApplied.push('Under ' + quizMaxHours + ' hrs/week');
    }
  }

  container.innerHTML =
    '<div class="container mt-page">' +
    '<div class="page-header"><h1>Discover Opportunities</h1><p id="opp-subtitle"></p></div>' +
    '<div class="search-row">' +
    '<div class="search-input-wrap">' + icon('search') + '<input type="text" class="search-input" id="opp-search" placeholder="Try “free business competitions for grade 9” or a name…" /></div>' +
    '<button type="button" class="btn btn-outline filters-toggle-btn" id="mobile-filter-btn">' + icon('sliders') + 'Filters</button>' +
    '</div>' +
    '<div class="search-hint" id="search-hint"></div>' +
    '<div class="opportunities-layout">' +
    '<aside class="filters-sidebar"><div id="filter-panel-desktop"></div></aside>' +
    '<div class="mobile-filter-sheet" id="mobile-filter-sheet" hidden>' +
    '<div class="mobile-filter-panel">' +
    '<div class="mobile-filter-head"><span style="font-weight:600;font-size:.875rem">Filters</span>' +
    '<button type="button" class="icon-btn" id="mobile-filter-close">' + icon('x') + '</button></div>' +
    '<div id="filter-panel-mobile"></div>' +
    '</div></div>' +
    '<div><p class="results-count" id="results-count"></p><div id="results-grid"></div></div>' +
    '</div></div>';

  if (state.quizFiltersApplied.length) {
    document.getElementById('opp-subtitle').innerHTML =
      'Filtered and sorted from your quiz answers (' + state.quizFiltersApplied.map(escapeHtml).join(', ') + ') — ' +
      '<button type="button" class="link-btn" id="clear-quiz-filters" style="display:inline;padding:0;font:inherit">show everything instead</button>.';
    const clearBtn = document.getElementById('clear-quiz-filters');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        state.filters = Object.assign({}, DEFAULT_FILTERS);
        state.maxHoursPerWeek = null;
        state.quizFiltersApplied = [];
        document.getElementById('opp-subtitle').textContent = signal
          ? 'Sorted by how well each opportunity fits your profile.'
          : 'Browse all opportunities, or take the quiz to get a personalized Match Score.';
        update();
      });
    }
  } else {
    document.getElementById('opp-subtitle').textContent = signal
      ? 'Sorted by how well each opportunity fits your profile.'
      : 'Browse all opportunities, or take the quiz to get a personalized Match Score.';
  }

  function filterPanelHtml() {
    const f = state.filters;
    const isDefault = JSON.stringify(f) === JSON.stringify(DEFAULT_FILTERS);
    function selectField(label, key, options) {
      return (
        '<label class="filter-field"><span>' + label + '</span><select data-filter="' + key + '">' +
        options.map(function (opt) {
          const val = typeof opt === 'object' ? opt.value : opt;
          const text = typeof opt === 'object' ? opt.label : opt;
          return '<option value="' + escapeHtml(String(val)) + '"' + (String(f[key]) === String(val) ? ' selected' : '') + '>' + escapeHtml(text) + '</option>';
        }).join('') +
        '</select></label>'
      );
    }
    function pillField(label, key, options) {
      return (
        '<div class="filter-field filter-pill-field"><span>' + label + '</span>' +
        '<div class="filter-pill-row">' +
        options.map(function (opt) {
          const val = typeof opt === 'object' ? opt.value : opt;
          const text = typeof opt === 'object' ? opt.label : opt;
          const active = String(f[key]) === String(val);
          return '<button type="button" class="filter-pill' + (active ? ' active' : '') + '" data-filter="' + key + '" data-filter-type="pill" data-value="' + escapeHtml(String(val)) + '">' + escapeHtml(text) + '</button>';
        }).join('') +
        '</div></div>'
      );
    }
    const smartFilters = [
      { key: 'freeOnly', label: 'Free' }, { key: 'noEssay', label: 'No essays' },
      { key: 'onlineOnly', label: 'Online' }, { key: 'beginnerFriendly', label: 'Beginner friendly' },
    ];
    return (
      '<div class="card filter-panel">' +
      '<div class="filter-panel-head"><h3>Filters</h3>' +
      (isDefault ? '' : '<button type="button" class="filter-reset" data-filter-reset="1">' + icon('rotateCcw') + 'Reset</button>') +
      '</div>' +
      pillField('Category', 'category', ['All'].concat(CATEGORIES)) +
      selectField('Country', 'country', ['All'].concat(countries)) +
      pillField('Difficulty', 'difficulty', ['All'].concat(DIFFICULTIES)) +
      selectField('Cost', 'cost', ['All'].concat(COST_TIERS)) +
      selectField('Grade', 'grade', ['All'].concat(grades.map(function (g) { return { value: g, label: 'Grade ' + g }; }))) +
      selectField('Deadline', 'deadlineWithin', [{ value: 'Any', label: 'Any time' }, { value: '7', label: 'Next 7 days' }, { value: '30', label: 'Next 30 days' }, { value: '90', label: 'Next 3 months' }]) +
      selectField('Opens in', 'opensMonth', [{ value: 'Any', label: 'Any month' }].concat(MONTH_NAMES.map(function (m, i) { return { value: String(i + 1), label: m }; }))) +
      '<span class="smart-filters-label">Smart filters</span>' +
      '<div class="smart-filter-chips">' +
      smartFilters.map(function (sf) {
        return '<button type="button" class="smart-chip' + (f[sf.key] ? ' selected' : '') + '" data-filter="' + sf.key + '" data-filter-type="toggle">' + sf.label + '</button>';
      }).join('') +
      '</div></div>'
    );
  }

  function bindFilterPanel(el) {
    el.querySelectorAll('select[data-filter]').forEach(function (sel) {
      sel.addEventListener('change', function () {
        state.filters[sel.dataset.filter] = sel.value;
        update();
      });
    });
    el.querySelectorAll('[data-filter-type="toggle"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const key = btn.dataset.filter;
        state.filters[key] = !state.filters[key];
        update();
      });
    });
    el.querySelectorAll('[data-filter-type="pill"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.filters[btn.dataset.filter] = btn.dataset.value;
        update();
      });
    });
    const resetBtn = el.querySelector('[data-filter-reset]');
    if (resetBtn) resetBtn.addEventListener('click', function () { state.filters = Object.assign({}, DEFAULT_FILTERS); update(); });
  }

  function computeResults() {
    const q = (state.searchKeywords != null ? state.searchKeywords : state.search).trim().toLowerCase();
    const f = state.filters;
    let filtered = opportunities.filter(function (o) {
      if (q) {
        const haystack = (o.title + ' ' + o.organizer + ' ' + o.category + ' ' + o.tags.join(' ')).toLowerCase();
        if (haystack.indexOf(q) === -1) return false;
      }
      if (f.category !== 'All' && o.category !== f.category) return false;
      if (f.country !== 'All' && o.country !== f.country) return false;
      if (f.difficulty !== 'All' && o.difficulty !== f.difficulty) return false;
      if (f.cost !== 'All' && o.cost !== f.cost) return false;
      if (f.grade !== 'All' && o.gradeLevels.indexOf(Number(f.grade)) === -1) return false;
      if (f.deadlineWithin !== 'Any') {
        const days = daysRemaining(o.deadline);
        if (days < 0 || days > Number(f.deadlineWithin)) return false;
      }
      if (f.opensMonth !== 'Any' && getOpensMonth(o) !== Number(f.opensMonth)) return false;
      if (f.freeOnly && o.cost !== 'Free') return false;
      if (f.noEssay && !o.noEssay) return false;
      if (f.onlineOnly && o.locationType === 'In-person') return false;
      if (f.beginnerFriendly && !o.beginnerFriendly) return false;
      if (state.maxHoursPerWeek != null) {
        const nums = String(o.hoursPerWeek).match(/\d+/g);
        const maxFound = nums ? Math.max.apply(null, nums.map(Number)) : null;
        if (maxFound != null && maxFound > state.maxHoursPerWeek) return false;
      }
      return true;
    });
    return getRecommendations(profile, filtered);
  }

  function update() {
    document.getElementById('filter-panel-desktop').innerHTML = filterPanelHtml();
    document.getElementById('filter-panel-mobile').innerHTML = filterPanelHtml();
    bindFilterPanel(document.getElementById('filter-panel-desktop'));
    bindFilterPanel(document.getElementById('filter-panel-mobile'));

    const results = computeResults();
    document.getElementById('results-count').textContent = results.length + (results.length === 1 ? ' opportunity found' : ' opportunities found');
    const grid = document.getElementById('results-grid');
    if (results.length === 0) {
      grid.innerHTML = renderEmptyState('compass', 'No opportunities match your filters', 'Try loosening a filter or clearing your search to see more programs.', '<button type="button" class="btn btn-outline btn-sm" id="clear-filters-btn">Clear all filters</button>');
      const clearBtn = document.getElementById('clear-filters-btn');
      if (clearBtn) clearBtn.addEventListener('click', function () {
        state.search = '';
        state.searchKeywords = null;
        state.maxHoursPerWeek = null;
        document.getElementById('opp-search').value = '';
        const hintEl = document.getElementById('search-hint');
        if (hintEl) hintEl.innerHTML = '';
        state.filters = Object.assign({}, DEFAULT_FILTERS);
        update();
      });
    } else {
      grid.innerHTML = renderCardsGrid(results, signal, true);
    }
  }

  const FILTER_LABELS = {
    freeOnly: 'Free', noEssay: 'No essay', onlineOnly: 'Online', beginnerFriendly: 'Beginner friendly',
    country: function (v) { return v; }, grade: function (v) { return 'Grade ' + v; },
    deadlineWithin: function (v) { return v === '7' ? 'Closing this week' : 'Closing within ' + v + ' days'; },
    difficulty: function (v) { return v; }, category: function (v) { return v; },
    opensMonth: function (v) { return 'Opens ' + MONTH_NAMES[Number(v) - 1]; },
  };
  state.autoDetectedKeys = [];
  document.getElementById('opp-search').addEventListener('input', function (e) {
    state.search = e.target.value;
    const parsed = parseNaturalQuery(e.target.value, countries);
    state.searchKeywords = parsed.remaining;
    state.maxHoursPerWeek = typeof parsed.filters.maxHoursPerWeek === 'number' ? parsed.filters.maxHoursPerWeek : null;
    // clear filters auto-set by the previous keystroke's parse before applying this one,
    // so removing a phrase (e.g. deleting "free") releases that filter — but never touches
    // filters the user set manually via the sidebar, since those keys are never in this list.
    state.autoDetectedKeys.forEach(function (key) { state.filters[key] = DEFAULT_FILTERS[key]; });
    const detected = [];
    const nextAutoKeys = [];
    Object.keys(parsed.filters).forEach(function (key) {
      if (key === 'maxHoursPerWeek') { if (typeof parsed.filters[key] === 'number') detected.push('Under ' + parsed.filters[key] + ' hrs/week'); return; }
      state.filters[key] = parsed.filters[key];
      nextAutoKeys.push(key);
      const labeler = FILTER_LABELS[key];
      detected.push(typeof labeler === 'function' ? labeler(parsed.filters[key]) : labeler);
    });
    state.autoDetectedKeys = nextAutoKeys;
    state.detectedFilters = detected;

    document.getElementById('filter-panel-desktop').innerHTML = filterPanelHtml();
    document.getElementById('filter-panel-mobile').innerHTML = filterPanelHtml();
    bindFilterPanel(document.getElementById('filter-panel-desktop'));
    bindFilterPanel(document.getElementById('filter-panel-mobile'));

    const hint = document.getElementById('search-hint');
    if (hint) hint.innerHTML = detected.length
      ? 'Applied: ' + detected.map(function (d) { return '<span class="search-hint-chip">' + escapeHtml(d) + '</span>'; }).join('')
      : '';

    const grid = document.getElementById('results-grid');
    const results = computeResults();
    document.getElementById('results-count').textContent = results.length + (results.length === 1 ? ' opportunity found' : ' opportunities found');
    grid.innerHTML = results.length === 0
      ? renderEmptyState('compass', 'No opportunities match your filters', 'Try loosening a filter or clearing your search to see more programs.', '')
      : renderCardsGrid(results, signal, true);
  });

  document.getElementById('mobile-filter-btn').addEventListener('click', function () {
    document.getElementById('mobile-filter-sheet').removeAttribute('hidden');
  });
  document.getElementById('mobile-filter-close').addEventListener('click', function () {
    document.getElementById('mobile-filter-sheet').setAttribute('hidden', '');
  });
  document.getElementById('mobile-filter-sheet').addEventListener('click', function (e) {
    if (e.target.id === 'mobile-filter-sheet') e.currentTarget.setAttribute('hidden', '');
  });

  update();
}

/* ======================================================================
   VIEW: OPPORTUNITY DETAIL
   ====================================================================== */
const CHECKLIST_LABELS = [
  { key: 'essay', label: 'Essay' }, { key: 'resume', label: 'Resume' },
  { key: 'recommendationLetter', label: 'Recommendation Letter' }, { key: 'transcript', label: 'Transcript' },
  { key: 'portfolio', label: 'Portfolio' }, { key: 'interview', label: 'Interview' },
];

function detailSection(iconName, title, innerHtml) {
  return (
    '<section class="card detail-section">' +
    '<div class="detail-section-head"><span class="detail-section-icon">' + icon(iconName, '', 16) + '</span><h2>' + title + '</h2></div>' +
    innerHtml + '</section>'
  );
}

function renderDetail(container, slug) {
  const o = getOpportunityBySlug(decodeURIComponent(slug));
  if (!o) {
    renderNotFound(container);
    return;
  }
  Store.addRecent(o.slug);

  const profile = Store.getProfile();
  const signal = hasProfileSignal(profile);
  const fitScore = computeFitScore(profile, o);
  const matchReasons = getMatchReasons(profile, o);
  const oppScore = computeOpportunityScore(o);
  const reputation = getReputationAssessment(o);
  const similar = getSimilarOpportunities(o);

  const eligibilityHtml = '<ul class="list-check">' + o.eligibility.map(function (e) { return '<li>' + icon('checkCircle', '', 16) + '<span>' + escapeHtml(e) + '</span></li>'; }).join('') + '</ul>';
  const processHtml = '<ol class="numbered-steps">' + o.applicationProcess.map(function (s, i) { return '<li><span class="num">' + (i + 1) + '</span><span>' + escapeHtml(s) + '</span></li>'; }).join('') + '</ol>';
  const timelineHtml = '<ol class="timeline">' + o.timeline.map(function (t) { return '<li><span class="dot"></span><p class="t-label">' + escapeHtml(t.label) + '</p><p class="t-date">' + escapeHtml(t.date) + '</p></li>'; }).join('') + '</ol>';
  const benefitsHtml = '<ul class="list-check benefits">' + o.benefits.map(function (b) { return '<li>' + icon('checkCircle', '', 16) + '<span>' + escapeHtml(b) + '</span></li>'; }).join('') + '</ul>';
  const skillsHtml = '<div class="skill-chips">' + o.skillsDeveloped.map(function (s) { return renderBadge(s, 'brand'); }).join('') + '</div>';
  const tipsHtml = '<ul class="list-check tips">' + o.applicationTips.map(function (t) { return '<li>' + icon('lightbulb', '', 16) + '<span>' + escapeHtml(t) + '</span></li>'; }).join('') + '</ul>';
  const checklistHtml =
    '<div class="checklist-grid">' +
    CHECKLIST_LABELS.map(function (c) {
      const required = o.checklist[c.key];
      return '<div class="checklist-item ' + (required ? 'required' : 'not-required') + '">' + icon(required ? 'checkCircle' : 'xCircle') + '<span>' + c.label + '</span></div>';
    }).join('') + '</div>';
  const prizeHtml = o.prize
    ? '<div class="prize-callout">' + icon('trophy') + '<div><h3>Prize</h3><p>' + escapeHtml(o.prize) + '</p></div></div>'
    : '';

  // "Who is this for?" — synthesized only from real fields (grade levels, eligibility, difficulty, beginner flag)
  const gradeMin = Math.min.apply(null, o.gradeLevels);
  const gradeMax = Math.max.apply(null, o.gradeLevels);
  const whoForHtml =
    '<ul class="list-check">' +
    '<li>' + icon('graduationCap', '', 16) + '<span>Students in ' + (gradeMin === gradeMax ? 'grade ' + gradeMin : 'grades ' + gradeMin + '–' + gradeMax) + '</span></li>' +
    (o.beginnerFriendly
      ? '<li>' + icon('checkCircle', '', 16) + '<span>No prior experience required — this program is beginner friendly</span></li>'
      : '<li>' + icon('checkCircle', '', 16) + '<span>Students with some prior experience — rated ' + o.difficulty + ' difficulty</span></li>') +
    '<li>' + icon('checkCircle', '', 16) + '<span>' + escapeHtml(o.eligibility[0]) + '</span></li>' +
    '</ul>';

  // Time vs Value — a simple visual comparison built only from verified fields (no fabricated benchmarks)
  const costRank = { Free: 1, 'Under $100': 2, '$100-$500': 3, '$500+': 4 };
  const timeRankGuess = /50\+|40\+|full-?time/i.test(o.hoursPerWeek) ? 5 : /10\+|20|15/i.test(o.hoursPerWeek) ? 4 : /5-|6-|8/i.test(o.hoursPerWeek) ? 3 : /2-|3-|1-/i.test(o.hoursPerWeek) ? 2 : 2;
  const timeVsValueHtml =
    '<div class="tvv-grid">' +
    '<div class="tvv-row"><span class="tvv-label">Time Commitment</span><div class="tvv-bar"><div class="tvv-fill" style="width:' + (timeRankGuess * 20) + '%"></div></div><span class="tvv-value">' + escapeHtml(o.hoursPerWeek) + '</span></div>' +
    '<div class="tvv-row"><span class="tvv-label">Cost</span><div class="tvv-bar"><div class="tvv-fill tvv-fill-purple" style="width:' + ((costRank[o.cost] || 2) * 25) + '%"></div></div><span class="tvv-value">' + escapeHtml(o.cost) + '</span></div>' +
    '<div class="tvv-row"><span class="tvv-label">Recognition</span><div class="tvv-bar"><div class="tvv-fill tvv-fill-black" style="width:' + (o.country === 'International' ? 100 : 65) + '%"></div></div><span class="tvv-value">' + escapeHtml(reputation.recognition) + '</span></div>' +
    '<div class="tvv-row"><span class="tvv-label">Reputation</span><div class="tvv-bar"><div class="tvv-fill" style="width:' + (o.prestige * 20) + '%"></div></div><span class="tvv-value">' + reputation.reputation + '</span></div>' +
    '</div>';

  const whyMatchHtml = signal
    ? '<div class="card detail-section why-match-card">' +
      '<div class="detail-section-head"><span class="detail-section-icon">' + icon('target', '', 16) + '</span><h2>' + fitScore + '% match because</h2></div>' +
      (matchReasons.length
        ? '<ul class="list-check">' + matchReasons.map(function (r) { return '<li>' + icon('checkCircle', 'match-check', 16) + '<span>' + escapeHtml(r) + '</span></li>'; }).join('') + '</ul>'
        : '<p style="color:var(--text-muted);font-size:.9rem">This program didn\'t strongly match your stated preferences — but you\'re welcome to explore it anyway.</p>') +
      '</div>'
    : '';

  container.innerHTML =
    '<div class="container mt-page" style="max-width:72rem">' +
    '<a href="/opportunities" class="detail-back">' + icon('arrowLeft') + 'All opportunities</a>' +
    '<div class="detail-layout">' +
    '<div class="detail-main">' +
    '<div class="card detail-header-card">' +
    '<div class="detail-header-top">' + renderBadge(o.category, categoryTone(o.category)) +
    '<div style="display:flex;align-items:center;gap:.5rem">' + (signal ? renderMatchBadge(fitScore, o.slug) : '') +
    '<span class="opp-score-pill" title="CompHunt Opportunity Score — our own assessment, not an official ranking">' + icon('award', '', 14) + ' ' + oppScore + '/100</span></div></div>' +
    '<div class="detail-title-row">' + renderOrgAvatar(o, 44) + '<div><h1>' + escapeHtml(o.title) + '</h1><p class="detail-organizer">' + escapeHtml(o.organizer) + '</p></div></div>' +
    '<div class="detail-badge-row">' + renderStars(o.prestige) + renderDifficultyBadge(o.difficulty) + renderBadge(o.cost, o.cost === 'Free' ? 'green' : 'neutral') +
    (o.beginnerFriendly ? renderBadge('Beginner friendly', 'purple') : '') + '</div>' +
    '<p class="detail-desc">' + escapeHtml(o.shortDescription) + '</p>' +
    '<div class="detail-deadline-row">' + renderDeadline(o.deadline) + '</div>' +
    '<div class="detail-actions">' +
    '<a class="btn btn-primary" href="' + escapeHtml(o.officialWebsite) + '" target="_blank" rel="noopener noreferrer">Visit Official Website' + icon('externalLink') + '</a>' +
    renderBookmarkButton(o.slug, 'lg') +
    '</div></div>' +

    whyMatchHtml +

    detailSection('sparkles', "Why It's Worth Considering", benefitsHtml) +
    detailSection('graduationCap', 'Who Is This For?', whoForHtml) +
    '<div class="card detail-section">' +
    '<div class="detail-section-head"><span class="detail-section-icon">' + icon('scale', '', 16) + '</span><h2>Time vs. Value</h2></div>' +
    timeVsValueHtml + '</div>' +

    detailSection('fileText', 'Description', '<p>' + escapeHtml(o.description) + '</p>') +
    detailSection('graduationCap', 'Eligibility', eligibilityHtml) +
    detailSection('listChecks', 'Application Process', processHtml) +
    detailSection('calendar', 'Timeline', timelineHtml) +
    '<div class="two-col">' + detailSection('checkCircle', 'Benefits', benefitsHtml) + detailSection('graduationCap', 'Skills Developed', skillsHtml) + '</div>' +
    prizeHtml +
    detailSection('listChecks', 'Application Checklist', checklistHtml) +
    detailSection('lightbulb', 'Application Tips', tipsHtml) +

    '<div class="card detail-section verification-card">' +
    '<div class="detail-section-head"><span class="detail-section-icon">' + icon('checkCircle', '', 16) + '</span><h2>Source &amp; Verification</h2></div>' +
    '<div class="verification-row"><span class="verified-badge-unverified">Last verified: Not yet verified</span>' +
    '<a href="' + escapeHtml(o.officialWebsite) + '" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">View official source' + icon('externalLink', '', 13) + '</a></div>' +
    '<p style="margin-top:.75rem;font-size:.8rem;color:var(--text-faint)">Always confirm current deadlines, eligibility, and fees on the official website before applying — details can change.</p>' +
    '</div>' +
    '</div>' +

    '<aside class="detail-sidebar">' +
    '<div class="card quick-facts">' +
    '<h3>Quick facts</h3><dl>' +
    (function () {
      const status = opensStatus(o);
      if (!status) return '';
      return '<div class="fact-row' + (status.isStatus ? ' fact-row-status' : '') + '"><dt>' + icon('sparkles') + ' ' + escapeHtml(status.label) + '</dt><dd>' + escapeHtml(status.value) + '</dd></div>';
    })() +
    '<div class="fact-row"><dt>' + icon('calendar') + ' Deadline</dt><dd>' + formatDate(o.deadline) + '</dd></div>' +
    '<div class="fact-row"><dt>Countdown</dt><dd>' + renderDeadline(o.deadline) + '</dd></div>' +
    '<div class="fact-row"><dt>' + icon('banknote') + ' Cost</dt><dd>' + escapeHtml(o.cost) + '</dd></div>' +
    '<div class="fact-row"><dt>' + icon('globe') + ' Format</dt><dd>' + escapeHtml(o.locationType) + '</dd></div>' +
    '<div class="fact-row"><dt>' + icon('mapPin') + ' Country</dt><dd>' + escapeHtml(o.country) + '</dd></div>' +
    '<div class="fact-row"><dt>' + icon('clock') + ' Time commitment</dt><dd>' + escapeHtml(o.timeCommitment) + '</dd></div>' +
    '<div class="fact-row"><dt>Grade levels</dt><dd>' + o.gradeLevels.join(', ') + '</dd></div>' +
    '</dl><p class="cost-note">' + escapeHtml(o.costDetail) + '</p></div>' +

    '<div class="card quick-facts reputation-card">' +
    '<h3>CompHunt Assessment' + icon('info', 'reputation-info', 13) + '</h3>' +
    '<p class="reputation-disclaimer">Our own editorial read, not an official ranking or acceptance-rate estimate.</p>' +
    '<dl>' +
    '<div class="fact-row"><dt>Reputation</dt><dd>' + reputation.reputation + '</dd></div>' +
    '<div class="fact-row"><dt>Competitiveness</dt><dd>' + reputation.competitiveness + '</dd></div>' +
    '<div class="fact-row"><dt>Recognition</dt><dd>' + escapeHtml(reputation.recognition) + '</dd></div>' +
    '<div class="fact-row"><dt>Opportunity Score</dt><dd>' + oppScore + '/100</dd></div>' +
    '</dl></div>' +
    '</aside>' +
    '</div>' +

    (similar.length > 0
      ? '<div class="similar-section"><h2>Similar Opportunities</h2>' + renderCardsGrid(similar, false, true) + '</div>'
      : '') +
    '</div>';
}

/* ======================================================================
   VIEW: DASHBOARD
   ====================================================================== */
/* ======================================================================
   VIEW: COMPARE
   ====================================================================== */
function renderCompare(container) {
  const slugs = CompareStore.get();
  const items = slugs.map(getOpportunityBySlug).filter(Boolean);
  const profile = Store.getProfile();
  const signal = hasProfileSignal(profile);

  if (items.length < 2) {
    container.innerHTML =
      '<div class="container mt-page">' +
      '<div class="page-header"><h1>Compare Competitions</h1><p>Select 2–4 opportunities to compare them side by side.</p></div>' +
      renderEmptyState('columns', 'Nothing to compare yet', 'Browse opportunities and check the compare box on any card — it appears in the top-left corner.',
        '<a href="/opportunities" class="btn btn-primary">Browse Opportunities</a>') +
      '</div>';
    return;
  }

  const rows = [
    { label: 'Your Match', render: function (o) { return signal ? computeFitScore(profile, o) + '%' : '—'; } },
    { label: 'CompHunt Rating', render: function (o) { return getReputationAssessment(o).reputation; } },
    { label: 'Competitiveness', render: function (o) { return getReputationAssessment(o).competitiveness; } },
    { label: 'Recognition', render: function (o) { return getReputationAssessment(o).recognition; } },
    { label: 'Opportunity Score', render: function (o) { return computeOpportunityScore(o) + '/100'; } },
    { label: 'Difficulty', render: function (o) { return o.difficulty; } },
    { label: 'Cost', render: function (o) { return o.cost; } },
    { label: 'Time Commitment', render: function (o) { return o.hoursPerWeek; } },
    { label: 'Format', render: function (o) { return o.locationType; } },
    { label: 'Country', render: function (o) { return o.country; } },
    { label: 'Grade Levels', render: function (o) {
      const gMin = Math.min.apply(null, o.gradeLevels);
      const gMax = Math.max.apply(null, o.gradeLevels);
      return gMin === gMax ? 'Grade ' + gMin : 'Grades ' + gMin + '–' + gMax;
    } },
    { label: 'Deadline', render: function (o) { return countdownLabel(o.deadline); } },
    { label: 'No Essay Required', render: function (o) { return o.noEssay ? 'Yes' : 'No'; } },
  ];

  container.innerHTML =
    '<div class="container mt-page">' +
    '<div class="page-header"><h1>Compare Competitions</h1><p>' + items.length + ' opportunities selected, side by side.</p></div>' +
    '<div class="compare-table-wrap"><table class="compare-table">' +
    '<thead><tr><th class="compare-row-label"></th>' +
    items.map(function (o) {
      return '<th><div class="compare-col-head">' + renderBadge(o.category, categoryTone(o.category)) +
        '<a href="/opportunities/' + encodeURIComponent(o.slug) + '"><strong>' + escapeHtml(truncate(o.title, 42)) + '</strong></a>' +
        '<span>' + escapeHtml(o.organizer) + '</span>' +
        '<button type="button" class="btn btn-ghost btn-sm" data-action="compare-table-remove" data-slug="' + escapeHtml(o.slug) + '">Remove</button>' +
        '</div></th>';
    }).join('') +
    '</tr></thead><tbody>' +
    rows.map(function (r) {
      return '<tr><td class="compare-row-label">' + escapeHtml(r.label) + '</td>' +
        items.map(function (o) { return '<td>' + escapeHtml(String(r.render(o))) + '</td>'; }).join('') +
        '</tr>';
    }).join('') +
    '</tbody></table></div>' +
    '</div>';

  container.querySelectorAll('[data-action="compare-table-remove"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      CompareStore.toggle(btn.dataset.slug);
      renderCompareBar();
      renderCompare(container);
    });
  });
}

/* ======================================================================
   VIEW: DEADLINE RADAR
   ====================================================================== */
function renderDeadlineRadar(container) {
  const profile = Store.getProfile();
  const signal = hasProfileSignal(profile);
  const active = opportunities.filter(function (o) { return countdownUrgency(o.deadline) !== 'passed'; });
  const withScores = signal ? getRecommendations(profile, active) : active.map(function (o) { return Object.assign({}, o, { fitScore: null }); });
  const sorted = withScores.slice().sort(function (a, b) { return new Date(a.deadline) - new Date(b.deadline); });

  const now = Date.now();
  const buckets = {
    week: [], month: [], quarter: [], later: [],
  };
  sorted.forEach(function (o) {
    const days = daysRemaining(o.deadline);
    if (days <= 7) buckets.week.push(o);
    else if (days <= 30) buckets.month.push(o);
    else if (days <= 90) buckets.quarter.push(o);
    else buckets.later.push(o);
  });

  function bucketSection(title, emoji, items, tone) {
    if (items.length === 0) return '';
    return (
      '<div class="radar-bucket">' +
      '<div class="radar-bucket-head"><span class="radar-bucket-title">' + (emoji ? emoji + ' ' : '') + title + '</span><span class="radar-bucket-count">' + items.length + '</span></div>' +
      '<div class="radar-list">' +
      items.slice(0, 30).map(function (o) {
        return (
          '<a href="/opportunities/' + encodeURIComponent(o.slug) + '" class="radar-item radar-' + tone + '">' +
          '<div class="radar-item-main">' + renderBadge(o.category, categoryTone(o.category)) +
          '<span class="radar-item-title">' + escapeHtml(o.title) + '</span></div>' +
          '<div class="radar-item-meta">' +
          (typeof o.fitScore === 'number' ? '<span class="radar-match">' + o.fitScore + '% match</span>' : '') +
          '<span class="radar-days">' + escapeHtml(countdownLabel(o.deadline)) + '</span></div>' +
          '</a>'
        );
      }).join('') +
      '</div></div>'
    );
  }

  container.innerHTML =
    '<div class="container mt-page">' +
    '<div class="page-header"><h1>Deadline Radar</h1><p>' + (signal ? 'Sorted by how well each opportunity fits your profile within each window.' : 'Every open competition, grouped by how soon it closes.') + '</p></div>' +
    '<div class="radar-grid">' +
    bucketSection('Closing This Week', '⚡', buckets.week, 'urgent') +
    bucketSection('Next 30 Days', '', buckets.month, 'soon') +
    bucketSection('Next 3 Months', '', buckets.quarter, 'normal') +
    bucketSection('Later', '', buckets.later, 'later') +
    '</div>' +
    (sorted.length === 0 ? renderEmptyState('calendar', 'No open deadlines right now', 'Check back soon — new opportunities open throughout the year.', '') : '') +
    '</div>';
}

function renderProfileSummaryCard(profile, signal) {
  if (!signal) {
    return (
      '<div class="card profile-summary-card empty">' +
      '<div><h3>My Profile</h3><p>Take the quick quiz so CompHunt can calculate real Match Scores for you.</p></div>' +
      '<a href="/onboarding" class="btn btn-primary btn-sm">' + icon('sparkles', '', 14) + 'Take the quiz</a>' +
      '</div>'
    );
  }
  const chips = [];
  if (profile.grade) chips.push('Grade ' + profile.grade);
  if (profile.country) chips.push(profile.country);
  if (profile.interests && profile.interests.length) chips.push(profile.interests.slice(0, 3).join(', '));
  if (profile.budget) chips.push(profile.budget);
  if (profile.timeAvailable) chips.push(profile.timeAvailable + '/week');
  return (
    '<div class="card profile-summary-card">' +
    '<div><h3>My Profile</h3><div class="profile-chip-row">' + chips.map(function (c) { return '<span class="profile-chip">' + escapeHtml(c) + '</span>'; }).join('') + '</div></div>' +
    '<a href="/onboarding" class="btn btn-outline btn-sm">Edit</a>' +
    '</div>'
  );
}

function renderDashboard(container) {
  const profile = Store.getProfile();
  const signal = hasProfileSignal(profile);
  const pipeline = Store.getPipeline();
  const savedSlugs = Store.getSaved();
  const savedOpportunities = savedSlugs.map(getOpportunityBySlug).filter(Boolean);
  const recentEntries = Store.getRecent().map(function (e) { return { o: getOpportunityBySlug(e.slug), viewedAt: e.viewedAt }; }).filter(function (e) { return e.o; }).slice(0, 8);
  const recommended = getRecommendations(profile, opportunities, 6);

  const deadlineSource = savedOpportunities.length > 0 ? savedOpportunities : recommended;
  const upcoming = deadlineSource
    .filter(function (o) { return countdownUrgency(o.deadline) !== 'passed'; })
    .slice()
    .sort(function (a, b) { return new Date(a.deadline) - new Date(b.deadline); })
    .slice(0, 6);

  function sectionHeader(title, subtitle) {
    return '<div class="dashboard-section-head"><h2>' + title + '</h2>' + (subtitle ? '<p>' + subtitle + '</p>' : '') + '</div>';
  }

  const deadlineListHtml = upcoming.length === 0
    ? renderEmptyState('calendar', 'No upcoming deadlines yet', 'Save opportunities you\'re interested in to start tracking their deadlines.')
    : '<ul class="deadline-list">' + upcoming.map(function (o) {
        const urgency = countdownUrgency(o.deadline);
        const tone = urgency === 'urgent' ? 'red' : urgency === 'soon' ? 'amber' : 'neutral';
        return (
          '<li><a href="/opportunities/' + encodeURIComponent(o.slug) + '">' +
          '<div style="min-width:0"><p class="dl-title">' + escapeHtml(o.title) + '</p><p class="dl-date">' + formatDate(o.deadline) + '</p></div>' +
          '<span class="badge badge-' + tone + '">' + icon('clock', '', 12) + countdownLabel(o.deadline) + '</span>' +
          '</a></li>'
        );
      }).join('') + '</ul>';

  // Application pipeline board — grouped by status, backed by Store.getPipeline()
  const byStatus = {};
  PIPELINE_STAGES.forEach(function (s) { byStatus[s] = []; });
  pipeline.forEach(function (entry) {
    const o = getOpportunityBySlug(entry.slug);
    if (!o) return;
    (byStatus[entry.status] || byStatus.Saved).push(o);
  });

  const pipelineHtml = pipeline.length === 0
    ? renderEmptyState('layers', 'Your pipeline is empty', 'Bookmark an opportunity to add it here, then move it through Saved → Considering → Applying → Submitted → Results.', '<a href="/opportunities" class="btn btn-outline btn-sm">Browse opportunities</a>')
    : '<div class="pipeline-board">' +
      PIPELINE_STAGES.map(function (stage) {
        const items = byStatus[stage];
        return (
          '<div class="pipeline-col">' +
          '<div class="pipeline-col-head"><span>' + stage + '</span><span class="pipeline-col-count">' + items.length + '</span></div>' +
          '<div class="pipeline-col-items">' +
          items.map(function (o) {
            return (
              '<div class="pipeline-card">' +
              '<a href="/opportunities/' + encodeURIComponent(o.slug) + '">' + renderOrgAvatar(o, 24) + '<span>' + escapeHtml(truncate(o.title, 34)) + '</span></a>' +
              '<div class="pipeline-card-meta"><span class="radar-days">' + escapeHtml(countdownLabel(o.deadline)) + '</span>' +
              '<select class="pipeline-status-select" data-action="pipeline-status" data-slug="' + escapeHtml(o.slug) + '">' +
              PIPELINE_STAGES.map(function (s) { return '<option value="' + s + '"' + (s === stage ? ' selected' : '') + '>' + s + '</option>'; }).join('') +
              '</select></div>' +
              '</div>'
            );
          }).join('') +
          '</div></div>'
        );
      }).join('') +
      '</div>';

  container.innerHTML =
    '<div class="container mt-page">' +
    '<div class="dashboard-header"><h1>Your Dashboard</h1><p>Everything you\'ve saved, viewed, and matched — all in one place.</p></div>' +

    renderProfileSummaryCard(profile, signal) +

    '<section class="dashboard-section">' +
    sectionHeader('My Application Pipeline', 'Drag your saved opportunities through your own process — nothing here syncs to the real organizer.') +
    pipelineHtml +
    '</section>' +

    '<section class="dashboard-section">' +
    sectionHeader('Upcoming Deadlines', savedOpportunities.length > 0 ? "Based on the opportunities you've saved." : "Based on your top recommendations — save opportunities to track their deadlines here.") +
    deadlineListHtml +
    '</section>' +

    '<section class="dashboard-section">' +
    sectionHeader('Recommended For You', signal ? 'Matched to your interests, budget, and availability.' : 'Take the quiz to unlock personalized Match Scores.') +
    (!signal ? '<div style="margin-bottom:1.25rem"><a href="/onboarding" class="btn btn-outline btn-sm">' + icon('sparkles') + 'Take the quiz</a></div>' : '') +
    renderCardsGrid(recommended, signal, true) +
    '</section>' +

    '<section class="dashboard-section">' +
    sectionHeader('Saved Opportunities', "Everything you've bookmarked.") +
    (savedOpportunities.length === 0
      ? renderEmptyState('bookmark', 'Nothing saved yet', 'Tap the bookmark icon on any opportunity to save it for later.', '<a href="/opportunities" class="btn btn-outline btn-sm">Browse opportunities</a>')
      : renderCardsGrid(savedOpportunities, false, true)) +
    '</section>' +

    '<section class="dashboard-section">' +
    sectionHeader('Recently Viewed', 'Programs you\'ve looked at recently.') +
    (recentEntries.length === 0
      ? renderEmptyState('clock', 'No recent activity', 'Opportunities you view will show up here so you can find them again easily.')
      : renderCardsGrid(recentEntries.map(function (e) { return e.o; }), false, true)) +
    '</section>' +
    '</div>';

  container.querySelectorAll('[data-action="pipeline-status"]').forEach(function (sel) {
    sel.addEventListener('change', function () {
      Store.setStatus(sel.dataset.slug, sel.value);
      renderDashboard(container);
    });
  });
}

/* ======================================================================
   VIEW: NOT FOUND
   ====================================================================== */
function renderNotFound(container) {
  container.innerHTML =
    '<div class="container text-center" style="max-width:28rem;min-height:calc(100vh - 4rem);display:flex;flex-direction:column;align-items:center;justify-content:center">' +
    '<div class="icon-wrap" style="width:4rem;height:4rem;margin:0 auto 1.25rem">' + icon('compass', '', 32) + '</div>' +
    '<h1 style="font-size:1.5rem;font-weight:600">Page not found</h1>' +
    '<p style="margin-top:.5rem;color:var(--text-muted)">The opportunity or page you\'re looking for doesn\'t exist or may have moved.</p>' +
    '<a href="/opportunities" class="btn btn-primary" style="margin-top:1.5rem">Browse Opportunities</a>' +
    '</div>';
}

/* ======================================================================
   ROUTER
   ====================================================================== */
function parseCurrentPath() {
  let path = location.pathname || '/';
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return { path: path, params: new URLSearchParams(location.search) };
}
/* Real-path client-side navigation via the History API (no # fragment), so links are
   crawlable, shareable, and produce real per-page URLs. navigate() pushes a new entry
   and re-runs the router; browser back/forward is handled by the popstate listener. */
function navigate(path) {
  if (location.pathname + location.search === path || location.pathname === path) {
    router();
    return;
  }
  history.pushState(null, '', path);
  router();
}

function updateNavActiveStates(path) {
  document.querySelectorAll('.nav-link[data-path]').forEach(function (link) {
    const active = path === link.dataset.path || path.indexOf(link.dataset.path + '/') === 0;
    link.classList.toggle('active', active);
  });
}

function router() {
  const parsed = parseCurrentPath();
  const path = parsed.path;
  const params = parsed.params;
  window.scrollTo(0, 0);
  closeCommandPalette();
  document.getElementById('mobile-menu').setAttribute('hidden', '');
  document.getElementById('hamburger-btn').innerHTML = icon('menu');

  const appMain = document.getElementById('app-main');
  const detailMatch = path.match(/^\/opportunities\/([^/]+)$/);

  if (path === '/' || path === '') {
    renderHome(appMain);
  } else if (path === '/onboarding') {
    renderOnboarding(appMain);
  } else if (path === '/opportunities') {
    renderOpportunities(appMain, params);
  } else if (detailMatch) {
    renderDetail(appMain, detailMatch[1]);
  } else if (path === '/dashboard') {
    renderDashboard(appMain);
  } else if (path === '/compare') {
    renderCompare(appMain);
  } else if (path === '/deadlines') {
    renderDeadlineRadar(appMain);
  } else {
    renderNotFound(appMain);
  }

  updateNavActiveStates(path);
}

window.addEventListener('popstate', router);
/* Intercept clicks on internal links so navigation stays client-side (no full page
   reload) even though URLs are now real paths rather than # fragments. External links,
   new-tab/modifier clicks, and download links are left to the browser as normal. */
document.addEventListener('click', function (e) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const link = e.target.closest('a[href^="/"]');
  if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
  e.preventDefault();
  navigate(link.getAttribute('href'));
});
window.addEventListener('DOMContentLoaded', function () {
  renderShell();
  router();
  renderCompareBar();
});
