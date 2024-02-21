import React from "react";
import IconArrow from "../../utils/IconArrow";
import { useTranslation } from "@/src/i18n";
import { OurMission } from "./OurMission";
import { OurFacilities } from "./OurFacilities";
import { Innovation } from "./Innovation";
import("@/i18n.config");

const ContentAbout = async ({ lang }) => {
  const { t } = await useTranslation(lang);
  return (
    <section className="relative w-ful xl:px-0  lg:pb-[128px]">
      <div className="w-full mx-auto flex flex-col">
        <OurMission lang={lang} />
        <OurFacilities lang={lang} />
      </div>
      <Innovation lang={lang} />
    </section>
  );
};

export default ContentAbout;
