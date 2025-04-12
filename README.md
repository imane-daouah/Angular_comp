`ng new Front-End --no-standalone` :  
Cette commande permet de créer un nouveau projet Angular **en utilisant le système basé sur les modules** (et non les composants standalone).

🔹 Il est recommandé d’utiliser les **composants standalone** si vous travaillez avec **un seul module ou une architecture légère**.  
🔹 Mais dans notre cas, comme nous utilisons plusieurs composants organisés avec des **modules Angular classiques**, on utilise l’option `--no-standalone`.


📘 **Mini App Angular – Home & Products**

🛠 Description

Une mini-application Angular avec deux composants :

HomeComponent : Affiche un message statique.

ProductsComponent : Affiche une liste de produits avec un bouton de suppression et une fonctionnalité de recherche.

🚀 Démarrage rapide
1. Cloner le projet
```powershell
git clone https://github.com/imane-daouah/Angular_comp.git
```
2. Cloner le projet
```powershell
cd Angular_comp
```

4. Installer les dépendances
```powershell
npm install
```
4. Lancer le serveur de développement
```powershell
ng serve
```
5.Ouvrir dans votre navigateur
```powershell
http://localhost:4200
```

🧩 Fonctionnalités
-Navigation entre Home et Products

🔹Affichage d'une liste de produits

🔹Suppression d’un produit

🔹Recherche de produits par nom

🔹Boutons stylisés dynamiquement selon la route active


![image](https://github.com/user-attachments/assets/dadba606-e96e-4968-82c7-5480380a8afc)


