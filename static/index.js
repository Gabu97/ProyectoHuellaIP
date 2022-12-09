const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 10 ) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});


document.querySelector('.img__btn')?.addEventListener('click', function() {
  document.querySelector('.cont').classList.toggle('s--signup');
});

// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//validar email
function validateEmail() {

    var email = document.contactForm.email.value;

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }


}


//validar phone
function validatePhone() {
    var mobile = document.contactForm.mobile.value;
    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{8}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

}




//Validador nombre
function validateText(numMax) {
    var name = document.contactForm.name.value;
    // var name = document.getElementById("idName").value;
    // var name = document.querySelector("#idName").value;
    


    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            textErr = false;
           
        }
    }
    verificar_errors();
}


// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;

    var email = document.contactForm.email.value;

    var mobile = document.contactForm.mobile.value;



    // Defining error variables with a default value
    var nameErr = emailErr =mobileErr =true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }



    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{8}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }



    // Prevent the form from being submitted if there are any errors
    if ((dniErr || nameErr || emailErr|| mobileErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var text = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" ;
            alert(text);
    }
};

function validateCheck() {

    var checkboxes = document.getElementsByName("grpd");
    if (checkboxes[0].checked) checkErr = false;
    else {
        printError("grpdErr", "Es obligatorio aceptar GRPD");
        checkErr = trues;
    }
}

function mialerta() {  
    alert("Tu mensaje se ha enviado correctamente !");
}


  function valoracion(){
    swal("Gracias!", "Tu valoración se ha guardado", "success");
  };
  function contactoenv(){
    swal("Gracias!", "Tu vmensaje se ha enviado", "success");
  };

  $(document).ready(function () {
            
    $('.star').click(function () {
if ($(this).hasClass("InstructorPerformance")) {
$('#InstructorPerformance').val('' + $(this).prop("id") + '')
type = "InstructorPerformance";
value = $(this).prop("id");
}
else if ($(this).hasClass("CourseContent")) {
$('#CourseContent').val('' + $(this).prop("id") + '')
type = "CourseContent";
value = $(this).prop("id");
}
else if ($(this).hasClass("CourseTime")) {
$('#CourseTime').val('' + $(this).prop("id") + '')
type = "CourseTime";
value = $(this).prop("id");
}
else if ($(this).hasClass("OutcomesAchieve")) {
$('#OutcomesAchieve').val('' + $(this).prop("id") + '')
type = "OutcomesAchieve";
value = $(this).prop("id");
}
else if ($(this).hasClass("CourseDuration")) {
$('#CourseDuration').val('' + $(this).prop("id") + '')
type = "CourseDuration";
value = $(this).prop("id");
}
var $this = $(this);
$(this).removeClass('fa-2x').addClass('fa-3x');
setTimeout(function () { $this.removeClass('fa-3x').addClass('fa-2x'); },500)
$this.animate({  opacity: '0.4' }, "slow");
$this.animate({  opacity: '0.8' }, "slow");
$this.animate({ opacity: '0.4' }, "slow");
$this.animate({  opacity: '0.8' }, "slow");

$(this).removeClass('fa-3x').addClass('fa-2x')

resetstars();

    });

$('.star').hover(function () {
$(this).removeClass('far fa-star').addClass('fa fa-star')
$(this).prevAll().removeClass('far fa-star').addClass('fa fa-star')
$(this).nextAll().removeClass('fa fa-star').addClass('far fa-star')
}, function () {
resetstars();
});
resetstars()
$("#getcertificate").hide();
$("#removelogs").hide();
function resetstars() {
//$("#text").hide();
$('.InstructorPerformance').each(function (i) {
if (i < $("#InstructorPerformance").val()) {
if (i + 1 == $("#InstructorPerformance").val()) {
    $(this).removeClass('far fa-star').addClass("fa fa-star")
    $(this).removeClass('fa-2x').addClass("fa-3x")
}
else
{
    $(this).removeClass('far fa-star').addClass("fa fa-star")
    $(this).removeClass('fa-3x').addClass("fa-2x")
}
}
else {
$(this).removeClass('fa fa-star').addClass("far fa-star")
$(this).removeClass('fa-3x').addClass("fa-2x")
}
});
}
});