import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.use('/favicon.png', serveStatic({ path: '/src/favicon.png' }));

app.get('/posts', (c) => {
  return c.text('All Posts');
});

app.get('/posts/:id', (c) => {
  const id = c.req.param('id');
  return c.text(`Post ${id}`);
});

export default app;
