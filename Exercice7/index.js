// Fonction appelée au clic sur le bouton "Convertir"
function convertToBinary() {
    const input = document.getElementById('decimalInput').value;
    const resultDisplay = document.getElementById('binaryResult');
  
    // Je transforme l'entrée en nombre entier
    const decimal = parseInt(input, 10);
  
    // Si l'entrée est vide, ou que ce n'est pas un nombre strictement valide
    if (input.trim() === '' || isNaN(decimal) || decimal.toString() !== input.trim()) {
      resultDisplay.textContent = ''; // On laisse le champ vide
      return;
    }
  
    // Conversion en binaire
    const binary = decimal.toString(2);
    resultDisplay.textContent = `Binaire : ${binary}`;
  }
  