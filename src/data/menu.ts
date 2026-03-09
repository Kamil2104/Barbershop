import type { MenuItem } from "@/types/navigation"

export const MENU_ITEMS: MenuItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find Us", href: "#location" },
  { label: "Contact", href: "#contact" }
]

export const FOOTER_LINKS: MenuItem[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]