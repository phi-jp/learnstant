angular.module('App', []).controller('ItemListController', function($scope) {

  var CategoryList = this;
  CategoryList.items = [
    {
      id: 'var',
      name: '変数を学ぼう',
      list: [
        {name:'hoge', link:'http://goo.gl/KMf0lh'},
        {name:'foo', link:'http://goo.gl/zrPq4d'},
        {name:'bar', link:'hoge.html'},
      ],
    },
    {
      name: 'if 文を学ぼう',
      list: [
        {name:1, link:'hoge.html'},
        {name:2, link:'hoge.html'},
        {name:3, link:'hoge.html'},
      ],
    },
  ];


  $scope.init = function() {
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
  };

  $scope.click = function(item, elm) {
    var itemId = item.id || item.name;
    var elmId = elm.id || elm.name;

    location.hash = itemId + '/' + elmId;

    item.list.forEach(function(elm) {
      elm.active = false;
    });
    elm.active = true;
  };

});

window.onload = function() {
  $(".button-collapse").sideNav();
};
