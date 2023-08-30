/*----------  SHOW SCROLL UP ---------*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// search bar
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const topics = document.querySelectorAll(".topics-container li");
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      topics.forEach(topic => {
        const topicText = topic.textContent.toLowerCase();
        if (topicText.includes(searchTerm)) {
          topic.style.display = "block";
        } else {
          topic.style.display = "none";
        }
      });
    });
  });


// modal image
  function openModal(imageElement) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var caption = document.getElementById("caption");

  
    modal.style.display = "block";
    modalImage.src = imageElement.src;
    caption.innerHTML = imageElement.nextElementSibling.innerHTML;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  