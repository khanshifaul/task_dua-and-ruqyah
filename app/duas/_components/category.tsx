"use server";
import { getDuaCategories } from "@/app/api/duas/route";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { PiArrowBendDownRight } from "react-icons/pi";

const Category = async () => {
  const duaCategory = await getDuaCategories();

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="flex flex-col gap-3 w-full my-2"
      >
        {duaCategory.map((duaCategory, index) => {
          return (
            <AccordionItem
              key={index}
              id={"cat_" + duaCategory.cat_id?.toString()}
              value={index.toString()}
              className="border-0 scroll-mt-2"
            >
              <Link href={"/duas/#cat_" + duaCategory.cat_id}>
                <AccordionTrigger className="bg-secondary rounded-md p-2">
                  <div className="w-full flex justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/assets/" + duaCategory.cat_icon + ".svg"}
                        alt={duaCategory.cat_name_en || ""}
                        width={100}
                        height={100}
                        className="rounded-2xl bg-secondary h-12 w-12 p-2 object-contain"
                      />
                      <div className="flex flex-col text-left">
                        <h3 className="text-md text-nowrap">
                          {duaCategory.cat_name_en}
                        </h3>
                        <p className="text-sm text-nowrap text-neutral-500">
                          Subcategory: {duaCategory.no_of_subcat}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-center">
                      <p className="text-lg text-nowrap">
                        {duaCategory.no_of_dua}
                      </p>
                      <p className="text-sm text-nowrap">duas</p>
                    </div>
                  </div>
                </AccordionTrigger>
              </Link>
              <AccordionContent className="rounded-md p-2 border-0">
                <div className="rounded-md border-0 ml-5">
                  {duaCategory.sub_category.map((subcat, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-baseline border-l-2 border-green-600 border-dotted px-2"
                      >
                        <div className="rounded-full -translate-x-3 w-2 h-2 bg-primary mt-4"></div>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="1" className="border-0">
                            <Link
                              href={
                                "/duas/#cat_" +
                                duaCategory.cat_id +
                                "&subcat_" +
                                subcat.subcat_id
                              }
                            >
                              <AccordionTrigger className="flex text-start justify-start items-center p-0">
                                <p>{subcat.subcat_name_en}</p>
                              </AccordionTrigger>
                            </Link>
                            <AccordionContent className="p-0">
                              {subcat.dua.map((dua, index) => {
                                return (
                                  <Link
                                    key={index}
                                    href={
                                      "/duas/#cat_" +
                                      duaCategory.cat_id +
                                      "&subcat_" +
                                      subcat.subcat_id +
                                      "&dua_" +
                                      dua.dua_id
                                    }
                                  >
                                    <div className="flex gap-2">
                                      <div className="h-5 w-5">
                                        <PiArrowBendDownRight className="text-sm text-green-600" />
                                      </div>
                                      <p className="text-sm text-green-600">
                                        {dua.dua_name_en}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Category;
