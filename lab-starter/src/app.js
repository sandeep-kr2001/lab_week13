const copyContainer = document.querySelector('.copy-container')
const orignalContainer = document.querySelectorAll('.original-container div')
//Clone the orginal container
function addDiv(evt) {
    const targetDiv = evt.currentTarget.outerHTML //used outerHTML to select the div outside of the p tag
    console.log(targetDiv) //prints the targetDiv to console
    copyContainer.insertAdjacentHTML("afterbegin", targetDiv)
  }
  orignalContainer.forEach(element => element.addEventListener('click', addDiv))
