const root = document.querySelector(".recent_work");

function create_random_recent_project(item) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <a href="${item.url}" target="_blank">
    <img src="${item.image}" alt="nothing">
    <div class="card_bg">
    <h2>${item.title}</h2>
    <h3>${item.body}</h3>
    </div>
    </a>
    `;
  root.insertAdjacentElement("afterbegin", card);
}

function items_to_item(items) {
  create_random_recent_project(
    items[Math.floor(Math.random() * (1 - 0 + 1) + 0)][
      Math.floor(Math.random() * (2 - 0 + 1) + 0)
    ]
  );
}

fetch("script/project.json")
  .then((res) => res.json())
  .then((items) => items_to_item(items));

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
