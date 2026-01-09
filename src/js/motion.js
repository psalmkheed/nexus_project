import { animate, inView } from "https://cdn.skypack.dev/motion";

const animations = {
      "animate-left": {
            x: [-80, 0],
            opacity: [0, 1]
      },
      "animate-right": {
            x: [80, 0],
            opacity: [0, 1]
      },
      "animate-top": {
            y: [-80, 0],
            opacity: [0, 1]
      },
      "animate-bottom": {
            y: [80, 0],
            opacity: [0, 1]
      },
};


document.querySelectorAll(
      ".animate-left, .animate-right, .animate-top, .animate-bottom"
).forEach((el) => {

      inView(el, () => {
            // Delay based on class or order
            let delay = 0;

            if (el.classList.contains("delay-1")) delay = 0.15;
            if (el.classList.contains("delay-2")) delay = 0.3;
            if (el.classList.contains("delay-3")) delay = 0.45;

            for (const key in animations) {
                  if (el.classList.contains(key)) {
                        animate(el, animations[key], {
                              duration: 0.6,
                              easing: "ease-out",
                              delay
                        });
                  }
            }
      }, { once: true });
});

animate("#event-overlay", { opacity: [0, 1], scale: [0.9, 1] }, {
      duration: 0.5,
      easing: "ease-out"
});
