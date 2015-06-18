(function () {
    window.app = angular.module("angularWidgets", ["ngRoute", "ui.bootstrap"]);

    window.app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "Scripts/app/views/Main.html",
                controller: "MainController"
            })
            .when("/directives", {
                templateUrl: "Scripts/app/views/Directives.html",
                controller: "DirectivesController"
            })
            .when("/directives/modal", {
                templateUrl: "Scripts/app/views/ModalDirective.html",
                controller: "ModalDirectivesController"
            })
            .when("/directives/structural", {
                templateUrl: "Scripts/app/views/StructuralDirectives.html",
                controller: "StructuralDirectivesController"
            })
            .when("/directives/nested", {
                templateUrl: "Scripts/app/views/NestedDirectives.html",
                controller: "NestedDirectivesController"
            })
            .when("/person/:login", {
                templateUrl: "Scripts/app/views/Person.html",
                controller: "PersonController"
            })
            .when("/questionnaire", {
                templateUrl: "Scripts/app/views/Questionnaire.html",
                controller: "QuestionnaireController"
            })
            .when("/repo/:login/:repoName", {
                templateUrl: "Scripts/app/views/Repo.html",
                controller: "RepoController"
            })
            .otherwise({ redirectTo: "/main" });
    });
})();