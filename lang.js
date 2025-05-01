
const translations = {
  en: {
    about_title: "About",
    about_text: "3rd year student at Polytech Lyon, passionate about networks, cybersecurity, and practical projects.",
    education_title: "Education",
    education_1: "Polytech Lyon – Computer Engineering Degree (2024–2027)",
    education_2: "Lyon 1 – Computer Science & Mathematics (2022–2024)",
    education_3: "PASS Health – Montpellier (2021–2022)",
    education_4: "Scientific High School – Meknès, Morocco (2018–2021)",
    experience_title: "Experience",
    experience_1: "Business Manager – Junior Enterprise Polyenco (2025–present)",
    experience_2: "Versatile Employee – Franprix (summer 2024)",
    skills_title: "Skills",
    skills_1: "Languages: Java, C++, Python, PHP, SQL, HTML/CSS, JS, Assembly",
    skills_2: "Databases: MySQL, MariaDB, Oracle",
    skills_3: "Networks: VLAN, Routing, Switching, Firewall",
    skills_4: "Tools: GitHub, Trello, IntelliJ, Visual Studio, Scrum",
    skills_5: "Soft Skills: rigor, curiosity, autonomy, teamwork",
    certifications_title: "Certifications",
    cert_1: "HPE Aruba Networking Essentials",
    cert_2: "HPE Aruba Network Security Essentials",
    cert_3: "Fortinet Certified Fundamentals (expected April 2025)",
    cert_4: "PSE 1 – First Aid (2023)",
    contact_title: "Contact"
  },
  es: {
    about_title: "Sobre mí",
    about_text: "Estudiante de tercer año en Polytech Lyon, apasionado por redes, ciberseguridad y proyectos prácticos.",
    education_title: "Formación",
    education_1: "Polytech Lyon – Ingeniería informática (2024–2027)",
    education_2: "Lyon 1 – Informática y Matemáticas (2022–2024)",
    education_3: "PASS Salud – Montpellier (2021–2022)",
    education_4: "Bachillerato científico – Meknès, Marruecos (2018–2021)",
    experience_title: "Experiencia",
    experience_1: "Gestor comercial – Junior Empresa Polyenco (2025–presente)",
    experience_2: "Empleado versátil – Franprix (verano 2024)",
    skills_title: "Competencias",
    skills_1: "Lenguajes: Java, C++, Python, PHP, SQL, HTML/CSS, JS, Ensamblador",
    skills_2: "Bases de datos: MySQL, MariaDB, Oracle",
    skills_3: "Redes: VLAN, Enrutamiento, Switching, Firewall",
    skills_4: "Herramientas: GitHub, Trello, IntelliJ, Visual Studio, Scrum",
    skills_5: "Soft Skills: rigor, curiosidad, autonomía, trabajo en equipo",
    certifications_title: "Certificaciones",
    cert_1: "HPE Aruba Networking Essentials",
    cert_2: "HPE Aruba Network Security Essentials",
    cert_3: "Fundamentos Certificados de Fortinet (previsto abril 2025)",
    cert_4: "PSE 1 – Primeros auxilios (2023)",
    contact_title: "Contacto"
  },
  ar: {
    about_title: "نبذة عني",
    about_text: "طالب في السنة الثالثة ببوليتك ليون، شغوف بالشبكات، الأمن السيبراني والمشاريع التطبيقية.",
    education_title: "التكوين الأكاديمي",
    education_1: "بوليتك ليون – هندسة إعلامية (2024–2027)",
    education_2: "ليون 1 – إعلاميات ورياضيات (2022–2024)",
    education_3: "PASS الصحة – مونبلييه (2021–2022)",
    education_4: "الثانوية العلمية – مكناس، المغرب (2018–2021)",
    experience_title: "الخبرات",
    experience_1: "مسؤول تجاري – مؤسسة Polyenco (من 2025 إلى الآن)",
    experience_2: "موظف متعدد المهام – Franprix (صيف 2024)",
    skills_title: "المهارات",
    skills_1: "اللغات: Java, C++, Python, PHP, SQL, HTML/CSS, JS, Assembly",
    skills_2: "قواعد البيانات: MySQL, MariaDB, Oracle",
    skills_3: "الشبكات: VLAN، التوجيه، Switching، جدار الحماية",
    skills_4: "الأدوات: GitHub، Trello، IntelliJ، Visual Studio، Scrum",
    skills_5: "المهارات الشخصية: الصرامة، الفضول، الاستقلالية، روح الفريق",
    certifications_title: "الشهادات",
    cert_1: "أساسيات الشبكات – HPE Aruba",
    cert_2: "أساسيات أمن الشبكات – HPE Aruba",
    cert_3: "شهادة Fortinet للمبتدئين (منتظرة في أبريل 2025)",
    cert_4: "الإسعافات الأولية – PSE 1 (2023)",
    contact_title: "تواصل معي"
  }
};

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}
