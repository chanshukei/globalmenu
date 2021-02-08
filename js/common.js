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

function editShopLogo(){
    window.location.href = "./shop-image.html";    
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