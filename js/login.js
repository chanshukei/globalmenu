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
        // Useful data for your client-side scripts:
        /*
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        */

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);

        //
        var pData = {
            "idToken": id_token
        };
        $.ajax({
            type: "POST",
            url: "https://globalmenu-login.azurewebsites.net/api/GoogleSignin",
            data: JSON.stringify(pData),
            contentType: "application/json",
            dataType: "json",
            complete: function (jqXHR) {
                if (jqXHR.readyState === 4) {
                    var signInSession = JSON.parse(jqXHR.responseText);
                    Cookies.set('sessionID', signInSession.signInSessionID);
                    window.location.href = './shop-checkout.html';
                }
            }
        });
        
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

