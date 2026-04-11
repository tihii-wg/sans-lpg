import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const pathWithoutLang = location.pathname.replace(
    /^\/(ru|ro|en)(?=\/|$)/,
    ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    navigate(`/${newLang}${pathWithoutLang}`);
  };

  if (!i18n.resolvedLanguage) return null;

  return (
    <select
      value={i18n.resolvedLanguage || "ro"}
      onChange={handleChange}
      className="text-center mt-auto text-gray-800 2xl:text-3xl xl:text-2xl md:text-xl "
      id="language"
      name="language"
    >
      <option value="ru">Русский</option>
      <option value="en">English</option>
      <option value="ro">Română</option>
    </select>
  );
}
