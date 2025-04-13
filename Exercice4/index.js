// On attend que le DOM soit chargé (au cas où le script serait déplacé dans le <head>)
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
  
    button.addEventListener('click', () => {
      // Vérifie s'il y a déjà un paragraphe, pour éviter d'en créer plusieurs
      let message = document.getElementById('clickMessage');
      if (!message) {
        message = document.createElement('p');
        message.id = 'clickMessage';
        message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
        button.insertAdjacentElement('afterend', message);
      }
    });
  });
  