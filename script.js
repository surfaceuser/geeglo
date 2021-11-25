function search() {
  var search1 = document.getElementById("searchbox")
  var search = search1.value
  window.open("https://www.google.com/search?q=" + search, "_parent")
}