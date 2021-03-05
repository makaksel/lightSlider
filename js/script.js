$(document).ready(function () {


// TODO слайдер
// обработка кнопки следующий слайд
    $(document).on('click', '.light-slider .light-slider__next-img', function() {
        // получаем значения количества фото и активного слайда из data-atribute
        var slidesLenght = $(this).parent('.light-slider').data('length');
        var slideActiveIndex = $(this).parent('.light-slider').data('active');
       
        // если индекс текущего слайда меньше чем количество слайдов
        if(slideActiveIndex < slidesLenght) {
            slideActiveIndex++;
            $(this).parent('.light-slider').data('active', slideActiveIndex);

            $(this).parent('.light-slider').find('.light-slider__prev-img').removeClass('disable');

            $(this).parent('.light-slider').find('.light-slider__img.active').removeClass('active');
            $(this).parent('.light-slider').find('.light-slider__thumb.active').removeClass('active');

            $(this).parent('.light-slider').find('.light-slider__img').eq(slideActiveIndex - 1).addClass('active');
            $(this).parent('.light-slider').find('.light-slider__thumb').eq(slideActiveIndex - 1).addClass('active');

        // если индекс текущего слада равен количеству слайдов, блокируем кнопку вперед
            if(slideActiveIndex === slidesLenght){
                $(this).parent('.light-slider').find('.light-slider__next-img').addClass('disable');
            }
        }
        
    });

// обработка кнопки предыдущий слайд
    $(document).on('click', '.light-slider .light-slider__prev-img', function() {

        // получаем значения количества фото и активного слайда из data-atribute
        var slideActiveIndex = $(this).parent('.light-slider').data('active');

        // если индекс текущего слайда больше чем ноль
        if(slideActiveIndex > 0) {
            slideActiveIndex--;
            $(this).parent('.light-slider').data('active', slideActiveIndex);

            $(this).parent('.light-slider').find('.light-slider__next-img').removeClass('disable');

            $(this).parent('.light-slider').find('.light-slider__img.active').removeClass('active');
            $(this).parent('.light-slider').find('.light-slider__thumb.active').removeClass('active');

            $(this).parent('.light-slider').find('.light-slider__img').eq(slideActiveIndex - 1).addClass('active');
            $(this).parent('.light-slider').find('.light-slider__thumb').eq(slideActiveIndex - 1).addClass('active');

        // если индекс текущего слада равен первому, блокируем кнопку назад
            if(slideActiveIndex === 1){
                $(this).parent('.light-slider').find('.light-slider__prev-img').addClass('disable');
            }
        } 


        
    });







  
});