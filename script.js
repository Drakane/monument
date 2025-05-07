// Données des monuments
const monumentsData = {
    'tour-eiffel': {
        ville: 'Paris',
        pays: 'France',
        description: 'La Tour Eiffel est une tour de fer puddlé de 324 mètres de hauteur située à Paris. Construite en deux ans par Gustave Eiffel et ses collaborateurs pour l\'Exposition universelle de Paris de 1889, elle est devenue le symbole de la capitale française.'
    },
    'notre-dame': {
        ville: 'Paris',
        pays: 'France',
        description: 'Notre-Dame de Paris est la cathédrale de l\'archidiocèse de Paris. Sa construction s\'étend sur plus de deux siècles, de 1163 au milieu du XIVe siècle. Le style n\'est donc pas d\'une uniformité totale.'
    },
    'arc-triomphe': {
        ville: 'Paris',
        pays: 'France',
        description: 'L\'Arc de triomphe de l\'Étoile est un monument parisien situé sur la place de l\'Étoile, à l\'extrémité ouest de l\'avenue des Champs-Élysées. Il s\'élève au centre de la place Charles-de-Gaulle.'
    },
    'mont-saint-michel': {
        ville: 'Le Mont-Saint-Michel',
        pays: 'France',
        description: 'Le Mont-Saint-Michel est une commune française située dans le département de la Manche en Normandie. Elle tire son nom de l\'îlot rocheux consacré à saint Michel où s\'élève aujourd\'hui l\'abbaye du Mont-Saint-Michel.'
    },
    'versailles': {
        ville: 'Versailles',
        pays: 'France',
        description: 'Le château de Versailles est un château et un monument historique français qui se situe à Versailles, dans les Yvelines. Il fut la résidence des rois de France Louis XIV, Louis XV et Louis XVI.'
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
