const button = document.querySelector(".btn");
const homerImg = document.querySelector(".homer-img");
const bigCloud = document.querySelector(".big-cloud");
const smallCloud = document.querySelector(".small-cloud");
const logo = document.querySelector(".logo");
const donut = document.querySelector(".donut");
const description = document.querySelector(".description");

button.addEventListener("mouseover", () => {
  anime({ targets: homerImg, opacity: 0, duration: 200, easing: "linear" });
  anime({ targets: bigCloud, translateY: -250, offset: 200 });
  anime({ targets: smallCloud, translateY: -250, offset: 100 });
  anime({ targets: logo, translateY: -250, duration: 200, easing: "linear" });
  anime({ targets: donut, top: 10, duration: 500, offset: 250 });
  anime({ targets: description, opacity: 1, duration: 300 });
});
button.addEventListener("mouseout", () => {
  anime({ targets: homerImg, opacity: 1, easing: "linear" });
  anime({ targets: bigCloud, translateY: 0, offset: 200 });
  anime({ targets: smallCloud, translateY: 0, offset: 100 });
  anime({ targets: logo, translateY: 0, duration: 200, easing: "linear" });
  anime({ targets: donut, top: 100, duration: 1000, offset: 250 });
  anime({ targets: description, opacity: 0 });
});
