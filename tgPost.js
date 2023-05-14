'use strict'

const formAlert = document.querySelector('#form-alert');

const TOKEN = "6280802976:AAElEESVuoAblSVlRLSf1KHDl-HFEZtLTjA";
const CHAT_ID = "-1001805181296";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.querySelector('#form-tg').addEventListener('submit', function (e) {
    e.preventDefault();

    console.log(this);
    let message = `<b>ЗАЯВКА С САЙТА</b>\n\n`;
    message += `<b>Имя: </b>${this['client-name'].value}\n`;
    message += `<b>Телефон: </b>${this['client-phone'].value}\n`;
    message += `<b>Вопрос: </b>${this['client-question'].value}\n`;

    console.log(message);

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
    })
        .then(() => {
            this['client-name'].value = '';
            this['client-phone'].value = '';
            this['client-question'].value = '';
            formAlert.textContent = 'Заявка успешно отправлена!'
        })
        .catch(() => {
            formAlert.textContent = 'Что-то пошло не так, попробуйте еще раз!'
        })
        .finally(() => {
            formAlert.style.display = 'block';
        });
});