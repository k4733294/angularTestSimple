angular.module('todolistapp',[]);

function todocontroller($scope) {  
  $scope.newItem = "";  
  $scope.todoList = [{ label: "買牛奶" }, { label: "繳電話費" }];  
  $scope.additem = function(){

  }
}  
