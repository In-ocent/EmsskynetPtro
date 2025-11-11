document.addEventListener("DOMContentLoaded", () => {
  const WA_PHONE = "2347030077529";

  // === PRODUCTS ===
  const products = [
  { name: "SPECTRANET FREEDOM MIFI", cat: "Internet & Connectivity", desc: "Enjoy 100GB + 50% bonus data on renewal.", image: "/static/assete/special-offer.png", isAd: true },
  { name: "ID CARD CUTTER", cat: "Tools", price: 13000, desc: "Precision ID card cutting tool.", image: "/static/assete/product_images/cutting.jpg" },
  { name: "3 IN 1 COLOUR PRINTER", cat: "Printers", price: 25000, desc: "Multifunction printer for scan, copy and print.", image: "/static/assete/product_images/3in1cloour.jpg" },
  { name: "LAPTOP", cat: "Computers", price: 70000, desc: "Standard laptop for office and personal use.", image: "/static/assete/product_images/laptop.jpg" },
  { name: "PHOTOCOPY MACHINE", cat: "Office Equipment", price: 55000, desc: "High-speed photocopy machine.", image: "/static/assete/product_images/photocopy.jpg" },
  { name: "HITI S40 PHOTO PRINTER", cat: "Printers", price: 75000, desc: "Professional photo printer for ID and studio use.", image: "/static/assete/product_images/photo_printer.jpg" },
  { name: "LAMINATING MACHINE", cat: "Office Equipment", price: 15000, desc: "For sealing and protecting documents.", image: "/static/assete/product_images/laminator.jpg" },
  { name: "BINDING MACHINE", cat: "Office Equipment", price: 18000, desc: "Bind your reports and documents easily.", image: "/static/assete/product_images/binder.jpg" },
  { name: "DESKTOP COMPUTER", cat: "Computers", price: 90000, desc: "Powerful desktop for work and training.", image: "/static/assete/product_images/Gaming_destop.png" },
  { name: "FLASH DRIVE 32GB", cat: "Accessories", price: 4000, desc: "Reliable data storage device.", image: "/static/assete/product_images/flashdrive.jpg" },
  { name: "EXTERNAL HARD DRIVE 1TB", cat: "Accessories", price: 25000, desc: "Backup your important files easily.", image: "/static/assete/product_images/harddrive.jpg" },
  { name: "CANON CAMERA", cat: "Electronics", price: 95000, desc: "Capture professional-quality photos.", image: "/static/assete/product_images/camera.jpg" },
  { name: "WIRELESS MOUSE", cat: "Accessories", price: 3000, desc: "Smooth and precise wireless mouse.", image: "/static/assete/product_images/mouse.jpg" },
  { name: "KEYBOARD", cat: "Accessories", price: 2500, desc: "Durable USB keyboard for everyday use.", image: "/static/assete/product_images/keyboard.jpg" },
  { name: "UPS BACKUP", cat: "Power", price: 20000, desc: "Protect your devices from power loss.", image: "/static/assete/product_images/ups.jpg" },
  { name: "PRINTER INK", cat: "Consumables", price: 4000, desc: "High-quality printer ink cartridges.", image: "/static/assete/product_images/ink.jpg" },
  { name: "ID CARD HOLDER", cat: "Accessories", price: 500, desc: "Strong transparent ID card holder.", image: "/static/assete/product_images/idholder.jpg" },
  { name: "RICOH PHOTOCOPY MACHINE", cat: "Office Equipment", price: 110000, desc: "Heavy duty copier for large offices.", image: "/static/assete/product_images/multi-size-copy.jpg" },
  { name: "HP LASERJET PRINTER", cat: "Printers", price: 95000, desc: "Efficient laser printer for high-volume jobs.", image: "/static/assete/product_images/hpprinter.jpg" },
  { name: "EPSON PRINTER", cat: "Printers", price: 65000, desc: "Inkjet printer with vibrant color printing.", image: "/static/assete/product_images/epson.jpg" },
  { name: "DESKTOP SPEAKERS", cat: "Audio", price: 8000, desc: "Compact and rich stereo sound.", image: "/static/assete/product_images/speaker.jpg" },
  { name: "DESKTOP SPEAKERS", cat: "Audio", price: 8000, desc: "Compact and rich stereo sound.", image: "/static/assete/product_images/speaker1.jpg" },
  { name: "WEB CAMERA", cat: "Accessories", price: 6000, desc: "For clear online video calls and meetings.",  image: "/static/assete/product_images/webcam.jpg" },
  { name: "POWER BANK 20000mAh", cat: "Power", price: 15000, desc: "High capacity portable charger.", image: "/static/assete/product_images/powerbank.jpg" },
  { name: "HDMI CABLE", cat: "Cables", price: 2500, desc: "High-speed HDMI cable for display connection.", image: "/static/assete/product_images/hdmi.jpg" },
  { name: "EXTENSION BOX", cat: "Power", price: 3500, desc: "4-way power extension socket.", image: "/static/assete/product_images/extension.jpg" },
  { name: "SMARTPHONE", cat: "Electronics", price: 65000, desc: "Latest Android phone with long battery life.", image: "/static/assete/product_images/phone.jpg" },
  { name: "WIRELESS ROUTER", cat: "Network", price: 18000, desc: "High speed WiFi for homes and offices.", image: "/static/assete/product_images/router.jpg" },
  { name: "CCTV CAMERA", cat: "Security", price: 32000, desc: "HD security camera for offices and homes.", image: "/static/assete/product_images/cctv.jpg" },
  { name: "POS MACHINE", cat: "Business Equipment", price: 45000, desc: "Accept card payments easily.", image: "/static/assete/product_images/pos.jpg" },
  { name: "DRONE CAMERA", cat: "Electronics", price: 120000, desc: "High quality aerial photography drone.", image: "/static/assete/product_images/drone.jpg" },
  ];

  // === Product Cards ===
  const wrap = document.getElementById("productsWrap");
  if (wrap) {
    products.forEach((p) => {
      const el = document.createElement("article");
      el.className = `product animate-on-scroll ${p.isAd ? "ad-card" : ""}`;

      if (p.isAd) {
        el.innerHTML = `
          <div class="ad-banner">
            <img src="${p.image}" alt="${p.name}" class="product-image" />
            <div class="product-body">
              <h3 class="product-title">${p.name}</h3>
              <p class="product-desc">${p.desc}</p>
              <a class="btn-order" href="https://wa.me/${WA_PHONE}?text=Hello EMS Skynet, I'm interested in the Spectranet MiFi /Router and data bundles." target="_blank">💬 Order Spectranet</a>
            </div>
          </div>`;
      } else {
        el.innerHTML = `
          <div class="product-media">
            <img src="${p.image}" alt="${p.name}" class="product-image" />
          </div>
          <div class="product-body">
            <h3 class="product-title">${p.name}</h3>
            <p class="product-desc">${p.desc}</p>
            <a class="btn-order" href="https://wa.me/${WA_PHONE}?text=Hello EMS Skynet, I want to order ${p.name}" target="_blank">💬 Order on WhatsApp</a>
          </div>`;
      }
      wrap.appendChild(el);
    });
  } else {
    console.warn("productsWrap element not found");
  }

  // === Search Filter ===
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll(".product").forEach((card) => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(term) ? "block" : "none";
      });
    });
  }

  // === Scroll Animation ===
  const cards = document.querySelectorAll(".animate-on-scroll");
  if (cards.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card) => observer.observe(card));
  }

  // === Floating Ad ===
  const floatingAd = document.getElementById("floatingAd");
  if (floatingAd) {
    setTimeout(() => floatingAd.classList.add("show"), 4000);
  }

  // === Read More Button (if needed) ===
  const readMoreBtn = document.getElementById("readMoreBtn");
  const moreText = document.getElementById("moreText");
  if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener("click", () => {
      moreText.classList.toggle("show");
      readMoreBtn.textContent = moreText.classList.contains("show") ? "Read Less" : "Read More";
    });
  }
});
