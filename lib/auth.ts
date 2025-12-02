export interface AdminSession {
  username: string;
  isAuthenticated: boolean;
}

export const AUTH_COOKIE_NAME = 'admin_session';
export const DEFAULT_ADMIN_USERNAME = 'admin';
export const DEFAULT_ADMIN_PASSWORD = 'admin123';

export function setAdminSession(username: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_COOKIE_NAME, JSON.stringify({ username, isAuthenticated: true }));
  }
}

export function getAdminSession(): AdminSession | null {
  if (typeof window !== 'undefined') {
    const session = localStorage.getItem(AUTH_COOKIE_NAME);
    if (session) {
      try {
        return JSON.parse(session);
      } catch {
        return null;
      }
    }
  }
  return null;
}

export function clearAdminSession(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_COOKIE_NAME);
  }
}

export function isAuthenticated(): boolean {
  const session = getAdminSession();
  return session?.isAuthenticated === true;
}

export function validateCredentials(username: string, password: string): boolean {
  // In production, this should verify against database
  return username === DEFAULT_ADMIN_USERNAME && password === DEFAULT_ADMIN_PASSWORD;
}
