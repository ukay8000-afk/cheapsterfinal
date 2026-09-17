// =========================================================
// CHEAPSTER.IN — 77+ BRANDS DIRECTORY
// Rebuilt for premium feel + speed: DOM-node rendering,
// debounced search, layered logo fallback, scroll reveal.
// =========================================================

const stores = [
  // FASHION & STREETWEAR
  { name: "Amazon", domain: "amazon.in", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", description: "Everything marketplace", link: "#" },
  { name: "Flipkart", domain: "flipkart.com", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg", description: "Shopping marketplace", link: "#" },
  { name: "Myntra", domain: "myntra.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png", description: "Fashion & lifestyle", link: "#" },
  { name: "AJIO", domain: "ajio.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AJIO_Logo.svg/2560px-AJIO_Logo.svg.png", description: "Fashion destination", link: "#" },
  { name: "Tata CLiQ", domain: "tatacliq.com", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Tata_CLiQ_Logo.svg", description: "Multi-category retail", link: "#" },
  { name: "Meesho", domain: "meesho.com", description: "Value shopping", link: "#" },
  { name: "Nike", domain: "nike.com", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", description: "Sports & streetwear", link: "#" },
  { name: "Puma", domain: "puma.com", logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Puma_Logo.svg", description: "Athletic wear", link: "#" },
  { name: "Adidas", domain: "adidas.co.in", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", description: "Sports & fashion", link: "#" },
  { name: "Snitch", domain: "snitch.co.in", description: "Men's fashion", link: "#" },
  { name: "The Souled Store", domain: "thesouledstore.com", description: "Pop culture merch", link: "#" },
  { name: "Bewakoof", domain: "bewakoof.com", description: "Quirky fashion", link: "#" },
  { name: "Urbanic", domain: "urbanic.com", description: "Gen-Z women's fashion", link: "#" },
  { name: "Beyoung", domain: "beyoung.in", description: "Everyday fashion", link: "#" },
  { name: "XYXX", domain: "xyxxcrew.com", description: "Men's innerwear", link: "#" },

  // BEAUTY & GROOMING
  { name: "Nykaa", domain: "nykaa.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Nykaa_Logo.svg/2560px-Nykaa_Logo.svg.png", description: "Beauty & cosmetics", link: "#" },
  { name: "Purplle", domain: "purplle.com", description: "Beauty shopping", link: "#" },
  { name: "MyGlamm", domain: "myglamm.com", description: "Makeup & beauty", link: "#" },
  { name: "Mamaearth", domain: "mamaearth.in", description: "Toxin-free care", link: "#" },
  { name: "Minimalist", domain: "beminimalist.co", description: "Science skincare", link: "#" },
  { name: "The Derma Co", domain: "thedermaco.com", description: "Dermatological care", link: "#" },
  { name: "Dot & Key", domain: "dotandkey.com", description: "Skincare", link: "#" },
  { name: "Plum", domain: "plumgoodness.com", description: "Vegan beauty", link: "#" },
  { name: "Sugar Cosmetics", domain: "sugarcosmetics.com", description: "Makeup brand", link: "#" },
  { name: "Pilgrim", domain: "discoverpilgrim.com", description: "Global beauty secrets", link: "#" },
  { name: "Foxtale", domain: "foxtale.in", description: "Skincare essentials", link: "#" },
  { name: "MCaffeine", domain: "mcaffeine.com", description: "Caffeinated care", link: "#" },
  { name: "Aqualogica", domain: "aqualogica.in", description: "Hydration skincare", link: "#" },
  { name: "WOW Skin Science", domain: "buywow.in", description: "Natural care", link: "#" },

  // HEALTH & WELLNESS
  { name: "Plix", domain: "plixlife.com", description: "Plant nutrition", link: "#" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", description: "Sports nutrition", link: "#" },
  { name: "Myprotein", domain: "myprotein.co.in", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Myprotein_logo.svg", description: "Fitness supplements", link: "#" },
  { name: "Kapiva", domain: "kapiva.in", description: "Ayurvedic nutrition", link: "#" },
  { name: "HealthKart", domain: "healthkart.com", description: "Health supplements", link: "#" },

  // QUICK COMMERCE & FOOD
  { name: "Blinkit", domain: "blinkit.com", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Blinkit_logo.svg/1200px-Blinkit_logo.svg.png", description: "10-min delivery", link: "#" },
  { name: "Swiggy", domain: "swiggy.com", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg", description: "Food & Instamart", link: "#" },
  { name: "Zomato", domain: "zomato.com", description: "Food delivery", link: "#" },
  { name: "Zepto", domain: "zeptonow.com", description: "Quick commerce", link: "#" },
  { name: "BigBasket", domain: "bigbasket.com", description: "Online grocery", link: "#" },
  { name: "EatSure", domain: "eatsure.com", description: "Food delivery", link: "#" },
  { name: "Domino's", domain: "dominos.co.in", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg", description: "Pizza delivery", link: "#" },
  { name: "Pizza Hut", domain: "pizzahut.co.in", logo: "https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg", description: "Pizza delivery", link: "#" },

  // ELECTRONICS & TECH
  { name: "Croma", domain: "croma.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Croma_Logo.svg/2560px-Croma_Logo.svg.png", description: "Electronics", link: "#" },
  { name: "Reliance Digital", domain: "reliancedigital.in", description: "Tech retail", link: "#" },
  { name: "Samsung", domain: "samsung.com", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", description: "Mobiles & electronics", link: "#" },
  { name: "OnePlus", domain: "oneplus.in", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/OnePlus_logo.svg", description: "Smartphones", link: "#" },
  { name: "boAt", domain: "boat-lifestyle.com", description: "Audio & wearables", link: "#" },
  { name: "Noise", domain: "gonoise.com", description: "Smartwatches", link: "#" },
  { name: "Nothing", domain: "nothing.tech", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Nothing_logo.svg", description: "Innovative tech", link: "#" },
  { name: "JBL", domain: "jbl.com", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/JBL_logo.svg", description: "Premium audio", link: "#" },
  { name: "Apple", domain: "apple.com", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", description: "Premium devices", link: "#" },

  // ACCESSORIES
  { name: "Lenskart", domain: "lenskart.com", description: "Eyewear", link: "#" },
  { name: "Giva", domain: "giva.co", description: "Silver jewellery", link: "#" },
  { name: "Fastrack", domain: "fastrack.in", description: "Youth accessories", link: "#" },
  { name: "Tanishq", domain: "tanishq.co.in", description: "Fine jewellery", link: "#" },

  // TRAVEL
  { name: "MakeMyTrip", domain: "makemytrip.com", description: "Flights & hotels", link: "#" },
  { name: "Goibibo", domain: "goibibo.com", description: "Travel bookings", link: "#" },
  { name: "Agoda", domain: "agoda.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Agoda_logo.svg", description: "Hotels & stays", link: "#" },
  { name: "Cleartrip", domain: "cleartrip.com", description: "Flights & travel", link: "#" },
  { name: "Oyo Rooms", domain: "oyorooms.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_%28logo%29.png", description: "Budget stays", link: "#" },
  { name: "Booking.com", domain: "booking.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg", description: "Global travel", link: "#" },
  { name: "RedBus", domain: "redbus.in", description: "Bus bookings", link: "#" },

  // PHARMACY
  { name: "Tata 1mg", domain: "1mg.com", description: "Online pharmacy", link: "#" },
  { name: "Apollo 24|7", domain: "apollo247.com", description: "Healthcare", link: "#" },
  { name: "Netmeds", domain: "netmeds.com", description: "Medicine delivery", link: "#" },

  // FINANCE & CARDS
  { name: "Upstox", domain: "upstox.com", description: "Trading app", link: "#" },
  { name: "Groww", domain: "groww.in", description: "Investing platform", link: "#" },
  { name: "Angel One", domain: "angelone.in", description: "Stock broking", link: "#" },
  { name: "BankBazaar", domain: "bankbazaar.com", description: "Financial marketplace", link: "#" },
  { name: "SBI Credit Cards", domain: "sbicard.com", description: "Credit cards", link: "#" },

  // SOFTWARE & DIGITAL
  { name: "Hostinger", domain: "hostinger.in", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Hostinger_logo.svg", description: "Web hosting", link: "#" },
  { name: "Bluehost", domain: "bluehost.in", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Bluehost_logo.svg", description: "Hosting services", link: "#" },
  { name: "Shopify", domain: "shopify.in", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", description: "E-commerce platform", link: "#" },
  { name: "Canva", domain: "canva.com", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg", description: "Design tool", link: "#" },
  { name: "Grammarly", domain: "grammarly.com", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Grammarly_logo.svg", description: "Writing assistant", link: "#" },
  { name: "ChatGPT", domain: "openai.com", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", description: "AI tools", link: "#" },
  { name: "Adobe", domain: "adobe.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Logo_Square.svg", description: "Creative software", link: "#" }
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
  if (store.domain) chain.push(`https://www.google.com/s2/favicons?domain=${store.domain}&sz=128`);
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
    window.open(store.link || "#", "_blank");
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

window.addEventListener("load", () => {
  if (localStorage.getItem("cheapster_welcome_seen") !== "1") {
    setTimeout(() => openModal("welcomeModal"), 800);
  }
});

document.getElementById("continueBtn").addEventListener("click", () => {
  localStorage.setItem("cheapster_welcome_seen", "1");
  closeModal("welcomeModal");
});

document.getElementById("rewardForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("rewardForm").hidden = true;
  document.getElementById("successView").hidden = false;
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const issue = document.getElementById("contactIssueText").value;
  const message = document.getElementById("contactMessage").value;

  const text = encodeURIComponent(`Hi Cheapster Support,\nMy Name: ${name}\nIssue: ${issue}\n\nMessage:\n${message}`);
  window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
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
const revealTargets = document.querySelectorAll(".reveal-on-scroll");
if (revealTargets.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => {
    el.classList.add("reveal-armed");
    observer.observe(el);
  });
}

// ---------- init ----------

renderStores(stores);
if (document.getElementById("currentYear")) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}
