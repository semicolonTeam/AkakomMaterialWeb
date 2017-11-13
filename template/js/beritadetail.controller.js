const main = angular.module('beritadetail',[])

main.controller('main',function($scope, $http, $location){
    var slug = $location.absUrl().split('/berita/')[1];
    $http.get('http://localhost:8008/api/berita/'+slug)
    .then(res=>{
        $scope.berita = res.data.data;
        console.log($scope.berita);
    },err=>{
        $scope.berita = {};
    });
})