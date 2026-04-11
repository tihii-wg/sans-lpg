import { useTranslation } from "react-i18next";

export default function SectionAdditionalWork() {
  const { t } = useTranslation();
  return (
    <section className="bg-green-50">
      <h2 className="2xl:text-5xl xl:text-4xl md:text-3xl max-[775px]:text-4xl text-gray-700 text-center 2xl:pt-16 xl:pt-8 lg:pt-6 md:pt-2 max-[775px]:pt-8 mb-5">
        {t("main.section-additional-work.title")}
        {/* Дополнительные работы */}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols- max-[775px]:grid-cols-1 text-center  gap-2 pb-20 2xl:mx-37 xl:mx-37 lg:mx-37 md:mx-3  text-gray-700 font-semibold 2xl:text-2xl xl:text-xl max-[775px]:text-2xl ">
        <div className="flex items-center mx-auto">
          {/* <CheckIcon className="text-green-800 size-9" /> */}
          <p>{t("main.section-additional-work.diagnostics")}</p>
        </div>
        <div className="flex items-center mx-auto">
          {/* <CheckIcon className="text-green-800 size-9" /> */}
          <p>{t("main.section-additional-work.hybrid-car")}</p>
        </div>
        <div className="flex items-center mx-auto">
          {/* <CheckIcon className="text-green-800 size-9" /> */}
          <p>{t("main.section-additional-work.lpg")}</p>
        </div>
        <div className="flex items-center mx-auto">
          {/* <CheckIcon className="text-green-800 size-9" /> */}
          <p>{t("main.section-additional-work.chassis-repair")}</p>
        </div>
        <div className="flex items-center mx-auto">
          {/* <CheckIcon className="text-green-800 size-9" /> */}
          <p>{t("main.section-additional-work.Wheel-alignment")}</p>
        </div>
        <div className="flex items-center mx-auto">
          {/* <CheckIcon className="text-green-800 size-9" /> */}
          <p>{t("main.section-additional-work.engine")}</p>
        </div>
        <div className="flex items-center mx-auto">
          {/* <CheckIcon className="text-green-800 size-9" /> */}
          <p>{t("main.section-additional-work.headlight-adjusment")}</p>
        </div>
        <div className="flex items-center mx-auto">
          {/* <CheckIcon className="text-green-800 size-9" /> */}
          <p>{t("main.section-additional-work.air-conditioner")}</p>
        </div>
      </div>
    </section>
  );
}
