









$(document).ready(function(){

  $('#image-file').change(function(e){
    for(let i=0;i<e.target.files.length;i++)
    {
      let file = e.target.files[i];
    
    $(".content-img").append('<img src="'+URL.createObjectURL(file)+'">');
    console.log(file)
    
    }
    });
  $('#image-file1').change(function(e){
    for(let i=0;i<e.target.files.length;i++)
    {
      let file = e.target.files[i];
    
    $(".content-img1").append('<img src="'+URL.createObjectURL(file)+'">');
    console.log(file)
    
    }
    });
  $('#image-file2').change(function(e){
    for(let i=0;i<e.target.files.length;i++)
    {
      let file = e.target.files[i];
    
    $(".content-img2").append('<img src="'+URL.createObjectURL(file)+'">');
    console.log(file)
    
    }
    });
  $('#image-file3').change(function(e){
    for(let i=0;i<e.target.files.length;i++)
    {
      let file = e.target.files[i];
    
    $(".content-img3").append('<img src="'+URL.createObjectURL(file)+'">');
    console.log(file)
    
    }
    });






  $("#show_feat").click(function () {
      $("#content_showing").toggle(300,function () {
      });
  });

  $(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
  // make it as accordion for smaller screens
    $('.dropdown-menu a').click(function(e){
      e.preventDefault();
        if($(this).next('.submenu').length){
          $(this).next('.submenu').toggle();
        }
        $('.dropdown').on('hide.bs.dropdown', function () {
      $(this).find('.submenu').hide();
    });
  });

});

var wid = $(window);
var scrolltop = $("#Toped");
$(wid).scroll(function () {

    if ($(this).scrollTop() > 400) {
        scrolltop.addClass("Toped_show");
    }
    else if ($(this).scrollTop() <= 300){
        scrolltop.removeClass("Toped_show");
    }
})
scrolltop.click(function () {
    $("html,body").animate({scrollTop : 0},10);
});


});

function clear_input (){

  return document.getElementById("name_senders").value = ""
  ,document.getElementById("email_sender").value = ""
  ,document.getElementById("numberSuite").value = ""
  ,document.getElementById("subject").value = ""
  ,document.getElementById("message_sender").value = ""
  ,document.getElementById("phone_sender").value = ""
  ,document.getElementById("code_c_sender").value = ""
  ,$("#slect_choose")[0].selectedIndex = 0;
}
function required()
{

  var empt_mail = document.forms["form_contact"]["email"].value;
  var empty_message= document.forms["form_contact"]["message"].value;
  var empty_name = document.forms["form_contact"]["name_senders"].value;
  var empty_select = document.forms["form_contact"]["custom_selects"].value;

  if (empt_mail == "" && empty_message == "" && empty_name == "" && empty_select == "")
  {
    document.getElementById("error_email").innerHTML = "* The Email is Requierd";
    document.getElementById("error_name").innerHTML = "* The name is Requierd";
    document.getElementById("message_error").innerHTML = "* The message in Reuierd";
    document.getElementById("message_sender").style.borderColor = "red";
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";
  }
  else if(empt_mail == "" && empty_message == "" && empty_name == ""){
    document.getElementById("error_email").innerHTML = "* The Email is Requierd";
    document.getElementById("error_name").innerHTML = "* The name is Requierd";
    document.getElementById("message_error").innerHTML = "* The message in Reuierd";
    document.getElementById("message_sender").style.borderColor = "red";
  }
  else if(empt_mail == "" && empty_message == "" && empty_select == ""){
      
    document.getElementById("error_email").innerHTML = "* The Email is Requierd";
    document.getElementById("message_error").innerHTML = "* The message in Reuierd";
    document.getElementById("message_sender").style.borderColor = "red";
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";
  }
  else if(empty_message == "" && empty_name == "" && empty_select == ""){
    document.getElementById("error_name").innerHTML = "* The name is Requierd";
    document.getElementById("message_error").innerHTML = "* The message in Reuierd";
    document.getElementById("message_sender").style.borderColor = "red";
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";
  }
  else if(empt_mail == "" && empty_name == "" && empty_select == ""){
    document.getElementById("error_email").innerHTML = "* The Email is Requierd";
    document.getElementById("error_name").innerHTML = "* The name is Requierd";
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";

  }
  else if(empt_mail == "" && empty_name == ""){
    document.getElementById("error_email").innerHTML = "* The Email is Requierd";
    document.getElementById("error_name").innerHTML = "* The name is Requierd";
  }
  else if(empt_mail == "" && empty_message == ""){
    document.getElementById("error_email").innerHTML = "* The Email is Requierd";
    document.getElementById("message_error").innerHTML = "* The message in Reuierd";
    document.getElementById("message_sender").style.borderColor = "red";
  }
  else if(empt_mail == "" && empty_select == ""){
    document.getElementById("error_email").innerHTML = "* The Email is Requierd";
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";
  }
  else if(empty_select == "" && empty_message == ""){
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";
    document.getElementById("message_error").innerHTML = "* The message in Reuierd";
    document.getElementById("message_sender").style.borderColor = "red";
  }
  else if(empty_select == "" && empty_name == ""){
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";
    document.getElementById("error_name").innerHTML = "* The name is Requierd";
  }
  else if(empty_name == "" && empty_message == ""){
    document.getElementById("error_name").innerHTML = "* The name is Requierd";
    document.getElementById("message_error").innerHTML = "* The message in Reuierd";
    document.getElementById("message_sender").style.borderColor = "red";
  }
  else if(empt_mail == ""){
    document.getElementById("error_email").innerHTML = "* The Email is Requierd";
  }
  else if(empty_message == ""){
    document.getElementById("message_error").innerHTML = "* The message in Reuierd";
    document.getElementById("message_sender").style.borderColor = "red";
  }
  else if(empty_name == ""){
    document.getElementById("error_name").innerHTML = "* The name is Requierd";
  }
  else if(empty_select == ""){
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";
  }
  else 
  {
    document.getElementById("form_contacts").submit();
    return true;
  }
}

