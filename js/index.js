//Portfolio image filter

const _portfolio_items = document.getElementById("_portfolio-items");

const app_btn = document.getElementById("filter-app");
const card_btn = document.getElementById("filter-card");
const web_btn = document.getElementById("filter-web");
const all_imgs = document.getElementById("filter-all");

const item_app = document.getElementsByClassName("_item-app");
const item_card = document.getElementsByClassName("_item-card");
const item_web = document.getElementsByClassName("_item-web");

const filter_btns = [all_imgs, web_btn, card_btn, app_btn];
const default_filter = all_imgs;

filter_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.id === "filter-all") {
      [...item_card, ...item_web, ...item_app].forEach(
        (item) => (item.style.display = "block")
      );
    } else if (btn.id === "filter-app") {
      [...item_app].forEach((item) => (item.style.display = "block"));
      [...item_card, ...item_web].forEach(
        (item) => (item.style.display = "none")
      );
    } else if (btn.id === "filter-card") {
      [...item_card].forEach((item) => (item.style.display = "block"));
      [...item_app, ...item_web].forEach(
        (item) => (item.style.display = "none")
      );
    } else if (btn.id === "filter-web") {
      [...item_web].forEach((item) => (item.style.display = "block"));
      [...item_card, ...item_app].forEach(
        (item) => (item.style.display = "none")
      );
    }
  });
});
