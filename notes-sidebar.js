// SIDEBAR POPOUT

document.addEventListener('DOMContentLoaded', function () {
    // Array of topics - you can dynamically generate this from your existing content
    var topics = [
      "Introduction to Medical Ethics",
      "Introduction to Medical Ethics in Obstetrics and Gynaecology",
      "Anatomy of the Female Genital Tracts and Abnormal Development",
      "Drug use in Obstetrics and Gynaecology Practice",
      "HIV and AIDS in Obstetric and Gynecological Practice Including PMTCT",
      "Endoscopy in Obstetrics and Gynaecology",
      "Cytology in Gynecology with Emphasis on Screening Procedure",
      "Maternal Mortality and Perinatal Mortality in Nigeria Including Near Misses",
      "Common Symptoms in Gynecology",
      "History Taking in Obstetrics",
      "Definitions of Terms in Gynecology",
      "Definitions of Terms in Obstetrics",
      "Benign lesions of the Vulva and Vagina",
      "Uterine Fibroids",
      "Utero-vaginal Prolapse",
      "Endometriosis and Adenomyosis",
      "Dysfunctional Uterine Bleeding",
      "Sexual and Reproductive Health and Rights",
      "Control of Conception",
      "Male and Female Infertility Including ART",
      "Amenorrhea",
      "Abortion",
      "Overview of Gynecological Cancer Treatment",
      "Ovarian Tumours",
      "Carcinoma of the Endometrium",
      "Carcinoma of the Cervix",
      "Sexually Transmitted Infections in Obstetrics and Gynaecology",
      "Vaginal Discharge Diagnosis and Management",
      "Anemia in Pregnancy Including Hemoglobinopathy",
      "Jaundice in Pregnancy",
      "Diabetes Mellitus in Pregnancy",
      "Malaria in Pregnancy",
      "Pulmonary Tuberculosis in Pregnancy",
      "Asthma in Pregnancy",
      "Cardiac disease in Pregnancy",
      "Thyroid Diseases in Pregnancy",
      "Acute Renal Failure in Pregnancy",
      "Obesity in Obstetrics and Gynaecology Practice",
      "Preterm Labor and Delivery",
      "Induction of Labour",
      "Management of Labor",
      "Introduction to Partograph",
      "Assisted Vaginal Delivery",
      "Caesarean Section",
      "Obstructed Labour and its Management",
      "Trial of Labour and Trial of Scar",
      "Pre-Conceptional and Antenatal Care",
      "Prenatal Diagnosis Including Preimplantation Genetic Diagnosis",
      "Multiple Pregnancy Diagnosis and Clinical Management",
      "Antenatal Fetal Monitoring",
      "Rupture of Uterus",
      "Obstetric Fistulae Rectovaginal Fistula",
      "Antepartum Hemorrhage",
      "Postpartum Hemorrhage",
      "Gestational Trophoblastic Diseases",
      "Molar Pregnancy",
      "Ectopic Pregnancy",
      "Pre-eclampsia and Eclampsia",
      "Malpresentation Abnormal lie and Position Including Unstable lie",
      "Breech Presentation",
      "Control of Micturition Urinary Incontinences stress incontinence and other abnormalities",
      "Emergency Obstetric Care",
      "Nutrition, Lactation and Exclusive Breastfeeding",
      
      // Add more topics as needed
    ];

    // Function to create sidebar menu items
    function createSidebarMenu() {
      var sidebarMenu = document.querySelector('.toggle-menu');
      topics.forEach(function (topic) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        var topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
        link.href = '../lectures/' + topicSlug + '.html'; // Adjust the href based on your file structure
        link.textContent = topic;

        // Highlight the current page
        if (isCurrentPage(topicSlug)) {
          listItem.classList.add('current-page');
        }

        listItem.appendChild(link);
        sidebarMenu.appendChild(listItem);
      });
    }

    // Function to toggle the sidebar
    function toggleSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '250px';
    }

    // Function to close the sidebar
    function closeSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '0';
    }

    // Function to check if the current page matches the provided topic slug
    function isCurrentPage(topicSlug) {
      var currentPage = window.location.pathname.split('/').pop().replace('.html', '');
      return currentPage === topicSlug;
    }

    // Attach event listener to the toggle button
    document.getElementById('toggleSidebarBtn').addEventListener('click', toggleSidebar);

    // Attach event listener to the close button
    document.getElementById('closeSidebarBtn').addEventListener('click', closeSidebar);

    // Function to close the sidebar when clicking outside of it
    function closeSidebarOnClickOutside(event) {
      var sidebar = document.getElementById('sidebar');
      var sidebarBtn = document.getElementById('toggleSidebarBtn');

      // Check if the clicked element is not part of the sidebar or the toggle button
      if (!sidebar.contains(event.target) && event.target !== sidebarBtn) {
        closeSidebar();
      }
    }

    // Attach event listener to the document for clicks
    document.addEventListener('click', closeSidebarOnClickOutside);

    // Create the sidebar menu on page load
    createSidebarMenu();
  });

