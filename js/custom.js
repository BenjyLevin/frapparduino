/*$("document").ready(function() {
 
                $('#about').click(function(){
 
                    $('html, body').animate({
                        scrollTop: $("#slide1").offset().top
                    }, 1000);
 
                 });
 
                $('#who').click(function(){
 
                    $('html, body').animate({
                        scrollTop: $("#slide2").offset().top
                    }, 1000);
 
                 });
 
                    $('#demo').click(function(){
 
                    $('html, body').animate({
                        scrollTop: $("#slide3").offset().top
                    }, 2000);
 
                 });
 
});*/
/*
$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
    });
});
*/
    $(document).ready(function() {

            /*
            * Plugin intialization
            */
            $('#pagepiling').pagepiling({
                menu: '#menu',
                anchors: ['page1', 'page2', 'page3'],
                navigation: {
                    'position': 'right',
                    'tooltips': ['Page 1', 'Page 2', 'Page 3']
                },
                afterRender: function(){
                    $('#pp-nav').addClass('custom');
                },
                afterLoad: function(anchorLink, index){
                    if(index>1){
                        $('#pp-nav').removeClass('custom');
                    }else{
                        $('#pp-nav').addClass('custom');
                    }
                }
            });


            /*
            * Internal use of the demo website
            */
            $('#showExamples').click(function(e){
                e.stopPropagation();
                e.preventDefault();
                $('#examplesList').toggle();
            });

            $('html').click(function(){
                $('#examplesList').hide();
            });
        });