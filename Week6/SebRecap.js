

var userElements = document.querySelectorAll('div.user')  // or document.querySelector('#classid')
Array.from(userElements).forEach(waitForClick)    //Array.from converts a node list to an array. we need to do this as queryselector returns only 1 element
function waitForClick (userElement) {
  userElement.addEventListener('click', whenClicked)
}
function whenClicked (event) {
  event.preventDefault()
  var clickedElement = event.target
  var id = clickedElement.dataset.id
  fetch('/user' + id,{})
    .then(response => response.json())
    .then(jsonData => {})
}

Array.from(document.querySelectorAll('.users'))
  .forEach(user => user.addEventListener('click', event => {
    event.preventDefault(
      fetch('/user/' + event.target.dataset.id, {})
    )
  }))

// Seb: or install Dom4. Dom4's queryselector enables you to get array
// Any atribute that starts with data-* is up for grabs


//HTML"

<ul>
  <li data-id='123'><a href ="/user/123"> Seb </a></li>

Forever and Nodemon are both replacements for node. Forever restarts when it crashes
