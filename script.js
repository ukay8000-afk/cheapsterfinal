/* =========================================================
   CHEAPSTER.IN
   Vanilla JS + Firebase v9/v10 Modular SDK
========================================================= */

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

/* =========================================================
   CONFIGURATION
========================================================= */

/*
  Replace these Firebase placeholders with your real Firebase
  Web App configuration.

  Firebase Console:
  Project Settings
  -> Your apps
  -> Web app
*/
const FIREBASE_CONFIG = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_PROJECT.firebaseapp.com",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
};

/*
  Replace this with your real webhook endpoint.

  The browser will POST JSON here when a logged-in user
  submits the giveaway form.
*/
const WEBHOOK_URL = "YOUR_WEBHOOK_URL";

/*
  WhatsApp support number specified in the brief.
  International format, WITHOUT + or spaces.
*/
const WHATSAPP_SUPPORT_NUMBER = "919999999999";

/*
  One-time welcome popup key.

  IMPORTANT:
  - localStorage is used.
  - No focus event.
  - No visibilitychange event.
  - No recurring timer.
*/
const WELCOME_STORAGE_KEY = "cheapster_welcome_seen_v1";

/* =========================================================
   STORE DATA
========================================================= */

const STORES = [
  {
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.in",
    affiliateUrl: "#"
  },
  {
    name: "Flipkart",
    logo: "https://logo.clearbit.com/flipkart.com",
    affiliateUrl: "#"
  },
  {
    name: "Myntra",
    logo: "https://logo.clearbit.com/myntra.com",
    affiliateUrl: "#"
  },
  {
    name: "AJIO",
    logo: "https://logo.clearbit.com/ajio.com",
    affiliateUrl: "#"
  },
  {
    name: "Nykaa",
    logo: "https://logo.clearbit.com/nykaa.com",
    affiliateUrl: "#"
  }
];

/* =========================================================
   FIREBASE INITIALIZATION
========================================================= */

let firebaseApp = null;
let auth = null;
let googleProvider = null;

const firebaseConfigured =
  FIREBASE_CONFIG.apiKey &&
  !FIREBASE_CONFIG.apiKey.startsWith("YOUR_") &&
  FIREBASE_CONFIG.projectId &&
  !FIREBASE_CONFIG.projectId.startsWith("YOUR_");

if (firebaseConfigured) {
  try {
    firebaseApp = initializeApp(FIREBASE_CONFIG);
    auth = getAuth(firebaseApp);
    googleProvider = new GoogleAuthProvider();

    googleProvider.setCustomParameters({
      prompt: "select_account"
    });
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.warn(
    "Firebase is not configured yet. Add your real Firebase Web App keys to script.js."
  );
}

/* =========================================================
   DOM REFERENCES
========================================================= */

const storeGrid = document.getElementById("storeGrid");
const emptyState = document.getElementById("emptyState");
const storeCount = document.getElementById("storeCount");
const searchInput = document.getElementById("storeSearch");
const clearSearchButton = document.getElementById("clearSearch");

const welcomeModal = document.getElementById("welcomeModal");
const giveawayModal = document.getElementById("giveawayModal");
const authNotice = document.getElementById("authNotice");

const headerGiveawayBtn =
  document.getElementById("headerGiveawayBtn");

const welcomeClaimBtn =
  document.getElementById("welcomeClaimBtn");

const googleLoginBtn =
  document.getElementById("googleLoginBtn");

const googleLoginText =
  document.getElementById("googleLoginText");

const giveawayForm =
  document.getElementById("giveawayForm");

const giveawaySuccess =
  document.getElementById("giveawaySuccess");

const submitEntryBtn =
  document.getElementById("submitEntryBtn");

const contactForm =
  document.getElementById("contactForm");

const currentYear =
  document.getElementById("currentYear");

let currentUser = null;

/* =========================================================
   UTILITIES
========================================================= */

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

function setLoading(button, loading, defaultText = "Submit Entry") {
  const label = button.querySelector(".button-label");
  const loader = button.querySelector(".button-loader");

  button.disabled = loading;

  if (label) {
    label.textContent = loading
      ? "Submitting..."
      : defaultText;
  }

  if (loader) {
    loader.hidden = !loading;
  }
}

function getElement(id) {
  return document.getElementById(id);
}

function clearFieldError(inputId, errorId) {
  const input = getElement(inputId);
  const error = getElement(errorId);

  if (input) {
    input.closest(".form-group")?.classList.remove("has-error");
  }

  if (error) {
    error.textContent = "";
  }
}

function showFieldError(inputId, errorId, message) {
  const input = getElement(inputId);
  const error = getElement(errorId);

  if (input) {
    input.closest(".form-group")?.classList.add("has-error");
  }

  if (error) {
    error.textContent = message;
  }
}

/* =========================================================
   MODAL SYSTEM
========================================================= */

function openModal(modalElement) {
  if (!modalElement) {
    return;
  }

  modalElement.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(modalElement) {
  if (!modalElement) {
    return;
  }

  modalElement.hidden = true;

  const anyOpenModal = document.querySelector(
    ".modal-overlay:not([hidden])"
  );

  if (!anyOpenModal) {
    document.body.style.overflow = "";
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach((modal) => {
    modal.hidden = true;
  });

  document.body.style.overflow = "";
}

/* Explicit modal click triggers only */
document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.closeModal;
    closeModal(getElement(modalId));
  });
});

