// =========================================================
// CHEAPSTER.IN — 77+ BRANDS DIRECTORY
// Rebuilt for premium feel + speed: DOM-node rendering,
// debounced search, layered logo fallback, scroll reveal.
// =========================================================

const stores = [
  // FASHION & STREETWEAR
  { name: "Amazon", domain: "amazon.in", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", description: "Everything marketplace", link: "https://www.amazon.in" },
  { name: "Flipkart", domain: "flipkart.com", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg", description: "Shopping marketplace", link: "https://www.flipkart.com" },
  { name: "Myntra", domain: "myntra.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png", description: "Fashion & lifestyle", link: "https://www.myntra.com" },
  { name: "AJIO", domain: "ajio.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AJIO_Logo.svg/2560px-AJIO_Logo.svg.png", description: "Fashion destination", link: "https://www.ajio.com" },
  { name: "Tata CLiQ", domain: "tatacliq.com", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Tata_CLiQ_Logo.svg", description: "Multi-category retail", link: "https://www.tatacliq.com" },
  { name: "Meesho", domain: "meesho.com", description: "Value shopping", link: "https://www.meesho.com" },
  { name: "Nike", domain: "nike.com", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", description: "Sports & streetwear", link: "https://www.nike.com/in" },
  { name: "Puma", domain: "puma.com", logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Puma_Logo.svg", description: "Athletic wear", link: "https://in.puma.com" },
  { name: "Adidas", domain: "adidas.co.in", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", description: "Sports & fashion", link: "https://www.adidas.co.in" },
  { name: "Snitch", domain: "snitch.co.in", description: "Men's fashion", link: "https://www.snitch.co.in" },
  { name: "The Souled Store", domain: "thesouledstore.com", description: "Pop culture merch", link: "https://www.thesouledstore.com" },
  { name: "Bewakoof", domain: "bewakoof.com", description: "Quirky fashion", link: "https://www.bewakoof.com" },
  { name: "Urbanic", domain: "urbanic.com", description: "Gen-Z women's fashion", link: "https://www.urbanic.com" },
  { name: "Beyoung", domain: "beyoung.in", description: "Everyday fashion", link: "https://beyoung.in" },
  { name: "XYXX", domain: "xyxxcrew.com", description: "Men's innerwear", link: "https://xyxxcrew.com" },

  // BEAUTY & GROOMING
  { name: "Nykaa", domain: "nykaa.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Nykaa_Logo.svg/2560px-Nykaa_Logo.svg.png", description: "Beauty & cosmetics", link: "https://www.nykaa.com" },
  { name: "Purplle", domain: "purplle.com", description: "Beauty shopping", link: "https://www.purplle.com" },
  { name: "MyGlamm", domain: "myglamm.com", description: "Makeup & beauty", link: "https://www.myglamm.com" },
  { name: "Mamaearth", domain: "mamaearth.in", description: "Toxin-free care", link: "https://www.mamaearth.in" },
  { name: "Minimalist", domain: "beminimalist.co", description: "Science skincare", link: "https://www.beminimalist.co" },
  { name: "The Derma Co", domain: "thedermaco.com", description: "Dermatological care", link: "https://www.thedermaco.com" },
  { name: "Dot & Key", domain: "dotandkey.com", description: "Skincare", link: "https://www.dotandkey.com" },
  { name: "Plum", domain: "plumgoodness.com", description: "Vegan beauty", link: "https://www.plumgoodness.com" },
  { name: "Sugar Cosmetics", domain: "sugarcosmetics.com", description: "Makeup brand", link: "https://www.sugarcosmetics.com" },
  { name: "Pilgrim", domain: "discoverpilgrim.com", description: "Global beauty secrets", link: "https://www.discoverpilgrim.com" },
  { name: "Foxtale", domain: "foxtale.in", description: "Skincare essentials", link: "https://www.foxtale.in" },
  { name: "MCaffeine", domain: "mcaffeine.com", description: "Caffeinated care", link: "https://www.mcaffeine.com" },
  { name: "Aqualogica", domain: "aqualogica.in", description: "Hydration skincare", link: "https://www.aqualogica.in" },
  { name: "WOW Skin Science", domain: "buywow.in", description: "Natural care", link: "https://www.buywow.in" },

  // HEALTH & WELLNESS
  { name: "Plix", domain: "plixlife.com", description: "Plant nutrition", link: "https://www.plixlife.com" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", description: "Sports nutrition", link: "https://www.muscleblaze.com" },
  { name: "Myprotein", domain: "myprotein.co.in", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Myprotein_logo.svg", description: "Fitness supplements", link: "https://www.myprotein.co.in" },
  { name: "Kapiva", domain: "kapiva.in", description: "Ayurvedic nutrition", link: "https://www.kapiva.in" },
  { name: "HealthKart", domain: "healthkart.com", description: "Health supplements", link: "https://www.healthkart.com" },

  // QUICK COMMERCE & FOOD
  { name: "Blinkit", domain: "blinkit.com", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Blinkit_logo.svg/1200px-Blinkit_logo.svg.png", description: "10-min delivery", link: "https://blinkit.com" },
  { name: "Swiggy", domain: "swiggy.com", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg", description: "Food & Instamart", link: "https://www.swiggy.com" },
  { name: "Zomato", domain: "zomato.com", description: "Food delivery", link: "https://www.zomato.com" },
  { name: "Zepto", domain: "zeptonow.com", description: "Quick commerce", link: "https://www.zeptonow.com" },
  { name: "BigBasket", domain: "bigbasket.com", description: "Online grocery", link: "https://www.bigbasket.com" },
  { name: "EatSure", domain: "eatsure.com", description: "Food delivery", link: "https://www.eatsure.com" },
  { name: "Domino's", domain: "dominos.co.in", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg", description: "Pizza delivery", link: "https://www.dominos.co.in" },
  { name: "Pizza Hut", domain: "pizzahut.co.in", logo: "https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg", description: "Pizza delivery", link: "https://www.pizzahut.co.in" },

  // ELECTRONICS & TECH
  { name: "Croma", domain: "croma.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Croma_Logo.svg/2560px-Croma_Logo.svg.png", description: "Electronics", link: "https://www.croma.com" },
  { name: "Reliance Digital", domain: "reliancedigital.in", description: "Tech retail", link: "https://www.reliancedigital.in" },
  { name: "Samsung", domain: "samsung.com", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", description: "Mobiles & electronics", link: "https://www.samsung.com/in" },
  { name: "OnePlus", domain: "oneplus.in", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/OnePlus_logo.svg", description: "Smartphones", link: "https://www.oneplus.in" },
  { name: "boAt", domain: "boat-lifestyle.com", description: "Audio & wearables", link: "https://www.boat-lifestyle.com" },
  { name: "Noise", domain: "gonoise.com", description: "Smartwatches", link: "https://www.gonoise.com" },
  { name: "Nothing", domain: "nothing.tech", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Nothing_logo.svg", description: "Innovative tech", link: "https://in.nothing.tech" },
  { name: "JBL", domain: "jbl.com", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/JBL_logo.svg", description: "Premium audio", link: "https://in.jbl.com" },
  { name: "Apple", domain: "apple.com", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", description: "Premium devices", link: "https://www.apple.com/in" },

  // ACCESSORIES
  { name: "Lenskart", domain: "lenskart.com", description: "Eyewear", link: "https://www.lenskart.com" },
  { name: "Giva", domain: "giva.co", description: "Silver jewellery", link: "https://www.giva.co" },
  { name: "Fastrack", domain: "fastrack.in", description: "Youth accessories", link: "https://www.fastrack.in" },
  { name: "Tanishq", domain: "tanishq.co.in", description: "Fine jewellery", link: "https://www.tanishq.co.in" },

  // TRAVEL
  { name: "MakeMyTrip", domain: "makemytrip.com", description: "Flights & hotels", link: "https://www.makemytrip.com" },
  { name: "Goibibo", domain: "goibibo.com", description: "Travel bookings", link: "https://www.goibibo.com" },
  { name: "Agoda", domain: "agoda.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Agoda_logo.svg", description: "Hotels & stays", link: "https://www.agoda.com" },
  { name: "Cleartrip", domain: "cleartrip.com", description: "Flights & travel", link: "https://www.cleartrip.com" },
  { name: "Oyo Rooms", domain: "oyorooms.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_%28logo%29.png", description: "Budget stays", link: "https://www.oyorooms.com" },
  { name: "Booking.com", domain: "booking.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg", description: "Global travel", link: "https://www.booking.com" },
  { name: "RedBus", domain: "redbus.in", description: "Bus bookings", link: "https://www.redbus.in" },

  // PHARMACY
  { name: "Tata 1mg", domain: "1mg.com", description: "Online pharmacy", link: "https://www.1mg.com" },
  { name: "Apollo 24|7", domain: "apollo247.com", description: "Healthcare", link: "https://www.apollo247.com" },
  { name: "Netmeds", domain: "netmeds.com", description: "Medicine delivery", link: "https://www.netmeds.com" },

  // FINANCE & CARDS
  { name: "Upstox", domain: "upstox.com", description: "Trading app", link: "https://upstox.com" },
  { name: "Groww", domain: "groww.in", description: "Investing platform", link: "https://groww.in" },
  { name: "Angel One", domain: "angelone.in", description: "Stock broking", link: "https://www.angelone.in" },
  { name: "BankBazaar", domain: "bankbazaar.com", description: "Financial marketplace", link: "https://www.bankbazaar.com" },
  { name: "SBI Credit Cards", domain: "sbicard.com", description: "Credit cards", link: "https://www.sbicard.com" },

  // SOFTWARE & DIGITAL
  { name: "Hostinger", domain: "hostinger.in", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Hostinger_logo.svg", description: "Web hosting", link: "https://www.hostinger.in" },
  { name: "Bluehost", domain: "bluehost.in", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Bluehost_logo.svg", description: "Hosting services", link: "https://www.bluehost.in" },
  { name: "Shopify", domain: "shopify.in", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", description: "E-commerce platform", link: "https://www.shopify.com" },
  { name: "Canva", domain: "canva.com", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg", description: "Design tool", link: "https://www.canva.com" },
  { name: "Grammarly", domain: "grammarly.com", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Grammarly_logo.svg", description: "Writing assistant", link: "https://www.grammarly.com" },
  { name: "ChatGPT", domain: "openai.com", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", description: "AI tools", link: "https://chatgpt.com" },
  { name: "Adobe", domain: "adobe.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Logo_Square.svg", description: "Creative software", link: "https://www.adobe.com" }
];

const grid = document.getElementById("storeGrid");
const searchInput = document.getElementById("searchInput");
const resultPill = document.getElementById("resultPill");
const heroStoreCount = document.getElementById("heroStoreCount");
const emptyState = document.getElementById("emptyState");
const brandSelect = document.getElementById("brandSelect");

// ---------- utilities ----------

function initials(name) {
  return name.substring(0, 2).toUpperCase();
}

// Debounce so the grid doesn't re-render on every single keystroke — this
// alone removes most of the jank people feel while typing in the search box.
function debounce(fn, delay = 160) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Build an ordered list of logo sources to try for a store: its own curated
// logo, then Google's favicon service as a reliable fallback (near-universal
// coverage, tiny payload, fast). NOTE: Clearbit's logo.clearbit.com is not
// used — that service was permanently shut down (Dec 2025), and requests to
// a dead host were exactly what made logos disappear and the page feel slow:
// every browser had to wait for that connection to fail before trying
// anything else.
function buildLogoChain(store) {
  const chain = [];
  if (store.logo) chain.push(store.logo);
  if (store.domain) {
    // apple-touch-icon is usually a proper high-res square logo when the
    // site has one, and — unlike Google's service — a real 404 fires the
    // <img> error event correctly, so we actually fall through instead of
    // getting stuck showing a blurry generic icon.
    chain.push(`https://${store.domain}/apple-touch-icon.png`);
    chain.push(`https://www.google.com/s2/favicons?domain=${store.domain}&sz=128`);
  }
  return chain;
}

function attachLogoFallback(img, chain, store) {
  let step = 0;
  img.addEventListener("error", () => {
    step += 1;
    if (step < chain.length) {
      img.src = chain[step];
      return;
    }
    const fallback = document.createElement("div");
    fallback.className = "store-logo-fallback";
    fallback.textContent = initials(store.name);
    img.replaceWith(fallback);
  });
}

// Opening brand links with window.open(url, "_blank") is what was breaking
// this on phones: mobile browsers (and especially in-app browsers like the
// WhatsApp/Instagram webview) frequently block window.open() unless it's
// treated as a "trusted" popup, so the tab either never opens or opens after
// a noticeable delay. A real <a> click is treated as a normal link tap by
// every browser, so it opens instantly and reliably everywhere. We also
// fall back to the brand's own domain when no real affiliate link is set
// (a bare "#" was going nowhere, which is why cards looked broken).
function openStoreLink(store) {
  let url = store.link;
  if (!url || url === "#") {
    url = store.domain ? `https://www.${store.domain}` : null;
  }
  if (!url) return;

  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ---------- rendering ----------

function buildCard(store, index) {
  const card = document.createElement("div");
  card.className = "store-card";

  const frame = document.createElement("div");
  frame.className = "store-logo-frame";

  const chain = buildLogoChain(store);
  if (chain.length) {
    const img = document.createElement("img");
    img.className = "store-logo";
    img.alt = store.name;
    img.width = 100;
    img.height = 100;
    img.decoding = "async";
    // First couple of rows load eagerly at high priority (what the user
    // sees immediately); everything below the fold is lazy so it doesn't
    // compete for bandwidth with what's on screen.
    if (index < 12) {
      img.loading = "eager";
      img.fetchPriority = "high";
    } else {
      img.loading = "lazy";
      img.fetchPriority = "low";
    }
    img.src = chain[0];
    attachLogoFallback(img, chain, store);
    frame.appendChild(img);
  } else {
    const fallback = document.createElement("div");
    fallback.className = "store-logo-fallback";
    fallback.textContent = initials(store.name);
    frame.appendChild(fallback);
  }

  const name = document.createElement("h3");
  name.className = "store-name";
  name.textContent = store.name;

  const meta = document.createElement("p");
  meta.className = "store-meta";
  meta.textContent = store.description;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "shop-button";
  button.textContent = "Shop Now";

  card.append(frame, name, meta, button);

  card.addEventListener("click", () => {
    openStoreLink(store);
    const matchingOption = [...brandSelect.options].find(opt => opt.value === store.name);
    if (matchingOption) brandSelect.value = matchingOption.value;
    openModal("formModal");
  });

  return card;
}

function renderStores(storeList) {
  // Build off-DOM first, then attach once — a single reflow instead of one
  // per card.
  const fragment = document.createDocumentFragment();
  storeList.forEach((store, i) => fragment.appendChild(buildCard(store, i)));
  grid.innerHTML = "";
  grid.appendChild(fragment);

  const count = storeList.length;
  if (resultPill) resultPill.textContent = `${count} brands`;
  if (heroStoreCount) heroStoreCount.textContent = count;
  if (emptyState) emptyState.hidden = count !== 0;
}

const handleSearch = debounce((query) => {
  const q = query.toLowerCase().trim();
  const filtered = stores.filter(store =>
    store.name.toLowerCase().includes(q) ||
    store.description.toLowerCase().includes(q)
  );
  renderStores(filtered);
});

searchInput.addEventListener("input", (e) => handleSearch(e.target.value));

stores.forEach(store => {
  const option = document.createElement("option");
  option.value = store.name;
  option.textContent = store.name;
  brandSelect.appendChild(option);
});

// ---------- modals ----------

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) { modal.hidden = false; document.body.classList.add("modal-open"); }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) { modal.hidden = true; document.body.classList.remove("modal-open"); }
}

document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.hidden = true;
      document.body.classList.remove("modal-open");
    }
  });
});

document.getElementById("headerOfferBtn").addEventListener("click", () => openModal("formModal"));
document.querySelectorAll("[data-info-modal]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.infoModal));
});

const hamburgerBtn = document.getElementById("hamburgerBtn");
const headerDropdown = document.getElementById("headerDropdown");

function closeHeaderDropdown() {
  headerDropdown.hidden = true;
  hamburgerBtn.setAttribute("aria-expanded", "false");
}

hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = !headerDropdown.hidden;
  if (isOpen) {
    closeHeaderDropdown();
  } else {
    headerDropdown.hidden = false;
    hamburgerBtn.setAttribute("aria-expanded", "true");
  }
});

// Any menu item click both opens its modal (handled above) and closes the dropdown.
headerDropdown.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", closeHeaderDropdown);
});

document.addEventListener("click", (e) => {
  if (!headerDropdown.hidden && !headerDropdown.contains(e.target)) {
    closeHeaderDropdown();
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("cheapster_welcome_seen") !== "1") {
    setTimeout(() => openModal("welcomeModal"), 800);
  }
});

document.getElementById("continueBtn").addEventListener("click", () => {
  localStorage.setItem("cheapster_welcome_seen", "1");
  closeModal("welcomeModal");
});

// ---------- Google login (Firebase Auth) ----------

const authBtn = document.getElementById("authBtn");
const authBtnText = document.getElementById("authBtnText");
const logoutBtn = document.getElementById("logoutBtn");
const deleteAccountBtn = document.getElementById("deleteAccountBtn");
const accountDropdownDivider = document.getElementById("accountDropdownDivider");
let currentUser = null;

if (window.auth) {
  authBtn.addEventListener("click", () => {
    // Once logged in, this button is just a display of who you're signed
    // in as — it no longer does anything on click. Logout / Delete Account
    // live in the hamburger menu instead (see below).
    if (currentUser) return;

    window.auth.signInWithPopup(window.googleProvider).catch((err) => {
      console.error("Google sign-in (popup) failed:", err.code, err.message);
      // Popups are silently blocked in a lot of mobile browsers and in
      // almost every in-app browser (Instagram/WhatsApp/Facebook webviews).
      // When that happens, fall back to a full-page redirect flow instead
      // of just failing — this is what makes login actually work on phones.
      if (
        err.code === "auth/popup-blocked" ||
        err.code === "auth/operation-not-supported-in-this-environment" ||
        err.code === "auth/popup-closed-by-user" ||
        err.code === "auth/cancelled-popup-request"
      ) {
        window.auth.signInWithRedirect(window.googleProvider);
      } else if (err.code === "auth/unauthorized-domain") {
        alert("This domain isn't authorized for login yet (Firebase Console → Authentication → Settings → Authorized domains).");
      } else {
        alert("Login failed, please try again.");
      }
    });
  });

  // Catches the user coming back after signInWithRedirect above.
  window.auth.getRedirectResult().catch((err) => {
    if (err) console.error("Google sign-in (redirect) failed:", err.code, err.message);
  });

  window.auth.onAuthStateChanged((user) => {
    currentUser = user;
    if (user) {
      authBtnText.textContent = user.displayName ? user.displayName.split(" ")[0] : "Account";
      authBtn.title = user.displayName || "Signed in";
      const nameField = document.getElementById("fullName");
      if (nameField && !nameField.value) nameField.value = user.displayName || "";
    } else {
      authBtnText.textContent = "Login";
      authBtn.title = "Login with Google";
    }
    // Logout / Delete Account only make sense once signed in.
    logoutBtn.hidden = !user;
    deleteAccountBtn.hidden = !user;
    accountDropdownDivider.hidden = !user;
  });

  logoutBtn.addEventListener("click", () => window.auth.signOut());

  deleteAccountBtn.addEventListener("click", () => {
    document.getElementById("deleteReason").value = "";
    openModal("deleteAccountModal");
  });

  document.getElementById("deleteAccountForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    const confirmBtn = document.getElementById("confirmDeleteBtn");
    const reason = document.getElementById("deleteReason").value.trim();
    const user = currentUser;

    confirmBtn.disabled = true;
    confirmBtn.textContent = "Deleting...";

    async function logReasonThenDelete() {
      // Log the deletion (with the optional reason) to Firestore — the
      // same Firebase project the login itself lives in — before the
      // account is gone and uid/email are no longer available.
      //
      // If Firestore isn't set up yet in the Firebase console, a write
      // doesn't fail fast — it just hangs with no response at all, which
      // would freeze the whole delete flow. The timeout below guarantees
      // we give up on logging after 5s and go straight to deleting the
      // account either way.
      if (window.db) {
        try {
          await Promise.race([
            window.db.collection("accountDeletions").add({
              uid: user.uid,
              name: user.displayName || "",
              email: user.email || "",
              reason: reason || "",
              deletedAt: firebase.firestore.FieldValue.serverTimestamp()
            }),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Firestore log timed out")), 5000))
          ]);
        } catch (err) {
          // Don't block account deletion just because the log write failed
          // or timed out (e.g. Firestore not enabled yet) — log it and continue.
          console.error("Could not log account deletion reason:", err);
        }
      }
      await user.delete();
    }

    // Overall safety net: no matter what hangs internally, never leave the
    // button stuck on "Deleting..." forever.
    const overallTimeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Account deletion timed out")), 15000)
    );

    try {
      await Promise.race([logReasonThenDelete(), overallTimeout]);
      closeModal("deleteAccountModal");
      alert("Your account has been deleted.");
    } catch (err) {
      if (err.code === "auth/requires-recent-login") {
        // Firebase requires a fresh sign-in before a destructive action
        // like account deletion. Re-authenticate, then retry once.
        try {
          await window.auth.signInWithPopup(window.googleProvider);
          await Promise.race([logReasonThenDelete(), overallTimeout]);
          closeModal("deleteAccountModal");
          alert("Your account has been deleted.");
        } catch (err2) {
          console.error("Account deletion failed after re-auth:", err2);
          alert("Couldn't delete your account. Please try again.");
        }
      } else {
        console.error("Account deletion failed:", err);
        alert("Couldn't delete your account. Please try again.");
      }
    } finally {
      confirmBtn.disabled = false;
      confirmBtn.textContent = "Permanently Delete My Account";
    }
  });
} else {
  // firebase-config.js didn't load / isn't set up yet — don't leave the
  // button silently doing nothing; tell whoever's testing the site why.
  authBtn.addEventListener("click", () => alert("Login isn't configured yet."));
}

// ---------- reward form → Google Sheet ----------

// Paste your deployed Google Apps Script Web App URL here (see setup notes).
const SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbziQvJq8kqk-CAHRekAHjkSVEJkQmbBp84girc4vjfTPbY20VJl2hz_I-OC-bWBcjQf/exec";

document.getElementById("rewardForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  if (!currentUser) {
    alert("Please login with Google first, then submit your entry.");
    return;
  }

  const submitBtn = document.getElementById("submitRewardBtn");
  const payload = {
    fullName: document.getElementById("fullName").value,
    whatsapp: document.getElementById("whatsapp").value,
    brand: document.getElementById("brandSelect").value,
    email: currentUser.email || "",
    uid: currentUser.uid || "",
    submittedAt: new Date().toISOString()
  };

  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  try {
    // mode: "no-cors" is required here — Apps Script Web Apps respond via a
    // redirect to a googleusercontent.com URL that doesn't send CORS
    // headers, so a normal fetch() throws a network error even when the
    // row was written successfully. We don't need to read the response
    // (we show our own success view), so we just fire the request and
    // stop the browser from trying to read a response we don't need.
    await fetch(SHEET_WEBAPP_URL, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(payload)
    });
    document.getElementById("rewardForm").hidden = true;
    document.getElementById("successView").hidden = false;
  } catch (err) {
    console.error("Sheet submission failed:", err);
    alert("Something went wrong submitting your entry. Please try again.");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Entry";
  }
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const issue = document.getElementById("contactIssueText").value;
  const message = document.getElementById("contactMessage").value;

  const text = encodeURIComponent(`Hi Cheapster Support,\nMy Name: ${name}\nIssue: ${issue}\n\nMessage:\n${message}`);
  openStoreLink({ link: `https://wa.me/919999999999?text=${text}` }); // TODO: replace with your real WhatsApp business number
});

// ---------- premium touches: header shadow + scroll reveal ----------

const header = document.getElementById("siteHeader");
if (header) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
      ticking = false;
    });
  }, { passive: true });
}

// Sections render fully visible by default (see CSS). Only once we know
// IntersectionObserver works do we "arm" them for the hide-then-reveal
// effect — this way the animation can only ever add polish, never hide
// content if something about the browser or device doesn't cooperate.
//
// threshold was previously 0.15 (15% of the *whole* target visible at
// once). For a short target that's fine, but .directory-section holds
// all 77 brand cards and is many screens tall — on phones, 15% of that
// total height often never becomes visible at once (viewport is small,
// browser chrome resizes it further), so the section could sit at
// opacity:0 far longer than expected, making cards look broken/unopenable
// even though they were really just invisible. Now: reveal as soon as
// the section starts entering the viewport (threshold 0, rootMargin
// pulls the trigger point up a little), AND a hard timeout forces
// visibility regardless — so this can never get stuck invisible again.
const revealTargets = document.querySelectorAll(".reveal-on-scroll");
if (revealTargets.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
  revealTargets.forEach(el => {
    el.classList.add("reveal-armed");
    observer.observe(el);
    setTimeout(() => el.classList.add("in-view"), 1500); // failsafe
  });
}

// ---------- init ----------

renderStores(stores);
if (document.getElementById("currentYear")) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}
