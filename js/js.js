function openNav() {
  document.getElementById("sidebar").classList.add("open");
}

function closeNav() {
  document.getElementById("sidebar").classList.remove("open");
}

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
    "./src/img/news1.jpg",
    "./src/img/news2.jpg",
    "./src/img/news3.png",
    "./src/img/news4.png",
    "./src/img/94.jpeg",
    "./src/img/news5.jpeg",
    "./src/img/news6.jpeg",
    // Add more image paths as needed
];
const texts = [
    "يقدم مكتب آمنون الاستشارات في المجال الأمني والرقمي للقطاع العام والصناعي بمعايير عالمية و بما يتوافق مع متطلبات الهيئة العليا للأمن الصناعي من خلال نخبة متميزة من الخبرات والكفائات الوطنية بما يتوافق مع رؤية المملكة 2030",
    "مكتب امنون للاستشارات الأمنية يشارك في الندوة الثالثة لأمن وسلامة المنشآت الحيوية بورقتي عمل يقدمها نخبة من المستشاريين الأمنيين في الندوة المزمع إقامتها بمحافظة ظفار في سلطنة عُمان خلال الفترة من 2-4 سبتمبر",
    "سوف يتشرف مكتب آمنون للاستشارات الأمنية بالمشاركة في ندوة (أمن المرافق الحيوية الثالثه ) والتي سوف تعقد في سلطنة عمان-صلالة - تحت عنوان (أمن الموانئ والمرافق الحيوية ) بورقة عمل (وظيفة الامن الرقمي في حماية بينات المرافق الحيوية) يقدمها المستشار الأمني لواء متقاعد دكتور بركة بن زامل الحوشان",
    "يتشرف مكتب آمنون للاستشارات الأمنية بالمشاركة بورقة عمل في ندوة (أمن المرافق الحيوية) والتي سوف تعقد في سلطنة عمان-صلالة - تحت عنوان (أمن الموانئ والمرافق الحيوية ) بورقة عمل عن امن المطارات يقدمها المستشار الامني لواء متقاعد يوسف بن احمد القحطاني",
    "سوف يتشرف مكتب آمنون للاستشارات الأمنية بالمشاركة في ندوة (أمن المرافق الحيوية الثالثة ) والتي سوف تعقد في سلطنة عمان-صلالة - تحت عنوان (أمن الموانئ والمرافق الحيوية ) بورقة عمل عن امن المواني يقدمها المستشار البحري عميد بحري متقاعد عبدالله بن ناصر اباالخيل",
    "يسر مكتب آمنون للاستشارات الأمنية أن يهنىء مقام خادم الحرمين الشريفين و سمو ولي عهده الأمين - رعاهم الله - بمناسبة اليوم الوطني السعودي ٩٤ سائلين المولى عز وجل أن يحفظ قيادتنا و وطننا وأن يديم علينا نعمة الأمن والأمان والاستقرار والرخاء",
    "زار عدد من المستشارين معرض “إنترسيك” الدولي للأمن والسلامة في الرياض، حيث اطلعوا على أحدث الابتكارات والحلول التكنولوجية في مجالات الأمن السيبراني والحماية. كما استعرضوا التقنيات المتقدمة التي تهدف إلى تعزيز البنية التحتية الحيوية والأمن العام",
    "عقد مضى زخراً بالنهضة و النماء حافلاً بتنمية متطورة، و ديمومة عطاء أدام الله عز وطننا وقائد مسيرتنا، ودامت راية الوطن خفاقة شامخة في ظل قيادتنا الرشيدة",
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
  "./src/img/news1.jpg",
  "./src/img/news2.jpg",
  "./src/img/news3.png",
  "./src/img/news4.png",
  "./src/img/94.jpeg",
  "./src/img/news5.jpeg",
  "./src/img/news6.jpeg",
  // Add more image paths as needed
];
const textsEn = [
    "Amnoon Security Consulting Office provides consulting in the fields of security and digital security for the public and industrial sectors with global standards and in accordance with the requirements of the Supreme Authority for Industrial Security. This is achieved through a distinguished group of national experts in alignment with the Kingdom's Vision 2030",
    "Amnoon Security Consulting Office participates in the third seminar on the security and safety of critical infrastructure, presenting two working papers delivered by a selection of security consultants. The seminar will be held in Dhofar Governorate, Sultanate of Oman, from September 2-4",
    "Amnoon Security Consulting Office is honored to participate in the third seminar on 'Critical Infrastructure Security,' which will be held in Salalah, Sultanate of Oman, under the title 'Port and Maritime Facility Security.' We will present a working paper on 'The Role of Digital Security in Protecting Critical Infrastructure Data,' delivered by retired Brigadier General Dr. Barakah bin Zamil Al-Hoshan",
    "Amnoon Security Consulting Office is honored to present a working paper at the 'Critical Infrastructure Security' seminar, which will be held in Salalah, Sultanate of Oman, under the title 'Port and Maritime Facility Security.' The paper on airport security will be presented by retired Brigadier General Yusuf bin Ahmed Al-Qahtani",
    "Amnoon Security Consulting Office extends its congratulations to the Custodian of the Two Holy Mosques and His Royal Highness the Crown Prince - may God protect them - on the occasion of the 94th Saudi National Day. We pray to Almighty God to preserve our leadership and our homeland and to grant us the blessings of security, safety, stability, and prosperity",
    "A number of consultants visited the International Security and Safety Exhibition 'Intersec' in Riyadh, where they explored the latest innovations and technological solutions in the fields of cybersecurity and protection. They also reviewed advanced technologies aimed at enhancing critical infrastructure and public safety.",
    "A year has passed full of progress and development, characterized by advanced growth and continuous contributions. May God sustain our nation and the leader of our journey, and may the flag of our country continue to fly high under our wise leadership.",
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
