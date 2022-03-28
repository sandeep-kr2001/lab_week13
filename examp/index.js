

//divOne.addEventListener( "click" , () => console.log('Thanks!'))

//divOne.removeEventListener( "click", () => console.log('Thanks!'))

//addEventListener

const eventHandlerBtn = document.querySelector('.event-handler')

let clicks = 0

function countClicks() {
  clicks += 1
  console.log(clicks)
}

eventHandlerBtn.addEventListener('click', countClicks)

//event object

const eventDiv = document.querySelector('.event-div')

eventDiv.addEventListener('click', (ev) => {
  console.log(ev)
})

//insertAdjacentHTML

const addCardBtn = document.querySelector('.add-card')
const cardContainer = document.querySelector('.new-content-container')

const cardTemplate = `
  <div>
    <p>new card </p>
  </div>
`
function addACard() {
  cardContainer.insertAdjacentHTML("afterbegin", cardTemplate)
}

addCardBtn.addEventListener('click', addACard)

//event delegation

const parentDiv = document.querySelector('.outer')

parentDiv.addEventListener('click', logDivText)

function logDivText(evt) {
  console.log(evt.target.innerText)
}

