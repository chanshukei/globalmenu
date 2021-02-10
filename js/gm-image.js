function previewImage(imgFileEleId, imgEleId){
    var input = document.getElementById(imgFileEleId);
    if (input.files && input.files[0]) {
        var reader = new FileReader();        
        reader.onload = function(e) {
            $('#'+imgEleId).attr('src', e.target.result);
        }   
        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}

function preloadImage(){
    $('img[image-id]').each(function(index, value) {
        preloadImageById(value.id);
    });
}

function preloadImageById(imgEleId){
    var pData = {
        "imageId": $('#'+imgEleId).attr('image-id')
    };
    $.ajax({
        type: "POST",
        url: "https://globalmenu-image.azurewebsites.net/api/GetImage",
        data: JSON.stringify(pData),
        contentType: "application/json",
        dataType: "json",
        complete: function (jqXHR) {
            if (jqXHR.readyState === 4) {
                var img = JSON.parse(jqXHR.responseText);
                $('#'+imgEleId).attr('src', img.imageData);                                
            }
        }
    });
}

function uploadImage(pSessionId, pImageType, pKey, fileEleId, pSuccessCallback){
    var reader = new FileReader();
    var f = document.getElementById(fileEleId).files;
    reader.onloadend = function () {
        var pData = {
            "data": reader.result,
            "imageId": '',
            "sessionId": pSessionId,
            "imageType": pImageType,
            "keyId": pKey
        };
        $.ajax({
            type: "POST",
            url: "https://globalmenu-image.azurewebsites.net/api/UploadImage",
            data: JSON.stringify(pData),
            contentType: "application/json",
            dataType: "json",
            complete: function (jqXHR) {
                if (jqXHR.readyState === 4) {
                    var img = JSON.parse(jqXHR.responseText);
                    console.log("Image uploaded:" + img.imageId);     
                    pSuccessCallback();                           
                }
            }
        });
    }
    reader.readAsDataURL(f[0]);
}