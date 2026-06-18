import {
  Coins,
  HeartPulse,
  Laptop,
  ShoppingBag,
  UtensilsCrossed,
  Factory,
  GraduationCap,
  Truck,
  Building2,
  Landmark,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { INDUSTRY_PAGES } from "@/data/industry-verticals";

export type IndustryNavLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  description: string;
};

const navMeta: { slug: string; name: string; icon: LucideIcon; description?: string }[] = [
  { slug: "hrms-for-fintech", name: "Fintech", icon: Coins },
  { slug: "hrms-for-healthcare", name: "Healthcare", icon: HeartPulse },
  { slug: "hrms-for-it-services", name: "IT & Software", icon: Laptop },
  { slug: "hrms-for-retail", name: "Retail", icon: ShoppingBag },
  { slug: "hrms-for-hospitality", name: "Hospitality", icon: UtensilsCrossed },
  { slug: "hrms-for-manufacturing", name: "Manufacturing", icon: Factory },
  { slug: "hrms-for-education", name: "Education", icon: GraduationCap },
  { slug: "hrms-for-logistics", name: "Logistics", icon: Truck },
  { slug: "hrms-for-real-estate", name: "Real Estate", icon: Building2 },
  { slug: "hrms-for-bfsi", name: "Banking & BFSI", icon: Landmark },
];

export const INDUSTRY_NAV_LINKS: IndustryNavLink[] = navMeta
  .filter((item) => INDUSTRY_PAGES[item.slug])
  .map((item) => {
    const page = INDUSTRY_PAGES[item.slug];
    return {
      name: item.name,
      href: page.path,
      icon: item.icon,
      description: item.description ?? page.subtitle.slice(0, 72) + (page.subtitle.length > 72 ? "…" : ""),
    };
  });

export const INDUSTRY_NAV_VIEW_ALL: IndustryNavLink = {
  name: "All industries",
  href: "/industries",
  icon: LayoutGrid,
  description: "Browse every industry HRMS solution from OfficeKit HR.",
};
