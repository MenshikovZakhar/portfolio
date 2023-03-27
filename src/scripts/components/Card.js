export default class Card {
  constructor(nameValue, linkValue, templateSelector, { handleCardClick }) {
    this._nameValue = nameValue;
    this._linkValue = linkValue;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  // методом, который забирает разметку из HTML и клонируем элемент
  _getTemplate() {
    this._elementTemplate = document.querySelector(this._templateSelector).content;
    this._card = this._elementTemplate.querySelector(".elements__card").cloneNode(true);
    return this._card;
  };


  //метод добавление обработчиков
  _setEventListners() {
    this._element.querySelector('.elements__image').addEventListener('click', () => this._handleCardClick());
  };

  // методом, который добавляет данные в разметку
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListners();
    const cardImage = this._element.querySelector(".elements__image");
    const cardText = this._element.querySelector(".elements__title");
    cardImage.setAttribute("src", this._linkValue);
    cardImage.setAttribute("alt", this._nameValue);
    cardText.textContent = this._nameValue;

    return this._element;
  };
}
