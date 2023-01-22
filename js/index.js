const selectId = (...sectionIds) => {
  const el = [...sectionIds].map((i) => document.getElementById(i));
  if (el.length > 1) return el;
  return el[0];
};

const selectClass = (className) => [
  ...document.getElementsByClassName(className),
];

const onClick = (el, cb) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    cb();
  });
};

//Portfolio image filter

const _portfolio_items = document.getElementById("_portfolio-items");

const item_app = selectClass("_item-app");
const item_card = selectClass("_item-card");
const item_web = selectClass("_item-web");

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

let isOpen = false; // state of the dropdown navbar

const navLinks = selectClass("_section-link");
const dropdownNavbar = selectId("dropdown-navbar");
const headerContainer = selectId("header-container");
const dropdownNavbarContainer = selectId("dropdown-navbar-container"); //we will use its height number when opening the dropdown navbar because dropdown navbar height is at css default 0px;

// scroll to an element below the header
navLinks.forEach((link) => {
  onClick(link, () => {
    const sectionID = link.getAttribute("href").replace("#", ""); //the href attr value of each "link" is the same as the section id value by removing the # symbol
    dropdownNavbar.style.height = "0px"; //(on smaller screen) hide the dropdown navbar after clicking a link
    isOpen = false; // set the state of the dropdown navbar to false after clicking a link
    window.scrollTo({
      top: selectId(sectionID).offsetTop - headerContainer.offsetHeight,
      behavior: "smooth",
    });
  });
});

//toggle dropdown menu on smaller screen
const toggleBtn = selectId("navbar-toggler-btn");
onClick(toggleBtn, () => {
  console.log("dshfsdhf");
  const height = dropdownNavbarContainer.offsetHeight;
  if (!isOpen) {
    dropdownNavbar.style.height = `${height}px`;
    isOpen = true;
    console.log("hello");
  } else if (isOpen) {
    dropdownNavbar.style.height = "0px";
    isOpen = false;
  }
});

//add header background color on scroll
window.onscroll = () => {
  if (window.scrollY > 100) {
    selectId("header").classList.remove("bg-transparent");
    selectId("header").classList.add("bg-dark");
  } else {
    selectId("header").classList.add("bg-transparent");
    selectId("header").classList.remove("bg-dark");
  }
};

//if the windows reloads or refreshes and the current window.scrollY is greater than 100 set the background to dark because the default background is transparent
window.addEventListener("DOMContentLoaded", () => {
  if (window.scrollY >= 100) {
    selectId("header").classList.remove("bg-transparent");
    selectId("header").classList.add("bg-dark");
  }
});
