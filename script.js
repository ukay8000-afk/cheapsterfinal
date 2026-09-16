// =========================================================
// FULL 85+ GEN-Z & PREMIUM BRANDS DIRECTORY
// =========================================================

const stores = [
  // FASHION & STREETWEAR
  { name: "Amazon", domain: "amazon.in", description: "Everything marketplace", link: "#" },
  { name: "Flipkart", domain: "flipkart.com", description: "Shopping marketplace", link: "#" },
  { name: "Myntra", domain: "myntra.com", description: "Fashion & lifestyle", link: "#" },
  { name: "AJIO", domain: "ajio.com", description: "Fashion destination", link: "#" },
  { name: "Tata CLiQ", domain: "tatacliq.com", description: "Multi-category retail", link: "#" },
  { name: "Meesho", domain: "meesho.com", description: "Value shopping", link: "#" },
  { name: "Nike", domain: "nike.com", description: "Sports & streetwear", link: "#" },
  { name: "Puma", domain: "puma.com", description: "Athletic wear", link: "#" },
  { name: "Adidas", domain: "adidas.co.in", description: "Sports & fashion", link: "#" },
  { name: "Snitch", domain: "snitch.co.in", description: "Men's fashion", link: "#" },
  { name: "The Souled Store", domain: "thesouledstore.com", description: "Pop culture merch", link: "#" },
  { name: "Bewakoof", domain: "bewakoof.com", description: "Quirky fashion", link: "#" },
  { name: "Urbanic", domain: "urbanic.com", description: "Gen-Z women's fashion", link: "#" },
  { name: "Beyoung", domain: "beyoung.in", description: "Everyday fashion", link: "#" },
  { name: "XYXX", domain: "xyxxcrew.com", description: "Men's innerwear", link: "#" },

  // BEAUTY & GROOMING
  { name: "Nykaa", domain: "nykaa.com", description: "Beauty & cosmetics", link: "#" },
  { name: "Purplle", domain: "purplle.com", description: "Beauty shopping", link: "#" },
  { name: "MyGlamm", domain: "myglamm.com", description: "Makeup & beauty", link: "#" },
  { name: "Mamaearth", domain: "mamaearth.in", description: "Toxin-free care", link: "#" },
  { name: "Minimalist", domain: "beminimalist.co", description: "Science-backed skincare", link: "#" },
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
  { name: "Plix", domain: "plixlife.com", description: "Plant-based nutrition", link: "#" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", description: "Sports nutrition", link: "#" },
  { name: "Myprotein", domain: "myprotein.co.in", description: "Fitness supplements", link: "#" },
  { name: "Kapiva", domain: "kapiva.in", description: "Ayurvedic nutrition", link: "#" },
  { name: "HealthKart", domain: "healthkart.com", description: "Health supplements", link: "#" },

  // QUICK COMMERCE & FOOD
  { name: "Blinkit", domain: "blinkit.com", description: "10-min delivery", link: "#" },
  { name: "Swiggy", domain: "swiggy.com", description: "Food & Instamart", link: "#" },
  { name: "Zomato", domain: "zomato.com", description: "Food delivery", link: "#" },
  { name: "Zepto", domain: "zeptonow.com", description: "Quick commerce", link: "#" },
  { name: "BigBasket", domain: "bigbasket.com", description: "Online grocery", link: "#" },
  { name: "EatSure", domain: "eatsure.com", description: "Food court delivery", link: "#" },
  { name: "Domino's", domain: "dominos.co.in", description: "Pizza delivery", link: "#" },
  { name: "Pizza Hut", domain: "pizzahut.co.in", description: "Pizza delivery", link: "#" },

  // ELECTRONICS & TECH
  { name: "Croma", domain: "croma.com", description: "Electronics & appliances", link: "#" },
  { name: "Reliance Digital", domain: "reliancedigital.in", description: "Tech retail", link: "#" },
  { name: "Samsung", domain: "samsung.com", description: "Mobiles & electronics", link: "#" },
  { name: "OnePlus", domain: "oneplus.in", description: "Premium smartphones", link: "#" },
  { name: "boAt", domain: "boat-lifestyle.com", description: "Audio & wearables", link: "#" },
  { name: "Noise", domain: "gonoise.com", description: "Smartwatches", link: "#" },
  { name: "Nothing", domain: "nothing.tech", description: "Innovative tech", link: "#" },
  { name: "JBL", domain: "jbl.com", description: "Premium audio", link: "#" },
  { name: "Apple", domain: "apple.com", description: "Premium devices", link: "#" },

  // ACCESSORIES
  { name: "Lenskart", domain: "lenskart.com", description: "Eyewear", link: "#" },
  { name: "Giva", domain: "giva.co", description: "Silver jewellery", link: "#" },
  { name: "Fastrack", domain: "fastrack.in", description: "Youth accessories", link: "#" },
  { name: "Tanishq", domain: "tanishq.co.in", description: "Fine jewellery", link: "#" },

  // TRAVEL
  { name: "MakeMyTrip", domain: "makemytrip.com", description: "Flights & hotels", link: "#" },
  { name: "Goibibo", domain: "goibibo.com", description: "Travel bookings", link: "#" },
  { name: "Agoda", domain: "agoda.com", description: "Hotels & stays", link: "#" },
  { name: "Cleartrip", domain: "cleartrip.com", description: "Flights & travel", link: "#" },
  { name: "Oyo Rooms", domain: "oyorooms.com", description: "Budget stays", link: "#" },
  { name: "Booking.com", domain: "booking.com", description: "Global travel", link: "#" },
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
  { name: "Hostinger", domain: "hostinger.in", description: "Web hosting", link: "#" },
  { name: "Bluehost", domain: "bluehost.in", description: "Hosting services", link: "#" },
  { name: "Shopify", domain: "shopify.in", description: "E-commerce platform", link: "#" },
  { name: "Canva", domain: "canva.com", description: "Design tool", link: "#" },
  { name: "Grammarly", domain: "grammarly.com", description: "Writing assistant", link: "#" },
  { name: "ChatGPT", domain: "openai.com", description: "AI tools", link: "#" },
  { name: "Adobe", domain: "adobe.com", description: "Creative software", link: "#" }
];


// =========================================================
// DOM LOGIC & FIREBASE PLACEHOLDERS
// =========================================================

const grid = document.getElementById("storeGrid");
const searchInput = document.getElementById("searchInput");
const resultPill = document.getElementById("resultPill");
const heroStoreCount = document.getElementById("heroStoreCount");
const emptyState = document.getElementById("emptyState");
const brandSelect = document.getElementById("brandSelect");

// Helpers
function initials(name) {
  return name.substring(0, 2).toUpperCase();
}

// Render Stores (Using Clearbit API for high quality logos)
function renderStores(storeList) {
  grid.innerHTML = "";
  
  storeList.forEach(store => {
    const card = document.createElement("div");
    card.className = "store-card";
    
    // Clearbit Logo API
    const logoUrl = `https://logo.clearbit.com/${store.domain}?size=100`;

    card.innerHTML = `
      <div class="store-logo-frame">
        <img class="store-logo" src="${logoUrl}" alt="${store.name}" loading="lazy" onerror="this.outerHTML='<div class=\\'store-logo-fallback\\'>${initials(store.name)}</div>'">
      </div>
      <h3 class="store-name">${store.name}</h3>
      <p class="store-meta">${store.description}</p>
      <button type="button" class="shop-button">Shop Now</button>
    `;

    // Click event for the whole card
    card.addEventListener("click", () => {
      window.open(store.link || "#", "_blank");
      
      // Auto-select brand in dropdown and open form
      const matchingOption = [...brandSelect.options].find(opt => opt.value === store.name);
      if (matchingOption) brandSelect.value = matchingOption.value;
      
      openModal("formModal");
    });

    grid.appendChild(card);
  });

  const count = storeList.length;
  if(resultPill) resultPill.textContent = `${count} brands`;
  if(heroStoreCount) heroStoreCount.textContent = count;
  if(emptyState) emptyState.hidden = count !== 0;
}

// Search Filter
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = stores.filter(store => 
    store.name.toLowerCase().includes(query) || 
    store.description.toLowerCase().includes(query)
  );
  renderStores(filtered);
});

