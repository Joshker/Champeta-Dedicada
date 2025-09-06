// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Es muy cierto, me tienes enamorado💘", time: 75 },
  { text: "Y me siento feliz sólo a tu lado🥺", time: 81 },
  { text: "Si doscientas mujeres vienen a mí🙄", time: 85 },
  { text: "No dudo ni un momento, y a todas me tocaría decirles que🤷‍♂️", time: 90 },
  { text: "Me quedo contigo una y mil veces😍", time: 95 },
  { text: "Porque tu amor, eso ya no se ve👀", time: 100 },
  { text: "Me haces sentir vivo, tú me enloqueces😵", time: 104 },
  { text: "Como un tambor, voy a tocar tu piel😏", time: 110 },
  { text: "Es muy cierto, me tienes enamorado💘", time: 114 },
  { text: "Y me siento feliz sólo a tu lado🥺", time: 118 },
  { text: "Si doscientas mujeres vienen a mí🙄", time: 124 },
  { text: "No dudo ni un momento, y a todas me tocaría decirles que🤷‍♂️", time: 128 },
  { text: "...", time: 134 },
  { text: "Y es que tú, sólo tú, sí tú, tú, tú, tú🤞", time: 152 },
  { text: "Tú tienes lo que me detiene🖐", time: 155 },
  { text: "Cuando tú caminas, mi mente imagina🤔", time: 156.5 },
  { text: "Que toco tu cuerpo entero como un tambor😍", time: 159 },
  { text: "Y tú, sólo tú, sí tú, tú, tú, tú, tú🤞", time: 162 },
  { text: "Tú eres la que me enloquece😵", time: 164 },
  { text: "Y dejas que te abrace, y dejas que te bese😘", time: 166 },
  { text: "Que cuando termina la noche te hago el amor💞", time: 168 },
  { text: "Amor💕", time: 171 },
  { text: "Y es que nunca me dices que no❌", time: 172 },
  { text: "Quien te conoce a ti soy yo😼", time: 174 },
  { text: "Quien te toca como un tambor, como un tambor, tambor🥁", time: 177 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);