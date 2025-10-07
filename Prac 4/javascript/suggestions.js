document.addEventListener("DOMContentLoaded", () => {
  const suggestionForm = document.getElementById("suggestionForm");
  const suggestionInput = document.getElementById("suggestion");
  const suggestionsFeed = document.getElementById("suggestionsFeed");
  const charCount = document.getElementById("charCount");

  // Character counter
  suggestionInput.addEventListener("input", () => {
    charCount.textContent = `${suggestionInput.value.length}/200`;
  });

  // Add new suggestion card
  suggestionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = suggestionInput.value.trim();
    if (!text) return;

    const newCard = document.createElement("div");
    newCard.classList.add("suggestion-card");
    newCard.innerHTML = `
      <p>${text}</p>
      <div class="card-actions">
        <span class="username">Guest</span>
        <button class="thumbs-up">👍 <span class="like-count">0</span></button>
      </div>
    `;

    suggestionsFeed.appendChild(newCard);
    suggestionInput.value = "";
    charCount.textContent = "0/200";
  });

  // Like button functionality
  suggestionsFeed.addEventListener("click", (e) => {
    if (e.target.classList.contains("thumbs-up")) {
      const countSpan = e.target.querySelector(".like-count");
      countSpan.textContent = parseInt(countSpan.textContent) + 1;
    }
  });
});
