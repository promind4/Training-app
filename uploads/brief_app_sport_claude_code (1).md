# Brief — Application mobile coaching sportif & nutrition
## Pour Claude Code (design d'interface) → Gemini (code fonctionnel)

---

## 1. Profil utilisateur

| Donnée | Valeur |
|--------|--------|
| Âge | 28 ans |
| Taille | 1,90 m |
| Poids | 120–125 kg |
| Masse maigre estimée | ~84 kg |
| Masse grasse estimée | 30–32 % |
| Objectif principal | Recomposition corporelle : perdre ~20 kg de graisse, prendre du muscle |
| Durée estimée | 10–12 mois |

---

## 2. Objectifs de l'application

L'app doit servir de **coach de poche personnel** pendant les séances. Elle doit :

- Afficher les exercices un par un avec timer automatique
- Passer automatiquement à l'exercice suivant à la fin du temps de repos
- Permettre de cocher chaque série comme complétée
- Afficher les deux plannings (4 jours / 5 jours) et laisser l'utilisateur choisir
- Intégrer un rappel nutritionnel quotidien (macros du jour)
- Fonctionner **sur mobile** (iOS & Android) — priorité absolue au design mobile

---

## 3. Planning 5 jours (+ samedi optionnel)

### Lundi — Force Poussé · Pecto / Épaules / Triceps · ~1h05

**Exercices principaux**
| Exercice | Séries | Reps | Repos |
|----------|--------|------|-------|
| Développé couché barre | 5 | 5 | 3 min |
| Développé incliné haltères | 4 | 8–10 | 2 min 30 |
| Développé militaire debout | 4 | 6–8 | 2 min 30 |

**Accessoires**
| Exercice | Séries | Reps | Repos |
|----------|--------|------|-------|
| Dips lestés | 3 | 8–10 | 90 sec |
| Élévations latérales | 3 | 15 | 60 sec |

**Finisher mental — 10 min**
- AMRAP : 10 pompes + 10 dips → max tours en 10 min (timer compte à rebours)

---

### Mardi — Force Tiré · Dos / Biceps / Trapèzes · ~1h05

**Exercices principaux**
| Exercice | Séries | Reps | Repos |
|----------|--------|------|-------|
| Tractions lestées | 5 | 5 | 3 min |
| Soulevé de terre | 4 | 5 | 3 min |
| Rowing barre | 4 | 6–8 | 2 min 30 |

**Accessoires**
| Exercice | Séries | Reps | Repos |
|----------|--------|------|-------|
| Tirage poulie haute | 3 | 12 | 90 sec |
| Curl marteau | 3 | 12 | 60 sec |

**Finisher endurance**
- Rameur intensité croissante Z2→Z4 — 6 min (timer)

---

### Mercredi — Mental & Mobilité · ~55 min

| Exercice | Durée / Séries | Repos |
|----------|----------------|-------|
| Course ou vélo zone 2 | 35–40 min | — |
| Planche frontale | 3 × 60 sec | 45 sec |
| Planche latérale | 3 × 45 sec / côté | 45 sec |
| Dead bug | 3 × 10 / côté | 45 sec |
| Box breathing ou Wim Hof | 10 min | — |
| Marche calme retour | 10 min | — |

---

### Jeudi — Force Jambes · Quadri / Ischios / Fessiers · ~1h10

**Exercices principaux**
| Exercice | Séries | Reps | Repos |
|----------|--------|------|-------|
| Squat barre | 5 | 5 | 3 min |
| Soulevé de terre roumain | 4 | 8–10 | 2 min 30 |
| Fentes marchées | 4 | 10 / jambe | 2 min |

**Accessoires**
| Exercice | Séries | Reps | Repos |
|----------|--------|------|-------|
| Leg curl | 3 | 12–15 | 90 sec |
| Mollets debout | 4 | 15 | 60 sec |

**Finisher métabolique**
- HIIT vélo : 8 × (20 sec max / 40 sec récup) — timer automatique qui alterne intensités

---

### Vendredi — Full Body Métabo · ~1h

| Exercice | Séries | Reps / Durée | Repos |
|----------|--------|--------------|-------|
| Kettlebell swing lourd | 5 | 15 | 60 sec |
| Thruster (squat + press) | 4 | 10 | 90 sec |
| Box jump / jump squat | 4 | 8 | 90 sec |
| Battle ropes | 6 | 30 sec | 15 sec |
| Burpees sans pause | 3 | 10 | 60 sec |
| Rameur 5 min all-out | 1 | 5 min | — |

