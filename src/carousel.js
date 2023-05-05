window.addEventListener('load',()=>{
    const carousel = document.querySelector('.carousel__lista')
    new Glider(carousel, {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        },
        responsive: [
            {
                // screens greater than >= 1024px
                breakpoint: 500,
                settings: {
                draggable: true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  itemWidth: 150,
                  duration: 0.25
                }
              },{
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                draggable: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                draggable: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
      });
})