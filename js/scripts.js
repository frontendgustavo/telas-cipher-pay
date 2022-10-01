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