

    // Cookie banner
document.addEventListener("DOMContentLoaded", function() {
        if (!localStorage.getItem("cookieConsent")) {
            const banner = document.getElementById("cookie-banner");
            // Odstraníme hidden a po chvilce vyjedeme nahoru (animace)
            banner.classList.remove("hidden");
            setTimeout(() => {
                banner.classList.remove("translate-y-full");
            }, 100);
        }
    });

    // Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    
    if (menu.classList.contains('max-h-0')) {
        // OTEVŘÍT:
        menu.classList.remove('max-h-0', 'opacity-0');
        menu.classList.add('max-h-[500px]', 'opacity-100');
    } else {
        // ZAVŘÍT:
        menu.classList.remove('max-h-[500px]', 'opacity-100');

        menu.classList.add('max-h-0', 'opacity-0');
    }
}
    //Cookkie banner
function acceptCookies() {
        localStorage.setItem("cookieConsent", "true");
        
        const banner = document.getElementById("cookie-banner");
        banner.classList.add("translate-y-full");
        setTimeout(() => {
            banner.classList.add("hidden");
        }, 500);
}

    // Modal open
function openModal(e) {
        if(e) e.preventDefault(); 
        const modal = document.getElementById('gdpr-modal');
        modal.classList.remove('hidden');

        document.body.style.overflow = 'hidden';
}

    // Modal close
function closeModal() {
        const modal = document.getElementById('gdpr-modal');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
}

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });


function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('hidden');
    // Volitelné: Automaticky zavřít po 5 sekundách
    setTimeout(closeSuccessModal, 5000);
}

function closeSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('hidden');
}