const adressbtn = document.querySelector('#adress-form');
adressbtn.addEventListener('click', function(){
    document.querySelector('.adress-form').style.display = 'flex';
})
const adressclose = document.querySelector('#adress-close');
adressclose.addEventListener('click', function() {
    document.querySelector('.adress-form').style.display = 'none';
})

// ấn mũi tên trái phải để chạy slide 
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

// ấn vào 5 chữ slide1,2,3,4,5 để chạy ảnh..................................................................
let imgActive = document.querySelector('.active');
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li');
    imgNumberLi.forEach(function(image,index){
        image.addEventListener('click', function(){
            removeactive();
            document.querySelector(".slider-content-left-top").style.right = index*100+"%";
            image.classList.add('active');
        });
    });

function removeactive(){
    let imgActive = document.querySelector('.active');
    imgActive.classList.remove('active');
}

// slider tự chạy 
