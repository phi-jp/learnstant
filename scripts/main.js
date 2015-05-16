angular.module('todoApp', []).controller('ItemListController', function() {

  var todoList = this;
  todoList.items = [
    {
      name: '変数を学ぼう',
      list: [
        {name:1, link:'http://goo.gl/KMf0lh'},
        {name:2, link:'http://goo.gl/zrPq4d'},
        {name:3, link:'hoge.html'},
      ]
    },
    {
      name: 'if 文を学ぼう',
      list: [
        {name:1, link:'hoge.html'},
        {name:2, link:'hoge.html'},
        {name:3, link:'hoge.html'},
      ]
    },
  ];

});

window.onload = function() {
  $(".button-collapse").sideNav();
};
