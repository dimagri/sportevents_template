$(document).ready(function(){
	
	$(document).on("click", "#enter", function () {
		$(".enter-popup, .mask").show().fadeTo(200, 1);
	});
	
	$(document).on("click", "#register", function () {
		$(".register-popup, .mask").show().fadeTo(200, 1);
	});
	
	$(document).on("click", ".close", function () {
		$(".enter-popup, .register-popup, .mask").stop(true).fadeTo(200, 0, function () {
            $(".enter-popup,.register-popup, .mask").hide();
        });
	});
	
	$(document).on("click", ".name", function () {
		$(".profile").toggleClass("active");;
	});
	
});