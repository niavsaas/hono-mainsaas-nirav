import { Hono } from 'hono';
import { UserService } from '../services/modules/complex/userService';
import { handleSuccess, handleError } from '../utils/responseHandler';

const userService = new UserService();
const userRoutes = new Hono();

userRoutes.get('/', async (c) => {
  try {
    const users = await userService.getAllUsers();
    return handleSuccess(c, users);
  } catch (error) {
    return handleError(c, 'Failed to fetch users');
  }
});

userRoutes.get('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const user = await userService.getUserById(id);
    console.log("🚀 ~ userRoutes.get ~ user:", user)
    if (!user) return handleError(c, 'User not found', 404);
    return handleSuccess(c, user);
  } catch (error) {
    return handleError(c, 'Failed to fetch user');
  }
});

userRoutes.post('/', async (c) => {
  try {
    const user = await c.req.json();
    const newUser = await userService.createUser(user);
    return handleSuccess(c, newUser, 201);
  } catch (error) {
    return handleError(c, 'Failed to create user');
  }
});

userRoutes.put('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const updatedUser = await c.req.json();
    const user = await userService.updateUser(id, updatedUser);
    if (!user) return handleError(c, 'User not found', 404);
    return handleSuccess(c, user);
  } catch (error) {
    return handleError(c, 'Failed to update user');
  }
});

userRoutes.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const user = await userService.deleteUser(id);
    if (!user) return handleError(c, 'User not found', 404);
    return handleSuccess(c, user);
  } catch (error) {
    return handleError(c, 'Failed to delete user');
  }
});

export { userRoutes };
