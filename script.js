// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// submit button
const btn =document.querySelector(".btn")
btn.addEventListener("click",function(){
  alert("Terimakasih telah menghubungi kami")
})