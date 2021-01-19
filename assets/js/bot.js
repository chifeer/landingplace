// https://api.telegram.org/bot1552884148:AAHh8wdGM-gbEzimzxHChfRvDJ8eNyK4YYw/getUpdates
//https://api.telegram.org/bot1552884148:AAHh8wdGM-gbEzimzxHChfRvDJ8eNyK4YYw/sendMessage?chat_id=-292730358&text=test
// -292730358

function sendMessageToTelegramBot() {

    //определяем модальное окно или нет
    let nameClient = document.getElementById('nameClentBot').value;
    let email;
    let phone;
    let message;
    let h5modal = document.getElementById("h5modal").innerText;

    // alert(nameClient);

    if (nameClient) {
        // let nameClient = document.getElementById('nameClentBot').value;
        email = document.getElementById('emailMessBot').value;
        phone = document.getElementById('phoneMessBot').value;
        message = document.getElementById('sendMessModalBot').value;
    } else {
        nameClient = document.getElementById('name').value;
        email = document.getElementById('email').value;
        phone = document.getElementById('phone').value;
        message = document.getElementById('messgeToBot').value;
    }

    //console.log(h5modal);

    //  console.log("in function");
    const token = '1552884148:AAHh8wdGM-gbEzimzxHChfRvDJ8eNyK4YYw';
    let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-292730358&text=' + 'Имя заказчика: ' +
        nameClient + ' E-mail: ' + email + ' Телефон: ' + phone + ' Сообщение: ' + message + ' Услуга: ' + h5modal;
    // let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-292730358&text='+url;
    // console.log(url);

    let xHttp = new XMLHttpRequest();

    xHttp.open("GET", url, true);
    xHttp.send();

    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('phone').value="";
    document.getElementById('messgeToBot').value="";
    document.getElementById('nameClentBot').value="";

};
