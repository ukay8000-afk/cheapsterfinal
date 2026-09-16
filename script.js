```javascript
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
   CONFIG
========================================================= */

const FIREBASE_CONFIG = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_PROJECT.firebaseapp.com",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
};

const WEBHOOK_URL = "YOUR_WEBHOOK_URL";

const WHATSAPP_SUPPORT_NUMBER = "919999999999";

/*
  Welcome popup storage key.

  The popup is controlled ONLY by localStorage.
  No focus event.
  No visibilitychange event.
  No repeated popup trigger.
*/
const WELCOME_STORAGE_KEY = "cheapster_welcome_seen_v2";

/* =========================================================
   STORE DIRECTORY
   Single grid: no category headings.
========================================================= */

const stores = [
  /* SHOPPING */
  {
    name: "Amazon",
    domain: "amazon.in",
    description: "Everything marketplace",
    link: "#"
  },
  {
    name: "Flipkart",
    domain: "flipkart.com",
    description: "Shopping marketplace",
    link: "#"
  },
  {
    name: "Myntra",
    domain: "myntra.com",
    description: "Fashion & lifestyle",
    link: "#"
  },
  {
    name: "AJIO",
    domain: "ajio.com",
    description: "Fashion destination",
    link: "#"
  },
  {
    name: "Tata CLiQ",
    domain: "tatacliq.com",
    description: "Multi-category retail",
    link: "#"
  },
  {
    name: "Nykaa",
    domain: "nykaa.com",
    description: "Beauty & wellness",
    link: "#"
  },
  {
    name: "Meesho",
    domain: "meesho.com",
    description: "Value shopping",
    link: "#"
  },
  {
    name: "AliExpress",
    domain: "aliexpress.com",
    description: "Global marketplace",
    link: "#"
  },

  /* FASHION / LUXURY */
  {
    name: "Lenskart",
    domain: "lenskart.com",
    description: "Eyewear & optics",
    link: "#"
  },
  {
    name: "Tanishq",
    domain: "tanishq.co.in",
    description: "Jewellery & luxury",
    link: "#"
  },
  {
    name: "Vastrado",
    domain: "vastrado.com",
    description: "Fashion & apparel",
    link: "#"
  },

  /* BEAUTY */
  {
    name: "Purplle",
    domain: "purplle.com",
    description: "Beauty shopping",
    link: "#"
  },
  {
    name: "Myntra Beauty",
    domain: "myntra.com",
    description: "Beauty & personal care",
    link: "#"
  },
  {
    name: "Mamaearth",
    domain: "mamaearth.in",
    description: "Beauty & personal care",
    link: "#"
  },
  {
    name: "Minimalist",
    domain: "beminimalist.co",
    description: "Skincare essentials",
    link: "#"
  },
  {
    name: "The Derma Co",
    domain: "thedermaco.com",
    description: "Skincare",
    link: "#"
  },
  {
    name: "Dot & Key",
    domain: "dotandkey.com",
    description: "Skincare & beauty",
    link: "#"
  },
  {
    name: "Plum",
    domain: "plumgoodness.com",
    description: "Beauty & wellness",
    link: "#"
  },
  {
    name: "Sugar Cosmetics",
    domain: "sugarcosmetics.com",
    description: "Makeup & cosmetics",
    link: "#"
  },
  {
    name: "Pilgrim",
    domain: "discoverpilgrim.com",
    description: "Beauty & wellness",
    link: "#"
  },
  {
    name: "Foxtale",
    domain: "foxtale.in",
    description: "Skincare",
    link: "#"
  },

  /* ELECTRONICS */
  {
    name: "Croma",
    domain: "croma.com",
    description: "Electronics & appliances",
    link: "#"
  },
  {
    name: "Samsung",
    domain: "samsung.com",
    description: "Phones & electronics",
    link: "#"
  },
  {
    name: "OnePlus",
    domain: "oneplus.in",
    description: "Phones & technology",
    link: "#"
  },
  {
    name: "Dell",
    domain: "dell.com",
    description: "Computers & hardware",
    link: "#"
  },
  {
    name: "Lenovo",
    domain: "lenovo.com",
    description: "Computing & tech",
    link: "#"
  },
  {
    name: "boAt",
    domain: "boat-lifestyle.com",
    description: "Audio & wearables",
    link: "#"
  },
  {
    name: "HP",
    domain: "hp.com",
    description: "Computers & printing",
    link: "#"
  },
  {
    name: "ASUS",
    domain: "asus.com",
    description: "PCs & gaming",
    link: "#"
  },
  {
    name: "Acer",
    domain: "acer.com",
    description: "Computers & displays",
    link: "#"
  },
  {
    name: "JBL",
    domain: "jbl.com",
    description: "Audio",
    link: "#"
  },
  {
    name: "Noise",
    domain: "gonoise.com",
    description: "Smart wearables",
    link: "#"
  },
  {
    name: "Nothing",
    domain: "nothing.tech",
    description: "Consumer technology",
    link: "#"
  },

  /* TRAVEL */
  {
    name: "MakeMyTrip",
    domain: "makemytrip.com",
    description: "Flights & hotels",
    link: "#"
  },
  {
    name: "Goibibo",
    domain: "goibibo.com",
    description: "Travel bookings",
    link: "#"
  },
  {
    name: "Agoda",
    domain: "agoda.com",
    description: "Hotels & stays",
    link: "#"
  },
  {
    name: "Cleartrip",
    domain: "cleartrip.com",
    description: "Flights & travel",
    link: "#"
  },
  {
    name: "Skyscanner",
    domain: "skyscanner.net",
    description: "Flight comparison",
    link: "#"
  },
  {
    name: "Busbud",
    domain: "busbud.com",
    description: "Bus travel",
    link: "#"
  },
  {
    name: "Booking.com",
    domain: "booking.com",
    description: "Hotels & travel",
    link: "#"
  },
  {
    name: "Airbnb",
    domain: "airbnb.com",
    description: "Stays & experiences",
    link: "#"
  },
  {
    name: "Expedia",
    domain: "expedia.com",
    description: "Travel & stays",
    link: "#"
  },

  /* FOOD / GROCERY */
  {
    name: "Blinkit",
    domain: "blinkit.com",
    description: "Quick grocery delivery",
    link: "#"
  },
  {
    name: "Swiggy",
    domain: "swiggy.com",
    description: "Food & quick commerce",
    link: "#"
  },
  {
    name: "Zomato",
    domain: "zomato.com",
    description: "Food discovery",
    link: "#"
  },
  {
    name: "BigBasket",
    domain: "bigbasket.com",
    description: "Online grocery",
    link: "#"
  },
  {
    name: "Instacart",
    domain: "instacart.com",
    description: "Grocery delivery",
    link: "#"
  },

  /* HOSTING / BUSINESS */
  {
    name: "Hostinger",
    domain: "hostinger.com",
    description: "Hosting & domains",
    link: "#"
  },
  {
    name: "Bluehost",
    domain: "bluehost.com",
    description: "Web hosting",
    link: "#"
  },
  {
    name: "GoDaddy",
    domain: "godaddy.com",
    description: "Domains & hosting",
    link: "#"
  },
  {
    name: "Shopify",
    domain: "shopify.com",
    description: "Build an online store",
    link: "#"
  },
  {
    name: "Wix",
    domain: "wix.com",
    description: "Website builder",
    link: "#"
  },
  {
    name: "Squarespace",
    domain: "squarespace.com",
    description: "Websites & commerce",
    link: "#"
  },

  /* FINANCE / SERVICES */
  {
    name: "BankBazaar",
    domain: "bankbazaar.com",
    description: "Financial marketplace",
    link: "#"
  },
  {
    name: "Upstox",
    domain: "upstox.com",
    description: "Trading & investing",
    link: "#"
  },
  {
    name: "Groww",
    domain: "groww.in",
    description: "Investing platform",
    link: "#"
  },

  /* AI / SOFTWARE */
  {
    name: "ChatGPT",
    domain: "openai.com",
    description: "AI assistant",
    link: "#"
  },
  {
    name: "OpenArt AI",
    domain: "openart.ai",
    description: "AI image creation",
    link: "#"
  },
  {
    name: "InVideo",
    domain: "invideo.io",
    description: "AI video creation",
    link: "#"
  },
  {
    name: "Jasper AI",
    domain: "jasper.ai",
    description: "AI marketing",
    link: "#"
  },
  {
    name: "Canva",
    domain: "canva.com",
    description: "Design & content",
    link: "#"
  },
  {
    name: "Grammarly",
    domain: "grammarly.com",
    description: "Writing assistant",
    link: "#"
  },
  {
    name: "Notion",
    domain: "notion.so",
    description: "Notes & workspace",
    link: "#"
  },
  {
    name: "Adobe",
    domain: "adobe.com",
    description: "Creative software",
    link: "#"
  },

  /* SECURITY */
  {
    name: "Norton",
    domain: "norton.com",
    description: "Cybersecurity",
    link: "#"
  },
  {
    name: "Kaspersky",
    domain: "kaspersky.com",
    description: "Digital security",
    link: "#"
  }
];

/* =========================================================
   FIREBASE
========================================================= */

let auth = null;
let googleProvider = null;
let currentUser = null;

const firebaseReady =
  FIREBASE_CONFIG.apiKey &&
  !FIREBASE_CONFIG.apiKey.startsWith("YOUR_") &&
  FIREBASE_CONFIG.projectId &&
  !FIREBASE_CONFIG.projectId.startsWith("YOUR_");

if (firebaseReady) {
  try {
    const app = initializeApp(
      FIREBASE_CONFIG
    );

    auth = getAuth(app);

    googleProvider =
      new GoogleAuthProvider();

    googleProvider.setCustomParameters({
      prompt: "select_account"
    });
  } catch (error) {
    console.error(
      "Firebase initialization error:",
      error
    );
  }
} else {
  console.warn(
    "Firebase is not configured yet."
  );
}

/* =========================================================
   DOM REFERENCES
========================================================= */

const grid =
  document.getElementById(
    "storeGrid"
  );

const searchInput =
  document.getElementById(
    "searchInput"
  );

const clearSearch =
  document.getElementById(
    "clearSearch"
  );

const resultPill =
  document.getElementById(
    "resultPill"
  );

const heroStoreCount =
  document.getElementById(
    "heroStoreCount"
  );

const emptyState =
  document.getElementById(
    "emptyState"
  );

const welcomeModal =
  document.getElementById(
    "welcomeModal"
  );

const formModal =
  document.getElementById(
    "formModal"
  );

const headerOfferBtn =
  document.getElementById(
    "headerOfferBtn"
  );

const authBtn =
  document.getElementById(
    "authBtn"
  );

const authBtnText =
  document.getElementById(
    "authBtnText"
  );

const continueBtn =
  document.getElementById(
    "continueBtn"
  );

const loginNotice =
  document.getElementById(
    "loginNotice"
  );

const rewardForm =
  document.getElementById(
    "rewardForm"
  );

const successView =
  document.getElementById(
    "successView"
  );

const submitRewardBtn =
  document.getElementById(
    "submitRewardBtn"
  );

const brandSelect =
  document.getElementById(
    "brandSelect"
  );

const contactForm =
  document.getElementById(
    "contactForm"
  );

const currentYear =
  document.getElementById(
    "currentYear"
  );

/* =========================================================
   HELPERS
========================================================= */

function safeText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll(
      "'",
      "&#039;"
    );
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/* =========================================================
   MODAL HELPERS
========================================================= */

function openModal(id) {
  const modal =
    document.getElementById(id);

  if (!modal) {
    return;
  }

  modal.hidden = false;

  document.body.classList.add(
    "modal-open"
  );
}

function closeModal(id) {
  const modal =
    document.getElementById(id);

  if (!modal) {
    return;
  }

  modal.hidden = true;

  const openModalExists =
    document.querySelector(
      ".modal:not([hidden]), .modal-overlay:not([hidden])"
    );

  if (!openModalExists) {
    document.body.classList.remove(
      "modal-open"
    );
  }
}

/* Generic modal buttons */
document
  .querySelectorAll(
    "[data-close-modal]"
  )
  .forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        closeModal(
          button.dataset.closeModal
        );
      }
    );
  });

/* Footer information modals */
document
  .querySelectorAll(
    "[data-info-modal]"
  )
  .forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        openModal(
          button.dataset.infoModal
        );
      }
    );
  });

/*
  Clicking outside the modal content
  closes that modal.
*/
document
  .querySelectorAll(
    ".modal-overlay"
  )
  .forEach((overlay) => {
    overlay.addEventListener(
      "click",
      (event) => {
        if (
          event.target === overlay
        ) {
          overlay.hidden = true;

          document.body.classList.remove(
            "modal-open"
          );
        }
      }
    );
  });

/*
  Escape closes any currently open modal.
*/
document.addEventListener(
  "keydown",
  (event) => {
    if (event.key !== "Escape") {
      return;
    }

    const openOverlay =
      document.querySelector(
        ".modal-overlay:not([hidden])"
      );

    if (openOverlay) {
      openOverlay.hidden = true;

      document.body.classList.remove(
        "modal-open"
      );
    }
  }
);

/* =========================================================
   WELCOME POPUP
========================================================= */

function shouldShowWelcome() {
  try {
    return (
      localStorage.getItem(
        WELCOME_STORAGE_KEY
      ) !== "1"
    );
  } catch (error) {
    console.warn(
      "localStorage unavailable:",
      error
    );

    /*
      Fail-safe:
      do NOT continuously spam the user.
    */
    return false;
  }
}

function markWelcomeAsSeen() {
  try {
    localStorage.setItem(
      WELCOME_STORAGE_KEY,
      "1"
    );
  } catch (error) {
    console.warn(
      "Could not save welcome state:",
      error
    );
  }
}

function initializeWelcome() {
  if (!shouldShowWelcome()) {
    return;
  }

  /*
    Mark it as seen BEFORE opening it.
    This prevents refresh/close/reopen spam.
  */
  markWelcomeAsSeen();

  window.setTimeout(
    () => {
      openModal("welcomeModal");
    },
    550
  );
}

/* =========================================================
   STORE GRID
========================================================= */

function renderStores(storeList) {
  grid.innerHTML = "";

  storeList.forEach(
    (store) => {
      const card =
        document.createElement(
          "article"
        );

      card.className =
        "store-card";

      const logoUrl =
        `https://logo.clearbit.com/${store.domain}`;

      card.innerHTML = `
        <div class="store-logo-wrap">
          <img
            class="store-logo"
            src="${safeText(logoUrl)}"
            alt="${safeText(store.name)} logo"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
        </div>

        <h3 class="store-name">
          ${safeText(store.name)}
        </h3>

        <p class="store-meta">
          ${safeText(store.description)}
        </p>

        <button
          type="button"
          class="shop-button"
        >
          Shop Now
        </button>
      `;

      /*
        Clearbit logo fallback.
      */
      const logo =
        card.querySelector(
          ".store-logo"
        );

      logo.addEventListener(
        "error",
        () => {
          const fallback =
            document.createElement(
              "div"
            );

          fallback.className =
            "store-logo-fallback";

          fallback.textContent =
            initials(store.name);

          logo.replaceWith(
            fallback
          );
        },
        {
          once: true
        }
      );

      /*
        Explicit Shop Now action.
      */
      const shopButton =
        card.querySelector(
          ".shop-button"
        );

      shopButton.addEventListener(
        "click",
        () => {
          handleShopNow(store);
        }
      );

      grid.appendChild(card);
    }
  );

  updateStoreCount(
    storeList.length
  );
}

