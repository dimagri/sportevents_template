$(document).ready(function(){
	
	
	function inputLength (input) {
		return $(input).val().length;
	}
	
	function noSubmit (submitbtn,input) {
		$(submitbtn).addClass("disabled");
		$(input).addClass("required");
	}
	
	function checkInput (input,from,to,submitbtn,isRequired) {
		if (inputLength(input) == 0 && isRequired){
			noSubmit(submitbtn,input);
		} else {
			if (inputLength(input) > 0){
				if (to == 0){
					if (inputLength(input) < from){
						noSubmit(submitbtn,input);
					}
				} else {
					if ((inputLength(input) < from) || (inputLength(input) > to)){
						noSubmit(submitbtn,input);
					}
				}
			}
		}
	}
	
	$("input,textarea").keyup(function(){
		$(this).removeClass("required");
		$("input[type='submit']").removeClass("disabled");
	});
	
	
	$(".add-comment input[type='submit']").click(function(){
		checkInput(".add-comment textarea",3,150,$(this),true)
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	
	$(".add_event-page input[type='submit']").click(function(){
		checkInput(".add_event-page #event_name",5,0,$(this),true);
		checkInput(".add_event-page #event_description",20,0,$(this),true);
		checkInput(".add_event-page #event_phone",0,0,$(this),true);
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	$(".send-message input[type='submit']").click(function(){
		checkInput(".send-message #message_body",0,1000,$(this),true);
		checkInput(".send-message #message_subject",4,140,$(this),true);
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	$(".edit-usr-page input[type='submit']").click(function(){
		checkInput(".edit-usr-page #user_about",0,100,$(this),false);
		checkInput(".edit-usr-page #user_phone",6,10,$(this),false);
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	$(".enter-popup input[type='submit']").click(function(){
		checkInput(".enter-popup #email",0,0,$(this),true);
		checkInput(".enter-popup #password",0,0,$(this),true);
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
	
	
	$(".register-popup input[type='submit']").click(function(){
		if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test($(".register-popup #user_email").val()))){
			noSubmit($(this),"#user_email");
		}
		checkInput(".register-popup #user_name",0,0,$(this),true);
		checkInput(".register-popup #user_password",0,0,$(this),true);
		checkInput(".register-popup #user_password_confirmation",0,0,$(this),true);
		if ($(this).hasClass("disabled")) {
			return false;
		}
	});
});