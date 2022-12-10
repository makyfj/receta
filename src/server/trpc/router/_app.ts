// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { bookmarkRouter } from "./bookmark";
import { recipeRouter } from "./recipe";
import { userRouter } from "./user";

export const appRouter = router({
  auth: authRouter,
  recipe: recipeRouter,
  user: userRouter,
  bookmark: bookmarkRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
