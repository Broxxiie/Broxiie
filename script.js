const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX - "px" + "px";
  cursor.style.top = e.clientY - "px" + "px";
});
