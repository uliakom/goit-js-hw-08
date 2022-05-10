
import throttle from 'lodash/throttle';

const formEmail = document.querySelector('input');
const formMessage = document.querySelector('textarea');
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onInputChange,500));
feedbackForm.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = "feedback-form-state";

const userInputData = {email:'',message:''};

function onInputChange(event) {
    userInputData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userInputData));
    }
    

function fillFormfromStorage() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parcedData = JSON.parse(savedData);
        formEmail.value = parcedData.email;
        formMessage.value = parcedData.message;
    }
}

function onFormSubmit(event) {
    event.preventDefault();

     const inputData = {
    email: formEmail.value,
    message: formMessage.value,
  };
    console.log("User data:", inputData);

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

fillFormfromStorage();