window.onload = function() {

    // --- 1. Typed.js Initialization (Typing Effect) ---
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        new Typed('.typing-text', {
            strings: [
                'Software Developer', 
                'Web Designer', 
                'UI/UX Designer',
                'Freelancer',
                'Data Science Student',
                'Graphic Designer'
            ],
            typeSpeed: 90,   
            backSpeed: 50,    
            backDelay: 1500,  
            loop: true        
        });
    }


    // --- 2. Navbar Hide on Scroll Down / Show on Scroll Up ---
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('nav-hidden');
            } else {
                header.classList.remove('nav-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }


    // --- 3. Scroll Reveal Animation Setup ---
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');

        reveals.forEach((element) => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 


    // --- 4. Glowing Cursor Follower Effect ---
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
        window.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }


    // --- 5. 3D Card Tilt Effect on Hover ---
    const cards = document.querySelectorAll('.work-card, .a-card, .services-card, .skills-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -12; 
            const rotateY = ((x - centerX) / centerX) * 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            card.style.transition = 'transform 0.1s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
            card.style.transition = 'transform 0.5s ease';
        });
    });


    // --- 6. Hero Section Mouse Particle Effect (Canvas) ---
    const canvas = document.getElementById('mouseCanvas');
    const heroSection = document.querySelector('.hero-section');

    if (canvas && heroSection) {
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = heroSection.offsetWidth;
            canvas.height = heroSection.offsetHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let particlesArray = [];
        let mouse = { x: null, y: null };

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 6 + 2; 
                this.speedX = Math.random() * 2 - 1; 
                this.speedY = Math.random() * 2 - 1;
                this.color = Math.random() > 0.5 ? 'rgba(0, 255, 234, ' : 'rgba(255, 255, 255, ';
                this.alpha = 1; 
                this.decay = Math.random() * 0.015 + 0.01; 
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.alpha -= this.decay; 
                if (this.size > 0.2) this.size -= 0.05; 
            }

            draw() {
                ctx.fillStyle = this.color + this.alpha + ')';
                ctx.shadowBlur = 10; 
                ctx.shadowColor = '#00ffea';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;

            for (let i = 0; i < 2; i++) {
                particlesArray.push(new Particle(mouse.x, mouse.y));
            }
        });

        function handleParticles() {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();

                if (particlesArray[i].alpha <= 0 || particlesArray[i].size <= 0.2) {
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            requestAnimationFrame(animate);
        }
        animate();
    }

}; // window.onload End