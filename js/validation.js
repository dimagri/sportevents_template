$(document).ready(function(){
	
	
	function inputLength (input) {
		return $(input).val().length;
	}
	
	function noSubmit (submitbtn,input) {
		$(submitbtn).addClass("disabled");
		$(input).addClass("required");
	}
	
	function errorInterval (input,from,to,submitbtn) {
		//if (inputLength(input) > 0){
			if (to == 0){
				if (inputLength(input) < from){
					noSubmit(submitbtn,input);
				}
			} else {
				if ((inputLength(input) < from) || (inputLength(input) > to)){
					noSubmit(submitbtn,input);
				}
			}
		//}
	}
	
	function disableIfEmpty (submitbtn,input) {
		if (inputLength(input) == 0) {
			noSubmit(submitbtn,input);
		}
	}
	
	$("input,textarea").keyup(function(){
		$(this).removeClass("required");
		$("input[type='submit']").removeClass("disabled");
	});
	
	
	$(".add-comment input[type='submit']").click(function(){
		errorInterval(".add-comment textarea",3,150,$(this))
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	
	$(".add_event-page input[type='submit']").click(function(){
		disableIfEmpty($(this),"#event_name");
		disableIfEmpty($(this),"#event_description");
		disableIfEmpty($(this),"#event_phone");
		errorInterval("#event_name",5,0,$(this));
		errorInterval(".add_event-page textarea",20,0,$(this));
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	$(".send-message input[type='submit']").click(function(){
		disableIfEmpty($(this),".send-message #message_body");
		errorInterval(".send-message #message_body",0,1000,$(this));
		disableIfEmpty($(this),".send-message #message_subject");
		errorInterval(".send-message #message_subject",4,140,$(this));
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	$(".edit-usr-page input[type='submit']").click(function(){
		errorInterval(".edit-usr-page #user_about",0,100,$(this));
		errorInterval(".edit-usr-page #user_phone",6,10,$(this));
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	$(".enter-popup input[type='submit']").click(function(){
		disableIfEmpty($(this),".enter-popup #email");
		disableIfEmpty($(this),".enter-popup #password");
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	
	$(".register-popup input[type='submit']").click(function(){
		if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test($(".register-popup #user_email").val()))){
			noSubmit($(this),"#user_email");
		}
		disableIfEmpty($(this),".register-popup #user_email");
		disableIfEmpty($(this),".register-popup #user_name");
		disableIfEmpty($(this),".register-popup #user_password");
		disableIfEmpty($(this),".register-popup #user_password_confirmation");
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
});