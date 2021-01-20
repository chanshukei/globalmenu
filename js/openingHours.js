function goStep2(){
    $('#step1').hide();    
    $('#step2').show();
}

function goStep3(){
    $('#step2').hide();
    $("#monOpenTime").val($("#openTime").val());
    $("#monCloseTime").val($("#closeTime").val());
    $("#tueOpenTime").val($("#openTime").val());
    $("#tueCloseTime").val($("#closeTime").val());
    $("#wedOpenTime").val($("#openTime").val());
    $("#wedCloseTime").val($("#closeTime").val());
    $("#thuOpenTime").val($("#openTime").val());
    $("#thuCloseTime").val($("#closeTime").val());
    $("#friOpenTime").val($("#openTime").val());
    $("#friCloseTime").val($("#closeTime").val());
    $("#satOpenTime").val($("#openTime").val());
    $("#satCloseTime").val($("#closeTime").val());
    $("#sunOpenTime").val($("#openTime").val());
    $("#sunCloseTime").val($("#closeTime").val());
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