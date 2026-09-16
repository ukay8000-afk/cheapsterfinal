// All 6 Stores Included
const stores = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", link: "#" },
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg", link: "#" },
    { name: "Myntra", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png", link: "#" },
    { name: "Ajio", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/AJIO_Logo.svg/2560px-AJIO_Logo.svg.png", link: "#" },
    { name: "Nykaa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Nykaa_Logo.svg/2560px-Nykaa_Logo.svg.png", link: "#" },
    { name: "Croma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Croma_Logo.svg/2560px-Croma_Logo.svg.png", link: "#" }
];

const grid = document.getElementById('storeGrid');

function renderStores(filterText = '') {
    grid.innerHTML = '';
    const filtered = stores.filter(s => s.name.toLowerCase().includes(filterText.toLowerCase()));
    
    filtered.forEach(store => {
        grid.innerHTML += `
            <div class="store-card">
                <div class="store-logo-wrapper"><img src="${store.logo}" alt="${store.name}"></div>
                <div style="margin-bottom:12px;font-size:14px;font-weight:600;">${store.name}</div>
                <button class="white-btn full-width shop-btn" style="margin-top:0" data-link="${store.link}">Shop Now</button>
            </div>`;
    });

    // Re-attach listeners for new grid items
    document.querySelectorAll('.shop-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const link = e.target.getAttribute('data-link');
            window.open(link, '_blank');
            openModal('formModal');
        });
    });
}
renderStores();

// Search Filter
document.getElementById('searchInput').addEventListener('input', (e) => renderStores(e.target.value));

// Modal Controller Logic
const openModal = (id) => document.getElementById(id).classList.add('active');
const closeModal = (id) => document.getElementById(id).classList.remove('active');

// Close on X or Outside Click
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => e.target.closest('.modal-overlay').classList.remove('active'));
});

// Auto-Popup First Visit Logic
window.addEventListener('load', () => {
    if (!localStorage.getItem('cheapster_visited')) {
        setTimeout(() => openModal('welcomeModal'), 600);
    }
});

document.getElementById('continueBtn').addEventListener('click', () => {
    localStorage.setItem('cheapster_visited', 'true');
    closeModal('welcomeModal');
});

// Header & Navigation Links
document.getElementById('headerOfferBtn').addEventListener('click', () => openModal('formModal'));
document.getElementById('linkOfferDetails').addEventListener('click', (e) => { e.preventDefault(); openModal('detailsModal'); });
document.getElementById('linkPayout').addEventListener('click', (e) => { e.preventDefault(); openModal('policyModal'); });
document.getElementById('linkAbout').addEventListener('click', (e) => { e.preventDefault(); openModal('aboutModal'); });
document.getElementById('linkTerms').addEventListener('click', (e) => { e.preventDefault(); openModal('termsModal'); });
document.getElementById('linkContact').addEventListener('click', (e) => { e.preventDefault(); openModal('contactModal'); });
document.getElementById('linkContactTop').addEventListener('click', (e) => { e.preventDefault(); openModal('contactModal'); });

// Details Modal -> Open Form
document.getElementById('openFormFromDetails').addEventListener('click', () => {
    closeModal('detailsModal');
    setTimeout(() => openModal('formModal'), 300);
});

// Contact Form -> WhatsApp
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const issue = document.getElementById('contactIssue').value;
    const text = encodeURIComponent(`Hi Cheapster Support,\nMy Name: ${name}\nIssue: ${issue}`);
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
});

// Reward Form Submit
document.getElementById('rewardForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Entry submitted successfully! If selected, we will contact you on WhatsApp.");
    closeModal('formModal');
    e.target.reset();
});

// Auth Placeholder
document.getElementById('authBtn').addEventListener('click', () => {
    alert("Google Authentication integration pending.");
});
