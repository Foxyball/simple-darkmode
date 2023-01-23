/* Written by: Foxyball 2023 */

// add a dark mode toggle button to the page
const toggle = document.getElementById("darkModeToggle");
// add a listener to the toggle button
toggle.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
  }
});

// update the dark mode toggle button based on the current local storage value
const currentDarkMode = localStorage.getItem("darkMode");
if (currentDarkMode === "enabled") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
} else {
  document.body.classList.remove("dark-mode");
  toggle.checked = false;
}



