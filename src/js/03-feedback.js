const emailFormRef = document.querySelector('input[name="email"]');
const messageFormRef = document.querySelector('textarea[name="message"]');
const formRef = document.querySelector('form');
const LOCAL_STORAGE_DATA_KEY = 'feedback-form-state';

initPage()

let formData = {}
function onFormInput(e) {
    const { name, value } = e.target;
    formData[name] = value;
    localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(formData))
}

function initPage(e) {
    const saveData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY)
    if (!saveData) {
        return
    } else {
        e.currentTarget.value = JSON.parse(saveData).email
    }
}
messageFormRef.addEventListener('input', onFormInput)
emailFormRef.addEventListener('input', onFormInput)