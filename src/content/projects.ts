export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  categoryGroup: number;
  year: string;
  client: string;
  role: string;
  summary: string;
  about?: string;
  need?: string;
  madeList?: string[];
  result?: string;
  liveUrl?: string;
  related?: string[];
  published: boolean;
  images: {
    cover: string;
    hero?: string;
    gallery: { src: string; alt: string; caption?: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "bongbine-brand-identity",
    number: "01",
    title: "Bongbine Ltd: Brand Identity",
    category: "Brand identity",
    categoryGroup: 1,
    year: "",
    client: "Bongbine Ltd",
    role: "Brand designer",
    summary:
      "A complete brand identity for Bongbine Ltd, so the company looks professional and consistent everywhere customers see it.",
    related: ["bongbine-website"],
    published: true,
    images: { cover: "/work/bongbine-brand-identity/cover.jpg", gallery: [] },
  },
  {
    slug: "nervtek-community-launch",
    number: "02",
    title: "NervTek Community Launch, Bamenda",
    category: "Event branding",
    categoryGroup: 2,
    year: "",
    client: "NervTek",
    role: "Brand and graphic designer",
    summary:
      "Event branding for the launch of the NervTek community in Bamenda, so the whole event looked like one connected brand.",
    related: ["drone-up-cameroon"],
    published: true,
    images: {
      cover: "/work/nervtek-community-launch/cover.jpg",
      gallery: [],
    },
  },
  {
    slug: "drone-up-cameroon",
    number: "03",
    title: "Drone Up Cameroon",
    category: "Event branding",
    categoryGroup: 2,
    year: "",
    client: "NervTek",
    role: "Brand and graphic designer",
    summary: "Event branding for Drone Up Cameroon, created for NervTek.",
    related: ["nervtek-community-launch"],
    published: true,
    images: { cover: "/work/drone-up-cameroon/cover.jpg", gallery: [] },
  },
  {
    slug: "bongbine-website",
    number: "04",
    title: "Bongbine Ltd: Website",
    category: "Websites",
    categoryGroup: 3,
    year: "",
    client: "Bongbine Ltd",
    role: "Web designer and developer",
    summary:
      "A website for Bongbine Ltd that shows what the company offers and makes it easy to get in touch.",
    liveUrl: "https://bongbineltd.com",
    related: ["bongbine-brand-identity"],
    published: true,
    images: { cover: "/work/bongbine-website/cover.jpg", gallery: [] },
  },
  {
    slug: "klarify-website",
    number: "05",
    title: "Klarify: Website",
    category: "Websites",
    categoryGroup: 3,
    year: "",
    client: "Klarify",
    role: "Web designer and developer",
    summary:
      "A website for Klarify that explains what they do and helps visitors take the next step.",
    liveUrl: "https://klarifypath.com",
    published: true,
    images: { cover: "/work/klarify-website/cover.jpg", gallery: [] },
  },
  {
    slug: "civilsalt-learning-platform",
    number: "06",
    title: "CivilSalt: Flyers, Icons and Badges",
    category: "Flyers, icons and social media",
    categoryGroup: 4,
    year: "",
    client: "CivilSalt",
    role: "Graphic designer",
    summary:
      "Flyers, plus a set of icons and badges, for CivilSalt's online learning platform.",
    published: true,
    images: {
      cover: "/work/civilsalt-learning-platform/cover.jpg",
      gallery: [],
    },
  },
  {
    slug: "traitz-tech-social-media",
    number: "07",
    title: "Traitz Tech: Social Media Flyers",
    category: "Flyers, icons and social media",
    categoryGroup: 4,
    year: "",
    client: "Traitz Tech",
    role: "Graphic designer (volunteer)",
    summary: "Social media flyers for Traitz Tech, created as a volunteer.",
    published: true,
    images: {
      cover: "/work/traitz-tech-social-media/cover.jpg",
      gallery: [],
    },
  },
  {
    slug: "business-flyers",
    number: "08",
    title: "Business Flyers",
    category: "Flyers, icons and social media",
    categoryGroup: 4,
    year: "",
    client: "Individuals and small businesses",
    role: "Graphic designer",
    summary:
      "Flyers made for individuals and small businesses to announce, promote and sell.",
    published: true,
    images: { cover: "/work/business-flyers/cover.jpg", gallery: [] },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(project: Project): Project[] {
  if (!project.related) return [];
  return project.related
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean) as Project[];
}

export const categoryGroups = [
  { id: 1, title: "Brand identity" },
  { id: 2, title: "Event branding" },
  { id: 3, title: "Websites" },
  { id: 4, title: "Flyers, icons and social media" },
];
