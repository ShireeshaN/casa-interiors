var next = document.querySelector('.btn-next');
var previous = document.querySelector('.btn-previous');
var form = document.querySelector('.slide-container');
var slides = document.querySelectorAll(".slide");
var slideNumber = 0;
var url = "ENTER GOOGLE SHEET URL HERE";
const buttonElement = document.querySelector(".btn-submit");


var $form = $('form');
var CustomInoutFieldTotal = document.getElementById("custttt-name");

next.addEventListener('click', function(){
  changePosition("next");
});

previous.addEventListener('click', function(){
  changePosition("previous");
});

function nxtBtn(){
    changePosition("next");
}

// document.addEventListener("keydown", function(event) {
//     if( event.which == 13 ) {
//     //   alert("Enter Press");
//     changePosition("next");
//     }
// });



function changePosition(type){
    // alert(slideNumber);
  if(type=="next"){
    var form_valid = false;
    form_valid = validateForm(slideNumber);
    //   if(slideNumber == '0'){
    //     document.getElementById('slideA').style.display = "block";
    //     document.getElementById('slideStart').style.display = "none";
    // } 
    if(slideNumber == '1'){
        document.getElementById('totalArea').style.display = "block";
     
    } 
    if(slideNumber == '7'){
        document.getElementById('location').style.display = "block";
    }
    if(slideNumber == '8'){
        document.getElementById('EmailId').style.display = "block";
    }
    if(slideNumber == '9'){
        document.getElementById('PhoneNumber').style.display = "block";
        document.getElementById('OTP').style.display = "block";
    }if(slideNumber == '10'){
        document.querySelector('.btn-next').style.display = "none";
        document.querySelector('.btn-submit').style.display = "block";
        if(form_valid){
            
            formSubmit();    
        }else{
            showError(slideNumber);
        }
        
    }if(slideNumber == '11'){
        document.querySelector('.btn-next').style.display = "none";
        document.querySelector('.btn-submit').style.display = "block";
    }
    if(slideNumber >= slides.length-2){
        // alert('hello line no 43');
        document.querySelector('.btn-next').style.display = "none";
        document.querySelector('.btn-submit').style.display = "block";
    }else{
        document.querySelector('.btn-next').style.display = "block";
        document.querySelector('.btn-submit').style.display = "none";
    }
    if(form_valid){
        hideError(slideNumber);
        document.getElementById("finalNameDiv").textContent = document.getElementById("OnlyNameCust").value;
        slideNumber += 1;  
    }else{
        document.getElementById("default-err").style.display = 'none';
        document.getElementById("ph-message").style.display = 'none';
        showError(slideNumber);
    }
  }else{
      document.querySelector('.btn-submit').style.display = "none";
      document.querySelector('.btn-next').style.display = "block";
    if(slideNumber == 0){
       
    }else if(slideNumber == 2){
        document.getElementById('totalArea').style.display = "none";
        slideNumber -= 1;
    }else if(slideNumber == 8){
        document.getElementById('location').style.display = "none";
        slideNumber -= 1;
    }else if(slideNumber == 9){
        document.getElementById('EmailId').style.display = "none";
        slideNumber -= 1;
    }else if(slideNumber == 10){
        document.getElementById('PhoneNumber').style.display = "none";
        document.getElementById('OTP').style.display = "none";
        slideNumber -= 1;
     }
    else{
      slideNumber -= 1;
    }
  }
  if(slideNumber < slides.length){
    pos = slideNumber * -280;  
    form.style.top = pos +"px";
  }
  if(slideNumber !='0'){
    document.querySelector('.btn-previous').style.display = "block";
  }else if(slideNumber =='0'){
      document.querySelector('.btn-previous').style.display = "none";
  }
  

}
function countDigits(str) {
    var digitCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            digitCount++;
        }
    }
    return digitCount;
}
function validateForm(slideNumber){
    //  alert("slideNumber---"+slideNumber);
  var form_valid = false;
  var inputs = slides[slideNumber].querySelectorAll("input");
  console.log(inputs);
  
  if(inputs.length !== 0){
    
    if(inputs[0].type === "radio"){
         
      inputs.forEach(function(input){
        if(input.checked){
          form_valid = true;
          if(form_valid){
            var selectedValue = input.value;
            CustomInoutFieldTotal.value += selectedValue+"@@";
          }
        }
      });
    }
    // **********************************
     if(inputs[0].type === "number"){
        var numberPattern = /^\d+$/;
        if(slideNumber == '2'){
            // alert("Total");
            if(numberPattern.test(inputs[0].value)){
                if (inputs[0].value.length <= 6) { // Check if the number has 6 or fewer digits
                    form_valid = true;
                } else {
                    form_valid = false;
                }
            }else{
                form_valid = false;
            }
        }else if(slideNumber == '10'){
            // alert("Phone number");
            if(numberPattern.test(inputs[0].value)){
               
                if (inputs[0].value.length == 10) { // Check if the number has 6 or fewer digits
                    form_valid = true;
                } else {
                    form_valid = false;
                }
            }else{
                form_valid = false;
            }
        }
        
    }
    
    // **********************************
    // && inputs[0].value !== ""
    /*if(inputs[0].type === "number"){
        var numberPattern = /^\d+$/;
        if(numberPattern.test(inputs[0].value)){
            form_valid = true;
        }else{
            form_valid = false;
        }
    }*/
    if(inputs[0].type === "text"){
        // alert("slideNumber--- Input "+slideNumber);
      if(slideNumber == '0'){
        if (inputs[0].value.trim() === "") {
          //  alert("Please enter a name.");
            form_valid = false;
        }else{
            var letters = /^[A-Za-z\s]+$/;
            if (!inputs[0].value.match(letters)) {
                // alert("Please enter a valid name with alphabetic characters only.");
                form_valid = false;
            }else{
                form_valid = true;
            }
            // form_valid = true;
        }
      }else if(slideNumber == '2'){
         
        var numberPattern = /^\d+$/;
        if(numberPattern.test(inputs[0].value)){
            form_valid = true;
        }else{
            form_valid = false;
        }
      }else if(slideNumber == '8'){
          if(inputs[0].value.trim() === ""){
              form_valid = false;
          }else{
              form_valid = true;
          }
      }else if(slideNumber == '10'){
            var numberPattern = /^\d+$/;
            if(numberPattern.test(inputs[0].value)){
                form_valid = true;
            }else{
                form_valid = false;
            }
      }else if(slideNumber == '11'){
            if(numberPattern.test(inputs[0].value)){
                if (inputs[0].value.length == 10) { // Check if the number has 6 or fewer digits
                    form_valid = true;
                } else {
                    form_valid = false;
                }
            }else{
                form_valid = false;
            }
        //   formSubmit();
          form_valid = true;
      }else{
          
        form_valid = true;
      }
      if(form_valid){
        CustomInoutFieldTotal.value += inputs[0].value+"@@";
        if(slideNumber == '0'){
          document.getElementById("OnlyNameCust").value= inputs[0].value;
        }else{
          document.getElementById("finalNameDiv").textContent = document.getElementById("OnlyNameCust").value;
        }
      }
    }
    if(inputs[0].type === "email" && inputs[0].value !== ""){
      form_valid = validateEmail(inputs[0].value);
      if(form_valid){
         CustomInoutFieldTotal.value += inputs[0].value+"@@";
      }
    }
  }else{
     
    form_valid = false;
  }
    
  return form_valid;
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function showError(slideNumber){
  var error = slides[slideNumber].querySelector(".error-message");
  if(error) error.style.display = "block";
}

function hideError(slideNumber){
  var error = slides[slideNumber].querySelector(".error-message");
  if(error) error.style.display = "none";
}

// var last_input = document.getElementById('PhoneNumber');

// last_input.onkeyup = () =>{
//   if(last_input.value !== ""){
//     document.querySelector('.btn-submit').disabled = false;  
//   }else{
//     document.querySelector('.btn-submit').disabled = true;  
//   }  
// }
  const form123 = document.getElementById('questionnaire-form');
  form123.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      changePosition("next");
    }
  });
