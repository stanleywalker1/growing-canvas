// function animateSVG() {
//     gsap.to(".svg-element", {
//         duration: 1,
//         ease: "power1.inOut",
//         x: function() { return (Math.random() * 40) - 20; },
//         y: function() { return (Math.random() * 40) - 20; }

//     });
// }



const colorClasses = ['color1', 'color2', 'color3', 'color4', 'color5'];

$(".next").on("click", function() {
    

    let current = $(".slide.active");
    let next = current.next(".slide");

    if (next.length) {
        let currentIndex = colorClasses.indexOf(current[0].classList[2]);
        let nextIndex = (currentIndex + 1) % colorClasses.length;
        current.removeClass(colorClasses[currentIndex]).addClass(colorClasses[nextIndex]);

        if (!current.hasClass("no-opacity-transition")) {
          current.removeClass("active");
      }

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

$(document).ready(function() {
    $(".next").click(function() {
      let currentStep = $(".slide.active").data("step");
      if (currentStep === 4) {
        $(".next").hide();
        $(".progress-bar").hide();
      } else {
        $(".next").show();
        $(".progress-bar").show();
      }
    });
  });

  function updateNextButtonAndProgressBarVisibility() {
    let currentStep = $(".slide.active").data("step");
    let totalSlides = $(".slide").length;
    if (currentStep === totalSlides - 1) {
        $(".next").hide();
        $(".progress-bar").hide();
    } else {
        $(".next").show();
        $(".progress-bar").show();
    }
}

// Show the "Back" button when not on the first slide
function updateBackButtonVisibility() {
    let currentStep = $(".slide.active").data("step");
    if (currentStep === 0) {
      $(".back").hide();
    } else {
      $(".back").show();
    }
  }
  
  // Handle the "Back" button click event
  $(".back").on("click", function() {
    let current = $(".slide.active");
    let prev = current.prev(".slide");
  
    if (prev.length) {
      let currentIndex = colorClasses.indexOf(current[0].classList[2]);
      let prevIndex = (currentIndex - 1 + colorClasses.length) % colorClasses.length;
      current.removeClass(colorClasses[currentIndex]).addClass(colorClasses[prevIndex]);
  
      current.removeClass("active");
      prev.addClass("active");
  
      let step = prev.data("step");
      $(".circle.active").removeClass("active");
      $(".circle[data-step=" + step + "]").addClass("active");
    }
  
    updateBackButtonVisibility();
    updateNextButtonAndProgressBarVisibility();
  });
  
  // Update the "Back" button visibility when the "Next" button is clicked
  $(".next").on("click", function() {
    // ... (existing code) ...
    updateBackButtonVisibility();
    updateNextButtonAndProgressBarVisibility();
    
  });
  
  // Initialize the "Back" button visibility on page load
  $(document).ready(function() {
    updateBackButtonVisibility();
    updateNextButtonAndProgressBarVisibility();
  });
