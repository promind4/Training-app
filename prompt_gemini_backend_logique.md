# Prompt d'introduction — Gemini (logique fonctionnelle)

## Contexte

Je développe une application mobile de coaching sportif et nutritionnel personnalisée, pour un usage strictement personnel (pas de commercialisation).

Le **front-end / design de l'interface a déjà été réalisé** via Claude Code. Tu as accès au dossier du projet. Ton rôle est de rendre l'application **fonctionnelle** : implémenter toute la logique métier, les timers, la gestion des données, et la navigation entre les écrans.

---

## Profil utilisateur

- 28 ans · 1,90 m · 120 kg
- Objectif : recomposition corporelle (perdre ~20 kg de graisse, gagner du muscle)
- Niveau : intermédiaire en musculation

---

## Ce que l'application doit faire — fonctionnalités à implémenter

### 1. Timers de séance

- Chaque exercice a un temps de repos défini (entre 60 sec et 3 min selon le type)
- Quand l'utilisateur appuie sur "Série terminée", le timer de repos se déclenche automatiquement
- À la fin du timer : vibration + son + passage automatique à la série ou à l'exercice suivant
- Timer circulaire avec compte à rebours visible en grand
- Le timer doit pouvoir être modifié à la volée pendant la séance (ex : l'utilisateur peut ajouter 30 sec s'il n'est pas récupéré)

**Types de finishers à gérer :**
- **AMRAP** : compte à rebours global (ex : 10 min) + compteur de tours incrémenté manuellement
- **HIIT** : alternance automatique effort / repos avec couleurs distinctes (ex : 8 × 20 sec effort / 40 sec repos)
- **Steady** : simple compte à rebours (ex : rameur 5 min)

### 2. Gestion des plannings et exercices

- Deux plannings disponibles : 4 jours et 5 jours (voir fichier brief joint)
- L'utilisateur choisit son planning actif en début de semaine
- **Tout doit être configurable sans toucher au code :**
  - Ajouter / supprimer / remplacer un exercice
  - Modifier séries, reps, temps de repos
  - Déplacer une séance sur un autre jour
  - Créer une séance personnalisée
  - Réordonner les exercices par glisser-déposer
- Les données du planning sont stockées **localement sur le téléphone** (pas de backend distant, pas de compte utilisateur)
- Un bouton "Réinitialiser aux valeurs par défaut" remet le planning original

### 3. Suivi des séances

- L'utilisateur peut cocher chaque série comme complétée
- Il peut noter la charge utilisée pour chaque exercice (ex : "Squat barre — 80 kg")
- Historique des 4 dernières semaines : séances complétées, charges notées
- Graphique de progression simple sur les exercices principaux

### 4. Calculateur nutritionnel (tracker journalier)

- Saisie libre : l'utilisateur entre les calories et/ou les macros d'un repas ou d'un aliment (pas de base de données d'aliments)
- **4 barres de progression en temps réel avec pourcentage :**
  - Calories
  - Protéines (g)
  - Glucides (g)
  - Lipides (g)
- Code couleur automatique : vert < 90 %, orange 90–100 %, rouge si dépassement
- **Basculement automatique** entre les objectifs selon le planning :
  - Jour d'entraînement : 2 800 kcal · 265 g prot · 280 g gluc · 80 g lip
  - Jour de repos : 2 300 kcal · 265 g prot · 180 g gluc · 80 g lip
- L'utilisateur peut forcer manuellement le mode (jour sport ou repos)
- Les objectifs de macros sont modifiables dans les réglages
- **Tracker eau** : boutons +250 ml / +500 ml, objectif 3 L / jour, barre de progression
- Les saisies sont organisées par repas (Petit-déj / Déjeuner / Collation / Dîner / Collation soir) ou en entrées libres
- Historique des 7 derniers jours : moyenne calorique, protéines moyennes, nb de jours où les objectifs ont été atteints

### 5. Stockage des données

- Tout est stocké **localement** (AsyncStorage sur React Native, localStorage/IndexedDB sur PWA)
- Aucun compte utilisateur, aucun serveur distant
- Les données persistent entre les sessions
- Possibilité d'exporter ses données (JSON) pour sauvegarde manuelle

---

## Données complètes des plannings

Le fichier `brief_app_sport_claude_code.md` joint contient :
- Les deux plannings complets (4j et 5j) avec tous les exercices
- Les séries, reps et temps de repos pour chaque exercice
- Les macros nutritionnelles détaillées
- La structure JSON de base pour les données

---

## Ce que tu dois faire en premier

1. Analyser la structure du projet front-end existant (dossier joint)
2. Identifier le framework utilisé et la structure des composants
3. Implémenter en priorité :
   - La logique du timer (composant réutilisable)
   - Le stockage local des données de planning
   - Le calculateur nutritionnel avec les barres de progression en temps réel
4. Ensuite : navigation entre les écrans, historique, configurabilité

---

## Contraintes importantes

- Application **100 % personnelle**, pas de commercialisation → pas besoin de conformité App Store stricte
- **Pas de backend** : tout fonctionne en local sur le téléphone
- Doit fonctionner sur **iOS et Android**
- Si c'est une PWA : doit fonctionner hors ligne (Service Worker)
- Code propre et commenté pour que des modifications futures soient faciles
