jQuery("#info").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append("<h2>Here is useful information</h2>");
});

jQuery("#credits").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append("<h2>Here are the credits</h2>");
});

jQuery("#top").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append("<h2>The best player is the ROCK</h2>");
});
