var option1 = document.getElementById('optn1');
var option2 = document.getElementById('optn2');

var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');

var option1Content1 = document.getElementById('optn1Content1');
var option1Content2 = document.getElementById('optn1Content2');
var option1Content3 = document.getElementById('optn1Content3');

var ecom20More = document.getElementById('ecom20More');
var ecom20Less = document.getElementById('ecom20Less');

var option2Content1 = document.getElementById('optn2Content1');
var option2Content2 = document.getElementById('optn2Content2');
var option2Content3 = document.getElementById('optn2Content3');

var optn2Customization = document.getElementById('optn2Customization');
var optn2userFriendly = document.getElementById('optn2userFriendly');
var optn2scalability = document.getElementById('optn2scalability');

var customization = document.getElementById('customization');
var userFriendly = document.getElementById('userFriendly');
var scalability = document.getElementById('scalability');

var wixResult = document.getElementById('wixResult');
var wixResult2 = document.getElementById('wixResult2');
var webflowResult = document.getElementById('webflowResult');
var wordpressResult = document.getElementById('wordpressResult');

option1.addEventListener('click', function(){
    option1Content1.style.display = "block";
    option2Content1.style.display = "none";
    container2.style.display = "none";
})

ecom20More.addEventListener('click', function(){
    option1Content3.style.display = "block";
    container4.style.display = "none";
})

ecom20Less.addEventListener('click', function(){
    option1Content2.style.display = "block";
    container3.style.display = "none";
})

option2.addEventListener('click', function(){
    option2Content1.style.display = "block";
    option1Content1.style.display = "none";
    container1.style.display = "none";
})

optn2Customization.addEventListener('click', function(){
    option2Content3.style.display = "block";
    wixResult.style.display = "none";
    wixResult2.style.display = "none";
    wordpressResult.style.display = "none";
    userFriendly.style.display = "none";
    scalability.style.display = "none";
})

optn2userFriendly.addEventListener('click', function(){
    option2Content3.style.display = "block";
    wixResult2.style.display = "none";
    wordpressResult.style.display = "none";
    webflowResult.style.display = "none";
    customization.style.display = "none";
    scalability.style.display = "none";
})

optn2scalability.addEventListener('click', function(){
    option2Content3.style.display = "block";
    wixResult2.style.display = "none";
    wixResult.style.display = "none";
    webflowResult.style.display = "none";
    customization.style.display = "none";
    userFriendly.style.display = "none";
})


