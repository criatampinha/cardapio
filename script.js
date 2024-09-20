// Função para ler a descrição do prato
function readDescription(dishId) {
    const descriptionElement = document.querySelector(`#${dishId} p`);
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(descriptionElement.textContent);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Desculpe, seu navegador não suporta a API de síntese de fala.");
    }
}
