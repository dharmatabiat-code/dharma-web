// src/scripts/header.ts
interface NavItem {
  label: string;
  href: string;
}

interface SocialLink {
  icon: string;
  url: string;
}

export function initHeader() {
  const header = document.getElementById("main-header") as HTMLElement | null;
  const logo = document.getElementById("main-logo") as HTMLImageElement | null;
  const border = document.getElementById("header-border") as HTMLElement | null;
  const btn = document.getElementById("mobile-menu-btn") as HTMLButtonElement | null;
  const closeBtn = document.getElementById("mobile-menu-close") as HTMLButtonElement | null;
  const menu = document.getElementById("mobile-menu") as HTMLElement | null;
  const sidebar = document.getElementById("mobile-menu-sidebar") as HTMLElement | null;
  const links = document.querySelectorAll(".mobile-nav-link") as NodeListOf<HTMLAnchorElement>;

  if (!header || !logo || !border || !btn || !closeBtn || !menu || !sidebar) {
    console.warn("Header elements not found");
    return;
  }

  // IntersectionObserver para optimizar el scroll
  const observer = new IntersectionObserver(
    ([entry]) => {
      // Usamos entry.boundingClientRect.top para saber si estamos realmente arriba
      const isAtTop = entry.boundingClientRect.top >= 0 && entry.isIntersecting;

      if (!isAtTop) {
          header.classList.add("bg-white/90", "backdrop-blur-xl", "py-3", "shadow-lg", "shadow-slate-200/20");
          header.classList.remove("bg-transparent", "py-6");
          logo.classList.add("h-10", "md:h-12");
          logo.classList.remove("h-14", "md:h-16");
          border.classList.add("bg-slate-200/50");
      } else {
          header.classList.remove("bg-white/90", "backdrop-blur-xl", "py-3", "shadow-lg", "shadow-slate-200/20");
          header.classList.add("bg-transparent", "py-6");
          logo.classList.remove("h-10", "md:h-12");
          logo.classList.add("h-14", "md:h-16");
          border.classList.remove("bg-slate-200/50");
      }
    },
    { 
      threshold: [1], // Se activa justo cuando el sentinel está 100% visible
      rootMargin: "-1px 0px 0px 0px" // Un pequeño margen para anticipar el cambio
    }
  );

  // Observar un elemento sentinel (puedes agregar un div invisible al top)
  const sentinel = document.createElement("div");
  sentinel.style.position = "absolute";
  sentinel.style.top = "0";
  sentinel.style.height = "1px";
  document.body.insertBefore(sentinel, document.body.firstChild);
  observer.observe(sentinel);

  // Gestión del menú móvil con accesibilidad mejorada
  const toggleMenu = (open: boolean) => {
    if (open) {
      menu.classList.remove("opacity-0", "invisible");
      sidebar.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
      btn.setAttribute("aria-expanded", "true");
    } else {
      menu.classList.add("opacity-0", "invisible");
      sidebar.classList.add("translate-x-full");
      document.body.style.overflow = "";
      btn.setAttribute("aria-expanded", "false");
    }
  };

  btn.addEventListener("click", () => toggleMenu(true));
  closeBtn.addEventListener("click", () => toggleMenu(false));
  menu.addEventListener("click", (e) => {
    if (e.target === menu) toggleMenu(false);
  });
  links.forEach((link) => link.addEventListener("click", () => toggleMenu(false)));

  // Soporte para teclado: cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.classList.contains("invisible")) {
      toggleMenu(false);
    }
  });
}