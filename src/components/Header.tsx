import { CheckIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t, i18n } = useTranslation();

  if (!i18n.languages || i18n.languages.length === 0) {
    return null; // или fallback UI
  }

  return (
    <header>
      <div className="2xl:px-65 lg:px-25 md:px-0 flex justify-between ">
        <div className="flex items-center relative">
          <Logo />
          <h2 className="2xl:text-6xl xl:text-4xl lg:text-2xl md:text-2xl sm:text-xl max-[640px]:text-xl text-green-800 font-bold 2xl:w-180 xl:w-180 lg:w-180 md:w-173 sm:w-145 max-[640px]:w-70 absolute 2xl:bottom-10 xl:bottom-7 lg:bottom-8 md:bottom-5 sm:bottom-7 max-[640px]:bottom-7 2xl:left-37 xl:left-31 lg:left-25 md:left-19 sm:left-15 max-[640px]:left-16 ">
            ans LPG Systems Company
          </h2>
        </div>
        <div className="flex mb-6 max-[640px]:mb-15 mr-7 max-[640px]:mr-1 ">
          <LanguageSwitcher />
        </div>
      </div>
      <div className=" 2xl:min-h-100 xl:min-h-80 lg:min-h-50  flex flex-col relative overflow-hidden ">
        <div className=" bg-green-50 2xl:px-70 lg:px-30 md:px-10 sm:px-5 max-[640px]:px-2 2xl:pt-5 xl:pt-3 lg:pt-3 md:pt-5 sm:pt-5 flex flex-col ">
          <h1 className="2xl:text-6xl xl:text-4xl lg:text-2xl md:text-2xl  sm:text-2xl max-[640px]:text-xl text-green-800 mr-35 mb-6 max-[640px]:mb-1 font-bold ">
            {t("header.title")}
          </h1>
          <div className=" font-semibold 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl max-[640px]:text-xl">
            <p className=" text-gray-600 mb-3 max-[640px]:mb-1">
              {t("header.description-economy")}
            </p>
            <p className=" text-gray-600 mb-3 max-[640px]:mb-1">
              {t("header.description-sertificate")}
            </p>
            <p className=" text-gray-600 mb-3 max-[640px]:mb-1">
              {t("header.description-warranty")}
            </p>
          </div>
          <div className="flex gap-3 items-center mb-5 text-green-800">
            <a
              href="tel:+37378111233"
              className=" cursor-pointer mt-1 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl max-[640px]:text-x"
              onClick={() => {
                navigator.clipboard.writeText("+37378111233");
              }}
            >
              +37378111233
            </a>

            <div>
              <PhoneIcon className="text-green-800 2xl:size-13 xl:size-9 lg:size-8 md:size-7 sm:size-6 max-[640px]:size-6 " />
            </div>
          </div>
          <img
            className=" absolute 2xl:right-60  lg:right-30  md:right-5 sm:right-1 max-[640px]:right-0 mask-[linear-gradient(to_left,black_30%,transparent)] max-[640px]:mask-[linear-gradient(to_left,black_0%,transparent)][-webkit-mask-image:linear-gradient(to_left,black30%,transparent)   2xl:w-175 xl:w-140 lg:w-120 md:w-120 sm:w-100  2xl:h-100 xl:h-80 lg:h-70 md:h-77 sm:h-69 max-[640px]:h-50 2xl:bottom-0    lg:bottom     md:bottom-0  sm:bottom-0  "
            src="/img/service-background.png"
            alt="service image"
          />
        </div>
        <div className="  bg-white 2xl:px-70 xl:px-40 lg:px-40 md:px-10 sm:px-5 2xl:py-7 xl:py-3 text-gray-600 flex gap-12 max-[640px]:gap-2 font-sans 2xl:text-2xl xl:text-sm xl:gap-3 sm:gap-0.5">
          <div className="flex items-center  ">
            <CheckIcon className="text-green-800 size-9 sm:size-7" />
            <span>{t("header.checkIcon1")}</span>
          </div>

          <div className="flex items-center">
            <CheckIcon className="text-green-800 size-9 sm:size-7" />
            <span>{t("header.checkIcon2")}</span>
          </div>

          <div className="flex items-center">
            <CheckIcon className="text-green-800 size-9 sm:size-7" />
            <span>{t("header.checkIcon3")}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
