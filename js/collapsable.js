var chevronOpen = document.querySelectorAll('.chev-open');
var chevronClose = document.querySelectorAll('.chev-close');

var firstCollapsable = document.getElementById('collapsable1Body');
var faq1 = document.getElementById('faq1');

var secondCollapsable = document.getElementById('collapsable2Body');
var faq2 = document.getElementById('faq2');

var thirdCollapsable = document.getElementById('collapsable3Body');
var faq3 = document.getElementById('faq3');

var fourthCollapsable = document.getElementById('collapsable4Body');
var faq4 = document.getElementById('faq4');

var fifthCollapsable = document.getElementById('collapsable5Body');
var faq5 = document.getElementById('faq5');



document.getElementById('collapsable1').addEventListener('click', function(){
    firstCollapsable.classList.toggle("collapsable-closed");
    faq1.classList.toggle("hide");

});

document.getElementById('collapsable2').addEventListener('click', function(){
    secondCollapsable.classList.toggle("collapsable-closed");
    faq2.classList.toggle("hide");
});

document.getElementById('collapsable3').addEventListener('click', function(){
    thirdCollapsable.classList.toggle("collapsable-closed");
    faq3.classList.toggle("hide");
});

document.getElementById('collapsable4').addEventListener('click', function(){
    fourthCollapsable.classList.toggle("collapsable-closed");
    faq4.classList.toggle("hide");
});

document.getElementById('collapsable5').addEventListener('click', function(){
    fifthCollapsable.classList.toggle("collapsable-closed");
    faq5.classList.toggle("hide");
});


