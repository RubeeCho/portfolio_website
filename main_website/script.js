// Loading animation
window.addEventListener('load', function () {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1500);
});

// Side bar menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');

// Always show the menu button
mobileMenuBtn.style.display = 'block';

mobileMenuBtn.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    if (window.innerWidth > 768) {
        document.body.classList.toggle('sidebar-open');
    }
});

// Smooth scrolling and active nav
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Close mobile menu (only if sidebar exists)
        if (sidebar) {
            sidebar.classList.remove('open');
        }

        // Update active nav
        navLinks.forEach(nl => nl.classList.remove('active'));
        this.classList.add('active');
    });
});

// Update active nav on scroll
window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Enhanced hover effects for projects
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    project.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Intersection Observer for enhanced animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

/* star background particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});


/*contact section functionality */
document.getElementById('contact-email').addEventListener('click', function () {
    window.open('mailto:rubycho@umd.edu', '_blank');
});

document.getElementById('contact-github').addEventListener('click', function () {
    window.open('https://github.com/RubeeCho', '_blank');
});

document.getElementById('contact-linkedin').addEventListener('click', function () {
    window.open('https://linkedin.com/RubyCho', '_blank');
});

document.getElementById('contact-resume').addEventListener('click', function () {
    window.open('/resume.pdf', '_blank');
});

