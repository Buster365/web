// Create the page structure
document.title = "GyanHub";

const body = document.body;
body.style.fontFamily = "Arial, sans-serif";
body.style.margin = "0";
body.style.padding = "0";
body.style.boxSizing = "border-box";
body.style.backgroundColor = "#f4f4f4";

// Header
const header = document.createElement("header");
header.style.backgroundColor = "#4CAF50";
header.style.padding = "10px 20px";
header.style.color = "white";
header.style.textAlign = "center";
header.innerHTML = "<h1>GyanHub</h1>";
body.appendChild(header);

// Navigation Menu
const nav = document.createElement("nav");
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.background = "#333";
nav.style.padding = "10px 0";
body.appendChild(nav);

const menuItems = ["Home", "About", "Services", "Contact"];
menuItems.forEach(item => {
    const link = document.createElement("a");
    link.href = `#${item.toLowerCase()}`;
    link.textContent = item;
    link.style.color = "white";
    link.style.padding = "10px 20px";
    link.style.textDecoration = "none";
    link.onmouseover = () => (link.style.background = "#555");
    link.onmouseout = () => (link.style.background = "");
    nav.appendChild(link);
});

// Search Bar
const searchContainer = document.createElement("div");
searchContainer.className = "search-container";
searchContainer.style.textAlign = "center";
searchContainer.style.margin = "20px 0";
body.appendChild(searchContainer);

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search GyanHub...";
searchInput.style.width = "60%";
searchInput.style.padding = "10px";
searchInput.style.fontSize = "16px";
searchInput.style.border = "1px solid #ccc";
searchInput.style.borderRadius = "5px";
searchContainer.appendChild(searchInput);

const searchButton = document.createElement("button");
searchButton.textContent = "Search";
searchButton.style.padding = "10px 15px";
searchButton.style.fontSize = "16px";
searchButton.style.backgroundColor = "#4CAF50";
searchButton.style.color = "white";
searchButton.style.border = "none";
searchButton.style.borderRadius = "5px";
searchButton.style.cursor = "pointer";
searchButton.onmouseover = () => (searchButton.style.backgroundColor = "#45a049");
searchButton.onmouseout = () => (searchButton.style.backgroundColor = "#4CAF50");
searchButton.onclick = () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
    } else {
        alert("Please enter a search term!");
    }
};
searchContainer.appendChild(searchButton);
