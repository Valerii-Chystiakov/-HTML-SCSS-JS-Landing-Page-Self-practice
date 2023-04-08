window.onscroll = function() {addSticky()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function addSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//-----------------NothingBTN-------------------------------
const NothingBTN = document.querySelectorAll('.nothingBTN')
const NothingAlert = document.querySelector('.NothingAlert')
const ToggleHidden = document.querySelector('.ToggleHidden')
function Nothing() {
  NothingAlert.classList.remove('Hidden')
}
function ToggleHiddenf() {
  NothingAlert.classList.add('Hidden')
}

ToggleHidden.addEventListener('click', ToggleHiddenf)
NothingBTN.forEach(element => {
  element.addEventListener('click', Nothing)
});
//---------------------GoToBTNs-----------------------------
const home = document.querySelector('.head');
const GoToHomeBTN = document.querySelectorAll('.GoToHome');
GoToHomeBTN.forEach(element => {
  element.addEventListener('click', () => {
      home.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
      });
  });
});

const about = document.querySelector('.about');
const GoToAboutBTN = document.querySelectorAll('.GoToAbout');
GoToAboutBTN.forEach(element => {
  element.addEventListener('click', () => {
      about.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
      });
  });
});

const portfolio = document.querySelector('.portfolio');
const GoToPortfolioBTN = document.querySelectorAll('.GoToPortfolio');
GoToPortfolioBTN.forEach(element => {
  element.addEventListener('click', () => {
      portfolio.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
      });
  });
});

const contact = document.querySelector('.contact');
const GoToContactBTN = document.querySelectorAll('.GoToContact');
GoToContactBTN.forEach(element => {
  element.addEventListener('click', () => {
      contact.scrollIntoView({
        block: "start",
        inline: "start",
        behavior: "smooth"
      });
  });
});