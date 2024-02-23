import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import AudioBtn from "./audio-btn";
import TooltipBtn from "./tooltip-btn";

interface DuaCardProps {
  dua_id: number | null;
  dua_name_en: string | null;
  dua_name_bn: string | null;
  top_bn: string | null;
  top_en: string | null;
  dua_arabic: string | null;
  dua_indopak: string | null;
  clean_arabic: string | null;
  transliteration_bn: string | null;
  transliteration_en: string | null;
  translation_bn: string | null;
  translation_en: string | null;
  bottom_bn: string | null;
  bottom_en: string | null;
  refference_bn: string | null;
  refference_en: string | null;
}

const DuaCard = ({
  dua_id,
  dua_name_bn,
  dua_name_en,
  top_bn,
  top_en,
  dua_arabic,
  dua_indopak,
  clean_arabic,
  transliteration_bn,
  transliteration_en,
  translation_bn,
  translation_en,
  bottom_bn,
  bottom_en,
  refference_bn,
  refference_en,
}: DuaCardProps) => {
  return (
    <Card className="flex flex-col gap-2">
      <CardHeader className="flex flex-row gap-2 p-3">
        <Image
          src={"/assets/duacard.svg"}
          alt={"Dua"}
          width={100}
          height={100}
          className="h-10 w-10"
        />
        <h2 className="text-xl text-green-600">
          {dua_id + " . " + dua_name_en}
        </h2>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-3">
        <p className="text-xl">{top_en}</p>
        <p className="text-xl text-right font-meQuran">{dua_arabic}</p>
        <p className="text-xl text-right font-meQuran">{dua_indopak}</p>
        <p className="text-xl text-right font-meQuran">{clean_arabic}</p>
        {transliteration_en && (
          <p className="text-xl font-italic">
            <span className="font-semibold">Transliteration: </span>
            <span>{transliteration_en}</span>
          </p>
        )}
        {translation_en && (
          <p className="text-xl font-italic">
            <span className="font-semibold">Translation: </span>
            <span>{translation_en}</span>
          </p>
        )}

        <p className="text-xl">{bottom_en}</p>
        <p className="text-xl flex flex-col gap-2">
          <span className="text-green-600">Reference:</span>
          <span>{refference_en}</span>
        </p>
      </CardContent>
      <CardFooter className="flex gap-2 justify-between items-center p-3">
        <AudioBtn />
        <div className="flex gap-2 justify-end">
          <TooltipBtn label={"Copy"} icon={"/assets/copy.svg"} />
          <TooltipBtn label={"Bookmark"} icon={"/assets/bookmark.svg"} />
          <TooltipBtn label={"Memorize"} icon={"/assets/memorize.svg"} />
          <TooltipBtn label={"Share"} icon={"/assets/share.svg"} />
          <TooltipBtn label={"Report"} icon={"/assets/report.svg"} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default DuaCard;
