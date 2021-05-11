const buttonQuotation = document.getElementById('btn-quotation');
const formQuotation = document.getElementById('form-quotation');
const quotationContainer = document.getElementById('quotation');
const main = document.getElementById('main');
const mainPosition = main.offsetTop;
const navMenu = document.getElementById('nav-menu');
const positionQuotationContainer = quotationContainer.offsetTop;

$('#WAButton').floatingWhatsApp({
  phone: '51990417986', //WhatsApp Business phone number
  headerTitle: 'Conversa con nosotros!', //Popup Title
  popupMessage: 'Cuál es tu duda?', //Popup Message
  showPopup: true, //Enables popup display
  buttonImage: '<img src="assets/whatsapp.png" />', //Button Image
  //headerColor: 'crimson', //Custom header color
  //backgroundColor: 'crimson', //Custom background button color
  position: "right" //Position: left | right
});

function quotation() {
  buttonQuotation.classList.toggle("hidden");
  formQuotation.classList.toggle("show");
}

  /*
  Verificará la posición del scroll del navegador, y pasará como
  parámetro el scroll del elemento
  */
/*   const setClassScrollPosition = function (scrollPosition) {
    if (scrollPosition > mainPosition) {
      navMenu.classList.add("nav-fixed");
    } else {
      navMenu.classList.remove("nav-fixed");
    }
  } */

  /*
  Cuando inicializa, se verifica la posición del scroll en el navegador
  */
/*   const windowScrollCurrentPosition  = window.pageYOffset || document.documentElement.scrollTop;
  setClassScrollPosition(windowScrollCurrentPosition);
   */

  /*
  Cuando se hace scroll al naveador, se verifica la posición del scroll en el navegador
  */
/*   window.addEventListener("scroll", (event) => {
    let scrollPosition = this.scrollY;
    setClassScrollPosition(scrollPosition);
  }); */