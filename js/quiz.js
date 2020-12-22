var Quest = new Array(5);  //this sets up an array for all of the answers that are given 

function populate() { 
// alert("function populate started"); 
// this function gives each of the answers 0 points so if someone doesn't answer a question 
// the whole thing will continue to work 
  for(var i=0; i<5; i++) { Quest[i]=0; } 
} 

function total() { 
// alert("function total started"); 
// this function adds the number of points each answer is worth together 
  myScore=0; 
  for (var i=0; i<5; i++) { myScore=myScore+Quest[i]; } 
  analyzer(myScore); 

  //document.getElementById('modal').style.display = 'block';

} 

myContents = new Array(); 
  myContents[0] = "Wordpress" + "";  
  myContents[1] = "Wix"  + "";
  myContents[2] = "Webflow"  + ""


function analyzer (myScore) { 
if (myScore > 15){
  myContentsPtr = 2;
}else if(myScore > 10){
  myContentsPtr = 1;
}else if (myScore < 10){
  myContentsPtr = 0;
}
// this function uses the total calculated score to figure out which personality type they are 
  myDisplay(myContents[myContentsPtr]) 
} 

function links(){
  if(myContents[0]){
    alert("yey");
    var link = document.getElementById("VideoLink");
    link.getAttribute("href");
    link.setAttribute("href", "about.html");
    link.textContent = "Go to...";
  }
}


function myDisplay(myContents) { 
//This function will open a new window and show the results calculated 
// alert(myContents); **use alert for testing only**. 
document.getElementById("result").innerHTML = (myContents);

/**Content de cada site builder **/
if(myScore > 15){
  var link = document.getElementById("VideoLink");
  link.getAttribute("href");
  link.setAttribute("href", "webflow-review.html");
  document.getElementById("resultDesc").innerHTML = "Weblow" + myScore;
  document.getElementById("videoBtn").innerHTML = "Video tutorial";
}else if(myScore > 10){
  var link = document.getElementById("VideoLink");
  link.getAttribute("href");
  link.setAttribute("href", "wix-review.html");
  document.getElementById("resultDesc").innerHTML = "Wix" + myScore;
  document.getElementById("videoBtn").innerHTML = "Video tutorial";
}else if(myScore < 10){
  var link = document.getElementById("VideoLink");
  link.getAttribute("href");
  link.setAttribute("href", "wordpress-review.html");
  document.getElementById("resultDesc").innerHTML = "Wordpress" + myScore;
  document.getElementById("videoBtn").innerHTML = "Video tutorial";
}

} 

function saver(q, points) { 
// this function puts the points that each answer is worth into the array 
  q=q-1; 
  Quest[q]=points 
} 

var formBtn = document.getElementById('submitBtn');

formBtn.addEventListener('click', validations);

function validations(){
    //Validación Radio 1
    var radio1 = false;
    var question1 = document.personalityForm.q1;
  
    for(var i=0;i<question1.length;i++){
      if(question1[i].checked){
        radio1 = true;
        break;
      }
    }
  
    if(radio1){
      console.log("[Debugging]Validacion Radio 1 completa");
    }else{
      alert("[Debugging]Selecciona una opcion: Radio 1"); //Debugging [Borrar después] (Chance agregar modal msg)
      document.getElementById('radio1Validator').innerHTML ="Seleccionar una opcion"; 
      return false;
  }

    //Validación Radio 2
    var radio2 = false;
    var question2 = document.personalityForm.q2;
  
    for(var i=0;i<question2.length;i++){
      if(question2[i].checked){
        radio2 = true;
        break;
      }
    }
  
    if(radio2){
      console.log("[Debugging]Validacion Radio 2 completa");
    }else{
      alert("[Debugging]Selecciona una opcion: Radio 2"); //Debugging [Borrar después] (Chance agregar modal msg)
      document.getElementById('radio2Validator').innerHTML ="Seleccionar una opcion"; ; 
      return false;
  }

    //Validación Radio 3
    var radio3 = false;
    var question3 = document.personalityForm.q3;
  
    for(var i=0;i<question3.length;i++){
      if(question3[i].checked){
        radio3 = true;
        break;
      }
    }
  
    if(radio3){
      console.log("[Debugging]Validacion Radio 3 completa");
    }else{
      alert("[Debugging]Selecciona una opcion: Radio 3"); //Debugging [Borrar después] (Chance agregar modal msg)
      document.getElementById('radio3Validator').innerHTML ="Seleccionar una opcion"; ; 
      return false;
  }

    //Validación Radio 4
    var radio4 = false;
    var question4 = document.personalityForm.q4;
  
    for(var i=0;i<question4.length;i++){
      if(question4[i].checked){
        radio4 = true;
        break;
      }
    }
  
    if(radio4){
      console.log("[Debugging]Validacion Radio 4 completa");
    }else{
      alert("[Debugging]Selecciona una opcion: Radio 4"); //Debugging [Borrar después] (Chance agregar modal msg)
      document.getElementById('radio4Validator').innerHTML ="Seleccionar una opcion"; ; 
      return false;
  }

    //Validación Radio 5
    var radio5 = false;
    var question5 = document.personalityForm.q5;
  
    for(var i=0;i<question5.length;i++){
      if(question5[i].checked){
        radio5 = true;
        break;
      }
    }
  
    if(radio5){
      console.log("[Debugging]Validacion Radio 5 completa");
    }else{
      alert("[Debugging]Selecciona una opcion: Radio 5"); //Debugging [Borrar después] (Chance agregar modal msg)
      document.getElementById('radio5Validator').innerHTML ="Seleccionar una opcion"; ; 
      return false;
  }




  if(radio1 == true && radio2 == true && radio4 == true && radio5 == true){
    document.getElementById('modal').style.display = 'block';
  }else{
    document.getElementById('modal').style.display = 'none';
  }
    
}



