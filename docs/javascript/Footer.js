const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="w-full bg-[#00134d] text-white relative overflow-hidden">
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute -left-28 -top-28 h-[520px] w-[520px] rounded-full blur-3xl opacity-18 bg-[#00379d]"></div>
    <div class="absolute -right-28 bottom-0 h-[520px] w-[520px] rounded-full blur-3xl opacity-16 bg-[#336dff]"></div>
    <div class="absolute left-1/3 -bottom-56 h-[620px] w-[620px] rounded-full blur-3xl opacity-14 bg-[#ff7264]"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/15"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-10">
    <div class="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 lg:p-10">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <div class="text-sm font-medium text-white/75">Lorem ipsum</div>
          <h3 class="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
            Ready to discuss your next step?
          </h3>
          <p class="mt-3 text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <a href="#contact" class="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-[#00134d] text-sm font-semibold hover:bg-white/90 transition">
            Contact
          </a>
          <a href="#services" class="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white text-sm font-semibold hover:bg-white/10 transition">
            Services
          </a>
        </div>
      </div>
    </div>

    <div class="mt-12 grid lg:grid-cols-12 gap-10">
      <div class="lg:col-span-4">
        <a href="#" class="inline-flex items-center gap-3">
          <span class="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
            <span class="h-3 w-3 rounded-full bg-[#336dff]"></span>
          </span>
          <span class="text-lg font-semibold tracking-tight">TJC Partners</span>
        </a>

        <p class="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <div class="mt-6 flex items-center gap-3">
          <a href="#" class="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/15 transition">
            <i class="fa-brands fa-linkedin-in text-white"></i>
          </a>
          <a href="#" class="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/15 transition">
            <i class="fa-brands fa-x-twitter text-white"></i>
          </a>
          <a href="#" class="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/15 transition">
            <i class="fa-solid fa-envelope text-white"></i>
          </a>
        </div>
      </div>

      <div class="lg:col-span-8">
        <div class="grid sm:grid-cols-3 gap-8">
          <div>
            <div class="text-sm font-semibold text-white">Pages</div>
            <ul class="mt-4 grid gap-3 text-sm text-white/70">
              <li><a href="#" class="hover:text-white transition">Home</a></li>
              <li><a href="#" class="hover:text-white transition">Recruitment</a></li>
              <li><a href="#" class="hover:text-white transition">Transaction Services</a></li>
              <li><a href="#" class="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          <div>
            <div class="text-sm font-semibold text-white">Legal</div>
            <ul class="mt-4 grid gap-3 text-sm text-white/70">
              <li><a href="#" class="hover:text-white transition">Impressum</a></li>
              <li><a href="#" class="hover:text-white transition">Privacy</a></li>
              <li><button type="button" id="cookieSettingsBtn" class="text-left hover:text-white transition">Cookie settings</button></li>
            </ul>
          </div>

          <div>
            <div class="text-sm font-semibold text-white">Language</div>
            <div class="mt-4 grid gap-3">
              <a href="#" class="inline-flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition">
                <span class="text-white/85">English</span>
                <span class="text-xs font-medium text-white/60">EN</span>
              </a>
              <a href="#" class="inline-flex items-center justify-between rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition">
                <span class="text-white/85">Deutsch</span>
                <span class="text-xs font-medium text-white/60">DE</span>
              </a>
            </div>

            <div class="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5">
              <div class="flex items-start gap-3">
                <div class="h-10 w-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <i class="fa-solid fa-location-dot text-white"></i>
                </div>
                <div>
                  <div class="text-sm font-semibold">Office</div>
                  <div class="mt-1 text-sm text-white/70">Lorem ipsum dolor sit amet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div class="text-xs text-white/60">
        © <span id="yearNow">2026</span> TJC Partners. Lorem ipsum dolor sit amet.
      </div>

      <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/60">
        <a href="#" class="hover:text-white transition">Impressum</a>
        <a href="#" class="hover:text-white transition">Privacy</a>
        <a href="#contact" class="hover:text-white transition">Contact</a>
      </div>
    </div>
  </div>

  <div class="h-2 w-full bg-gradient-to-r from-[#00379d] via-[#336dff] to-[#ff7264]"></div>
</footer>


`