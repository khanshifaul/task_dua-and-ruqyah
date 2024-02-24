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

/**
 * GET handler for dua categories route.
 * Retrieves all dua categories from the database and returns them in the response.
 */
// export const GET = async (req: NextRequest, res: NextResponse) => {
//   try {
//     const result = await getDuaCategories();
//     return NextResponse.json({ message: "ok", status: 200, data: result });
//   } catch (error) {
//     throw error;
//   }
// };

/**
 * Handles GET request to retrieve duas filtered by category ID.
 * @param req - NextRequest object containing request info
 * @param res - NextResponse object for sending response
 * Gets category ID from query params and converts to number.
 * Calls getDuas() with category ID to get filtered duas.
 * Returns JSON response with message, status code and data.
 * Throws any errors.
 */
// export const GET = async (req: NextRequest, res: NextResponse) => {
//   try {
//     const catId = req.nextUrl.searchParams.get("cat_id");
//     if (catId !== null) {
//       const catIdNum = Number(catId);
//       const result = await getDuas(catIdNum);
//       return NextResponse.json({ message: "ok", status: 200, data: result });
//     }
//   } catch (error) {
//     throw error;
//   }
// };

/**
 * Handles GET request to retrieve duas filtered by category and subcategory IDs.
 * @param req - NextRequest object containing request info
 * @param res - NextResponse object for sending response
 * Gets category and subcategory IDs from query params and converts to numbers.
 * Calls getDuas() with category and subcategory IDs to get filtered duas.
 * Returns JSON response with message, status code and data.
 * Throws any errors.
 */
// export const getDuaCategories = async (req: NextRequest, res: NextResponse) => {
//   try {
//     const catId = req.nextUrl.searchParams.get("cat_id");
//     const subcatId = req.nextUrl.searchParams.get("subcat_id");
//     if (catId !== null && subcatId !== null) {
//       const catIdNum = Number(catId);
//       const subcatIdNum = Number(subcatId);
//       const result = await getDuas(catIdNum, subcatIdNum);
//       return NextResponse.json({ message: "ok", status: 200, data: result });
//     } else if (catId !== null && subcatId === null) {
//       const catIdNum = Number(catId);
//       const result = await getDuas(catIdNum);
//       return NextResponse.json({ message: "ok", status: 200, data: result });
//     } else ()
//   } catch (error) {
//     throw error;
//   }
// };
