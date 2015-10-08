import Ember from 'ember';

export default Ember.Controller.extend({
    foo: "IndexController",
    isLoggedIn: false,
    className: "red",
    data: "",
    buttonEnabled: true,
    actions: {
        toggleColor: function() {
            if (this.get("className") === "red") {
                this.set("className", "blue");
            } else {
                this.set("className", "red");
            }
        },
        fetchAjax: function() {
            this.set("buttonEnabled", false);
            var self = this;
            console.log(this);
            Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls').then(function(data) {
                self.set("data", data);
                self.set("buttonEnabled", true);
            });
        },
    }
});
