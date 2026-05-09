"use client";

import { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateIsMobile = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology => (
        <div className="h-28 w-28" key={technology.name}>
          {isMobile !== false ? (
            <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-tertiary/70 p-5 shadow-card">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      )))}
    </div>
  )
}

export default Tech