function updateStoreCount(count) {
  const text =
    `${count} ${count === 1 ? "Store" : "Stores"}`;

  if (resultPill) {
    resultPill.textContent =
      text;
  }

  if (heroStoreCount) {
    heroStoreCount.textContent =
      count;
  }

  if (emptyState) {
    emptyState.hidden =
      count !== 0;
  }
}

/* =========================================================
   SEARCH
========================================================= */

function filterStores(query) {
  const normalized =
    query
      .trim()
      .toLowerCase();

  const filtered =
    stores.filter(
      (store) =>
        `${store.name} ${store.description}`
          .toLowerCase()
          .includes(normalized)
    );

  renderStores(filtered);

  if (clearSearch) {
    clearSearch.hidden =
      normalized.length === 0;
  }
}

if (searchInput) {
  searchInput.addEventListener(
    "input",
    () => {
      filterStores(
        searchInput.value
      );
    }
  );
}

if (clearSearch) {
  clearSearch.addEventListener(
    "click",
    () => {
      searchInput.value = "";

      filterStores("");

      searchInput.focus();
    }
  );
}

/*
  Premium keyboard shortcut:
  Ctrl + K / Cmd + K focuses search.
*/
document.addEventListener(
  "keydown",
  (event) => {
    if (
      (event.ctrlKey ||
        event.metaKey) &&
      event.key.toLowerCase() ===
        "k"
    ) {
      event.preventDefault();

      searchInput.focus();
    }
  }
);

