// ========================
// COUNTERS
// ========================
document.querySelectorAll(".counter").forEach(counter => {
  const target = +counter.dataset.target;
  let count = 0;

  const run = () => {
    if (count < target) {
      count++;
      counter.innerText = count + "+";
      setTimeout(run, 25);
    }
  };
  run();
});

// ========================
// LANGUAGE SWITCH
// ========================
let lang = "en";

// Dhammaan keys-ka data-key ee HTML-kaaga hadda jira
const texts = {
  en: {
    heroTitle: "Professional Management Systems",
    heroText: "HUDI SOFT develops enterprise software solutions for businesses, hospitals, hotels, restaurants and organizations.",
    aboutTitle: "About Us",
    aboutText: `HUDI SOFT is a professional project management and software development
company dedicated to building smart, secure and scalable digital systems
for modern organizations. Founded with the vision of transforming how
businesses operate through technology, HUDI SOFT focuses on delivering
enterprise-level solutions that improve efficiency, transparency and
decision-making across multiple industries.`,
    users: "Users",
    workers: "Workers",
    projectsTitle: "Our Projects",
    contactTitle: "Contact Us"
  },
  so: {
    heroTitle: "Nidaamyada Maamul Casri ah",
    heroText: "HUDI SOFT waxay horumarisaa nidaamyo maamul oo casri ah oo loogu talagalay ganacsiyo, isbitaallo, huteelo iyo hay’ado.",
    aboutTitle: "Nagu Saabsan",
    aboutText: `HUDI SOFT waa shirkad xirfadle ah oo ku takhasustay maamulka mashruuca iyo horumarinta software-ka
waxay dhistaa nidaamyo casri ah, ammaan ah oo la ballaariyo karo
oo loogu talagalay ururada casriga ah.`,
    users: "Isticmaalayaal",
    workers: "Shaqaale",
    projectsTitle: "Mashruucyadayada",
    contactTitle: "Nala Soo Xiriir"
  }
};

// Function toggle language oo xalinaya undefined
function toggleLang() {
  lang = lang === "en" ? "so" : "en";
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    // Hubi in key-ga uu jiro ka hor inta aan update-gareyn
    if (texts[lang][key] !== undefined) {
      el.innerText = texts[lang][key];
    }
  });
}

// Initial update marka page la load gareeyo
toggleLang();

// ========================
// WORKERS TOGGLE
// ========================
function toggleWorkers() {
  const section = document.getElementById("workers-section");
  const btn = document.getElementById("workers-btn");
  
  if (section.style.display === "none") {
    section.style.display = "grid";
    btn.innerText = "Hide Workers";
  } else {
    section.style.display = "none";
    btn.innerText = "View Workers";
  }
}
