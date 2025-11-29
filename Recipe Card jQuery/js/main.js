$(document).ready(function(){

    let ImperialUnits = true;

    $('#btn').click(function(){

        ImperialUnits = !ImperialUnits

        if(ImperialUnits){
            $('.imperial-units').show();
            $('.metric-units').hide();
            $(this).html('<i class="fa-solid fa-right-left"></i> Switch to Metric Units')
        }else{
            $('.metric-units').show();
            $('.imperial-units').hide();
            $(this).html('<i class="fa-solid fa-right-left"></i> Switch to Imprial Units')
        }
        
    });
});