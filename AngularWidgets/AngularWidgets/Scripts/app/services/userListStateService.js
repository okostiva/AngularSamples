(function () {
    var userListStateService = function () {
        return {
            selectedUser: null
        };
    }

    window.app.factory("userListStateService", [userListStateService]);
})();