const fsize = document.getElementById("fontsize");
const fcolor = document.getElementById("fontcolor");
const submit = document.getElementById("submit");

// ✅ Save preferences in cookies
submit.addEventListener("click", (event) => {
    event.preventDefault();  // Prevent form submission

    // Store font size and color in cookies
    document.cookie = `fontsize=${fsize.value}px; path=/`;
    document.cookie = `fontcolor=${fcolor.value}; path=/`;

    // Apply the styles immediately
    document.documentElement.style.setProperty('--fontsize', `${fsize.value}px`);
    document.documentElement.style.setProperty('--fontcolor', fcolor.value);

    alert("Preferences saved!");
});

// ✅ Load saved preferences on page load
window.addEventListener("load", () => {
    const cookies = document.cookie.split("; ");

    cookies.forEach(cookie => {
        const [key, value] = cookie.split("=");

        if (key === "fontsize") {
            fsize.value = parseInt(value);  // Remove "px" for the input field
            document.documentElement.style.setProperty('--fontsize', value);
        }

        if (key === "fontcolor") {
            fcolor.value = value;
            document.documentElement.style.setProperty('--fontcolor', value);
        }
    });
});
