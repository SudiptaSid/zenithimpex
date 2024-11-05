// ================= On Scroll Add Class =================
window.onscroll = function() {myFunction()};
var header = document.getElementById("cs_navbar");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// ==================== Smooth Scroll ====================
$('.scroll')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});
// ==================== Collection Slider ==================== 
$('#collection_slider').owlCarousel({
    margin:10,
    items: 1,
    nav:true,
    navText : ["<span class='left_arw'></span>","<span class='right_arw'></span>"], 
    dots:true,
    loop:true,
    smartSpeed:2000,
    autoplay: true,
    autoplayHoverPause: false,
    responsiveClass:true, 
});