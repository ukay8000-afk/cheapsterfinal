// =========================================================
// CHEAPSTER.IN — 77+ BRANDS DIRECTORY (Premium Edition)
// Haptic Feedback, Spotlight Hover, Toast Notifications, & PWA
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
  { name: "Snitch", domain: "", description: "Men's fashion", link: "https://www.snitch.co.in" },
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
  { name: "Plix", domain: "", description: "Plant nutrition", link: "https://www.plixlife.com" },
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

// ---------- Premium Interactions Helpers ----------

const haptic = () => {
  if (navigator.vibrate) navigator.vibrate(40);
};

function showToast(message, icon = "✨") {
  haptic();
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  toast.innerHTML = `<span style="font-size:16px;">${icon}</span> ${message}`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("toast-exit");
    toast.addEventListener("animationend", () => toast.remove());
  }, 3500);
}

// ---------- utilities ----------

function initials(name) {
  return name.substring(0, 2).toUpperCase();
}

function debounce(fn, delay = 160) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function buildLogoChain(store) {
  const chain = [];
  if (store.logo) chain.push(store.logo);
  if (store.domain) {
    chain.push(`https://www.google.com/s2/favicons?domain=${store.domain}&sz=128`);
  }
  return chain;
}

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

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });

  const frame = document.createElement("div");
  frame.className = "store-logo-frame";

  const chain = buildLogoChain(store);
  const img = document.createElement("img");
  img.className = "store-logo";
  img.alt = store.name;
  img.width = 100;
  img.height = 100;
  img.decoding = "async";
  
  if (index < 12) {
    img.loading = "eager";
    img.fetchPriority = "high";
  } else {
    img.loading = "lazy";
    img.fetchPriority = "low";
  }

  const bgColors = ['#1c3f66', '#0d2138', '#142a44']; 
  const bg = bgColors[index % bgColors.length];
  const svgFallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='${encodeURIComponent(bg)}'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='38' font-weight='800' fill='%23ffffff'%3E${initials(store.name)}%3C/text%3E%3C/svg%3E`;

  if (chain.length > 0) {
    let currentStep = 0;
    img.onerror = () => {
      currentStep++;
      if (currentStep < chain.length) {
        img.src = chain[currentStep];
      } else {
        img.onerror = null; 
        img.src = svgFallback; 
      }
    };
    img.src = chain[0]; 
  } else {
    img.src = svgFallback;
  }
  
  frame.appendChild(img);

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
    haptic();
    openStoreLink(store);
    const matchingOption = [...brandSelect.options].find(opt => opt.value === store.name);
    if (matchingOption) brandSelect.value = matchingOption.value;
    openModal("formModal");
  });

  return card;
}

function renderStores(storeList) {
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
  haptic();
  const modal = document.getElementById(id);
  if (modal) { modal.hidden = false; document.body.classList.add("modal-open"); }
}

function closeModal(id) {
  haptic();
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
  haptic();
  const isOpen = !headerDropdown.hidden;
  if (isOpen) {
    closeHeaderDropdown();
  } else {
    headerDropdown.hidden = false;
    hamburgerBtn.setAttribute("aria-expanded", "true");
  }
});

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
const menuLoginBtn = document.getElementById("menuLoginBtn"); 
let currentUser = null;

if (window.auth) {
  const handleLogin = () => {
    haptic();
    if (currentUser) return;

    window.auth.signInWithPopup(window.googleProvider).catch((err) => {
      console.error("Google sign-in failed:", err.code, err.message);
      if (
        err.code === "auth/popup-blocked" ||
        err.code === "auth/operation-not-supported-in-this-environment" ||
        err.code === "auth/popup-closed-by-user" ||
        err.code === "auth/cancelled-popup-request"
      ) {
        window.auth.signInWithRedirect(window.googleProvider);
      } else if (err.code === "auth/unauthorized-domain") {
        showToast("Domain not authorized for login.", "⚠️");
      } else {
        showToast("Login failed. Please try again.", "❌");
      }
    });
  };

  authBtn.addEventListener("click", handleLogin);
  if (menuLoginBtn) menuLoginBtn.addEventListener("click", handleLogin);

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
      
      logoutBtn.hidden = false;
      if (menuLoginBtn) menuLoginBtn.hidden = true;
    } else {
      authBtnText.textContent = "Login";
      authBtn.title = "Login with Google";
      
      logoutBtn.hidden = true;
      if (menuLoginBtn) menuLoginBtn.hidden = false;
    }
  });

  logoutBtn.addEventListener("click", () => window.auth.signOut());
} else {
  const alertNotConfigured = () => showToast("Login isn't configured yet.", "⚠️");
  authBtn.addEventListener("click", alertNotConfigured);
  if (menuLoginBtn) menuLoginBtn.addEventListener("click", alertNotConfigured);
}

// ---------- reward form → Google Sheet ----------

const SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbziQvJq8kqk-CAHRekAHjkSVEJkQmbBp84girc4vjfTPbY20VJl2hz_I-OC-bWBcjQf/exec";

document.getElementById("rewardForm").addEventListener("submit", (e) => {
  e.preventDefault();

  if (!currentUser) {
    showToast("Please login with Google first.", "🔒");
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
  haptic();

  fetch(SHEET_WEBAPP_URL, {
    method: "POST",
    mode: "no-cors",
    body: new URLSearchParams(payload)
  }).catch((err) => console.error("Sheet submission error in background:", err));

  setTimeout(() => {
    document.getElementById("rewardForm").hidden = true;
    document.getElementById("successView").hidden = false;
    
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit Entry";
    haptic(); 
  }, 600);
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const issue = document.getElementById("contactIssueText").value;
  const message = document.getElementById("contactMessage").value;

  const text = encodeURIComponent(`Hi Cheapster Support,\nMy Name: ${name}\nIssue: ${issue}\n\nMessage:\n${message}`);
  openStoreLink({ link: `https://wa.me/919999999999?text=${text}` }); 
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
    setTimeout(() => el.classList.add("in-view"), 1500);
  });
}

renderStores(stores);
if (document.getElementById("currentYear")) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

// =========================================================
// PWA INSTALL BUTTON & SERVICE WORKER SETUP
// =========================================================

// 1. Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.log('Service worker registration failed.', err);
    });
  });
}

// 2. Custom App Install Button Logic
let deferredPrompt;
const installBtn = document.getElementById('installAppBtn');

if (installBtn) {
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome's default bottom mini-infobar from appearing
    e.preventDefault();
    // Stash the event to trigger it on button click
    deferredPrompt = e;
    // Un-hide our custom button in the footer
    installBtn.style.display = 'inline-flex';
  });

  installBtn.addEventListener('click', async () => {
    haptic();
    if (deferredPrompt) {
      // Show the native Android install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to install: ${outcome}`);
      // Once used, the prompt can't be used again
      deferredPrompt = null;
      // Hide the button after interaction
      installBtn.style.display = 'none';
    }
  });

  window.addEventListener('appinstalled', () => {
    installBtn.style.display = 'none';
    deferredPrompt = null;
    console.log('App successfully installed!');
  });
}
