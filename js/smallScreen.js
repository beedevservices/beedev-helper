console.log("From inside smallScreen JS")

// Define the minimum screen width for the full site
const minWidth = 850;
const homePage = 'index.html'

// Check the screen size when the page loads
window.onload = function() {
    console.log('size on load', window.innerWidth)
    // Check if the screen width is smaller than the minimum width
    if (window.innerWidth < minWidth) {
        // Save the current page URL before redirecting to the small-screen page
        if (!localStorage.getItem('originalPage')) {
            localStorage.setItem('originalPage', window.location.href);
        }

        // Redirect to the small-screen page
        if (!window.location.href.includes("smallScreen.html")) {
            window.location.href = "smallScreen.html";
        }
    } else {
        // If resizing back to a larger screen, redirect back to the original page
        const originalPage = localStorage.getItem('originalPage');
        if (originalPage && window.location.href.includes("smallScreen.html")) {
            window.location.href = originalPage;
            localStorage.removeItem('originalPage');  // Clean up after restoring
        }
    }
};

// Optionally, you can check for resizing the window as well
window.onresize = function() {
    console.log('size on resize', window.innerWidth)
    if (window.innerWidth < minWidth) {
        // Save the current page URL before redirecting to the small-screen page
        if (!localStorage.getItem('originalPage')) {
            localStorage.setItem('originalPage', window.location.href);
        }

        // Redirect to the small-screen page if necessary
        if (!window.location.href.includes("smallScreen.html")) {
            window.location.href = "smallScreen.html";
        }
    } else {
        // Redirect back to the original page if resizing back to a larger screen
        const originalPage = localStorage.getItem('originalPage');
        if (originalPage && window.location.href.includes("smallScreen.html")) {
            window.location.href = originalPage;
            localStorage.removeItem('originalPage');  // Clean up after restoring
        }
    }
};