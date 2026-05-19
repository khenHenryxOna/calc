  const menuItems = [
    { cat:'filipino', name:'Crispy Pata', desc:'Deep-fried pork knuckle, golden and crackling outside, tender inside.', price:'₱680', badge:'Best Seller', img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80' },
    { cat:'filipino', name:'Kare-Kare', desc:'Rich oxtail and banana blossom stew in a creamy peanut sauce.', price:'₱720', badge:'Signature', img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80' },
    { cat:'filipino', name:'Lechon de Leche', desc:'Whole roasted suckling pig, tender and flavorful. Per order.', price:'₱9,500', badge:'', img:'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80' },
    { cat:'filipino', name:'Sinigang na Hipon', desc:'Plump prawns in a sour tamarind broth with fresh vegetables.', price:'₱580', badge:'', img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
    { cat:'international', name:'Roast Beef Carving', desc:'Slow-roasted tender beef, served with au jus and horseradish.', price:'₱850', badge:'Premium', img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80' },
    { cat:'international', name:'Chicken Cordon Bleu', desc:'Stuffed chicken breast with ham and Swiss cheese, golden fried.', price:'₱520', badge:'', img:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80' },
    { cat:'international', name:'Pasta Bolognese', desc:'Classic slow-cooked meat sauce over al dente pasta.', price:'₱380', badge:'', img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80' },
    { cat:'international', name:'Salmon en Croûte', desc:'Flaky salmon fillet wrapped in golden puff pastry with herbs.', price:'₱780', badge:"Chef's Pick", img:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80' },
    { cat:'desserts', name:'Crème Brûlée', desc:'Silky vanilla custard topped with a perfectly torched sugar crust.', price:'₱180', badge:'', img:'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&q=80' },
    { cat:'desserts', name:'Leche Flan Tower', desc:'Classic Filipino caramel custard, elevated into a showpiece centerpiece.', price:'₱1,200', badge:'Showpiece', img:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80' },
    { cat:'desserts', name:'Brazo de Mercedes', desc:'Soft meringue roll filled with rich egg yolk custard cream.', price:'₱880', badge:'Favorite', img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80' },
    { cat:'desserts', name:'Churros Station', desc:'Freshly fried churros served with chocolate dipping sauce.', price:'₱450', badge:'', img:'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80' },
    { cat:'drinks', name:"Sago't Gulaman", desc:'Classic Filipino sweet drink with tapioca pearls and jelly.', price:'₱85', badge:'Classic', img:'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400&q=80' },
    { cat:'drinks', name:'Fruit Punch Bowl', desc:'Tropical blend of mango, pineapple, and citrus with soda.', price:'₱120', badge:'', img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80' },
    { cat:'drinks', name:'Buko Lemonade', desc:'Freshly squeezed lemon with young coconut water and mint.', price:'₱110', badge:'Refreshing', img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
    { cat:'drinks', name:'Mocktail Station', desc:'Custom mocktail bar — sunrise, mojito, and signature mixes.', price:'₱2,500', badge:'Station', img:'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400&q=80' },
  ];

  const galleryImgs = [
    { src:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80', alt:'Elegant dinner table setup' },
    { src:'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80', alt:'Beautiful buffet spread' },
    { src:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80', alt:'Gourmet dish plating' },
    { src:'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', alt:'Wedding reception' },
    { src:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80', alt:'Dessert table display' },
    { src:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80', alt:'Traditional Filipino dish' },
    { src:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt:'Corporate event setup' },
  ];

  const testimonials = [
    { name:'Camille Villar', role:'Bride — Wedding 2024', text:"KCS made our wedding day absolutely perfect. The food was exquisite, the presentation was stunning, and their team was so professional. Our guests couldn't stop raving about the lechon!", rating:5, avatar:'https://randomuser.me/api/portraits/women/44.jpg' },
    { name:'Mark Villar', role:'Event Manager, LMNI Corp', text:"We've hired KCS for four corporate events now and they never disappoint. On-time, professional, and the food quality is consistently top-tier. Highly recommended for corporate clients.", rating:5, avatar:'https://randomuser.me/api/portraits/men/32.jpg' },
    { name:'Angela Balmond', role:"Birthday Celebrant's Mom", text:"My daughter's debut was a dream come true, in big part thanks to KCS. The dessert table alone was worth every peso. Beautiful setup, delicious food, and the service was seamless.", rating:5, avatar:'https://randomuser.me/api/portraits/women/68.jpg' },
    { name:'Carlo Aquino', role:'Groom — Wedding 2023', text:"From tasting to the big day, the Élume team was incredible. They accommodated all our requests and dietary needs without any hassle. Best catering experience we've ever had!", rating:5, avatar:'https://randomuser.me/api/portraits/men/55.jpg' },
    { name:'Joanna of BINI', role:'Private Party Host', text:"We wanted something intimate yet luxurious for our anniversary dinner. KCS created a bespoke 7-course menu that blew us away. Truly felt like a five-star restaurant at home.", rating:5, avatar:'https://randomuser.me/api/portraits/women/23.jpg' },
    { name:'Bato Dela Rosa', role:'HR Director, TechCo PH', text:"Our company Christmas party was the best one yet because of KCS. Everyone was impressed by the food variety and quality. The service crew was friendly and efficient throughout.", rating:5, avatar:'https://randomuser.me/api/portraits/men/78.jpg' },
  ];

  const faqs = [
    { q:'How far in advance should I book?', a:"We recommend booking at least 2–3 months in advance, especially for peak season (October–December). For large-scale events like weddings, 6 months to a year ahead is ideal to secure your date." },
    { q:'Do you offer tastings before finalizing the menu?', a:"Yes! We offer complimentary tasting sessions for events of 100 pax and above. For smaller events, a tasting fee applies (credited back on booking). Contact us to schedule yours." },
    { q:'Can you accommodate dietary restrictions?', a:"Absolutely. We cater to vegetarian, vegan, gluten-free, halal, and other dietary requirements. Just inform us during inquiry and we'll customize the menu accordingly." },
    { q:'What areas do you service?', a:"We primarily serve Metro Manila and surrounding provinces (Rizal, Laguna, Bulacan, Pampanga, Cavite). For far venues, additional travel fees may apply. Contact us for a quote." },
    { q:"What's included in the package price?", a:"All packages include food, chafing dishes, serving utensils, basic setup, and delivery within Metro Manila. Service crew and table linen vary by package. We provide a detailed inclusions list upon inquiry." },
    { q:'Do you handle event decoration and venue setup?', a:"While we specialize in catering, we have trusted partner suppliers for flowers, table centerpieces, and event styling that we can coordinate for you at an additional cost." },
    { q:'What is your cancellation and refund policy?', a:"A 30% non-refundable deposit is required upon booking. Cancellations made 30+ days before the event receive a partial refund. For COVID or force majeure cases, we offer free rescheduling." },
    { q:'Can I customize a package that isn\'t listed?', a:"Definitely! All our packages are starting points. We love building custom packages — just tell us your budget, headcount, and event type, and we'll craft something perfect for you." },
  ];

  const marqueeItems = ['Weddings','Debuts','Birthdays','Corporate Events','Buffet Services','Private Dining','Live Cooking Stations','Custom Menus'];

  let observer;

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 2000);

    // Marquee
    const track = document.getElementById('marqueeTrack');
    track.innerHTML = [...marqueeItems,...marqueeItems].map(i =>
      `<span class="marquee-item"><span class="marquee-dot"></span>${i}</span>`
    ).join('');

    setupReveal();
    renderMenu('all');
    renderGallery();
    renderTestimonials();
    renderFAQ();
    setupNavbar();
    setupHamburger();
    setupTheme();
    setupForm();
    setupLightbox();

    document.getElementById('newsletterBtn').addEventListener('click', () => showToast('🎉 Subscribed! Watch your inbox for updates.'));

    document.querySelectorAll('.menu-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderMenu(tab.dataset.cat);
      });
    });
  });

  function renderMenu(cat) {
    const grid = document.getElementById('menuGrid');
    const items = cat === 'all' ? menuItems : menuItems.filter(i => i.cat === cat);
    grid.innerHTML = items.map(item => `
      <div class="menu-card active reveal">
        <div class="menu-card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
          ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
        </div>
        <div class="menu-card-body">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <div class="menu-card-footer">
            <span class="menu-price">${item.price}</span>
            <button class="menu-add" onclick="showToast('Added ${item.name} to your inquiry!')">+</button>
          </div>
        </div>
      </div>`).join('');
    grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = galleryImgs.map((img, i) => `
      <div class="gallery-item reveal" style="transition-delay:${i*0.05}s" data-src="${img.src}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" />
        <div class="gallery-overlay"><i class="fa fa-expand"></i></div>
      </div>`).join('');
    grid.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => openLightbox(item.dataset.src));
      observer.observe(item);
    });
  }

  function renderTestimonials() {
    const track = document.getElementById('testiTrack');
    track.innerHTML = testimonials.map((t, i) => `
      <div class="testi-card reveal" style="transition-delay:${i*0.08}s">
        <div class="testi-quote">"</div>
        <div class="testi-stars">${'★'.repeat(t.rating)}</div>
        <p class="testi-text">${t.text}</p>
        <div class="testi-author">
          <div class="testi-avatar"><img src="${t.avatar}" alt="${t.name}" loading="lazy" /></div>
          <div class="testi-author-info"><strong>${t.name}</strong><span>${t.role}</span></div>
        </div>
      </div>`).join('');
    track.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function renderFAQ() {
    const grid = document.getElementById('faqGrid');
    grid.innerHTML = faqs.map((f, i) => `
      <div class="faq-item reveal" style="transition-delay:${i*0.05}s">
        <button class="faq-question" aria-expanded="false">
          ${f.q}
          <span class="faq-icon"><i class="fa fa-plus"></i></span>
        </button>
        <div class="faq-answer"><p>${f.a}</p></div>
      </div>`).join('');
    grid.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const isOpen = btn.classList.contains('open');
        grid.querySelectorAll('.faq-question').forEach(b => {
          b.classList.remove('open'); b.setAttribute('aria-expanded','false');
          b.nextElementSibling.classList.remove('open');
        });
        if (!isOpen) {
          btn.classList.add('open'); btn.setAttribute('aria-expanded','true');
          btn.nextElementSibling.classList.add('open');
        }
      });
    });
    grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  function setupReveal() {
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
  }

  function setupNavbar() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
  }

  function setupHamburger() {
    const btn = document.getElementById('hamburger');
    const menu = document.getElementById('mobileMenu');
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', isOpen);
    });
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open'); btn.classList.remove('open'); btn.setAttribute('aria-expanded','false');
      });
    });
  }

  function setupTheme() {
    const btn = document.getElementById('themeToggle');
    const icon = btn.querySelector('i');
    const saved = localStorage.getItem('elume-theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    icon.className = saved === 'dark' ? 'fa fa-sun' : 'fa fa-moon';
    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('elume-theme', next);
      icon.className = next === 'dark' ? 'fa fa-sun' : 'fa fa-moon';
    });
  }

  function setupForm() {
    document.getElementById('bookingForm').addEventListener('submit', e => {
      e.preventDefault();
      const fname = document.getElementById('fname').value.trim();
      if (!fname) { showToast('⚠️ Please fill in all required fields.'); return; }
      showToast(`✅ Thank you, ${fname}! We'll be in touch within 24 hours.`);
      e.target.reset();
    });
  }

  function setupLightbox() {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }
  function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }
