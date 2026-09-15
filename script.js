/* =========================================================
   Cheapster.in — script.js
   Vanilla JS. No frameworks.

   NOTE ON SCOPE:
   - Firebase Auth below uses PLACEHOLDER config keys (XXXX) and
     is NOT wired to a real Firebase project.
   - The giveaway form has full client-side UI + validation, but
     deliberately has NO fetch()/webhook call. Wire your own
     compliant backend/submission logic where marked below.
   ========================================================= */

/* ---------------------------------------------------------
   1. STORE DATA
   `logoUrl` uses Clearbit's public logo lookup (logo.clearbit.com/<domain>),
   a common way to render a brand's real, publicly-displayed logo
   without hosting the image file yourself. `websiteUrl` is each
   brand's normal, public homepage — NOT an affiliate link.
--------------------------------------------------------- */
const STORES = [
  // E-commerce & retail giants
  { name: "Flipkart", domain: "flipkart.com" },
  { name: "Amazon India", domain: "amazon.in" },
  { name: "Myntra", domain: "myntra.com" },
  { name: "Ajio", domain: "ajio.com" },
  { name: "Tata CLiQ", domain: "tatacliq.com" },
  { name: "Nykaa", domain: "nykaa.com" },
  { name: "Meesho", domain: "meesho.com" },
  { name: "AliExpress", domain: "aliexpress.com" },

  // Electronics & gadgets
  { name: "Croma", domain: "croma.com" },
  { name: "Samsung India", domain: "samsung.com" },
  { name: "OnePlus", domain: "oneplus.in" },
  { name: "Dell India", domain: "dell.com" },
  { name: "Lenovo", domain: "lenovo.com" },
  { name: "boAt Lifestyle", domain: "boat-lifestyle.com" },

  // Travel & booking
  { name: "MakeMyTrip", domain: "makemytrip.com" },
  { name: "Goibibo", domain: "goibibo.com" },
  { name: "Agoda", domain: "agoda.com" },
  { name: "Cleartrip", domain: "cleartrip.com" },
  { name: "Skyscanner", domain: "skyscanner.co.in" },
  { name: "Busbud", domain: "busbud.com" },

  // Food, grocery & daily essentials
  { name: "Blinkit", domain: "blinkit.com" },
  { name: "Swiggy", domain: "swiggy.com" },
  { name: "Zomato", domain: "zomato.com" },
  { name: "BigBasket", domain: "bigbasket.com" },
  { name: "Instacart", domain: "instacart.com" },

  // Finance, hosting & services
  { name: "Hostinger", domain: "hostinger.in" },
  { name: "Bluehost", domain: "bluehost.in" },
  { name: "GoDaddy", domain: "godaddy.com" },
  { name: "BankBazaar", domain: "bankbazaar.com" },
  { name: "Upstox", domain: "upstox.com" },
  { name: "Norton", domain: "norton.com" },
  { name: "Kaspersky", domain: "kaspersky.co.in" },

  // Jewellery, eyewear & beauty (leading Cuelinks beauty affiliates)
  { name: "Lenskart", domain: "lenskart.com" },
  { name: "Tanishq", domain: "tanishq.co.in" },
  { name: "Purplle", domain: "purplle.com" },
  { name: "SUGAR Cosmetics", domain: "sugarcosmetics.com" },
  { name: "MyGlamm", domain: "myglamm.com" },
  { name: "Lakme", domain: "lakmeindia.com" },
  { name: "Colorbar", domain: "colorbar.com" },
  { name: "Plum Goodness", domain: "plumgoodness.com" },
  { name: "Mamaearth", domain: "mamaearth.in" },
].map(store => ({
  storeName: store.name,
  logoUrl: `https://logo.clearbit.com/${store.domain}`,
  // Normal public homepage — placeholder swap point if you later
  // move to real affiliate deep links.
  affiliateLink: `https://www.${store.domain}`,
}));

/* ---------------------------------------------------------
   2. FIREBASE CONFIG (placeholder — fill with your real project)
--------------------------------------------------------- */
const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX",
  appId: "XXXX",
};

// Firebase Web SDK v10 (modular), loaded only when needed.
let firebaseApp = null;
let firebaseAuth = null;
let currentUser = null;

async function initFirebase() {
  if (firebaseApp) return;
  const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
  const { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } =
    await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");

  firebaseApp = initializeApp(firebaseConfig);
  firebaseAuth = getAuth(firebaseApp);

  onAuthStateChanged(firebaseAuth, (user) => {
    currentUser = user;
    renderAuthState();
  });

  // Expose the pieces the rest of the file needs, without polluting
  // the global namespace more than necessary.
  window.__cheapsterAuth = {
    provider: new GoogleAuthProvider(),
    signInWithPopup,
    signOut,
  };
}

