

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Please enter your name");
  engine(email, 1, "Please enter your email");
  engine(password, 2, "Please enter your password");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
