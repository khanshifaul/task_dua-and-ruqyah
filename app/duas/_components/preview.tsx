import { getDuaCategories } from "@/app/api/duas";
import DuaCard from "@/components/guest/dua-card";

const Preview = async () => {
  const duaCategory = await getDuaCategories();
  return (
    <div className="h-[90vh] scroll-smooth focus:scroll-auto default:overflow-y-scroll-visible overflow-y-scroll scrollbar-thin w-full">
      {duaCategory.map((duaCategory) => {
        return (
          <div key={duaCategory.cat_id} className="flex flex-col gap-5 w-full">
            {duaCategory.sub_category.map((subcat, index) => {
              return (
                <div key={index} className="flex flex-col gap-3">
                  <div
                    id={
                      "cat_" +
                      duaCategory.cat_id +
                      "&subcat_" +
                      subcat.subcat_id
                    }
                    className="flex w-full rounded-xl bg-background p-5 gap-5 shadow"
                  >
                    <span className="text-green-600">Section: </span>
                    {subcat.subcat_name_en}
                  </div>
                  {subcat.dua.map((dua, index) => {
                    return (
                      <div
                        key={index}
                        id={
                          "cat_" +
                          duaCategory.cat_id +
                          "&subcat_" +
                          subcat.subcat_id +
                          "&dua_" +
                          dua.dua_id
                        }
                      >
                        <DuaCard
                          dua_id={dua.dua_id}
                          dua_name_en={dua.dua_name_en}
                          dua_name_bn={dua.dua_name_bn}
                          top_bn={dua.top_bn}
                          top_en={dua.top_en}
                          dua_arabic={dua.dua_arabic}
                          dua_indopak={dua.dua_indopak}
                          clean_arabic={dua.clean_arabic}
                          transliteration_bn={dua.transliteration_bn}
                          transliteration_en={dua.transliteration_en}
                          translation_bn={dua.translation_bn}
                          translation_en={dua.translation_en}
                          bottom_bn={dua.bottom_bn}
                          bottom_en={dua.bottom_en}
                          refference_bn={dua.refference_bn}
                          refference_en={dua.refference_en}
                          audio={dua.audio}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
