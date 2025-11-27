import express, { Request, Response, NextFunction } from 'express';
import indexRouter from './routes';

const port: number = parseInt(process.env.PORT || '3000', 10);
const server = express();

// Middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Routes
server.use('/', indexRouter);

// 404 Handler
server.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found', message: `Route ${req.path} not found` });
});

// Error Handler
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Start server
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  process.exit(0);
});
