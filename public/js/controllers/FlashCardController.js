app.controller('FlashCardController', function ($scope, ScoreFactory) {

    $scope.answerQuestion = function (answer) {
        if ($scope.answered) return;
        $scope.answered = true;
        if (answer.correct) {
            $scope.answeredCorrectly = true;
            ScoreFactory.correct ++;
        }
        else {
            $scope.answeredCorrectly = false;
            ScoreFactory.incorrect ++;
        }
    };
});