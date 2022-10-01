const btnCardPayment = document.querySelector('.btn-card-option');
const btnPixPayment = document.querySelector('.btn-pix-option');
const methodPaymentCard = document.querySelector('.method-payment-card');
const methodPaymentPix = document.querySelector('.method-payment-pix');
const btnCard = document.querySelector('.btn-card');
const btnPix = document.querySelector('.btn-pix');


btnCardPayment.addEventListener('click', () => {
    methodPaymentCard.classList.add('method-payment-active');
    btnCardPayment.classList.add('btn-payment-active');

    btnPixPayment.classList.remove('btn-payment-active');
    methodPaymentPix.classList.remove('method-payment-active');

    btnCard.classList.add('method-payment-active');
    btnPix.classList.remove('method-payment-active');
});
btnPixPayment.addEventListener('click', () => {
    methodPaymentPix.classList.add('method-payment-active');
    btnPixPayment.classList.add('btn-payment-active');

    btnCardPayment.classList.remove('btn-payment-active');
    methodPaymentCard.classList.remove('method-payment-active');

    btnCard.classList.remove('method-payment-active');
    btnPix.classList.add('method-payment-active');
});

let numberCardEl = document.querySelector('.number-card');
let dateCardEl = document.querySelector('.date-card');
let codeCardEl = document.querySelector('.code-card');

let inputNumberEl = document.querySelector('.input-number-card');
let inputMonthEl = document.querySelector('.input-month-card');
let inputYearEl = document.querySelector('.input-year-card');
let inputCodeEl = document.querySelector('.input-code-card');

inputNumberEl.addEventListener('input', () => {
    resultNumber = inputNumberEl.value;
    resultNumber = resultNumber.replace(/\D/g, " ");
    resultNumber = resultNumber.replace(/(\d{4})/g, "$1 ");
    numberCardEl.innerHTML = resultNumber;

});
inputYearEl.addEventListener('input', () => {
    let monthValue = inputMonthEl.options[inputMonthEl.selectedIndex].value;
    resultYear = inputYearEl.value;
    resultYear = resultYear.replace(/\D/g, " ");
    resultYear = resultYear.replace(/(\d{4})/g, "$1 ");
    dateCardEl.innerHTML = monthValue +'/'+ resultYear;

});
inputCodeEl.addEventListener('input', () => {
    resultCode = inputCodeEl.value;
    resultCode = resultCode.replace(/\D/g, " ");
    resultCode = resultCode.replace(/(\d{4})/g, "$1 ");
    codeCardEl.innerHTML = resultCode;
});


