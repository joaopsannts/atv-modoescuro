const modoEscuro = () => {
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");
  const footer = document.querySelector(".footer");
  const botao = document.querySelector("modo-claro");

  if (botao.classList.contains("modo-claro")) {
    header.classList.add("modo-escuro");
    main.classList.add("modo-escuro");
    botao.classList.add("modo-escuro");
    footer.classList.add("modo-escuro");
    botao.classList.add("modo-escuro");
    botao.classList.remove("modo-claro");

    botao.textContent;
  } else {
    header.classList.add("modo-escuro");
    main.classList.add("modo-escuro");
    botao.classList.add("modo-escuro");
    footer.classList.add("modo-escuro");
    botao.classList.add("modo-escuro");
    botao.classList.remove("modo-claro");
  }
};
