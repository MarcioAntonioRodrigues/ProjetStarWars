$(document).ready(function()
{
	var moviesList = [];
	var texto = "";

	$("#next").on("click", function()
	{
		$("#principal").html(texto);
	});

	function getRequest1()
	{
		$.getJSON("https://swapi.co/api/people/1/", function(dados)
		{
			$.each(dados.films, function(i,film)
			{
				moviesList.push(film);
			});
		});
	}

	function getRequest()
	{
		moviesList.forEach((movie) => 
		{
			// debugger
			$.getJSON(movie, function(dados)
			{
				texto += "<div class='star'>";
				texto += "<p>" + dados.title + "<p/>";
				texto += "<div/>";
			});
		});
	}

	getRequest1();
	setTimeout(() => 
	{
		getRequest();
	}, 300); 
});





