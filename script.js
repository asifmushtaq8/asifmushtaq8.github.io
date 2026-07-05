const projects = [
  {
    title: "I am Naughty Gorilla",
    description: "FPS simulator adventure game with 100K+ downloads on Play Store.",
    image: "./assets/gorilla.png",
    link: "https://play.google.com/store/apps/details?id=com.rg.iamgorilla.naughty.prank.simulator&hl=en",
    category: "android",
    tags: ["Unity", "Android", "100K+ Downloads"]
  },
  {
    title: "Sledding Penguin Gang",
    description: "Snow racing adventure where penguins slide down icy hills.",
    image: "./assets/sled surfer.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.tbs.ultimate.sled.surfers.penguins.sledding.game",
    category: "android",
    tags: ["Unity", "Racing", "Android"]
  },
  {
    title: "Save The Pet",
    description: "🐾 Save The all pets — Draw, Protect & Rescue in the Ultimate Pet Rescue Game!",
    image: "./assets/SaveThePet.png",
    link: "https://play.google.com/store/apps/details?id=com.rhg.save.my.pets.brain.puzzle.animal.rescue.game",
    category: "android",
    tags: ["Unity", "Casual", "Android"]
  },
  {
    title: "Car Trade Dealer Game",
    description: "Used car dealer simulator with virtual business tycoon gameplay.",
    image: "./assets/car dealer icon.png",
    link: "https://play.google.com/store/apps/details?id=com.fs.cardealer.jobsimulator.cargame",
    category: "android",
    tags: ["Unity", "Simulator", "Business"]
  },
  {
    title: "Zombie Shooting 3D",
    description: "Addictive zombie shooting FPS adventure game.",
    image: "./assets/zombie game icon.png",
    link: "https://play.google.com/store/apps/details?id=com.gs.zombieshooting.snipershooter.gungame&hl=en",
    category: "android",
    tags: ["Unity", "FPS", "Shooter"]
  },
  {
    title: "Going Nowhere Fast",
    description: "A determined runner trapped on an endless treadmill.",
    image: "./assets/GNF.png",
    link: "https://apps.apple.com/us/app/going-nowhere-fast/id6738996434?uo=2",
    category: "ios",
    tags: ["Unity", "iOS", "Runner"]
  },
  {
    title: "Futchbol",
    description: "Player-name puzzle game developed using Unity and Realtime Database.",
    image: "./assets/futchbol.png",
    link: "https://www.youtube.com/watch?v=_5fhpM1oqV4&ab_channel=AsifMushtaq",
    category: "youtube",
    tags: ["Unity", "RTDB", "Puzzle"]
  },
  {
    title: "Boss Lady Run",
    description: "Girl runner and dress-up game with casual gameplay mechanics.",
    image: "./assets/boss lady icon.PNG",
    link: "https://play.google.com/store/apps/details?id=com.ForbiddenGames.BossLady&hl=en",
    category: "android",
    tags: ["Unity", "Runner", "Casual"]
  },
  {
    title: "Truck Simulator",
    description: "Immersive truck driving and trucking adventure game.",
    image: "./assets/truck sim icon.png",
    link: "https://play.google.com/store/apps/details?id=com.cg.trucksimulatorgames.ultimate.truckdriving",
    category: "android",
    tags: ["Unity", "Simulator", "Driving"]
  },
  {
    title: "Supermarket Simulator",
    description: "A supermarket manager simulation game with addictive store gameplay.",
    image: "./assets/supermarket simulator icon.png",
    link: "https://apkpure.com/supermarket-simulator-3d-games/com.fs.supermarket.store.simulator.cashier.game",
    category: "android",
    tags: ["Unity", "Simulator", "APK"]
  },
  {
    title: "Space Defender",
    description: "Hybrid casual shooting game with space defense mechanics.",
    image: "./assets/space defender icon.png",
    link: "https://play.google.com/store/apps/details?id=com.lq.shootymonsterGP&hl=en",
    category: "android",
    tags: ["Unity", "Shooter", "Hybrid Casual"]
  },
  {
    title: "Prank PhoneCall",
    description: "Prank video call app created from scratch in Unity.",
    image: "./assets/project2.png",
    link: "https://play.google.com/store/apps/details?id=com.fakecall.fakechat.prank.app&hl=en&gl=US",
    category: "android",
    tags: ["Unity", "App", "Android"]
  },
  {
    title: "Race Max",
    description: "Car racing simulator game with different levels and modes.",
    image: "./assets/racemaxx.png",
    link: "https://www.youtube.com/watch?v=NV-6sMkHTtU&ab_channel=AsifMushtaq",
    category: "youtube",
    tags: ["Unity", "Racing", "Demo"]
  },
  {
    title: "Bubble Pop King Clone",
    description: "Bubble Pop King style clone with 500 levels created for a client.",
    image: "./assets/bubblepopicon23.jpg",
    link: "https://play.google.com/store/apps/details?id=com.bubble.shooter.bubble.pop.king.game&hl=en&gl=US",
    category: "android",
    tags: ["Unity", "500 Levels", "Client Work"]
  },
  {
    title: "AR Decor",
    description: "Augmented Reality furniture app for viewing furniture in real-world environments.",
    image: "./assets/project1.png",
    link: "https://www.youtube.com/shorts/bvKDqneYBr0",
    category: "ar",
    tags: ["Unity", "AR", "Furniture"]
  }
];

const header = document.getElementById("siteHeader");
const scrollTopBtn = document.getElementById("scrollTop");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const projectsGrid = document.getElementById("projectsGrid");
const year = document.getElementById("year");
const typingText = document.getElementById("typingText");

year.textContent = new Date().getFullYear();

/* Header and scroll button */
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 80;

  header.classList.toggle("scrolled", isScrolled);
  scrollTopBtn.classList.toggle("show", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* Mobile menu */
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  document.body.classList.toggle("menu-open");

  const icon = menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    document.body.classList.remove("menu-open");

    const icon = menuToggle.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

/* Typing animation */
const typingWords = [
  "Unity Games",
  "Roblox Experiences",
  "AR/VR Apps",
  "Mobile Games",
  "Monetization Systems"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = typingWords[wordIndex];

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 55 : 95;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1100;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

/* Project cards */
function renderProjects(filter = "all") {
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
      <article class="project-card tilt-card reveal" data-category="${project.category}">
        <div class="project-inner">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title} game icon" loading="lazy">
          </div>

          <h3>${project.title}</h3>
          <p>${project.description}</p>

          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>

          <a class="btn primary-btn project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
            View Project
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </article>
    `
    )
    .join("");

  addTiltEffect();
  observeRevealElements();
}

renderProjects();

/* Project filters */
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

/* 3D tilt effect */
function addTiltEffect() {
  const tiltCards = document.querySelectorAll(".tilt-card");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

addTiltEffect();

/* Reveal animation */
function observeRevealElements() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

observeRevealElements();

/* Contact form to WhatsApp */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const whatsappMessage = `Hi Asif,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;

  window.open(`https://api.whatsapp.com/send?phone=923051234913&text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
});



/* Lightweight particles */
const canvas = document.getElementById("particlesCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  const count = Math.min(90, Math.floor(window.innerWidth / 18));

  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 0.7,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(34, 211, 238, 0.75)";
    ctx.fill();

    for (let j = index + 1; j < particles.length; j++) {
      const other = particles[j];
      const dx = particle.x - other.x;
      const dy = particle.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 130) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(other.x, other.y);
        ctx.strokeStyle = `rgba(30, 144, 255, ${1 - distance / 130})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(drawParticles);
}

resizeCanvas();
createParticles();
drawParticles();

window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});