/* =========================================================
   BRAND DROPDOWN
========================================================= */

function populateBrands() {
  brandSelect.innerHTML = `
    <option value="">
      Select purchased brand
    </option>
  `;

  stores.forEach(
    (store) => {
      const option =
        document.createElement(
          "option"
        );

      option.value =
        store.name;

      option.textContent =
        store.name;

      brandSelect.appendChild(
        option
      );
    }
  );
}

/* =========================================================
   SHOP NOW
========================================================= */

function handleShopNow(store) {
  /*
    Explicit click only:

    1. Open merchant/affiliate URL
       in NEW TAB.
    2. Open giveaway form
       in CURRENT TAB.
  */

  window.open(
    store.link || "#",
    "_blank",
    "noopener,noreferrer"
  );

  openGiveawayModal();

  /*
    Automatically select clicked brand
    in giveaway dropdown.
  */

  const matching =
    [...brandSelect.options]
      .find(
        (option) =>
          option.value
            .toLowerCase() ===
          store.name
            .toLowerCase()
      );

  if (matching) {
    brandSelect.value =
      matching.value;
  }
}

/* =========================================================
   GIVEAWAY MODAL
========================================================= */

function resetRewardUI() {
  rewardForm.hidden = false;

  successView.hidden = true;

  rewardForm.reset();

  document
    .querySelectorAll(
      "#rewardForm .field"
    )
    .forEach(
      (field) => {
        field.classList.remove(
          "has-error"
        );
      }
    );

  document
    .querySelectorAll(
      "#rewardForm .field-error"
    )
    .forEach(
      (error) => {
        error.textContent = "";
      }
    );

  const label =
    submitRewardBtn.querySelector(
      ".submit-label"
    );

  const spinner =
    submitRewardBtn.querySelector(
      ".spinner"
    );

  if (label) {
    label.textContent =
      "Submit Entry";
  }

  if (spinner) {
    spinner.hidden = true;
  }

  submitRewardBtn.disabled =
    false;
}

