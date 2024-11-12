function getHeure() {
    const date = new Date();
    const heure = date.getHours();
    const minute = date.getMinutes();
    
    console.log(heure);
}

// Exporter la fonction getHeure() pour la rendre accessible depuis un autre fichier
export default {
    getHeure
};