let email = ""
$('#submit-register').click(function (event){
  event.preventDefault()
  email = $('#email-register').val()
  let password1 = $('#password1-register').val()
  let password2 = $('#password2-register').val()
  let status = true
  // checks if email is valid
  if ((email.includes('@')===false) || (email.includes('.')===false)) {
    $('#sign-up-email').css('color','red')
    $('#sign-up-email').text('Please enter a valid email address')
    status = false
  } else {
    $('#sign-up-email').css('color', 'black')
    $('#sign-up-email').text('Email Address')
  }
  // checks if password is right length
  if (password1.length < 6) {
    $('#sign-up-password').css('color','red')
    $('#sign-up-password').text('Please enter a password with minimum of 6 characters')
    status = false
  } else {
    $('#sign-up-password').css('color','black')
    $('#sign-up-password').text('Password')
  }
  // checks to see if passwords match
  if (password1 !== password2) {
    $('#sign-up-password2').css('color','red')
    $('#sign-up-password2').text("Passwords don't match")
    status = false
  } else {
    $('#sign-up-password2').css('color','black')
    $('#sign-up-password2').text("Confirm Password")
  }
  // if everything is valid, pushes info to firebase
  if (status === true) {
    firebase.auth().createUserWithEmailAndPassword(email, password1).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      if (errorCode.includes('auth/email-already-in-use')) {
        errorCode = ''
        errorMessage = ''
        $('#sign-up-email').css('color','red')
        $('#sign-up-email').text('That email is already in use')
      } else {
        $('#myModalSignUp').css('display', 'none')
      };
    });
  };
});

$('#submit-login').click(function (event){
  event.preventDefault()
  email = $('#email-login').val()
  let password = $('#password1-login').val()
  console.log(email)
  console.log(password)
  if (status === true) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      promise
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      if (errorCode.includes('auth/email-already-in-use')) {
        $('#email-login').css('color','red')
        $('#email-login').text('Email Not Recognized')
      };
    });
  };
});

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser)  { 
    $('#myModalSignUp').css('display', 'none')
    $('.log-out-btn').css('display', 'block')
  } else {
    console.log('not logged in')
  }
});

$('.log-out-btn').on('click', function (){
  firebase.auth().signOut()
  $('.log-out-btn').css('display', 'none')
});

function showPassword() {
  let type= $('#password1-register').attr('type')
  if (type === 'password') { 
    $('#password1-register').attr('type','text')
    $('#password2-register').attr('type','text')
  } else {
    $('#password1-register').attr('type','password')
    $('#password2-register').attr('type','password')
  };
};

function showPassword2() {
  let type= $('#password-login').attr('type')
  if (type === 'password') { 
    $('#password-login').attr('type','text')
  } else {
    $('#password-login').attr('type','password')
  };
};

function newSearch () {
  let newEmail = decodeURIComponent(window.location.search)
  location.replace('./index.html'+newEmail)
};