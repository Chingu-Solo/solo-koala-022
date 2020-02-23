/*
 * for adding font cards
 */

// for inserting font cards from JS
const font_list = document.querySelector('.fontlist');

// all Google font information
const font_info = [
  {
    name: 'Roboto',
    creator: 'Christian Robertson',
  },
  {
    name: 'Gayathri',
    creator: 'SMC',
  },
  {
    name: 'Chilanka',
    creator: 'SMC',
  },
  {
    name: 'Open Sans',
    creator: 'Steve Matteson',
  },
  {
    name: 'Lato',
    creator: 'Lukasz Dziedzic',
  },
  {
    name: 'Manjari',
    creator: 'Santhosh Thottingal',
  },
  {
    name: 'Montserrat',
    creator: 'Julieta Ulanovsky',
  },
  {
    name: 'Roboto Condensed',
    creator: 'Christian Robertson',
  },
];

// default text
const sample_text = 'Then came the night of the first falling star.';
let sample = sample_text;

// Google font cards
function addList(item, i) {
  return `
        <li class="fontlist__item item${i}">
            <dl class="font-info">
            <dt class="font-info__item font-name">${item.name}</dt>
            <dd class="font-info__item font-creator">${item.creator}</dd>
            </dl>
            <button class="font-add-btn">
            <i class="material-icons">
                add_circle_outline
            </i>
            </button>
            <p class="sample-text"
            style="font-family:'${item.name}', sans-serif">
            ${sample}</p>
        </li>
        `;
}

// insert Google font cards
function addAllList() {
  font_list.innerHTML = font_info
    .map((list, i) => {
      return addList(list, i);
    })
    .join('');
}
addAllList();

/*
 * for functions nav
 */
// the function to change font samples
function changeFontSample() {
  sample = this.value === '' || sample === '' ? sample_text : this.value;
  font_sample.map(item => (item.innerHTML = sample));
}

// the function to change font sizes
let size;
function changeFontSize() {
  size =
    this.value === '' || size === '' ? font_size.style.removeProperty('font-size') : this.value;
  font_sample.map(item => {
    item.style.fontSize = size;
  });
}

// the function to change color mode
const color_mode_target_html = document.querySelector('html');
const color_mode_target_function = Array.from(
  document.querySelectorAll('.function-nav__inner-item'),
);
const color_mode_target_fontlist = Array.from(document.querySelectorAll('.fontlist__item'));
function changeColor() {
  if (this.value === 'black') {
    color_mode_target_html.classList.add('html--dark');
    color_mode_target_function.map(item => item.classList.add('function-nav__inner-item--dark'));
    color_mode_target_fontlist.map(item => item.classList.add('fontlist__item--dark'));
  } else {
    color_mode_target_html.classList.remove('html--dark');
    color_mode_target_function.map(item => item.classList.remove('function-nav__inner-item--dark'));
    color_mode_target_fontlist.map(item => item.classList.remove('fontlist__item--dark'));
  }
}

// the function to change list layout
const list_layout = Array.from(document.querySelectorAll('.fontlist__item'));
const layout_icon = document.querySelector('.icon-list');
function changeLayout() {
  if (layout_icon.innerText === 'list') {
    list_layout.map(item => item.classList.add('fontlist__item--layout'));
    layout_icon.innerHTML = 'border_all';
  } else {
    list_layout.map(item => item.classList.remove('fontlist__item--layout'));
    layout_icon.innerHTML = 'list';
  }
}

// the function to reset all functional setting
function resetAll() {
  sample = '';
  size = '';
  layout_icon.innerText = '';
  changeFontSample();
  changeFontSize();
  changeColor();
  changeLayout();
}

// the event to change font samples event
const font_sample = Array.from(document.querySelectorAll('.sample-text'));
const font_sample_box = document.querySelector('.font-text');
font_sample_box.addEventListener('change', changeFontSample);
font_sample_box.addEventListener('keyup', changeFontSample);

// the event to change font sizes
const font_size = document.querySelector('.font-size');
font_size.addEventListener('change', changeFontSize);
font_size.addEventListener('keyup', changeFontSize);

// the event to change color mode
const color_mode = Array.from(document.querySelectorAll('.color-mode'));
color_mode.map(item => item.addEventListener('click', changeColor));

// the event to change list layout
const layout = document.querySelector('.font-layout');
layout.addEventListener('click', changeLayout);

// the event to reset all functional setting
const reset = document.querySelector('.font-reset');
reset.addEventListener('click', resetAll);

/*
 * back to top
 */
function appearBackToTop() {
  if (window.scrollY > 80) {
    back_to_top.classList.add('back-to-top--active');
  } else {
    back_to_top.classList.remove('back-to-top--active');
  }
}

function backToTop() {
  window.scroll({ top: 0, behavior: 'smooth' });
}

const back_to_top = document.querySelector('.back-to-top');
window.addEventListener('scroll', appearBackToTop);
back_to_top.addEventListener('click', backToTop);
