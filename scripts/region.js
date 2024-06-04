/*preciso setar o local e com base no local, retornar todos os parceiros da categoria escolhida.
então se local a, deve-se retornar categorias x, y, z presentes no local a ( logo categorias estão em função do local definido). 
o local default é nova york. dpara o futuro - fazer local com base na local do telemovel.


    */


if (typeof document !== 'undefined') {

   // Get the elements
const regionButton = document.getElementById('selectRegionButton');
const regionModal = document.getElementById('regionModal');
const localList = document.getElementById('local-list');
const closeButton = document.querySelector('.close');
const regionLabel = document.querySelector('.region-button span'); 

    // Initial selected region (can be set to your default region)
    let selectedRegion = 'New York';
    regionLabel.textContent = selectedRegion; // Update the button label.

    // Open the modal when the button is clicked
regionButton.addEventListener('click', () => {
    regionModal.style.display = 'block';
  });

  //Close the modal when the close button is clicked
  closeButton.addEventListener('click', () => {
    regionModal.style.display = 'none';
  });

  // Select a region from the list
localList.addEventListener('click', (event) => {
    const clickedRegion = event.target.dataset.region;
    if (clickedRegion) {
      selectedRegion = clickedRegion;
      regionLabel.textContent = selectedRegion; // Update the button label
    }
  });


    }

