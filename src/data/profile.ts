/**
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  FUENTE ÚNICA DE VERDAD — Edita SOLO este archivo para cambiar    │
 * │  el contenido del portfolio. La estructura visual no se toca.     │
 * └─────────────────────────────────────────────────────────────────┘
 *
 * Los campos marcados con //  TODO son placeholders: cámbialos por los tuyos.
 */

export interface SocialLink {
  label: string;
  url: string;
  handle: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  repo?: string;
  demo?: string;
  status?: 'production' | 'active' | 'archived';
}

export interface SkillGroup {
  category: string;
  items: { name: string; level: number }[]; // level 0-100
}

export const profile = {
  // ── Identidad ────────────────────────────────────────────────────
  name: 'Daniel Lazar',
  initials: 'DL',
  role: 'Backend Developer',
  company: 'GFT Technologies',
  location: 'Zaragoza, España',
  avatar: '/avatar.jpg', // sube tu foto a /public/avatar.jpg (la de LinkedIn vale)
  tagline: 'Backend developer en formación. Aprendo rápido, construyo con criterio y apunto alto.',
  seniority: 'junior',
  availability: 'Formación dual · con ganas de comerme el mundo',

  // ── Bio ──────────────────────────────────────────────────────────
  bio: [
    'Soy Daniel, backend developer en formación dual en GFT Technologies mientras curso el Grado Superior de Desarrollo de Aplicaciones Multiplataforma (DAM) en Zaragoza.',
    'Trabajo con Java, Spring Boot y microservicios: construyo APIs, escribo tests y aprendo cómo se hace software de verdad dentro de un equipo profesional.',
    'Mi enfoque es no parar de aprender. Quiero dominar el backend, profundizar en IA y cloud, y con el tiempo aprender a liderar y orquestar equipos. Aspiro a llegar alto, y trabajo para ello cada día.',
  ],

  // Qué estoy persiguiendo ahora (se muestra como objetivos)
  focus: [
    'Dominar el desarrollo backend con Java y Spring',
    'Profundizar en Inteligencia Artificial y Cloud',
    'Aprender a liderar y orquestar equipos',
  ],

  // ── Contacto / redes ─────────────────────────────────────────────
  email: 'daniellazar1614@gmail.com',
  cv: '/cv.pdf', //  TODO  pon tu PDF en /public/cv.pdf
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/daniel-lazar-badorrey/', handle: '/in/daniel-lazar-badorrey' },
    { label: 'GitHub', url: 'https://github.com/Danilaz06', handle: '@Danilaz06' }, //  TODO verifica tu usuario
    { label: 'Email', url: 'mailto:daniellazar1614@gmail.com', handle: 'daniellazar1614@gmail.com' },
  ] as SocialLink[],

  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Profesional' },
  ],

  // ── Métricas de cabecera (se muestran en el hero) ────────────────
  stats: [
    { value: '1', label: 'año en formación dual' }, //  TODO
    { value: 'DAM', label: 'grado superior en curso' }, //  TODO
    { value: 'Java', label: 'stack principal' }, //  TODO
  ],

  // ── Skills ───────────────────────────────────────────────────────
  // Ajusta los niveles (0-100) a tu sensación real. Como junior, ser honesto suma.
  skills: [
    {
      category: 'Lenguajes',
      items: [
        { name: 'Java', level: 78 },
        { name: 'SQL', level: 68 },
        { name: 'JavaScript', level: 55 },
        { name: 'Bash', level: 45 },
      ],
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'Spring Boot', level: 72 },
        { name: 'JPA / Hibernate', level: 62 },
        { name: 'Spring Security', level: 50 },
        { name: 'JUnit / Mockito', level: 60 },
      ],
    },
    {
      category: 'Datos',
      items: [
        { name: 'PostgreSQL', level: 65 },
        { name: 'MySQL', level: 68 },
        { name: 'Redis', level: 40 },
        { name: 'MongoDB', level: 45 },
      ],
    },
    {
      category: 'Herramientas',
      items: [
        { name: 'Git', level: 75 },
        { name: 'Docker', level: 55 },
        { name: 'Maven', level: 60 },
        { name: 'CI/CD', level: 48 },
      ],
    },
    {
      category: 'Frontend & Animación',
      items: [
        { name: 'HTML / CSS', level: 70 },
        { name: 'Astro', level: 55 },
        { name: 'GSAP / Lenis', level: 45 },
        { name: 'three.js', level: 30 },
      ],
    },
  ] as SkillGroup[],

  // ── Experiencia ──────────────────────────────────────────────────
  experience: [
    {
      company: 'GFT Technologies',
      role: 'Backend Developer · Formación Dual',
      period: '2025 — Presente', //  TODO ajusta el año de inicio
      location: 'España', //  TODO
      current: true,
      summary:
        'Formación dual compaginada con el DAM: desarrollo backend con Java y Spring en un entorno profesional, aprendiendo las prácticas reales de la industria.', //  TODO
      highlights: [
        'Desarrollo de funcionalidades backend con Java y Spring Boot dentro de un equipo real.', //  TODO
        'Escritura de tests y revisión de código siguiendo los estándares del equipo.', //  TODO
        'Trabajo con control de versiones (Git), metodologías ágiles y CI/CD.', //  TODO
      ],
      stack: ['Java', 'Spring Boot', 'Git', 'SQL'],
    },
    // Añade más experiencias aquí ↓
    // {
    //   company: 'Empresa anterior',
    //   role: '...',
    //   period: '2021 — 2023',
    //   summary: '...',
    //   highlights: ['...'],
    //   stack: ['...'],
    // },
  ] as Experience[],

  // ── Proyectos ────────────────────────────────────────────────────
  projects: [
    {
      name: 'Trinity',
      tagline: 'Pónganse de acuerdo en qué ver, sin discusiones', // TODO retoca
      description:
        'App para decidir en grupo qué película o contenido ver. Cada persona vota y Trinity encuentra el punto en común para que nadie pierda media hora eligiendo. Mi Trabajo de Fin de Grado del DAM: diseño de la API, modelo de datos y lógica de recomendación/matching.', // TODO retoca con los detalles reales
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'], // TODO ajusta el stack real
      metrics: [
        { label: 'tipo', value: 'TFG DAM' },
        { label: 'rol', value: 'Full-stack' },
      ],
      status: 'active',
      repo: '', // TODO link al repo de Trinity
      demo: '', // TODO demo si la tienes
    },
    {
      name: 'API REST · Spring Boot', // TODO reemplaza por otro proyecto real o bórralo
      tagline: 'CRUD con buenas prácticas y tests',
      description:
        'API REST con arquitectura por capas (controller/service/repository), validación de DTOs, manejo centralizado de errores y tests con JUnit. Proyecto de práctica para consolidar fundamentos.',
      stack: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'JUnit'],
      metrics: [
        { label: 'enfoque', value: 'Backend' },
        { label: 'tests', value: 'JUnit' },
      ],
      status: 'active',
      repo: '',
      demo: '',
    },
  ] as Project[],

  // ── Educación / certificaciones ──────────────────────────────────
  education: [
    {
      title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)', //  TODO
      place: 'Modalidad Dual · GFT Technologies', //  TODO  nombre del centro
      period: 'En curso', //  TODO
    },
  ],
  certifications: [
    // { title: 'Oracle Certified Java Programmer', year: '2023' }, //  TODO
  ] as { title: string; year: string }[],
} as const;

export type Profile = typeof profile;
