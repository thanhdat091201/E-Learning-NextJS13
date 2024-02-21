import { test, expect, vi } from "vitest";
import { db } from "../lib/db";

test("test query", async () => {
  const data = await db.category.findMany({
    take: 7,
    select: {
      id: true,
    },
  });
  expect(data).toBeTruthy();
});