document.querySelectorAll("[data-info-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.infoModal;
    openModal(getElement(modalId));
  });
});

/*
  Clicking the dimmed area closes the modal.
  Clicking inside the actual card does not.
*/
document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal(overlay);
    }
  });
});

/* Escape closes the currently open modal */
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  const openOverlay = document.querySelector(
    ".modal-overlay:not([hidden])"
  );

  if (openOverlay) {
    closeModal(openOverlay);
  }
});

/* =========================================================
   WELCOME POPUP
========================================================= */

/*
  Shows strictly once in the browser profile lifetime,
  controlled only by localStorage.

  There is intentionally NO:
  window.focus
  visibilitychange
  setInterval
  recurring event
*/

function shouldShowWelcome() {
  try {
    return localStorage.getItem(WELCOME_STORAGE_KEY) !== "1";
  } catch (error) {
    /*
      If localStorage is unavailable, avoid popup spam.
      We simply don't repeatedly force the popup.
    */
    console.warn("localStorage unavailable:", error);
    return false;
  }
}

function markWelcomeAsSeen() {
  try {
    localStorage.setItem(WELCOME_STORAGE_KEY, "1");
  } catch (error) {
    console.warn("Could not persist welcome state:", error);
  }
}

/*
  The welcome popup appears after the DOM has loaded once.
*/
function initializeWelcomePopup() {
  if (!shouldShowWelcome()) {
    return;
  }

  markWelcomeAsSeen();

  window.setTimeout(() => {
    openModal(welcomeModal);
  }, 550);
}

/* =========================================================
   GIVEAWAY MODAL
========================================================= */

/*
  This function is ONLY called by an explicit user action:
  - Claim Giveaway button
  - Shop Now button
  - Welcome Claim button
*/
function openGiveawayModal() {
  resetGiveawayState();
  updateAuthNotice();
  openModal(giveawayModal);
}

headerGiveawayBtn.addEventListener("click", () => {
  openGiveawayModal();
});

welcomeClaimBtn.addEventListener("click", () => {
  closeModal(welcomeModal);
  openGiveawayModal();
});

/* =========================================================
   STORE CARDS
========================================================= */

function renderStores(stores) {
  storeGrid.innerHTML = "";

  stores.forEach((store) => {
    const card = document.createElement("article");
    card.className = "store-card";
    card.dataset.storeName = store.name.toLowerCase();

    card.innerHTML = `
      <div class="store-logo-wrap">
        <img
          class="store-logo"
          src="${escapeHtml(store.logo)}"
          alt="${escapeHtml(store.name)} logo"
          loading="lazy"
          referrerpolicy="no-referrer"
        />
      </div>

      <h3 class="store-name">${escapeHtml(store.name)}</h3>
      <p class="store-meta">Shop through Cheapster.in</p>

      <button
        type="button"
        class="shop-button"
        data-shop-store="${escapeHtml(store.name)}"
      >
        Shop Now
      </button>
    `;

    const logo = card.querySelector(".store-logo");

    /*
      Clearbit can fail or become unavailable.
      Use a lightweight visual fallback instead of leaving
      a broken image icon.
    */
    logo.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "store-logo-fallback";
      fallback.textContent = getInitials(store.name);

      logo.replaceWith(fallback);
    });

    const shopButton = card.querySelector(".shop-button");

    shopButton.addEventListener("click", () => {
      handleShopNow(store);
    });

    storeGrid.appendChild(card);
  });

  updateStoreCount(stores.length);
}

function updateStoreCount(count) {
  storeCount.textContent =
    `${count} ${count === 1 ? "Store" : "Stores"}`;

  emptyState.hidden = count !== 0;
}

function filterStores(query) {
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = STORES.filter((store) =>
    store.name.toLowerCase().includes(normalizedQuery)
  );

  renderStores(filtered);

  clearSearchButton.classList.toggle(
    "visible",
    normalizedQuery.length > 0
  );
}

searchInput.addEventListener("input", () => {
  filterStores(searchInput.value);
});

clearSearchButton.addEventListener("click", () => {
  searchInput.value = "";
  filterStores("");
  searchInput.focus();
});

/* =========================================================
   SHOP NOW
========================================================= */

