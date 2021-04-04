document.addEventListener('DOMContentLoaded', () => {


    // namu
    let btnToggle = document.querySelector('.js-toggle-nemu');
    let menu = document.querySelector('.header-nav__nemu.menu');
    let btnClose = document.querySelector('.clise-menu-btn')

    btnToggle.addEventListener('click', () => {
        menu.classList.toggle('open')
    })
    btnClose.addEventListener('click', () => {
        menu.classList.remove('open')
    })


    // format 
    let elem = document.querySelectorAll('.format__text-item');
    elem.forEach( item => {
        let btn = item.querySelector('.format__toggle-btn');
        if(btn){
            btn.addEventListener('click', () => {
                item.classList.toggle('off')
            })
        }
        
    })







    // Табы
    function tabClick(){
        let tabContainer = document.querySelectorAll('.tab__container');
        tabContainer.forEach( item => {
            let btnContainer = item.querySelector('.tab__btns');
            let btnAll = item.querySelectorAll('.tab__btn');
            let contentContainer = item.querySelector('.tab__contents');
            let contentAll = item.querySelectorAll('.tab__content');

            btnAll.forEach( (item, i) => {
                item.addEventListener('click', () => {
                    btnRemoveActive(btnAll, i);
                    contentRemoveActive(contentAll, i);
                })
            });

            
            btnRemoveActive(btnAll);
            contentRemoveActive(contentAll);
        })
    }
    if(document.querySelectorAll('.tab__container')){
        tabClick();
    }
    // Убираем активный класс у таба и добавляем его
    function btnRemoveActive(btnAll, i = 0){
        btnAll.forEach( item => {
            item.classList.remove('active');
        });
        btnAll[i].classList.add('active');
    }
    // Убираем активный класс у контента и добавляем его
    function contentRemoveActive(contentAll, i = 0){
        contentAll.forEach( item => {
            item.classList.remove('active');
        });
        contentAll[i].classList.add('active');
    }




    let pepleSlider = document.querySelector('.prepod__slider');
    if(pepleSlider){
        $(document).ready(function(){
            let prepodSlider = $("#prepod__slider");
            prepodSlider.owlCarousel(
                {
                    margin:30,
                    items: 3,
                    nav: false,
                    loop: false,
                    dots: false,
                    loop: true,
                    responsive : {
                        // breakpoint from 0 up
                        0 : {
                            items: 1,
                            autoWidth: false,
                        },
                        // breakpoint from 480 up
                        418 : {
                            items: 3,
                            autoWidth: true,
                        }

                    }
                }
            );
            $('.peple-prev-js').click(function() {
                prepodSlider.trigger('prev.owl.carousel');
            })
            $('.peple-next-js').click(function() {
                prepodSlider.trigger('next.owl.carousel', [300]);
            })
        });
    }

    let imgSlider = document.querySelector('.img-slider');
    if(imgSlider){
        $(document).ready(function(){
            let imgSlider = $("#img-slider");
            imgSlider.owlCarousel(
                {
                    margin:30,
                    nav: false,
                    loop: false,
                    dots: false,
                    loop: true,
                    responsive : {
                        // breakpoint from 0 up
                        0 : {
                            items: 1,
                            autoWidth: false,
                        },
                        581 : {
                            items: 2,
                            autoWidth: false,
                        },
                        // breakpoint from 480 up
                        776 : {
                            items: 3,
                            autoWidth: false,
                        }

                    }
                }
            );
            $('.otzv-prev-js').click(function() {
                imgSlider.trigger('prev.owl.carousel');
            })
            $('.otzv-next-js').click(function() {
                imgSlider.trigger('next.owl.carousel', [300]);
            })
        });
    };

    let textSSlider = document.querySelector('.text-slider');
    if(textSSlider){

        $(document).ready(function(){
            let textSlider = $("#text-slider");
            textSlider.owlCarousel(
                {
                    margin:30,
                    items: 1,
                    nav: false,
                    loop: false,
                    dots: true,
                    loop: true,
                    dotsContainer: '.dots-text-slider',
                    responsive : {
                        // breakpoint from 0 up
                        0 : {
                            items: 1,
                            autoWidth: false,
                        },
                        // breakpoint from 480 up
                        418 : {
                            items: 1,
                            autoWidth: false,
                        }

                    }
                }
            );
            $('.otzv-prev-js').click(function() {
                textSlider.trigger('prev.owl.carousel');
            })
            $('.otzv-next-js').click(function() {
                textSlider.trigger('next.owl.carousel', [300]);
            })
            $('.thumb').click(function(){
                textSlider.trigger('to.owl.carousel', [$(this).index(), 300]);  
            })
        });
    }

    
    let langPriceSlider = document.querySelector('.lang-price-slider');
    if(langPriceSlider){

        $(document).ready(function(){
            let langSlider = $(".lang-price-slider");
            langSlider.owlCarousel(
                {
                    margin:0,
                    items: 1,
                    nav: false,
                    loop: false,
                    dots: true,
                    loop: true,
                    responsive : {
                    }
                }
            );
            $('.otzv-prev-js').click(function() {
                langSlider.trigger('prev.owl.carousel');
            })
            $('.otzv-next-js').click(function() {
                langSlider.trigger('next.owl.carousel', [300]);
            })
        });
    }

    
    let sertSlider = document.querySelector('#sert');
    if(sertSlider){

        $(document).ready(function(){
            let sert = $("#sert");
            sert.owlCarousel(
                {
                    nav: false,
                    loop: false,
                    dots: true,
                    loop: true,
                    responsive : {
                        // breakpoint from 0 up
                        0 : {
                            margin:20,
                            items: 1,
                            center: false,
                            autoWidth: false,
                        },
                        390 : {
                            margin:20,
                            items: 1,
                            center: false,
                            autoWidth: true,
                        },
                        590 : {
                            margin:20,
                            items: 2,
                            autoWidth: false,
                            center: true,
                        },
                        830 : {
                            margin:20,
                            items: 3,
                            autoWidth: false,
                            center: true,
                        },
                        // breakpoint from 480 up
                        1200 : {
                            margin:0,
                            items: 3,
                            autoWidth: false,
                            center: true,
                        }

                    }
                }
            );
            $('.sert-prev-js').click(function() {
                sert.trigger('prev.owl.carousel');
            })
            $('.sert-next-js').click(function() {
                sert.trigger('next.owl.carousel', [300]);
            })
        });
    }



    // Скрол к элементу
    if(window.innerWidth <= 1115){
        const smoothLinks = document.querySelectorAll('.tab__btn[data-click]');
        console.log(smoothLinks)
        for (let smoothLink of smoothLinks) {
            smoothLink.addEventListener('click', function (e) {
                e.preventDefault();
                const id = smoothLink.getAttribute('data-click');


                document.querySelector(`#${id}`).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        };
    }



    // Логика модалок
    let modals = document.querySelectorAll('.modal');

    function modal( modal, openBtn ){
        let btnOpen = document.querySelectorAll(`${openBtn}`);
        let btnClode = modal.querySelectorAll('.modal__close');

        btnOpen.forEach( btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('open')
            })
        })
        btnClode.forEach( btn => {
            btn.addEventListener('click', () => {
                modal.classList.remove('open')
            })
        })
    }

    document.addEventListener('click', e => {
        if(e.target.classList.contains('modal')){
            modals.forEach( elem => {
                elem.classList.remove('open')
            })
        }
    } )

    modal( modals[0], '.modal-open-1');
    modal( modals[1], '.modal-open-2');
    modal( modals[2], '.modal-open-3');
    




    

})