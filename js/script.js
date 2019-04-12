$(document).on("ready", main);
function main()
{
	$("#next").on("click", function()
	{
		var texto = "";
		$.getJSON("https://swapi.co/", function(dados){
			$.each(dados.films, function(i,film){
				texto += "<div class='star'>";
				texto += "<img src='" + film + "' />";
				texto += "<div/>";
			});
		});
	});
}