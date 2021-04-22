//var txt ;
var object =[];


document.addEventListener("DOMContentloaded", function (event) {
  document.getElementById("reappear").style.display = "none";
  document.getElementById("newBtn").style.visibility = "hidden";

  document.getElementById("press").addEventListener("click", appear1, false);
  document.getElementById("newBtn").addEventListener("click", reappear, false);
})

function myButton() {
 
  document.getElementById("press").style.visibility ="hidden";

  let firstUl = document.getElementById("first");

  for (let i = 0; i < 3; i++) {
     object.push(prompt("please enter a word" ));
    
 /* if (fruit == null || fruit == "") {
    txt ="error.";
  } else{
    txt = fruit ;
    object.push(fruit);
    
  }*/
    let anotherLi = document.createElement("li");
    anotherLi.appendChild(document.createTextNode(object[i]));
    firstUl.appendChild(anotherLi);
   
  }
  
  document.getElementById("theItems").innerHTML = object;
  document.getElementById("newBtn").style.visibility = "visible"
}



function myNew() {
  document.getElementById("appear1").style.display = "none";
  document.getElementById("reappear").style.display = "block";

   var newArray = object.map(function(oneWord) {
    return oneWord.charAt(oneWord.length - 1) + oneWord.subString(1, oneWord.length - 1) + oneWord.charAt(0);

   });
  let secondul = document.getElementById("second");

  newArray.forEach(function(element) {
    let secondLi = document.createElement("li");
    secondLi.appendChild(document.createTextNode(element));
    secondLi.appendChild(secondLi);
  
})
  
}

