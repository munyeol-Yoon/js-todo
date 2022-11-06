const $localname = document.querySelector("#localname");
const $loginForm = document.querySelector("#localname #loginform");
const $nameInput = document.getElementById("nameinput");
const $nameBtn = document.getElementById("namebtn");
const $logout = document.createElement("p");
const $newName = document.createElement("div");
const $header = document.querySelector("header");
const USERNAME_KEY = "username";
const checkUserName = localStorage.getItem(USERNAME_KEY);

const handleClick = (event) => {
  event.preventDefault();
  const nameValue = $nameInput.value;
  console.log(nameValue);
  if (!nameValue) {
    return;
  } else {
    window.localStorage.setItem(USERNAME_KEY, nameValue);
    showName(nameValue);
  }
};

const showName = (name) => {
  $nameInput.value = null;
  const getName = window.localStorage.getItem(USERNAME_KEY);

  $localname.append($newName);
  $newName.className = "newname";
  $newName.textContent = `Hi ${getName} 🤗`;

  $header.append($logout);
  $logout.className = "logout";
  $logout.textContent = "LOGOUT";

  removeInput();
};

const removeInput = () => {
  $newName.classList.remove("hidden");
  $loginForm.classList.add("hidden");
};

if (checkUserName === null) {
  console.log("x");
} else {
  removeInput();
  showName(checkUserName);
}

$loginForm.addEventListener("click", handleClick);
$logout.addEventListener("click", () => {
  $logout.classList.add("hidden");
  $newName.classList.add("hidden");
  $loginForm.classList.remove("hidden");
  window.localStorage.removeItem("username");
});
