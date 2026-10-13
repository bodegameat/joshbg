export type Project = {
  slug: string;
  title: string;
  role?: string;
  headline?: string;
  paragraphs: string[];
  cover: string;
  gallery: string[];
  sections?: { title: string; body: string }[];
};

export const site = {
  name: "Josh Bryant-Gainer",
  email: "joshuabryantgainer@gmail.com",
  phone: "(304) 279-6645",
  phoneHref: "tel:+13042796645",
  linkedin: "https://www.linkedin.com/in/joshuabg/",
  linkedinLabel: "linkedin.com/in/joshuabg/",
  bio: "Hi, I'm Josh. I'm a Brooklyn-based Creative Director & Performance Strategist that helps high-growth companies scale digital channels while staying true to their brand.",
  heroImage: "/images/hero.jpg",
};

export const projects: Project[] = [
  {
    slug: "truebill",
    title: "Truebill",
    role: "Creative Director",
    headline: "The All-In-One Finance App",
    paragraphs: [
      "Truebill came to Jump450 looking to increase downloads of their powerful finance app. As the Creative Director overseeing Truebill's account at Jump450, I worked alongside a team to help Truebill garner over 1.9 Million app installs via Google channels. Through hundreds of video iterations, we were able to transform Youtube into an acquisition channel—and ultimately assist Truebill bolster performance ahead of their $1.275 Billion acquisition by Rocket Mortgage.",
    ],
    cover: "/images/portfolio/truebill.png",
    gallery: [],
  },
  {
    slug: "aspiration",
    title: "Aspiration",
    role: "Creative Director",
    headline: "The Eco-Friendly Debit Card",
    paragraphs: [
      "Aspiration Came to Jump450 with a clear goal—rapidly acquire new users while also educating them about the powerful environmental benefits they offer. As the Creative Director and creative lead on Aspiration at Jump 450, I was able to help the Jump team acquire hundreds of thousands of new users through digital channels.",
      "Through UGC, promotional messaging, and thousands creative iterations — Jump was able to help Aspiration change the fintech space, and the planet for the better.",
    ],
    cover: "/images/portfolio/aspiration.jpg",
    gallery: [],
  },
  {
    slug: "moneylion",
    title: "MoneyLion",
    role: "Creative Director",
    headline: "Need Cash? We Got You",
    paragraphs: [
      "In a crowded fintech space, MoneyLion differentiates itself with a suite of features designed to give financial support whenever users need it. By maintaining a positive tone, and showcasing MoneyLion's use-cases—we've been able to help garner over hundreds of thousands of app installs (and counting).",
    ],
    cover: "/images/portfolio/moneylion.png",
    gallery: [],
  },
  {
    slug: "milk-bar",
    title: "Milk Bar",
    role: "Creative Director",
    headline: "Iconic Desserts Delivered",
    paragraphs: [
      "Jump 450's work with Milk Bar helped combine Milk Bar's strong brand identity with direct response principles and performance-focused creative production strategies to rapidly scale digital channels. By working closely with the Milk Bar team and aligning on high level creative structures, we were able to scale up creative production and fuel large-scale tests, optimizing both seasonal and evergreen campaigns on a consistent basis.",
    ],
    cover: "/images/portfolio/milk-bar.jpg",
    gallery: [
      "/images/projects/milk-bar/01.png",
      "/images/projects/milk-bar/02.jpg",
      "/images/projects/milk-bar/03.jpg",
      "/images/projects/milk-bar/04.jpg",
    ],
  },
  {
    slug: "zarbees-naturals",
    title: "Zarbee's",
    role: "Copywriter",
    headline: "Ready for anything…almost",
    paragraphs: [],
    cover: "/images/portfolio/zarbees-naturals.png",
    gallery: [
      "/images/projects/zarbees-naturals/01.jpg",
      "/images/projects/zarbees-naturals/02.jpg",
      "/images/projects/zarbees-naturals/03.jpg",
      "/images/projects/zarbees-naturals/04.jpg",
      "/images/projects/zarbees-naturals/05.jpg",
      "/images/projects/zarbees-naturals/06.jpg",
    ],
    sections: [
      {
        title: "Ready for anything…almost",
        body: "Zarbee's Naturals wanted to launch a campaign that highlighted their comprehensive baby line. Taking a positive approach to the apprehension new parents feel, we created \"Ready for Anything. Almost.\" By speaking authentically to how parents feel, we were able to showcase Zarbee's products while also building a connection with the brand.",
      },
      {
        title: "Preparing for Winter",
        body: "Zarbee's Naturals, a Johnson & Johnson brand, was looking to increase sales of their immune support products. As a response, we created the \"Preparing for Winter\" campaign. By framing immune support as a vital part of winter preparation, we tapped into natural rituals, changed consumer behavior, and increased sales.",
      },
    ],
  },
  {
    slug: "flamingo",
    title: "Flamingo",
    role: "Creative Director",
    headline: "High-Quality Razors for Less",
    paragraphs: [
      "Flamingo set out to position their women's razor against larger competitors with more authentic messaging, and a less-expensive product. Through UGC marketing, we were able to create easily accessible content that stopped the scroll while demonstrating Flamingo's incredible value.",
    ],
    cover: "/images/portfolio/flamingo.jpg",
    gallery: [],
  },
  {
    slug: "candid",
    title: "Candid",
    role: undefined,
    headline: "A Straighter Smile on Your Schedule",
    paragraphs: [
      "With a world-class network of orthodontists and an innovative remote monitoring system, Candid poised itself to transform the clear aligners industry to be more effective, less costly, and much easier. By taking an approach that was simultaneously education/conversation-focused, we were able to to turn Youtube into an acquisition channel driving both booked in-studio appointments and at-home starter kits.",
    ],
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
  },
  {
    slug: "burts-bees",
    title: "Burt's Bees",
    paragraphs: [],
    cover: "/images/portfolio/burts-bees.png",
    gallery: [],
  },
  {
    slug: "milk-street",
    title: "Milk Street",
    paragraphs: [],
    cover: "/images/portfolio/milk-street.jpg",
    gallery: [],
  },
  {
    slug: "harrys",
    title: "Harry's",
    headline: "Harry's Beard Care",
    paragraphs: [],
    cover: "/images/portfolio/harrys.jpg",
    gallery: [],
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
