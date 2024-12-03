

  const images = [
    "./src/img/Amnoon.png",
    "./src/img/news1.jpg",
    "./src/img/news2.jpg",
    "./src/img/news3.png",
    "./src/img/news4.png",
    "./src/img/94.jpeg",
    "./src/img/news5.jpeg",
    "./src/img/news6.jpeg",
    "./src/img/news7.jpeg",
    "./src/img/news8.jpg",
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
    "شارك مكتب أمنون للاستشارات الأمنية في معرض ومؤتمر سيبكا للأعمال SIBEC 2024  في ابوظبي و خلاله التقي الدكتور عبدالعزيز الحوشان ، المدير التنفيذي ، بالأستاذ Mike Brunzell نائب الرئيس لتطوير الأعمال العالمية NFPA ، وسعادة الاخ الاستاذ ابراهيم لاري المدير التنفيذي- شركة سيبكا والمهندسة دانه كمال مديرة التطوير الدولي للشرق الاوسط NFPA ومشاركة عميد بحري متقاعد عبدالله بن ناصر اباالخيل ، المستشار البحري في مكتب امنون للاستشارات الامنية والأستاذة لبنى الجندي مدير العلاقات والاتصالات تم خلاله بحث سبل وآفاق التعاون",
    "تحتفل سلطنة عمان بالعيد الوطني المجيد 54 ، و بهذه المناسبة تتقدم شركة امنون للاستشارات الامنية باسمى ايات التهاني و التبريكات لصاحب الجلالة السلطان هيثم بن طارق رعاة الله والشعب العماني النبيل بدوام التقدم و الازدهار في ظل هذا العهد الميمون ،وكل عام وسلطنة العز في عز و امن و رخاء",
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
  "./src/img/news7.jpeg",
  "./src/img/news8.jpg",
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
    "Amnoon Security Consulting participated in the SIBEC 2024 Business Exhibition and Conference in Abu Dhabi. During the event, Dr. Abdulaziz Al-Hoshan, the Executive Director, met with Mr. Mike Brunzell, Vice President for Global Business Development at NFPA; Mr. Ibrahim Lari, CEO of SIBEC; and Ms. Dana Kamal, Director of International Development for the Middle East at NFPA. The event also saw the participation of retired Naval Brigadier Abdullah bin Nasser Aba Al-Khail, Maritime Consultant at Amnoon Security Consulting, and Ms. Lubna Al-Jundi, Director of Relations and Communications. Discussions focused on exploring avenues and prospects for cooperation",
    "The Sultanate of Oman celebrates its glorious 54th National Day, and on this occasion, Amnoon Security Consulting extends its heartfelt congratulations and best wishes to His Majesty Sultan Haitham bin Tariq, may God protect him, and to the noble Omani people, wishing continued progress and prosperity under this blessed era. May the Sultanate of Pride always remain in glory, security, and prosperity",
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