function formSubmit(){
    // alert("1");
    $('#PhoneNumber').prop('disabled', false);
    var response123 = grecaptcha.getResponse();
    // alert(response123);
    document.getElementById('default-err').style.display = "none";
    var costVerifyValue = document.getElementById('costVerify').value;
    var phno = document.getElementById('PhoneNumber').value;
     var numberPattern12 = /^\d+$/;
    if(numberPattern12.test(document.getElementById('PhoneNumber').value)){
        if (document.getElementById('PhoneNumber').value.length != 10) { // Check if the number has 6 or fewer digits
            document.getElementById('ph-message').style.display = "block";
             return false; 
        }else{
            document.getElementById('ph-message').style.display = "none";
        }
    }else{
         document.getElementById('ph-message').style.display = "block";
         return false; 
    }
    if(costVerifyValue =='1'){
        document.getElementById('otp-err').style.display="";
        document.getElementById('otp-err').textContent = "Something Wrong in OTP";
        return false;
    }
    if(response123.length == 0){
        document.getElementById('gRecaptchaError').innerHTML = 'This field is required.';
        document.getElementById('gRecaptchaError').style.display = "block";
        return false;
    }
    document.querySelector('.btn-previous').style.display = "block";
    document.querySelector('.btn-next').style.display = "none";
    document.querySelector('.btn-submit').style.display = "block";
   var custUrl = "<?php echo base_url(); ?>"+"user/FormSubmit";
    var jqxhr = $.ajax({
      url: "https://www.niftyinterio.com/user/FormSubmit",
      method: "POST",
      dataType: "json",
      data: $form.serializeArray(),
      success: function(response){
        // alert("success");
        var container = document.querySelector('.form-container');
        var namFinal = document.getElementById("OnlyNameCust").value;
        container.style.top = "0px";
        // container.innerHTML = "<h2>Thank you! We have received your entry and we'll get back to you on the email you entered.";
        container.innerHTML = "Thank you <strong>"+namFinal+"<strong>! <br> We have recieved your project details. Our team will contact you shortly to discuss tentative budget & timelines.";
            
            document.querySelector('.btn-previous').style.display = "none";
            document.querySelector('.btn-next').style.display = "none";
            document.querySelector('.btn-submit').style.display = "none";
          
      }
    })
    return 1;
}
function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('recapchaValid').value = recaptcha_response;
    document.getElementById('gRecaptchaError').innerHTML = '';
}
function costOtpSend(val) {
    document.getElementById('default-err').style.display = 'none';
    $('#OTP').prop('disabled', false);
    var phoneNumberPattern = /^\d+$/;
    if(phoneNumberPattern.test(val)){
        if(val.length == '10'){
            $('#PhoneNumber').prop('disabled', true);
            /*document.getElementById('ph-edit').style.display= 'block';*/
            // *************
            $.ajax({
                type: 'POST',
                url : 'https://niftyinterio.com/campaign/residential-interior-designer-Hyderabad/smsSend/otpSend.php',
                data: {phoneNumber:val},
                success: function(data) {
                    console.log(data);
                  if(data == 1){
                        document.getElementById('ph-message').style.display = "none";
                      document.getElementById('ph-edit').style.display = 'block';
                      $('#OTP').prop('disabled', false);
                      document.getElementById('OTP').focus();
                  } else {
                      document.getElementById('ph-edit').style.display = 'none';
                      $('#top_otp').prop('disabled', true);
                      document.getElementById('ph-message').style.display="";
                      document.getElementById('ph-message').textContent = "Please enter a vaild phone number.";
                      document.getElementById('PhoneNumber').focus();
                      return false;
                  }
                },
                  error: function(xhr) {
                },
              });
            // *************
        }else{
            /*document.getElementById('des_errorMsg_top').style.display="";
            document.getElementById('des_errorMsg_top').textContent = "Please enter a 10-digit phone number.";
            document.getElementById('top_phoneno').focus();
            return false;*/
            document.getElementById('PhoneNumber').focus();
            document.getElementById('ph-message').style.display = "block";
            return false;
        }
    }else{
        /*document.getElementById('default-err').style.display="block";
        document.getElementById('PhoneNumber').focus();*/
        document.getElementById('PhoneNumber').focus();
        document.getElementById('ph-message').style.display = "block";
        return false;
    }
}
function phoneEditTop() {
    $('#PhoneNumber').prop('disabled', false);
    document.getElementById('ph-edit').style.display = "none";
}
function costOtpVerify(val){
    var phoneNumber123 = document.getElementById('PhoneNumber').value;
    $.ajax({
        type: 'POST',
        url : 'https://niftyinterio.com/campaign/residential-interior-designer-Hyderabad/smsSend/otpVerify.php',
        data: {phoneNumber:phoneNumber123,otp:val},
        success: function(data) {
            // console.log(data);
            if(data == '1'){
                $('#OTP').prop('disabled', true);
                document.getElementById('otp-err').style.display="none";
                document.getElementById('costVerify').value="0";
            } else if(data == '2'){
                $('#OTP').prop('disabled', false);
                document.getElementById('otp-err').style.display="";
                document.getElementById('otp-err').textContent = "Wrong OTP";
                // document.getElementById('top_otp').focus();
                document.getElementById('costVerify').value="1";
                return false;
            }else {
                $('#OTP').prop('disabled', false);
                document.getElementById('otp-err').style.display="";
                document.getElementById('otp-err').textContent = "Wrong OTP";
                // document.getElementById('top_otp').focus();
                document.getElementById('costVerify').value="1";
                return false;
            }
        },
        error: function(xhr) {
        },
    });
}
  // var submit = document.querySelector('.btn-submit');
  // submit.addEventListener('click', function(e){
  //   var custUrl = "<?php echo base_url(); ?>"+"user/FormSubmit";
  //   alert(custUrl);
  //   e.preventDefault();
  //   var jqxhr = $.ajax({
  //     url: custUrl,
  //     method: "GET",
  //     dataType: "json",
  //     data: $form.serializeArray(),
  //     success: function(){
  //       var container = document.querySelector('.form-container');
        
  //       container.style.top = "0px";
  //       container.innerHTML = "<h2>Thank you! We have received your entry and we'll get back to you on the email you entered.";
        
  //     }
  //   })
  // })
  
  

