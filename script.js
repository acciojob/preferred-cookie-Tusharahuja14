let fsize = document.getElementById("fontsize");
let fcolor = document.getElementById("fontcolor");
let submit = document.getElementById("submit");

submit.addEventListener("click", saveCookies);

function saveCookies() {
    document.cookie = `fontsize=${fsize.value}; path=/`;
    document.cookie = `fontcolor=${fcolor.value}; path=/`;
    
    // Apply styles to CSS variables
    document.documentElement.style.setProperty('--fontsize', fsize.value);
    document.documentElement.style.setProperty('--fontcolor', fcolor.value);
}

window.addEventListener("load", () => {
    let cookies = document.cookie.split("; ");
    
    cookies.forEach(cookie => {
        let [key, value] = cookie.split("=");
        
        if (key === "fontsize") {
            fsize.value = value;
            document.documentElement.style.setProperty('--fontsize', value);  // Apply to CSS variable
        }
        
        if (key === "fontcolor") {
            fcolor.value = value;
            document.documentElement.style.setProperty('--fontcolor', value);  // Apply to CSS variable
        }
    });
});
