/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const feet = 3.281
const liter = 0.264
const kilo = 2.204
let x= ""
const lengthEl= document.getElementById("meter")
const volumeEl= document.getElementById("liter")
const massEl= document.getElementById("kilo")
const inputEl = document.getElementById("inputt")
const btn = document.getElementById("btnn")
let isDisplayed = false
btn.addEventListener("click" ,function(){
    x = inputEl.value
    convertor(x)
})


function convertor(x){
    let meterToFeet = x * feet
    let feetToMeter = x/ feet
    let literToGallon = x * liter
    let gallonToLiter = x/ liter
    let kiloToPounds = x * kilo
    let poundstokilo = x/ kilo
    
    if(isDisplayed === false){
        
       lengthEl.innerHTML += ` <p class = "pp"> ${x} meters =${Math.round(meterToFeet* 100)/100} feet | ${x} feet =${Math.round(feetToMeter * 100)/100} meter</p>`
       
        volumeEl.innerHTML += ` <p class = "pp"> ${x} Liters =${Math.round(literToGallon* 100)/100} Gallons | ${x} Gallons =${Math.round(gallonToLiter * 100)/100} liters</p>`
       
        massEl.innerHTML += ` <p class = "pp"> ${x} kilogram =${Math.round(kiloToPounds* 100)/100} Pound | ${x} Pound =${Math.round(poundstokilo * 100)/100} Kilogram</p>`
       
        
       isDisplayed = true
    }
    else if(isDisplayed === true){
        let existingPtag = document.querySelectorAll(".pp")
         existingPtag.forEach((p) => p.remove());
        isDisplayed = false
         convertor(x)
    }
}  
    
 