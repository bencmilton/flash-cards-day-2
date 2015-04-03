app.controller ('MainController', function ($scope, FlashCardsFactory) {

    $scope.getFlashCardsByCategory = function (category) {
        FlashCardsFactory.getFlashCards(category).then(function (response) {
            $scope.isActive = category;
            $scope.flashCards = response;
        });
    };

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