function updateAuthUI() {
  if (currentUser) {
    const firstName =
      currentUser.displayName
        ?.trim()
        .split(/\s+/)[0] ||
      currentUser.email
        ?.split("@")[0] ||
      "Account";

    authBtnText.textContent =
      firstName.length > 16
        ? `${firstName.slice(0, 16)}…`
        : firstName;

    authBtn.title =
      currentUser.email ||
      "Signed in";

    loginNotice.hidden =
      true;
  } else {
    authBtnText.textContent =
      "Login with Google";

    authBtn.title =
      "Login with Google";

    loginNotice.hidden =
      false;
  }
}

/*
  Giveaway opens ONLY through explicit user actions.
*/
function openGiveawayModal() {
  resetRewardUI();

  updateAuthUI();

  openModal("formModal");
}

/* Header Claim Giveaway */
headerOfferBtn.addEventListener(
  "click",
  () => {
    openGiveawayModal();
  }
);

/*
  Welcome popup's Continue button
  ONLY closes welcome popup.
*/
continueBtn.addEventListener(
  "click",
  () => {
    closeModal(
      "welcomeModal"
    );
  }
);

/* =========================================================
   FIREBASE GOOGLE AUTHENTICATION
========================================================= */

async function handleGoogleAuth() {
  if (!auth || !googleProvider) {
    alert(
      "Firebase is not configured yet. Add your Firebase Web App keys in script.js."
    );

    return;
  }

  authBtn.disabled = true;

  const originalText =
    authBtnText.textContent;

  authBtnText.textContent =
    currentUser
      ? "Signing out..."
      : "Signing in...";

  try {
    if (currentUser) {
      /*
        Clicking the account button
        when signed in logs out.
      */
      await signOut(auth);
    } else {
      /*
        First login.
      */
      await signInWithPopup(
        auth,
        googleProvider
      );
    }
  } catch (error) {
    console.error(
      "Google authentication error:",
      error
    );

    if (
      error.code ===
      "auth/popup-closed-by-user"
    ) {
      /* User cancelled. */
    } else if (
      error.code ===
      "auth/popup-blocked"
    ) {
      alert(
        "Google's sign-in popup was blocked. Please allow popups for this site."
      );
    } else {
      alert(
        "Google sign-in could not be completed. Please try again."
      );
    }
  } finally {
    authBtn.disabled =
      false;

    if (!currentUser) {
      authBtnText.textContent =
        originalText ===
        "Signing in..."
          ? "Login with Google"
          : originalText;
    }

    updateAuthUI();
  }
}