---

### Samedi — Cardio Zone 2 (optionnel)
- Marche rapide / vélo / natation — 50 à 70 min en zone 2
- Timer simple avec indication de zone cardiaque

---

## 4. Planning 4 jours (max 1h30 par séance)

### Lundi — Force Haut du Corps · Poussé + Tiré · ~1h20

| Exercice | Séries | Reps | Repos |
|----------|--------|------|-------|
| Développé couché barre | 4 | 6 | 3 min |
| Développé militaire debout | 3 | 8 | 2 min 30 |
| Tractions lestées | 4 | 5–6 | 3 min |
| Rowing barre | 4 | 8 | 2 min 30 |
| Dips | 3 | 10 | 90 sec |
| Curl haltères | 3 | 12 | 60 sec |
| **Finisher** AMRAP 8 min : 8 pompes + 8 tractions | — | max tours | — |

---

### Mercredi — Force Bas du Corps · ~1h15

| Exercice | Séries | Reps | Repos |
|----------|--------|------|-------|
| Squat barre | 5 | 5 | 3 min |
| Soulevé de terre roumain | 4 | 8 | 2 min 30 |
| Fentes marchées | 3 | 10 / jambe | 2 min |
| Leg curl | 3 | 12 | 90 sec |
| Mollets debout | 3 | 15 | 60 sec |
| Planche 3×60 sec + dead bug 3×10 (enchaînés) | — | — | 45 sec |
| **Finisher** HIIT vélo 8×(20 sec / 40 sec) | — | — | — |

---

### Vendredi — Full Body Lourd + Mental · ~1h20

| Exercice | Séries | Reps | Repos |
|----------|--------|------|-------|
| Soulevé de terre barre | 4 | 5 | 3 min |
| Squat goblet | 3 | 12 | 2 min |
| Développé incliné haltères | 3 | 10 | 2 min |
| Kettlebell swing | 4 | 15 | 60 sec |
| Box jump | 3 | 8 | 90 sec |
| Battle ropes 6×30 sec | — | — | 15 sec |
| Burpees sans pause | 3 | 10 | 60 sec |
| **Finisher** Rameur 5 min all-out | — | 5 min | — |

---

### Samedi — Cardio Zone 2 · ~55 min

| Exercice | Durée | Note |
|----------|-------|------|
| Course / vélo / natation zone 2 | 40–45 min | Fréquence cardiaque conversationnelle |
| Box breathing ou Wim Hof | 10 min | Timer guidé |
| Marche calme retour | 5 min | — |

---

## 5. Données nutritionnelles (à afficher dans l'app)

### Macros quotidiennes

| | Jour d'entraînement | Jour de repos |
|-|---------------------|---------------|
| Calories | 2 800 kcal | 2 300 kcal |
| Protéines | 265 g | 265 g |
| Glucides | 280 g | 180 g |
| Lipides | 80 g | 80 g |

### Repas types (jour entraînement)

| Heure | Repas | Kcal approx |
|-------|-------|-------------|
| 7h30 | Flocons d'avoine + skyr + banane + amandes + œufs | ~750 |
| 10h30 | Banane + whey ou fromage blanc + avoine | ~350 |
| 13h00 | Poulet + riz + brocoli + huile d'olive | ~650 |
| 16h30 | Thon + pain complet + avocat | ~400 |
| 19h30 | Saumon + patate douce + légumes verts | ~550 |
| 21h30 | Fromage blanc 0% + noix | ~300 |

---

## 6. Specs de l'interface mobile

### Écrans à concevoir

1. **Accueil / Dashboard**
   - Choix du planning du jour (4j ou 5j)
   - Rappel macro du jour (entraînement ou repos)
   - Bouton "Démarrer la séance"
   - Progression hebdomadaire (séances cochées)

2. **Écran de séance**
   - Nom de l'exercice en grand
   - Indication : séries × reps (ex : "Série 2 / 5 — 5 reps")
   - Timer de repos bien visible avec compte à rebours circulaire
   - Bouton "Série terminée" → déclenche le timer de repos → passe à la suivante
   - Indicateur de progression dans la séance (exercice 3/6 par exemple)
   - Vibration + son à la fin du timer (à prévoir dans les specs)

3. **Écran finisher**
   - Timer spécial selon le type (AMRAP / HIIT / steady)
   - Pour HIIT : alternance automatique effort / repos avec couleur différente
   - Pour AMRAP : compte à rebours + compteur de tours manuel

