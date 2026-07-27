// ==========================
// Welcome Screen
// ==========================

const welcomePage = document.getElementById("welcomePage");
const studentPage = document.getElementById("studentPage");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {

    welcomePage.style.display = "none";
    studentPage.style.display = "block";

});

// ==========================
// Variables
// ==========================

const body = document.getElementById("body");
const editor = document.getElementById("editor");
const studentHeader = document.getElementById("studentHeader");

const studentName = document.getElementById("studentName");
const studentAge = document.getElementById("studentAge");
const studentSubject = document.getElementById("studentSubject");
const favoriteColor = document.getElementById("favoriteColor");

const createBtn = document.getElementById("createBtn");
const themeBtn = document.getElementById("themeBtn");
const hideBtn = document.getElementById("hideBtn");
const resetBtn = document.getElementById("resetBtn");

const profileCard = document.getElementById("profileCard");

const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displaySubject = document.getElementById("displaySubject");

const avatar = document.getElementById("avatar");

const gender = document.getElementsByName("gender");

// ==========================
// Create Profile
// ==========================

createBtn.addEventListener("click", function () {

    displayName.textContent = studentName.value;
    displayAge.textContent = "Age: " + studentAge.value;
    displaySubject.textContent = studentSubject.value;

    profileCard.style.backgroundColor = favoriteColor.value;

    for (let choice of gender) {

        if (choice.checked) {

            if (choice.value === "female") {

                avatar.textContent = "👩🏻";

            } else {

                avatar.textContent = "👨🏻";

            }

        }

    }

});

// ==========================
// Hide / Show Profile
// ==========================

let isHidden = false;

hideBtn.addEventListener("click", function () {

    if (isHidden) {

        profileCard.style.display = "";

        hideBtn.textContent = "Hide Profile";

        isHidden = false;

    } else {

        profileCard.style.display = "none";

        hideBtn.textContent = "Show Profile";

        isHidden = true;

    }

});

// ==========================
// Theme
// ==========================

themeBtn.addEventListener("click", function () {

    body.classList.toggle("darkBody");

    editor.classList.toggle("darkCard");

    profileCard.classList.toggle("darkCard");

    studentHeader.classList.toggle("darkText");

});

// ==========================
// Reset
// ==========================

resetBtn.addEventListener("click", function () {

    // Clear inputs
    studentName.value = "";
    studentAge.value = "";
    studentSubject.value = "";
    favoriteColor.value = "";

    // Default text
    displayName.textContent = "Your Name";
    displayAge.textContent = "Age";
    displaySubject.textContent = "Favorite Subject";

    // Default avatar
    avatar.textContent = "👩🏻";

    // Female selected
    gender[0].checked = true;

    // Reset profile card
    profileCard.style.backgroundColor = "white";

    // Reset theme
    body.classList.remove("darkBody");
    editor.classList.remove("darkCard");
    profileCard.classList.remove("darkCard");
    studentHeader.classList.remove("darkText");

    // Show profile again
    profileCard.style.display = "";
    isHidden = false;
    hideBtn.textContent = "Hide Profile";

});