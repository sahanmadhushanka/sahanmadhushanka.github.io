window.onload = function() {
    // 1. Typed.js Initialization
    if (document.querySelector('.typing-text')) {
        var typed = new Typed('.typing-text', {
            strings: [
                'Software Developer', 
                'Web Designer', 
                'UI/UX Designer',
                'Freelancer',
                'Data Science Undergraduate Student',
                'Graphic Designer'
            ],
            typeSpeed: 100,  
            backSpeed: 60,   
            loop: true       
        });
    }

    // 2. Mouse Canvas Particles Effect
    const canvas = document.getElementById('mouseCanvas');
    const heroSection = document.querySelector('.hero-section'); // .banner වෙනුවට .hero-section යොදා ඇත

    // Canvas සහ Hero Section එක තියෙනවා නම් පමණක් Particle Effect එක Run වේ
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
                this.size = Math.random() * 8 + 2; 
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = Math.random() > 0.5 ? 'rgba(0, 255, 255, ' : 'rgba(255, 255, 255, ';
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
                ctx.shadowBlur = 12; 
                ctx.shadowColor = '#00ffea';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Mouse Move Event Listener
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;

            for (let i = 0; i < 3; i++) {
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
};