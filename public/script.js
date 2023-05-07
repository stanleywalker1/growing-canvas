function animateSVG() {
    gsap.to(".svg-element", {
        duration: 1,
        ease: "power1.inOut",
        x: function() { return (Math.random() * 40) - 20; },
        y: function() { return (Math.random() * 40) - 20; }

    });
}



const colorClasses = ['color1', 'color2', 'color3', 'color4', 'color5'];

$(".next").on("click", function() {
    animateSVG();

    let current = $(".slide.active");
    let next = current.next(".slide");

    if (next.length) {
        let currentIndex = colorClasses.indexOf(current[0].classList[2]);
        let nextIndex = (currentIndex + 1) % colorClasses.length;
        current.removeClass(colorClasses[currentIndex]).addClass(colorClasses[nextIndex]);

        current.removeClass("active");
        next.addClass("active");

        let step = next.data("step");
        $(".circle.active").removeClass("active");
        $(".circle[data-step=" + step + "]").addClass("active");

        // Check if the next slide is the last one
        let totalSlides = $(".slide").length;
        if (step === totalSlides - 1){
            removeSvgContainer();
        }
    }
});

function removeSvgContainer() {
    const svgContainer = document.querySelector('.svg-container');
    if (svgContainer) {
        svgContainer.remove();
    }
}

// document.addEventListener('WebComponentsReady', function() {
//     const gradioAppElement = document.querySelector('gradio-app');
//     const textboxElement = gradioAppElement.shadowRoot.querySelector('[data-testid="textbox"]');

//     if (textboxElement) {
//         console.log("Textbox found:", textboxElement);
//     } else {
//         console.log("Textbox not found");
//     }
// });