const btnTranslate = document.querySelector("#btn-translate")
const getText = document.querySelector("#texttocon")
const bananatext = document.querySelector("#bananaText")
btnTranslate.addEventListener('click', function(){
   const banana =  getText.value
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${banana}`)
  .then(res =>{
      res.json().then((data) =>{
        const trans = data.contents.translated
        bananatext.textContent = trans
      })
  })
})

