(function () {
  const track = document.querySelector(".anexos-track");
  const slides = Array.from(track.children);
  const prev = document.querySelector(".anexos-btn.prev");
  const next = document.querySelector(".anexos-btn.next");
  const dotsWrap = document.querySelector(".anexos-dots");
  let index = 0;

  // Criar pontinhos (indicadores)
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  // Atualiza posição do slide e os pontinhos
  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    [...dotsWrap.children].forEach((d, i) =>
      d.classList.toggle("active", i === index)
    );
  }

  // Vai para slide específico
  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
  }

  // Eventos dos botões
  prev.addEventListener("click", () => goTo(index - 1));
  next.addEventListener("click", () => goTo(index + 1));

  

  // Inicia
  update();
})();
