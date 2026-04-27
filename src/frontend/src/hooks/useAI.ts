// Legacy hook stubs — not used in Rathinam College app
export function useUserProfile() {
  return { data: null };
}
export function useAiInsights() {
  return { data: null };
}
export function useWeeklySummary() {
  return { data: null };
}
export function useRegisterUser() {
  return { mutateAsync: async () => {} };
}
export function useParseNaturalLanguage() {
  return { mutateAsync: async (t: string) => ({ title: t, description: "" }) };
}
