const buttonsData = [
  { text: 'Стадион', color: 'green', left: 34, top: 44 },
  { text: 'Отель', color: 'green', left: 57, top: 77 },
  { text: 'Гостиница, корпус А', color: 'green', left: 68, top: 62 },
  { text: 'Гостиница, корпус Б', color: 'blue', left: 82, top: 68 },
  { text: 'Музей', color: 'green', left: 60, top: 36 },
  { text: 'Дом', color: 'blue', left: 71, top: 16 },
  { text: 'Причал', color: 'blue', left: 22, top: 67 },
  { text: 'Ангар', color: 'blue', left: 73, top: 42 },
  { text: 'Торговый центр', color: 'blue', left: 30, top: 22 },
  { text: 'Стадион, главный вход', color: 'blue', left: 56, top: 58 }
]

class Button {
  constructor( { text, color, left, top } ) {
    this.text = text
    this.color = color
    this.left = left
    this.top = top
    this.createButton()
  }

  createButton() {
    const button = document.createElement('button')
    button.className = `background__button ${this.color}`
    button.style.left = `${this.left}vw`
    button.style.top = `${this.top}vh`

    const buttonSign = document.createElement('div')
    buttonSign.className = 'button__sign'

    for(let i = 0; i < 2; i++) {
      const buttonSignItem = document.createElement('span')
      buttonSignItem.className = 'button__sign-item'
      buttonSign.append(buttonSignItem)
    }

    const buttonText = document.createElement('span')
    buttonText.className = 'button__text'
    buttonText.textContent = this.text

    button.append(buttonSign)
    button.append(buttonText)
    this.button = button
  }

  render(parent) {
    parent.append(this.button)
  }
}


function onClick(e) {
  const button = e.target.closest('.background__button')
  if(button) {
    button.closest('.active') 
    ? button.classList.remove('active')
    : button.classList.add('active')
  }
}

const buttonBox = document.querySelector('.background__buttons')
buttonsData.forEach(item => new Button(item).render(buttonBox))

buttonBox.addEventListener('click', e => {
  onClick(e)
})