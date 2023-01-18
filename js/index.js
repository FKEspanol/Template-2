const selectId = (...sectionIds) => {
  const el = [...sectionIds].map((i) => document.getElementById(i));
  if (el.length > 1) return el;
  return el[0];
};

const onClick = (el, cb) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    cb();
  });
};

//Portfolio image filter

const _portfolio_items = document.getElementById("_portfolio-items");

const item_app = document.getElementsByClassName("_item-app");
const item_card = document.getElementsByClassName("_item-card");
const item_web = document.getElementsByClassName("_item-web");

const filter_btns = selectId(
  "filter-app",
  "filter-card",
  "filter-web",
  "filter-all"
);
const default_filter = selectId("filter-all");

filter_btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
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

// scroll to an element with a header height

const navLinks = [...document.getElementsByClassName("_section-link")];

navLinks.forEach((el) => {
  onClick(el, () => {
    const link_href = el.getAttribute("href").replace("#", "");
    window.scrollTo({
      top: selectId(link_href).offsetTop - selectId("header").offsetHeight,
      behavior: "smooth",
    });
  });
});