function required_suggestion() {
  var empty = document.forms["form_contact"]["message_noted"].value;
  var empty_section = document.forms["form_contact"]["custom_selects"].value;

  if(empty == "" && empty_section == ""){
    document.getElementById("message_noted").style.borderColor = "red";
    document.getElementById("message_error").innerHTML = "* Message or message description is required";
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";
  }
  else if(empty == ""){
    document.getElementById("message_noted").style.borderColor = "red";
    document.getElementById("message_error").innerHTML = "* Message or message description is required";
  }
  else if(empty_section == ""){
    document.getElementById("message_noted").style.borderColor = "red";
    document.getElementById("error_select").innerHTML = "* The choose section in Requierd";
  }
  else
  {
    document.getElementById("form_contacts").submit();
    return true;
  }
}
function clear_input_suggesion() {

var ele = document.getElementsByName("choose_op");
for(var i=0;i<ele.length;i++)
   ele[i].checked = false;
   
return $("#slect_choose")[0].selectedIndex = 0,
document.getElementById("name_noted").value = "",
document.getElementById("email_noted").value = "",
document.getElementById("uplod").value = "",
document.getElementById("message_noted").value = ""

}





// Code By Webdevtrick ( https://webdevtrick.com )
jQuery( document ).ready(function() {
    
  






  var back =jQuery(".prev");
  var	next = jQuery(".next");
  var	steps = jQuery(".step");
  
  next.bind("click", function() { 
    jQuery.each( steps, function( i ) {
      if (!jQuery(steps[i]).hasClass('current') && !jQuery(steps[i]).hasClass('done')) {
        jQuery(steps[i]).addClass('current');
        jQuery(steps[i - 1]).removeClass('current').addClass('done');
        return false;
      }
    })		
  });
  back.bind("click", function() { 
    jQuery.each( steps, function( i ) {
      if (jQuery(steps[i]).hasClass('done') && jQuery(steps[i + 1]).hasClass('current')) {
        jQuery(steps[i + 1]).removeClass('current');
        jQuery(steps[i]).removeClass('done').addClass('current');
        return false;
      }
    })		
  });



  $('.majorpoints').click(function(){
    $('.section-2' ).find('.hider').toggle();
    });

    
    $('.majorpoints2').click(function(){
    $('.section-3' ).find('.hider').toggle();
    });





    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();


    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');

})


function InvalidMsg(textbox) { 

  if (textbox.value === '') { 
      textbox.setCustomValidity 
      ('this input is required').style.backgroundColor = "red"; 
  }else { 
      textbox.setCustomValidity(''); 
  } 

  return true; 
  }  




 



   var invalidClassName = 'invalid'
