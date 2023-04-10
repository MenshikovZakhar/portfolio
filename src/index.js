import './pages/index.css';
import Card from "./scripts/components/Card.js";
import { initialCards } from "./scripts/components/initialCards.js";
import Section from "./scripts/components/Section.js";
import FormValidator from "./scripts/components/FormValidator.js";

const config = {
  formSelector: '.popup__forms',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__item_error',
  errorClass: 'popup__input-error'
};


//функция создания новых карточек
const renderercard = (item) => {
  const card = new Card(
    item.name,
    item.link,
    item.description,
    item.links,
    ".card-template",
  );
  const cardElement = card.generateCard();
  return cardElement;
}

//отображение карточек
const standardCards = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      standardCards.addItems(renderercard(item));
    }
  },
  ".elements__list"
);
standardCards.renderItems();



function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}
let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.item');
for (let elm of elements) {
  observer.observe(elm);
}


const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 450,
  framesCount = 20;
anchors.forEach(function (item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function (e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function () {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
      // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

const handleClick = function () {
  const divs = document.getElementById("menu")
  divs.classList.toggle("hide")
}
document.getElementById("menu-toggle").addEventListener("click", handleClick)




const formValidators = {}
//Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    //получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

    //вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(config);


