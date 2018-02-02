app.controller('newsController', function($scope, newsService) {

    init();

    function init() {
        $scope.newsList = newsService.getNews();
    }

    $scope.addNews = function() {
        var title = $scope.newNews.title;
        var category = $scope.newNews.category;
        var name = $scope.newNews.name;
        var imgUrl = $scope.newNews.imgUrl;
        var content = $scope.newNews.content;
        var date = Date();
        newsService.addNews(title, category, name, imgUrl, content, date);
        $scope.newNews.title = '';
        $scope.newNews.category = '';
        $scope.newNews.name = '';
        $scope.newNews.imgUrl = '';
        $scope.newNews.content = '';
        console.log($scope.newsList);
    };

    $scope.deleteNews = function(id) {
        newsService.deleteNews(id);
    };
});


app.controller('userController', function($scope, userService) {

    initial();

    function initial() {
        $scope.users = userService.getUsers();
    }

    $scope.regUser = function() {
        var username = $scope.newUser.username;
        var password = $scope.newUser.password;
        var email = $scope.newUser.email;
        userService.regUser(username, password, email);
        $scope.newUser.username = '';
        $scope.newUser.password = '';
        $scope.newUser.email = '';
        console.log($scope.users);
    }

    $scope.loginUser = function() {
        var username = $scope.user.username;
        var password = $scope.user.password;
        userService.loginUser(username, password);
        $scope.user.username = '';
        $scope.user.password = '';
    }
});