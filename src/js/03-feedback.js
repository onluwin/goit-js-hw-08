const emailFormRef = document.querySelector('input[name="email"]');
const messageFormRef = document.querySelector('textarea[name="message"]');
const formRef = document.querySelector('form');


const onFormInput = function (e) {
    const formData = new FormData()
    console.log(e.currentTarget.value);
}
emailFormRef.addEventListener('input',onFormInput)
messageFormRef.addEventListener('input',onFormInput)


console.log(emailFormRef, messageFormRef);