$(function() {

  var ville = "paris";

    $.ajax( {
        url: "https://www.prevision-meteo.ch/services/json/"+ville,

        success:function(monObjet) {
            console.log(monObjet);
            $("#bg-image-0").attr("src", "img/"+ monObjet.current_condition.condition_key + ".png");
            $("#bg-image-1").attr("src", "img/"+ monObjet.fcst_day_1.condition_key + ".png");
            $("#bg-image-2").attr("src", "img/"+ monObjet.fcst_day_2.condition_key + ".png");
            $("#bg-image-3").attr("src", "img/"+ monObjet.fcst_day_3.condition_key + ".png");
            $("#bg-image-4").attr("src", "img/"+ monObjet.fcst_day_4.condition_key + ".png");
        }

        
    }); //ajax


    $( "#go" ).click(function() {

        var ville = $("#ville").val();
    

        $.ajax({
            //1 définir le fichier à appeler
            url: "https://www.prevision-meteo.ch/services/json/"+ville,
            //2 méthode utilisée pour envoyer les variables
            //4 format dans lequel le contenu revient
            success : function(monObjet){
                //$('#contenu').html(monObjet);
                console.log(monObjet);
                console.log(ville);
                $("#bg-image-0").attr("src", "img/"+ monObjet.current_condition.condition_key + ".png");
                $("#bg-image-1").attr("src", "img/"+ monObjet.fcst_day_1.condition_key + ".png");
                $("#bg-image-2").attr("src", "img/"+ monObjet.fcst_day_2.condition_key + ".png");
                $("#bg-image-3").attr("src", "img/"+ monObjet.fcst_day_3.condition_key + ".png");
                $("#bg-image-4").attr("src", "img/"+ monObjet.fcst_day_4.condition_key + ".png");
                
                $("#condition-0").html(monObjet.current_condition.condition);
                $("#condition-1").html(monObjet.fcst_day_1.condition);
                $("#condition-2").html(monObjet.fcst_day_2.condition);
                $("#condition-3").html(monObjet.fcst_day_3.condition);
                $("#condition-4").html(monObjet.fcst_day_4.condition);

                $("#date-0").html(monObjet.current_condition.date);
                $("#date-1").html(monObjet.fcst_day_1.date);
                $("#date-2").html(monObjet.fcst_day_2.date);
                $("#date-3").html(monObjet.fcst_day_3.date);
                $("#date-4").html(monObjet.fcst_day_4.date);

                $("#day-0").html(monObjet.fcst_day_0.day_long);
                $("#day-1").html(monObjet.fcst_day_1.day_long);
                $("#day-2").html(monObjet.fcst_day_2.day_long);
                $("#day-3").html(monObjet.fcst_day_3.day_long);
                $("#day-4").html(monObjet.fcst_day_4.day_long);

                $("#temp-actu").html(monObjet.current_condition.tmp);
                $("#temp-max-1").html(monObjet.fcst_day_1.tmax);
                $("#temp-max-2").html(monObjet.fcst_day_2.tmax);
                $("#temp-max-3").html(monObjet.fcst_day_3.tmax);
                $("#temp-max-4").html(monObjet.fcst_day_4.tmax);

                $("#humidity").html(monObjet.current_condition.humidity);
                $("#temp-min-1").html(monObjet.fcst_day_1.tmin);
                $("#temp-min-2").html(monObjet.fcst_day_2.tmin);
                $("#temp-min-3").html(monObjet.fcst_day_3.tmin);
                $("#temp-min-4").html(monObjet.fcst_day_4.tmin);

                $("#vitess-vent").html(monObjet.current_condition.wnd_spd);
                $("#direction-vent").html(monObjet.current_condition.wnd_dir);
                $("#pression").html(monObjet.current_condition.pressure);
                $("#city").html(monObjet.city_info.name);





                
            }//success
         });

        //$("#contenu").load("customers.php")


        
        
    }); //click
});//function