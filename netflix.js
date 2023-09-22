document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".question");
    question.addEventListener("click", () => {
      // Toggle the 'active' class to show/hide the answer
      item.classList.toggle("active");

      item.children[0].children[1].classList.toggle("plus");
    });
  });
});