authBtn.addEventListener(
  "click",
  handleGoogleAuth
);

if (auth) {
  onAuthStateChanged(
    auth,
    (user) => {
      currentUser =
        user;

      updateAuthUI();
    }
  );
}

/* =========================================================
   FIELD ERRORS
========================================================= */

function setFieldError(
  inputId,
  message
) {
  const input =
    document.getElementById(
      inputId
    );

  if (!input) {
    return;
  }

  const field =
    input.closest(".field");

  if (!field) {
    return;
  }

  const error =
    field.querySelector(
      ".field-error"
    );

  field.classList.toggle(
    "has-error",
    Boolean(message)
  );

  if (error) {
    error.textContent =
      message;
  }
}

function validateRewardForm() {
  [
    "fullName",
    "whatsapp",
    "brandSelect",
    "orderId"
  ].forEach(
    (id) => {
      setFieldError(
        id,
        ""
      );
    }
  );

  let valid = true;

  const fullName =
    document.getElementById(
      "fullName"
    ).value.trim();

  const whatsapp =
    document.getElementById(
      "whatsapp"
    ).value.trim();

  const brand =
    document.getElementById(
      "brandSelect"
    ).value;

  const orderId =
    document.getElementById(
      "orderId"
    ).value.trim();

  if (fullName.length < 2) {
    setFieldError(
      "fullName",
      "Enter your full name."
    );

    valid = false;
  }

  if (!/^\d{10}$/.test(whatsapp)) {
    setFieldError(
      "whatsapp",
      "Enter a valid 10-digit number."
    );

    valid = false;
  }

  if (!brand) {
    setFieldError(
      "brandSelect",
      "Select the purchased brand."
    );

    valid = false;
  }

  if (orderId.length < 2) {
    setFieldError(
      "orderId",
      "Enter your store order ID."
    );

    valid = false;
  }

  return valid;
}

