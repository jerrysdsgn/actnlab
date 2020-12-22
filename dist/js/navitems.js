var homeLink = document.getElementById('homeLink');
var aboutLink = document.getElementById('abooutLink');
var guideLink = '';
var reviewsLink = document.getElementById('reviewsLink');
var buildLink = document.getElementById('buildLink');
var quizLink = document.getElementById('quizLink');

var footerCol1 = document.getElementById('footerCol1');
var footerCol2 = document.getElementById('footerCol2');
var footerCol3 = document.getElementById('footerCol3');
var footerCol4 = document.getElementById('footerCol4');
var footerSmLinks = document.getElementById('footerSmLinks');

homeLink.innerHTML = '<a href="index.html" class="navbar-item">Home</a>';
aboutLink.innerHTML = '<a href="about.html" class="navbar-item">The lab</a>';
reviewsLink.innerHTML = '<a href="reviews.html" class="navbar-item">Reviews</a>';
buildLink.innerHTML = '<div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">Build a site</a><div class="navbar-dropdown"><a href="wix-review.html" class="navbar-item">Wix</a><a href="webflow-review.html" class="navbar-item">Webflow</a><a href="shopify-review.html" class="navbar-item">Shopify</a><a href="wordpress-review.html" class="navbar-item">Wordpress</a></div></div>';
quizLink.innerHTML = '<div class="navbar-item"><div class="buttons"><a href="quiz-2.html" class="button is-danger red-shadow"><strong>Site Builder Quiz</strong></a></div></div>';

footerCol1.innerHTML = '<a class="" href="#"><img src="img/MainLogo.svg" width="150px" height="auto" alt="Main Logo"></a>';
footerCol2.innerHTML = '<h2><strong>Tutorials</strong></h2><ul><li><a href="#">Shopify</a></li><li><a href="#">Wix</a></li><li><a href="#">Webflow</a></li><li><a href="#">Shopify</a></li></ul>';
footerCol3.innerHTML = '<h2><strong>Site</strong></h2><ul><li><a href="about.html">About</a></li><li><a href="#">The Steps</a></li><li><a href="quiz.html">Take the quiz</a></li></ul>';
footerCol4.innerHTML = '<ul><li><span style="font-size: 0.9em;">This page contains affiliate links</span></li></ul>';
footerSmLinks.innerHTML = '<ul class="footer-social-media"><li><a class="icon" href="https://github.com/dansup/bulma-templates"><i><ion-icon name="logo-instagram"></ion-icon></i></a></li><li><a class="icon" href=""></a></li> <li><a class="icon" href="https://github.com/dansup/bulma-templates"><i><ion-icon name="logo-youtube"></ion-icon></i></a></li></ul>';