4. **Écran nutrition**
   - Macros du jour avec barres de progression
   - Liste des repas avec cases à cocher
   - Rappel eau (objectif 3 L / jour)

5. **Historique / Suivi**
   - Séances complétées par semaine
   - Possibilité de noter les charges utilisées par exercice
   - Graphique de progression simple

### Design guidelines

- **Style** : minimaliste, dark mode prioritaire, couleurs sobres (noir / blanc / accent bleu ou vert)
- **Typographie** : grande, lisible pendant l'effort (les mains peuvent être sales ou la luminosité faible)
- **Interactions** : boutons larges, faciles à tapper avec les doigts
- **Navigation** : bottom tab bar (Séance / Nutrition / Historique / Profil)
- **Inspiration** : Strong App, Whoop, Nike Training Club — épuré et fonctionnel

---

## 7. Structure de données JSON (pour le développeur)

```json
{
  "profil": {
    "age": 28,
    "taille_cm": 190,
    "poids_kg": 122,
    "objectif": "recomposition",
    "perte_cible_kg": 20
  },
  "nutrition": {
    "jour_sport": { "kcal": 2800, "proteines_g": 265, "glucides_g": 280, "lipides_g": 80 },
    "jour_repos": { "kcal": 2300, "proteines_g": 265, "glucides_g": 180, "lipides_g": 80 }
  },
  "plannings": {
    "5_jours": {
      "Lundi": { "nom": "Force Poussé", "duree_min": 65, "groupes": ["pectoraux","épaules","triceps"] },
      "Mardi": { "nom": "Force Tiré", "duree_min": 65, "groupes": ["dos","biceps","trapèzes"] },
      "Mercredi": { "nom": "Mental & Mobilité", "duree_min": 55, "groupes": ["cardio","gainage"] },
      "Jeudi": { "nom": "Force Jambes", "duree_min": 70, "groupes": ["quadriceps","ischios","fessiers"] },
      "Vendredi": { "nom": "Full Body Métabo", "duree_min": 60, "groupes": ["full_body","explosivité"] },
      "Samedi": { "nom": "Cardio Zone 2", "duree_min": 60, "optionnel": true }
    },
    "4_jours": {
      "Lundi": { "nom": "Force Haut du Corps", "duree_min": 80 },
      "Mercredi": { "nom": "Force Bas du Corps", "duree_min": 75 },
      "Vendredi": { "nom": "Full Body Lourd + Mental", "duree_min": 80 },
      "Samedi": { "nom": "Cardio Zone 2", "duree_min": 55 }
    }
  }
}
```

---

## 8. Configurabilité — exigence absolue

L'application doit être **entièrement configurable** par l'utilisateur, sans passer par un développeur. Rien ne doit être figé dans le code.

### Ce qui doit être modifiable

**Exercices**
- Ajouter un exercice dans n'importe quelle séance
- Supprimer un exercice
- Remplacer un exercice par un autre (nom libre)
- Modifier les paramètres d'un exercice : nombre de séries, reps, temps de repos
- Réordonner les exercices par glisser-déposer

**Plannings**
- Changer le jour d'une séance (ex : déplacer "Force Jambes" du jeudi au mercredi)
- Intervertir deux séances
- Passer d'un planning 5 jours à 4 jours à tout moment
- Créer une séance personnalisée en dehors des plannings prédéfinis
- Désactiver un jour (blessure, voyage) sans le supprimer

**Timers & paramètres**
- Modifier le temps de repos d'un exercice à la volée pendant la séance
- Modifier le temps de repos par défaut par type d'exercice (lourd / accessoire / finisher)
- Activer / désactiver le son et la vibration à la fin du timer
- Changer la durée d'un finisher (ex : passer de 10 min à 8 min)

**Profil & objectifs**
- Mettre à jour son poids (idéalement chaque semaine)
- Les macros se recalculent automatiquement si le poids change
- Modifier l'objectif calorique manuellement si besoin

### Principes de design pour la configurabilité
- Tout réglage accessible en maximum 2 taps depuis l'écran concerné
- Mode "édition" de séance : un bouton crayon sur chaque séance ouvre l'éditeur
- Les modifications sont sauvegardées localement sur le téléphone (pas besoin de compte)
- Un bouton "Réinitialiser aux valeurs par défaut" disponible en cas d'erreur

---

## 9. Calculateur nutritionnel — suivi en temps réel

