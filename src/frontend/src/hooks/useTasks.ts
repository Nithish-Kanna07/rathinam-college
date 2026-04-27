// Legacy hook stubs — not used in Rathinam College app
export function useTasks() {
  return { data: [] };
}
export function useTask() {
  return { data: null };
}
export function useCreateTask() {
  return { mutateAsync: async () => {} };
}
export function useUpdateTask() {
  return { mutateAsync: async () => {} };
}
export function useDeleteTask() {
  return { mutateAsync: async () => {} };
}
export function useToggleTask() {
  return { mutateAsync: async () => {} };
}
export function useTaskGroups() {
  return { data: [] };
}
export function useSearchTasks() {
  return { data: [] };
}
export function useRecordCompletion() {
  return { mutateAsync: async () => {} };
}
