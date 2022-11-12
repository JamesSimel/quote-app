// const my_api_url = "https://api.adviceslip.com/advice"

const renderQuotehere = document.querySelector("#quote");
const quote_id = document.querySelector("#quote-id")
const getQuoteButton =  document.querySelector("#get-quote")

getQuoteButton.addEventListener("click", () => {getAdvice()})
window.onload = () => {
    getAdvice()
}

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then(
    response => {
        return response.json();
    }).then(
        adviceData => {
            const adviceOject = adviceData.slip;
            renderQuotehere.innerHTML = `<p>"${adviceOject.advice}"</p>`
            quote_id.innerHTML = `<h4>ADVICE #${adviceOject.id}</h4>`
    }).catch(
        error => {
            console.log(error)
        })
}


