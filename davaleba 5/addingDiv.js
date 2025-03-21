const MyDiv = document.createElement('div')
MyDiv.setAttribute('id', 'card')

const h2Element = document.createElement('h2')
h2Element.textContent = 'Gandalf';

const aElement = document.createElement('a')
aElement.setAttribute('href', '#')
aElement.textContent = 'Go to profile';

MyDiv.appendChild(h2Element)
MyDiv.appendChild(aElement)

document.body.appendChild(MyDiv)