// 85+ GEN-Z & PREMIUM BRANDS
const stores = [
  { name: "Amazon", domain: "amazon.in", description: "Everything marketplace", link: "#" },
  { name: "Flipkart", domain: "flipkart.com", description: "Shopping marketplace", link: "#" },
  { name: "Myntra", domain: "myntra.com", description: "Fashion & lifestyle", link: "#" },
  { name: "AJIO", domain: "ajio.com", description: "Fashion destination", link: "#" },
  { name: "Meesho", domain: "meesho.com", description: "Value shopping", link: "#" },
  { name: "Nike", domain: "nike.com", description: "Sports & streetwear", link: "#" },
  { name: "Puma", domain: "puma.com", description: "Athletic wear", link: "#" },
  { name: "Snitch", domain: "snitch.co.in", description: "Men's fashion", link: "#" },
  { name: "Nykaa", domain: "nykaa.com", description: "Beauty & cosmetics", link: "#" },
  { name: "Blinkit", domain: "blinkit.com", description: "10-min delivery", link: "#" },
  { name: "Zepto", domain: "zeptonow.com", description: "Quick commerce", link: "#" },
  { name: "Swiggy", domain: "swiggy.com", description: "Food & Instamart", link: "#" },
  { name: "Croma", domain: "croma.com", description: "Electronics", link: "#" },
  { name: "boAt", domain: "boat-lifestyle.com", description: "Audio & wearables", link: "#" },
  { name: "Plix", domain: "plixlife.com", description: "Plant-based nutrition", link: "#" },
  { name: "Giva", domain: "giva.co", description: "Silver jewellery", link: "#" },
  { name: "MakeMyTrip", domain: "makemytrip.com", description: "Flights & hotels", link: "#" }
]; // Add rest of the 85 from our previous list as needed

const grid = document.getElementById("storeGrid");
const searchInput = document.getElementById("searchInput");
const resultPill = document.getElementById("resultPill");
const heroStoreCount = document.getElementById("heroStoreCount");
const brandSelect = document.getElementById("brandSelect");

// Render Stores (Using Clearbit API for Logos)
function renderStores(storeList) {
  grid.innerHTML = "";
  storeList.forEach(store => {
    const card = document.createElement("div");
    card.className = "store-card";
    const logoUrl = `https://logo.clearbit.com/${store.domain}?size=100`;

    card.innerHTML = `
      <div class="store-logo-frame">
        <img class="store-logo" src="${logoUrl}" alt="${store.name}" loading="lazy" onerror="this.style.display='none'">
      </div>
      <h3 class="store-name">${store.name}</h3>
      <p class="store-meta">${store.description}</p>
      <button type="button" class="shop-button">Shop Now</button>
    `;

    card.addEventListener("click", () => {
      window.open(store.link || "#", "_blank");
      const matchingOption = [...brandSelect.options].find(opt => opt.value === store.name);
      if (matchingOption) brandSelect.value = matchingOption.value;
      openModal("formModal");
    });
    grid.appendChild(card);
  });

  const count = storeList.length;
  if(resultPill) resultPill.textContent = `${count} brands`;
  if(heroStoreCount) heroStoreCount.textContent = count;
}

// Search Filter
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = stores.filter(store => 
    store.name.toLowerCase().includes(query) || store.description.toLowerCase().includes(query)
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
  if (modal) { modal.hidden = false; document.body.classList.add("modal-open"); }
}
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) { modal.hidden = true; document.body.classList.remove("modal-open"); }
}
document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
});
document.querySelectorAll("[data-info-modal]").forEach(btn => {
  btn.addEventListener("click", () => openModal(btn.dataset.infoModal));
});
document.getElementById("headerOfferBtn").addEventListener("click", () => openModal("formModal"));

// Welcome Popup
window.addEventListener("load", () => {
  if (!localStorage.getItem("cheapster_v2_seen")) {
    setTimeout(() => openModal("welcomeModal"), 800);
  }
});
document.getElementById("continueBtn").addEventListener("click", () => {
  localStorage.setItem("cheapster_v2_seen", "1");
  closeModal("welcomeModal");
});

// Form Submits
document.getElementById("rewardForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("rewardForm").hidden = true;
  document.getElementById("successView").hidden = false;
});

renderStores(stores);
