const $window        = window
const scroll_cue     = document.querySelector(".scroll-cue")
const header         = document.getElementById("header")
const menuBtn        = document.querySelectorAll(".btn-lets-talk")
const letsTalk       = document.querySelector(".lets-talk")
const letsTalkClose  = document.querySelector(".lets-talk__close-btn")
const letsTalkForm   = document.querySelector(".lets-talk__form")
const main           = document.querySelector("main")
const sections       = document.querySelectorAll('[data-section]')
// —————————––––––––––––––––––
// Scroll Stuff
// —————————––––––––––––––––––
let scrollPos = window.scrollY;

function scrollStuff(){
  let newScrollPos = window.scrollY

  if( scrollPos < newScrollPos && newScrollPos >= 120  )
    header.classList.add("hide")
  else
    header.classList.remove("hide")
  
  scrollPos = newScrollPos;

  if( newScrollPos > 0 )
    header.classList.add("has-shadow")
  else
    header.classList.remove("has-shadow")
  
  sections.forEach( (section) => {
    var position = section.getBoundingClientRect();

    if( (section.offsetTop - newScrollPos) < 80 && (position.top < (window.innerHeight) && position.bottom >= 80) ) 
    header.setAttribute('data-theme', section.dataset.section)
  })
}
window.onscroll = (_.throttle(scrollStuff, 200))
// —————————––––––––––––––––––
// Scroll Animations
// —————————––––––––––––––––––
const scrollAnimations = document.querySelectorAll('[data-scroll]');
const scrollObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) 
      entry.target.classList.add('is-inview')
    })
  },
  { threshold: 0.15 }
)
scrollAnimations.forEach(function(section){
  scrollObserver.observe(section)
})

$window.onresize = () => {
  cardSlider.forEach(slideStuff)
}
$window.onload = () => {
  window.dispatchEvent(new Event('resize'));
}
// —————————––––––––––––––––––
// Hero Slider
// —————————––––––––––––––––––
var elem = document.querySelector('.hero-slider');
if(typeof(elem) != 'undefined' && elem != null){
  var slides = elem.querySelectorAll(".hero-slide");
  var flkty = new Flickity( elem, {
    fade: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
    draggable: false,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    imagesLoaded: true
  });
}
// —————————––––––––––––––––––
// Card Slider
// —————————––––––––––––––––––
let cardSlider = document.querySelectorAll(".card-slider")

cardSlider.forEach(slideStuff)

function slideStuff(element){
  let cardSliderWrap   = element.querySelector('.card-slider__wrap')
  let cardSliderTrack  = element.querySelector('.card-slider__track')
  let sliderWidth      = element.clientWidth
  let slidesWidth      = cardSliderTrack.offsetWidth + (cardSliderWrap.offsetLeft - 20)
  let slidesOffset     = cardSliderWrap.offsetLeft + 20
  let nextBtn          = element.querySelector(".card-slider__next")
  let prevBtn          = element.querySelector(".card-slider__prev")
  let card             = element.querySelector('.card')

  nextBtn.onclick = () => {
    element.scrollBy({left: card.offsetWidth*2, behavior: 'smooth'})
    checkSliderNav()
  }
  prevBtn.onclick = () => {
    element.scrollBy({left: -card.offsetWidth*2, behavior: 'smooth'})
    checkSliderNav()
  }

  checkSliderNav = () => {
    setTimeout(() => {
      if( element.scrollLeft < slidesOffset ) {
        prevBtn.classList.remove("show");
      } else {
        prevBtn.classList.add("show");
      }
      
      if( sliderWidth > slidesWidth ) {
        nextBtn.classList.remove("show");
      } else {
        nextBtn.classList.add("show");
      }
    }, 500)
  }
  checkSliderNav()
 
}
// —————————––––––––––––––––––
// Contact Form
// —————————––––––––––––––––––
const hta_thank_you = document.getElementById("hta-thank-you");
const submit        = document.getElementById("form-submit");

// Open form
function openForm(){
  letsTalk.classList.toggle("open");
  document.body.style.overflow = "hidden";
}
// Close form
function closeForm(){
  letsTalk.classList.remove("open");
  document.body.style.overflow = "auto";
  hta_thank_you.classList.remove("active");
}

menuBtn.forEach((button) => {
  button.onclick = (openForm)
})
letsTalkClose.onclick = (closeForm)


// Create Thank You message
function createThankYou(){
  const name                   = form.querySelector('[name="first-name"]').value;
  const company_name           = form.querySelector('[name="company-name"]').value;
  const thank_you_message      = hta_thank_you.querySelector('h2');
  const thank_you_message_2    = hta_thank_you.querySelector('h3');
  const thank_you_name         = thank_you_message.querySelector(".form-name");
  const thank_you_company_name = thank_you_message_2.querySelector(".form-company-name");

  thank_you_name.innerHTML = name;
  thank_you_company_name.innerHTML = company_name;
  hta_form.style.display = "none";
  hta_thank_you.classList.add("active");
}
submit.addEventListener("click", function(e){
  e.preventDefault();
  createThankYou();
});












 
























