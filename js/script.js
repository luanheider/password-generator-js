const button = document.querySelector('#button')
const slider = document.querySelector('#slider')
const sizePassword = document.querySelector('#value')
const password = document.querySelector('#password')
const containerPassword = document.querySelector('#container-password')

const charset = 'abcdefghijklmnopqrstuvwxysABCDEFGHIJKLMNOPQRSTUVXYS0123456789!@'
let newPassword = ''

sizePassword.textContent = slider.value

/*função que altera o value do slider*/
slider.oninput = function() {
    sizePassword.textContent = this.value
}

const generatePassword = () => {
    let getPass = ''
    const n = charset.length
    
    for(let i = 0; i < slider.value; i++) {
        getPass += charset.charAt(Math.floor(Math.random() * n))
    }

    password.textContent = getPass
    containerPassword.classList.remove('hide')
    newPassword = getPass
}

const copyPassword = () => {
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(newPassword)
}

containerPassword.addEventListener('click', copyPassword)
button.addEventListener('click', generatePassword)