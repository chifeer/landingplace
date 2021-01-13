// https://api.telegram.org/bot1552884148:AAHh8wdGM-gbEzimzxHChfRvDJ8eNyK4YYw/getUpdates
//https://api.telegram.org/bot1552884148:AAHh8wdGM-gbEzimzxHChfRvDJ8eNyK4YYw/sendMessage?chat_id=-292730358&text=test
// -292730358


let nameClient =document.getElementById('nameClentBot').value;
let email = document.getElementById('emailMessBot').value;
let phone = document.getElementById('phoneMessBot').value;
let message = document.getElementById('sendMessBot').value;
let button = document.getElementById('sendMesBotbutton');


console.log("START");

button.onclick = sendMessageToTelegramBot(nameClient, email, phone, message);

function sendMessageToTelegramBot(clinetName, email, phone, message){

    let name = $('.modal');
        //.find('input[name="name_"]').val();
    alert(name);
    alert("NAME", name);


    //  console.log("in function");
   // const token = '1552884148:AAHh8wdGM-gbEzimzxHChfRvDJ8eNyK4YYw';
   //  // let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-292730358&text='
   //  //     + email + phone + message;
   //  let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-292730358&text='+message;
   //  console.log(url);
   //
   //  let xHttp = new XMLHttpRequest();
   //
   //  xHttp.open("GET",url, true);
   //  xHttp.send();
};
