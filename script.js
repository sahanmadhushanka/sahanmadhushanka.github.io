window.onload = function() {
    var typed = new Typed('.typing-text', {
        strings: ['Software Developer', 
            'Web Designer', 
            'UI/UX Designer',
            'Freelancer',
            'Data science Ungraduate Student',
            'Graphic Designer'
        ],
        
        typeSpeed: 100,  
        backSpeed: 60,   
        loop: true       
    });
    // const canvas = document.getElementById('mouseCanvas');
    // const ctx = canvas.getContext('2d');
    // const banner = document.querySelector('.banner');

    // function resizeCanvas() {
    //     canvas.width = banner.offsetWidth;
    //     canvas.height = banner.offsetHeight;
    // }
    // resizeCanvas();
    // window.addEventListener('resize', resizeCanvas);

    // let points = [];
    // const maxPoints = 30; 
    // let mouse = { x: null, y: null, active: false };

    // banner.addEventListener('mousemove', (e) => {
    //     const rect = banner.getBoundingClientRect();
    //     mouse.x = e.clientX - rect.left;
    //     mouse.y = e.clientY - rect.top;
    //     mouse.active = true;

    //     points.push({ x: mouse.x, y: mouse.y });
        
    //     if (points.length > maxPoints) {
    //         points.shift();
    //     }
    // });

    // banner.addEventListener('mouseleave', () => {
    //     mouse.active = false;
    // });

    // function animate() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     if (!mouse.active && points.length > 0) {
    //         points.shift();
    //     }

    //     for (let i = 0; i < points.length; i++) {
    //         const pt = points[i];
            
    //         const size = (i / points.length) * 12; 
            
    //         const alpha = i / points.length;
    //         ctx.beginPath();
    //         ctx.arc(pt.x, pt.y, size, 0, Math.PI * 2);
            
    //         ctx.fillStyle = `hsla(${(i * 10) % 360}, 100%, 60%, ${alpha})`;
            
    //         ctx.shadowBlur = 15;
    //         ctx.shadowColor = `hsl(${(i * 10) % 360}, 100%, 60%)`;
            
    //         ctx.fill();
    //     }

    //     requestAnimationFrame(animate);
    // }
    // animate();
    const canvas = document.getElementById('mouseCanvas');
    const ctx = canvas.getContext('2d');
    const banner = document.querySelector('.banner');

    function resizeCanvas() {
        canvas.width = banner.offsetWidth;
        canvas.height = banner.offsetHeight;
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

// mouse effect
    banner.addEventListener('mousemove', (e) => {
        const rect = banner.getBoundingClientRect();
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
};
