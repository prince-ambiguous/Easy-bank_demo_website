const btnhamburger = document.querySelector('#btn_hamburger');
const header= document.querySelector('.header');
const overlay= document.querySelector('.overlay');
const fadeElms= document.querySelectorAll('.visibility');

btnhamburger.addEventListener('click', function(){
    if(header.classList.contains('open')){//closing menu
        header.classList.remove('open');
        fadeElms.forEach(function(element){
            
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        
        })
        
    }
    else{                           //opening menu
        header.classList.add('open');
        fadeElms.forEach(function(element) {

            element.classList.add('fade-in');
            element.classList.remove('fade-out');
            
        });
        
    }
});