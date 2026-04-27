import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useCallback } from "react";

export function useAuth() {
  const {
    identity,
    loginStatus,
    login,
    clear,
    isAuthenticated,
    isInitializing,
  } = useInternetIdentity();

  const isLoading = isInitializing;

  const logout = useCallback(async () => {
    await clear();
  }, [clear]);

  const principalText = isAuthenticated
    ? (identity?.getPrincipal().toString() ?? null)
    : null;

  return {
    identity,
    isAuthenticated,
    isLoading,
    loginStatus,
    login,
    logout,
    principalText,
  };
}
