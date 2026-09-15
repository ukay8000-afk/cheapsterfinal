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

const WELCOME_STORAGE_KEY =
  "cheapster_welcome_seen_v1";

/* =========================================================
   STORE DATA
   Single grid — intentionally NO category headings.
========================================================= */

const STORES = [
  /* SHOPPING */
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
    name: "Tata CLiQ",
    logo: "https://logo.clearbit.com/tatacliq.com",
    affiliateUrl: "#"
  },
  {
    name: "Nykaa",
    logo: "https://logo.clearbit.com/nykaa.com",
    affiliateUrl: "#"
  },
  {
    name: "Meesho",
    logo: "https://logo.clearbit.com/meesho.com",
    affiliateUrl: "#"
  },
  {
    name: "AliExpress",
    logo: "https://logo.clearbit.com/aliexpress.com",
    affiliateUrl: "#"
  },

  /* FASHION / LUXURY */
  {
    name: "Lenskart",
    logo: "https://logo.clearbit.com/lenskart.com",
    affiliateUrl: "#"
  },
  {
    name: "Tanishq",
    logo: "https://logo.clearbit.com/tanishq.co.in",
    affiliateUrl: "#"
  },
  {
    name: "Vastrado",
    logo: "https://logo.clearbit.com/vastrado.com",
    affiliateUrl: "#"
  },

  /* BEAUTY */
  {
    name: "Mamaearth",
    logo: "https://logo.clearbit.com/mamaearth.in",
    affiliateUrl: "#"
  },
  {
    name: "Minimalist",
    logo: "https://logo.clearbit.com/beminimalist.co",
    affiliateUrl: "#"
  },
  {
    name: "Sugar Cosmetics",
    logo: "https://logo.clearbit.com/sugarcosmetics.com",
    affiliateUrl: "#"
  },
  {
    name: "Mamaearth",
    logo: "https://logo.clearbit.com/mamaearth.in",
    affiliateUrl: "#"
  },
  {
    name: "Pilgrim",
    logo: "https://logo.clearbit.com/discoverpilgrim.com",
    affiliateUrl: "#"
  },
  {
    name: "WOW Skin Science",
    logo: "https://logo.clearbit.com:wowskinscience.com",
    affiliateUrl: "#"
  },
  {
    name: "The Derma Co",
    logo: "https://logo.clearbit.com/thedermaco.com",
    affiliateUrl: "#"
  },
  {
    name: "Foxtale",
    logo: "https://logo.clearbit.com/foxtale.in",
    affiliateUrl: "#"
  },
  {
    name: "Dot & Key",
    logo: "https://logo.clearbit.com/dotandkey.com",
    affiliateUrl: "#"
  },
  {
    name: "Plum",
    logo: "https://logo.clearbit.com/plumgoodness.com",
    affiliateUrl: "#"
  },
  {
    name: "Purplle",
    logo: "https://logo.clearbit.com/purplle.com",
    affiliateUrl: "#"
  },

  /* ELECTRONICS */
  {
    name: "Croma",
    logo: "https://logo.clearbit.com/croma.com",
    affiliateUrl: "#"
  },
  {
    name: "Samsung",
    logo: "https://logo.clearbit.com/samsung.com",
    affiliateUrl: "#"
  },
  {
    name: "OnePlus",
    logo: "https://logo.clearbit.com/oneplus.in",
    affiliateUrl: "#"
  },
  {
    name: "Dell",
    logo: "https://logo.clearbit.com/dell.com",
    affiliateUrl: "#"
  },
  {
    name: "Lenovo",
    logo: "https://logo.clearbit.com/lenovo.com",
    affiliateUrl: "#"
  },
  {
    name: "boAt",
    logo: "https://logo.clearbit.com/boat-lifestyle.com",
    affiliateUrl: "#"
  },
  {
    name: "HP",
    logo: "https://logo.clearbit.com/hp.com",
    affiliateUrl: "#"
  },
  {
    name: "ASUS",
    logo: "https://logo.clearbit.com/asus.com",
    affiliateUrl: "#"
  },
  {
    name: "Acer",
    logo: "https://logo.clearbit.com/acer.com",
    affiliateUrl: "#"
  },
  {
    name: "JBL",
    logo: "https://logo.clearbit.com/jbl.com",
    affiliateUrl: "#"
  },
  {
    name: "Noise",
    logo: "https://logo.clearbit.com/gonoise.com",
    affiliateUrl: "#"
  },
  {
    name: "Nothing",
    logo: "https://logo.clearbit.com/nothing.tech",
    affiliateUrl: "#"
  },

  /* TRAVEL */
  {
    name: "MakeMyTrip",
    logo: "https://logo.clearbit.com/makemytrip.com",
    affiliateUrl: "#"
  },
  {
    name: "Goibibo",
    logo: "https://logo.clearbit.com/goibibo.com",
    affiliateUrl: "#"
  },
  {
    name: "Agoda",
    logo: "https://logo.clearbit.com/agoda.com",
    affiliateUrl: "#"
  },
  {
    name: "Cleartrip",
    logo: "https://logo.clearbit.com/cleartrip.com",
    affiliateUrl: "#"
  },
  {
    name: "Skyscanner",
    logo: "https://logo.clearbit.com/skyscanner.net",
    affiliateUrl: "#"
  },
  {
    name: "Busbud",
    logo: "https://logo.clearbit.com/busbud.com",
    affiliateUrl: "#"
  },
  {
    name: "Booking.com",
    logo: "https://logo.clearbit.com/booking.com",
    affiliateUrl: "#"
  },
  {
    name: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
    affiliateUrl: "#"
  },
  {
    name: "Expedia",
    logo: "https://logo.clearbit.com/expedia.com",
    affiliateUrl: "#"
  },

  /* FOOD / GROCERY */
  {
    name: "Blinkit",
    logo: "https://logo.clearbit.com/blinkit.com",
    affiliateUrl: "#"
  },
  {
    name: "Swiggy",
    logo: "https://logo.clearbit.com/swiggy.com",
    affiliateUrl: "#"
  },
  {
    name: "Zomato",
    logo: "https://logo.clearbit.com/zomato.com",
    affiliateUrl: "#"
  },
  {
    name: "BigBasket",
    logo: "https://logo.clearbit.com/bigbasket.com",
    affiliateUrl: "#"
  },
  {
    name: "Instacart",
    logo: "https://logo.clearbit.com/instacart.com",
    affiliateUrl: "#"
  },

  /* HOSTING / BUSINESS */
  {
    name: "Hostinger",
    logo: "https://logo.clearbit.com/hostinger.com",
    affiliateUrl: "#"
  },
  {
    name: "Bluehost",
    logo: "https://logo.clearbit.com/bluehost.com",
    affiliateUrl: "#"
  },
  {
    name: "GoDaddy",
    logo: "https://logo.clearbit.com/godaddy.com",
    affiliateUrl: "#"
  },
  {
    name: "Shopify",
    logo: "https://logo.clearbit.com/shopify.com",
    affiliateUrl: "#"
  },
  {
    name: "Wix",
    logo: "https://logo.clearbit.com/wix.com",
    affiliateUrl: "#"
  },
  {
    name: "Squarespace",
    logo: "https://logo.clearbit.com/squarespace.com",
    affiliateUrl: "#"
  },

  /* FINANCE / SERVICES */
  {
    name: "BankBazaar",
    logo: "https://logo.clearbit.com/bankbazaar.com",
    affiliateUrl: "#"
  },
  {
    name: "Upstox",
    logo: "https://logo.clearbit.com/upstox.com",
    affiliateUrl: "#"
  },
  {
    name: "Groww",
    logo: "https://logo.clearbit.com/groww.in",
    affiliateUrl: "#"
  },

  /* AI / SOFTWARE */
  {
    name: "ChatGPT",
    logo: "https://logo.clearbit.com/openai.com",
    affiliateUrl: "#"
  },
  {
    name: "OpenArt AI",
    logo: "https://logo.clearbit.com/openart.ai",
    affiliateUrl: "#"
  },
  {
    name: "InVideo",
    logo: "https://logo.clearbit.com/invideo.io",
    affiliateUrl: "#"
  },
  {
    name: "Jasper AI",
    logo: "https://logo.clearbit.com/jasper.ai",
    affiliateUrl: "#"
  },
  {
    name: "Canva",
    logo: "https://logo.clearbit.com/canva.com",
    affiliateUrl: "#"
  },
  {
    name: "Grammarly",
    logo: "https://logo.clearbit.com/grammarly.com",
    affiliateUrl: "#"
  },
  {
    name: "Notion",
    logo: "https://logo.clearbit.com/notion.so",
    affiliateUrl: "#"
  },
  {
    name: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    affiliateUrl: "#"
  },

  /* SECURITY */
  {
    name: "Norton",
    logo: "https://logo.clearbit.com/norton.com",
    affiliateUrl: "#"
  },
  {
    name: "Kaspersky",
    logo: "https://logo.clearbit.com/kaspersky.com",
    affiliateUrl: "#"
  }
];

