let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkModeIcon");

console.log(darkMode);

const enableDarkMode = () => {
  // step 1: add the class darkmode to the body
  document.body.classList.add("dark-theme");
  //step2: update darkMode in the localStorage
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  // added the class darkmode to the body
  document.body.classList.remove("dark-theme");
  //updated darkMode in the localStorage
  localStorage.setItem("darkMode", null);
};

//page loads, then this checks last memory of darkmode being on or off.
if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  //update local storage for darkmode
  darkMode = localStorage.getItem("darkMode");

  //if conditon for darkmode check
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
