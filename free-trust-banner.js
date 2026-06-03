// ReadEasy30 100% free trust banner
// Lightweight sitewide helper to make the free promise unmistakable.
(function () {
  function addStyles() {
    if (document.getElementById("freeTrustBannerStyles")) return;
    const style = document.createElement("style");
    style.id = "freeTrustBannerStyles";
    style.textContent = ".free-trust-banner{margin:1rem auto;padding:.9rem 1rem;border:1px solid #bae6fd;background:#f0f9ff;color:#0f172a;border-radius:1rem;box-shadow:0 8px 24px rgba(15,23,42,.06);font-weight:800;line-height:1.5}.free-trust-banner strong{color:#0369a1}.free-trust-banner span{display:inline-block;margin-right:.75rem}.free-trust-banner .free-trust-small{font-weight:700;color:#475569}@media(max-width:650px){.free-trust-banner span{display:block;margin:.2rem 0}}";
    document.head.appendChild(style);
  }

  function addBanner() {
    if (document.getElementById("freeTrustBanner")) return;
    addStyles();
    const target = document.querySelector(".hero .subtitle") || document.querySelector(".lesson-subtitle") || document.querySelector(".app-header") || document.querySelector("main");
    if (!target) return;
    const banner = document.createElement("aside");
    banner.id = "freeTrustBanner";
    banner.className = "free-trust-banner";
    banner.setAttribute("aria-label", "ReadEasy30 is 100 percent free");
    banner.innerHTML = "<span><strong>100% free.</strong></span><span>No payment.</span><span>No subscription.</span><span>No trial.</span><span class='free-trust-small'>Calm reading practice for everyone.</span>";
    target.insertAdjacentElement("afterend", banner);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addBanner);
  else addBanner();
})();
