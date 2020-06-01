let express = require("express");
let app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
   
   let animalName = req.params.animal;
   
   function animalNoise() {
     if (animalName == "pig") {
       return "Oink";
     }
     
     if (animalName == "cow") {
         return "Moo";
     }
     
     
     if (animalName == "dog") {
        return "Woof";
     }
   }
   
   res.send("The " + animalName + " says " + animalNoise());
   
   
 
});



app.get("/repeat/:word/:number", function(req, res){
    let randomWord = req.params.word;
    
    let randomNumber = Number(req.params.number);
    
    let result = "";
    
   
     for (let i = 0; i < randomNumber; i++) {
        result = result + randomWord;
    }
    
    res.send(result);
  
    
      
   
});

app.get("*", function(req, res){
     res.send("Sorry, page not found..What are you doing with your life?");
});


app.listen(3000, function() {
      console.log("Server has started");
});


