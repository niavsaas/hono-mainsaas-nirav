import { Context } from 'hono';

export const handleSuccess = (c: Context, data: any, statusCode: number = 200) => {
  return c.json({ success: true, data }, { status: statusCode });
};

export const handleError = (c: Context, message: string, statusCode: number = 500) => {
  return c.json({ success: false, error: message }, { status: statusCode });
};