### Concept
L'écran nutrition n'est pas un simple affichage statique. C'est un **tracker journalier interactif** où l'utilisateur saisit ce qu'il mange au fur et à mesure, et voit sa progression en pourcentage vers ses objectifs.

### Fonctionnement

**Saisie rapide**
- L'utilisateur tape le nombre de calories d'un aliment ou d'un repas
- Il peut aussi entrer les macros détaillées (protéines / glucides / lipides) s'il le souhaite
- Pas de base de données d'aliments nécessaire — saisie libre en kcal ou en grammes de macro

**Affichage de la progression**
- 4 barres de progression circulaires ou linéaires, en pourcentage :
  - Calories : ex. "1 850 / 2 800 kcal — 66 %"
  - Protéines : ex. "180 / 265 g — 68 %"
  - Glucides : ex. "210 / 280 g — 75 %"
  - Lipides : ex. "55 / 80 g — 69 %"
- Code couleur : vert sous 90 %, orange entre 90 et 100 %, rouge si dépassement
- Le total se met à jour instantanément à chaque saisie

**Gestion des repas**
- L'utilisateur peut organiser ses saisies par repas (Petit-déj / Déjeuner / Collation / Dîner / Collation soir)
- Ou simplement ajouter des entrées libres sans structure de repas
- Possibilité de supprimer ou modifier une entrée

**Rappel eau**
- Objectif : 3 L / jour
- Bouton "+250 ml" ou "+500 ml" pour incrémenter rapidement
- Barre de progression eau séparée

**Basculement automatique jour sport / repos**
- L'app détecte si le jour est un jour d'entraînement selon le planning actif
- Les objectifs changent automatiquement (2 800 vs 2 300 kcal, 280 vs 180 g de glucides)
- L'utilisateur peut forcer le mode manuellement ("aujourd'hui c'est repos" même si c'est un jour prévu)

**Historique nutrition**
- Résumé des 7 derniers jours : moyenne calorique, protéines moyennes
- Indicateur simple : "Objectifs atteints X jours sur 7 cette semaine"

### Ce qui est configurable côté nutrition
- Modifier ses objectifs de macros manuellement
- Ajouter des repas types favoris (sauvegarder une entrée pour la réutiliser)
- Activer / désactiver les rappels de repas (notifications à heures fixes)

---

## 10. Message pour Claude Code

> Tu vas concevoir l'interface mobile d'une application de coaching sportif personnalisée.
>
> **Profil utilisateur** : homme de 28 ans, 1,90 m, 120 kg, objectif recomposition corporelle (perdre 20 kg de graisse, prendre du muscle).
>
> **L'app a deux parties principales :**
>
> **Partie Sport** — coach de séance en temps réel :
> - Timer automatique entre les exercices, passage automatique à l'exercice suivant
> - Cases à cocher pour chaque série
> - Deux plannings disponibles (4 jours / 5 jours), choix libre en début de semaine
> - Tout doit être entièrement configurable par l'utilisateur : changer un exercice, modifier les séries/reps/temps de repos, déplacer une séance sur un autre jour, créer une séance custom — en maximum 2 taps depuis l'écran concerné
> - Mode édition accessible via bouton crayon sur chaque séance
> - Les modifications sont sauvegardées localement sur le téléphone
>
> **Partie Nutrition** — tracker journalier interactif :
> - Pas de base de données d'aliments : l'utilisateur saisit librement les calories et/ou les macros
> - 4 barres de progression en pourcentage (Calories / Protéines / Glucides / Lipides) qui se mettent à jour en temps réel à chaque saisie
> - Code couleur : vert < 90 %, orange 90–100 %, rouge si dépassement
> - Basculement automatique entre les objectifs jour sport (2 800 kcal) et jour repos (2 300 kcal) selon le planning actif, avec possibilité de forcer manuellement
> - Tracker eau avec boutons +250 ml / +500 ml, objectif 3 L/jour
> - Les macros cibles sont configurables manuellement
>
> **Design** : dark mode prioritaire, minimaliste, typographie grande et lisible pendant l'effort, boutons larges.
> **Navigation** : bottom tab bar (Séance / Nutrition / Historique / Profil).
> **Priorité absolue** : l'écran de séance avec timer circulaire de repos et l'écran nutrition avec les 4 barres de progression en pourcentage.
>
> Tout le contenu détaillé (exercices, séries, reps, timers, macros) est dans ce brief. Commence par proposer la structure des écrans et les composants clés avant de rentrer dans le détail visuel.
