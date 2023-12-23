import type { CookieOptions } from 'express';
import invariant from 'tiny-invariant';

export type AuthConfig = ReturnType<typeof auth>;

export function auth() {
  invariant(process.env.JWT_SECRET, 'SECRET is missing');

  return {
    cookie: {
      httpOnly: true,
      sameSite: 'strict',
      signed: true,
      secure: process.env.NODE_ENV === 'production',
    } as CookieOptions,
  };
}