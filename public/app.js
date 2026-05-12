document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = 'Inscrição confirmada!';
});
