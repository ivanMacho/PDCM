var app = angular.module('PDCM', ['ngCordova']);

app.controller('PDCMController', function($scope, $http,  $timeout, $cordovaFileTransfer) {

	$scope.downloadVisibility=false;
	$scope.downloadVisibilityArtist=false;
	$scope.showTable=false;
	$scope.showTableArtist=false;
	$scope.downloadCancion='';
	$scope.downloadCancionArtist='';
	$scope.showProgress=false;
	$scope.showLoading=false;
	$scope.showLoadingArtist=false;

	$scope.Search = function(busqueda){
		$scope.showLoading=true;
		$http({
  		method: 'GET',
  		url: 'http://servidortfg.no-ip.org:8080/PDCM/rest/searchYoutube',
  		params: { busqueda: busqueda }
	}).then(function successCallback(response) 
		{
			$scope.showLoading=false;
			$scope.showTable=true;
			$scope.songs = response.data;
		});	
	};

	$scope.SearchArtist = function(busquedaArtist){
		$scope.showLoadingArtist=true;
		$http({
  		method: 'GET',
  		url: 'http:///servidortfg.no-ip.org:8080/PDCM/rest/searchYoutubeArtist',
  		params: { busqueda: busquedaArtist }
	}).then(function successCallback(response) 
		{
			$scope.showLoadingArtist=false;
			$scope.showTableArtist=true;
			$scope.songsArtist = response.data;
		});	
	};

	$scope.GetLink = function(urlYoutube,song){
		$scope.showTable=false;
		$scope.showLoading=true;
		$http({
  		method: 'GET',
  		url: 'http:///servidortfg.no-ip.org:8080/PDCM/rest/youtubedl',
  		params: { url: urlYoutube }
	}).then(function successCallback(response) 
		{
			$scope.urlSpecial = response.data.urlspecial;
			$scope.downloadCancion=song;
			$scope.downloadVisibility=true;
			$scope.showLoading=false;

		});	
	};

	$scope.GetLinkArtist = function(urlYoutube,songArtist){
		$scope.showTableArtist=false;
		$scope.showLoadingArtist=true;
		$http({
  		method: 'GET',
  		url: 'http:///servidortfg.no-ip.org:8080/PDCM/rest/youtubedl',
  		params: { url: urlYoutube }
	}).then(function successCallback(response) 
		{
			$scope.urlSpecialArtist = response.data.urlspecial;
			$scope.downloadCancionArtist=songArtist;
			$scope.downloadVisibilityArtist=true;
			$scope.showLoadingArtist=false;
		});	
	};

	$scope.downloadFile = function(urlSpecial,fileName) {
	$scope.showProgress=true;
	var url = urlSpecial;
    var filename = fileName +".mp3";
    alert("Downloading " +filename);
    var targetPath = cordova.file.externalRootDirectory + "/PDCM/MUSIC/" + filename;
    var trustHosts = true
    var options = {};
    //alert(targetPath);
    $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
      .then(function(result) {
        // Success!
        alert("Download complete. Go to PDCM/MUSIC");
        $scope.showProgress=false;
        //alert(JSON.stringify(result));
      }, function(error) {
        // Error
        alert(JSON.stringify(error));
      }, function (progress) {
        $timeout(function () {
          $scope.downloadProgress = (progress.loaded / progress.total) * 100;
        })
      });
 }



//I'm only called when the file exists or has been downloaded.
function appStart() {
	$status.innerHTML = "App ready!";
}
	
  });
