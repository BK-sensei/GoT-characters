// VERSION JQUERY

$(function(){

    var personnages = []

    function displayGotCharacter (string){
        $("#perso").html("")
        string.forEach(function(characters){
            $("#perso").append(
                `<div class= "col-3 mb-4">
                    <div class= "card characterGot" style="width: 18rem;">
                        <div class="characterGot-img" style="background-image:url('${characters.imageUrl}')"></div>
                        <div class="card-body">
                            <h5 class="card-title">${characters.fullName}</h5>
                            <p class="card-text">${characters.title}</p>
                        </div>
                    </div>
                </div>`
            )
            // personnages.push({characters.fullName})
        })
    }

    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data) {
            personnages = data
            console.log(data);

            // Afficher les objets (personnages) contenus dans le tableau de l'API et choisir les éléments que l'on veut afficher
            // data.forEach(function(characters){
            //     $("#perso").append(
            //         `<div class= "col-4 mb-4">
            //             <div class= "card characterGot" style="width: 18rem;">
            //                 <div class="characterGot-img" style="background-image:url('${characters.imageUrl}')"></div>
            //                 <div class="card-body">
            //                     <h5 class="card-title">${characters.fullName}</h5>
            //                     <p class="card-text">${characters.title}</p>
            //                 </div>
            //             </div>
            //         </div>`
            //     )
                // personnages.push({characters.fullName})
            //})


            displayGotCharacter(data)
        }   
    })

    // Filtrer les personnages par leur fullName dans un formulaire de recherche
    $("#searchGot").keyup(function(e) {
        e.preventDefault()
        console.log(personnages)

        var value = $("input").val()

        // on rappelle la variable personnage qui est un tableau vide créée plus tôt 
        var filterFullNameGot = personnages.filter(function(personnage){
            return personnage.fullName.toLowerCase().includes(value)
        })
        console.log(filterFullNameGot);
        displayGotCharacter(filterFullNameGot)
    })
})


// VERSION JAVASCRIPT NORMAL

// $(function(){

//     var character = document.getElementById("perso")

//     $.ajax({
//         url: 'https://thronesapi.com/api/v2/Characters',
//         success: function(data) {
//             console.log(data);
            
//             data.forEach(function(characters){
                
//                 character.innerHTML +=
//                 `
//                 <div class= "col-4 mb-4">
//                     <div class= "card characterGot" style="width: 18rem;">
//                         <div class="characterGot-img" style="background-image:url('${characters.imageUrl}')"></div>
//                         <div class="card-body">
//                             <h5 class="card-title">${characters.fullName}</h5>
//                             <p class="card-text">${characters.title}</p>
//                         </div>
//                     </div>
//                 </div>
//                 `
//             })

//         }

//     });

// })

//--- Ecriture initale de l'image qui a ensuite été transformée en background-image mis dans une div
/* <img src="${characters.imageUrl}" class= "card-img-top characterGot-img" style="height: 18rem;"> */

