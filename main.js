document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#button');
  
    const jsConfetti = new JSConfetti();
    
    button.addEventListener('click', () => {
        jsConfetti.addConfetti({
          /*emojis: ['🎥'],
            emojiSize: 40,*/
           confettiRadius: 3,// Tamaño del confeti (en píxeles)
           confettiNumber: 500,// cantidad de condeti
        });
    });
  });
