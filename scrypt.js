// Start Code Here
$(document).ready(function() {
    $("#myForm").submit(function(event) {
        event.preventDefault();
        const pokemon = $("#pokemon").val();
        getPokemonInfo(pokemon);
       
    });
   
});

$(document).ready(function() {
    $("#random").submit(function(event) {
        event.preventDefault();
        number = Math.random();
        number2 = number * 1000
        number3 = Math.floor(number2)
        getPokemonNumber(number3);
        
        
    });
   
});


function getPokemonInfo(pokemon) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    $.ajax({
        url: apiUrl,
        type: "GET",
        datType: "json",
        success: function(data) {
            const name = data.name;
            const ability = data.abilities[1].ability.name;
            const image = data.sprites.other.home.front_default;
            $(".name").text(name);
            $(".power").text("Power:" + ability);
            $("img").attr("src", image);
        },
        error: function(error) {
            $("h2").text("Pokemon Not Found");
        }





    });


}

function getPokemonNumber(number3) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${number3}`;

    $.ajax({
        url: apiUrl,
        type: "GET",
        datType: "json",
        success: function(data) {
            const name = data.name;
            const ability = data.abilities[1].ability.name;
            const image = data.sprites.other.home.front_default;
            $(".name").text(name);
            $(".power").text("*Power:  " + ability);
            $("img").attr("src", image);
            $(".catch").text("Got A Catch Them ALL!");
    
        },
        error: function(error) {
            $("h2").text("Pokemon Not Found");
        }





    });


}







//"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png


/*
$(document).ready(function() {
    $("#myForm").submit(function(event) {
        event.preventDefault();
        const hola = $("#pokemon").val();
        //alert(hola);
        $("textarea").append(hola);
        $("h2").append(hola);
       
    });
   
});


$(document).ready(function() {
    $("#clean").submit(function(event) {
        event.preventDefault();
        
        
        $("textarea").remove();
        $("h2").remove();
        $("h1").remove();
        $("textarea").text("");
    });
   
});
*/



