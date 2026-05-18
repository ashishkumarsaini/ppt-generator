export const AUTH_LOGIN_PATH = '/login';
export const AUTH_API_PATH = '/api/auth';
export const INGEST_PATH = '/api/ingest';

const PUBLIC_PREFIX = [AUTH_LOGIN_PATH, AUTH_API_PATH, INGEST_PATH];

export const isPublicPath = (pathname: string) => {
  return PUBLIC_PREFIX.some((prefix) => pathname.startsWith(prefix));
};

export const isLoginPath = (pathname: string) => {
  return pathname.startsWith(AUTH_LOGIN_PATH);
};