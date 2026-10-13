export type ProjectVideo = {
  type: "vimeo" | "youtube" | "file";
  src: string;
  aspect: number;
};

export type Project = {
  slug: string;
  title: string;
  role?: string;
  headline?: string;
  /** One short line — no padded storytelling */
  summary?: string;
  focus?: string[];
  cover: string;
  gallery: string[];
  videos: ProjectVideo[];
};

export const site = {
  name: "Josh Bryant-Gainer",
  shortName: "Josh",
  email: "joshuabryantgainer@gmail.com",
  phone: "(304) 279-6645",
  phoneHref: "tel:+13042796645",
  linkedin: "https://www.linkedin.com/in/joshuabg/",
  linkedinLabel: "linkedin.com/in/joshuabg/",
  role: "Growth & Performance Creative",
  line: "I build creative systems that scale acquisition without losing the brand.",
  bio: "Brooklyn-based. Creative direction meets performance strategy for high-growth digital channels.",
  heroImage: "/images/hero.jpg",
  clients: [
    "Truebill",
    "Aspiration",
    "MoneyLion",
    "Milk Bar",
    "Zarbee's",
    "Flamingo",
    "Candid",
    "Burt's Bees",
    "Milk Street",
    "Harry's",
  ],
};

export const projects: Project[] = [
  {
    slug: "truebill",
    title: "Truebill",
    role: "Creative Director",
    headline: "The All-In-One Finance App",
    summary:
      "YouTube acquisition creative at scale — 1.9M app installs ahead of the Rocket Mortgage acquisition.",
    focus: ["YouTube", "App installs", "Video testing"],
    cover: "/images/portfolio/truebill.png",
    gallery: [],
    videos: [
      { type: "vimeo", src: "https://player.vimeo.com/video/697955485?h=30df306206", aspect: 16 / 9 },
      { type: "vimeo", src: "https://player.vimeo.com/video/499444597?h=3a77ce1693", aspect: 16 / 9 },
      { type: "vimeo", src: "https://player.vimeo.com/video/684474731?h=a11df45e3c", aspect: 16 / 9 },
    ],
  },
  {
    slug: "aspiration",
    title: "Aspiration",
    role: "Creative Director",
    headline: "The Eco-Friendly Debit Card",
    summary:
      "UGC and promotional creative to acquire users while educating on environmental benefits.",
    focus: ["UGC", "Fintech", "Acquisition"],
    cover: "/images/portfolio/aspiration.jpg",
    gallery: [],
    videos: [
      { type: "vimeo", src: "https://player.vimeo.com/video/675498806?h=c6752c8aac", aspect: 16 / 9 },
      { type: "vimeo", src: "https://player.vimeo.com/video/683503431?h=c9b0549010", aspect: 0.8 },
      { type: "vimeo", src: "https://player.vimeo.com/video/683504831?h=1772625836", aspect: 16 / 9 },
      { type: "vimeo", src: "https://player.vimeo.com/video/683505748?h=3d466ffc85", aspect: 16 / 9 },
    ],
  },
  {
    slug: "moneylion",
    title: "MoneyLion",
    role: "Creative Director",
    headline: "Need Cash? We Got You",
    summary:
      "Performance creative for a crowded fintech category — positive tone, clear use-cases, app installs.",
    focus: ["App installs", "Paid social"],
    cover: "/images/portfolio/moneylion.png",
    gallery: [],
    videos: [
      { type: "file", src: "/videos/projects/moneylion/01.mp4", aspect: 9 / 16 },
      { type: "file", src: "/videos/projects/moneylion/02.mp4", aspect: 9 / 16 },
      { type: "file", src: "/videos/projects/moneylion/03.mp4", aspect: 9 / 16 },
      { type: "file", src: "/videos/projects/moneylion/04.mp4", aspect: 1080 / 1350 },
      { type: "file", src: "/videos/projects/moneylion/05.mp4", aspect: 1080 / 1350 },
    ],
  },
  {
    slug: "milk-bar",
    title: "Milk Bar",
    role: "Creative Director",
    headline: "Iconic Desserts Delivered",
    summary:
      "Brand-led performance creative — seasonal and evergreen tests with a scaled production system.",
    focus: ["DTC", "Creative production"],
    cover: "/images/portfolio/milk-bar.jpg",
    gallery: [
      "/images/projects/milk-bar/01.png",
      "/images/projects/milk-bar/02.jpg",
      "/images/projects/milk-bar/03.jpg",
      "/images/projects/milk-bar/04.jpg",
    ],
    videos: [
      { type: "vimeo", src: "https://player.vimeo.com/video/697941246?h=e8b364f09b", aspect: 1 },
      { type: "vimeo", src: "https://player.vimeo.com/video/697941225?h=7ff7bc0f41", aspect: 1 },
    ],
  },
  {
    slug: "zarbees-naturals",
    title: "Zarbee's",
    role: "Copywriter",
    headline: "Ready for anything…almost",
    summary:
      "Campaign creative for the baby line and immune support — Ready for Anything and Preparing for Winter.",
    focus: ["CPG", "Campaign"],
    cover: "/images/portfolio/zarbees-naturals.png",
    gallery: [
      "/images/projects/zarbees-naturals/01.jpg",
      "/images/projects/zarbees-naturals/02.jpg",
      "/images/projects/zarbees-naturals/03.jpg",
      "/images/projects/zarbees-naturals/04.jpg",
      "/images/projects/zarbees-naturals/05.jpg",
      "/images/projects/zarbees-naturals/06.jpg",
    ],
    videos: [
      { type: "youtube", src: "https://www.youtube.com/embed/Pms0pzK3nX0", aspect: 16 / 9 },
      { type: "vimeo", src: "https://player.vimeo.com/video/443165040?h=a857ba15f9", aspect: 16 / 9 },
      { type: "vimeo", src: "https://player.vimeo.com/video/443165070?h=a9f42f657c", aspect: 16 / 9 },
    ],
  },
  {
    slug: "flamingo",
    title: "Flamingo",
    role: "Creative Director",
    headline: "High-Quality Razors for Less",
    summary:
      "UGC-led creative positioning value and authenticity against larger razor competitors.",
    focus: ["UGC", "Paid social"],
    cover: "/images/portfolio/flamingo.jpg",
    gallery: [],
    videos: [
      { type: "vimeo", src: "https://player.vimeo.com/video/697951980?h=301d17f6dd", aspect: 0.8 },
      { type: "vimeo", src: "https://player.vimeo.com/video/697952027?h=eb2548270e", aspect: 0.8 },
      { type: "vimeo", src: "https://player.vimeo.com/video/697951907?h=bb3487dcc9", aspect: 0.8 },
      { type: "vimeo", src: "https://player.vimeo.com/video/697952057?h=52aada16ae", aspect: 0.8 },
      { type: "vimeo", src: "https://player.vimeo.com/video/697952097?h=80b534ac09", aspect: 0.8 },
      { type: "vimeo", src: "https://player.vimeo.com/video/697951960?h=0a9f7ac606", aspect: 0.8 },
    ],
  },
  {
    slug: "candid",
    title: "Candid",
    headline: "A Straighter Smile on Your Schedule",
    summary:
      "Education-led YouTube creative driving in-studio bookings and at-home starter kits.",
    focus: ["YouTube", "Acquisition"],
    cover: "/images/portfolio/candid.jpg",
    gallery: [
      "/images/projects/candid/01.png",
      "/images/projects/candid/02.jpg",
      "/images/projects/candid/03.jpg",
      "/images/projects/candid/04.png",
      "/images/projects/candid/05.jpg",
      "/images/projects/candid/06.jpg",
      "/images/projects/candid/07.png",
    ],
    videos: [
      { type: "vimeo", src: "https://player.vimeo.com/video/684477437?h=4f7d3e1140", aspect: 16 / 9 },
      { type: "vimeo", src: "https://player.vimeo.com/video/684477668?h=a5d0f848a3", aspect: 16 / 9 },
    ],
  },
  {
    slug: "burts-bees",
    title: "Burt's Bees",
    headline: "Selected work",
    cover: "/images/portfolio/burts-bees.png",
    gallery: [],
    videos: [
      { type: "file", src: "/videos/projects/burts-bees/01.mp4", aspect: 1 },
      { type: "file", src: "/videos/projects/burts-bees/02.mp4", aspect: 1 },
      { type: "file", src: "/videos/projects/burts-bees/03.mp4", aspect: 1 },
    ],
  },
  {
    slug: "milk-street",
    title: "Milk Street",
    headline: "Selected work",
    cover: "/images/portfolio/milk-street.jpg",
    gallery: [],
    videos: [
      { type: "file", src: "/videos/projects/milk-street/01.mp4", aspect: 16 / 9 },
      { type: "file", src: "/videos/projects/milk-street/02.mp4", aspect: 16 / 9 },
    ],
  },
  {
    slug: "harrys",
    title: "Harry's",
    headline: "Beard Care",
    cover: "/images/portfolio/harrys.jpg",
    gallery: [],
    videos: [
      { type: "file", src: "/videos/projects/harrys/01.mp4", aspect: 9 / 16 },
      { type: "file", src: "/videos/projects/harrys/02.mp4", aspect: 9 / 16 },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
