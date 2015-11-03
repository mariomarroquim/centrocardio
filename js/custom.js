(function($){
    "use strict";
    $(document).ready(function ($) {

    /*-----------------------------------------------------------------*/
    /* General Targets
    /*-----------------------------------------------------------------*/
    $('.appoint-widget p span:last-child').css('border-bottom', 'none');
    $('footer .appoint-widget p span:last-child').css('border-bottom', 'none');
    //$('.services-page .services-tabs .tab-main .tab-title:first-of-type').animate({borderTop: '1px solid #dcdee4', marginTop: '0'});


    /*-----------------------------------------------------------------*/
    /* Header Nav Animate
    /*-----------------------------------------------------------------*/
    if ($(window).width() >= '751') {
        $('#header nav li').hover(function () {
            $(this).children('ul').stop(true, true).slideDown(200);
        }, function () {
            $(this).children('ul').stop(true, true).slideUp(200);
        });
    }

    $('#header nav li ul li a').hover(function () {
        $(this).stop(true, true).velocity({paddingLeft: "23px"}, 150);
    }, function () {
        $(this).stop(true, true).velocity({paddingLeft: "20px"}, 150);
    });


    /*-----------------------------------------------------------------------------------*/
    /*	Responsive Nav
    /*  Using MeanMenu Plugin
    /*-----------------------------------------------------------------------------------*/
    if( jQuery().meanmenu ){
        jQuery('nav.main-menu').meanmenu({
            meanMenuClose: '<i class="fa fa-times"></i>', // single character you want to represent the close menu button
            meanExpand: "+", // single character you want to represent the expand for ULs
            meanContract: "-", // single character you want to represent the contract for ULs
            meanMenuContainer: '#responsive-menu-container', // Choose where meanmenu will be placed within the HTML
            meanScreenWidth: "767", // set the screen width you want meanmenu to kick in at
            meanRemoveAttrs: true // true to remove classes and IDs, false to keep them
        });
    }


    /*-----------------------------------------------------------------------------------*/
    /*	Flex Slider
    /*  You can learn more about its options from http://www.woothemes.com/flexslider/
    /*-----------------------------------------------------------------------------------*/
    if ( jQuery().flexslider ) {

        // Flex Slider for Home page
        $('.home-slider .flexslider').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: false,
            pauseOnHover: false,
            pauseOnAction: false,
            smoothHeight: false,
            start: function (slider) {
                slider.removeClass('loading');
            }
        });

        // Flex Slider for gallery detail page
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            reverse: false,
            slideshow: false,
            itemWidth: 123,
            minItems: 4,
            itemMargin: 10,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });

        /* Gallery slider for home page blog section and blog page */
        $('.gallery-slider').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true,
            pauseOnHover: true,
            pauseOnAction: false,
            smoothHeight: true,
            start: function (slider) {
                slider.removeClass('loading');
            }
        });

        // Flex Slider Three for home testimonial section
        $('.flexslider-three').flexslider({
            animation: "fade",
            controlNav: false,
            directionNav: true,
            pauseOnHover: true,
            pauseOnAction: false,
            smoothHeight: true
        });


        // Flex Slider for services single
        $('.services-single .flexslider').flexslider({
            animation: "fade",
            controlNav: true,
            directionNav: false,
            pauseOnHover: true,
            pauseOnAction: false,
            smoothHeight: true
        });

    }


    /*-----------------------------------------------------------------*/
    /* Appointment Form
    /*-----------------------------------------------------------------*/
    $('.make-appoint').click(function () {
        var $this = $(this);
        var appointment_form = $this.parents('.appointment').find('.appointment-form');
        if ($this.hasClass('open')) {
            appointment_form.slideDown(500);
            $this.removeClass('open');
        } else {
            appointment_form.slideUp(500);
            $this.addClass('open');
        }
    });


    /*-----------------------------------------------------------------*/
    /* For Home Team Section Min Height
    /*-----------------------------------------------------------------*/
    $(window).load(function () {
        var teamMax = -1;
        var team_common = $(".home-team .common");
        team_common.each(function () {
            var teamHeight = $(this).outerHeight();
            teamMax = teamHeight > teamMax ? teamHeight : teamMax;
        });
        team_common.css('min-height', teamMax);
    });

    function equalHeight() {
        var teamMax = -1;
        var team_common = $(".home-team .common");
        team_common.each(function () {
            var teamHeight = $(this).outerHeight();
            teamMax = teamHeight > teamMax ? teamHeight : teamMax;
        });
        team_common.css('min-height', teamMax);
    }

    $(window).bind('resize', function () {
        equalHeight();
    });


    /*-----------------------------------------------------------------*/
    /* For Home Team Section Min Height
    /*-----------------------------------------------------------------*/
    $(window).load(function () {
        var blogMax = -1;
        var home_blog_post = $(".home-blog .common");
        home_blog_post.each(function () {
            var blogHeight = $(this).outerHeight();
            blogMax = blogHeight > blogMax ? blogHeight : blogMax;
        });
        home_blog_post.css('min-height', blogMax);
    });


    /*-----------------------------------------------------------------*/
    /* Toggle
    /*-----------------------------------------------------------------*/
    $('.toggle-main .toggle:first-child').addClass('current').children('.toggle-content').css('display', 'block');
    $('.toggle-title').click(function () {
        var parent_toggle = $(this).closest('.toggle');
        if (parent_toggle.hasClass('current')) {
            parent_toggle.removeClass('current').children('.toggle-content').slideUp(300);
        } else {
            parent_toggle.addClass('current').children('.toggle-content').slideDown(300);
        }
    });


    /*-----------------------------------------------------------------*/
    /* Accordion
    /*-----------------------------------------------------------------*/
    $('.accordion-main .accordion:first-child').addClass('current').children('.accordion-content').css('display', 'block');
    $('.accordion-title').click(function () {
        var parent_accordion = $(this).closest('.accordion');
        if (parent_accordion.hasClass('current')) {
            parent_accordion.removeClass('current').children('.accordion-content').slideUp(300);
        } else {
            parent_accordion.addClass('current').children('.accordion-content').slideDown(300);
        }
        parent_accordion.siblings('.accordion').removeClass('current').children('.accordion-content').slideUp(300);
    });


    /*-----------------------------------------------------------------------------------*/
    /* Tabs
    /*-----------------------------------------------------------------------------------*/
    $(function(){

        var $tabsNav    = $('.tabs-nav'),
            $tabsNavLis = $tabsNav.children('li');

        $tabsNav.each(function(){
            var $this = $(this);
            $this.next().children('.tab-content').stop(true,true).hide()
                .first().show();
            $this.children('li').first().addClass('active').stop(true,true).show();
        });

        $tabsNavLis.on('click', function(e) {
            var $this = $(this);
            if( !$this.hasClass('active') ){
                $this.siblings().removeClass('active').end()
                    .addClass('active');
                var idx = $this.parent().children().index($this);
                $this.parent().next().children('.tab-content').stop(true,true).hide().eq(idx).fadeIn();
            }
            e.preventDefault();
        });

    });

    /* ----------------------------------------------------*/
    /*	Tabs for tab widget
    /* ----------------------------------------------------*/
    $('.tabs .tabs-content').first().css('display', 'block');

    $(".tabs .tab-head").click(function () {

        $(this).siblings().removeClass("active").end()
            .andSelf().addClass("active");

        var tab = $(this).index();
        var content = $('.tabs-content');
        content.stop(true, true).hide().velocity({opacity: 0}, 500);
        $('.tabs-content:eq(' + tab + ')').stop(true, true).show().velocity({opacity: 1}, 500);
    });


    /*-----------------------------------------------------------------*/
    /* Tabs for homepage services
    /*-----------------------------------------------------------------*/
    $('.tab-main .tab-title:first-of-type').css('margin-top', '30px').css('border-top', '1px solid #dcdee4');

    $('.tab-main .tab-content .content').first().css('display', 'block');
    $('.tab-main .tab-title').first().addClass("active");

    $(".tab-main .tab-title").click(function () {
        $(this).siblings().removeClass("active").end().andSelf().addClass("active");
        var tab = $(this).index();
        var content = $('.content');
        content.stop(true, true).hide().velocity({opacity: 0}, 500);
        $('.content:eq(' + tab + ')').stop(true, true).show().velocity({opacity: 1}, 500);
    });


    /*-----------------------------------------------------------------*/
    /* isotopes Effects
    /*-----------------------------------------------------------------*/
    if (jQuery().isotope) {
        // cache container
        var $container = $('#isotope-container');

        // filter items when filter link is clicked
        $('#filters a').not('.no-isotope').click(function (e) {
            e.preventDefault();
            $(this).parents('li').addClass('active').siblings().removeClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                layoutMode: 'fitRows',
                itemSelector: '.isotope-item',
                animationEngine: 'best-available'
            });
        });

        /* to fix floating bugs due to variation in height */
        setTimeout(function () {
            $container.isotope({
                filter: "*",
                layoutMode: 'fitRows',
                itemSelector: '.isotope-item',
                animationEngine: 'best-available'
            });
        }, 1000);
    }

    /*-----------------------------------------------------------------*/
    /* For FAQ Groups Filtering
    /*-----------------------------------------------------------------*/
    $('#filters a.no-isotope').click(function (e) {
        e.preventDefault();
        $(this).parents('li').addClass('active').siblings().removeClass('active');
        var selector = $(this).attr('data-filter');
        var $questions = $('.toggle-main.faq').find('.toggle');
        if (selector == '*') {
            $questions.show();
        } else {
            $questions.not(selector).hide().end().filter(selector).show();
        }
    });

    /*-----------------------------------------------------------------------------------*/
    /*	Scroll to Top
    /*-----------------------------------------------------------------------------------*/
    $(function () {
        $(window).scroll(function () {
            if (!$('body').hasClass('probably-mobile')) {
                if ($(this).scrollTop() > 250) {
                    $('a#scroll-top').fadeIn();
                } else {
                    $('a#scroll-top').fadeOut();
                }
            }
            else {
                $('a#scroll-top').fadeOut();
            }
        });

        $('a#scroll-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').velocity("scroll", { duration: 750, easing: "swing" });
        });
    });


        $.validator.addMethod("placeholder", function (value, element) {
            if (value == $(element).attr('placeholder')) {
                return false;
            } else {
                return true;
            }
        });


        /*----------------------------------------------------------------------------------*/
        /* Contact Form AJAX validation and submission
         /* Validation Plugin : http://bassistance.de/jquery-plugins/jquery-plugin-validation/
         /* Form Ajax Plugin : http://www.malsup.com/jquery/form/
         /*---------------------------------------------------------------------------------- */
        if (jQuery().validate && jQuery().ajaxSubmit) {

            //subscription form Handler

            /* Contact Form Handler */
            var subs_loader = $('#subs-loader'),
               subs_response_container = $('#subs-response-container'),
                subs_error_container = $("#subs-error-container"),
                subs_contact_form = $('#subs_form');

            subs_loader.fadeOut('fast');

            var subs_options = {
                target: subs_response_container,
                beforeSubmit: function () {
                    subs_loader.fadeIn('fast');
                    subs_response_container.fadeOut('fast');
                },
                success: function () {
                    subs_loader.fadeOut('fast');
                    subs_response_container.fadeIn('fast');
                    subs_contact_form.resetForm();
                }
            };

            subs_contact_form.validate({
                errorLabelContainer: subs_error_container,
                submitHandler: function (form) {
                    $(form).ajaxSubmit(subs_options);
                }
            });

            /* Contact Form Handler */
            var contact_loader = $('#contact-loader'),
                response_container = $('#response-container'),
                error_container = $("#error-container"),
                contact_form = $('#contact_form');

            contact_loader.fadeOut('fast');

            var contact_options = {
                target: response_container,
                beforeSubmit: function () {
                    contact_loader.fadeIn('fast');
                    response_container.fadeOut('fast');
                },
                success: function () {
                    contact_loader.fadeOut('fast');
                    response_container.fadeIn('fast');
                    contact_form.resetForm();
                }
            };

            contact_form.validate({
                errorLabelContainer: error_container,
                submitHandler: function (form) {
                    $(form).ajaxSubmit(contact_options);
                }
            });


            /* Appointment form handler */
            var appointment_loader = $('#appointment-loader'),
                message_container = $('#message-sent'),
                appointment_form_one = $('#appointment_form_one');

            var appointment_options = {
                target: message_container,
                beforeSubmit: function () {
                    appointment_loader.fadeIn('fast');
                    message_container.fadeOut('fast');
                },
                success: function () {
                    appointment_loader.hide();
                    message_container.fadeIn('slow');
                    appointment_form_one.resetForm();
                }
            };

            appointment_form_one.validate({
                submitHandler: function (form) {
                    $(form).ajaxSubmit(appointment_options);
                }
            });


            /* 2nd Appointment form handler */
            var appointment_form_two = $('#appointment_form_two');

            var appointment_options_two = {
                target: message_container,
                beforeSubmit: function () {
                    appointment_loader.fadeIn('fast');
                    message_container.fadeOut('fast');
                },
                success: function () {
                    appointment_loader.hide();
                    message_container.fadeIn('slow');
                    appointment_form_two.resetForm();
                }
            };

            appointment_form_two.validate({
                submitHandler: function (form) {
                    $(form).ajaxSubmit(appointment_options_two);
                }
            });


            /* 3rd Appointment form handler */
            var appointment_form_three = $('#appointment_form_three');

            var appointment_options_three = {
                target: message_container,
                beforeSubmit: function () {
                    appointment_loader.fadeIn('fast');
                    message_container.fadeOut('fast');
                },
                success: function () {
                    appointment_loader.hide();
                    message_container.fadeIn('slow');
                    appointment_form_three.resetForm();
                }
            };

            appointment_form_three.validate({
                errorLabelContainer: error_container,
                submitHandler: function (form) {
                    $(form).ajaxSubmit(appointment_options_three);
                }
            });

            /* Main Appointment form handler */
            var appointment_form_main = $('#appointment_form_main');

            var appointment_options_main = {
                target: message_container,
                beforeSubmit: function () {
                    appointment_loader.fadeIn('fast');
                    message_container.fadeOut('fast');
                },
                success: function () {
                    appointment_loader.hide();
                    message_container.fadeIn('slow');
                    appointment_form_main.resetForm();
                }
            };

            appointment_form_main.validate({
                errorLabelContainer: error_container,
                submitHandler: function (form) {
                    $(form).ajaxSubmit(appointment_options_main);
                }
            });

        }


        /*----------------------------------------------------------------------------------*/
    /* Textarea Auto Size
    /*---------------------------------------------------------------------------------- */
    if ( jQuery().autosize ) {
        $('#appointment_form_two textarea').autosize();
        $('#appointment_form_three textarea').autosize();
        $('#appointment_form_main textarea').autosize();
    }


    /*-----------------------------------------------------------------*/
    /* Animated Buttons Effects
    /*-----------------------------------------------------------------*/
    var animatedButton = $(this).find('a.transition-btn');
    animatedButton.wrapInner().wrapInner('<i>');
    animatedButton.append('<span>');


    /*-----------------------------------------------------------------*/
    /* Date Picker
    /*-----------------------------------------------------------------*/
    if (jQuery().datepicker) {
        $("#date").datepicker();
    }


    /*-----------------------------------------------------------------*/
    /* Swipe Box
    /*-----------------------------------------------------------------*/
    if (jQuery().swipebox) {
        // Initialize the Lightbox automatically for any links to images with extensions .jpg, .jpeg, .png or .gif
        $("a[href$='.jpg'], a[href$='.png'], a[href$='.jpeg'], a[href$='.gif']").swipebox();
    }


    /*-----------------------------------------------------------------*/
    /* Message
    /*-----------------------------------------------------------------*/
    $('.message .close').click(function (e) {
        $(this).closest('.message').slideUp(300);
    });


    /*-----------------------------------------------------------------*/
    /* Placeholder Fix in ie9
    /*-----------------------------------------------------------------*/
    if ($.browser.msie) {
        var ie_version = $.browser.version === '8.0' || $.browser.version === '9.0';
        if (ie_version) {
            (function ($) {
                $.fn.placehold = function (placeholderClassName) {
                    var placeholderClassName = placeholderClassName || "placeholder",
                        supported = $.fn.placehold.is_supported();

                    function toggle() {
                        for (var i = 0; i < arguments.length; i++) {
                            arguments[i].toggle();
                        }
                    }

                    return supported ? this : this.each(function () {
                        var $elem = $(this),
                            placeholder_attr = $elem.attr("placeholder");

                        if (placeholder_attr) {
                            if ($elem.val() === "" || $elem.val() == placeholder_attr) {
                                $elem.addClass(placeholderClassName).val(placeholder_attr);
                            }

                            if ($elem.is(":password")) {
                                var $pwd_shiv = $("<input />", {
                                    "class": $elem.attr("class") + " " + placeholderClassName,
                                    "value": placeholder_attr
                                });

                                $pwd_shiv.bind("focus.placehold", function () {
                                    toggle($elem, $pwd_shiv);
                                    $elem.focus();
                                });

                                $elem.bind("blur.placehold", function () {
                                    if ($elem.val() === "") {
                                        toggle($elem, $pwd_shiv);
                                    }
                                });

                                $elem.hide().after($pwd_shiv);
                            }

                            $elem.bind({
                                "focus.placehold": function () {
                                    if ($elem.val() == placeholder_attr) {
                                        $elem.removeClass(placeholderClassName).val("");
                                    }
                                },
                                "blur.placehold": function () {
                                    if ($elem.val() === "") {
                                        $elem.addClass(placeholderClassName).val(placeholder_attr);
                                    }
                                }
                            });

                            $elem.closest("form").bind("submit.placehold", function () {
                                if ($elem.val() == placeholder_attr) {
                                    $elem.val("");
                                }

                                return true;
                            });
                        }
                    });
                };

                $.fn.placehold.is_supported = function () {
                    return "placeholder" in document.createElement("input");
                };
            })(jQuery);
            $("input, textarea").placehold("something-temporary");
        }
    }

    /*-----------------------------------------------------------------*/
    /* Animations Effects
    /*-----------------------------------------------------------------*/
    $('.animated').appear();

    $(document.body).on('appear', '.fade', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-fade')
        });
    });
    $(document.body).on('appear', '.slide-animate', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-slide-animate')
        });
    });
    $(document.body).on('appear', '.hatch', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-hatch')
        });
    });
    $(document.body).on('appear', '.entrance', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-entrance')
        });
    });
    $(document.body).on('appear', '.tada', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-tada')
        });
    });
    $(document.body).on('appear', '.rotate-up', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-rotate-up')
        });
    });
    $(document.body).on('appear', '.rotate-down', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-rotate-down')
        });
    });
    $(document.body).on('appear', '.fadeInDown', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-fadeInDown')
        });
    });
    $(document.body).on('appear', '.fadeInUp', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-fadeInUp')
        });
    });
    $(document.body).on('appear', '.fadeInLeft', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-fadeInLeft')
        });
    });
    $(document.body).on('appear', '.fadeInRight', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-fadeInRight')
        });
    });
    $(document.body).on('appear', '.fadeInDownBig', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-fadeInDownBig')
        });
    });
    $(document.body).on('appear', '.fadeInUpBig', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-fadeInUpBig')
        });
    });
    $(document.body).on('appear', '.fadeInLeftBig', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-fadeInLeftBig')
        });
    });
    $(document.body).on('appear', '.fadeInRightBig', function () {
        $(this).each(function () {
            $(this).addClass('ae-animation-fadeInRightBig')
        });
    });


    if ( navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 ){
        // Yep, it's Safari =)
        $('body').addClass('safari');
    }








});

})(jQuery);

