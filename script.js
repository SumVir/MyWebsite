window.addEventListener("load", function() {
    const loadingContainer = document.querySelector(".lds-roller");
    if (loadingContainer) {
        // Delay for 2 seconds (2000 milliseconds) before hiding the loading sign
        setTimeout(function() {
            loadingContainer.style.display ="none"; // Hide the loading sign
        }, 3000);
    }
});

