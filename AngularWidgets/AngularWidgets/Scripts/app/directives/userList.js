(function () {
    var userList = function ($compile) {
        return {
            restrict: "A",
            transclude: "element",
            link: function (scope, element, attributes, controller, transclude) {
                var pieces = attributes["userList"].split(" ");
                var itemString = pieces[0];
                var collectionName = pieces[2];
                var elements = [];

                scope.$watchCollection(collectionName, function (collection) {
                    for (var index = 0; index < elements.length; index++) {
                        elements[index].element.remove();
                        elements[index].scope.$destroy();
                    }
                    elements = [];

                    for (var index = 0; index < collection.length; index++) {
                        var childScope = scope.$new();
                        childScope[itemString] = collection[index];
                        transclude(childScope, function (clone) {
                            var template = $compile("<div class=\"panel panel-primary\"><div class=\"panel-heading\">Name: {{ " + itemString + ".name }}</div><div class=\"panel-body\"></div></div>");
                            var wrapper = template(childScope);
                            wrapper.find(".panel-body").append(clone);

                            element.before(wrapper);
                            var item = {};
                            item.element = wrapper;
                            item.scope = childScope;
                            elements.push(item);
                        });
                    }
                });
            }
        }
    };

    window.app.directive("userList", ["$compile", userList]);
}());