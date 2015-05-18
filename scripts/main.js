angular.module('App', []).controller('ItemListController', function($scope, $http) {

  var CategoryList = this;

  $http.get('data/list.json').success(function(data) {
    CategoryList.items = data;

    // 
    var hash = location.hash.substr(1);
    if (!hash) return ;

    var params = hash.split('/');
    var categoryId = params[0];
    var itemId = params[1];

    var category = CategoryList.items.filter(function(elm) {
      return elm.id == categoryId || elm.name == categoryId;
    })[0];
    category.active = true;

    var item = category.list.filter(function(elm) {
      return elm.id == itemId || elm.name == itemId;
    })[0];
    item.active = true;

    $('#frame').attr('src', item.link);

    setTimeout(function() {
      $('.collapsible').collapsible({
        accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    }, 1000);
  });

  $scope.init = function() {
  };

  $scope.click = function(item, elm) {
    var itemId = item.id || item.name;
    var elmId = elm.id || elm.name;

    location.hash = itemId + '/' + elmId;

    CategoryList.items.forEach(function(item) {
      item.list.forEach(function(elm) {
        elm.active = false;
      });
    });
    elm.active = true;
  };

});

window.onload = function() {
  $(".button-collapse").sideNav();
};
