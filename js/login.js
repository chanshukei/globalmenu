// JavaScript source code
function signIn() {
    console.log('called signIn');
    var pData = {
        "usernameEmail": $('#usernameEmail').val(),
        "password": $('#password').val()
    };
    $.ajax({
        type: "POST",
        url: "https://globalmenu-login.azurewebsites.net/api/SignInSession",
        data: JSON.stringify(pData),
        contentType: "application/json",
        dataType: "json",
        complete: function (jqXHR) {
            if (jqXHR.readyState === 4) {
                var signInSession = JSON.parse(jqXHR.responseText);
                Cookies.set('sessionID', signInSession.signInSessionID);
                window.location.href = './shops.html';
            }
        }
    });
}

function gotoSignIn(){
    window.location.href = './signin.html';
}

function backFromSignin(){
    window.location.href = './index.html';
}

//google login
function onGoogleSignInSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getEmail);
}
function onGoogleSignInFailure(error) {
    console.log(error);
}
function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 340,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onGoogleSignInSuccess,
        'onfailure': onGoogleSignInFailure
    });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

