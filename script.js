document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll("nav a").forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

// Alert when clicking "Contact Me"
document.querySelector("section a").addEventListener("click", function (event) {
    alert("Opening your email app to contact me...");
});

// Image click effect - enlarges image in a popup
document.querySelectorAll("header img").forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,0.8)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";
        popup.style.zIndex = "1000";

        const bigImage = document.createElement("img");
        bigImage.src = img.src;
        bigImage.style.maxWidth = "90%";
        bigImage.style.maxHeight = "90%";
        bigImage.style.borderRadius = "10px";

        popup.appendChild(bigImage);
        document.body.appendChild(popup);

        popup.addEventListener("click", () => popup.remove());
    });
});
