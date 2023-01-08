let form = document.createElement('form')
form.setAttribute('name', "myForm")
let input = document.createElement('input')
input.setAttribute('name', "input1")
input.setAttribute('type', "text")
input.setAttribute('id', "Input")
input.setAttribute('placeholder', "Entrer du texte")
input.style.padding = "5px"
input.style.width = "350px"
input.style.margin = "50px"
form.appendChild(input)
let body = document.querySelector('body')
body.appendChild(form)
input.addEventListener('keydown', function (e){
    e.preventDefault()
    let lettre = e.keyCode;
    //console.log(lettre);
       if(lettre >= 65 && lettre <= 90){
          console.log(lettre); 

      }
       else{
         console.log("ce n'est pas une lettre");
           
       }
    
})


