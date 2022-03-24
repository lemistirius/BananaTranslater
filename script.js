const btnTranslate = document.querySelector("#btn-translate")
const getText = document.querySelector("#texttocon")
const bananatext = document.querySelector("#bananaText")


btnTranslate.addEventListener('click', function(){
   const banana =  getText.value
   console.log(banana)

 //  async function fetchText() {
 //   let response = await fetch(`/https://api.agify.io?name=bitch`);
  //  let data = await response.json();
  //  console.log(data);
  fetch(`https://api.genderize.io/?name=${banana}`)
  .then(res =>{
      
      res.json().then((data) =>{
          console.log(data.gender)
        const gen = data.gender
          console.log(data.gender)
          bananatext.textContent = gen
      })
      
     
  })





})

