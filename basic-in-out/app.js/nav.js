const controlNav = document.querySelector("#controlNav");
const sideBar = document.querySelector("#sideBar");
const skillCount = document.querySelector("#skillCount");
const lists = document.querySelectorAll(".list");
const ggLink = document.querySelector("#ggLink");
const ytLink = document.querySelector("#ytLink");

// get attribute
console.log(ggLink.href);
console.log(ggLink.target);
// console.log(img1.src);
// console.log(img1.getAttribute("src"));

//set attribute
// ggLink.href = "https://mms-it.com";
// ggLink.removeAttribute("target")
// img1.src = "path"
// img1.setAttribute("src", "path")

// images.forEach((image) => {
//     // console.log(image);
//     image.src = "..."
// })



// console.log(controlNav);
lists.forEach((list) => {
  // console.log(list);
  list.onclick = () => {
    list.classList.toggle("bg-gray-300");
    const counterSelected = document.querySelectorAll(".list.bg-gray-300");
    skillCount.innerText = counterSelected.length;
  };
});

controlNav.onclick = () => {
  sideBar.classList.toggle("translate-x-full");
};
