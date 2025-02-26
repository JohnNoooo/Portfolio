document.addEventListener("DOMContentLoaded", function () {
  const carouselImages = document.querySelectorAll(".carousel-image");
  const projectDetails = document.getElementById("projectDetails");
  const modalImage = document.getElementById("modalImage");
  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

  // Project data (replace with your actual data)
  const projects = {
    1: {
      title: "Street Photography",
      description: "Photos from places in Vietnam, Miami, and the USF area.",
      images: [
        "https://i.imgur.com/YJf9wyX.jpeg",
        "https://i.imgur.com/TiINHxX.jpeg",
        "https://i.imgur.com/3EI37MD.jpeg",
        "https://i.imgur.com/Yo8Qeri.jpeg",
        "https://i.imgur.com/PsMz5SF.jpeg",
        "https://i.imgur.com/ZSCKlkU.jpeg",
        "https://i.imgur.com/kF5eAO6.jpeg",
        "https://i.imgur.com/gg4jxrS.jpeg",
        "https://i.imgur.com/ZfGHIlI.jpeg",
        "https://i.imgur.com/i0KthMS.jpeg",
      ],
    },
    2: {
      title: "Concert Photography",
      description: "Concert photos from a variety of bands and artistz.",
      images: [
        "https://i.imgur.com/8ABpxiG.jpeg",
        "https://i.imgur.com/VHN9pz6.jpeg",
        "https://i.imgur.com/Euonyl7.jpeg",
        "https://i.imgur.com/87o5rkG.jpeg",
        "https://i.imgur.com/0PKOvzN.jpeg",
        "https://i.imgur.com/gjLQJ5I.jpeg",
        "https://i.imgur.com/atfgzBw.jpeg",
        "https://i.imgur.com/IzsUeu0.jpeg",
        "https://i.imgur.com/i6ysBZV.jpeg",
        "https://i.imgur.com/qhC1m7U.jpeg",
        "https://i.imgur.com/8EbKauu.jpeg",
      ],
    },
    3: {
      title: "Event Photography",
      description: "Photos shot for the Vietnamese Student Assocation.",
      images: [
        "https://i.imgur.com/n7sW7tt.jpeg",
        "https://i.imgur.com/yGO5Lmr.jpeg",
        "https://i.imgur.com/ZW5wA13.jpeg",
        "https://i.imgur.com/RcxKAMA.jpeg",
        "https://i.imgur.com/W6sDocj.jpeg",
        "https://i.imgur.com/VxgvFUd.jpeg",
        "https://i.imgur.com/ZYCs5sI.jpeg",
        "https://i.imgur.com/jMiEyRs.png",
        "https://i.imgur.com/GvhOdb3.png",
        "https://i.imgur.com/00M8lrC.png",
        "https://i.imgur.com/Cy7LtIP.png",
      ],
    },
    4: {
      title: "Social Media Graphics",
      description:
        "Social Media Graphics created on Canva for my social media intership at the Help Us Grow Foundation",
      images: [
        "https://i.imgur.com/RbQEanL.png",
        "https://i.imgur.com/aCycuio.png",
        "https://i.imgur.com/u6uZJ5I.png",
        "https://i.imgur.com/27KpTz1.png",
        "https://i.imgur.com/v3Mi5m8.png",
        "https://i.imgur.com/fFoawbG.png",
        "https://i.imgur.com/SRf8sr2.png",
        "https://i.imgur.com/Hto5rN0.png",
        "https://i.imgur.com/pVSaMU5.png",
        "https://i.imgur.com/95ZNH6R.png",
      ],
    },
  };

  carouselImages.forEach((image) => {
    image.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");
      const project = projects[projectId];

      if (project) {
        // Populate project details
        projectDetails.innerHTML = `
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <div class="d-flex flex-wrap justify-content-center">
                ${project.images
                  .map(
                    (img) =>
                      `<img src="${img}" alt="${project.title} Image" class="img-fluid project-image" />`
                  )
                  .join("")}
              </div>
            `;

        // Toggle the open class to slide the section open
        projectDetails.classList.toggle("open");

        // Add click event to project images
        const projectImages = document.querySelectorAll(".project-image");
        projectImages.forEach((img) => {
          img.addEventListener("click", function () {
            modalImage.src = this.src;
            imageModal.show();
          });
        });
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const emailButton = document.getElementById("emailButton");
  const contactForm = document.getElementById("contactForm");

  if (emailButton && contactForm) {
    emailButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior
      contactForm.style.display = "block"; // Show the form
      contactForm.classList.toggle("open"); // Toggle the slide effect
    });
  }
});
