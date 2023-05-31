import { gsap } from "gsap";
import { useEffect } from "react";

export const Animate = () => {
  return useEffect(() => {
    const svg = document.querySelector(".svg");
    console.log(svg)

    const tl = gsap
      .timeline({
        defaults: { ease: "power1.in" },
        paused: true,
      })
      .to(".circle", { drawSVG: "100% 50%" })
    //   .from(".line", { drawSVG: "0% 0%" }, 0);

    svg.addEventListener("mouseenter", (e) => tl.play());
    svg.addEventListener("mouseleave", (e) => tl.reverse());
  }, []);
};
