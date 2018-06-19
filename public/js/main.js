// BACKGROUND ANIMATIONS
const bga_1 = lottie.loadAnimation({
  container: document.getElementById("amazonImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'animations/bga_1.json'
});

const bga_2 = lottie.loadAnimation({
  container: document.getElementById("appleImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'animations/bga_2.json'
});

const bga_3 = lottie.loadAnimation({
  container: document.getElementById("pupperImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'animations/bga_3.json'
});

const bga_4 = lottie.loadAnimation({
  container: document.getElementById("agioImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'animations/bga_4.json'
});

const bga_5 = lottie.loadAnimation({
  container: document.getElementById("beatImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'animations/bga_5.json'
});

const bga_6 = lottie.loadAnimation({
  container: document.getElementById("cooleafImg"),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'animations/bga_6.json'
});

// SHOWS PROJECT INFORMATION FOR USER AS REQUESTED
const projects = [
  {
    "el": $("#amazon"),
    "img": $("#amazonImg"),
    "type": "UX",
    "cardText":    "<p>The 1-Click Settings page was last updated almost 20 years ago. <br><br>During my time at Amazon, I was able to redesign it.</p>",
    "popoverText": "The 1-Click Settings page was last updated almost 20 years ago. <br><br>During my time at Amazon, I was able to redesign it.",
    "animation": bga_1
  },
  {
    "el": $("#appleMusic"),
    "img": $("#appleImg"),
    "type": "UX",
    "cardText":    "<p>Apple Music (AM) is unique with their signature aesthetics and features, but <br>could it be better?<br><br>I decided to take a stab at it.</p>",
    "popoverText": "Apple Music (AM) is unique with their signature aesthetics and features, but <br>could it be better?<br><br>I decided to take a stab at it.",
    "animation": bga_2
  },
  {
    "el": $("#pupper"),
    "img": $("#pupperImg"),
    "type": "UX",
    "cardText":    "<p>Pupper is a mobile based service that<br> would allow you to rent a dog for a short period of time.</p>",
    "popoverText": "Pupper is a mobile based service that<br> would allow you to rent a dog for a short period of time.",
    "animation": bga_3
  },
  {
    "el": $("#agio"),
    "img": $("#agioImg"),
    "type": "UX",
    "cardText":    "<p>During the summer of 2016, a group of developers and I created a mobile app <br>that allows employees to easily use their employee discounts with fellow co-workers.</p>",
    "popoverText": "During the summer of 2016, a group of developers and I created a mobile app <br>that allows employees to easily use their employee discounts with fellow co-workers.",
    "animation": bga_4
  },
  {
    "el": $("#beatBlocks"),
    "img": $("#beatImg"),
    "type": "UX",
    "cardText":    "<p>Beat Blocks was my capstone project<br>that used computer vision to bring people<br>together by having them create music<br>with each other.</p>",
    "popoverText": "Beat Blocks was my capstone project<br>that used computer vision to bring people<br>together by having them create music<br>with each other.",
    "animation": bga_5
  },
  {
    "el": $("#cooleaf"),
    "img": $("#cooleafImg"),
    "type": "UX",
    "cardText":    "<p>JPEX keeps people coming out of rehab accountable to help them overcome their addictions.<br><br>I designed their mobile platform.</p>",
    "popoverText": "JPEX keeps people coming out of rehab accountable to help them overcome their addictions.<br><br>I designed their mobile platform.",
    "animation": bga_6
  }
].forEach(({el: element, img, cardText, popoverText, animation}) => {
  element.mouseenter(function() {
    $(".description").html(cardText);
    img.show();
    animation.play();
  });

  element.click(function() {
    $(".descriptionDropdown").html(popoverText);
  });
  
  element.mouseleave(function() {
    img.hide();
    animation.stop();
  }); 
});

// FOLD/EXPAND ARROWS WHEN CLICKED
$(".arrow").click(function(e) {
  const isActive = $(this).hasClass("active");
  
  $(this).toggleClass("active");
  $(".arrow").not(this).removeClass("active");
  if (isActive) {
      $(".descriptionDropdown").fadeOut(500);
  } else {
      $(".descriptionDropdown").fadeIn(500);
      $(".descriptionDropdown").css({
        left: e.pageX - 220,
        top: e.pageY + 80
      });
  };
});

// SWITCH CATEGORIES BASED ON HASH
const animationOptions = {duration: 500, queue: true };
const syncCategory = () => {
  const hash = window.location.hash.slice(1);
  if (hash == 'visual') {
    $("#uxWork").hide();
    $("#visualWork").show();
    $(".descriptionContainer").animate({ opacity: 0 }, { duration: 500, queue: false });
    $(".switch a").text("I want to see ux work.");
    $(".switch a").attr("href", "#ux");
  }

  else if (hash == 'ux' || hash == '') {
    $("#visualWork").hide();
    $("#uxWork").show();
    $(".descriptionContainer").animate({ opacity: 1 }, { duration: 500, queue: false });
    $(".switch a").text("I want to see visual work.");
    $(".switch a").attr("href", "#visual");
  }

  else {
    window.location.hash = '';
  }
};

window.addEventListener('load', syncCategory, false)
window.addEventListener("hashchange", () => {
  // ANIMATE CATEGORY CHANGE
  $(".switch").fadeOut(500).fadeIn(500);
  $("#projects")
    .animate({marginLeft: "+=50", opacity: 0}, animationOptions)
    .delay(500)
    .animate({marginLeft: "-=50", opacity: 1}, animationOptions)
  
  setTimeout(syncCategory, 500);
}, false);