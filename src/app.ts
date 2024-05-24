import { Hono } from 'hono';
import { userRoutes } from './routes/userRoutes';
import { authMiddleware } from './middlewares/authMiddleware';

const app = new Hono();

// Apply authentication middleware to user routes
app.use('/users/*', authMiddleware);

// Routes setup
app.route('/users', userRoutes);



export { app };
