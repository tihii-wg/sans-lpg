// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
// import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ImageCarousel from "../ui/ImageCarousel";

export default function SectionWork() {
  const { t } = useTranslation();

  return (
    <section className=" bg-green-0 ">
      <div className="mx-auto  ">
        <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-4xl max-[640px]:text-4xl text-gray-700 text-center 2xl:pt-16 xl:pt-8 lg:pt-6 md:pt-2 sm:pt-4 max-[640px]:pt-4 2xl:pb-9 xl:pb-4 lg:pb-2 sm:pb-4 max-[640px]:pb-3">
          {t("main.section-work.title")}
        </h2>
      </div>
      <ImageCarousel />
    </section>
  );
}
