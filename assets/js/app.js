const listItemsNodeList = document.querySelectorAll(".selector--item");
const submitBtn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const card = document.querySelector(".card");
const reatPlace = document.querySelector("#rated--number");
const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  if (e.target.closest(".card")) {
    return;
  }
  !modal.classList.contains("hide") && card.classList.remove("hide");
  card.style.animation = "up 1s";
  modal.classList.add("hide");
});

listItemsNodeList.forEach((listItem, currentIndex) => {
  // addEvent
  listItem.addEventListener("mouseenter", hoverdListItem);
  listItem.addEventListener("mouseleave", unDoHoverdListItems);
  listItem.addEventListener("click", add);

  // functions
  function add(e) {
    check(e);
    e.target.classList.add("active");
    submitBtn.addEventListener("click", (event) => {
      modal.classList.remove("hide");
      modal.style.animation = "up 1s";
      card.classList.add("hide");
      reatPlace.textContent = e.target.textContent;
    });
  }

  function hoverdListItem() {
    listItemsNodeList.forEach((item, index) => {
      index <= currentIndex
        ? item.classList.add("bg--orange")
        : item.classList.remove("bg--orange");
    });
  }

  function check(event) {
    listItemsNodeList.forEach((item, index) => {
      index <= currentIndex
        ? item.classList.add("bg--orange")
        : item.classList.remove("bg--orange");
    });
    listItemsNodeList.forEach((listItem, index) => {
      listItem.classList.contains("active") &&
        listItem.textContent !== event.target.textContent &&
        listItem.classList.remove("active");
      index <= currentIndex && listItem.classList.add("bg--orange");
    });
  }

  function unDoHoverdListItems(e) {
    listItemsNodeList.forEach((item) => {
      item.classList.remove("bg--orange");
    });
  }
});
