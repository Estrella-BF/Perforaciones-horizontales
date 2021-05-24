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
  const comentarioValidation = document.getElementById('comentarioValidation');

  const nameValue = nameValidation.value;
  const phoneNumber = phoneNumberValidation.value;
  const email = emailValidation.value;
  const comentariosValue = comentarioValidation.value;

  if (nameValue && phoneNumber && email) {
    event.preventDefault();

    const comentarios = comentariosValue ? `%0a%0aComentarios:%20${comentariosValue}` : '';
    window.open(`${urlWhatsapp}MENSAJE%20EN%20CONTACTENOS%20POR%20LA%20PAGINA%20WEB%0a%0aNombre:%20${nameValue}%0a%0aNúmero%20de%20teléfono:%20${phoneNumber}%0a%0aCorreo%20Electrónico:%20${email}${comentarios}`);
  }   
}

async function sendFormQuotation(event) {
  // form quotation
  const servicioValidacion = document.getElementById('servicioValidacion');
  const proyectoValidacion = document.getElementById('proyectoValidacion');
  const rucValidacion = document.getElementById('rucValidacion');
  const nombreContactoValidacion = document.getElementById('nombreContactoValidacion');
  const numeroContactoValidacion = document.getElementById('numeroContactoValidacion');
  const correoContactoValidacion = document.getElementById('correoContactoValidacion');

  // tuberia
  const profundidadTValidacion = document.getElementById('profundidadTValidacion');
  const longitudTValidacion = document.getElementById('longitudTValidacion');
  const diametroTValidacion = document.getElementById('diametroTValidacion');
  const unidadDiametroTValidacion = document.getElementById('unidadDiametroTValidacion');


  const servicioValue = servicioValidacion.value;
  const proyectoValue = proyectoValidacion.value;
  const rucValue = rucValidacion.value;
  const nombreContactoValue = nombreContactoValidacion.value;
  const numeroContactoValue = numeroContactoValidacion.value;
  const correoContactoValue = correoContactoValidacion.value;

  const profundidadTValue = profundidadTValidacion.value;
  const longitudTValue = longitudTValidacion.value;
  const diametroTValue = diametroTValidacion.value;
  const unidadDiametroTValue = unidadDiametroTValidacion.value;


  if (
    servicioValue && proyectoValue && rucValue && nombreContactoValue 
    && numeroContactoValue && correoContactoValue && profundidadTValue 
    && longitudTValue && diametroTValue && unidadDiametroTValue
    ) {
    event.preventDefault();
    const title = `SOLICITUD%20DE%20COTIZACION%20POR%20LA%20PAGINA%20WEB%0a`;
    const servicioKeyValue = `%0aServicio:%20${servicioValue}`;
    const proyectoKeyValue = `%0aUbicación%20del%20Proyecto:%20${proyectoValue}`;
    const rucKeyValue = `%0aRuc:%20${rucValue}`;
    const nombreKeyValue = `%0aNombre:%20${nombreContactoValue}`;
    const numeroKeyValue = `%0aNúmero:%20${numeroContactoValue}`;
    const correoKeyValue = `%0aCorreo:%20${correoContactoValue}`;

    const profundidadKeyTValue = `%0aProfundidad%20de%20tubería:%20${profundidadTValue}m`;
    const longitudKeyTValue = `%0aLongitud%20de%20tubería:%20${longitudTValue}%20${unidadDiametroTValue}`;
    const diametroKeyTValue = `%0aDiámetro:%20${diametroTValue}m`;

    const text = `${title}${servicioKeyValue}${proyectoKeyValue}${profundidadKeyTValue}${longitudKeyTValue}${diametroKeyTValue}${rucKeyValue}${nombreKeyValue}${numeroKeyValue}${correoKeyValue}`;

    window.open(`${urlWhatsapp}${text}`);

    const objValue = {
      servicio: servicioValue, 
      proyecto: proyectoValue, 
      ruc: rucValue, 
      nombre: nombreContactoValue, 
      numero: numeroContactoValue, 
      correo: correoContactoValue,
      profundidadTuberia: profundidadTValue,
      longitudTuberia: longitudTValue,
      unidadDiametroTuberia: unidadDiametroTValue,
      diametroTuberia: diametroTValue
    }

    await setQuotationDB(objValue);

  }
}

const setQuotationDB = ({servicio, proyecto, ruc, nombre, numero, correo, profundidadTuberia, longitudTuberia, unidadDiametroTuberia, diametroTuberia}) => 
  db.collection('cotizaciones-web').doc().set({
    servicio,
    proyecto,
    ruc,
    nombre,
    numero,
    correo,
    profundidadTuberia,
    longitudTuberia,
    unidadDiametroTuberia,
    diametroTuberia
  }).then(() => {
    servicioValidacion.value = '';
    proyectoValidacion.value = '';
    rucValidacion.value = '';
    nombreContactoValidacion.value = '';
    numeroContactoValidacion.value = '';
    correoContactoValidacion.value = '';
    profundidadTValidacion.value = '';
    longitudTValidacion.value = '';
    diametroTValidacion.value = '';
    unidadDiametroTValidacion.value = '';
  });

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
  
const arrayServiceList = [
  {
    id: 1,
    title: 'Servicio seleccionado 1',
    paragraph: 'La máquina de restitución instala las varillas por dentro de la tubería a sustituir tanto para acueductos y alcantarillados en diámetros de 3" hasta 60" '
  },
  {
    id: 2,
    title: 'Servicio seleccionado 2',
    paragraph: 'La máquina de restitución instala las varillas por dentro de la tubería a sustituir tanto para acueductos y alcantarillados en diámetros de 3" hasta 60" '
  },
  {
    id: 3,
    title: 'Servicio seleccionado 3',
    paragraph: 'La máquina de restitución instala las varillas por dentro de la tubería a sustituir tanto para acueductos y alcantarillados en diámetros de 3" hasta 60" '
  },
  {
    id: 4,
    title: 'Servicio seleccionado 4',
    paragraph: 'La máquina de restitución instala las varillas por dentro de la tubería a sustituir tanto para acueductos y alcantarillados en diámetros de 3" hasta 60" '
  },
  {
    id: 5,
    title: 'Servicio seleccionado 5',
    paragraph: 'La máquina de restitución instala las varillas por dentro de la tubería a sustituir tanto para acueductos y alcantarillados en diámetros de 3" hasta 60" '
  },
  {
    id: 6,
    title: 'Servicio seleccionado 6',
    paragraph: 'La máquina de restitución instala las varillas por dentro de la tubería a sustituir tanto para acueductos y alcantarillados en diámetros de 3" hasta 60" '
  }
];


function servicioSelected(id) {
  const servicioSelectedArr = arrayServiceList.filter(item => item.id === id);
  if (servicioSelectedArr) {
    const servicioSelectedObject = servicioSelectedArr[0];
    const titleServiceSelected = document.getElementById('titleServiceSelected');
    const paragraphServiceSected = document.getElementById('paragraphServiceSected');

    titleServiceSelected.innerHTML = servicioSelectedObject.title;
    paragraphServiceSected.innerHTML = servicioSelectedObject.paragraph;
  }
}

function iconWhatsapp() {
  window.open(`${urlWhatsapp}Hola,%20quisiera%20conversar%20con%20un%20asesor`);
}
