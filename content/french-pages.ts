export type FrenchPageSlug =
  | "a-propos"
  | "entrainement-personnel"
  | "coaching-en-ligne"
  | "resultats"
  | "avis"
  | "contact"
  | "outils";

export type FrenchPage = {
  slug?: FrenchPageSlug;
  path: string;
  englishPath: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImageKey:
    | "home"
    | "about"
    | "personal-training"
    | "online-coaching"
    | "results"
    | "reviews"
    | "contact";
  sections: {
    eyebrow: string;
    title: string;
    description?: string;
    cards?: { title: string; description: string; href?: string; label?: string }[];
    paragraphs?: string[];
  }[];
  finalLinks: { label: string; href: string }[];
  showContactForm?: boolean;
};

export const frenchHomePage: FrenchPage = {
  path: "/fr",
  englishPath: "/",
  eyebrow: "Coach sportif à Maurice",
  title: "Coaching privé premium à Grand Baie, sur rendez-vous",
  description:
    "Fitness by Fabrizio propose un accompagnement discret et structuré dans une salle privée en résidence à Grand Baie, Maurice. L'expérience est faite pour les clients qui veulent du sérieux, de la confidentialité et une alternative claire aux salles commerciales.",
  metaTitle: "Coach Sportif à Maurice | Fitness by Fabrizio Grand Baie",
  metaDescription:
    "Coach sportif privé à Grand Baie, Maurice. Entraînement personnel, coaching en ligne et salle privée sur rendez-vous avec Fitness by Fabrizio.",
  heroImageKey: "home",
  sections: [
    {
      eyebrow: "Positionnement",
      title: "Une salle privée, pas une salle publique",
      description:
        "Le modèle est volontairement simple: rendez-vous confirmés, coaching personnel, environnement calme, et communication directe.",
      cards: [
        {
          title: "Salle privée sur rendez-vous",
          description:
            "Pas de passage libre, pas de foule, pas d'ambiance commerciale. Chaque séance est organisée autour du client.",
        },
        {
          title: "Coaching personnalise",
          description:
            "Le programme tient compte du niveau, de l'objectif, de l'emploi du temps et de la capacité à rester régulier.",
        },
        {
          title: "Grand Baie, Maurice",
          description:
            "Un cadre local, discret et pratique pour residents, expatries, professionnels occupes et visiteurs en villa.",
        },
      ],
    },
    {
      eyebrow: "Services",
      title: "Deux façons claires de travailler avec Fabrizio",
      cards: [
        {
          title: "Entraînement personnel privé",
          description:
            "Séances individuelles dans la salle privée pour apprendre, progresser et rester encadré sans pression publique.",
          href: "/fr/entrainement-personnel",
          label: "Voir l'entraînement personnel",
        },
        {
          title: "Coaching en ligne",
          description:
            "Programmation, suivi et responsabilisation à distance pour les clients à Maurice ou en déplacement.",
          href: "/fr/coaching-en-ligne",
          label: "Voir le coaching en ligne",
        },
      ],
    },
    {
      eyebrow: "Prochaine étape",
      title: "Un premier contact simple, sans pression",
      paragraphs: [
        "Le premier objectif est de comprendre votre situation: niveau actuel, disponibilités, objectif, préférence pour le présentiel ou le suivi en ligne, et besoin de confidentialité.",
        "WhatsApp reste le moyen le plus rapide pour poser une question. Le formulaire est utile si vous voulez donner plus de contexte avant la reponse.",
      ],
    },
  ],
  finalLinks: [
    { label: "Entraînement personnel", href: "/fr/entrainement-personnel" },
    { label: "Coaching en ligne", href: "/fr/coaching-en-ligne" },
    { label: "Contact", href: "/fr/contact" },
  ],
};

