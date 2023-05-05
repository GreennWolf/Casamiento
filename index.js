const reproductor=document.getElementById('reproductor')
const btnMusic=document.getElementById('btn-music')
btnMusic.addEventListener('click',()=>{
  if(reproductor.paused == true){
    reproductor.play()
  }else{
    reproductor.pause()
  }
})

  // const galeria = document.getElementById('galeria')

  // const btn1 = document.getElementById('btn-galeria1')
  // const btn2 = document.getElementById('btn-galeria2')
  // const btn3 = document.getElementById('btn-galeria3')
  // const btn4 = document.getElementById('btn-galeria4')

  // var margin1 = 0 + 'px'
  // var margin2 = -440+ 'px'
  // var margin3 = -395-475 + 'px' 
  // var margin4 = -395-525-425 + 'px' 

  // galeria.addEventListener('transitionstart',()=>{
  //   if(galeria.style.marginLeft == margin1){
  //     btn1.classList.add('active')
  //   }else{
  //     btn1.classList.remove('active')
  //   }
  //   if(galeria.style.marginLeft == margin2){
  //     btn2.classList.add('active')
  //   }else{
  //     btn2.classList.remove('active')
  //   }
  //   if(galeria.style.marginLeft == margin3){
  //     btn3.classList.add('active')
  //   }else{
  //     btn3.classList.remove('active')
  //   }
  //   if(galeria.style.marginLeft == margin4){
  //     btn4.classList.add('active')
  //   }else{
  //     btn4.classList.remove('active')
  //   }
  // })

  // btn1.addEventListener('click',()=>{
  //   galeria.style.marginLeft = margin1
  //   galeria.style.transition = 'all 0.5s'
  // })


  // btn2.addEventListener('click',()=>{
  //   galeria.style.marginLeft =  margin2
  //   galeria.style.transition = 'all 0.5s'
  // })

  // btn3.addEventListener('click',()=>{

  //   galeria.style.marginLeft = margin3 
  //   galeria.style.transition = 'all 0.5s'
  // })

  // btn4.addEventListener('click',()=>{

  //   galeria.style.marginLeft = margin4
  //   galeria.style.transition = 'all 0.5s'
  // })

//   const slider = document.getElementById('galeria');
//   let sliderSection = document.querySelectorAll('.slidersection');
//   let sliderSectionLast = sliderSection[sliderSection.length -1];
  
//   slider.insertAdjacentElement('afterbegin',sliderSectionLast);
  
//   const interval = setInterval(()=>{
//       Next();
//   },4000);
  
  
//   function Next(){
//     let sliderSectionFirst = document.querySelectorAll('.slidersection')[0];
//     slider.style.marginLeft = '-87%'
//     slider.style.transition = 'all 1s'
//     setTimeout(function(){
//         slider.style.transition = 'none'
//         slider.insertAdjacentElement('beforeend',sliderSectionFirst);
//         slider.style.marginLeft = '-55.8%'
//     },3000)
// }

// const sliderM = document.getElementById('galeria-m');
// let sliderSectionM = document.querySelectorAll('.slidersection-m');
// let sliderSectionLastM = sliderSection[sliderSection.length -1];

// sliderM.insertAdjacentElement('afterbegin',sliderSectionLastM);

// const intervalM = setInterval(()=>{
//     Next();
// },4000);


// function Next(){
//   let sliderSectionFirstM = document.querySelectorAll('.slidersection-m')[0];
//   sliderM.style.marginLeft = '-87%'
//   sliderM.style.transition = 'all 1s'
//   setTimeout(function(){
//       sliderM.style.transition = 'none'
//       sliderM.insertAdjacentElement('beforeend',sliderSectionFirstM);
//       sliderM.style.marginLeft = '-55.8%'
//   },3000)
// }
  

//BOTONES Movil

// const btn1M = document.getElementById('btn-m-galeria1')
// const btn2M = document.getElementById('btn-m-galeria2')
// const btn3M = document.getElementById('btn-m-galeria3')
// const btn4M = document.getElementById('btn-m-galeria4')

