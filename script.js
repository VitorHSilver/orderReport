document.addEventListener('DOMContentLoaded', () => {
     const submitButton = document.getElementById('submitButton');
     const loadingSpinner = document.getElementById('loadingSpinner');
     const itemForm = document.getElementById('form');
     const labelInsert = document.getElementById('input-insert');
     const inputField = document.querySelector('input[type="number"]');
     const itemList = document.getElementById('itemList');
     const textError = document.getElementById('error');

     let currentIndex = 0;

     const itens = [
          'Carne',
          'Linguiça',
          'Frango',
          'Coração',
          'Kafta',
          'Queijo qualho',
          'Queijo muçarela',
          'Tulipa',
          'Medalhão carne',
          'Medalhão frango',
          'Medalhão queijo',
          'Medalhão mandioca',
          'Misto',
          'Linguiça apimentada',
     ];

     // Função para exibir ou ocultar o spinner
     function toggleSpinner(show) {
          if (show) {
               loadingSpinner.classList.remove('hidden');
               loadingSpinner.classList.add('animate-spin');
          } else {
               loadingSpinner.classList.add('hidden');
               loadingSpinner.classList.remove('animate-spin');
          }
     }

     function errorText() {
          textError.add.classList.remove('hidden');
          textError.innerText = 'Insira um valor real';
     }

     // Função para atualizar o label com o próximo item
     function updateLabel() {
          console.log('Atualizando label...');
          if (labelInsert) {
               if (currentIndex < itens.length) {
                    labelInsert.textContent = `${itens[currentIndex]}:`;
                    console.log(`Label atualizado para: ${itens[currentIndex]}`);
               } else {
                    submitButton.disabled = true; // Desativa o botão ao final da lista
                    labelInsert.textContent = 'Todos os itens foram adicionados!';
                    console.log('Fim da lista de itens.');
               }
          } else {
               console.error('Elemento labelInsert não encontrado!');
          }
     }

     // Função para adicionar os dados à lista
     function addDataToList(value) {
          const li = document.createElement('li');
          li.textContent = `${itens[currentIndex]}: ${value}`;
          itemList.appendChild(li);
     }

     // Evento de submit do formulário
     itemForm.addEventListener('submit', (event) => {
          event.preventDefault();

          const quantity = inputField.value.trim(); // Captura o valor do input

          if (quantity !== '') {
               toggleSpinner(true); 
               setTimeout(() => {
                    toggleSpinner(false); 
               }, 5000);

               addDataToList(quantity);
               inputField.value = ''; 
               currentIndex++; 
               updateLabel(); 
          } else {
               alert('Por favor, insira uma quantidade válida.')
               
          }
     });

     updateLabel(); // Inicializa o label com o primeiro item
     errorText();
});
