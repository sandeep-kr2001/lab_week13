const copyContainer = document.querySelector('.copy-container')
const orignalContainer = document.querySelectorAll('.original-container div')
const btn = document.querySelector('button')

//Clone the orginal container
function addDiv(evt) {
    const targetDiv = evt.currentTarget.outerHTML //used outerHTML to select the div outside of the p tag
    console.log(targetDiv) //prints the targetDiv to console
    copyContainer.insertAdjacentHTML("afterbegin", targetDiv)
  }
  orignalContainer.forEach(element => element.addEventListener('click', addDiv))

// Delete all copies in the copy-container
function removeDiv(){
    while (copyContainer.firstChild) { //added a while loop to run until there is a firstChild in copy container 
      copyContainer.removeChild(copyContainer.firstChild); //removes the first child 
      console.log("Div Removed") //prints after the child is removed 
      }
}
btn.addEventListener('click', removeDiv)