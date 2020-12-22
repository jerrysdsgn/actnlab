var article1 = {
    title: "Article 1",
    desc: "Description of article 1",
    img: "https://picsum.photos/800/800/?random",
    link: "file:///Users/gerardosegovia/Documents/WebDev/Projects/WebBuilders2020/Actual_site/reviews.html"
}

var article2 = {
    title: "Article 2",
    desc: "Description of article 2",
    img: "https://picsum.photos/800/800/?random",
    link: "file:///Users/gerardosegovia/Documents/WebDev/Projects/WebBuilders2020/Actual_site/reviews.html"
}

var article3 = {
    title: "Article 3",
    desc: "Description of article 3",
    img: "https://picsum.photos/800/800/?random",
    link: "file:///Users/gerardosegovia/Documents/WebDev/Projects/WebBuilders2020/Actual_site/reviews.html"
}

var article4 = {
    title: "Article 4",
    desc: "Description of article 4",
    img: "https://picsum.photos/800/800/?random",
    link: "file:///Users/gerardosegovia/Documents/WebDev/Projects/WebBuilders2020/Actual_site/reviews.html"
}

var article5 = {
    title: "Article 5",
    desc: "Description of article 5",
    img: "https://picsum.photos/800/800/?random",
    link: "file:///Users/gerardosegovia/Documents/WebDev/Projects/WebBuilders2020/Actual_site/reviews.html"
}

var article6 = {
    title: "Article 6",
    desc: "Description of article 6",
    img: "https://picsum.photos/800/800/?random",
    link: "file:///Users/gerardosegovia/Documents/WebDev/Projects/WebBuilders2020/Actual_site/reviews.html"
}

//Total de articulos
var articles = [article1, article2, article3, article4, article5, article6];

//Aqui vamos a guardar los numeros random
var randomArray = [];

//Funcion randomizer
//randomizer();
/*
function randomizer(){
    //Picks 3 random numbers from 0 to n (length of articles array)
    for(i = 0; i < 3; i++){
        console.log("iteration:" + i);
        random = Math.floor(Math.random() * articles.length);
        //Poner un if en el que si no existe el valor en el randomArray podemos push si no, no
        if(randomArray.includes(random)){
            console.log("item already here");
            randomArray.splice(random);
        }else{
            randomArray.push(random);
        }
    }
};
*/

funcPrueba();

function funcPrueba(){
    while (randomArray.length < 3) {
        // code block to be executed
        random = Math.floor(Math.random() * articles.length);
        if(randomArray.includes(random)){
            console.log("item already here");
            randomArray.splice(random);
        }else{
            randomArray.push(random);
        }
    }
}

//Checamos si hay articulos que se repiten; si sí, volvemos a correr el randomizer, si no, return true


//Debugging
console.log("The random array: " + randomArray);

//Recoge valores de array
var firstSelected = randomArray[0];
var secondSelected = randomArray[1];
var thirdSelected = randomArray[2];

//Debugging
console.log("The selected articles are: " + "Article 1: " + firstSelected + "Article 2: " + secondSelected + "Article 3: " + thirdSelected);

//Asignar valor de random array a variable
var selectedArticle1 = articles[firstSelected];
var selectedArticle2 = articles[secondSelected];
var selectedArticle3 = articles[thirdSelected];

//Debugging
console.log("first article displayed = " + selectedArticle1.title);
console.log("second article displayed = " + selectedArticle2.title);
console.log("third article displayed = " + selectedArticle3.title);

//Article 1
var art1Title = document.getElementById('firstArticleTitle');
art1Title.innerHTML = selectedArticle1.title;

var art1Desc = document.getElementById('firstArticleDesc');
art1Desc.innerHTML = selectedArticle1.desc;

var art1Img = document.getElementById('firstArticleImg');
art1Img.src = selectedArticle1.img;

//Article 2
var art2Title = document.getElementById('secondArticleTitle');
art2Title.innerHTML = selectedArticle2.title;

var art2Desc = document.getElementById('secondArticleDesc');
art2Desc.innerHTML = selectedArticle2.desc;

var art2Img = document.getElementById('secondArticleImg');
art2Img.src = selectedArticle2.img;

//Article 3
var art3Title = document.getElementById('thirdArticleTitle');
art3Title.innerHTML = selectedArticle3.title;

var art3Desc = document.getElementById('thirdArticleDesc');
art3Desc.innerHTML = selectedArticle3.desc;

var art3Img = document.getElementById('thirdArticleImg');
art3Img.src = selectedArticle3.img;