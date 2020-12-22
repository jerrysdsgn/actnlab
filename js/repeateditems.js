let articles = ["a","x","b", "c", "g", "j", "f"];

var randomArray = [];


for(i=0; i < 3; i++){
    random = Math.floor(Math.random() * articles.length);
    randomArray.push(random);
}


checkDuplicate();

   function checkDuplicate() {

      // create a Set with array elements
      const set = new Set(randomArray);

      if(set.size == 4){
          console.log("right size")
      }else{
          console.log("repeated element")
      }

      console.log(set);
   }

   console.log(randomArray);