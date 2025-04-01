document.getElementById("file-input").addEventListener("change", function(event) {
  let fileName = event.target.files.length > 0 ? event.target.files[0].name : "Nenhum arquivo selecionado"; document.getElementById("file-name").innerHTML = "image.png";
});

var checkbox = document.getElementById("switch");
var text = document.getElementById("switch-text");

checkbox.addEventListener("change", function() {
  text.textContent = this.checked ? "Claro" : "Escuro";
});