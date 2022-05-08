
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
   
    userInputData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userInputData));
    }
    

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(userInputData);
}

function inputDataSave() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parcedData = JSON.parse(savedData);
        formEmail.value = parcedData.email;
        formMessage.value = parcedData.message;
        
    }
}