export const frenchPages: FrenchPage[] = [
  {
    slug: "a-propos",
    path: "/fr/a-propos",
    englishPath: "/about",
    eyebrow: "À propos",
    title: "Fitness by Fabrizio: coaching privé, discret et structuré",
    description:
      "Fitness by Fabrizio est l'identité visible de Fitness Grand Baie: un service de coaching privé à Grand Baie pour les personnes qui veulent une approche plus calme, plus personnelle et plus professionnelle qu'une salle publique.",
    metaTitle: "À propos | Fitness by Fabrizio Grand Baie",
    metaDescription:
      "Découvrez Fitness by Fabrizio, coach sportif privé à Grand Baie, Maurice, avec une salle privée sur rendez-vous et une approche premium.",
    heroImageKey: "about",
    sections: [
      {
        eyebrow: "Philosophie",
        title: "Moins de bruit, plus d'attention",
        paragraphs: [
          "Beaucoup de personnes n'ont pas besoin d'une salle plus grande. Elles ont besoin d'un meilleur cadre: moins de distraction, plus d'explication, une progression plus claire et un rendez-vous qui protège le temps d'entraînement.",
          "L'approche reste directe et professionnelle. Le coaching n'est pas construit autour de promesses spectaculaires, mais autour de la régularité, de la technique et d'un environnement dans lequel le client se sent respecté.",
        ],
      },
      {
        eyebrow: "Pour qui",
        title: "Un cadre adapté aux clients qui valorisent la discrétion",
        cards: [
          {
            title: "Debutants",
            description:
              "Un environnement privé aide à poser des questions, apprendre les bases et gagner en confiance sans se sentir observé.",
          },
          {
            title: "Professionnels occupes",
            description:
              "Le rendez-vous fixe réduit les décisions inutiles et rend l'entraînement plus facile à intégrer dans une semaine chargée.",
          },
          {
            title: "Residents et expatries",
            description:
              "Le service convient aux personnes installées à Maurice qui veulent un suivi clair sans dépendance à une salle commerciale.",
          },
        ],
      },
    ],
    finalLinks: [
      { label: "Voir l'entraînement", href: "/fr/entrainement-personnel" },
      { label: "Contacter", href: "/fr/contact" },
    ],
  },
  {
    slug: "entrainement-personnel",
    path: "/fr/entrainement-personnel",
    englishPath: "/personal-training",
    eyebrow: "Entraînement personnel",
    title: "Entraînement personnel privé à Grand Baie, Maurice",
    description:
      "Un coaching individuel dans une salle privée sur rendez-vous, pour les clients qui veulent progresser avec plus d'attention, de confidentialité et de structure.",
    metaTitle: "Entraînement Personnel à Maurice | Coach Privé Grand Baie",
    metaDescription:
      "Entraînement personnel privé à Grand Baie, Maurice avec Fitness by Fabrizio. Salle privée sur rendez-vous, coaching individuel et suivi professionnel.",
    heroImageKey: "personal-training",
    sections: [
      {
        eyebrow: "Experience",
        title: "Un cadre construit pour mieux se concentrer",
        paragraphs: [
          "L'entraînement personnel privé est fait pour les personnes qui veulent être guidées correctement, sans attendre les machines, sans se comparer aux autres, et sans devoir comprendre seules quoi faire.",
          "Chaque séance doit avoir un objectif clair: mouvement de meilleure qualité, progression adaptée, confiance plus forte et habitudes plus faciles à maintenir.",
        ],
      },
      {
        eyebrow: "Ce que vous pouvez attendre",
        title: "Une approche simple, precise et professionnelle",
        cards: [
          {
            title: "Technique et sécurité",
            description:
              "Les exercices sont choisis et ajustes selon votre niveau. En cas de douleur ou condition medicale, demandez toujours un avis professionnel approprie.",
          },
          {
            title: "Progression réaliste",
            description:
              "Le plan cherche la régularité et l'amélioration mesurable, pas l'épuisement pour impressionner.",
          },
          {
            title: "Confidentialite",
            description:
              "L'adresse exacte et les détails d'arrivée sont partagés uniquement après confirmation, car le lieu est privé.",
          },
        ],
      },
    ],
    finalLinks: [
      { label: "Voir les résultats", href: "/fr/resultats" },
      { label: "Demander une consultation", href: "/fr/contact" },
    ],
  },
  {
    slug: "coaching-en-ligne",
    path: "/fr/coaching-en-ligne",
    englishPath: "/online-coaching",
    eyebrow: "Coaching en ligne",
    title: "Coaching en ligne à Maurice pour garder une structure claire",
    description:
      "Un accompagnement à distance avec programmation, suivi et support WhatsApp pour les clients qui veulent rester encadrés sans venir au studio chaque semaine.",
    metaTitle: "Coaching en Ligne à Maurice | Fitness by Fabrizio",
    metaDescription:
      "Coaching en ligne à Maurice avec programmation, suivi, responsabilisation et support WhatsApp pour clients occupés ou souvent en déplacement.",
    heroImageKey: "online-coaching",
    sections: [
      {
        eyebrow: "Pour qui",
        title: "Idéal si vous avez besoin de structure, pas forcément d'une séance sur place",
        cards: [
          {
            title: "Clients en déplacement",
            description:
              "Le coaching reste avec vous meme si votre semaine change ou si vous voyagez regulierement.",
          },
          {
            title: "Personnes deja autonomes",
            description:
              "Si vous savez vous entraîner mais manquez de plan et de suivi, le format en ligne peut être très efficace.",
          },
          {
            title: "Clients hors Grand Baie",
            description:
              "Un bon choix si vous vivez ailleurs à Maurice mais voulez une structure professionnelle.",
          },
        ],
      },
      {
        eyebrow: "Limites honnetes",
        title: "Le coaching en ligne ne convient pas à tout le monde",
        paragraphs: [
          "Si vous êtes très débutant, si vous avez besoin d'apprendre les mouvements en détail, ou si vous avez peur de vous entraîner seul, l'entraînement personnel en présentiel peut être un meilleur départ.",
          "Le bon format est celui qui vous aide vraiment à passer à l'action. Le premier contact sert justement à clarifier ce choix.",
        ],
      },
    ],
    finalLinks: [
      { label: "Entraînement personnel", href: "/fr/entrainement-personnel" },
      { label: "Contact", href: "/fr/contact" },
    ],
  },
  {
    slug: "resultats",
    path: "/fr/resultats",
    englishPath: "/results",
    eyebrow: "Résultats",
    title: "Des résultats présentés avec discrétion et réalisme",
    description:
      "Les résultats chez Fitness by Fabrizio sont présentés sans promesses excessives: meilleure régularité, plus de confiance, progression visible et habitudes plus solides.",
    metaTitle: "Résultats | Coaching Privé à Maurice",
    metaDescription:
      "Résultats et preuves de coaching privé à Grand Baie, Maurice, présentés de façon discrétionnaire, réaliste et professionnelle.",
    heroImageKey: "results",
    sections: [
      {
        eyebrow: "Preuve",
        title: "Le vrai progres vient de meilleures conditions",
        paragraphs: [
          "La plupart des clients ne manquent pas seulement de motivation. Ils manquent souvent d'un cadre qui les aide à revenir, à comprendre quoi faire, et à garder une progression assez simple pour durer.",
          "Les pages de résultats ne doivent pas promettre une transformation garantie. Elles doivent montrer que le coaching est structuré, humain et crédible.",
        ],
      },
      {
        eyebrow: "Ce qui compte",
        title: "Les signes de progres que l'on surveille",
        cards: [
          {
            title: "Regularite",
            description:
              "Être capable de maintenir une semaine d'entraînement réaliste est souvent le premier vrai résultat.",
          },
          {
            title: "Confiance",
            description:
              "Comprendre les mouvements et se sentir plus à l'aise dans l'effort change la relation avec le fitness.",
          },
          {
            title: "Composition corporelle",
            description:
              "Les changements physiques peuvent arriver, mais ils doivent être abordés avec patience, suivi et habitudes durables.",
          },
        ],
      },
    ],
    finalLinks: [
      { label: "Lire les avis", href: "/fr/avis" },
      { label: "Demander une consultation", href: "/fr/contact" },
    ],
  },
  {
    slug: "avis",
    path: "/fr/avis",
    englishPath: "/reviews",
    eyebrow: "Avis",
    title: "Avis et retours clients, présentés avec respect de la confidentialité",
    description:
      "Fitness by Fabrizio utilise uniquement des avis reels ou des temoignages approuves. Les retours doivent renforcer la confiance sans inventer de preuves.",
    metaTitle: "Avis | Fitness by Fabrizio Maurice",
    metaDescription:
      "Avis et retours clients pour Fitness by Fabrizio à Grand Baie, Maurice. Coaching privé, confidentialité et présentation professionnelle.",
    heroImageKey: "reviews",
    sections: [
      {
        eyebrow: "Confiance",
        title: "Des retours utiles, pas du marketing bruyant",
        paragraphs: [
          "Les avis les plus utiles expliquent ce qui a vraiment aidé: l'environnement privé, la qualité du coaching, la clarté du suivi, ou le fait de se sentir plus en confiance.",
          "Quand des avis Google réels sont connectés, ils peuvent être affichés proprement. En attendant, le site évite les faux chiffres, les fausses étoiles et les messages de démonstration.",
        ],
      },
      {
        eyebrow: "Confidentialite",
        title: "La preuve client doit rester respectueuse",
        cards: [
          {
            title: "Noms complets ou initiales",
            description:
              "Les témoignages peuvent être publiés avec un nom complet, un prénom, des initiales ou une mention privée selon l'accord du client.",
          },
          {
            title: "Contexte utile",
            description:
              "Un bon avis peut mentionner le service utilise, l'objectif general ou l'experience de coaching sans exposer trop de details personnels.",
          },
        ],
      },
    ],
    finalLinks: [
      { label: "Voir les résultats", href: "/fr/resultats" },
      { label: "Contact", href: "/fr/contact" },
    ],
  },
  {
    slug: "contact",
    path: "/fr/contact",
    englishPath: "/contact",
    eyebrow: "Contact",
    title: "Contacter Fitness by Fabrizio à Grand Baie",
    description:
      "Envoyez une demande de consultation ou utilisez WhatsApp pour une réponse rapide. La salle privée fonctionne uniquement sur rendez-vous et n'accepte pas les visites sans confirmation.",
    metaTitle: "Contact | Coach Sportif Prive Grand Baie",
    metaDescription:
      "Contactez Fitness by Fabrizio pour un coaching privé à Grand Baie, Maurice. Salle privée sur rendez-vous et communication WhatsApp.",
    heroImageKey: "contact",
    sections: [
      {
        eyebrow: "Avant d'envoyer",
        title: "Ce qu'il est utile de partager",
        cards: [
          {
            title: "Votre objectif",
            description:
              "Perte de poids, force, retour au sport, confiance, posture, ou besoin d'un cadre plus privé.",
          },
          {
            title: "Votre disponibilité",
            description:
              "Quelques créneaux possibles aident à vérifier rapidement si le coaching peut s'organiser correctement.",
          },
          {
            title: "Le format prefere",
            description:
              "Entraînement personnel à Grand Baie, coaching en ligne, ou simple question avant de choisir.",
          },
        ],
      },
    ],
    finalLinks: [],
    showContactForm: true,
  },
  {
    slug: "outils",
    path: "/fr/outils",
    englishPath: "/tools",
    eyebrow: "Outils gratuits",
    title: "Outils fitness gratuits pour mieux comprendre votre point de depart",
    description:
      "Les outils gratuits de Fitness by Fabrizio aident à estimer calories, protéines, hydratation, objectifs de pas et structure d'entraînement. Ils restent éducatifs et ne remplacent pas un avis médical ou un coaching personnalisé.",
    metaTitle: "Outils Fitness Gratuits | Fitness by Fabrizio Maurice",
    metaDescription:
      "Outils fitness gratuits en français pour comprendre calories, protéines, entraînement et progression. Liens vers les calculateurs Fitness by Fabrizio.",
    heroImageKey: "home",
    sections: [
      {
        eyebrow: "Important",
        title: "Des outils utiles, pas des diagnostics",
        paragraphs: [
          "Les calculateurs donnent des estimations. Ils sont pratiques pour démarrer une conversation plus claire, mais ils ne doivent pas être utilisés comme prescriptions médicales ou nutritionnelles.",
          "Si vous voulez un plan adapté à votre niveau, votre emploi du temps et votre objectif, le coaching personnalisé reste la meilleure étape.",
        ],
      },
      {
        eyebrow: "Outils disponibles",
        title: "Acceder aux calculateurs existants",
        cards: [
          {
            title: "Calories et macros",
            description:
              "Estimez les calories, les protéines et la répartition macro pour mieux cadrer votre nutrition.",
            href: "/tools/calorie-calculator",
            label: "Ouvrir les outils nutrition",
          },
          {
            title: "Entraînement et progression",
            description:
              "Utilisez les outils de force, de pas, de zones cardio et de suivi pour clarifier votre routine.",
            href: "/tools",
            label: "Voir tous les outils",
          },
          {
            title: "Besoin d'un plan personnel",
            description:
              "Passez des estimations générales à un accompagnement adapté avec Fitness by Fabrizio.",
            href: "/fr/contact",
            label: "Demander conseil",
          },
        ],
      },
    ],
    finalLinks: [
      { label: "Tous les outils", href: "/tools" },
      { label: "Coaching en ligne", href: "/fr/coaching-en-ligne" },
      { label: "Contact", href: "/fr/contact" },
    ],
  },
];

export function getFrenchPageBySlug(slug: string) {
  return frenchPages.find((page) => page.slug === slug);
}

export function getAllFrenchPages() {
  return [frenchHomePage, ...frenchPages];
}
