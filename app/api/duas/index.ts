import { db } from "@/lib/db";
import { cache } from "react";

export const getDuas = cache(async (cat_id?: number, subcat_id?: number) => {
  try {
    const duas = await db.dua.findMany({
      where: { cat_id, subcat_id },
      include: {
        sub_category: {
          include: { dua: true },
        },
      },
    });
    return duas;
  } catch (error) {
    throw error;
  }
});

export const getDuaCategories = cache(async () => {
  try {
    const duaCategories = await db.category.findMany({
      include: {
        sub_category: {
          include: { dua: true },
        },
      },
    });
    return duaCategories;
  } catch (error) {
    throw error;
  }
});
