const currentyear = document.querySelector("#currentyear");
const today = new Date();

document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;

currentyear.innerHTML = `&copy <span>${today.getFullYear()}</span> | Jorge Gabriel Mena Santes | Mexico City`;

