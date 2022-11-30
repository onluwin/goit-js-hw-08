const emailFormRef = document.querySelector('input[name="email"]');
const messageFormRef = document.querySelector('textarea[name="message"]');
const formRef = document.querySelector('form');
const LOCAL_STORAGE_DATA_KEY = 'feedback-form-state';

let formData = {}
initPage()

// console.log(saveData);







    
    // console.log(saveData);
    
    
const onFormInput = function (e) {

    const { name, value } = e.currentTarget
    formData[name] = value
    const strgingifyFormData = JSON.stringify(formData);
    
    console.log('formData' , formData);
    console.log('saveData, ', saveData);
    
    console.log('strgingifyFormData', strgingifyFormData);
    console.log('-------------');
    
    localStorage.setItem(LOCAL_STORAGE_DATA_KEY, strgingifyFormData)
    
    
    
    
}
const saveData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY);
function initPage() {
    if (!saveData) {
        return;
    }
    else {
        emailFormRef.value = JSON.parse(saveData).email
    }
}




messageFormRef.addEventListener('input', onFormInput)
emailFormRef.addEventListener('input', onFormInput)
// console.log(messageFormRef);
// console.log('ff');