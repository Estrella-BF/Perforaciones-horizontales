const buttonQuotation = document.getElementById('btn-quotation');
const formQuotation = document.getElementById('form-quotation');
const quotationContainer = document.getElementById('quotation');
const main = document.getElementById('main');
const navMenuMobile = document.getElementById('nav-menu-mobile');
const navMenuMobileText = document.getElementById('nav-text-mobile');

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

function contactBtn(){
    window.open("https://api.whatsapp.com/send?phone=51971313111&text=%0a‎Hello%0aWorld");
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
  
