import throttle from "lodash.throttle";

const formRef = document.querySelector('form');
const LOCAL_STORAGE_DATA_KEY = 'feedback-form-state';

initPage()

function onFormInput(e) {
    const { name, value } = e.target;
    
    try {
        let saveData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
        if (saveData) {
            saveData = JSON.parse(saveData)
        } else {
            saveData = {}
        }
        saveData[name] = value;
        const stringifyData = JSON.stringify(saveData)
        localStorage.setItem(LOCAL_STORAGE_DATA_KEY, stringifyData) 
    } catch (error) {
        console.error(error);
    }
}

function initPage() {
    const saveData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
    if (!saveData) {
        return;
    }

    const parseData = JSON.parse(saveData)
    // console.log(parseData);
    Object.entries(parseData).forEach(([name, value]) => {
        formRef.elements[name].value = value
    });
}
function onFormSubmit(e) {
    e.preventDefault()
    
    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)));
    formRef.reset()
    localStorage.clear()
}
formRef.addEventListener('input', throttle(onFormInput, 500))
formRef.addEventListener('submit', onFormSubmit)