// var margin1M = 0 + 'px'
// var margin2M = -400+ 'px'
// var margin3M = -400-400 + 'px' 
// var margin4M = -400-400-400 + 'px' 

// galeria.addEventListener('transitionstart',()=>{
//   if(galeria.style.marginLeft == margin1M){
//     btn1M.classList.add('active')
//   }else{
//     btn1M.classList.remove('active')
//   }
//   if(galeria.style.marginLeft == margin2M){
//     btn2M.classList.add('active')
//   }else{
//     btn2M.classList.remove('active')
//   }
//   if(galeria.style.marginLeft == margin3M){
//     btn3M.classList.add('active')
//   }else{
//     btn3M.classList.remove('active')
//   }
//   if(galeria.style.marginLeft == margin4M){
//     btn4M.classList.add('active')
//   }else{
//     btn4M.classList.remove('active')
//   }
// })

// btn1M.addEventListener('click',()=>{
//   galeria.style.marginLeft = margin1M
//   galeria.style.transition = 'all 0.5s'
// })


// btn2M.addEventListener('click',()=>{
//   galeria.style.marginLeft =  margin2M
//   galeria.style.transition = 'all 0.5s'
// })

// btn3M.addEventListener('click',()=>{

//   galeria.style.marginLeft = margin3M 
//   galeria.style.transition = 'all 0.5s'
// })

// btn4M.addEventListener('click',()=>{

//   galeria.style.marginLeft = margin4M
//   galeria.style.transition = 'all 0.5s'
// })

//Animaciones

let svgContainerCorazonFalta = document.querySelector('.mundo');

let animCorazonFalta = bodymovin.loadAnimation({
  wrapper: svgContainerCorazonFalta,
  animType: 'svg',
  loop: true,
  path: "./img/json_contador.json"
});

let svgContainerAvionPortadaM = document.querySelector('.avion-m1');

let animAvionPortadaM = bodymovin.loadAnimation({
  wrapper: svgContainerAvionPortadaM,
  animType: 'svg',
  autoplay: true,
  loop: true,
  path:"./img/avion-m.json"
});

let svgContainerAvionPortada = document.querySelector('.avion');

let animAvionPortada = bodymovin.loadAnimation({
  wrapper: svgContainerAvionPortada,
  animType: 'svg',
  autoplay: true,
  loop: true,
  path:"./img/json_avion1.json"
});

let svgContainerAvion2 = document.querySelector('.avion2');

let animAvion2 = bodymovin.loadAnimation({
  wrapper: svgContainerAvion2,
  animType: 'svg',
  loop: true,
  path:"./img/avion2.json"
});

let svgContainerAvion3 = document.querySelector('.avion3');

let animAvion3 = bodymovin.loadAnimation({
  wrapper: svgContainerAvion3,
  animType: 'svg',
  loop: true,
  path:"./img/avion2.json"
});

let svgContainerAnillos = document.querySelector('.icono');

let animAnillos = bodymovin.loadAnimation({
  wrapper: svgContainerAnillos,
  animType: 'svg',
  loop: true,
  path:"./img/ceremonia.json"
});

animAnillos.play();

let svgContainerFiesta = document.querySelector('#fiesta');

let animFiesta = bodymovin.loadAnimation({
  wrapper: svgContainerFiesta,
  animType: 'svg',
  loop: true,
  path:"./img/fiesta.json"
});

animFiesta.play();

let svgContainerGaleria = document.querySelector('.icono-foto');

let animGaleria = bodymovin.loadAnimation({
  wrapper: svgContainerGaleria,
  animType: 'svg',
  loop: true,
  path:"./img/camara.json"
});

let svgContainerMusica = document.querySelector('.icono-card');

let animMusica = bodymovin.loadAnimation({
  wrapper: svgContainerMusica,
  animType: 'svg',
  loop: true,
  path:"./img/musica.json"
});

animMusica.play();

let svgContainerRegalos = document.querySelector('.icono-regalo');

let animRegalos = bodymovin.loadAnimation({
  wrapper: svgContainerRegalos,
  animType: 'svg',
  loop: true,
  path:"./img/regalo.json"
});

