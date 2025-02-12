const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX - 100 + "px";
  cursor.style.top = e.clientY - 100 + "px";
});