/*
  Allow numbers only in WhatsApp field.
*/
const giveawayWhatsapp =
  document.getElementById(
    "whatsapp"
  );

if (giveawayWhatsapp) {
  giveawayWhatsapp.addEventListener(
    "input",
    (event) => {
      event.target.value =
        event.target.value
          .replace(/\D/g, "")
          .slice(0, 10);
    }
  );
}

/* =========================================================
   GIVEAWAY SUBMISSION
========================================================= */

rewardForm.addEventListener(
  "submit",
  async (event) => {
    event.preventDefault();

    /*
      Login requirement.
    */
    if (!currentUser) {
      alert(
        "Please login with Google before submitting your giveaway entry."
      );

      return;
    }

    /*
      Validate.
    */
    if (
      !validateRewardForm()
    ) {
      return;
    }

    /*
      Webhook requirement.
    */
    if (
      !WEBHOOK_URL ||
      WEBHOOK_URL ===
        "YOUR_WEBHOOK_URL"
    ) {
      alert(
        "WEBHOOK_URL is not configured yet. Add your endpoint in script.js."
      );

      return;
    }

    const payload = {
      source:
        "Cheapster.in",

      formType:
        "Diwali Mega Giveaway",

      fullName:
        document.getElementById(
          "fullName"
        ).value.trim(),

      whatsappNumber:
        document.getElementById(
          "whatsapp"
        ).value.trim(),

      brand:
        document.getElementById(
          "brandSelect"
        ).value,

      orderId:
        document.getElementById(
          "orderId"
        ).value.trim(),

      user: {
        uid:
          currentUser.uid,

        email:
          currentUser.email ||
          "",

        displayName:
          currentUser.displayName ||
          ""
      },

      submittedAt:
        new Date().toISOString()
    };

    const label =
      submitRewardBtn.querySelector(
        ".submit-label"
      );

    const spinner =
      submitRewardBtn.querySelector(
        ".spinner"
      );

    submitRewardBtn.disabled =
      true;

    if (label) {
      label.textContent =
        "Submitting...";
    }

    if (spinner) {
      spinner.hidden =
        false;
    }

    try {
      const response =
        await fetch(
          WEBHOOK_URL,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify(
                payload
              )
          }
        );

      if (!response.ok) {
        throw new Error(
          `Webhook returned HTTP ${response.status}`
        );
      }

      /*
        Success state.
      */
      rewardForm.hidden =
        true;

      successView.hidden =
        false;
    } catch (error) {
      console.error(
        "Giveaway submission failed:",
        error
      );

      alert(
        "We couldn't submit your entry right now. Please try again."
      );
    } finally {
      submitRewardBtn.disabled =
        false;

      if (label) {
        label.textContent =
          "Submit Entry";
      }

      if (spinner) {
        spinner.hidden =
          true;
      }
    }
  }
);

