const key = "a615164394aa6262a13005637ef26d06"

function sendDados(dados){

    console.log(dados)
    document.querySelector(".city").innerHTML = "em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".minima").innerHTML = "Minima: " + Math.floor(dados.main.temp_min) + "°"
    document.querySelector(".maxima").innerHTML = "Máxima: " + Math.floor(dados.main.temp_max) + "°"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(city){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    sendDados(dados)
}

function clickButton() {
    const city= document.querySelector(".input-city").value
    
    searchCity(city)
}