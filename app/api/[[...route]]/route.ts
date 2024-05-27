import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';

export const runtime = 'edge';

const app = new Hono().basePath('/api')
  
  // .get(
  //   '/hello', 
  //   clerkMiddleware(),
  //   (c) => {
  //     const auth = getAuth(c);
  //     if (!auth?.userId) {
  //       return c.json({ error: "Unauthorized" })
  //     }
  //     return c.json({
  //       message: 'Hello Next.js!',
  //       userId: auth.userId,
  //     })
  //   }
  // );

  app.get("/hello", (c) => {
    return c.json({
      message: "Hello World",
    })
  });

  // .post("/create/:postId", 
  //   zValidator("json", z.object({
  //     name: z.string(),
  //     userId: z.string(),
  //   })),
  //   zValidator("param", z.object({
  //     postId: z.number(),
  //   })),
  //   (c) => {
  //     const { name, userId } = c.req.valid("json");
  //     const { postId } = c.req.valid("param");

  //     return c.json({});
  // })

export const GET = handle(app);
export const POST = handle(app);