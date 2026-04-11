import { MapPinIcon } from "@heroicons/react/16/solid";
// import { Link } from "react-router-dom";

export default function Footer() {
  // if (isOpenContacts) return <Contacts />;
  return (
    <footer className="bg-green-800 h-20 text-white py-4 px-10 flex justify-between items-center ">
      <div>
        <span>© {new Date().getFullYear()} Șans</span>
      </div>
      <div className="flex justify-center items-center">
        <MapPinIcon className="size-5" />
        <a
          href="https://www.google.com/maps/place/%D0%A8%D0%B0%D0%BD%D1%81+Sans+LPG+Company/@46.9911796,28.9091921,17z/data=!4m6!3m5!1s0x40c97b616bec9ff9:0xc1007130e6ca81b4!8m2!3d46.9911796!4d28.9091921!16s%2Fg%2F11v4pvc6q2!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          Контакты
        </a>
      </div>
    </footer>
  );
}
