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

/* ------------------------------------------------------------------
   PERFORMANCE MODE
   Detects low-end hardware / data-saver mode / reduced-motion so the
   hero's canvas particles, floating orbs, and 3D tilt don't tank the
   frame rate on cheap or older phones. Adds `.reduce-fx` to <body>,
   which style.css uses to hide the heaviest decorative animations.
------------------------------------------------------------------- */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const isLowEndDevice =
  (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
  (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
  (navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || "")));

const reduceFX = prefersReducedMotion || isLowEndDevice;

if (reduceFX) {
  document.body.classList.add("reduce-fx");
}

/* Header and scroll button (throttled to one update per animation frame) */
let scrollTicking = false;

function updateOnScroll() {
  const scrollY = window.scrollY;

  header.classList.toggle("scrolled", scrollY > 80);
  scrollTopBtn.classList.toggle("show", scrollY > 500);

  scrollTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollTicking) {
      requestAnimationFrame(updateOnScroll);
      scrollTicking = true;
    }
  },
  { passive: true }
);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
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

if (prefersReducedMotion) {
  // Skip the letter-by-letter interval entirely, just show one word
  typingText.textContent = typingWords[0];
} else {
  typeEffect();
}

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
            <img src="${project.image}" alt="${project.title} game icon" width="132" height="132" loading="lazy" decoding="async">
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

/* 3D tilt effect — skipped on touch devices (no hover anyway) and in
   performance mode, and batched to one style write per frame elsewhere. */
function addTiltEffect() {
  if (!hasFinePointer || reduceFX) return;

  const tiltCards = document.querySelectorAll(".tilt-card");

  tiltCards.forEach((card) => {
    // Avoid attaching duplicate listeners when renderProjects() re-runs
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = "true";

    let pendingEvent = null;
    let rafId = null;

    function applyTilt() {
      const rect = card.getBoundingClientRect();
      const x = pendingEvent.clientX - rect.left;
      const y = pendingEvent.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      rafId = null;
    }

    card.addEventListener(
      "mousemove",
      (event) => {
        pendingEvent = event;
        if (rafId === null) {
          rafId = requestAnimationFrame(applyTilt);
        }
      },
      { passive: true }
    );

    card.addEventListener("mouseleave", () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
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

/* Contact form → emails asifmushtaq435@gmail.com directly via Web3Forms
   (free, no backend needed). Get your own access key at web3forms.com
   and paste it into the hidden "access_key" input in index.html. */
const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("contactSubmitBtn");
const submitIcon = document.getElementById("contactSubmitIcon");
const submitLabel = document.getElementById("contactSubmitLabel");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const accessKey = contactForm.querySelector('[name="access_key"]').value;

  if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
    formStatus.dataset.state = "error";
    formStatus.textContent =
      "Form isn't connected yet — add a free Web3Forms access key in index.html.";
    return;
  }

  // Honeypot: if this hidden checkbox got checked, silently drop the submission
  if (contactForm.querySelector('[name="botcheck"]').checked) {
    return;
  }

  // Fold the visitor's own subject line into the email subject Web3Forms sends
  const userSubject = document.getElementById("subject").value.trim();
  if (userSubject) {
    contactForm.querySelector('[name="subject"]').value = `Portfolio contact: ${userSubject}`;
  }

  submitBtn.disabled = true;
  submitIcon.className = "fa-solid fa-spinner fa-spin";
  submitLabel.textContent = "Sending...";
  formStatus.textContent = "";
  formStatus.removeAttribute("data-state");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(contactForm)
    });

    const result = await response.json();

    if (result.success) {
      formStatus.dataset.state = "success";
      formStatus.textContent = "Message sent! I'll get back to you soon.";
      contactForm.reset();
    } else {
      throw new Error(result.message || "Something went wrong.");
    }
  } catch (error) {
    formStatus.dataset.state = "error";
    formStatus.textContent = "Couldn't send that — please try again or email me directly.";
  } finally {
    submitBtn.disabled = false;
    submitIcon.className = "fa-solid fa-paper-plane";
    submitLabel.textContent = "Send Message";
  }
});



/* Lightweight particles — only runs in the hero and only while it's on
   screen. Frame rate is capped (not left to run flat-out at 60fps+), and a
   watchdog below measures the REAL frame rate the browser is achieving and
   drops into lite mode if it's struggling, regardless of what the device
   heuristics guessed (some machines — e.g. a loaded-down MacBook, or Safari
   with several tabs open — are "capable" on paper but still can't keep up
   with backdrop blur + canvas + a dozen animated elements at once). */
const canvas = document.getElementById("particlesCanvas");
const heroSection = document.getElementById("home");
const liteModeToggle = document.getElementById("liteModeToggle");

