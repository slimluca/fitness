import type { LinkItem } from "@/content/types";

export function normalizeCommercialHref(href: string) {
  if (href.startsWith("/book-consultation")) {
    return href.replace("/book-consultation", "/contact?intent=consultation");
  }

  if (href === "/pricing") {
    return "/personal-training";
  }

  if (href === "/faq") {
    return "/contact";
  }

  if (
    href === "/services/private-personal-training" ||
    href === "/services/couple-training" ||
    href === "/services/house-calls"
  ) {
    return "/personal-training";
  }

  if (href === "/services/online-coaching") {
    return "/online-coaching";
  }

  if (href === "/personal-trainer-grand-baie") {
    return "/personal-trainer-mauritius";
  }

  return href;
}

export function normalizeCommercialLabel(label: string, href: string) {
  if (/^request availability$/i.test(label)) {
    return "Book Consultation";
  }

  if (href === "/pricing" || /^view pricing$/i.test(label)) {
    return "Personal Training";
  }

  if (
    href === "/services/private-personal-training" ||
    href === "/services/couple-training" ||
    href === "/services/house-calls"
  ) {
    return "Personal Training";
  }

  if (href === "/services/online-coaching") {
    return "Online Coaching";
  }

  if (href === "/personal-trainer-grand-baie") {
    return "Personal Trainer Mauritius";
  }

  return label;
}

export function normalizeCommercialLink(link: LinkItem): LinkItem {
  if (/^request availability$/i.test(link.label)) {
    return {
      label: "Book Consultation",
      href: "/contact?intent=consultation",
    };
  }

  return {
    label: normalizeCommercialLabel(link.label, link.href),
    href: normalizeCommercialHref(link.href),
  };
}
