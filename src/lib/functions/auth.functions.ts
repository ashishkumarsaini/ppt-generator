import { getRequestHeaders } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";
import { auth } from "../auth";
import { redirect } from "@tanstack/react-router";

export const getSession = createServerFn({
  method: 'GET',
}).handler(async () => {
  const headers = getRequestHeaders();

  return await auth.api.getSession({ headers });
});

export const ensureSession = createServerFn({
  method: 'GET',
}).handler(async () => {
  const headers = getRequestHeaders();

  const session = await auth.api.getSession({ headers });

  if (!session?.user) {
    redirect({ to: '/login' })
  }

  return session;
});