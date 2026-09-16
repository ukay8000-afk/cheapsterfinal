// Hardcoded Premium Store Data
const stores = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", link: "#" },
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg", link: "#" },
    { name: "Myntra", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png", link: "#" },
    { name: "Ajio", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AJIO_Logo.svg/2560px-AJIO_Logo.svg.png", link: "#" },
    { name: "Nykaa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Nykaa_Logo.svg/2560px-Nykaa_Logo.svg.png", link: "#" },
    { name: "Croma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Croma_Logo.svg/2560px-Croma_Logo.svg.png", link: "#" }
];

// 1. Render Store Grid
const grid = document.getElementById('storeGrid');
function renderStores(filterText = '') {
    grid.innerHTML = '';
    const filtered = stores.filter(s => s.name.toLowerCase().includes(filterText.toLowerCase()));
    
    filtered.forEach(store => {
        const card = document.createElement('div');
        card.className = 'store-card glass-card';
        card.innerHTML = `
            <div class="store-logo-wrapper">
                <img src="${store.logo}" alt="${store.name}">
            </div>
            <div class="store-name">${store.name}</div>
            <button class="outline-btn full-width shop-btn" data-link="${store.link}">Shop Now</button>
        `;
        grid.appendChild(card);
    });

    // Attach Event Listeners to New Buttons
    document.querySelectorAll('.shop-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const link = e.target.getAttribute('data-link');
            window.open(link, '_blank'); // Open brand affiliate link in new tab
            openModal('formModal');      // Pop up the claim form in the current tab
        });
    });
}
renderStores();

// 2. Search Functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    renderStores(e.target.value);
});

// 3. Modal Controller Logic
const openModal = (id) => document.getElementById(id).classList.add('active');
const closeModal = (id) => document.getElementById(id).classList.remove('active');

// Open Modals
document.getElementById('headerOfferBtn').addEventListener('click', () => openModal('formModal'));
document.getElementById('linkContest').addEventListener('click', (e) => { e.preventDefault(); openModal('detailsModal'); });
document.getElementById('linkPayout').addEventListener('click', (e) => { e.preventDefault(); openModal('policyModal'); });
document.getElementById('openFormFromDetails').addEventListener('click', () => { 
    closeModal('detailsModal'); 
    setTimeout(() => openModal('formModal'), 300); // Smooth transition
});

// Close Modals on 'X' or outside click
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal-overlay').classList.remove('active');
    });
});

// 4. Auto-Popup First Visit Logic (Using LocalStorage)
window.addEventListener('load', () => {
    if (!localStorage.getItem('cheapster_first_visit')) {
        setTimeout(() => openModal('welcomeModal'), 800); // Slight delay for premium feel
    }
});

// Continue Button on Welcome Popup
document.getElementById('continueBtn').addEventListener('click', () => {
    localStorage.setItem('cheapster_first_visit', 'true');
    closeModal('welcomeModal');
});

// 5. Form Submit Handling (To be connected to Google Sheets Webhook)
document.getElementById('rewardForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Placeholder for fetch() webhook logic
    // const GOOGLE_WEBHOOK_URL = "YOUR_APPS_SCRIPT_URL_HERE";
    
    alert("Entry submitted successfully! If selected, we will contact you on WhatsApp to verify your exact Order ID.");
    closeModal('formModal');
    e.target.reset();
});

// 6. Firebase Auth Placeholder (For future Google Login integration)
document.getElementById('authBtn').addEventListener('click', () => {
    alert("Google Authentication will be initialized here.");
});
