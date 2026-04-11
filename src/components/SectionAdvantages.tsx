import {
  ClipboardDocumentListIcon,
  Cog8ToothIcon,
  CreditCardIcon,
} from "@heroicons/react/16/solid";
import { useTranslation } from "react-i18next";

export default function SectionAdvantages() {
  const { t } = useTranslation();
  return (
    <>
      <h2 className=" 2xl:mb-6 xl:mb-4 lg:mb-2 md:mb-1 sm:mb-2 max-[640px]:mb-4 2xl:mt-16 xl:mt-8 lg:mt-6 md:mt-2 sm:mt-2 max-[640px]:mt-6 text-center 2xl:text-5xl xl:text-4xl md:text-3xl max-[640px]:text-3xl text-gray-800 font-mediu ">
        {t("main.section-advantages.title")}
      </h2>
      <section className="flex md:flex-row sm:flex-col max-[775px]:flex-col max-[775px]:gap-4 2xL:gap-7 xl:gap-7 sm:gap-3 2xl:justify-between xl:justify-between lg:justify-around md:justify-between 2xl:px-40 xl:px-30 md:px-10 sm:px-40 my-0 mx-auto mb-16">
        <div className="border-2 border-gray-200 mx-auto rounded-xl text-center 2xl:w-100 2xl:h-70 xl:w-80 xl:h-60 lg:w-60 lg:h-45 md:w-60 md:h-40  sm:h-80 max-[640px]:h-50 sm:w-90 max-[640px]:w-70 flex flex-col items-center">
          <CreditCardIcon className="2xl:size-30 xl:size-20 lg:size-15 md:size-10 sm:size-25  max-[775px]:size-15 text-green-700 2xl:my-2 lg:my-4 md:my-2 sm:my-1 max-[640px]:my-4" />
          <h2 className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-xl  max-[768px]:text-4xl text-gray-700 2xl:mb-4 xl:mb-4 lg:mb-2 md:mb-1 sm:mb-10 max-[640px]:mb-3">
            {t("main.section-advantages.card-economy-title")}
          </h2>
          <div className=" h-0.5 2xl:w-93 xl:w-70 lg:w-55 md:w-50 sm:w-80 max-[640px]:w-60 bg-gray-200"></div>
          <p className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-3xl text-gray-600 2xl:mt-5 xl:my-5 lg:my-2 md:my-2  max-[640px]:my-4">
            {t("main.section-advantages.card-economy-description")}{" "}
            <span className="font-bold text-gray-800">40%</span>
          </p>
        </div>
        <div className="border-2 border-gray-200 mx-auto rounded-xl text-center 2xl:w-100 2xl:h-70 xl:w-80 xl:h-60 lg:w-60 lg:h-45 md:w-60 md:h-40 sm:h-80 sm:w-90 max-[640px]:w-70 max-[640px]:h-50 flex flex-col items-center">
          <Cog8ToothIcon className="2xl:size-30 xl:size-20 lg:size-15 md:size-10 sm:size-25 max-[640px]:size-15 text-green-700 2xl:my-2 lg:my-4 md:my-2 sm:my-4 max-[640px]:my-4" />
          <h2 className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-md  sm:text-xl text-gray-700 2xl:mb-4 xl:mb-4 lg:mb-2 md:mb-1 sm:mb-1 max-[640px]:mb-3">
            {t("main.section-advantages.card-equipment-title")}
          </h2>
          <div className=" h-0.5 2xl:w-93 xl:w-70 lg:w-55 md:w-50 sm:w-80 max-[640px]:w-60 bg-gray-200"></div>
          <p className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-3xl text-gray-600 2xl:mt-5 xl:my-5 lg:my-2 md:my-4 max-[640px]:my-4">
            {t("main.section-advantages.card-equipment-description")}
          </p>
        </div>
        <div className="border-2 border-gray-200 mx-auto rounded-xl text-center 2xl:w-100 2xl:h-70 xl:w-80 xl:h-60 lg:w-60 lg:h-45 md:w-60 md:h-40 sm:h-80 sm:w-90 max-[640px]:w-70 max-[640px]:h-50 flex flex-col items-center">
          <ClipboardDocumentListIcon className="2xl:size-30 xl:size-20 lg:size-15 md:size-10  sm:size-25 max-[640px]:size-15 text-green-700 2xl:my-2 lg:my-4 md:my-2 sm:my-4 max-[640px]:my-4" />
          <h2 className="2xl:text-4xl xl:text-2xl lg:text-xl md:text-md sm:text-xl max-[640px]:text-2xl text-gray-700 2xl:mb-4 xl:mb-4 lg:mb-2 md:mb-1 max-[640px]:mb-3 ">
            {t("main.section-advantages.card-legally-title")}
          </h2>
          <div className=" h-0.5 2xl:w-93 xl:w-70 lg:w-55 md:w-50 sm:w-80 max-[640px]:w-60 bg-gray-200"></div>
          <p className="2xl:text-2xl xl:text-xl lg:text-xl md:text-xl sm:text-3xl text-gray-600 2xl:mt-5 xl:my-4 lg:my-2 md:my-4 max-[640px]:my-4">
            {t("main.section-advantages.card-legally-description")}
          </p>
        </div>
      </section>
    </>
  );
}
