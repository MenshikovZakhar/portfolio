export default class Card {
  constructor(nameValue, linkValue, descriptionValue, linksValue, templateSelector, handMouseover, handleMouseout) {
    this._nameValue = nameValue;
    this._linkValue = linkValue;
    this._descriptionValue = descriptionValue;
    this._linksValue = linksValue;
    this._templateSelector = templateSelector;
  }

  // методом, который забирает разметку из HTML и клонируем элемент
  _getTemplate() {
    this._elementTemplate = document.querySelector(this._templateSelector).content;
    this._card = this._elementTemplate.querySelector(".elements__card").cloneNode(true);
    return this._card;
  };

  _handMouseover = () => {

    this._card.querySelector(".elements__title").classList.add('shows')
    this._card.querySelector(".elements__subtitle").classList.add('showss')
  }

  _handleMouseout = () => {
    this._card.querySelector(".elements__title").classList.remove('shows')
    this._card.querySelector(".elements__subtitle").classList.remove('showss')
  }

  //метод добавление обработчиков
  _setEventListners() {
    this._card.addEventListener('mouseover', () => this._handMouseover());
    this._card.addEventListener('mouseout', () => this._handleMouseout());
    this._card.addEventListener('touchstart', () => {

      this._handMouseover.bind(this)
    });
    this._card.addEventListener('touchhend', () => {

      this._handleMouseout.bind(this)
    });
  };

  // методом, который добавляет данные в разметку
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListners();
    const cardImage = this._element.querySelector(".elements__image");
    const cardTitle = this._element.querySelector(".elements__title");
    const cardText = this._element.querySelector(".elements__subtitle");
    const cardLinks = this._element.querySelector(".elements__links");
    cardImage.setAttribute("src", this._linkValue);
    cardImage.setAttribute("alt", this._nameValue);
    cardTitle.textContent = this._nameValue;
    cardText.textContent = this._descriptionValue;
    cardLinks.href = this._linksValue;
    return this._element;
  };
}
