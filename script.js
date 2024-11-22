const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque alias nisi enim corrupti aliquid veniam eaque, voluptatum beatae aliquam ea sit nobis cupiditate natus dignissimos ducimus hic voluptate inventore. Facilis!",
    author: "John Doe",
    img: "/assets/Layer-21.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque alias nisi enim corrupti aliquid veniam eaque, voluptatum beatae aliquam",
    author: "Jane Smith",
    img: "/assets/Layer-21.png",
  },
  {
    quote: "Highly recommend to everyone!",
    author: "Michael Johnson",
    img: "/assets/Layer-21.png",
  },
];




function showModal(imageUrl) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imageUrl || '/assets/Frame.jpg'; // Default to mobile image if no specific image is passed
  modal.classList.remove('hidden');
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.add('hidden');
}

let currentIndex = 0;

function updateTestimonial() {
  const testimonialQuote = document.getElementById("testimonial-quote");
  const testimonialAuthor = document.getElementById("testimonial-author");
  const testimonialImg = document.getElementById("testimonial-img");
  const testimonialCard = document.getElementById("testimonial-card");

  // Fade out effect
  testimonialCard.classList.add("opacity-0");

  setTimeout(() => {
    testimonialQuote.innerText = testimonials[currentIndex].quote;
    testimonialAuthor.innerText = testimonials[currentIndex].author;
    testimonialImg.src = testimonials[currentIndex].img;

    // Fade in effect
    testimonialCard.classList.remove("opacity-0");
  }, 500); // Match this with the duration of the CSS transition
}

// Update testimonial on page load
updateTestimonial();

// Handle button clicks
document.getElementById("prev-button").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

document.getElementById("next-button").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
});

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileMenuOverlay");

  // Toggle mobile menu and overlay visibility
  mobileMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

const toggleButton = document.querySelector(".toggle-button");

// Add event listener for swipe functionality
function handleSwipe(event) {
  // Your swipe handling logic here
}
document.addEventListener("touchstart", handleSwipe);

function toggleCheckbox(selectedLabel) {
  // Find all radio button labels
  const labels = document.querySelectorAll(".checkbox-button");

  // Loop through each label to reset styles and apply to the selected one
  labels.forEach((label) => {
    const input = label.querySelector('input[type="radio"]');
    const checkmark = label.querySelector(".checkmark");

    // Reset styles for unselected labels
    if (label !== selectedLabel) {
      label.classList.remove("bg-blue-100", "border-blue-500", "text-blue-700");
      checkmark.classList.replace("text-blue-500", "text-gray-300");
      input.checked = false;
    }
  });

  // Apply active styles to the selected label
  const selectedCheckmark = selectedLabel.querySelector(".checkmark");
  selectedLabel.classList.add(
    "bg-blue-100",
    "border-blue-500",
    "text-blue-700"
  );
  selectedCheckmark.classList.replace("text-gray-300", "text-blue-500");
  selectedLabel.querySelector("input[type='radio']").checked = true;
}

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});
document.onkeydown = (e) => {
  if (e.key == "F12") {
    e.preventDefault();
  }
  if ((e.ctrlKey && e.key == "u") || (e.ctrlKey && e.key == "U")) {
    e.preventDefault();
  }
  if (
    (e.ctrlKey && e.shiftKey && e.key == "I") ||
    (e.ctrlKey && e.key == "i")
  ) {
    e.preventDefault();
  }
  if (
    (e.ctrlKey && e.shiftKey && e.key == "C") ||
    (e.ctrlKey && e.key == "c")
  ) {
    e.preventDefault();
  }
  if (
    (e.ctrlKey && e.shiftKey && e.key == "J") ||
    (e.ctrlKey && e.key == "j")
  ) {
    e.preventDefault();
  }
};
