window.onload= init;
var headers= {}
var url= "http://localhost:3000";

function init(){
    if(localStorage.getItem("token")){
        headers= {
            headers:{
                "Authorization": "bearer " + localStorage.getItem("token") //OJO CON LOS ESPACIOS EN EL BEARER! EN SERIO
            }
        }
        loadPokemon();
    } 
    else {
        window.location.href= "index.html"
    }
}
function loadPokemon(){
    axios.get(url + "/pokemon", headers)
    .then(function(res){
        console.log(res);
        displayPokemon(res.data.message); //tactical insertion
    }).catch(function(err){
        console.log(err);
        console.log(headers);
    })
}
function displayPokemon(pokemon){ //tactical insertion
    var body= document.querySelector("body");
    console.log(pokemon)
    for (var i=0; i<pokemon.length; i++) {
        body.innerHTML += `<h3>${pokemon[i].pok_name}</h3>`;
    }
}