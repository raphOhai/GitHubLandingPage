import { gsap } from "gsap";
import { useEffect,} from "react";

export const Animate = (cardRef) => {
  
  return useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
};
