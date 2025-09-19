(function () {
  const track = document.querySelector(".nat-track");
  const slides = Array.from(track.children);
  const prev = document.querySelector(".nat-btn.prev");
  const next = document.querySelector(".nat-btn.next");
  const dotsWrap = document.querySelector(".nat-dots");
  let index = 0;

  // criar pontinhos
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    [...dotsWrap.children].forEach((d, i) =>
      d.classList.toggle("active", i === index)
    );
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
  }

  prev.addEventListener("click", () => goTo(index - 1));
  next.addEventListener("click", () => goTo(index + 1));


  update();
})();
