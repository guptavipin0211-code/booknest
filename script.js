(function () {
  "use strict";

  /* ----------------------------------------
     Config — edit prices / contact here
  ---------------------------------------- */
  const CONFIG = {
    whatsappNumber: "917088910225", // country code + number, no + or spaces
    email: "sumitmishra9058@gmail.com",
    bookTitle: "100 Game-Changing AI Tools for Creators",
    items: {
      ebook: { label: "eBook", price: 299, fullName: "eBook — 100 Game-Changing AI Tools for Creators" },
      audiobook: { label: "Audiobook", price: 399, fullName: "Audiobook — 100 Game-Changing AI Tools for Creators" },
      bundle: { label: "Bundle (eBook + Audiobook)", price: 549, fullName: "Bundle — 100 Game-Changing AI Tools for Creators" }
    }
  };

  /* ----------------------------------------
     Header scroll progress bar
  ---------------------------------------- */
  const progressBar = document.getElementById("progressBar");
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ----------------------------------------
     Mobile nav toggle
  ---------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ----------------------------------------
     Back to top button
  ---------------------------------------- */
  const backTop = document.getElementById("backTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
      backTop.classList.add("visible");
    } else {
      backTop.classList.remove("visible");
    }
  }, { passive: true });
  backTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ----------------------------------------
     FAQ accordion
  ---------------------------------------- */
  document.querySelectorAll(".acc-trigger").forEach(function (trigger) {
    const panel = trigger.nextElementSibling;
    trigger.addEventListener("click", function () {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      // close all
      document.querySelectorAll(".acc-trigger").forEach(function (t) {
        t.setAttribute("aria-expanded", "false");
        t.nextElementSibling.style.maxHeight = null;
      });

      if (!isOpen) {
        trigger.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /* ----------------------------------------
     Scroll reveal animation
  ---------------------------------------- */
  const revealTargets = document.querySelectorAll(
    ".section-title, .section-lede, .about-grid, .toc-list, .sample-page, .format-card, .who-card, .contact-grid, .faq-wrap .section-title"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  revealTargets.forEach(function (el) { observer.observe(el); });

  /* ----------------------------------------
     Payment modal
  ---------------------------------------- */
  const overlay = document.getElementById("modalOverlay");
  const modalClose = document.getElementById("modalClose");
  const modalItemName = document.getElementById("modalItemName");
  const modalPrice = document.getElementById("modalPrice");
  const modalTitle = document.getElementById("modalTitle");
  const confirmPayBtn = document.getElementById("confirmPayBtn");
  const emailInstead = document.getElementById("emailInstead");
  const stepPay = document.getElementById("stepPay");
  const stepDone = document.getElementById("stepDone");
  const modalDoneClose = document.getElementById("modalDoneClose");

  let currentItemKey = "ebook";

  function openModal(itemKey) {
    currentItemKey = CONFIG.items[itemKey] ? itemKey : "ebook";
    const item = CONFIG.items[currentItemKey];

    modalTitle.textContent = "Scan & pay";
    modalItemName.textContent = item.fullName;
    modalPrice.textContent = "\u20B9" + item.price;

    stepPay.classList.remove("modal-step-hidden");
    stepDone.classList.add("modal-step-hidden");

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn.getAttribute("data-open-modal"));
    });
  });

  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });

  confirmPayBtn.addEventListener("click", function () {
    const item = CONFIG.items[currentItemKey];
    const message =
      "Hi Sumit, I've just paid " + "\u20B9" + item.price + " for the " + item.label +
      " (" + CONFIG.bookTitle + "). Sharing my payment screenshot here — please send my download link.";
    const url = "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank", "noopener");

    stepPay.classList.add("modal-step-hidden");
    stepDone.classList.remove("modal-step-hidden");
  });

  emailInstead.addEventListener("click", function (e) {
    e.preventDefault();
    const item = CONFIG.items[currentItemKey];
    const subject = "Payment proof — " + item.label + " (" + CONFIG.bookTitle + ")";
    const body =
      "Hi Sumit,\n\nI've just paid \u20B9" + item.price + " for the " + item.label +
      ". I'm attaching my payment screenshot to this email — please send my download link.\n\nThanks!";
    const url = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = url;

    stepPay.classList.add("modal-step-hidden");
    stepDone.classList.remove("modal-step-hidden");
  });

  modalDoneClose.addEventListener("click", closeModal);

  /* ----------------------------------------
     Header background intensify on scroll
  ---------------------------------------- */
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 12) {
      header.style.boxShadow = "0 1px 0 rgba(23,22,26,0.04)";
    } else {
      header.style.boxShadow = "none";
    }
  }, { passive: true });
})();
