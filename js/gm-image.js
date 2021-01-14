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