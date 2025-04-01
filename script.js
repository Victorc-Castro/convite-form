// Estrutura JS do input file
document.getElementById("file-input").addEventListener("change", function(event) {
  let fileName = event.target.files.length > 0 ? event.target.files[0].name : "Nenhum arquivo selecionado"; document.getElementById("file-name").innerHTML = "image.png";
});

document.getElementById("file-input").addEventListener("change", function() {
  let file = this.files[0];
  let erroMsg = document.getElementById("errorMsg");

  if (file) {
    let allowedTypes = ["image/png", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) { 
      errorMsg.textContent = "Apenas arquivos PNG e JPG são permitidos";
      this.value = "";
    } else {
      erroMsg.textContent = "";
    }
  }
});


















// Estrutura JS do input checkbox
var checkbox = document.getElementById("switch");
var text = document.getElementById("switch-text");

checkbox.addEventListener("change", function() {
  text.textContent = this.checked ? "Claro" : "Escuro";
});