/* =========================================================
   CONTACT FORM
   IMPORTANT:
   NO FETCH HERE.
========================================================= */

function validateContactForm() {
  const name =
    document.getElementById(
      "contactName"
    );

  const issue =
    document.getElementById(
      "contactIssue"
    );

  const message =
    document.getElementById(
      "contactMessage"
    );

  [name, issue, message].forEach(
    (input) => {
      const field =
        input.closest(".field");

      if (!field) {
        return;
      }

      const error =
        field.querySelector(
          ".field-error"
        );

      field.classList.remove(
        "has-error"
      );

      if (error) {
        error.textContent =
          "";
      }
    }
  );

  let valid = true;

  if (
    name.value.trim().length < 2
  ) {
    setFieldError(
      "contactName",
      "Enter your name."
    );

    valid = false;
  }

  if (!issue.value) {
    setFieldError(
      "contactIssue",
      "Select an issue."
    );

    valid = false;
  }

  if (
    message.value.trim().length < 5
  ) {
    setFieldError(
      "contactMessage",
      "Please enter a message."
    );

    valid = false;
  }

  return valid;
}

contactForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    if (
      !validateContactForm()
    ) {
      return;
    }

    const name =
      document.getElementById(
        "contactName"
      ).value.trim();

    const issue =
      document.getElementById(
        "contactIssue"
      ).value;

    const message =
      document.getElementById(
        "contactMessage"
      ).value.trim();

    /*
      Readable WhatsApp message.
    */
    const whatsappText = [
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

    /*
      URL encode message.
    */
    const encoded =
      encodeURIComponent(
        whatsappText
      );

    /*
      Open WhatsApp in a NEW TAB.
      No fetch.
    */
    const whatsappUrl =
      `https://wa.me/${WHATSAPP_SUPPORT_NUMBER}?text=${encoded}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }
);

/* =========================================================
   INITIALIZATION
========================================================= */

function initialize() {
  /*
    Render all stores.
  */
  renderStores(stores);

  /*
    Populate giveaway brand dropdown.
  */
  populateBrands();

  /*
    Hero count.
  */
  if (heroStoreCount) {
    heroStoreCount.textContent =
      stores.length;
  }

  /*
    Footer year.
  */
  if (currentYear) {
    currentYear.textContent =
      new Date().getFullYear();
  }

  /*
    Firebase auth UI.
  */
  updateAuthUI();

  /*
    Welcome popup:
    only once.
  */
  initializeWelcome();
}

initialize();
```
