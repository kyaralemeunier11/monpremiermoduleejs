// Importer la fonction getHeure() qui se trouve dans le fichier generate.js
import getHeure from "./generate.js";

// Importer la variable nom qui se trouve dans le ficher user.js
import {nom} from "./user.js";
let nomUtilisateur = document.querySelector("#nom");
nomUtilisateur.textContent = nom;

//2. importer l'objet utilisateur 
import { utilisateur } from "./user.js";
let monUtilisateur = document.querySelector("#nomUtilisateur");
monUtilisateur.textContent = utilisateur.nom;

let prenomUtilisateur = document.querySelector("#prenomUtilisateur");
prenomUtilisateur.textContent = utilisateur.prenom;

let villageUtilisateur = document.querySelector("#villageUtilisateur");
villageUtilisateur.textContent = utilisateur.village;

/*const heureCourant = getHeure;
console.log(heureCourant);*/