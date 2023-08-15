window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const wrapper = createElement("div", ["wrapper", "card"]);

  for (let i = 1; i < 8; i++) {
    const row = createElement("div", `row-${i}`);
    wrapper.appendChild(row);
  }

  body.appendChild(wrapper);

  /****** ROW 1 ******/
  const row1 = document.querySelector(".row-1");
  const headingRow1 = createElement("h2", "h2");
  headingRow1.textContent = "1";
  row1.appendChild(headingRow1);

  /****** ROW 2 ******/
  const row2 = document.querySelector(".row-2");
  const box = createElement("div", ["blue", "box"]);
  row2.appendChild(box);
  const headingRow2 = createElement("h2", "h2");
  headingRow2.textContent = "2";
  row2.appendChild(headingRow2);

  /****** ROW 3 ******/
  const row3 = document.querySelector(".row-3");
  const meme = createElement("img", "meme");
  meme.setAttribute("src", "/images/programmer-humor.webp");
  meme.setAttribute("alt", "meme");
  row3.appendChild(meme);
  const headingRow3 = createElement("h2", "h2");
  headingRow3.textContent = "3";
  row3.appendChild(headingRow3);

  /****** ROW 4 ******/
  const row4 = document.querySelector(".row-4");
  for (let i = 0; i < 100; i++) {
    const box = createElement("div", ["red", "box"]);
    row4.appendChild(box);
  }
  const headingRow4 = createElement("h2", "h2");
  headingRow4.textContent = "4";
  row4.appendChild(headingRow4);

  /****** ROW 5 ******/
  const row5 = document.querySelector(".row-5");
  const ghost = createElement("div", "ghost");
  ghost.textContent = "👻";
  row5.appendChild(ghost);
  const headingRow5 = createElement("h2", "h2");
  headingRow5.textContent = "5";
  row5.appendChild(headingRow5);
  setInterval(() => {
    ghost.classList.toggle("visible");
  }, 1000);

  /****** ROW 6 ******/
  const row6 = document.querySelector(".row-6");
  const textContextRow6 = createElement("p", "text");
  textContextRow6.textContent =
    "I'm a magician. If I hover over a rabbit, it will dissapear!";
  const rabbitWrapper = createElement("div", "rabbit-wrapper");
  for (let i = 0; i < 20; i++) {
    const rabbit = createElement("div", "rabbit");
    rabbit.textContent = "🐇";
    rabbit.addEventListener("mouseover", (event) => {
      event.target.style.opacity = "0"; // Will make the rabbit transparent
      setTimeout(() => {
        event.target.style.opacity = "1"; // Will make the rabbit visible again
      }, 500); // The rabbit will reappear after 500 milliseconds (0.5 seconds)
    });
    rabbitWrapper.appendChild(rabbit);
  }
  row6.appendChild(textContextRow6);
  row6.appendChild(rabbitWrapper);
  const headingRow6 = createElement("h2", "h2");
  headingRow6.textContent = "6";
  row6.appendChild(headingRow6);

  /****** ROW 7 ******/
  let num = 350;
  const row7 = document.querySelector(".row-7");
  const textContextRow7 = createElement("p", "text");
  textContextRow7.textContent = `This page will self-destruct in ${num} seconds.`;
  textContextRow7.setAttribute("id", "countdown");
  row7.appendChild(textContextRow7);
  const buttonRow7 = createElement("button", "cancel-btn");
  buttonRow7.textContent = "Cancel";
  row7.appendChild(buttonRow7);

  const intervalId = setInterval(() => {
    const body = document.querySelector("body");
    textContextRow7.textContent = `This page will self-destruct in ${num} seconds.`;
    num -= 1;

    if (num <= 0) {
      clearInterval(intervalId);
      body.innerHTML = "";
      const bombWrapper = createElement("div", "bomb-wrapper");
      for (let i = 0; i < 5000; i++) {
        const bomb = createElement("span", "bomb");
        bomb.textContent = "💣";
        bombWrapper.appendChild(bomb);
      }
      body.appendChild(bombWrapper);
    }
  }, 1000);

  buttonRow7.addEventListener("click", () => {
    clearInterval(intervalId);
    row7.innerHTML = "";
    for (let i = 0; i < 500; i++) {
      const firework = createElement("span", "firework");
      firework.textContent = "💥";
      row7.appendChild(firework);
      row7.classList.add("firework-wrapper");
    }
  });
});

function createElement(tagName = "div", className = "") {
  const element = document.createElement(tagName);
  const isArray = Array.isArray(className);

  if (isArray) {
    element.classList.add(...className);
  } else {
    element.classList.add(className);
  }

  return element;
}