async function handleGoogleLogin() {
  try {
    await initFirebase();
    const { provider, signInWithPopup } = window.__cheapsterAuth;
    await signInWithPopup(firebaseAuth, provider);
    // onAuthStateChanged above will update the UI.
  } catch (err) {
    console.error("Google sign-in failed:", err);
    alert("Login is not fully configured yet (placeholder Firebase keys). Replace firebaseConfig with your real project keys.");
  }
}

async function handleLogout() {
  try {
    if (!firebaseAuth) return;
    const { signOut } = window.__cheapsterAuth;
    await signOut(firebaseAuth);
  } catch (err) {
    console.error("Sign-out failed:", err);
  }
}

function renderAuthState() {
  const googleBtn = document.getElementById("googleLoginBtn");
  const profileMenu = document.getElementById("profileMenu");
  const profileName = document.getElementById("profileName");
  const profileAvatar = document.getElementById("profileAvatar");
  const authGuardNotice = document.getElementById("authGuardNotice");
  const giveawayForm = document.getElementById("giveawayForm");

  if (currentUser) {
    googleBtn.classList.add("hidden");
    profileMenu.classList.remove("hidden");
    const firstName = (currentUser.displayName || "Guest").split(" ")[0];
    profileName.textContent = firstName;
    profileAvatar.textContent = firstName.charAt(0).toUpperCase();

    // Logged in: reveal the actual form, hide the auth-guard prompt.
    authGuardNotice.classList.add("hidden");
    giveawayForm.classList.remove("hidden");
  } else {
    googleBtn.classList.remove("hidden");
    profileMenu.classList.add("hidden");
  }
}

/* ---------------------------------------------------------
   3. STORE GRID RENDER + SEARCH
--------------------------------------------------------- */
const storeGrid = document.getElementById("storeGrid");
const storeSearch = document.getElementById("storeSearch");
const searchCount = document.getElementById("searchCount");
const noResults = document.getElementById("noResults");
const noResultsTerm = document.getElementById("noResultsTerm");
const brandSelect = document.getElementById("brandSelect");

function renderStoreGrid(filter = "") {
  const term = filter.trim().toLowerCase();
  const matches = STORES.filter(s => s.storeName.toLowerCase().includes(term));

  storeGrid.innerHTML = "";
  matches.forEach(store => {
    const card = document.createElement("article");
    card.className = "store-card";

    const logoWrap = document.createElement("div");
    logoWrap.className = "store-logo-wrap";
    const img = document.createElement("img");
    img.src = store.logoUrl;
    img.alt = `${store.storeName} logo`;
    img.loading = "lazy";
    img.onerror = () => {
      logoWrap.innerHTML = `<span class="store-logo-fallback">${store.storeName}</span>`;
    };
    logoWrap.appendChild(img);

    const shopBtn = document.createElement("a");
    shopBtn.className = "store-shop-btn";
    shopBtn.href = store.affiliateLink;
    shopBtn.target = "_blank";
    shopBtn.rel = "noopener";
    shopBtn.textContent = "Shop Now";
    shopBtn.dataset.storeName = store.storeName;
    shopBtn.addEventListener("click", onShopNowClick);

    card.appendChild(logoWrap);
    card.appendChild(shopBtn);
    storeGrid.appendChild(card);
  });

  noResults.classList.toggle("hidden", matches.length > 0 || term === "");
  noResultsTerm.textContent = filter;
  searchCount.textContent = term
    ? `${matches.length} store${matches.length === 1 ? "" : "s"} found`
    : `${STORES.length} stores available`;
}

function populateBrandDropdown() {
  STORES.forEach(store => {
    const opt = document.createElement("option");
    opt.value = store.storeName;
    opt.textContent = store.storeName;
    brandSelect.appendChild(opt);
  });
}

function onShopNowClick(e) {
  // Let the link open the store in a new tab natively (target="_blank"),
  // and simultaneously surface the giveaway modal in this tab.
  const storeName = e.currentTarget.dataset.storeName;
  openModal("giveawayModal");
  if (storeName && brandSelect) {
    brandSelect.value = storeName;
  }
}

storeSearch.addEventListener("input", (e) => renderStoreGrid(e.target.value));

/* ---------------------------------------------------------
   4. MODAL SYSTEM (generic open/close)
--------------------------------------------------------- */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  const focusable = modal.querySelector("input, select, button");
  if (focusable) focusable.focus({ preventScroll: true });
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("hidden");
  const anyOpen = document.querySelectorAll(".modal-overlay:not(.hidden)").length > 0;
  if (!anyOpen) document.body.style.overflow = "";
}

