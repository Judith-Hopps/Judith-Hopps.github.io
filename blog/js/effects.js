function isDarkMode() {
  return (
    document.documentElement.classList.contains("dark") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

document.addEventListener("click", (e) => {
  const star = document.createElement("span");

  const dark = isDarkMode();
  star.innerText = dark ? "✦" : "✧"; // 🌙 / ☀️

  star.className = "sparkle";
  document.body.appendChild(star);

  star.style.left = e.clientX + "px";
  star.style.top = e.clientY + "px";

  setTimeout(() => star.remove(), 900);
});



// 用户晚上登录自动切换到暗色模式
(function () {
  const hour = new Date().getHours();
  const prefersDark =
    hour >= 19 || hour <= 6; // 🌙 19:00 - 06:00

  if (prefersDark) {
    document.documentElement.classList.add("dark");
  }
})();
