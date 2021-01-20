function goStep2(){
    $('#step1').hide();    
    $('#step2').show();
}

function goStep3(){
    $('#step2').hide();
    console.log($('#openTime').val());
    console.log($('#closeTime').val());
    $('#step3').show();
}

function backStep1(){
    $('#step2').hide();    
    $('#step1').show();
}

function backStep2(){
    $('#step3').hide();    
    $('#step2').show();
}