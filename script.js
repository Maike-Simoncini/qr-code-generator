// Função para gerar o QR Code
function gerarQRCode() {
    const entrada = document.getElementById('entrada').value; // Obtém o texto digitado
    const qrcodeContainer = document.getElementById('qrcode'); // Elemento onde o QR Code será exibido

    if (entrada.trim() === '') {
        alert('Por favor, digite uma palavra ou frase.');
        return;
    }

    // Limpa o conteúdo anterior do contêiner
    qrcodeContainer.innerHTML = '';

    // Gera o código QR usando a biblioteca QRCode.js
    QRCode.toCanvas(entrada, { width: 200 }, (error, canvas) => {
        if (error) {
            console.error('Erro ao gerar o QR Code:', error);
            return;
        }
        // Adiciona o canvas ao contêiner
        qrcodeContainer.appendChild(canvas);
    });
}