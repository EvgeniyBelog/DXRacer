$(function(){


$('.carousel__inner').slick({
 arrows: false,
 dots: true,
 slidesToShow: 3,
 responsive:[
  {
  breakpoint: 841,
   settings: {
   slidesToShow: 2
  } 
 },
 { 
  breakpoint: 601,
  settings: {
  slidesToShow: 1
 }
},
 ]
})

});

function showInput(evt){

evt.preventDefault(); 
  
 let name = document.getElementById('name');
 let phone = document.getElementById('phone');

 if (!name.value || !phone.value) alert('Enter Name and Phone');
    else alert("your name and phone: " + name.value + "and " + phone.value);

};

document.querySelector('.contacts__button').addEventListener('click', showInput)
