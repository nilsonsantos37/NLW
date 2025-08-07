const apiKeyInput = document.getElementById('apiKey');
const gameSelect = document.getElementById('gameSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const aiResponse = document.getElementById('aiResponse');
const form = document.getElementById('form');

const enviarFormulario = (event) => {
 event.preventDefault();
 const apiKey = apiKeyInput.value;
 const game = gameSelect.value;
 const question = questionInput.value;

 console.log({ apiKey, game, question});
 
  if(apiKey == '' || game == '' || question == '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  askButton.disabled = true;
  askButton.textContent = 'Perguntando...';
  askButton.classList.add('loading');
}

form.addEventListener('submit', enviarFormulario);