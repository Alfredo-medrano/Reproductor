const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource'); // Añadido para manejar la fuente
const lyricsContainer = document.getElementById('lyricsContainer');
const playPauseButton = document.getElementById('playPauseButton');
const songTitleElement = document.getElementById('songTitle');
const songCover = document.getElementById('songCover');
const urlParams = new URLSearchParams(window.location.search);
const song = urlParams.get('song');

const songsData = {
  1: {
    title: "Amor de Cine",
    file: 'Humbe – Amor de Cine (letra).mp3',
    cover: 'Amor de cine.jpg',
    dedication: "Esta canción simboliza nuestro amor digno de una película. Cada nota representa un momento especial que hemos compartido juntos."
  },
  2: {
    title: "Te Lo Prometo",
    file: 'HUMBE_-_Te_Lo_Prometo__Lyric_Video__[_YouConvert.net_].mp3',
    cover: 'Te lo prometo.jpg',
    dedication: "Con esta canción, te hago una promesa de amor eterno. Eres mi todo y quiero que siempre lo sepas."
  },
  3: {
    title: "Amor a Primera",
    file: 'Humbe_-_Amor_a_Primera_[_YouConvert.net_].mp3',
    cover: 'Amor a primera.jpg',
    dedication: "Esta canción refleja cómo me enamoré de ti desde el primer instante. Cada letra habla de la magia que trajo tu presencia a mi vida."
  },
  4: {
    title: "Confieso",
    file: 'Humbe_-_Confieso_[_YouConvert.net_].mp3',
    cover: 'Confieso.jpg',
    dedication: "A través de esta canción, confieso mis sentimientos más profundos. Eres la razón de mi felicidad y la inspiración de mis días."
  },
  5: {
    title: "Kintsugi",
    file: 'Kintsugi_-_Humbe____Letra______[_YouConvert.net_].mp3',
    cover: 'kintsugi.jpg',
    dedication: "Al igual que el arte del Kintsugi, nuestro amor ha reparado las imperfecciones y ha hecho de nuestras vidas algo más hermoso y único."
  }
};

function loadSong() {
  const selectedSong = songsData[song];
  
  console.log(`Canción seleccionada: ${song}`);
  console.log(selectedSong);
  
  if (!selectedSong) {
    alert('Canción no encontrada');
    window.location.href = 'home.html'; // Asegúrate de que el nombre del archivo sea correcto
    return;
  }
  
  // Actualizar la fuente del audio
  audioSource.src = selectedSong.file;
  audioPlayer.load(); // Cargar la nueva fuente
  
  // Actualizar el título de la canción
  songTitleElement.textContent = selectedSong.title;
  
  // Actualizar la imagen de portada
  songCover.src = selectedSong.cover;
  songCover.alt = `Portada de ${selectedSong.title}`;
  
  // Actualizar la dedicatoria
  lyricsContainer.innerHTML = `
    <div class="dedication-container bg-pink-200 p-6 rounded-lg shadow-lg">
      <h2 class="text-4xl font-bold mb-6">${selectedSong.title}</h2>
      <p class="text-2xl text-gray-800 mb-4">${selectedSong.dedication}</p>
      <div class="flex justify-center mt-6">
        <span class="text-6xl">&#10084;&#65039;</span>
        <span class="text-6xl ml-4">&#128153;</span>
        <span class="text-6xl ml-4">&#128154;</span>
      </div>
    </div>
  `;
  
  console.log(`Reproduciendo: ${selectedSong.file}`);
}

playPauseButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = 'Pausar';
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = 'Reproducir';
  }
});

window.onload = loadSong;
