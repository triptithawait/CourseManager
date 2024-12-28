document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsSection = document.getElementById("reviewsSection");
  
    // Handle form submission
    reviewForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Get user inputs
      const name = document.getElementById("reviewName").value.trim();
      const message = document.getElementById("reviewMessage").value.trim();
  
      // Validate input
      if (!name || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Create a new review element
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review-card");
  
      reviewCard.innerHTML = `
        <h3>${name}</h3>
        <p>${message}</p>
      `;
  
      // Add the review to the reviews section
      if (reviewsSection.children[0] && reviewsSection.children[0].tagName === "P") {
        reviewsSection.innerHTML = ""; // Remove "No reviews yet" message
      }
      reviewsSection.appendChild(reviewCard);
  
      // Clear the form
      reviewForm.reset();
    });
  });
  