animRegalos.play();

var fechaCuentaRegresiva = "12/02/2023 20:00:00";
var lang_textoFinalCuentaRegresiva  = 'A tu casa papi'

    // Set the date we're counting down to
    var countDownDate = new Date(fechaCuentaRegresiva).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById("reloj").innerHTML = days + " días " + hours + "hs " +
      //   minutes + "m " + seconds + "s ";

      $("#dias").text(days);
      $("#horas").text(hours);
      $("#minutos").text(minutes);
      $("#segundos").text(seconds);



      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("reloj").innerHTML = '<p class="fin-cuenta">' +
          lang_textoFinalCuentaRegresiva + '</p>';
        $('.falta').text('');
      }
    }, 1000);

    // BOTONES OPCIONES

    const agendarCivil=document.getElementById('agendar-civil')
    const agendarFiesta=document.getElementById('agendar-fiesta')
    
    agendarCivil.addEventListener('click',()=>{
      window.open('https://calendar.google.com/calendar/u/0/r/eventedit?text=Boda+de+Anto+y+Jose+(Ceremonia)&dates=20231206T203545/20231206T213545&ctz=America/Argentina/Buenos_Aires&details&location&pli=1&uid=1675294852addeventcom&sf=true&output=xml')
    })
    
    agendarFiesta.addEventListener('click',()=>{
      window.open('https://calendar.google.com/calendar/u/0/r/eventedit?text=Boda+de+Anto+y+Jose+(Fiesta)&dates=20231209T203545/20231209T213545&ctz=America/Argentina/Buenos_Aires&details&location&pli=1&uid=1675294852addeventcom&sf=true&output=xml')
    })

    //MODAL
    const closeCivil=document.getElementById('close-civil')
    const modalCivil=document.getElementById('modal-civil')
    const modalBoton=document.getElementById('btn-asistencia')
    modalBoton.addEventListener('click',()=>{
      $('html,body').css('overflow-y', 'hidden');
      modalCivil.showModal()
    })
    closeCivil.addEventListener('click', ()=>{
      $('html,body').css('overflow-y', 'visible');
      modalCivil.close()
    
    })

    const closeFiesta=document.getElementById('close-fiesta')
    const modalFiesta=document.getElementById('modal-fiesta')
    const modalBoton1=document.getElementById('btn-asistencia2')
    modalBoton1.addEventListener('click',()=>{
      $('html,body').css('overflow-y', 'hidden');
      modalFiesta.showModal()
    })
    closeFiesta.addEventListener('click', ()=>{
      $('html,body').css('overflow-y', 'visible');
      modalFiesta.close()
    })

    const closeCancion=document.getElementById('close-cancion')
    const modalCancion=document.getElementById('modal-cancion')
    const modalBoton2=document.getElementById('btn-musica')
    modalBoton2.addEventListener('click',()=>{
      $('html,body').css('overflow-y', 'hidden');
      modalCancion.showModal()
    })
    closeCancion.addEventListener('click', ()=>{
      $('html,body').css('overflow-y', 'visible');
      modalCancion.close()
    })
    
    const closeRegalos=document.getElementById('close-regalos')
    const modalRegalos=document.getElementById('modal-regalos')
    const modalBoton3=document.getElementById('btn-regalos')
    modalBoton3.addEventListener('click',()=>{
      $('html,body').css('overflow-y', 'hidden');
      modalRegalos.showModal()
    })
    closeRegalos.addEventListener('click', ()=>{
      $('html,body').css('overflow-y', 'visible');
      modalRegalos.close()
    })


    //MAPA

    const direccionCivil=document.getElementById('btn-direccion-civil')
    const direccionFiesta=document.getElementById('btn-direccion-fiesta')
    
    direccionCivil.addEventListener('click',()=>{
      window.open('https://goo.gl/maps/kJumQmFb5dGNFSts7')
    })
    
    direccionFiesta.addEventListener('click',()=>{
      window.open('https://goo.gl/maps/numgTKV8SKDZRG447')
    })