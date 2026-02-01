import type { JSX } from "react";

export type navItems = {
  label: string;
  href: string;
};

export type testimonialsItems = {
  user: string;
  company: string;
  image: string;
  text: string;
};

export type featuresItems = {
  icon: JSX.Element;
  text: string;
  description: string;
};

export type checklistItems = {
  title: string;
  description: string;
};

export type pricingOptionsItems = {
  title: string;
  price: string;
  features: string[];
};

export type resourcesLinksItems = {
  href: string;
  text: string;
};

export type platformLinksItems = {
  href: string;
  text: string;
};

export type communityLinksItems = {
  href: string;
  text: string;
};
