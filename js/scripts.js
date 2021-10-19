$(function() {

  var ville = "paris";

    $.ajax( {
        url: "https://www.prevision-meteo.ch/services/json/"+ville,

        success:function(monObjet) {
            console.log(monObjet);
            //$("#bg-image").attr("src " , monObjet.current_condition.condition_key + ".png");
            $("#bg-image").attr("src", "img/"+ monObjet.current_condition.condition_key + ".png");
        }
    }); //ajax
});//function