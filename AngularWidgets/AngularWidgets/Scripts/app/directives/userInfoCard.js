(function () {
    var userInfoCard = function (jediPolicyService) {
        return {
            templateUrl: "Scripts/app/views/UserInfoCard.html",
            restrict: "E",
            scope: {
                user: "=",
                initialCollapsed: "@collapsed"
            },
            controllerAs: "vm",
            bindToController: true,
            controller: function ($modal) {
                var that = this;

                var collapse = function () {
                    this.collapsed = !this.collapsed;
                };

                var onKnightError = function(user) {
                    alert("Sorry, " + user.name + " is not ready to become a Jedi Knight!");
                };

                var knightMe = function (user) {
                    var modalInstance = $modal.open({
                        templateUrl: "Scripts/app/views/KnightConfirmation.html",
                        controller: "KnightConfirmationController",
                        resolve: {
                            user: function () {
                                return that.user;
                            }
                        }
                    });

                    modalInstance.result.then(knightDialogDone);
                };

                var nextState = function () {
                    this.user.level++;
                    this.user.level = (this.user.level % 3);
                };

                var removeFriend = function (friend) {
                    var index = this.user.friends.indexOf(friend);
                    if (index > -1) {
                        this.user.friends.splice(index, 1);
                    }
                };

                var knightDialogDone = function (response) {
                    if (response) {
                        jediPolicyService.AdvanceToKnight(that.user)
                            .then(null, onKnightError);
                    }
                };

                this.collapsed = (this.initialCollapsed === "true");
                this.Collapse = collapse;
                this.KnightDialogDone = knightDialogDone;
                this.KnightMe = knightMe;
                this.NextState = nextState;
                this.RemoveFriend = removeFriend;
            }
        };
    };

    window.app.directive("userInfoCard", ["jediPolicyService", userInfoCard]);
}());