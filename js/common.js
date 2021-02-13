function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function editOpeningHours(){
    window.location.href = "./shop-openhours.html";
}

function editShopLogo(successCallbackUrl){
    window.location.href = "./shop-image.html?successCallbackUrl="+successCallbackUrl;    
}

function gotoHome(){
    window.location.href = "./shops.html";    
}

function goToFoodMenu(pLang){
    window.location.href = "./foodmenu.html?lang="+pLang;
}

function startLoading(){
    $('#loadingPage').show();
}

function stopLoading(){
    $('#loadingPage').hide();
}

function checkForm(){
    var errors = []
    $('input[required]').each(function(index) {
        if($(this).val()==''){
            var labelText = $('label[for="'+$(this).attr('id')+'"]').text();
            errors[errors.length] = {'MSG_TEXT': labelText + ' is required.'};
        }
    });
    $('input[type="email"]').each(function(index) {
        var aEmail = $(this).val();
        if(aEmail!=''){
            var re = /\S+@\S+\.\S+/;
            if(!re.test(aEmail)){
                var labelText = $('label[for="'+$(this).attr('id')+'"]').text();
                errors[errors.length] = {'MSG_TEXT': labelText + ' is not in Email address format.'};
            }
        }
    });
    return errors;
}