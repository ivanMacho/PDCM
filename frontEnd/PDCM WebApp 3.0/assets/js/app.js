var app = angular.module('PDCM', []);

app.controller('PDCMController', function($scope) {
	
	$scope.texto = {
		idioma: "Spanish",
		titulo: "PDCM",
		tituloCompleto: "Plataforma de Descarga de Contenido Multimédia",
		eslogan: "Descargar contenido multimédia nunca fue tan fácil",
		pruebalo: "Pruebalo!",
		cancion: "Por canción",
		pCancion: "Escribe la canción o parte de la letra.",
		sCancion: "Busca una canción",
		artista: "Por artista/grupo",
		pArtista: "Escribe el nombre de una artista o grupo",
		sArtista: "Busca canciones de un grupo o artista",
		buscar: "Buscar",
		link: "Usa un link",
		pLink: "Pega un link de Youtube, Vimeo u otro servicio de streaming",
		sLink: "Link",
		about: "Sobre PDCM",
		pAbout: "Descripción PDCM",
		contacto: "Contacto",
		pContacto: "Texto de contacto",
		pruebaApi: "Prueba la API!",
		repoGitHub: "Repositorio GitHub"
		
      }
		

	
	$scope.CambiarSpanish = function(){
	
	$scope.texto = {
		idioma: "Spanish",
		titulo: "PDCM",
		tituloCompleto: "Plataforma de Descarga de Contenido Multimédia",
		eslogan: "Descargar contenido multimédia nunca fue tan fácil",
		pruebalo: "Pruebalo!",
		cancion: "Por canción",
		pCancion: "Escribe la canción o parte de la letra.",
		sCancion: "Busca una canción",
		artista: "Por artista/grupo",
		pArtista: "Escribe el nombre de una artista o grupo",
		sArtista: "Busca canciones de un grupo o artista",
		buscar: "Buscar",
		link: "Usa un link",
		pLink: "Pega un link de Youtube, Vimeo u otro servicio de streaming",
		sLink: "Link",
		about: "Sobre PDCM",
		pAbout: "Descripción PDCM",
		contacto: "Contacto",
		pContacto: "Texto de contacto",
		pruebaApi: "Try the API!",
		repoGitHub: "GitHub repository"
		
      }
	
	};
	
	$scope.CambiarEnglish = function(){
	
	$scope.texto = {
		idioma: "English",
		titulo: "PDCM",
		tituloCompleto: "Plataforma de Descarga de Contenido Multimédia",
		eslogan: "Downloading multimedia content has never been easier",
		pruebalo: "Try it!",
		cancion: "By Song",
		pCancion: "Type the name of a song, its author or part of the letter.",
		sCancion: "Search a song",
		artista: "By artist/group",
		pArtista: "Type the name of the Artist or the Group.",
		sArtista: "Search songs by artist or group",
		buscar: "Search",
		link: "Use a link",
		pLink: "Use a link from Youtube, Vimeo or any streaming service Try it!",
		sLink: "Link",
		about: "About PDCM",
		pAbout: "Description of PDCM",
		contacto: "Contact",
		pContacto: "Text of contact",
		pruebaApi: "Try the API!",
		repoGitHub: "GitHub repository"
		
      }
	
	};
	
});
