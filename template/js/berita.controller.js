const main = angular.module('berita',[])

main.controller('main',function($scope, $http){
    $http.get('http://localhost:8008/api/berita')
    .then(res=>{
        $scope.berita = res.data;
        console.log($scope.berita.data[0].slug);
    },err=>{
        $scope.berita = {};
    });
})