const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("You must fill all fields");
  }

  const user = {
    email: email.value,
    password: password.value,
  };

  console.log(user);
  e.currentTarget.reset();

}
