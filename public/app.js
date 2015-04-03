var app = angular.module('FlashCards', []);

app.controller('FlashCardController', function ($scope) {

    $scope.answerQuestion = function (answer) {
        if ($scope.answered) return;
        $scope.answered = true;
        if (answer.correct) $scope.answeredCorrectly = true;
        else $scope.answeredCorrectly = false;

    };
});

app.factory('FlashCardsFactory', function ($http) {
     return {

        getFlashCards: function (category) {

            var queryParams = {};

            if (category) {
                queryParams.category = category;
            }

            return $http.get('/cards', {
                params: queryParams
            }).then(function (response) {
                console.log(response);
                return response.data;
            });

        }

    };
});

app.controller ('MainController', function ($scope, FlashCardsFactory) {
    
     FlashCardsFactory.getFlashCards().then(function(response){
        $scope.flashCards = response;
        
    });

     $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
     ];

});
    