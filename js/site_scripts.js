document.addEventListener("DOMContentLoaded", function () {
    // Create partners section
    const partnersSection = document.createElement("section");
    const partnersList = document.createElement("ul");
    partnersList.id = "partners";

    // Partners data
    const partners = [
        { src: "images/partner-bustour.png", alt: "Partner 1" },
        { src: "images/partner-rentalbike.png", alt: "Partner 2" },
        { src: "images/partner-tourgroup.png", alt: "Partner 3" },
        { src: "images/partner-cabinrental.png", alt: "Partner 4" },
        { src: "images/partner-campingadv.png", alt: "Partner 5" },
        { src: "images/partner-collegetours.png", alt: "Partner 6" }
    ];

    // Loop through partners and create list items
    partners.forEach(function(partner) {
        const listItem = document.createElement("li");
        const img = document.createElement("img");
        img.src = partner.src;
        img.alt = partner.alt;
        listItem.appendChild(img);
        partnersList.appendChild(listItem);
    });

    // Append partners list to the section
    partnersSection.appendChild(partnersList);

    // Append the section before the footer
    const container = document.querySelector(".container");
    const footer = document.querySelector("footer");
    container.insertBefore(partnersSection, footer);
});
