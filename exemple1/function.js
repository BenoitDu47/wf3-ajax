$(document).ready(function(){



    $("form").submit(function(event){

        /*Si la longueur de la valeur du champ #prenom est 0 (c'est-à-dire si
        le champ n'a pas été rempli), on affiche un message et on empêche l'envoi*/
        if($("#prenom").val().length === 0 ){
            $("#prenom").after("<span class='alert'>Merci de remplir ce champ</span>").css('background-color', 'red');
            event.preventDefault();
        }else{
            //On effectue nos requêtes Ajax, sérialise, etc...
            let chaine = $("form").serialize();
        }
    });

});

// $(document).ready(function(){
//     $("form").submit(function(event){
//         $("input, textarea").each(function(){
//             if($(this).val().length === 0){
//                 $(this).css("border", "2px solid red");
//                 $(this).after("<span>Merci de remplir ce champ.</span>");
//                 event.preventDefault();
//             }else{
//                 let chaine = $("form").serialize();
//             }
//         });
        
//     });
// });

// $(document).ready(function () {
//     $("form").submit(function (event) {

//         isEmpty("#firstname");
//         isEmpty("#lastname");
//         isEmpty("#message");

//         function isEmpty(field) {
//             if ($(field).val().length === 0) {
//                 $(field).after("<span class='alert'>Merci de remplir ce champ</span>");
//                 event.preventDefault();
//             } else {
//                 let chaine = $("form").serialize();
//             }
//         }
//     });
// });