/* =========================================================
   FIREBASE
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
    console.error(
      "Firebase initialization failed:",
      error
    );
  }
} else {
  console.warn(
    "Firebase isn't configured yet. Add your Firebase keys."
  );
}

/* =========================================================
   DOM
========================================================= */

const storeGrid =
  document.getElementById("storeGrid");

const emptyState =
  document.getElementById("emptyState");

const storeCount =
  document.getElementById("storeCount");

const searchInput =
  document.getElementById("storeSearch");

const clearSearchButton =
  document.getElementById("clearSearch");

const welcomeModal =
  document.getElementById("welcomeModal");

const giveawayModal =
  document.getElementById("giveawayModal");

const authNotice =
  document.getElementById("authNotice");

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

const brandSelect =
  document.getElementById("brand");

let currentUser = null;

/* =========================================================
   UTILITY
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
    .map((part) =>
      part.charAt(0)
    )
    .join("")
    .toUpperCase();
}

function setLoading(
  button,
  loading,
  defaultText = "Submit Entry"
) {
  const label =
    button.querySelector(".button-label");

  const loader =
    button.querySelector(".button-loader");

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

/* =========================================================
   MODALS
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

  const anotherModalOpen =
    document.querySelector(
      ".modal-overlay:not([hidden])"
    );

  if (!anotherModalOpen) {
    document.body.style.overflow = "";
  }
}

document
  .querySelectorAll("[data-close-modal]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      closeModal(
        document.getElementById(
          button.dataset.closeModal
        )
      );
    });
  });

document
  .querySelectorAll("[data-info-modal]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      openModal(
        document.getElementById(
          button.dataset.infoModal
        )
      );
    });
  });

document
  .querySelectorAll(".modal-overlay")
  .forEach((overlay) => {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeModal(overlay);
      }
    });
  });

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
      closeModal(openOverlay);
    }
  }
);

/* =========================================================
   WELCOME POPUP
   ONLY ONCE PER BROWSER PROFILE.
   NO FOCUS/VISIBILITY EVENT.
========================================================= */