function handleShopNow(store) {
  /*
    Requirement:
    1. Open affiliate URL in a NEW tab.
    2. Open Giveaway Modal in CURRENT tab.

    The placeholder URL "#" is handled gracefully.
  */

  const affiliateUrl = store.affiliateUrl || "#";

  if (affiliateUrl === "#") {
    /*
      When affiliate URLs are still "#", opening a real
      blank/new document would add unnecessary navigation.
      We still create the requested new-tab behavior.
    */
    window.open("#", "_blank", "noopener,noreferrer");
  } else {
    window.open(
      affiliateUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  openGiveawayModal();

  /*
    Pre-select the store in the giveaway form.
  */
  const brandSelect = getElement("brand");

  if (brandSelect) {
    const matchingOption =
      [...brandSelect.options].find(
        (option) =>
          option.value.toLowerCase() ===
          store.name.toLowerCase()
      );

    if (matchingOption) {
      brandSelect.value = matchingOption.value;
    }
  }
}

/* =========================================================
   FIREBASE AUTHENTICATION
========================================================= */

async function handleGoogleLogin() {
  if (!auth || !googleProvider) {
    alert(
      "Firebase is not configured yet. Please add your Firebase Web App configuration in script.js."
    );
    return;
  }

  googleLoginBtn.disabled = true;

  const originalText =
    googleLoginText.textContent;

  googleLoginText.textContent = "Signing in...";

  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error("Google sign-in error:", error);

    if (error.code === "auth/popup-closed-by-user") {
      return;
    }

    if (error.code === "auth/popup-blocked") {
      alert(
        "The Google login popup was blocked by your browser. Please allow popups for this site and try again."
      );
      return;
    }

    alert(
      "Google login failed. Please try again."
    );
  } finally {
    googleLoginBtn.disabled = false;

    if (currentUser) {
      googleLoginText.textContent =
        getShortUserName(currentUser);
    } else {
      googleLoginText.textContent = originalText;
    }
  }
}

function getShortUserName(user) {
  if (!user) {
    return "Login with Google";
  }

  if (user.displayName) {
    const firstName =
      user.displayName.trim().split(/\s+/)[0];

    return firstName.length > 15
      ? `${firstName.slice(0, 15)}…`
      : firstName;
  }

  if (user.email) {
    return user.email.split("@")[0];
  }

  return "Account";
}

function updateAuthUI() {
  if (currentUser) {
    googleLoginText.textContent =
      getShortUserName(currentUser);

    googleLoginBtn.setAttribute(
      "title",
      currentUser.email || "Google account"
    );

    updateAuthNotice();
  } else {
    googleLoginText.textContent =
      "Login with Google";

    googleLoginBtn.removeAttribute("title");

    updateAuthNotice();
  }
}

function updateAuthNotice() {
  if (!authNotice) {
    return;
  }

  authNotice.hidden = Boolean(currentUser);
}

googleLoginBtn.addEventListener(
  "click",
  handleGoogleLogin
);

if (auth) {
  onAuthStateChanged(auth, (user) => {
    currentUser = user;
    updateAuthUI();
  });
}

/*
  Optional account logout:
  Double-clicking the logged-in Google button logs out.
  Normal click remains Google login / account action.
*/
googleLoginBtn.addEventListener("dblclick", async () => {
  if (!currentUser || !auth) {
    return;
  }

  const shouldLogout = confirm(
    "Do you want to sign out of Cheapster.in?"
  );

  if (!shouldLogout) {
    return;
  }

  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign-out failed:", error);
  }
});

/* =========================================================
   GIVEAWAY FORM VALIDATION
========================================================= */

function resetGiveawayValidation() {
  const fields = [
    ["fullName", "fullNameError"],
    ["whatsappNumber", "whatsappError"],
    ["orderId", "orderIdError"],
    ["brand", "brandError"]
  ];

  fields.forEach(([inputId, errorId]) => {
    clearFieldError(inputId, errorId);
  });
}

function validateGiveawayForm() {
  resetGiveawayValidation();

  let valid = true;

  const fullName =
    getElement("fullName").value.trim();

  const whatsapp =
    getElement("whatsappNumber").value.trim();

  const orderId =
    getElement("orderId").value.trim();

  const brand =
    getElement("brand").value;

  if (fullName.length < 2) {
    showFieldError(
      "fullName",
      "fullNameError",
      "Please enter your full name."
    );
    valid = false;
  }

  if (!/^\d{10}$/.test(whatsapp)) {
    showFieldError(
      "whatsappNumber",
      "whatsappError",
      "Enter a valid 10-digit WhatsApp number."
    );
    valid = false;
  }

  if (orderId.length < 2) {
    showFieldError(
      "orderId",
      "orderIdError",
      "Please enter your store order ID."
    );
    valid = false;
  }

  if (!brand) {
    showFieldError(
      "brand",
      "brandError",
      "Please select the purchased brand."
    );
    valid = false;
  }

  return valid;
}

