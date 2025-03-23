let button = document.getElementById('button')

const changeBackgroundColor = () => {
  const newColor = document.getElementById('input').value.toLowerCase();
  const avaliableColors = ['red', 'blue', 'green', 'black', 'white']

  if (avaliableColors.includes(newColor)) {
    document.body.style.backgroundColor = newColor
  }else{
    alert("Please enter a valid color!")
  }
}

button.addEventListener('click', changeBackgroundColor)