var inputs = document.querySelectorAll('input, select, textarea')
inputs.forEach(function (input) {
  // Add a css class on submit when the input is invalid.
  input.addEventListener('invalid', function () {
    input.classList.add(invalidClassName)
  })

  // Remove the class when the input becomes valid.
  // 'input' will fire each time the user types
  input.addEventListener('input', function () {
    if (input.validity.valid) {
      input.classList.remove(invalidClassName)
    }
  })
})











var form = document.createElement('form');
if ('checkValidity' in form && 'querySelector' in document && 'classList' in document.documentElement) {

    // feedback messages
    var messageComponents = document.querySelectorAll("[data-message]");

    if (messageComponents.length > 0) {

        [].forEach.call(messageComponents, function(message) {
            var messageButton = message.querySelector("[data-close-notification]");

            messageButton.removeAttribute('hidden');

            messageButton.addEventListener("click", function() {
                this.parentElement.hidden = true;
            });
        });
    }

    // form validation
    var inputs = document.querySelectorAll("[data-error]");

    if (inputs.length > 0) {

        var toggleErrorMessage = function(input, hasError) {
            var message = (input.value === '') ? input.dataset.empty : input.dataset.error;
            var oldMessage = document.getElementById("alert-" + input.name);
            var newMessage;

            if (hasError) {
                if (!oldMessage) {
                    newMessage = document.createElement("p");
                    newMessage.setAttribute('role', 'alert');
                    newMessage.classList.add('form__error');
                    newMessage.setAttribute('id', 'alert-' + input.name);
                } else {
                    newMessage = oldMessage;
                }

                newMessage.innerText = message;

                input.setAttribute('aria-describedby', 'alert-' + input.name);
                input.parentElement.appendChild(newMessage);

                input.parentElement.classList.add('has-error');
            } else {

                if (oldMessage) {
                    input.parentElement.removeChild(oldMessage);
                    input.removeAttribute('aria-describedby');
                    input.parentElement.classList.remove('has-error');
                }

            }
        };
        // loop over each input
        [].forEach.call(inputs, function(input) {

            // check validation on blur
            input.addEventListener("blur", function(event) {
                input.checkValidity();

                if (input.checkValidity()) {
                    input.classList.remove("error");
                    input.setAttribute("aria-invalid", "false");
                    toggleErrorMessage(input, false);
                } else {
                    input.classList.add("error");
                    input.setAttribute("aria-invalid", "true");
                    toggleErrorMessage(input, true);
                }
            });
        });
    }
}


function ConfirmDelete()
{
  var x = confirm("هل انت متاكد من المسح ?");
  if (x){
  
        return true; 
        
  }

   
  else{
       return false; 
  }
  
}

(function () {
  var onload = window.onload;

  window.onload = function () {
      if (typeof onload == "function") {
          onload.apply(this, arguments);
      }

      var fields = [];
      var inputs = document.getElementsByTagName("input");
      var textareas = document.getElementsByTagName("textarea");

      for (var i = 0; i < inputs.length; i++) {
          fields.push(inputs[i]);
      }

      for (var i = 0; i < textareas.length; i++) {
          fields.push(textareas[i]);
      }

      for (var i = 0; i < fields.length; i++) {
          var field = fields[i];

          if (typeof field.onpaste != "function" && !!field.getAttribute("onpaste")) {
              field.onpaste = eval("(function () { " + field.getAttribute("onpaste") + " })");
          }

          if (typeof field.onpaste == "function") {
              var oninput = field.oninput;

              field.oninput = function () {
                  if (typeof oninput == "function") {
                      oninput.apply(this, arguments);
                  }

                  if (typeof this.previousValue == "undefined") {
                      this.previousValue = this.value;
                  }

                  var pasted = (Math.abs(this.previousValue.length - this.value.length) > 1 && this.value != "");

                  if (pasted && !this.onpaste.apply(this, arguments)) {
                      this.value = this.previousValue;
                  }

                  this.previousValue = this.value;
              };

              if (field.addEventListener) {
                  field.addEventListener("input", field.oninput, false);
              } else if (field.attachEvent) {
                  field.attachEvent("oninput", field.oninput);
              }
          }
      }
  }
})();