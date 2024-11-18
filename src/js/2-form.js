const formData = { email: "", message: "" };
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

function populateFormFromStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";

    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
    }
}

function updateStorage(event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
    }

    console.log("Submitted data:", formData);

    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
}

form.addEventListener("input", updateStorage);
form.addEventListener("submit", handleSubmit);

populateFormFromStorage();



