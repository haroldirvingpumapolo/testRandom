let nodoIv = document.querySelector("#showId")
function numberRandom(){
  let valueRandom = Math.random()*100
  valueRandom = parseInt(valueRandom)
  setTimeout(() => {
    nodoIv.innerHTML +=`<div>${valueRandom}</div>`
  }, 2000);
  
}
