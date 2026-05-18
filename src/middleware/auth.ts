import { auth } from "#/lib/auth";
import { AUTH_LOGIN_PATH, isLoginPath, isPublicPath } from "#/lib/auth-paths";
import { redirect } from "@tanstack/react-router";
import { createMiddleware } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";

export const authMiddleware = createMiddleware({
  type: 'request'
}).server(async ({ request, next }) => {
  const headers = getRequestHeaders();
  const pathname = new URL(request.url).pathname;

  const session = await auth.api.getSession({
    headers: headers as any
  });

  if (isLoginPath(pathname)) {
    return redirect({ to: '/' });
  }

  if (isPublicPath(pathname)) {
    return next();
  }

  if (!session) {
    return redirect({ to: AUTH_LOGIN_PATH });
  }

  return next({ context: session });
});