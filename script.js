$(document).ready(function() {
    $("#myForm").submit(function(event) {
        event.preventDefault();
        const pokemon = $("#pokemon").val();
        getPokemonInfo(pokemon);
    });
});

function getPokemonInfo(pokemon) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  
    $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function(data) {
            const ability = data.abilities[0].ability.name;
            alert(`The ability of ${pokemon} is: ${ability}`);
        },
        error: function(error) {
            alert("Pokemon not found. Please try another one.");
        }
    });
}