document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay:not(.hidden)").forEach(m => closeModal(m.id));
  }
});

/* Footer legal/info modal triggers */
document.querySelectorAll("[data-modal]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.modal));
});

document.getElementById("offersClaimNow").addEventListener("click", () => {
  closeModal("modal-offers");
  openModal("giveawayModal");
});

/* ---------------------------------------------------------
   5. WELCOME MODAL — first visit only (localStorage)
--------------------------------------------------------- */
const WELCOME_KEY = "cheapster_welcome_seen";

function maybeShowWelcomeModal() {
  if (!localStorage.getItem(WELCOME_KEY)) {
    openModal("welcomeModal");
    localStorage.setItem(WELCOME_KEY, "true");
  }
}

/* ---------------------------------------------------------
   6. GIVEAWAY TRIGGERS + AUTH GUARD
--------------------------------------------------------- */
function openGiveawayFlow() {
  openModal("giveawayModal");
  const authGuardNotice = document.getElementById("authGuardNotice");
  const giveawayForm = document.getElementById("giveawayForm");

  if (currentUser) {
    authGuardNotice.classList.add("hidden");
    giveawayForm.classList.remove("hidden");
  } else {
    // Guest: intercept and ask for Google login before showing the form.
    authGuardNotice.classList.remove("hidden");
    giveawayForm.classList.add("hidden");
  }
}

document.getElementById("giveawayTriggerHeader").addEventListener("click", openGiveawayFlow);
document.getElementById("giveawayTriggerOffers").addEventListener("click", openGiveawayFlow);
document.getElementById("googleLoginBtn").addEventListener("click", handleGoogleLogin);
document.getElementById("authGuardLoginBtn").addEventListener("click", handleGoogleLogin);
document.getElementById("logoutBtn").addEventListener("click", handleLogout);

document.getElementById("profileTrigger").addEventListener("click", (e) => {
  const trigger = e.currentTarget;
  const dropdown = document.getElementById("profileDropdown");
  const expanded = trigger.getAttribute("aria-expanded") === "true";
  trigger.setAttribute("aria-expanded", String(!expanded));
  dropdown.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  const menu = document.getElementById("profileMenu");
  if (!menu.contains(e.target)) {
    document.getElementById("profileDropdown").classList.remove("open");
    document.getElementById("profileTrigger").setAttribute("aria-expanded", "false");
  }
});

/* ---------------------------------------------------------
   7. GIVEAWAY FORM — validation UI only.
   NO submission logic / webhook is wired up here on purpose.
   Hook your own compliant backend into this handler.
--------------------------------------------------------- */
const giveawayForm = document.getElementById("giveawayForm");

function validateField(id, isValid, message) {
  const input = document.getElementById(id);
  const errorEl = document.getElementById(`err-${id}`);
  input.classList.toggle("invalid", !isValid);
  errorEl.textContent = isValid ? "" : message;
  return isValid;
}

giveawayForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const orderId = document.getElementById("orderId").value.trim();
  const brand = document.getElementById("brandSelect").value;

  const validName = validateField("fullName", fullName.length >= 2, "Enter your full name.");
  const validWhatsapp = validateField("whatsapp", /^[0-9]{10}$/.test(whatsapp), "Enter a valid 10-digit number.");
  const validOrderId = validateField("orderId", orderId.length >= 4, "Enter your store order ID.");
  const validBrand = validateField("brand", brand.length > 0, "Select a brand.");

  if (!(validName && validWhatsapp && validOrderId && validBrand)) return;

  /* ---------------------------------------------------------
     SUBMISSION LOGIC INTENTIONALLY OMITTED.
     Example of what would go here once your backend is ready:

       const GOOGLE_WEBHOOK_URL = "XXXX";
       fetch(GOOGLE_WEBHOOK_URL, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ fullName, whatsapp, orderId, brand, uid: currentUser?.uid }),
       })
         .then(() => { closeModal("giveawayModal"); openModal("successModal"); giveawayForm.reset(); })
         .catch((err) => console.error("Submission failed:", err));
  --------------------------------------------------------- */
  console.log("Giveaway entry (UI only — not submitted anywhere):", { fullName, whatsapp, orderId, brand });
});

/* ---------------------------------------------------------
   8. INIT
--------------------------------------------------------- */
renderStoreGrid();
populateBrandDropdown();
maybeShowWelcomeModal();
renderAuthState();
