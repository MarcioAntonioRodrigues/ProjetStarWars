$(document).ready(function()
{
	var texto = "";
	var randomNum = 0;
	var moviesList = [];
	var moviesListNames = [];
	var inverse = false;

	$("#next").on("click", function()
	{
		generateRandomicNum();

		printHtml();
		
		getPlanet();

		setTimeout(() => {getMoviesList();} , 1000);

		if(inverse)
		{
			$('.card').removeClass('flip');
			$(".front").html(texto);
		}
		else
		{

			$('.card').addClass('flip');
			$(".back").html(texto);
		} 
		texto = "";
		moviesList = [];
		moviesListNames = [];
		inverse = !inverse;
	});

	// gera numero randomico
	function generateRandomicNum()
	{
		randomNum = Math.floor((Math.random() * 61) + 0)
		setTimeout(() => {
			console.log(randomNum)
		}, 1000);
	}
	
	// requisicao de planetas
	function getPlanet()
	{
		$.getJSON("https://swapi.co/api/planets/"+randomNum, (planet)=>
		{
			planeta = planet;
			 $.each(planet.films, (i, film)=>
			 {
				 moviesList.push(film);
			 })
		});
	}

	// requisicao de filmes do planeta
	function getMoviesList()
	{
			moviesList.forEach((movie) => 
			{
				$.getJSON(movie, function(data)
				{
					moviesListNames.push(data.title);
				});
			});							
	}

	// Imprime o HTML
	function printHtml()
	{
		if(moviesList.length == 0)
		{
			moviesListNames.push("None");
		}
		texto += "<div class='planet'>";
		texto += 	"<h1>" + planeta.name + "</h1>";
		texto += 	"<p>Population: <span>" + planeta.population + "<span></p>";
		texto += 	"<p>Climate: <span>" + planeta.climate + "</span></p>";
		texto += 	"<p>Terrain: <span>" + planeta.terrain + "</span></p>";
		texto += 	"<p>Films: <span>" + moviesListNames.join([separador = ', ']) + "<span></p>";			
		texto += "</div>";
	}

	// as funcoes abaixo sao chamadas ao iniciar o browser
	generateRandomicNum();
	getPlanet();
	setTimeout(() => {getMoviesList();}, 1000);
});