function submitToGoogle(){
    var name = $("#name").val();
    var telephone = $("#telephone").val();
    var email = $("#email").val();
    var date = $("#date").val();
    var doctor = $("#doctor").val();

    if (name == "" || !(telephone != "" || email != "")) {
        sweetAlert("Importante", "Preencha ao menos seu nome e uma forma de contato.", "error");
        return false;
    }

    if(email != "" && !validateEmail(email)){
        sweetAlert("Importante", "Preencha o agendamento com um email válido.", "error");
        return false;
    }

    if(date != ""){
        var yesterday = new Date().setDate(new Date().getDate() - 1);
        var appointment_date = $("#date").datepicker("getDate");

        if(appointment_date <= yesterday){
            sweetAlert("Importante", "Preencha o agendamento com uma data válida.", "error");
            return false;
        }
    }

    $.ajax({
      url: "https://docs.google.com/forms/d/1ap8MaKAUHS2s8ibBBY8t7YuZhMVf50M-he51OCI3Ev8/formResponse",
      data: {"entry.250128038" : name, "entry.1830931570" : telephone, "entry.1086604454" : email, "entry.1903886770" : date, "entry.1273217573" : doctor},
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function (){
          sweetAlert("Obrigado!", "<b>Isto <u>não</u> é uma confirmação de agendamento</b>.<br/><br/>Aguarde, pois em breve entraremos em contato com você para confirmar o agendamento.", "success");
          $("#form-appointment").resetForm();
        },
        200: function (){
          sweetAlert("Obrigado!", "<b>Isto <u>não</u> é uma confirmação de agendamento</b>.<br/><br/>Aguarde, pois em breve entraremos em contato com você para confirmar o agendamento.", "success");
          $("#form-appointment").resetForm();
        },
        400: function (){
          sweetAlert("Algo de errado aconteceu", "Por favor, tente novamente mais tarde.", "error");
        },
        404: function (){
          sweetAlert("Algo de errado aconteceu", "Por favor, tente novamente mais tarde.", "error");
        },
        500: function (){
          sweetAlert("Algo de errado aconteceu", "Por favor, tente novamente mais tarde.", "error");
        }
      }
    });
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

swal.setDefaults({html: true});
