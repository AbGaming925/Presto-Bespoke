/* =====================================
   PRESTO OFFICE AUTOMATIONS
   Premium Animation System
===================================== */
const SUPABASE_URL =
"https://luypflhqfvxgylmqvjov.supabase.co";

const SUPABASE_KEY =
"sb_publishable_6zENG3qzHDIkLUcS7GrUaA_shpteFT6";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


/* Lenis Smooth Scroll */

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* Register GSAP */

gsap.registerPlugin(ScrollTrigger);



/* Hero Animation */

gsap.from(".hero-content", {
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power4.out"
});

gsap.from(".hero h1", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  delay: .2
});

gsap.from(".hero p", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: .5
});

gsap.from(".hero-buttons", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  delay: .7
});

/* Navbar Blur */

window.addEventListener("scroll", () => {

  const nav = document.querySelector(".navbar");

  if (window.scrollY > 100) {

    nav.style.background =
      "rgba(0,0,0,.75)";

  } else {

    nav.style.background =
      "rgba(0,0,0,.35)";

  }

});

/* Reveal Animations */

const revealItems = document.querySelectorAll(
  ".product-card, .glass-card, .testimonial-card, .step"
);

revealItems.forEach((item) => {

  gsap.from(item, {

    scrollTrigger: {
      trigger: item,
      start: "top 85%"
    },

    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out"

  });

});

/* ====================================
   MOBILE MENU
==================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = menuBtn ? menuBtn.querySelector("i") : null;

    if (!menuBtn || !navLinks || !menuIcon) return;

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");

        } else {

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(function(link){

        link.addEventListener("click", function(){

            navLinks.classList.remove("active");

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        });

    });

});


/* Product Card Hover */

document.querySelectorAll(".product-card")
.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 20;

    const rotateX =
      ((y / rect.height) - 0.5) * -20;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: .4
    });

  });

  card.addEventListener("mouseleave", () => {

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: .5
    });

  });

});

/* Button Magnetic Effect */

document.querySelectorAll(".btn")
.forEach((button) => {

  button.addEventListener("mousemove", (e) => {

    const rect =
      button.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * .2,
      y: y * .2,
      duration: .3
    });

  });

  button.addEventListener("mouseleave", () => {

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: .4
    });

  });

});

/* Section Headings */

gsap.utils.toArray("section h2")
.forEach((heading) => {

  gsap.from(heading, {

    scrollTrigger: {
      trigger: heading,
      start: "top 85%"
    },

    opacity: 0,
    y: 50,
    duration: 1

  });

});

/* Hero Video Zoom */

const heroVideo =
document.querySelector(".hero-video");

if(heroVideo){

gsap.to(heroVideo, {

  scale: 1.15,

  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"bottom top",
    scrub:true
  }

});

}

/* Timeline Animation */

gsap.from(".step", {

  scrollTrigger:{
    trigger:".timeline",
    start:"top 80%"
  },

  opacity:0,
  x:120,
  stagger:.2,
  duration:1

});

/* Testimonial Float */

gsap.to(".testimonial-card", {

  y:-10,

  duration:2,

  repeat:-1,

  yoyo:true,

  stagger:.2,

  ease:"sine.inOut"

});

/* Applications Glow */

document.querySelectorAll(".glass-card")
.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

gsap.to(card,{
boxShadow:"0 0 40px rgba(37,99,235,.35)",
duration:.3
});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{
boxShadow:"0 0 0 rgba(0,0,0,0)",
duration:.3
});

});

});

/* Footer Reveal */

gsap.from("footer",{

scrollTrigger:{
trigger:"footer",
start:"top bottom"
},

opacity:0,
y:80,
duration:1

});

console.log(
"PRESTO Premium Animation System Loaded"
);

/* ====================================
   PRESTO POPUP
==================================== */

const isHome =
    location.pathname.endsWith("index.html") ||
    location.pathname === "/";

const leadPopup =
    document.getElementById("leadPopup");

const closePopupBtn =
    document.querySelector(".lead-close-btn");

