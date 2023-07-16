function createButtonContainer() {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("sign-button-container");
    buttonContainer.innerHTML = `
      <button class="mainBtn">Sign up</button>
      `;
    return buttonContainer;
  }
  function createSignUpForm() {
    const sectionHome = document.createElement("section");
    sectionHome.classList.add("home");
    sectionHome.innerHTML = `
      <div class="new-form-container">
      <i class="uil uil-times form-close"></i>
      <div class="form signup-form">
      <form id="new-form" action="/" novalidate>
      <h2 class="sign-desc">Sign up</h2>
      <div class="input-box">
      <input type="email" placeholder="Enter your email" id="email" />
      <div class="error-output"></div>
      <i class="uil uil-envelope-alt email"></i>
      </div>
      <div class="input-box">
      <input type="password" placeholder="Create password" id="password" />
      <div class="error-output"></div>
      <i class="uil uil-lock password"></i>
      <i class="uil uil-eye-slash pw_hide"></i>
      </div>
      <div class="input-box">
      <input type="password" placeholder="Confirm password" id="password2" />
      <div class="error-output"></div>
      <i class="uil uil-lock password"></i>
      <i class="uil uil-eye-slash pw_hide"></i>
      </div>
      <button type="submit" class="signup-btn">Sign up now</button>
      <div class="login-signup">Already have an account? <a href="#" id="login-show">Log in</a></div>
      </form>
      </div>
      <div class="form login-form">
      <form id="loginForm" action="/" novalidate>
      <h2 class="sign-desc">Log in</h2>
      <div class="input-box">
      <input type="email" placeholder="Enter your email" id="email-login" />
      <div class="error-output"></div>
      <i class="uil uil-envelope-alt email"></i>
      </div>
      <div class="input-box">
      <input type="password" placeholder="Enter your password" id="password-login" />
      <div class="error-output"></div>
      <i class="uil uil-lock password"></i>
      <i class="uil uil-eye-slash pw_hide"></i>
      </div>
      <button type="submit" class="login-btn">Login now</button>
      <div class="login-signup"> Don't have an account? <a href="#" id="signup-show">Sign up</a></div>
      </form>
      </div>
      </div>
      `;
    return sectionHome;
  }
  
  function displaySignupForm() {
    const pageContainer = document.querySelector(".page-container");
    const sideBar = document.querySelector(".side-bar");
    const newFormContainer = document.querySelector(".new-form-container");
    const line1 = document.querySelector(".line1");
    const line2 = document.querySelector(".line2");
    const line3 = document.querySelector(".line3");
    newFormContainer.classList.add("show");
    pageContainer.classList.add("dark");
    sideBar.style.display = "none";
    line1.classList.remove("active");
    line2.style.opacity = "1";
    line3.classList.remove("active");
  }
  
  function clearSignupForm() {
    const pageContainer = document.querySelector(".page-container");
    const newFormContainer = document.querySelector(".new-form-container");
    newFormContainer.classList.remove("show");
    pageContainer.classList.remove("dark");
  }
  
  function showSignUpPage() {
    const signUpForm = document.querySelector(".signup-form");
    const logInForm = document.querySelector(".login-form");
    logInForm.classList.add("noshow");
    signUpForm.classList.add("show");
  }
  
  function showLoginPage() {
    const signUpForm = document.querySelector(".signup-form");
    const logInForm = document.querySelector(".login-form");
    logInForm.classList.remove("noshow");
    signUpForm.classList.remove("show");
  }
  
  function validateSignUpForm(e) {
    e.preventDefault();
    validateInputs();
  }
  function validateLoginForm(e) {
    e.preventDefault();
    validateInputs();
  }
  
  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error-output");
  
    errorDisplay.innerText = message;
    inputControl.classList.add("error-control");
    inputControl.classList.remove("success");
  };
  
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error-output");
  
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error-control");
  };
  
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validateInputs() {
    const email = document.getElementById("email");
    const emailValue = email.value.trim();
    const password = document.getElementById("password");
    const passwordValue = password.value.trim();
    const password2 = document.getElementById("password2");
    const password2Value = password2.value.trim();
    const emailLogin = document.getElementById("email-login");
    const emailLoginValue = emailLogin.value.trim();
    const passwordLogin = document.getElementById("password-login");
    const passwordLoginValue = passwordLogin.value.trim();
  
    if (emailValue === '') {
      setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
  } else {
      setSuccess(email);
  }
  
  if (emailLoginValue === '') {
      setError(emailLogin, 'Email is required');
  } else if (!isValidEmail(emailLoginValue)) {
      setError(emailLogin, 'Provide a valid email address');
  } else {
      setSuccess(emailLogin);
  }
  
  if (passwordValue === '') {
      setError(password, 'Password is required');
  } else if (passwordValue.length < 8) {
      setError(password, 'Password must be at least 8 characters');
  } else if (passwordValue.length > 10) {
      setError(password, "Password must be 10 characters");
  } else {
      setSuccess(password);
  }
  
  if (passwordLoginValue === '') {
      setError(passwordLogin, 'Password is required');
  } else if (passwordLoginValue.length < 8) {
      setError(passwordLogin, 'Password must be at least 8 characters');
  } else if (passwordLoginValue.length > 10) {
      setError(passwordLogin, "Password must be 10 characters");
  } else {
      setSuccess(passwordLogin);
  }
  
  if (password2Value === '') {
      setError(password2 , 'Please confirm your password');
  } else if (password2Value !== passwordValue) {
      setError(password2, "Passwords don't match");
  } else {
      setSuccess(password2);
  }
  }
  
  function showPassword() {
    const pwShowHide = document.querySelectorAll(".pw_hide");
    pwShowHide.forEach(icon => {
      icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        console.log(getPwInput);
        if (getPwInput.type === "password") {
          getPwInput.type = "text";
          icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
          getPwInput.type = "password";
          icon.classList.replace("uil-eye", "uil-eye-slash");
        }
      });
    });
  }
  
  function showForm() {
    const ulBar = document.querySelector(".ul-bar");
    const signUpBtn = createButtonContainer();
    ulBar.appendChild(signUpBtn);
  
    const main = document.querySelector("#main");
    const sectionHome = createSignUpForm();
    main.appendChild(sectionHome);
  
  }
  export default showForm;
  export {
    displaySignupForm,
    clearSignupForm,
    showSignUpPage,
    showLoginPage,
    validateLoginForm,
    validateSignUpForm,
    showPassword,
  };