// Populate Dropdown
stores.forEach(store => {
  const option = document.createElement("option");
  option.value = store.name;
  option.textContent = store.name;
  brandSelect.appendChild(option);
});

// Modal Logic
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.hidden = false;
    document.body.classList.add("modal-open");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }
}

// Attach Close Events
document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});

// Click outside to close
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.hidden = true;
      document.body.classList.remove("modal-open");
    }
  });
});

// Trigger Modals
document.getElementById("headerOfferBtn").addEventListener("click", () => openModal("formModal"));
document.querySelectorAll("[data-info-modal]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.infoModal));
});

// Welcome Popup Logic
window.addEventListener("load", () => {
  if (localStorage.getItem("cheapster_welcome_seen") !== "1") {
    setTimeout(() => openModal("welcomeModal"), 800);
  }
});
document.getElementById("continueBtn").addEventListener("click", () => {
  localStorage.setItem("cheapster_welcome_seen", "1");
  closeModal("welcomeModal");
});

// Form Submission (Giveaway)
document.getElementById("rewardForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // Webhook Fetch API goes here later
  document.getElementById("rewardForm").hidden = true;
  document.getElementById("successView").hidden = false;
});

// Contact Form Submission (WhatsApp Redirect)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const issue = document.getElementById("contactIssueText").value;
  const message = document.getElementById("contactMessage").value;
  
  const text = encodeURIComponent(`Hi Cheapster Support,\nMy Name: ${name}\nIssue: ${issue}\n\nMessage:\n${message}`);
  // Replace 919999999999 with your actual support number
  window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
});

// Initialize
renderStores(stores);
if(document.getElementById("currentYear")) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}
