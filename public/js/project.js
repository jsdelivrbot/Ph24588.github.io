$(".lightBox").hide();
$(".button").hide();

$("#over400").click(function(){
	$(".lightBox").fadeIn();
	$("body").css('overflow','hidden');
});

$(".lightBox").click(function() {
	$(this).fadeOut();
	$("body").removeAttr('style');
});

if ($(window).width() < 400) {
	$("#over400").hide();
	$("#under400").show();
} else {
	$("#under400").hide();
	$("#over400").show();
}

$(window).on('resize', function(){
	if ($(window).width() < 400) {
		$("#over400").hide();
		$("#under400").show();
	} else {
		$("#under400").hide();
		$("#over400").show();
	}
});

  $("#mockup_1").animate({
    marginTop: "+=50",
    opacity: "1"
  }, 500);

    $("#mockup_2").delay(100).animate({
    marginTop: "+=50",
    opacity: "1"
  }, 500);

      $("#mockup_3").delay(200).animate({
    marginTop: "+=50",
    opacity: "1"
  }, 500);

var scrollValue;
$(".copyBContainer").hide();

if ($(window).width() < 985) {
	$(".copyBContainer").show();
}

$(document).scroll(function(){
	scrollValue = $(document).scrollTop();
	if (scrollValue < 400) {
		$("#mockup_1").css("margin-top", -125 + scrollValue/12);
		$("#mockup_2").css("margin-top", -125 + scrollValue/11.9);
		$("#mockup_3").css("margin-top", -125 + scrollValue/11.8);
	};
 	
// console.log(scrollValue);

	if (scrollValue > 300 && scrollValue < 1500) {
		$(".copyBContainer").fadeIn(500);
	} else if (scrollValue > 1900 && $(window).width() > 985 || scrollValue < 300 && $(window).width() > 985) {
		$(".copyBContainer").fadeOut(500);
	};
});
$(".dragMe").draggable({
		axis: "x"
});