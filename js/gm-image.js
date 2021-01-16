function previewImage(imgFileEleId, imgEleId){
    var input = document.getElementById(imgFileEleId);
    console.log('previewImage 1');
    if (input.files && input.files[0]) {
        console.log('previewImage 2');
        var reader = new FileReader();        
        reader.onload = function(e) {
            console.log('previewImage 3');
            $('#'+imgEleId).attr('src', e.target.result);
        }   
        console.log('previewImage 4');     
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