// ================= MOBILE MENU & AUTO CLOSE =================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItemsList = document.querySelectorAll(".nav-links li a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Change icon between bars and X
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains("active")) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Close menu when a link is clicked
navItemsList.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.querySelector('i').classList.remove('fa-xmark');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ================= ACTIVE NAV LINK ON SCROLL =================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navItemsList.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// ================= SCROLL REVEAL & SKILLS ANIMATION =================
const reveals = document.querySelectorAll(".reveal");
const progressBars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            
            // If the section is "About", trigger progress bars
            if (entry.target.id === "about") {
                progressBars.forEach(bar => {
                    const width = bar.getAttribute("data-width");
                    bar.style.width = width;
                });
            }
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(section => {
    observer.observe(section);
});

// ================= SCROLL TO TOP BUTTON =================
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ================= CONTACT FORM SIMULATION =================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const submitBtn = document.getElementById("submitBtn");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Simulate loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    submitBtn.style.opacity = "0.8";
    submitBtn.disabled = true;

    // Simulate API Call / Delay
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
        
        contactForm.reset();
        
        formMessage.style.color = "#4CAF50"; // Green color
        formMessage.textContent = "Thank you! Your message has been sent successfully.";
        
        // Remove message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = "";
        }, 5000);
        
    }, 2000);
});