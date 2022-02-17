const adressbtn = document.querySelector('#adress-form');
adressbtn.addEventListener('click', function(){
    document.querySelector('.adress-form').style.display = 'flex';
})
const adressclose = document.querySelector('#adress-close');
adressclose.addEventListener('click', function() {
    document.querySelector('.adress-form').style.display = 'none';
})

//slider  
let index = 0;
const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
const imgNumber = document.querySelectorAll('.slider-content-left-top img');
console.log(imgNumber);

rightbtn.addEventListener("click", function() {
    index = index+1;
    if(index > imgNumber.length-1){
        index=0;
    }
    document.querySelector('.slider-content-left-top').style.right = index*100 +"%";
});
leftbtn.addEventListener("click", function() {
    index = index-1;
    if(index <=0){
        index = imgNumber.length-1;
    }
    document.querySelector('.slider-content-left-top').style.right = index*100+"%";
});

