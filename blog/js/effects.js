function isDarkMode() {
  return (
    document.documentElement.classList.contains("dark") ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function createStar(clientX, clientY) {
  const star = document.createElement("span");

  const dark = isDarkMode();
  star.innerText = dark ? "✦" : "✧"; // 🌙 / ☀️

  star.className = "sparkle";
  document.body.appendChild(star);

  star.style.left = clientX + "px";
  star.style.top = clientY + "px";

  setTimeout(() => star.remove(), 900);
}

// 鼠标点击事件
document.addEventListener("click", (e) => {
  createStar(e.clientX, e.clientY);
});

// 移动设备触摸事件
document.addEventListener("touchend", (e) => {
  const touch = e.changedTouches[0];
  createStar(touch.clientX, touch.clientY);
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
