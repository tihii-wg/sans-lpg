import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useRef, useState } from "react";

export default function ImageCarousel() {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  const ref = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;

    const width = ref.current.clientWidth;

    ref.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  const images = [
    "/img/car.png",
    "/img/IMG_1642.JPG",
    "/img/IMG_1644.JPG",
    "/img/IMG_1646.JPG",
  ];

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto px-2">
        {/*LEFT */}
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur rounded-full p-2 shadow cursor-pointer"
          onClick={() => scroll("left")}
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

        {/*SCROLL*/}

        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-2"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="car"
              onClick={() => {
                setSelected(img);
                setOpen(true);
              }}
              className="snap-start
                shrink-0
                rounded-xl
                cursor-pointer
                transition hover:scale-105
                
                w-[85%] 
                sm:w-[45%] 
                md:w-[30%] 
                lg:w-[23%]
                max-[640px]:w-[65%]
                
                h-40
                sm:h-48
                md:h-52
                lg:h-60
              max-[640px]:h-40
                
                object-cover"
            />
          ))}
        </div>

        {/* RIGHT */}

        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur rounded-full p-2 shadow cursor-pointer"
          onClick={() => scroll("right")}
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* MODAL */}

      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <img
            className="max-h-[90vh] max-w-[90vw] rounded-xl "
            src={selected || ""}
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </>
  );
}