/*
  Keep WhatsApp field numeric only.
*/
getElement("whatsappNumber").addEventListener(
  "input",
  (event) => {
    event.target.value =
      event.target.value.replace(/\D/g, "").slice(0, 10);
  }
);

/* =========================================================
   GIVEAWAY SUBMISSION
========================================================= */

giveawayForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  /*
    Hard requirement:
    Only logged-in users can submit.
  */
  if (!currentUser) {
    updateAuthNotice();

    alert(
      "Please login with Google before submitting your giveaway entry."
    );

    return;
  }

  if (!validateGiveawayForm()) {
    return;
  }

  if (
    !WEBHOOK_URL ||
    WEBHOOK_URL === "YOUR_WEBHOOK_URL"
  ) {
    alert(
      "The giveaway webhook is not configured yet. Add your WEBHOOK_URL in script.js."
    );
    return;
  }

  const fullName =
    getElement("fullName").value.trim();

  const whatsappNumber =
    getElement("whatsappNumber").value.trim();

  const orderId =
    getElement("orderId").value.trim();

  const brand =
    getElement("brand").value;

  const payload = {
    fullName,
    whatsappNumber,
    orderId,
    brand,

    /*
      Firebase identity information is useful for
      backend verification and duplicate prevention.
    */
    user: {
      uid: currentUser.uid,
      email: currentUser.email || "",
      displayName: currentUser.displayName || ""
    },

    submittedAt: new Date().toISOString(),

    source: "Cheapster.in",
    formType: "Diwali Mega Giveaway"
  };

  setLoading(submitEntryBtn, true);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(
        `Webhook request failed with HTTP ${response.status}`
      );
    }

    giveawayForm.hidden = true;
    giveawaySuccess.hidden = false;
  } catch (error) {
    console.error("Giveaway submission failed:", error);

    alert(
      "We couldn't submit your entry right now. Please check your connection and try again."
    );
  } finally {
    setLoading(submitEntryBtn, false);
  }
});

/* =========================================================
   GIVEAWAY MODAL RESET
========================================================= */

function resetGiveawayState() {
  giveawayForm.hidden = false;
  giveawaySuccess.hidden = true;

  giveawayForm.reset();

  resetGiveawayValidation();
  setLoading(
    submitEntryBtn,
    false,
    "Submit Entry"
  );
}

/* =========================================================
   CONTACT FORM
========================================================= */

/*
  Requirement:
  - DO NOT use fetch.
  - Capture fields.
  - Construct readable message.
  - URL encode.
  - Redirect/open WhatsApp.
*/

function resetContactValidation() {
  const fields = [
    ["contactName", "contactNameError"],
    ["contactIssue", "contactIssueError"],
    ["contactMessage", "contactMessageError"]
  ];

  fields.forEach(([inputId, errorId]) => {
    clearFieldError(inputId, errorId);
  });
}

function validateContactForm() {
  resetContactValidation();

  let valid = true;

  const name =
    getElement("contactName").value.trim();

  const issue =
    getElement("contactIssue").value;

  const message =
    getElement("contactMessage").value.trim();

  if (name.length < 2) {
    showFieldError(
      "contactName",
      "contactNameError",
      "Please enter your name."
    );
    valid = false;
  }

  if (!issue) {
    showFieldError(
      "contactIssue",
      "contactIssueError",
      "Please select an issue."
    );
    valid = false;
  }

  if (message.length < 5) {
    showFieldError(
      "contactMessage",
      "contactMessageError",
      "Please enter a message."
    );
    valid = false;
  }

  return valid;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateContactForm()) {
    return;
  }

  const name =
    getElement("contactName").value.trim();

  const issue =
    getElement("contactIssue").value;

  const message =
    getElement("contactMessage").value.trim();

  const whatsappMessage = [
    "Hello Cheapster.in Support,",
    "",
    `Name: ${name}`,
    `Issue: ${issue}`,
    "",
    "Message:",
    message,
    "",
    "Sent from Cheapster.in Contact Support"
  ].join("\n");

  const encodedMessage =
    encodeURIComponent(whatsappMessage);

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_SUPPORT_NUMBER}?text=${encodedMessage}`;

  /*
    User specifically requested opening WhatsApp in a
    new tab/window.
  */
  window.open(
    whatsappUrl,
    "_blank",
    "noopener,noreferrer"
  );
});

/* =========================================================
   INITIALIZATION
========================================================= */

function initializeAppUI() {
  renderStores(STORES);

  currentYear.textContent =
    new Date().getFullYear();

  updateAuthUI();

  /*
    The welcome popup is initialized once.
    It does NOT listen to focus/visibility changes.
  */
  initializeWelcomePopup();
}

initializeAppUI();
