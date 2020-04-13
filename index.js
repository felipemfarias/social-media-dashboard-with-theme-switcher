let darkModeSwitcher = document.getElementById("dark-mode-switch");
darkModeSwitcher.onchange = () => {
  darkModeSwitcher.checked
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");
};
