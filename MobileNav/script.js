const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    item.classList.add("active");
    console.log(contents);
    contents[idx].classList.add("show");
  });
});

const hideAllContents = () => {
  contents.forEach((content) => content.classList.remove("show"));
  listItems.forEach((item) => item.classList.remove("active"));
};
