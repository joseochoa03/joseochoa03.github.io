const videos = {
    "Videos Recientes": [
        { id: "eIM5SGKw9b0", title: "La música y sus verdades" },
        { id: "Jp4FWhk6j9Y", title: "¿Usted sabía que hay canciones cristianas diabólicas?" },
        { id: "ApZ3v5UWVD4", title: "El clásico y el actual" }
    ],
    "Videos de Amor": [
        { id: "FXAfUFhafsI", title: "Amor Divino" },
        { id: "ajsbFJdOZGE", title: "El Poder del Amor" }
    ],
    "Videos de Fe": [
        { id: "W3yi54Z5Fk4", title: "Fortalecer la Fe" }
    ],
    "Videos de Abundancia": [
        { id: "p8vA9Hj88HM", title: "Prosperidad Espiritual" }
    ],
    "Videos de Felicidad": [
        { id: "kZ-gw26lFcw", title: "Alegría en Cristo" },
        { id: "zrSDG4DGSHc", title: "Gozo Espiritual" },
        { id: "_vbws3WZ4sY", title: "Felicidad Verdadera" },
        { id: "NTr_l9bdhZA", title: "Paz Interior" },
        { id: "LKYuKL5MyXU", title: "Vivir con Propósito" }
    ],
    "Videos de Intimidad con Dios": [
        { id: "H_05FmHcqlM", title: "Cercanía Divina" },
        { id: "2z1pKAVoJMk", title: "Comunión con Dios" },
        { id: "oTLZ2Tk5QPs", title: "Oración Profunda" },
        { id: "TPLzAGD5H6M", title: "Presencia de Dios" }
    ]
};

let currentVideoIndex = 0;
let currentCategory = "";

function loadVideos() {
    const panel = document.getElementById('videoPanel');
    panel.innerHTML = '';

    for (const [category, videoList] of Object.entries(videos)) {
        const section = document.createElement('div');
        section.className = 'video-section';
        section.innerHTML = `<h3>${category}</h3>`;

        const ul = document.createElement('ul');
        ul.className = 'video-list';

        videoList.forEach((video, index) => {
            const li = document.createElement('li');
            li.textContent = video.title;
            li.onclick = () => playVideo(category, index);
            ul.appendChild(li);
        });

        section.appendChild(ul);
        panel.appendChild(section);
    }
}

function playVideo(category, index) {
    currentCategory = category;
    currentVideoIndex = index;
    const video = videos[category][index];
    document.getElementById('currentVideo').src = `https://www.youtube.com/embed/${video.id}`;
}

function searchVideos() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    for (const [category, videoList] of Object.entries(videos)) {
        const foundIndex = videoList.findIndex(video => video.title.toLowerCase().includes(query));
        if (foundIndex !== -1) {
            playVideo(category, foundIndex);
            return;
        }
    }
    alert("No se encontraron videos con ese título.");
}

function closeForm() {
    document.getElementById('welcomeForm').style.display = 'none';
}

function updateVisitCount() {
    let count = localStorage.getItem('visitCount');
    if (count === null) {
        count = 99897898;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem('visitCount', count);
    document.getElementById('visitCount').textContent = count.toLocaleString(); 
}

window.onload = () => {
    loadVideos();
    playVideo("Videos Recientes", 0);
    updateVisitCount();
};
