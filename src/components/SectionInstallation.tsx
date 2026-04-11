import {
  AcademicCapIcon,
  CogIcon,
  DocumentTextIcon,
  SquaresPlusIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { useTranslation } from "react-i18next";

export default function SectionInstallation() {
  const { t } = useTranslation();
  return (
    <section className="px-auto 2xl:pt-16 xl:pt-8 lg:pt-6 md:pt-4 sm:pt-6 max-[640px]:pt-6 bg-green-50  ">
      <h2 className="text-center 2xl:text-5xl xl:text-4xl md:text-3xl sm:text-3xl max-[640px]:text-4xl text-gray-700  2xl:mb-9 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-4 max-[640px]:mb-4">
        {t("main.section-installation.title")}
      </h2>
      <div className="flex justify-center 2xl:gap-6 xl:gap-5 lg:gap-4 md:gap-1 sm:gap-11 max-[768px]:gap-11 pb-6 ">
        <div className="flex flex-col items-center gap-3 2xl:w-70 xl:w-60 lg:w-50 md:w-50 ">
          <div className="bg-green-800 2xl:h-20 2xl:w-20 xl:h-17 xl:w-17 lg:h-12 lg:w-12 md:h-8 md:w-8 max-[768px]:h-10 max-[768px]:w-10 rounded-full flex">
            <UserIcon className="2xl:size-15 xl:size-13 lg:size-9 md:size-6 sm:size-8 max-[640px]:size-8 mx-auto my-auto text-white" />
          </div>
          <div className="max-[640px]:hidden">
            <h3 className="text-gray-600 2xl:text-3xl xl:text-2xl lg:text-xl ">
              {t("main.section-installation.diagnostics")}
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 2xl:w-75 xl:w-60 lg:w-53 md:w-54">
          <div className="bg-green-800 2xl:h-20 2xl:w-20 xl:h-17 xl:w-17 lg:h-12 lg:w-12 md:h-8 md:w-8 max-[768px]:h-10 max-[768px]:w-10 rounded-full flex">
            <SquaresPlusIcon className="2xl:size-15 xl:size-13 lg:size-9 md:size-6 sm:size-8 max-[640px]:size-8 mx-auto my-auto text-white " />
          </div>
          <div className=" max-[640px]:hidden">
            <h3 className="text-gray-600 2xl:text-3xl xl:text-2xl lg:text-xl ">
              {t("main.section-installation.components")}
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 2xl:w-70 xl:w-60 lg:w-50 md:w-50">
          <div className="bg-green-800 2xl:h-20 2xl:w-20 xl:h-17 xl:w-17 lg:h-12 lg:w-12 md:h-8 md:w-8 max-[768px]:h-10 max-[768px]:w-10 rounded-full flex">
            <CogIcon className="2xl:size-15 xl:size-13 lg:size-9 md:size-6 mx-auto sm:size-8 max-[640px]:size-8 my-auto text-white " />
          </div>
          <div className="max-[640px]:hidden">
            <h3 className="text-gray-700 2xl:text-3xl xl:text-2xl lg:text-xl">
              {t("main.section-installation.installation")}
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 2xl:w-70 xl:w-60 lg:w-50 md:w-50">
          <div className="bg-green-800 2xl:h-20 2xl:w-20 xl:h-17 xl:w-17 lg:h-12 lg:w-12 md:h-8 md:w-8 max-[768px]:h-10 max-[768px]:w-10 rounded-full flex">
            <AcademicCapIcon className="2xl:size-15  xl:size-13 lg:size-9 md:size-6 sm:size-8 max-[640px]:size-8 mx-auto my-auto text-white " />
          </div>
          <div className="max-[640px]:hidden">
            <h3 className="text-gray-600 2xl:text-3xl xl:text-2xl lg:text-xl">
              {t("main.section-installation.setting")}
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 2xl:w-70 xl:w-60 lg:w-50 md:w-50">
          <div className="bg-green-800 2xl:h-20 xl:h-17 lg:h-12 md:h-8 max-[768px]:h-10 2xl:w-20  xl:w-17  lg:w-12  md:w-8 max-[768px]:w-10 not-only:rounded-full flex">
            <DocumentTextIcon className="2xl:size-15 xl:size-13 lg:size-9 md:size-6 sm:size-8 max-[768px]:size-8 mx-auto my-auto text-white " />
          </div>
          <div className="max-[640px]:hidden">
            <h3 className="text-gray-600 2xl:text-3xl xl:text-2xl lg:text-xl">
              {t("main.section-installation.documents")}
            </h3>
          </div>
        </div>
      </div>
      {/* <div className="2xl:border-3 xl:border-2 lg:border md:border border-green-800  2xl:w-350 xl:w-310 lg:w-260 md:w-200 sm:w-20 left-1/2 -translate-x-1/2 2xl:bottom-21 xl:bottom-19 lg:bottom-16 md:bottom-13  z-0 "></div> */}
    </section>
  );
}
