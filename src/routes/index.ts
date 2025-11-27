import { Router, Request, Response } from 'express';

const indexRouter = Router();

// Health check endpoint
indexRouter.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Main route handler
indexRouter.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  
  if (!id || id.trim() === '') {
    res.status(400).json({ error: 'Invalid id', message: 'ID parameter is required' });
    return;
  }

  res.status(200).json({ message: `Received id: ${id}`, id });
});

export default indexRouter;
