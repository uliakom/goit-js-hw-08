
import throttle from 'lodash/throttle';

const formEmail = document.querySelector('input');
const formMessage = document.querySelector('textarea');
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onInputChange,500));
feedbackForm.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = "feedback-form-state";

let userInputData = {};
inputDataSave();
 

function onInputChange(event) {
    const {
        elements: { email, message },
    } = event.currentTarget;

    userInputData = {
        email: email.value,
        message: message.value
    };
    if (email.value === "" || message.value === "") {
        console.log("Please fill all fields");
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userInputData));
    }
    

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function inputDataSave() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parcedData = JSON.parse(savedData);
        formEmail.value = parcedData.email;
        formMessage.value = parcedData.message;
    }
}

