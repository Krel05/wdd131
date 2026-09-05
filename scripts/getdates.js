const currentyear = document.querySelector("#currentyear");
const today = new Date();

document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;

currentyear.innerHTML = `${today.getFullYear()}`;

