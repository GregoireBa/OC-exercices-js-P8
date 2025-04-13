// Fonction pour ajouter un chiffre ou un opérateur dans l'affichage
function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
}

// Fonction pour réinitialiser complètement l'affichage (comme un "reset")
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Fonction pour calculer le résultat de l'opération entrée
function calculateResult() {
  const display = document.getElementById('display');
  const expression = display.value;

  // Vérifie si l'expression contient une division par zéro
  if (/\/\s*0(?![0-9])/.test(expression)) {
    display.value = 'Division by zero is not allowed';
    return;
  }

  try {
    // Si pas de division par 0, on évalue normalement
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = 'Erreur';
  }
}
