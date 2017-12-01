myApp.controller('appCtrl', function($scope, $http) {
    
    $scope.loadStatus = "";
    
    // $scope.getGeoTag = function(addressParam){
    //      $scope.loadStatus = "Retrieving Data...";
    //      $http.get("http://localhost:8082/geoTaggings/addresses/"+addressParam)
    //                   .then(function (response) {
    //                     $scope.g_cords_list = response.data;
    //                     $scope.query_address = addressParam;
    //                     $scope.loadStatus = "Data Retrieved";
    //      });
    // };  

    $scope.getSampleData = function(){
         $scope.loadStatus = "Retrieving Data...";
         $http.get("https://api.myjson.com/bins/weygz")
                      .then(function (response) {
                        $scope.issues = response.data.issues;
                        $scope.loadStatus = "Data Retrieved";
         });
    }; 

});