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

/* Cursor Follower */

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.15,
    ease: "power2.out"
  });

});

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

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if(menuBtn && navLinks){

    menuBtn.addEventListener('click', () => {

        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');

    });

    document.querySelectorAll('.nav-links a').forEach(link => {

        link.addEventListener('click', () => {

            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');

        });

    });

}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
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

const leadPopup = document.getElementById('leadPopup');
const closePopupBtn = document.querySelector('.lead-close-btn');

if(leadPopup){

    window.addEventListener('load', () => {

        if(
            (window.location.pathname.endsWith("index.html") ||
             window.location.pathname === "/" ||
             window.location.pathname === "") &&

            !sessionStorage.getItem("prestoPopupShown")
        ){

            setTimeout(() => {

                leadPopup.classList.add('show');

            },1000);

            sessionStorage.setItem(
                "prestoPopupShown",
                "true"
            );
        }

    });

    closePopupBtn.addEventListener('click', () => {

        leadPopup.classList.remove('show');

    });

}

async function submitPrestoLead() {

    const input =
        document.getElementById("leadInput");

const value = input.value.trim();

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex =
/^\+?[1-9]\d{6,14}$/;

if(!value){

    showValidationPopup(
        "Information Required",
        "Please enter your Email ID or Mobile Number."
    );

    return;
}

if(
    !emailRegex.test(value) &&
    !phoneRegex.test(value)
){

    showValidationPopup(
        "Invalid Entry",
        "Please enter a valid Email ID or an international Mobile Number."
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

        document
          .getElementById("errorPopup")
          .classList.add("show");

      return;
    }

    document.getElementById("leadPopup").classList.remove("show");

    showSuccessPopup(
        "Welcome to PRESTO Family!",
        "Thank you for joining us. You'll receive exclusive offers, product launches and special updates."
    );

    input.value = "";
}

function showSuccessPopup(title,message){

    document.getElementById(
        "successTitle"
    ).textContent = title;

    document.getElementById(
        "successMessage"
    ).textContent = message;

    document
        .getElementById("successPopup")
        .classList.add("show");
}

function showSuccessPopup(title,message){

    document.getElementById(
        "successTitle"
    ).textContent = title;

    document.getElementById(
        "successMessage"
    ).textContent = message;

    document
        .getElementById("successPopup")
        .classList.add("show");
}

function closeSuccessPopup(){

    document
        .getElementById("successPopup")
        .classList.remove("show");

}

function closeErrorPopup(){

    document
        .getElementById("errorPopup")
        .classList.remove("show");

}

function showValidationPopup(title,message){

    document.querySelector(
        "#validationPopup h2"
    ).textContent = title;

    document.querySelector(
        "#validationPopup p"
    ).textContent = message;

    document
        .getElementById("validationPopup")
        .classList.add("show");
}

function closeValidationPopup(){

    document
        .getElementById("validationPopup")
        .classList.remove("show");
}

/* =========================
   PRESTO MAP
========================= */

const mapElement =
document.getElementById("prestoMap");

if(mapElement){

    const map = L.map("prestoMap", {
        zoomControl: true
    }).setView(
        [22.680061, 88.457765],
        16
    );

    L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
            attribution: "&copy; OpenStreetMap"
        }
    ).addTo(map);

    const prestoIcon = L.divIcon({
        html: `
        <div style="
            width:22px;
            height:22px;
            background:#e53935;
            border:4px solid white;
            border-radius:50%;
            box-shadow:0 0 25px rgba(229,57,53,.8);
        "></div>
        `,
        className:"",
        iconSize:[22,22]
    });

    L.marker(
        [22.680061, 88.457765],
        { icon: prestoIcon }
    )
    .addTo(map)
    .bindPopup(
        `
        <div class="custom-popup">

            <h3>Bespoke Innovations Pvt. Ltd.</h3>

            <p>
                PRESTO Office Automations
            </p>

        </div>
        `
    )
    .openPopup();

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

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phoneRegex =
        /^\+?[1-9]\d{6,14}$/;

        /* Validation */

        if(!name){

            showValidationPopup(
                "Name Required",
                "Please enter your name."
            );

            return;
        }

        if(!emailRegex.test(email)){

            showValidationPopup(
                "Invalid Email",
                "Please enter a valid email address."
            );

            return;
        }

        if(phone && !phoneRegex.test(phone)){

            showValidationPopup(
                "Invalid Phone Number",
                "Please enter a valid international phone number."
            );

            return;
        }

        if(!message){

            showValidationPopup(
                "Message Required",
                "Please enter your message."
            );

            return;
        }

        try{

            const { error } =
            await supabaseClient
            .from("contact_messages")
            .insert([
                {
                    name,
                    email,
                    phone,
                    message
                }
            ]);

            if(error){

                console.error(error);

                document
                .getElementById("errorPopup")
                .classList.add("show");

                return;
            }

           showSuccessPopup(
              "Message Sent Successfully",
              "Thank you for contacting PRESTO. Our team will get back to you shortly."
           );

           contactForm.reset();

        }
        catch(err){

            console.error(err);

            document
            .getElementById("errorPopup")
            .classList.add("show");
        }

    });

}
