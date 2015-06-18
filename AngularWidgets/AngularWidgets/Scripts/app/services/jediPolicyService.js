(function () {
    var jediPolicyService = function ($q) {
        // Private
        var advanceToKnight = function (candidate) {
            var promise = $q(function (resolve, reject) {
                if (candidate.hasForce
                && ((candidate.yearsOfJediTraining > 20)
                    || candidate.isChosenOne
                    || ((candidate.master == "Yoda") && (candidate.yearsOfJediTraining > 3)))
                && candidate.masterApproves
                && candidate.passedTrials) {
                    candidate.rank = "Jedi Knight";
                    resolve(candidate);
                } else {
                    reject(candidate);
                }
            });

            return promise;
        }

        return {
            AdvanceToKnight: advanceToKnight
        };
    }

    window.app.factory("jediPolicyService", ["$q", jediPolicyService]);
})();