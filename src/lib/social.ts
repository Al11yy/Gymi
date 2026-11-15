/** Where people can reach Gymi. A link that is still null shows as "Soon" in Settings. */
export const CONTACT_EMAIL = "ghazam.aliy3@gmail.com";

export type SocialId = "instagram" | "tiktok" | "youtube" | "x";

export const SOCIAL_LINKS: { id: SocialId; name: string; url: string | null }[] = [
  { id: "instagram", name: "Instagram", url: null },
  { id: "tiktok", name: "TikTok", url: null },
  { id: "youtube", name: "YouTube", url: null },
  { id: "x", name: "X / Threads", url: null },
];

/** A mail link with the app version in the subject, so a report says which build it is about. */
/** A beta tester's report: the subject says beta, so it is easy to find among other mail. */
export function betaFeedbackHref(version: string | null): string {
  const subject = version ? `Gymi beta feedback (${version})` : "Gymi beta feedback";
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

export function contactHref(version: string | null): string {
  const subject = version ? `Gymi feedback (${version})` : "Gymi feedback";
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
