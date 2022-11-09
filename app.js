let onSuccess = function(data) {
    console.log(data);
    $("img").attr("src",data.message);
};

let onError = function() {
    console.log("Qualcosa è andato storto...");
}


let onSubmit = function(event) {
    console.log("Submit!");
    event.preventDefault();
    $.getJSON("https://dog.ceo/api/breed/"+$("#search-dog").val() +"/images/random")
    .done(onSuccess)
    .fail(onError);
}

$("form").submit(onSubmit);