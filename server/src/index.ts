import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.get('/hello', (c) => {
  const name = process.env.NAME || 'World';
  return c.text(`Hello ${name}`);
});

app.use('/favicon.png', serveStatic({ path: '/src/favicon.png' }));

app.get('/posts', (c) => {
  return c.text('All Posts');
});

app.get('/posts/:id', (c) => {
  const id = c.req.param('id');
  return c.text(`Post ${id}`);
});

const port = parseInt(process.env.PORT!) || 3000;
console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
