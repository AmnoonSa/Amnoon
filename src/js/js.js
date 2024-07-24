function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offsetTop = targetSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior:"smooth"
      });
    }
  }

  const images = [
    "./src/img/Amnoon.png",
    "./src/img/news1.jpg", // Replace with actual image paths
    // Add more image paths as needed
];
const texts = [
    "يقدم مكتب آمنون الاستشارات في المجال الأمني والرقمي للقطاع العالم والصناعي بمعايير عالمية و بما يتوافق مع متطلبات االهيئة العليا للأمن الصناعي من خلال نخبة متميزة من الخبرات والكفائات الوطنية بما يتوافق مع رؤية المملكة 2030",
    "مكتب امنون للاستشارات الأمنية يشارك في الندوة الثالتة لامن وسلامة المنشآت الحيوية بورقتي عمل يقدمها نخبة من المستشاريين الأمنيين ، الندوة المزمع إقامتها  في محافظة ظفار في سلطنة عمّان خلال الفترة من 2-4 سبتمبر",
    // Add more texts corresponding to the images
];

let index = 0;

function changeContent3() {
    // Fade out animation
    document.querySelector('.custom-image img').style.opacity = 0;
    document.querySelector('.custom-content').style.opacity = 0;

    setTimeout(() => {
        // Update content
        document.getElementById('content3-image').src = images[index];
        document.getElementById('content3-text').textContent = texts[index];

        // Fade in animation
        document.querySelector('.custom-image img').style.opacity = 1;
        document.querySelector('.custom-content').style.opacity = 1;

        index = (index + 1) % images.length; // Loop through images and texts
    }, 500); // Adjust timing to match the transition duration
}

// Call changeContent3 initially
changeContent3();

// Call changeContent3 every 10000 milliseconds (10 seconds)
setInterval(changeContent3, 10000);

const imagesEn = [
  "./src/img/Amnoon.png",
  "./src/img/news1.jpg", // Replace with actual image paths
  // Add more image paths as needed
];
const textsEn = [
  "The Office of Security provides security and digital advice to the global and industrial sector with global standards and in accordance with the requirements of the Supreme Industrial Security Authority through a distinct selection of national expertise and competence in line with the Kingdom vision of 2030",
  "Amnoon Security Consulting Office will participate in the Third Seminar on Security and Safety of Vital Installations with two papers presented by a distinguished team of security consultants. The seminar is scheduled to take place in Dhofar Governorate, Sultanate of Oman, from September 2nd to September 4th.",
  // Add more texts corresponding to the images
];

let indexEn = 0;

function changeContent3En() {
  // Fade out animation
  document.querySelector('.custom-image img').style.opacity = 0;
  document.querySelector('.custom-content').style.opacity = 0;

  setTimeout(() => {
      // Update content
      document.getElementById('content3-imageEn').src = imagesEn[indexEn];
      document.getElementById('content3-textEn').textContent = textsEn[indexEn];

      // Fade in animation
      document.querySelector('.custom-image img').style.opacity = 1;
      document.querySelector('.custom-content').style.opacity = 1;

      indexEn = (indexEn + 1) % images.length; // Loop through images and texts
  }, 500); // Adjust timing to match the transition duration
}

// Call changeContent3 initially
changeContent3En();

// Call changeContent3 every 10000 milliseconds (10 seconds)
setInterval(changeContent3En, 10000);