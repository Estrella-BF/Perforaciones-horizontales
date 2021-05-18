const buttonQuotation = document.getElementById('btn-quotation');
const formQuotation = document.getElementById('form-quotation');
const quotationContainer = document.getElementById('quotation');
const main = document.getElementById('main');
const navMenuMobile = document.getElementById('nav-menu-mobile');
const navMenuMobileText = document.getElementById('nav-text-mobile');
const urlWhatsapp = 'https://api.whatsapp.com/send?phone=51971313111&text=';

/*
Funcionalidad para el boton de cotización ubicado en el header
*/
if (quotationContainer) {
  const positionQuotationContainer = quotationContainer.offsetTop;

  function quotation() {
    buttonQuotation.classList.toggle("hidden");
    formQuotation.classList.toggle("show");
  }
  
  function openQuotationForm() {
    window.scrollTo(0, positionQuotationContainer);
    quotation();
  }
}

function contactBtn(event){

  const nameValidation = document.getElementById('nameValidation');
  const phoneNumberValidation = document.getElementById('phoneNumberValidation');
  const emailValidation = document.getElementById('emailValidation');

  const nameValue = nameValidation.value;
  const phoneNumber = phoneNumberValidation.value;
  const email = emailValidation.value;

  if (nameValue && phoneNumber && email) {
    event.preventDefault();
    console.log('nameValidation', nameValue)
    console.log('phoneNumber', phoneNumber)
    console.log('email', email)
    console.log(`https://api.whatsapp.com/send?phone=51971313111&text=%0aNombre:%20${nameValue}%0aNúmero%20de%20teléfono:%20${phoneNumber}%0aCorreo%20Electrónico:%20${email}`)
    
    window.open(`https://api.whatsapp.com/send?phone=51971313111&text=%0aNombre:%20${nameValue}%0aNúmero%20de%20teléfono:%20${phoneNumber}%0aCorreo%20Electrónico:%20${email}`);
    // window.open("https://api.whatsapp.com/send?phone=51971313111&text=%0a‎Hello%0aWorld");
    // window.open("https://api.whatsapp.com/send?phone=51971313111&text=I'm%20interested%20in%20your%20portfolio");
  } 

  
}

function btnTwo() {
  window.open("https://api.whatsapp.com/send?phone=51971313111&text=hola%0Asoy%0Aun%20%0Apollito%20%0Agordo");
}


  /*
  Verificará la posición del scroll del navegador, y pasará como
  parámetro el scroll del elemento
  Funcionalidad para cuando el scroll baje el menu se quede fijo
  */

if (main) {
  const mainPosition = main.offsetTop;
  const setClassScrollPosition = function (scrollPosition) {
    if (scrollPosition > mainPosition) {
      navMenuMobile.classList.add("nav-fixed");
      navMenuMobileText.classList.add("hidden");
    } else {
      navMenuMobile.classList.remove("nav-fixed");
      navMenuMobileText.classList.remove("hidden");
    }
  }
  /*
  Cuando inicializa, se verifica la posición del scroll en el navegador
  */
  const windowScrollCurrentPosition  = window.pageYOffset || document.documentElement.scrollTop;
  setClassScrollPosition(windowScrollCurrentPosition);
  
  
  /*
  Cuando se hace scroll al naveador, se verifica la posición del scroll en el navegador
  */
  window.addEventListener("scroll", (event) => {
    let scrollPosition = this.scrollY;
    setClassScrollPosition(scrollPosition);
  });
}
  
