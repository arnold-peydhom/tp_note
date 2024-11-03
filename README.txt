NOMS : GABISSI PEYDHOM ARNOLD LANDRY  E4 DWM ESTIAM

THEME: AGENDA DE CONTACT 
en gros l'api permet a aux utiliser de gerer leur contact en effectuant des operation de crud .
et il permet egalement au super admin de visualiser tout les contacts creer dans l'application


 PS: j'ai travailler sur le projet tout seul

 DIFFICULTES RENCONTRES :
 les difficultes rencontres ont ete particulierement au niveau des etapes suivantes :

    * Gestion des rôles et permissions 
            Création d' un middleware ou un Guard NestJS pour gérer l’authentification avec JWT et vérifier le rôle admin ou user selon les accès requis.
    *Documentation avec Swagger
    *Configuration de Swagger :
            Documentation de chaque endpoint dans Swagger pour inclure :
            Les types de données pour les requêtes POST et PATCH.
            Les réponses HTTP en cas de succès ou d'erreur.
            Les formats de données renvoyées et les informations d'accès (avec ou sans JWT).

    *Filtres et Pagination :
            l'Ajout un filtre par paramètres d’URL sur au moins un endpoint (par exemple, filtre par name ou email pour les contacts).
            Implémentation d' une pagination pour la liste des contacts (GET /contacts), limitant les résultats pour améliorer la performance.
            
    *la Validation et Sécurité :
            l'Ajout des validations des entrées utilisateurs avec class-validator.
            la Configuration des protections CORS et utilisation de Helmet pour sécuriser les headers HTTP.

Methode de resolution des problemes

            utilisation de la documentation de drizzle, swagger, NestJS + video youtube a l'appuie https://youtu.be/tJt2MoT_BpU  
            je me suis egalement inspirer d'anciens projets ainsi que de mon experience personnel

            
           