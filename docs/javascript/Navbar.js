const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header id="siteHeader" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <nav class="mx-auto max-w-7xl px-4 lg:px-10">
    <div id="navShell" class="mt-4 flex items-center justify-between rounded-full px-4 sm:px-5 py-4 transition-all duration-300 bg-transparent">
      <a href="./index.html" class="flex items-center gap-3">
        <img src="./docs/assets/logo.png" alt="Logo" class="h-9 w-auto" />
      </a>

      <div class="hidden lg:flex items-center gap-8">
        <a class="navLink font-medium tracking-wide text-[#303b47] hover:text-[#192532] transition" href="./index.html">Home</a>
        <a class="navLink font-medium tracking-wide text-[#303b47] hover:text-[#192532] transition" href="./recruitment.html">Recruitment</a>
        <a class="navLink font-medium tracking-wide text-[#303b47] hover:text-[#192532] transition" href="./transaction-services.html">Transaction Services</a>
        <a class="navLink font-medium tracking-wide text-[#303b47] hover:text-[#192532] transition" href="./careers.html">Careers</a>
        <a class="navLink font-medium tracking-wide text-[#303b47] hover:text-[#192532] transition" href="./legal.html">Legal</a>
      </div>

      <div class="hidden lg:flex items-center gap-3">
        <div class="relative">
          <button id="langBtn" type="button" class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur-xl px-4 py-2 text-sm font-medium text-[#192532] hover:bg-white/75 transition" aria-haspopup="true" aria-expanded="false">
            <img src="/docs/assets/global.png" class="h-5" alt="">
            <span id="langCurrent">EN</span>
            <i class="fa-solid fa-chevron-down text-[10px] opacity-80"></i>
          </button>

          <div id="langMenu" class="absolute right-0 mt-2 w-44 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] opacity-0 scale-95 pointer-events-none transition duration-200 origin-top-right">
            <a href="./index.html" class="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#192532] hover:bg-black/[0.03] transition">
              English <span class="text-xs font-medium text-[#646b74]">EN</span>
            </a>
            <a href="./de/index.html" class="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#192532] hover:bg-black/[0.03] transition">
              Deutsch <span class="text-xs font-medium text-[#646b74]">DE</span>
            </a>
          </div>
        </div>

        <a href="#contact" class="inline-flex items-center justify-center rounded-full bg-[#00134d] px-5 py-2.5 text-sm font-medium text-white hover:opacity-95 transition">
          Contact
        </a>
      </div>

      <button id="navToggle" type="button" class="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white/60 backdrop-blur-xl text-[#192532] hover:bg-white/75 transition" aria-expanded="false" aria-controls="mobileMenu">
        <i id="navIcon" class="fa-solid fa-bars"></i>
      </button>
    </div>

    <div id="mobileMenu" class="lg:hidden mt-3 overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl opacity-0 max-h-0 pointer-events-none transition-all duration-300">
      <div class="p-4">
        <div class="grid gap-2">
          <a class="mobileLink rounded-xl px-4 py-3 text-sm font-medium text-[#192532] hover:bg-black/[0.04] transition" href="./index.html">Home</a>
          <a class="mobileLink rounded-xl px-4 py-3 text-sm font-medium text-[#192532] hover:bg-black/[0.04] transition" href="./recruitment.html">Recruitment</a>
          <a class="mobileLink rounded-xl px-4 py-3 text-sm font-medium text-[#192532] hover:bg-black/[0.04] transition" href="./transaction-services.html">Transaction Services</a>
          <a class="mobileLink rounded-xl px-4 py-3 text-sm font-medium text-[#192532] hover:bg-black/[0.04] transition" href="./careers.html">Careers</a>
          <a class="mobileLink rounded-xl px-4 py-3 text-sm font-medium text-[#192532] hover:bg-black/[0.04] transition" href="./legal.html">Legal</a>
        </div>

        <div class="mt-4 grid grid-cols-2 gap-3">
          <a href="./index.html" class="rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium text-[#192532] hover:bg-white transition flex items-center justify-between">
            English <span class="text-xs font-medium text-[#646b74]">EN</span>
          </a>
          <a href="./de/index.html" class="rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium text-[#192532] hover:bg-white transition flex items-center justify-between">
            Deutsch <span class="text-xs font-medium text-[#646b74]">DE</span>
          </a>
        </div>

        <a href="#contact" class="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[#00134d] px-5 py-3 text-sm font-medium text-white hover:opacity-95 transition">
          Contact
        </a>
      </div>
    </div>
  </nav>
</header>
`;

const navShell = document.getElementById("navShell");
const navToggle = document.getElementById("navToggle");
const navIcon = document.getElementById("navIcon");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = Array.from(document.querySelectorAll(".mobileLink"));
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

function setScrolledState(scrolled) {
  if (scrolled) {
    navShell.classList.add("bg-white/70", "backdrop-blur-xl", "border", "border-black/10", "shadow-[0_20px_60px_rgba(0,0,0,0.14)]");
    navShell.classList.remove("bg-transparent");
  } else {
    navShell.classList.add("bg-transparent");
    navShell.classList.remove("bg-white/70", "backdrop-blur-xl", "border", "border-black/10", "shadow-[0_20px_60px_rgba(0,0,0,0.14)]");
  }
}

function syncNav() {
  setScrolledState(window.scrollY > 12);
}

function openMobileMenu() {
  mobileMenu.classList.remove("opacity-0", "max-h-0", "pointer-events-none");
  mobileMenu.classList.add("opacity-100", "max-h-[520px]", "pointer-events-auto");
  navToggle.setAttribute("aria-expanded", "true");
  navIcon.classList.remove("fa-bars");
  navIcon.classList.add("fa-xmark");
}

function closeMobileMenu() {
  mobileMenu.classList.add("opacity-0", "max-h-0", "pointer-events-none");
  mobileMenu.classList.remove("opacity-100", "max-h-[520px]", "pointer-events-auto");
  navToggle.setAttribute("aria-expanded", "false");
  navIcon.classList.add("fa-bars");
  navIcon.classList.remove("fa-xmark");
}

function toggleMobileMenu() {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMobileMenu();
  else openMobileMenu();
}

function openLangMenu() {
  langMenu.classList.remove("opacity-0", "scale-95", "pointer-events-none");
  langMenu.classList.add("opacity-100", "scale-100", "pointer-events-auto");
  langBtn.setAttribute("aria-expanded", "true");
}

function closeLangMenu() {
  langMenu.classList.add("opacity-0", "scale-95", "pointer-events-none");
  langMenu.classList.remove("opacity-100", "scale-100", "pointer-events-auto");
  langBtn.setAttribute("aria-expanded", "false");
}

function toggleLangMenu(e) {
  e.stopPropagation();
  const isOpen = langBtn.getAttribute("aria-expanded") === "true";
  if (isOpen) closeLangMenu();
  else openLangMenu();
}

window.addEventListener("scroll", syncNav, { passive: true });

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) closeMobileMenu();
});

document.addEventListener("click", () => {
  if (langBtn) closeLangMenu();
});

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMobileMenu();
});

mobileLinks.forEach((a) => a.addEventListener("click", () => closeMobileMenu()));

if (langBtn && langMenu) {
  langBtn.addEventListener("click", toggleLangMenu);
  langMenu.addEventListener("click", (e) => e.stopPropagation());
}

syncNav();
