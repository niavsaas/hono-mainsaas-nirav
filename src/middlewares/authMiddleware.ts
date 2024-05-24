import { Context } from 'hono';

export const authMiddleware = async (c: Context, next: Function) => {
  const token = c.req.header('Authorization'); // Access headers using a function call
  if (!token) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  await next();
};
