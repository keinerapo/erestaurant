angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('indexCtrl', function($scope,$http) {
     $http.get('/data/restaurants.json')
            .success(function(data) {
                $scope.Listrestaurantes = data;
                
            })
            .error(function(data) {
                console.log(data);
        });
   
})
   
.controller('reservationCtrl', function($scope,$stateParams,$http) {
     $http.get('/data/restaurants.json')
            .success(function(data) {
            data.restaurantes.forEach(function(index){
                if(index.id==$stateParams.id){
                   $scope.nombrere=index.nombre;
                   $scope.imgView = index.img;
               }
                
            });
            
        })
            .error(function(data) {

            
        });
    $scope.showAlert = function(){
        alert("Su reserva ha sido realizada con éxito.");
    }
})
   
.controller('domicileCtrl', function($scope,$stateParams,$http,$ionicPopup,$location) {
    $http.get('/data/restaurants.json')
            .success(function(data) {
            data.restaurantes.forEach(function(index){
                if(index.id==$stateParams.id){
                   $scope.nombrere=index.nombre;
                    $scope.imgView = index.img;
                    var platos = index.platos;
                    var vinos = index.vinos;
                    var bebidas = index.bebidas;
                    var preciosP = index.precioPlato;
                    $scope.listPlatos = platos.split(',');
                    $scope.listVinos = vinos.split(',');
                    $scope.listBebidass = bebidas.split(',');
                    $scope.listPreciosPlatos = preciosP.split(',');
               }
                
            });
            
        })
            .error(function(data) {

            
        });
    $scope.showAlert = function(){
        alert("Su pedido ha sido realizado.");
    }
})
 