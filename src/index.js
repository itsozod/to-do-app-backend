import loadPage from "./initial-load-page";
import loadHomeForm from "./home-form";
import { myTodos, addTodos, renderTodos } from "./render";
import { myNotes, addNotes, renderNotes } from "./render-notes";
import { toggleDarkMode } from "./initial-load-page";
import showForm from "./signup-form";
import { displaySignupForm } from "./signup-form";
import { clearSignupForm } from "./signup-form";
import { showSignUpPage } from "./signup-form";
import { showLoginPage } from "./signup-form";
import { validateLoginForm } from "./signup-form";
import { validateSignUpForm } from "./signup-form";
import { showPassword } from "./signup-form";

function displayHomeOrNotes() {
  const listHome = document.querySelector(".list-home");
  const listNotes = document.querySelector(".list-notes");
  const addHomeContainer = document.querySelector(".add-homeContainer");
  const addHomeBtn = document.querySelector(".add-home-btn");
  const addNotesContainer = document.querySelector(".add-notesContainer");
  const addNotesBtn = document.querySelector(".add-notes-btn");
  const formHomeContainer = document.querySelector(".form-container");
  const formNotesContainer = document.querySelector(".form-container1");
  const mainTodos = document.querySelector(".main-todos");
  const mainNotesContainer = document.querySelector(".main-notes-container");
  const mainEmpty = document.querySelector(".main-empty");
  const mainEmptyNotes = document.querySelector(".main-empty-notes");

  const activeTab = localStorage.getItem("activeTab");

  // Set the initial active tab based on the stored value
  if (activeTab === "listNotes") {
    listNotes.classList.add("active");
    listHome.classList.remove("active");
    addHomeContainer.style.display = "none";
    addHomeBtn.classList.remove("active");
    addNotesContainer.style.display = "flex";
    formHomeContainer.style.display = "none";
    mainTodos.style.display = "none";
    mainNotesContainer.style.display = "grid";
    mainEmpty.style.display = "none";
    mainEmptyNotes.style.display = "flex";
  } else {
    listHome.classList.add("active");
    listNotes.classList.remove("active");
    addHomeContainer.style.display = "flex";
    addNotesBtn.classList.remove("active");
    addNotesContainer.style.display = "none";
    formNotesContainer.style.display = "none";
    mainNotesContainer.style.display = "none";
    mainTodos.style.display = "flex";
    mainEmpty.style.display = "flex";
    mainEmptyNotes.style.display = "none";
  }
  // to dos tab for displaying todos
  listHome.addEventListener("click", () => {
    listHome.classList.add("active");
    listNotes.classList.remove("active");
    addHomeContainer.style.display = "flex";
    addNotesBtn.classList.remove("active");
    addNotesContainer.style.display = "none";
    formNotesContainer.style.display = "none";
    mainNotesContainer.style.display = "none";
    mainTodos.style.display = "flex";
    mainEmptyNotes.style.display = "none";

    if (myTodos.length === 0) {
      mainEmpty.style.display = "flex";
    } else {
      mainEmpty.style.display = "none";
    }
    localStorage.setItem("activeTab", "listHome");
  });

  // notes tab for displaying notes
  listNotes.addEventListener("click", () => {
    listHome.classList.remove("active");
    listNotes.classList.add("active");
    addHomeContainer.style.display = "none";
    addHomeBtn.classList.remove("active");
    addNotesContainer.style.display = "flex";
    formHomeContainer.style.display = "none";
    mainTodos.style.display = "none";
    mainNotesContainer.style.display = "grid";
    mainEmpty.style.display = "none";

    if (myNotes.length === 0) {
      mainEmptyNotes.style.display = "flex";
    } else {
      mainEmptyNotes.style.display = "none";
    }
    localStorage.setItem("activeTab", "listNotes");
  });

  // button for adding todos
  addHomeBtn.addEventListener("click", () => {
    if (addHomeBtn.classList.contains("active")) {
      addHomeBtn.classList.remove("active");
      formHomeContainer.style.display = "none";
    } else {
      addHomeBtn.classList.add("active");
      formHomeContainer.style.display = "flex";
    }
  });

  // button for adding notes
  addNotesBtn.addEventListener("click", () => {
    if (addNotesBtn.classList.contains("active")) {
      addNotesBtn.classList.remove("active");
      formNotesContainer.style.display = "none";
    } else {
      addNotesBtn.classList.add("active");
      formNotesContainer.style.display = "flex";
    }
  });
}

// showing everything in the page
function showPage() {
  loadPage();
  displayHomeOrNotes();
  loadHomeForm();

  const submitBtn = document.querySelector("#submit-btn");
  submitBtn.addEventListener("click", addTodos);
  renderTodos();

  const submitBtn1 = document.querySelector("#submit-btn1");
  submitBtn1.addEventListener("click", addNotes);
  renderNotes();

  const toggle = document.querySelector("#toggleDark");
  toggle.addEventListener("click", toggleDarkMode);

  const currentMode = localStorage.getItem("mode");
  if (currentMode === "dark") {
    toggleDarkMode();
  }
  showForm();

  const mainBtn = document.querySelector(".mainBtn");
  mainBtn.addEventListener("click", displaySignupForm);

  const formClose = document.querySelector(".form-close");
  formClose.addEventListener("click", clearSignupForm);

  const signupShowBtn = document.querySelector("#signup-show");
  signupShowBtn.addEventListener("click", showSignUpPage);

  const loginShowBtn = document.querySelector("#login-show");
  loginShowBtn.addEventListener("click", showLoginPage);

  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", validateLoginForm);

  const newForm = document.getElementById("new-form");
  newForm.addEventListener("submit", validateSignUpForm);

  showPassword();
}
showPage();