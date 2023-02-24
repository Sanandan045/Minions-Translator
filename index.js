
var trans = document.querySelector("#btn");

var textinput = document.querySelector("#txt-ip");

var output = document.querySelector("#outbox");

// server url    --> 

// var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";     --> example of Api during learning 

var serverURL ="https://api.funtranslations.com/translate/minion.json";           // fun  tranaslate api 


// getting a trnaslate url -->

function getTranslationURL(text){
   return serverURL + "?" + "text=" + text 
}


// when sever is down the error shows  error handler function 

function errorHandler(error){
   console.log("Error occured",error);
   alert("Something is Happen");
}

function eventHandler(){
   output.innerText = textinput.value ;  

   var inputText = textinput.value;      //taking input

   //calling server for processing 

   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
      var trnaslatedText = json.contents.translated;
      output.innerText = trnaslatedText;               //output
   })
   .catch(errorHandler)  
                                                
}

 // button using Eventlistenr -->

trans.addEventListener("click",eventHandler);

