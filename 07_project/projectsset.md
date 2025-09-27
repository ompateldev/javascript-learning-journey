# Project releted to DOM

## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# Solution Code
## Project 1
``` JavaScript

console.log("om patel")

const button = document.querySelectorAll(".button")
const body = document.querySelector("body")


button.forEach(function (button){
  console.log(button)
    button.addEventListener('click' , function(e){
      // console.log(e);
      console.log(e.target);

      if(e.target.id === 'grey'){
        body.style.background = e.target.id
        body.style.color = 'white'
      }
      if(e.target.id === 'white'){
        body.style.background = e.target.id
        body.style.color = 'grey'
      }
      if(e.target.id === 'blue'){
        body.style.background = e.target.id
        body.style.color = 'yellow'
      }
      if(e.target.id === 'yellow'){
        body.style.background = e.target.id
        body.style.color = 'blue'
      }
    })
})

```

## Project 2

``` JavaScript
const form = document.querySelector('form')

form.addEventListener('submit' , function(e){

  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height == '' || height<0 || isNaN(height)){
    results.innerHTML = 'please enter valid number';
  }else if(weight == '' || weight<0 || isNaN(weight)){
    results.innerHTML = 'please enter valid number';
  }else{
   const bmi =  (weight/((height * height)/10000)).toFixed(2);
  results.innerHTML = `<span>${bmi}</span>`;
  }

})


```