function shouldShowWelcome() {
  try {
    return (
      localStorage.getItem(
        WELCOME_STORAGE_KEY
      ) !== "1"
    );
  } catch {
    /*
      Fail-safe:
      Don't repeatedly spam the popup when storage
      is unavailable.
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
  } catch {
    /* Ignore storage errors */
  }
}

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
   GIVEAWAY
========================================================= */

function openGiveawayModal() {
  resetGiveawayState();

  updateAuthNotice();

  openModal(giveawayModal);
}

headerGiveawayBtn.addEventListener(
  "click",
  () => {
    openGiveawayModal();
  }
);

welcomeClaimBtn.addEventListener(
  "click",
  () => {
    closeModal(welcomeModal);
    openGiveawayModal();
  }
);

/* =========================================================
   BRAND DROPDOWN
========================================================= */

function populateBrandDropdown() {
  brandSelect.innerHTML = `
    <option value="">
      Select purchased brand
    </option>
  `;

  STORES.forEach((store) => {
    const option =
      document.createElement("option");

    option.value = store.name;
    option.textContent = store.name;

    brandSelect.appendChild(option);
  });
}

/* =========================================================
   STORE GRID
========================================================= */

function renderStores(stores) {
  storeGrid.innerHTML = "";

  stores.forEach((store) => {
    const card =
      document.createElement("article");

    card.className = "store-card";

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

      <h3 class="store-name">
        ${escapeHtml(store.name)}
      </h3>

      <p class="store-meta">
        Shop through Cheapster.in
      </p>

      <button
        type="button"
        class="shop-button"
      >
        Shop Now
      </button>
    `;

    const logo =
      card.querySelector(".store-logo");

    logo.addEventListener(
      "error",
      () => {
        const fallback =
          document.createElement("div");

        fallback.className =
          "store-logo-fallback";

        fallback.textContent =
          getInitials(store.name);

        logo.replaceWith(fallback);
      },
      { once: true }
    );

    const shopButton =
      card.querySelector(".shop-button");

    shopButton.addEventListener(
      "click",
      () => {
        handleShopNow(store);
      }
    );

    storeGrid.appendChild(card);
  });

  updateStoreCount(stores.length);
}

function updateStoreCount(count) {
  storeCount.textContent =
    `${count} ${count === 1 ? "Store" : "Stores"}`;

  emptyState.hidden =
    count !== 0;
}

/* =========================================================
   SEARCH
========================================================= */

function filterStores(query) {
  const normalizedQuery =
    query.trim().toLowerCase();

  const filtered =
    STORES.filter((store) =>
      store.name
        .toLowerCase()
        .includes(normalizedQuery)
    );

  renderStores(filtered);

  clearSearchButton.classList.toggle(
    "visible",
    normalizedQuery.length > 0
  );
}

searchInput.addEventListener(
  "input",
  () => {
    filterStores(
      searchInput.value
    );
  }
);

clearSearchButton.addEventListener(
  "click",
  () => {
    searchInput.value = "";

    filterStores("");

    searchInput.focus();
  }
);

/* =========================================================
   SHOP NOW
========================================================= */

function handleShopNow(store) {
  const affiliateUrl =
    store.affiliateUrl || "#";

  /*
    Open store in NEW TAB.
  */

  window.open(
    affiliateUrl,
    "_blank",
    "noopener,noreferrer"
  );

  /*
    Giveaway opens in CURRENT TAB.
  */

  openGiveawayModal();

  /*
    Pre-select purchased brand.
  */

  const matchingOption =
    [...brandSelect.options].find(
      (option) =>
        option.value.toLowerCase() ===
        store.name.toLowerCase()
    );

  if (matchingOption) {
    brandSelect.value =
      matchingOption.value;
  }
}

/* =========================================================
   GOOGLE LOGIN
========================================================= */

async function handleGoogleLogin() {
  if (!auth || !googleProvider) {
    alert(
      "Firebase is not configured yet. Add your Firebase Web App configuration in script.js."
    );

    return;
  }

  googleLoginBtn.disabled = true;

  const originalText =
    googleLoginText.textContent;

  googleLoginText.textContent =
    "Signing in...";

  try {
    await signInWithPopup(
      auth,
      googleProvider
    );
  } catch (error) {
    console.error(
      "Google sign-in error:",
      error
    );

    if (
      error.code ===
      "auth/popup-closed-by-user"
    ) {
      return;
    }

    if (
      error.code ===
      "auth/popup-blocked"
    ) {
      alert(
        "Google login popup was blocked. Please allow popups for this site."
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
      googleLoginText.textContent =
        originalText;
    }
  }
}

function getShortUserName(user) {
  if (!user) {
    return "Login with Google";
  }

  if (user.displayName) {
    const firstName =
      user.displayName
        .trim()
        .split(/\s+/)[0];

    return firstName.length > 15
      ? `${firstName.slice(0, 15)}…`
      : firstName;
  }

  if (user.email) {
    return user.email.split("@")[0];
  }

  return "Account";
}

function updateAuthNotice() {
  authNotice.hidden =
    Boolean(currentUser);
}

function updateAuthUI() {
  if (currentUser) {
    googleLoginText.textContent =
      getShortUserName(currentUser);

    googleLoginBtn.title =
      currentUser.email || "Google account";
  } else {
    googleLoginText.textContent =
      "Login with Google";

    googleLoginBtn.removeAttribute(
      "title"
    );
  }

  updateAuthNotice();
}

googleLoginBtn.addEventListener(
  "click",
  handleGoogleLogin
);

googleLoginBtn.addEventListener(
  "dblclick",
  async () => {
    if (!currentUser || !auth) {
      return;
    }

    const shouldLogout =
      confirm(
        "Do you want to sign out of Cheapster.in?"
      );

    if (!shouldLogout) {
      return;
    }

    try {
      await signOut(auth);
    } catch (error) {
      console.error(
        "Sign-out failed:",
        error
      );
    }
  }
);

if (auth) {
  onAuthStateChanged(
    auth,
    (user) => {
      currentUser = user;
      updateAuthUI();
    }
  );
}

/* =========================================================
   GIVEAWAY VALIDATION
========================================================= */

function clearFieldError(
  inputId,
  errorId
) {
  const input =
    document.getElementById(inputId);

  const error =
    document.getElementById(errorId);

  input
    ?.closest(".form-group")
    ?.classList.remove("has-error");

  if (error) {
    error.textContent = "";
  }
}

function showFieldError(
  inputId,
  errorId,
  message
) {
  const input =
    document.getElementById(inputId);

  const error =
    document.getElementById(errorId);

  input
    ?.closest(".form-group")
    ?.classList.add("has-error");

  if (error) {
    error.textContent =
      message;
  }
}

function resetGiveawayValidation() {
  [
    ["fullName", "fullNameError"],
    ["whatsappNumber", "whatsappError"],
    ["orderId", "orderIdError"],
    ["brand", "brandError"]
  ].forEach(
    ([inputId, errorId]) => {
      clearFieldError(
        inputId,
        errorId
      );
    }
  );
}

function validateGiveawayForm() {
  resetGiveawayValidation();

  let valid = true;

  const fullName =
    document.getElementById(
      "fullName"
    ).value.trim();

  const whatsapp =
    document.getElementById(
      "whatsappNumber"
    ).value.trim();

  const orderId =
    document.getElementById(
      "orderId"
    ).value.trim();

  const brand =
    document.getElementById(
      "brand"
    ).value;

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

document
  .getElementById("whatsappNumber")
  .addEventListener(
    "input",
    (event) => {
      event.target.value =
        event.target.value
          .replace(/\D/g, "")
          .slice(0, 10);
    }
  );

/* =========================================================
   GIVEAWAY SUBMIT
========================================================= */

giveawayForm.addEventListener(
  "submit",
  async (event) => {
    event.preventDefault();

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
      WEBHOOK_URL ===
        "YOUR_WEBHOOK_URL"
    ) {
      alert(
        "Please configure WEBHOOK_URL in script.js first."
      );

      return;
    }

    const fullName =
      document.getElementById(
        "fullName"
      ).value.trim();

    const whatsappNumber =
      document.getElementById(
        "whatsappNumber"
      ).value.trim();

    const orderId =
      document.getElementById(
        "orderId"
      ).value.trim();

    const brand =
      document.getElementById(
        "brand"
      ).value;

    const payload = {
      fullName,
      whatsappNumber,
      orderId,
      brand,

      user: {
        uid: currentUser.uid,
        email:
          currentUser.email || "",
        displayName:
          currentUser.displayName || ""
      },

      submittedAt:
        new Date().toISOString(),

      source:
        "Cheapster.in",

      formType:
        "Diwali Mega Giveaway"
    };

    setLoading(
      submitEntryBtn,
      true
    );

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
              JSON.stringify(payload)
          }
        );

      if (!response.ok) {
        throw new Error(
          `Webhook returned HTTP ${response.status}`
        );
      }

      giveawayForm.hidden = true;
      giveawaySuccess.hidden =
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
      setLoading(
        submitEntryBtn,
        false
      );
    }
  }
);

/* =========================================================
   GIVEAWAY RESET
========================================================= */

function resetGiveawayState() {
  giveawayForm.hidden = false;

  giveawaySuccess.hidden =
    true;

  giveawayForm.reset();

  resetGiveawayValidation();

  setLoading(
    submitEntryBtn,
    false,
    "Submit Entry"
  );

  updateAuthNotice();
}

/* =========================================================
   CONTACT FORM
========================================================= */

function validateContactForm() {
  clearFieldError(
    "contactName",
    "contactNameError"
  );

  clearFieldError(
    "contactIssue",
    "contactIssueError"
  );

  clearFieldError(
    "contactMessage",
    "contactMessageError"
  );

  let valid = true;

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

contactForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    if (!validateContactForm()) {
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
      encodeURIComponent(
        whatsappMessage
      );

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_SUPPORT_NUMBER}?text=${encodedMessage}`;

    /*
      No fetch here.
      Opens WhatsApp directly in a new tab.
    */

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }
);

/* =========================================================
   INIT
========================================================= */

function initializeUI() {
  populateBrandDropdown();

  renderStores(STORES);

  currentYear.textContent =
    new Date().getFullYear();

  updateAuthUI();

  initializeWelcomePopup();
}

initializeUI();
