
// ============================================================
// TRAINING APP — Data Layer
// All workout data, nutrition targets, profile
// ============================================================

const INITIAL_DATA = {
  profil: {
    nom: "Kesiah",
    age: 28,
    taille_cm: 190,
    poids_kg: 122,
    objectif: "recomposition",
    perte_cible_kg: 20
  },
  nutrition: {
    jour_sport: { kcal: 2800, proteines_g: 265, glucides_g: 280, lipides_g: 80 },
    jour_repos: { kcal: 2300, proteines_g: 265, glucides_g: 180, lipides_g: 80 }
  },
  planning_5j: [
    {
      id: "lun5",
      jour: "Lundi",
      nom: "Force Poussé",
      emoji: "💪",
      duree_min: 65,
      groupes: ["Pectoraux", "Épaules", "Triceps"],
      exercices: [
        { id: "e1", nom: "Développé couché barre", series: 5, reps: "5", repos_sec: 180, type: "principal" },
        { id: "e2", nom: "Développé incliné haltères", series: 4, reps: "8–10", repos_sec: 150, type: "principal" },
        { id: "e3", nom: "Développé militaire debout", series: 4, reps: "6–8", repos_sec: 150, type: "principal" },
        { id: "e4", nom: "Dips lestés", series: 3, reps: "8–10", repos_sec: 90, type: "accessoire" },
        { id: "e5", nom: "Élévations latérales", series: 3, reps: "15", repos_sec: 60, type: "accessoire" }
      ],
      finisher: { type: "amrap", duree_min: 10, description: "10 pompes + 10 dips", label: "AMRAP" }
    },
    {
      id: "mar5",
      jour: "Mardi",
      nom: "Force Tiré",
      emoji: "🏋️",
      duree_min: 65,
      groupes: ["Dos", "Biceps", "Trapèzes"],
      exercices: [
        { id: "e6", nom: "Tractions lestées", series: 5, reps: "5", repos_sec: 180, type: "principal" },
        { id: "e7", nom: "Soulevé de terre", series: 4, reps: "5", repos_sec: 180, type: "principal" },
        { id: "e8", nom: "Rowing barre", series: 4, reps: "6–8", repos_sec: 150, type: "principal" },
        { id: "e9", nom: "Tirage poulie haute", series: 3, reps: "12", repos_sec: 90, type: "accessoire" },
        { id: "e10", nom: "Curl marteau", series: 3, reps: "12", repos_sec: 60, type: "accessoire" }
      ],
      finisher: { type: "steady", duree_min: 6, description: "Rameur Z2→Z4 intensité croissante", label: "ENDURANCE" }
    },
    {
      id: "mer5",
      jour: "Mercredi",
      nom: "Mental & Mobilité",
      emoji: "🧠",
      duree_min: 55,
      groupes: ["Cardio", "Gainage"],
      exercices: [
        { id: "e11", nom: "Course / vélo zone 2", series: 1, reps: "35–40 min", repos_sec: 0, type: "cardio" },
        { id: "e12", nom: "Planche frontale", series: 3, reps: "60 sec", repos_sec: 45, type: "gainage" },
        { id: "e13", nom: "Planche latérale", series: 3, reps: "45 sec/côté", repos_sec: 45, type: "gainage" },
        { id: "e14", nom: "Dead bug", series: 3, reps: "10/côté", repos_sec: 45, type: "gainage" }
      ],
      finisher: { type: "steady", duree_min: 10, description: "Box breathing ou Wim Hof", label: "MENTAL" }
    },
    {
      id: "jeu5",
      jour: "Jeudi",
      nom: "Force Jambes",
      emoji: "🦵",
      duree_min: 70,
      groupes: ["Quadriceps", "Ischios", "Fessiers"],
      exercices: [
        { id: "e15", nom: "Squat barre", series: 5, reps: "5", repos_sec: 180, type: "principal" },
        { id: "e16", nom: "Soulevé de terre roumain", series: 4, reps: "8–10", repos_sec: 150, type: "principal" },
        { id: "e17", nom: "Fentes marchées", series: 4, reps: "10/jambe", repos_sec: 120, type: "principal" },
        { id: "e18", nom: "Leg curl", series: 3, reps: "12–15", repos_sec: 90, type: "accessoire" },
        { id: "e19", nom: "Mollets debout", series: 4, reps: "15", repos_sec: 60, type: "accessoire" }
      ],
      finisher: { type: "hiit", rounds: 8, effort_sec: 20, repos_sec: 40, description: "Vélo 8×(20s max / 40s récup)", label: "HIIT" }
    },
    {
      id: "ven5",
      jour: "Vendredi",
      nom: "Full Body Métabo",
      emoji: "🔥",
      duree_min: 60,
      groupes: ["Full Body", "Explosivité"],
      exercices: [
        { id: "e20", nom: "Kettlebell swing lourd", series: 5, reps: "15", repos_sec: 60, type: "principal" },
        { id: "e21", nom: "Thruster (squat + press)", series: 4, reps: "10", repos_sec: 90, type: "principal" },
        { id: "e22", nom: "Box jump / jump squat", series: 4, reps: "8", repos_sec: 90, type: "principal" },
        { id: "e23", nom: "Battle ropes", series: 6, reps: "30 sec", repos_sec: 15, type: "accessoire" },
        { id: "e24", nom: "Burpees sans pause", series: 3, reps: "10", repos_sec: 60, type: "accessoire" }
      ],
      finisher: { type: "steady", duree_min: 5, description: "Rameur 5 min all-out", label: "ALL-OUT" }
    },
    {
      id: "sam5",
      jour: "Samedi",
      nom: "Cardio Zone 2",
      emoji: "🚴",
      duree_min: 60,
      optionnel: true,
      groupes: ["Cardio"],
      exercices: [
        { id: "e25", nom: "Marche rapide / vélo / natation", series: 1, reps: "50–70 min", repos_sec: 0, type: "cardio" }
      ],
      finisher: null
    }
  ],
  planning_4j: [
    {
      id: "lun4",
      jour: "Lundi",
      nom: "Force Haut du Corps",
      emoji: "💪",
      duree_min: 80,
      groupes: ["Pectoraux", "Dos", "Bras"],
      exercices: [
        { id: "f1", nom: "Développé couché barre", series: 4, reps: "6", repos_sec: 180, type: "principal" },
        { id: "f2", nom: "Développé militaire debout", series: 3, reps: "8", repos_sec: 150, type: "principal" },
        { id: "f3", nom: "Tractions lestées", series: 4, reps: "5–6", repos_sec: 180, type: "principal" },
        { id: "f4", nom: "Rowing barre", series: 4, reps: "8", repos_sec: 150, type: "principal" },
        { id: "f5", nom: "Dips", series: 3, reps: "10", repos_sec: 90, type: "accessoire" },
        { id: "f6", nom: "Curl haltères", series: 3, reps: "12", repos_sec: 60, type: "accessoire" }
      ],
      finisher: { type: "amrap", duree_min: 8, description: "8 pompes + 8 tractions", label: "AMRAP" }
    },
    {
      id: "mer4",
      jour: "Mercredi",
      nom: "Force Bas du Corps",
      emoji: "🦵",
      duree_min: 75,
      groupes: ["Quadriceps", "Ischios", "Fessiers"],
      exercices: [
        { id: "f7", nom: "Squat barre", series: 5, reps: "5", repos_sec: 180, type: "principal" },
        { id: "f8", nom: "Soulevé de terre roumain", series: 4, reps: "8", repos_sec: 150, type: "principal" },
        { id: "f9", nom: "Fentes marchées", series: 3, reps: "10/jambe", repos_sec: 120, type: "principal" },
        { id: "f10", nom: "Leg curl", series: 3, reps: "12", repos_sec: 90, type: "accessoire" },
        { id: "f11", nom: "Mollets debout", series: 3, reps: "15", repos_sec: 60, type: "accessoire" },
        { id: "f12", nom: "Planche + dead bug (enchaînés)", series: 3, reps: "60s + 10/côté", repos_sec: 45, type: "gainage" }
      ],
      finisher: { type: "hiit", rounds: 8, effort_sec: 20, repos_sec: 40, description: "HIIT vélo 8×(20s/40s)", label: "HIIT" }
    },
    {
      id: "ven4",
      jour: "Vendredi",
      nom: "Full Body Lourd",
      emoji: "🔥",
      duree_min: 80,
      groupes: ["Full Body", "Mental"],
      exercices: [
        { id: "f13", nom: "Soulevé de terre barre", series: 4, reps: "5", repos_sec: 180, type: "principal" },
        { id: "f14", nom: "Squat goblet", series: 3, reps: "12", repos_sec: 120, type: "principal" },
        { id: "f15", nom: "Développé incliné haltères", series: 3, reps: "10", repos_sec: 120, type: "principal" },
        { id: "f16", nom: "Kettlebell swing", series: 4, reps: "15", repos_sec: 60, type: "accessoire" },
        { id: "f17", nom: "Box jump", series: 3, reps: "8", repos_sec: 90, type: "accessoire" },
        { id: "f18", nom: "Battle ropes 6×30s", series: 6, reps: "30 sec", repos_sec: 15, type: "accessoire" },
        { id: "f19", nom: "Burpees sans pause", series: 3, reps: "10", repos_sec: 60, type: "accessoire" }
      ],
      finisher: { type: "steady", duree_min: 5, description: "Rameur 5 min all-out", label: "ALL-OUT" }
    },
    {
      id: "sam4",
      jour: "Samedi",
      nom: "Cardio Zone 2",
      emoji: "🚴",
      duree_min: 55,
      optionnel: true,
      groupes: ["Cardio"],
      exercices: [
        { id: "f20", nom: "Course / vélo / natation zone 2", series: 1, reps: "40–45 min", repos_sec: 0, type: "cardio" },
        { id: "f21", nom: "Box breathing / Wim Hof", series: 1, reps: "10 min", repos_sec: 0, type: "mental" }
      ],
      finisher: null
    }
  ]
};

// LocalStorage helpers
function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function saveState(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// Expose globally
window.TRAINING_DATA = INITIAL_DATA;
window.loadState = loadState;
window.saveState = saveState;
