import { db } from "@/lib/db";
import { cache } from "react";

export const getDuas = cache(async (cat_id: number, subcat_id: number) => {
  try {
    const duas = await db.dua.findMany({
      where: { cat_id, subcat_id },
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

export const getDuaSubCategories = cache(async () => {
  try {
    const duaSubCategories = await db.sub_category.findMany({
      include: { dua: true },
    });
    return duaSubCategories;
  } catch (error) {
    throw error;
  }
});
