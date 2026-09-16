// =========================================================
// FULL 85+ GEN-Z & PREMIUM BRANDS DIRECTORY WITH DIRECT LOGOS
// =========================================================

const stores = [
  // FASHION & STREETWEAR
  { name: "Amazon", domain: "amazon.in", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", description: "Everything marketplace", link: "#" },
  { name: "Flipkart", domain: "flipkart.com", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg", description: "Shopping marketplace", link: "#" },
  { name: "Myntra", domain: "myntra.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png", description: "Fashion & lifestyle", link: "#" },
  { name: "AJIO", domain: "ajio.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AJIO_Logo.svg/2560px-AJIO_Logo.svg.png", description: "Fashion destination", link: "#" },
  { name: "Tata CLiQ", domain: "tatacliq.com", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Tata_CLiQ_Logo.svg", description: "Multi-category retail", link: "#" },
  { name: "Meesho", domain: "meesho.com", logo: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1491901328/ubc2vuzr4q3qvxzn8s6z.png", description: "Value shopping", link: "#" },
  { name: "Nike", domain: "nike.com", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", description: "Sports & streetwear", link: "#" },
  { name: "Puma", domain: "puma.com", logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/Puma_Logo.svg", description: "Athletic wear", link: "#" },
  { name: "Adidas", domain: "adidas.co.in", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", description: "Sports & fashion", link: "#" },
  { name: "Snitch", domain: "snitch.co.in", logo: "https://www.snitch.co.in/cdn/shop/files/SNITCH_LOGO_NEW_200x.png?v=1614002621", description: "Men's fashion", link: "#" },
  { name: "The Souled Store", domain: "thesouledstore.com", logo: "https://images.thesouledstore.com/public/the-souled-store/logo.png", description: "Pop culture merch", link: "#" },
  { name: "Bewakoof", domain: "bewakoof.com", logo: "https://images.bewakoof.com/web/ic-logo-black-footer.svg", description: "Quirky fashion", link: "#" },
  { name: "Urbanic", domain: "urbanic.com", logo: "https://seeklogo.com/images/U/urbanic-logo-2785B048EE-seeklogo.com.png", description: "Gen-Z women's fashion", link: "#" },
  { name: "Beyoung", domain: "beyoung.in", logo: "https://www.beyoung.in/api/catalog/beyoung-logo-white.png", description: "Everyday fashion", link: "#" },
  { name: "XYXX", domain: "xyxxcrew.com", logo: "https://xyxxcrew.com/cdn/shop/files/XYXX_Logo_Black_200x.png?v=1686733221", description: "Men's innerwear", link: "#" },

  // BEAUTY & GROOMING
  { name: "Nykaa", domain: "nykaa.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Nykaa_Logo.svg/2560px-Nykaa_Logo.svg.png", description: "Beauty & cosmetics", link: "#" },
  { name: "Purplle", domain: "purplle.com", logo: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1491823023/wz8hxtn5uzg01rxhhz3v.png", description: "Beauty shopping", link: "#" },
  { name: "MyGlamm", domain: "myglamm.com", logo: "https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.png", description: "Makeup & beauty", link: "#" },
  { name: "Mamaearth", domain: "mamaearth.in", logo: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/q8s91n8m5e5v7q281x2g", description: "Toxin-free care", link: "#" },
  { name: "Minimalist", domain: "beminimalist.co", logo: "https://beminimalist.co/cdn/shop/files/Minimalist-Logo_200x.png?v=1614264287", description: "Science skincare", link: "#" },
  { name: "The Derma Co", domain: "thedermaco.com", logo: "https://thedermaco.com/media/logo/default/Group_586.png", description: "Dermatological care", link: "#" },
  { name: "Dot & Key", domain: "dotandkey.com", logo: "https://www.dotandkey.com/cdn/shop/files/Dot_Key_Logo_200x.png?v=1642502844", description: "Skincare", link: "#" },
  { name: "Plum", domain: "plumgoodness.com", logo: "https://plumgoodness.com/cdn/shop/files/Plum_Logo_200x.png?v=1658826543", description: "Vegan beauty", link: "#" },
  { name: "Sugar Cosmetics", domain: "sugarcosmetics.com", logo: "https://in.sugarcosmetics.com/cdn/shop/files/sugar_logo_new_200x.png?v=1615873730", description: "Makeup brand", link: "#" },
  { name: "Pilgrim", domain: "discoverpilgrim.com", logo: "https://discoverpilgrim.com/cdn/shop/files/Pilgrim_logo_200x.png?v=1656578051", description: "Global beauty secrets", link: "#" },
  { name: "Foxtale", domain: "foxtale.in", logo: "https://foxtale.in/cdn/shop/files/Foxtale_Logo_200x.png?v=1661858509", description: "Skincare essentials", link: "#" },
  { name: "MCaffeine", domain: "mcaffeine.com", logo: "https://mcaffeine.com/cdn/shop/files/mcaffeine-logo_200x.png?v=1655800049", description: "Caffeinated care", link: "#" },
  { name: "Aqualogica", domain: "aqualogica.in", logo: "https://aqualogica.in/cdn/shop/files/Aqualogica_Logo_200x.png?v=1646808795", description: "Hydration skincare", link: "#" },
  { name: "WOW Skin Science", domain: "buywow.in", logo: "https://buywow.in/cdn/shop/files/WOW_Logo_200x.png?v=1658396001", description: "Natural care", link: "#" },

  // HEALTH & WELLNESS
  { name: "Plix", domain: "plixlife.com", logo: "https://plixlife.com/cdn/shop/files/Plix_Logo_200x.png?v=1672304895", description: "Plant nutrition", link: "#" },
  { name: "MuscleBlaze", domain: "muscleblaze.com", logo: "https://www.muscleblaze.com/images/mb-logo.svg", description: "Sports nutrition", link: "#" },
  { name: "Myprotein", domain: "myprotein.co.in", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Myprotein_logo.svg", description: "Fitness supplements", link: "#" },
  { name: "Kapiva", domain: "kapiva.in", logo: "https://kapiva.in/cdn/shop/files/Kapiva_Logo_200x.png?v=1670932599", description: "Ayurvedic nutrition", link: "#" },
  { name: "HealthKart", domain: "healthkart.com", logo: "https://static.healthkart.com/images/brand_logo/hk_logo.svg", description: "Health supplements", link: "#" },

  // QUICK COMMERCE & FOOD
  { name: "Blinkit", domain: "blinkit.com", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Blinkit_logo.svg/1200px-Blinkit_logo.svg.png", description: "10-min delivery", link: "#" },
  { name: "Swiggy", domain: "swiggy.com", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg", description: "Food & Instamart", link: "#" },
  { name: "Zomato", domain: "zomato.com", logo: "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c584612ad11f11646164215.png", description: "Food delivery", link: "#" },
  { name: "Zepto", domain: "zeptonow.com", logo: "https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/du4b815m297v53p7k35q", description: "Quick commerce", link: "#" },
  { name: "BigBasket", domain: "bigbasket.com", logo: "https://www.bigbasket.com/media/uploads/bb-logo.svg", description: "Online grocery", link: "#" },
  { name: "EatSure", domain: "eatsure.com", logo: "https://www.eatsure.com/images/eatsure-logo.svg", description: "Food delivery", link: "#" },
  { name: "Domino's", domain: "dominos.co.in", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg", description: "Pizza delivery", link: "#" },
  { name: "Pizza Hut", domain: "pizzahut.co.in", logo: "https://upload.wikimedia.org/wikipedia/sco/d/d2/Pizza_Hut_logo.svg", description: "Pizza delivery", link: "#" },

  // ELECTRONICS & TECH
  { name: "Croma", domain: "croma.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Croma_Logo.svg/2560px-Croma_Logo.svg.png", description: "Electronics", link: "#" },
  { name: "Reliance Digital", domain: "reliancedigital.in", logo: "https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg", description: "Tech retail", link: "#" },
  { name: "Samsung", domain: "samsung.com", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", description: "Mobiles & electronics", link: "#" },
  { name: "OnePlus", domain: "oneplus.in", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/OnePlus_logo.svg", description: "Smartphones", link: "#" },
  { name: "boAt", domain: "boat-lifestyle.com", logo: "https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_300x.png?v=1684351743", description: "Audio & wearables", link: "#" },
  { name: "Noise", domain: "gonoise.com", logo: "https://www.gonoise.com/cdn/shop/files/Noise_logo_200x.png?v=1661845426", description: "Smartwatches", link: "#" },
  { name: "Nothing", domain: "nothing.tech", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Nothing_logo.svg", description: "Innovative tech", link: "#" },
  { name: "JBL", domain: "jbl.com", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/JBL_logo.svg", description: "Premium audio", link: "#" },
  { name: "Apple", domain: "apple.com", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", description: "Premium devices", link: "#" },

  // ACCESSORIES
  { name: "Lenskart", domain: "lenskart.com", logo: "https://static1.lenskart.com/media/desktop/img/site-images/logo_lenskart.svg", description: "Eyewear", link: "#" },
  { name: "Giva", domain: "giva.co", logo: "https://www.giva.co/cdn/shop/files/GIVA_Logo_200x.png?v=1653033502", description: "Silver jewellery", link: "#" },
  { name: "Fastrack", domain: "fastrack.in", logo: "https://www.fastrack.in/on/demandware.static/-/TheNorthFace/default/dwb5ea7f2f/images/fastrack-logo.svg", description: "Youth accessories", link: "#" },
  { name: "Tanishq", domain: "tanishq.co.in", logo: "https://www.tanishq.co.in/on/demandware.static/Sites-Tanishq-Site/-/default/dw06d4e135/images/tanishq-logo.svg", description: "Fine jewellery", link: "#" },

  // TRAVEL
  { name: "MakeMyTrip", domain: "makemytrip.com", logo: "https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogo(white).png", description: "Flights & hotels", link: "#" },
  { name: "Goibibo", domain: "goibibo.com", logo: "https://gos3.ibcdn.com/gocmt-ui/images/i18n/goibibo-logo.svg", description: "Travel bookings", link: "#" },
  { name: "Agoda", domain: "agoda.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Agoda_logo.svg", description: "Hotels & stays", link: "#" },
  { name: "Cleartrip", domain: "cleartrip.com", logo: "https://www.cleartrip.com/images/ct-logo.svg", description: "Flights & travel", link: "#" },
  { name: "Oyo Rooms", domain: "oyorooms.com", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_%28logo%29.png", description: "Budget stays", link: "#" },
  { name: "Booking.com", domain: "booking.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg", description: "Global travel", link: "#" },
  { name: "RedBus", domain: "redbus.in", logo: "https://s3.rdbuz.com/Images/rdc/rdc-redbus-logo.svg", description: "Bus bookings", link: "#" },

  // PHARMACY
  { name: "Tata 1mg", domain: "1mg.com", logo: "https://onemg.gumlet.io/marketing/1mg_logo_full.png", description: "Online pharmacy", link: "#" },
  { name: "Apollo 24|7", domain: "apollo247.com", logo: "https://images.apollo247.in/images/ic-apollo-247-logo.svg", description: "Healthcare", link: "#" },
  { name: "Netmeds", domain: "netmeds.com", logo: "https://www.netmeds.com/assets/glabsp/images/netmeds-web-logo.svg", description: "Medicine delivery", link: "#" },

  // FINANCE & CARDS
  { name: "Upstox", domain: "upstox.com", logo: "https://assets.upstox.com/content/assets/images/upstox-logo.svg", description: "Trading app", link: "#" },
  { name: "Groww", domain: "groww.in", logo: "https://groww.in/groww-logo-270.png", description: "Investing platform", link: "#" },
  { name: "Angel One", domain: "angelone.in", logo: "https://www.angelone.in/assets/images/angelone-logo.svg", description: "Stock broking", link: "#" },
  { name: "BankBazaar", domain: "bankbazaar.com", logo: "https://www.bankbazaar.com/images/bb-logo.svg", description: "Financial marketplace", link: "#" },
  { name: "SBI Credit Cards", domain: "sbicard.com", logo: "https://www.sbicard.com/live/home/banner-images/sbi-card-logo.svg", description: "Credit cards", link: "#" },

  // SOFTWARE & DIGITAL
  { name: "Hostinger", domain: "hostinger.in", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Hostinger_logo.svg", description: "Web hosting", link: "#" },
  { name: "Bluehost", domain: "bluehost.in", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Bluehost_logo.svg", description: "Hosting services", link: "#" },
  { name: "Shopify", domain: "shopify.in", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", description: "E-commerce platform", link: "#" },
  { name: "Canva", domain: "canva.com", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg", description: "Design tool", link: "#" },
  { name: "Grammarly", domain: "grammarly.com", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Grammarly_logo.svg", description: "Writing assistant", link: "#" },
  { name: "ChatGPT", domain: "openai.com", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", description: "AI tools", link: "#" },
  { name: "Adobe", domain: "adobe.com", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Logo_Square.svg", description: "Creative software", link: "#" }
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

// Render Stores (Using direct logo links with Clearbit/Fallback safety)
function renderStores(storeList) {
  grid.innerHTML = "";
  
  storeList.forEach(store => {
    const card = document.createElement("div");
    card.className = "store-card";
    
    // Fallback logic: Uses direct logo link, or Clearbit, or initials
    const logoSrc = store.logo || `https://logo.clearbit.com/${store.domain}?size=100`;

    card.innerHTML = `
      <div class="store-logo-frame">
        <img class="store-logo" src="${logoSrc}" alt="${store.name}" loading="lazy" onerror="this.outerHTML='<div class=\\'store-logo-fallback\\'>${initials(store.name)}</div>'">
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
  window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
});

// Initialize
renderStores(stores);
if(document.getElementById("currentYear")) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}
