function swiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: screen.width <= 500 ? 1 : screen.width <= 800 ? 2 : 3,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });
  return swiper;
}

// creating project objects
const root_code = document.querySelector(".codes");
const root_design = document.querySelector(".designs");

function create_card_codes(item) {
  const card = document.createElement("div");
  card.classList.add("swiper-slide");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${item.url}" target="_blank">
  <div class="card_img">
  <img src=${item.image}>
  </div>
  </a>
  <div class="card_bg">
  <h2>${item.title}</h2>
  <h3>${item.body}</h3>
  </div>
  `;
  root_code.appendChild(card);
}

function create_card_designs(item) {
  const card = document.createElement("div");
  card.classList.add("swiper-slide");
  card.classList.add("card");
  card.innerHTML = `
  <a href="${item.url}" target="_blank">
  <div class="card_img">
  <img src=${item.image}>
  </div>
  </a>
  <div class="card_bg">
  <h2>${item.title}</h2>
  <h3>${item.body}</h3>
  </div>
  `;
  root_design.appendChild(card);
}

function items_to_item(items) {
  items[0].forEach((item) => {
    create_card_codes(item);
  });
  items[1].forEach((item) => {
    create_card_designs(item);
  });
}

fetch("script/project.json")
  .then((res) => res.json())
  .then((items) => items_to_item(items))
  .then(swiper);

// theme changing
let yes_no = false; // false for dark theme.
document.querySelector("#change_theme").addEventListener("click", () => {
  yes_no = !yes_no;
  if (yes_no) {
    document.body.setAttribute("data-theme", "light");
    document.querySelector("#change_theme").style.transform = "rotate(180deg)";
    document.querySelector("#change_theme").style.transition = "1s ease";
  } else {
    document.body.setAttribute("data-theme", "dark");
    document.querySelector("#change_theme").style.transform = "rotate(0deg)";
    document.querySelector("#change_theme").style.transition = "1s ease";
  }
});
