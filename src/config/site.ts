import { type Options as ExternalLinksOptions } from "rehype-external-links";
import type { ElementContent } from "hast";

export const siteConfig = {
  /** Wordmark shown in the header and footer. */
  name: "Drupheus.dev",
  tagline: "",
  title: "Drupheus - A Blog about web development by Marco Pagliarulo",
  description:
    ".",
  siteUrl: "https://drupheus.dev",
  authorName: "Marco Pagliarulo",
  email: "",
  language: "en",
  dateLocale: "en-GB",
  locale: "en_GB",
  socialImage: "/og-image.png",
  /** Shown in the home sidebar "About" card. */
  about:
    "Drupheus.dev is the personal blog by Marco Pagliarulo, 20+ years of experience as Senior Drupal Developer and Software Engineer.",
  /**
   * Both forms below ship enabled with an empty `action`, which makes them fully
   * interactive demos that submit nowhere: a small script confirms the submit
   * and clears the fields. Paste your provider's endpoint into `action` to send
   * real submissions, or set `enabled: false` to disable the controls outright.
   */
  newsletter: {
    enabled: false,
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "Get new posts by email",
    description: "One email when something new goes up. No spam, unsubscribe anytime.",
  },
  contact: {
    enabled: true,
    action: "https://api.web3forms.com/submit",
    method: "post",
    responseTime: "",
    access_key: "75293fc4-5951-4fbc-be34-7b11dc6b96ce"
  },
  socials: [
    { label: "Drupal", href: "https://www.drupal.org/u/marcopagliarulo" },
    { label: "GitHub", href: "https://github.com/marcopagliarulo" },
    { label: "Linkedin", href: "https://www.linkedin.com/in/marcopagliarulo" },
    { label: "RSS", href: "/rss.xml" },
  ],
  projects: [
    { name: "@climbr", href: "https://www.npmjs.com/package/@climbr/core", description: "A TypeScript-first framework for building Node.js CLI tools" },
    { name: "Protected Pages Extra", href: "https://www.drupal.org/project/protected_pages_extra", description: "Drupal module that protects pages with a simple password" },
    { name: "LocalGov Microsites Sitemap", href: "https://www.drupal.org/project/localgov_microsites_sitemap", description: "Drupal module that integrates [Simple XML sitemap](https://www.drupal.org/project/simple_sitemap) with [LocalGov Drupal Microsites](https://www.drupal.org/project/localgov_microsites)" }
  ]
};

/** Header navigation. Add or remove entries freely; the header renders them in order. */
export const navigation = [
  { label: "Archive", href: "/posts/" },
  { label: "Categories", href: "/categories/" },
  { label: "About", href: "/about/" },
];

/** Secondary navigation rendered in the footer. */
export const footerNavigation = [
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "RSS", href: "/rss.xml" },
];

const newTabNote: ElementContent = {
  type: "element",
  tagName: "span",
  properties: { className: ["sr-only"] },
  children: [{ type: "text", value: " (opens in a new tab)" }],
};

/** Lucide's `arrow-up-right`, matching what "@astro/lucide" renders. */
const arrowUpRight: ElementContent = {
  type: "element",
  tagName: "svg",
  properties: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ariaHidden: "true",
  },
  children: [
    { type: "element", tagName: "path", properties: { d: "M7 7h10v10" }, children: [] },
    { type: "element", tagName: "path", properties: { d: "M7 17 17 7" }, children: [] },
  ],
};

export const externalLinks: ExternalLinksOptions = {
  target: "_blank",
  rel: ["noopener", "noreferrer"],
  content: [arrowUpRight, newTabNote],
  contentProperties: { className: ["external-link-icon"] },
}