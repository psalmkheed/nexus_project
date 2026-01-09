const d = new Date("Jan 16, 2026").getTime();
const timer = setInterval(countdown, 1000);

function countdown() {
      const now = new Date().getTime();
      const gap = d - now;

      // conditional statement to run the event day is over
      if (gap <= 0) {
            document.body.classList.add("no-scroll");

            clearInterval(timer);

            document.getElementById("days").innerText = 0;
            document.getElementById("hours").innerText = 0;
            document.getElementById("min").innerText = 0;
            document.getElementById("sec").innerText = 0;

            if (!document.getElementById("event-overlay")) {
                  document.body.insertAdjacentHTML(
                        "beforeend",
                        `
        <div id="event-overlay"
          class="fixed inset-0 z-50 bg-black/60 backdrop-blur-md
                 flex items-center justify-center px-4">
          <div
            class="text-5xl md:text-7xl font-bold text-center text-red-500
                   p-6 border-4 border-red-500 rounded-xl bg-black/40">
            Event has started
          </div>
        </div>
        `
                  );
            }
            return;
      }

      const days = Math.floor(gap / (1000 * 60 * 60 * 24));
      const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
      const min = Math.floor((gap / (1000 * 60)) % 60);
      const sec = Math.floor((gap / 1000) % 60);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("min").innerText = min;
      document.getElementById("sec").innerText = sec;
}

