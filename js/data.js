  /// ESTE YA MUESTRA HASTA FOTO PERO NO EL OBJETO QUE YO BUSCO

  // function searchCharacter() {
  //   const searchQuery = document.getElementById('searchInput').value;
  //   fetch(`https://hp-api.onrender.com/api/characters?name=${searchQuery}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       const characterInfo = document.getElementById('characterInfo');
  //      console.log('characterInfo')
  //       if (data.length >= 0) {
  //         const searchedCharacter = data[0]; 
  //         characterInfo.innerHTML = `
  //           <h2>${searchedCharacter.name}</h2>
  //           <p>House: ${searchedCharacter.house}</p>
  //           <p>Patronus: ${searchedCharacter.patronus}</p>
  //           <img src="${searchedCharacter.image}" alt="${searchedCharacter.name}">
  //             `;
  //       } else {
  //         characterInfo.innerHTML = 'Character not found';
  //       }
  //     })
  //   .catch(error => {
  //     console.error('Error fetching character:', error);
  //   });
  // }


  //ESTE ME DICE QUE NO EXISTE NADA
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
          characterInfo.innerHTML = 'Personaje no encontrado, pon bien el nombre y apellidos';
        }
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }

