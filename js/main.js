const buttons = [
  {text: 'Стадион', variant: 'green', left: 34, top: 44},
  {text: 'Отель', variant: 'green', left: 57, top: 74},
  {text: 'Гостиница, корпус А', variant: 'green', left: 68, top: 60},
  {text: 'Музей', variant: 'green', left: 60, top: 36},
  {text: 'Дом', variant: 'blue', left: 71, top: 21},
  {text: 'Гостиница, корпус Б', variant: 'blue', left: 82, top: 65},
  {text: 'Причал', variant: 'blue', left: 22, top: 65},
  {text: 'Ангар', variant: 'blue', left: 73, top: 42},
  {text: 'Торговый центр', variant: 'blue', left: 29, top: 26},
  {text: 'Стадион, главный вход', variant: 'blue', left: 56, top: 58}
]

class Button {
  constructor({text, variant, left, top}) {
    this.text = text
    this.variant = variant
    this.left = left
    this.top = top
    this.show = false
    this.createButton()
  }

  createButton() {
    const button = document.createElement('button')
    button.className = `background__button ${this.variant}`
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

const buttonBox = document.querySelector('.background__buttons')

function click(e) {
  const button = e.target.closest('.background__button')
  if(!button) return

  if(button.closest('.active')) {
    button.classList.remove('active')
  } else {
    button.classList.add('active')
  }
}

for(const btn of buttons) {
  const button = new Button(btn)
  button.render(buttonBox)
}

parent.addEventListener('click', (e) => {
  click(e)
})