var input = document.getElementById("searchbox");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
    }
});
function search() {
  var search1 = document.getElementById("searchbox")
  var search = search1.value
  window.open("https://www.google.com/search?q=" + search, "_parent")
}