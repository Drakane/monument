// Données des monuments
const monumentsData = {
    'tour-eiffel': {
        ville: 'Paris',
        pays: 'France',
        description: 'La Tour Eiffel est une tour de fer puddlé de 324 mètres de hauteur située à Paris. Construite en deux ans par Gustave Eiffel et ses collaborateurs pour l\'Exposition universelle de Paris de 1889, elle est devenue le symbole de la capitale française.',
        position: { lat: 48.8584, lng: 2.2945 }
    },
    'notre-dame': {
        ville: 'Paris',
        pays: 'France',
        description: 'Notre-Dame de Paris est la cathédrale de l\'archidiocèse de Paris. Sa construction s\'étend sur plus de deux siècles, de 1163 au milieu du XIVe siècle. Le style n\'est donc pas d\'une uniformité totale.',
        position: { lat: 48.8530, lng: 2.3499 }
    },
    'arc-triomphe': {
        ville: 'Paris',
        pays: 'France',
        description: 'L\'Arc de triomphe de l\'Étoile est un monument parisien situé sur la place de l\'Étoile, à l\'extrémité ouest de l\'avenue des Champs-Élysées. Il s\'élève au centre de la place Charles-de-Gaulle.',
        position: { lat: 48.8738, lng: 2.2950 }
    },
    'mont-saint-michel': {
        ville: 'Le Mont-Saint-Michel',
        pays: 'France',
        description: 'Le Mont-Saint-Michel est une commune française située dans le département de la Manche en Normandie. Elle tire son nom de l\'îlot rocheux consacré à saint Michel où s\'élève aujourd\'hui l\'abbaye du Mont-Saint-Michel.',
        position: { lat: 48.6361, lng: -1.5115 }
    },
    'versailles': {
        ville: 'Versailles',
        pays: 'France',
        description: 'Le château de Versailles est un château et un monument historique français qui se situe à Versailles, dans les Yvelines. Il fut la résidence des rois de France Louis XIV, Louis XV et Louis XVI.',
        position: { lat: 48.8044, lng: 2.1232 }
    }
};

// Fonction pour afficher les informations d'un monument
function afficherInformations(monumentId) {
    const footerContent = document.querySelector('.footer-content');
    const data = monumentsData[monumentId];
    
    // Supprimer les informations existantes s'il y en a
    const existingInfo = footerContent.querySelector('.monument-info');
    if (existingInfo) {
        existingInfo.remove();
    }
    
    if (data) {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'monument-info';
        infoDiv.innerHTML = `
            <h3>${monumentId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>
            <p><strong>Ville:</strong> ${data.ville}</p>
            <p><strong>Pays:</strong> ${data.pays}</p>
            <p>${data.description}</p>
            <iframe 
                width="100%" 
                height="300" 
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0" 
                src="https://www.openstreetmap.org/export/embed.html?bbox=${data.position.lng - 0.01}%2C${data.position.lat - 0.01}%2C${data.position.lng + 0.01}%2C${data.position.lat + 0.01}&layer=mapnik&marker=${data.position.lat}%2C${data.position.lng}"
                style="border: 1px solid #ccc; margin-top: 20px;">
            </iframe>
        `;
        footerContent.appendChild(infoDiv);
    }
}

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const monumentId = link.getAttribute('href').substring(1);
        afficherInformations(monumentId);
    });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const monumentId = card.id;
        afficherInformations(monumentId);
    });
});
