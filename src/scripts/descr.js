let see1 = document.querySelector('.btn1');
let descr1 = document.querySelector('.works__container-cart1-descr');
let notSee1 = document.querySelector('.works__container-cart1-descr-content-btn');

see1.addEventListener('click',
    function () {
        descr1.classList.toggle('works__container-cart1-descr--active');
    })

notSee1.addEventListener('click',
    function () {
        descr1.classList.remove('works__container-cart1-descr--active');
    })


let see2 = document.querySelector('.btn2');
let descr2 = document.querySelector('.works__container-cart2-descr');
let notSee2 = document.querySelector('.works__container-cart2-descr-content-btn');

see2.addEventListener('click',
    function () {
        descr2.classList.toggle('works__container-cart2-descr--active');
    })

notSee2.addEventListener('click',
    function () {
        descr2.classList.remove('works__container-cart2-descr--active');
    })


let see3 = document.querySelector('.btn3');
let descr3 = document.querySelector('.works__container-cart3-descr');
let notSee3 = document.querySelector('.works__container-cart3-descr-content-btn');
    
see3.addEventListener('click',
    function () {
         descr3.classList.toggle('works__container-cart3-descr--active');
    })
    
notSee3.addEventListener('click',
    function () {
        descr3.classList.remove('works__container-cart3-descr--active');
    })


let see4 = document.querySelector('.btn4');
let descr4 = document.querySelector('.works__container-cart4-descr');
let notSee4 = document.querySelector('.works__container-cart4-descr-content-btn');
        
see4.addEventListener('click',
    function () {
            descr4.classList.toggle('works__container-cart4-descr--active');
    })
        
notSee4.addEventListener('click',
    function () {
        descr4.classList.remove('works__container-cart4-descr--active');
    })