function toggleAccordion(event, index) {
  // Get all accordion contents
  var accContents = document.querySelectorAll(".accordion-content");
  let toggleSigns = document.querySelectorAll(".toggle-sign");

  // Toggle the right accordion content
  if (accContents[index].style.display === "block") {
    accContents[index].style.display = "none";

    toggleSigns[index].innerHTML = "&#43;";
  } else {
    for (var i = 0; i < accContents.length; i++) {
      if (toggleSigns[i]) {
        toggleSigns[i].innerHTML = "&#43;";
      }

      accContents[i].style.display = "none"; // hide others
    }
    accContents[index].style.display = "block"; // show the right one
    if (toggleSigns[index]) {
      toggleSigns[index].innerHTML = "&#215;";
    }
  }
}

function toggleAccordion(event, index) {
  var accContents = document.querySelectorAll(".accordion-content");
  let toggleSigns = document.querySelectorAll(".toggle-sign");

  if (accContents[index].style.maxHeight) {
    // The accordion is currently open, so close it.
    accContents[index].style.maxHeight = null;
    toggleSigns[index].innerHTML = "&#43;"; // Plus sign
  } else {
    // The accordion is currently closed, so open it.
    for (var i = 0; i < accContents.length; i++) {
      accContents[i].style.maxHeight = null; // Close all accordions
      if (toggleSigns[i]) {
        toggleSigns[i].innerHTML = "&#43;";
      }
    }
    // Set max-height to the scrollHeight plus a little to ensure the bottom margin is visible
    accContents[index].style.maxHeight = accContents[index].scrollHeight + "px";
    if (toggleSigns[index]) {
      toggleSigns[index].innerHTML = "&#215;";
    }
  }
}

const accordionData = [
  {
    title: "Minimum requirement",
    description: `Our Healthcare Staff comprises healthcare providers who have successfully completed a thorough screening and quality assurance process. Regular evaluations of their service performance
    are conducted by our Clinical Consultants through personal meetings, incorporating feedback from both clients and Staffing Coordinators. Our team, consisting of over 30 dedicated
    individuals, undergoes comprehensive checks, including criminal record checks, child abuse registry checks, and adult abuse registry checks. Additionally, each member is CPR-certified
    and participates in ongoing monthly education to ensure they remain current in their skills and knowledge.`,
  },
  {
    title: "Caregiver Matching",
    description: `Our Healthcare Staff comprises healthcare providers who have successfully completed a thorough screening and quality assurance process. Regular evaluations of their service performance are conducted by our Clinical Consultants through personal meetings, incorporating feedback from both clients and Staffing Coordinators. Our team, consisting of over 30 dedicated individuals, undergoes comprehensive checks, including criminal record checks, child abuse registry checks, and adult abuse registry checks. Additionally, each member is CPR-certified and participates in ongoing monthly education to ensure they remain current in their skills and knowledge.`,
  },
];

const accordionContainer = document.getElementsByClassName("accordion")[0];

accordionData.forEach((data, index) => {
  // Create the accordion element
  const accordion = document.createElement("div");
  accordion.className = "accordion-item";
  accordion.onclick = (event) => toggleAccordion(event, index);
  accordion.innerHTML = `
  <div class="title">
  <h5>${data.title}</h5>
  <h3 class="toggle-sign">&#43;</h3>
</div>
<p class="accordion-content"> <br>
 ${data.description}
</p>
  `;
  accordionContainer.appendChild(accordion);
});

/////////////
const imagesTitleData = [
  {
    img: "./cards/Image 01.png",
    title: "Personal Care Services",
    description: "Assistance with Activities of Daily Living (ADLs) such as bathing, dressing, grooming, toileting and mobility support.",
  },
  {
    img: "./cards/Image 02.png",
    title: "Companion Services",
    description: "Companionship and social interaction to reduce isolation and enhance emotional well-being.",
  },
  {
    img: "./cards/Image 03.png",
    title: "Nutrition and Meal Planning",
    description: "Planning and preparation of nutritious meals based on dietary preferences and restrictions.",
  },
  {
    img: "./cards/Image 04.png",
    title: "Transportation Assistance",
    description: "Help with transportation for medical appointments, grocery shopping and other essential errands.",
  },
  {
    img: "./cards/Image 05.png",
    title: "Housekeeping and Light Chores",
    description: "Housekeeping tasks, including laundry, dishwashing and maintaining a tidy living environment.",
  },
  {
    img: "./cards/Image 06.png",
    title: "Regular Health Monitoring",
    description: "Regular health check-ins, monitoring vital signs, and communication with healthcare professionals if necessary.",
  },
  {
    img: "./cards/Image 07.png",
    title: "Recreational Activities",
    description: "Engagement in recreational activities and hobbies based on the client’s interests.",
  },
  {
    img: "./cards/Image 08.png",
    title: "24/7 Emergency Support",
    description: "Access to emergency support and assistance, providing peace of mind for both clients and their families.",
  },
  {
    img: "./cards/Image 09.png",
    title: "Care Coordination",
    description: "Coordination with healthcare professionals, specialist and family members to ensure comprehensive care.",
  },
  {
    img: "./cards/Image 10.png",
    title: "Monthly Health Reports",
    description: "Monthly reports summarizing the client’s health status, activities and any notable changes.",
  },
  {
    img: "./cards/Image 11.png",
    title: "Medical Management",
    description: "Medication reminders and assistance with the administration of prescribed medications.",
  },
  {
    img: "./cards/Image 12.png",
    title: "Access to Additional Services",
    description: "Option to access additional specialized services such as physical therapy, specialized nursing care",
    page : "/Service/"
  },
];

const cardsContainer = document.getElementsByClassName("img-frame")[0];

imagesTitleData.forEach((data, index) => {
  // Create the card element
  const card = document.createElement("article");
  card.innerHTML = `
    <img src="${data.img}" alt="${data.title}">
    <div class="text-content">
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <a href="${data.page}" class="btn">Learn More</a>
    </div>
  `;

  cardsContainer.appendChild(card);
});

const reviewsData = [
  {
    review: `One standout aspect of Alizaf Care is their unwavering commitment to creating a comfortable and dignified environment for our loved one. The caregivers demonstrated kindness, patience,
    and empathy, contributing significantly to our loved one's overall well-being.`,
    name: "Mahmud",
  },
  {
    review: `Communication was seamless throughout our engagement with Alizaf Care. The staff was not only responsive but also proactive in keeping us informed about our loved one's progress and any changes in the care plan. This level of transparency fostered trust and a sense of partnership.`,
    name: "Joel",
  },
  {
    review: `The caregivers at Alizaf Care demonstrated a genuine commitment to their work, consistently going above and beyond to ensure the well-being and comfort of our loved one`,
    name: "Roseline & James",
  },
  {
    review: `I cannot express enough gratitude for the outstanding
    in-home care services provided by Alizaf Care. From the moment we engaged with their team, we experienced a level of professionalism and compassion that truly set them apart.`,
    name: "Ann & Brayan",
  },
];

const reviewsContainer = document.getElementsByClassName("review-frame")[0];

reviewsData.forEach((data, index) => {
  // Create the review element
  const review = document.createElement("div");
  review.innerHTML = `
    <p>${data.review}</p>
    <h6>${data.name}</h6>
  `;

  reviewsContainer.appendChild(review);
});