function setLiteMode(isLite) {
  document.body.classList.toggle("reduce-fx", isLite);

  if (liteModeToggle) {
    liteModeToggle.setAttribute("aria-pressed", String(isLite));
    liteModeToggle.title = isLite ? "Switch back to full animations" : "Switch to lite mode";
  }

  if (isLite) {
    stopParticles();
  } else if (heroInView && !document.hidden) {
    startParticles();
  }
}

let heroInView = true;
let animationId = null;
let startParticles = () => {};
let stopParticles = () => {};

if (canvas) {
  const ctx = canvas.getContext("2d");
  let particles = [];
  let drawLines = hasFinePointer; // skip the O(n²) link lines on touch/low-power setups
  const connectDistance = 90;
  const targetFrameInterval = 1000 / 45; // capping at ~45fps (vs 60+) cuts baseline work by roughly a quarter
  let lastRenderTime = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    // Trimmed well below the original 90 — this, plus the O(n²) connecting
    // lines running every frame forever, was the single biggest source of
    // hero jank.
    const base = hasFinePointer ? 36 : 22;
    const count = Math.min(base, Math.floor(window.innerWidth / 30));

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.7,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45
    }));
  }

  function renderFrame() {
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

      if (!drawLines) return;

      for (let j = index + 1; j < particles.length; j++) {
        const other = particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectDistance) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(30, 144, 255, ${1 - distance / connectDistance})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });
  }

  function tick(timestamp) {
    // Frame-rate cap: if we're being called faster than the target interval,
    // just reschedule without doing any drawing work
    if (timestamp - lastRenderTime >= targetFrameInterval) {
      lastRenderTime = timestamp;
      renderFrame();
    }

    animationId = requestAnimationFrame(tick);
  }

  startParticles = function () {
    if (document.body.classList.contains("reduce-fx")) return;
    if (animationId === null) {
      animationId = requestAnimationFrame(tick);
    }
  };

  stopParticles = function () {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  };

  resizeCanvas();
  createParticles();

  if (!reduceFX) {
    startParticles();
  }

  // Pause the canvas the moment the hero scrolls out of view — there's no
  // point spending CPU animating something nobody can see.
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        heroInView = entry.isIntersecting;
        if (heroInView && !document.hidden) {
          startParticles();
        } else {
          stopParticles();
        }
      });
    },
    { threshold: 0 }
  );

  if (heroSection) heroObserver.observe(heroSection);

  // Pause on background tabs too
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopParticles();
    } else if (heroInView) {
      startParticles();
    }
  });

  // Debounce resize so dragging a window edge doesn't rebuild the particle
  // array dozens of times a second
  let resizeTimer = null;
  window.addEventListener(
    "resize",
    () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
        createParticles();
      }, 150);
    },
    { passive: true }
  );

  // If the connecting lines alone are enough to push a frame over budget,
  // drop just that part before giving up on particles entirely
  window.__dropConnectingLines = () => {
    drawLines = false;
  };
}

/* Manual override: lets anyone force lite mode on/off regardless of what
   the automatic checks decided (useful if detection guesses wrong for a
   particular browser/machine combination). */
if (liteModeToggle) {
  liteModeToggle.addEventListener("click", () => {
    setLiteMode(!document.body.classList.contains("reduce-fx"));
  });
}

/* ------------------------------------------------------------------
   PERFORMANCE WATCHDOG
   Device-attribute checks (deviceMemory, hardwareConcurrency, etc.) don't
   catch every slow case — a multi-core MacBook can still drop frames from
   backdrop-filter cost, thermal throttling, an external display, or just
   having a dozen other tabs open. This measures the frame rate the page
   is ACTUALLY getting right after load and drops into lite mode if it's
   too low, which catches those cases too.
------------------------------------------------------------------- */
if (!reduceFX) {
  (function watchFrameRate() {
    let frames = 0;
    let windowStart = performance.now();
    let windowsChecked = 0;
    const maxWindows = 3; // sample up to ~6s total, then stop watching

    function sample(now) {
      frames++;
      const elapsed = now - windowStart;

      if (elapsed >= 2000) {
        const fps = (frames * 1000) / elapsed;
        windowsChecked++;

        if (fps < 40) {
          // First response is cheap: drop the O(n²) connecting lines alone
          if (window.__dropConnectingLines) window.__dropConnectingLines();

          // If it's still struggling on a later pass, go all the way to lite mode
          if (windowsChecked > 1) {
            setLiteMode(true);
            return;
          }
        } else if (windowsChecked >= maxWindows) {
          return; // page has proven itself fast enough, stop watching
        }

        frames = 0;
        windowStart = now;
      }

      requestAnimationFrame(sample);
    }

    requestAnimationFrame(sample);
  })();
}