if (isHome && leadPopup && closePopupBtn) {

    if (!sessionStorage.getItem("homePopup")) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                leadPopup.classList.add("show");

                sessionStorage.setItem(
                    "homePopup",
                    "1"
                );

            }, 1500);

        });

    }

    closePopupBtn.onclick = () => {

        leadPopup.classList.remove("show");

    };

}

async function submitPrestoLead() {

    const input =
        document.getElementById("leadInput");

    const value = input.value.trim();

    if (!value) {

       showValidationPopup(
           "Information Required",
           "Please enter your Email ID or Mobile Number."
       );

       return;

    }

    const { error } = await supabaseClient
        .from("presto_leads")
        .insert([
            {
                contact: value
            }
        ]);

    if (error) {

        console.error(error);

        showErrorPopup(
           "Failed to Save",
           error.message
        );

        return;

    }

    showSuccessPopup(
       "Welcome to PRESTO Family!",
       "Thank you for joining us. You'll receive exclusive    offers, product launches and special updates."
    );

    leadPopup.classList.remove("show");

    input.value = "";

}


/* ====================================
   CATEGORY CARD NAVIGATION
==================================== */

document.querySelectorAll(".category-card").forEach(function(card){

    card.onclick=function(){

        var link=this.querySelector("a");

        if(link){

            window.location=link.href;

        }

    };

});


const mapDiv = document.getElementById("prestoMap");

if(mapDiv){

    const map = L.map("prestoMap").setView(
        [22.680061,88.457765],
        16
    );

    L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
            attribution:"© OpenStreetMap © CARTO"
        }
    ).addTo(map);

    const marker = L.divIcon({

    html: `
        <i class="fa-solid fa-location-dot"
           style="
                color:#e53935;
                font-size:42px;
                filter:drop-shadow(0 0 10px rgba(229,57,53,.6));
           ">
        </i>
    `,

    className: "presto-marker",

    iconSize: [42,42],

    iconAnchor: [21,42],

    popupAnchor: [0,-38]

});

L.marker(
    [22.680061,88.457765],
    { icon: marker }
).addTo(map)

    .bindPopup(
        "<b style='color:black'>PRESTO Office Automations</b><br>Bespoke Innovations Pvt. Ltd."
    )

    .openPopup();

}


function showSuccessPopup(title, message){

    document.getElementById("successTitle").textContent = title;

    document.getElementById("successMessage").textContent = message;

    document.getElementById("successPopup").classList.add("show");

}

function closeSuccessPopup(){

    document.getElementById("successPopup").classList.remove("show");

}



function showErrorPopup(title, message){

    document.getElementById("errorTitle").textContent = title;

    document.getElementById("errorMessage").textContent = message;

     document.getElementById("errorPopup").classList.add("show");

}

function closeErrorPopup(){

    document.getElementById("errorPopup").classList.remove("show");

}


function showValidationPopup(title, message){

    document.getElementById("validationTitle").textContent = title;

    document.getElementById("validationMessage").textContent = message;

    document.getElementById("validationPopup").classList.add("show");

}

function closeValidationPopup(){

    document.getElementById("validationPopup").classList.remove("show");

}

/* ====================================
   CONTACT FORM
==================================== */

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", async function(e){

        e.preventDefault();

        const name =
            document.getElementById("contactName").value.trim();

        const email =
            document.getElementById("contactEmail").value.trim();

        const phone =
            document.getElementById("contactPhone").value.trim();

        const message =
            document.getElementById("contactMessage").value.trim();

        if(!name || !email || !message){

            showValidationPopup(
                "Information Required",
                "Please fill all required fields."
            );

            return;

        }

        const { error } = await supabaseClient
            .from("contact_messages")
            .insert([{

                name:name,

                email:email,

                phone:phone,

                message:message

            }]);

        if(error){

            console.error(error);

            showErrorPopup(
                "Submission Failed",
                error.message
            );

            return;

        }

        showSuccessPopup(
            "Message Sent!",
            "Thank you for contacting PRESTO. We'll get back to you shortly."
        );

        contactForm.reset();

    });

}