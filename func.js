const currentEl = document.querySelector(".current-year")
const yearEl = document.querySelector(".year")
const daysEl = document.querySelector(".days")
const hoursEl = document.querySelector(".hours")
const minutesEl = document.querySelector(".minutes")
const secondsEl = document.querySelector(".seconds")


countDown()

function countDown(){
    const dateEl = new Date()
    currentEl.innerText = dateEl.getFullYear()

    const newYearEl = dateEl.getFullYear() + 1;
    yearEl.innerText = newYearEl

    let trialDate = Date.parse(newYearEl)
    let countDownTime = trialDate - dateEl.getTime()
    

   let seconds = 1000
   let minutes = 60 * seconds;
   let hours = 60 * minutes
   let days = 24* hours

   const dayResult = Math.floor(countDownTime / days).toString().padStart(2,"0") 
   daysEl.innerText = dayResult

   hoursEl.innerText = Math.floor((countDownTime % days)/ hours).toString().padStart(2,"0")

   minutesEl.innerText = Math.floor((countDownTime % hours) / minutes).toString().padStart(2,"0")

   secondsEl.innerText = Math.floor((countDownTime % minutes) /seconds).toString().padStart(2,"0")

   setTimeout(countDown, 1000)
}

