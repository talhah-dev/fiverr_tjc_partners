const footer = document.getElementById("footer");

footer.innerHTML = `
<footer class="w-full text-[#192532] relative">
  <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f7f8]"></div>
    <div class="absolute -left-28 top-10 h-[620px] w-[620px] rounded-full blur-3xl opacity-10 bg-[#00379d]"></div>
    <div class="absolute -right-32 top-6 h-[680px] w-[680px] rounded-full blur-3xl opacity-10 bg-[#336dff]"></div>
    <div class="absolute right-1/3 bottom-[-22rem] h-[760px] w-[760px] rounded-full blur-3xl opacity-10 bg-[#ff7264]"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 lg:px-10">
    <div class="pt-14 pb-14 border-y border-black/10">
      <div class="max-w-3xl mx-auto text-center">
        <h3 data-aos="fade-up" class="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
          Reach out to <span class="italic font-medium">TJC Partners</span>.
        </h3>
        <p data-aos="fade-up" class="mt-4 text-base sm:text-lg text-[#4d5560]">
          Executive search and transaction support—handled with speed, discretion, and a structured process.
        </p>

        <div data-aos="fade-up" class="mt-8 flex justify-center">
          <a href="#contact" class="inline-flex items-center justify-center gap-3 rounded-xl px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#00379d] to-[#ff7264] shadow-[0_18px_60px_rgba(0,0,0,0.14)] hover:opacity-95 transition">
            Get in touch <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>

    <div data-aos="fade" class="py-14">
      <div class="grid lg:grid-cols-12 gap-10 items-start">
        <div class="lg:col-span-3">
          <a href="./index.html" class="inline-flex items-center gap-3">
            <img src="./docs/assets/logo.png" alt="Logo" class="h-14 w-auto" />
          </a>
        </div>

        <div class="lg:col-span-3">
          <div class="text-sm font-semibold">Contact</div>
          <div class="mt-5 grid gap-5 text-base text-[#192532]">
            <a href="mailto:contact@tjc-partners.com" class="hover:text-[#00134d] transition">contact@tjc-partners.com</a>
            <a href="tel:+4930509305100" class="hover:text-[#00134d] transition">+49 30 509305 100</a>
            <div class="text-[#4d5560] leading-relaxed">
              Berlin • Germany
            </div>
          </div>
        </div>

        <div class="lg:col-span-3">
          <div class="text-sm font-semibold">Pages</div>
          <div class="mt-5 grid gap-5 text-base">
            <a href="./index.html" class="text-[#192532] hover:text-[#00134d] transition">Home.</a>
            <a href="./recruitment.html" class="text-[#192532] hover:text-[#00134d] transition">Recruitment.</a>
            <a href="./transaction-services.html" class="text-[#192532] hover:text-[#00134d] transition">Transaction Services.</a>
            <a href="./careers.html" class="text-[#192532] hover:text-[#00134d] transition">Careers.</a>
            <a href="./legal.html" class="text-[#192532] hover:text-[#00134d] transition">Legal.</a>
          </div>
        </div>

        <div class="lg:col-span-3">
          <div class="text-sm font-semibold">Legal & Social</div>
          <div class="mt-5 grid gap-5 text-base">
            <a href="./legal.html" class="text-[#192532] hover:text-[#00134d] transition">Privacy Policy.</a>
            <a href="./legal.html" class="text-[#192532] hover:text-[#00134d] transition">Cookie Policy.</a>
            <a href="./legal.html" class="text-[#192532] hover:text-[#00134d] transition">Impressum.</a>
            <button type="button" id="cookieSettingsBtn" class="text-left text-[#192532] hover:text-[#00134d] transition">Cookie settings.</button>
            <a href="#" class="text-[#192532] hover:text-[#00134d] transition">LinkedIn.</a>
          </div>

          <div class="mt-8 flex items-center gap-3">
            <a href="#" class="h-11 w-11 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl flex items-center justify-center hover:bg-white transition">
              <i class="fa-brands fa-linkedin-in text-[#192532]"></i>
            </a>
            <a href="#" class="h-11 w-11 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl flex items-center justify-center hover:bg-white transition">
              <i class="fa-brands fa-x-twitter text-[#192532]"></i>
            </a>
            <a href="mailto:contact@tjc-partners.com" class="h-11 w-11 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl flex items-center justify-center hover:bg-white transition">
              <i class="fa-solid fa-envelope text-[#192532]"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-14 pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div class="text-sm text-[#4d5560]">
          © <span id="yearNow"></span> TJC Partners. All rights reserved.
        </div>

        <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#4d5560]">
          <a href="./legal.html" class="hover:text-[#00134d] transition">Impressum</a>
          <a href="./legal.html" class="hover:text-[#00134d] transition">Privacy</a>
          <a href="#contact" class="hover:text-[#00134d] transition">Contact</a>
        </div>
      </div>
    </div>
  </div>
</footer>
`;

const yearNow = document.getElementById("yearNow");
if (yearNow) yearNow.textContent = new Date().getFullYear();
