var app = angular.module('PDCM', []);

app.controller('PDCMController', function($scope, $http) {

	$scope.showLoadingSong=false;
	$scope.showLoadingArtist=false;
	$scope.showLoadingLink=false;
	
	
	$scope.showTableSong=false;
	$scope.showTableArtist=false;
	
	$scope.downloadLinkSong=false;
	$scope.downloadLinkArtist=false;
	
	$scope.Init = function () {
		$scope.GetCountryCode();
		$scope.$watch('countryCode', function () {
      	if ($scope.countryCode == "ES") {
				$scope.CambiarSpanish();
      	} else {
				$scope.CambiarEnglish();		
      	}
    	});
 };
    
	
	$scope.CambiarSpanish = function(){
	
	$scope.texto = {
		idioma: "Spanish",
		titulo: "PDCM",
		tituloCompleto: "Plataforma de Descarga de Contenido Multimedia",
		eslogan: "Descargar contenido multimedia nunca fue tan fácil",
		pruebalo: "Pruébalo!",
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
		about: "Acerca de PDCM",
		pAbout: "PDCM es un proyecto de codigo abierto, que permite la descarga de contenido multimedia, alojado en servidores de streaming. La plataforma consta de un back-end, que ofrece los servicios mediante una API RESTful y una parte front-end que consume los servicios.",
		pAbout2: "El codigo fuente esta accesible en Github: ",
		pAbout3: "Ademas se ofrece una pagina con los servicios REST disponibles: ",
		contacto: "Contacto",
		pContacto: "Texto de contacto",
		pruebaApi: "Prueba la API!",
		repoGitHub: "Repositorio GitHub",
		origen: "Origen"
		
      }
	
	};
	
	$scope.CambiarEnglish = function(){
	
	$scope.texto = {
		idioma: "English",
		titulo: "PDCM",
		tituloCompleto: "Plataforma de Descarga de Contenido Multimedia",
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
		repoGitHub: "GitHub repository",
		origen: "Source"
		
      }
	
	};
	
	$scope.SearchSong = function(busqueda){
		$scope.showTableSong=false;
		$scope.showLoadingSong=true;
		$scope.downloadLinkSong=false;
		$http({
  		method: 'GET',
  		url: 'http://servidortfg.no-ip.org:8080/PDCM/rest/searchYoutube',
  		params: { busqueda: busqueda }
	}).then(function successCallback(response) 
		{
			$scope.showLoadingSong=false;
			$scope.showTableSong=true;
			$scope.songs = response.data;
		});	
	};
	
	$scope.GetLinkSong = function(urlYoutube,song){
		$scope.showTableSong=false;
		$scope.downloadLinkSong=false;
		$scope.showLoadingSong=true;
		$http({
  		method: 'GET',
  		url: 'http://servidortfg.no-ip.org:8080/PDCM/rest/youtubedl',
  		params: { url: urlYoutube }
	}).then(function successCallback(response) 
		{
			$scope.urlSpecialSong = response.data.urlspecial;
			$scope.downloadCancion=song;
			$scope.showLoadingSong=false;
			$scope.downloadLinkSong=true;

		});	
	};
	
	$scope.SearchArtist = function(busqueda){
		$scope.showTableArtist=false;
		$scope.downloadLinkArtist=false;
		$scope.showLoadingArtist=true;
		$http({
  		method: 'GET',
  		url: 'http://servidortfg.no-ip.org:8080/PDCM/rest/searchYoutubeArtist',
  		params: { busqueda: busqueda }
	}).then(function successCallback(response) 
		{
			$scope.showLoadingArtist=false;
			$scope.showTableArtist=true;
			$scope.songsArtist = response.data;
		});	
	};
	
	$scope.GetLinkArtist = function(urlYoutube,song){
		$scope.showTableArtist=false;
		$scope.downloadLinkArtist=false;
		$scope.showLoadingArtist=true;
		$http({
  		method: 'GET',
  		url: 'http://servidortfg.no-ip.org:8080/PDCM/rest/youtubedl',
  		params: { url: urlYoutube }
	}).then(function successCallback(response) 
		{
			$scope.urlSpecialArtist = response.data.urlspecial;
			$scope.downloadCancionArtist=song;
			$scope.showLoadingArtist=false;
			$scope.downloadLinkArtist=true;

		});	
	};
	
	$scope.GetLink = function(urlYoutube){
		$scope.showLoadingLink=true;
	
		$http({
  		method: 'GET',
  		url: 'http://servidortfg.no-ip.org:8080/PDCM/rest/youtubedl',
  		params: { url: urlYoutube }
	}).then(function successCallback(response) 
		{
			$scope.urlSpecialLink = response.data.urlspecial;
			$scope.showLoadingLink=false;
			$scope.downloadLinkLink=true;

		});	
	};
	
	$scope.GetCountryCode = function(){
		$http({
  		method: 'GET',
  		url: 'http://ip-api.com/json',
	}).then(function successCallback(response) 
		{
			$scope.countryCode = response.data.countryCode;

		});	
	};
	
	window.onload = $scope.Init();


});
