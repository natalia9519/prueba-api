  function searchCharacter() {
    const searchQuery = document.getElementById('searchInput').value;
    fetch(`https://hp-api.onrender.com/api/characters`)
      .then(response => response.json())
      .then(data => {
        const character = data.find(character => character.name.toLowerCase() === searchQuery.toLowerCase());
        if (character) {
          const characterInfo = document.getElementById('characterInfo');
          characterInfo.innerHTML = `
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <p>Patronus: ${character.patronus}</p>
           
            <!-- Add more details as needed -->
          `;
          const characterInfo2 = document.getElementById('characterInfo2');
          characterInfo2.innerHTML = `
            
            <img src="${character.image}" alt="${character.name}"  class="img-rana">
            
           
            <!-- Add more details as needed -->
          `;
        } else {
          const characterInfo = document.getElementById('characterInfo');
          characterInfo.innerHTML = 'MUGGLE, Escribe bien';
        }
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }

