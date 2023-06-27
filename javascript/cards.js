document.addEventListener("DOMContentLoaded", function () {
    const tagFilterButtons = document.querySelectorAll(".tag-filter");
    
        
    // Count the occurrences of each tag
    const tagCounts = {};
    const projectTiles = document.querySelectorAll(".project-tile");
    projectTiles.forEach((tile) => {
      const tags = tile.getAttribute("data-tags").split(" ");
      tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
  
    // Include all project tiles in the count for the "all" tag
    const totalProjectCount = projectTiles.length;
    tagCounts["all"] = totalProjectCount;
  
    // Update the tag-filter buttons with the tag counts
    tagFilterButtons.forEach((button) => {
      const tag = button.textContent.toLowerCase();
      const count = tagCounts[tag] || 0;
      button.textContent = `${tag} (${count})`;
    });


    tagFilterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Remove 'active' class from all buttons
        tagFilterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        }); 
        // Add 'active' class to the clicked button
        button.classList.add("active"); 
        // get the tag; need to remove before the parenth
        // since had added the count of each tag to the button above
        const selectedTag = button.textContent.toLowerCase().split(' (')[0];  
        console.log(selectedTag)
        const projectCards = document.querySelectorAll(".project-tile");    
        projectCards.forEach(function (card) {
          const cardTags = card.getAttribute("data-tags").split(" ");
          if (selectedTag === "all" || cardTags.includes(selectedTag)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
});
