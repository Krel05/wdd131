const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


function Options(products) {
    const select = document.querySelector("#products");
    let content = ``;
    for (const product of products) {
        let newOption = `<option value="${product.id}">${product.name}</option>`
        content += newOption;
    }
    select.innerHTML = content;
}

Options(products);

const year = document.querySelector("#year");

const y = new Date();

year.innerHTML = `${y.getFullYear()}`

document.querySelector("#lm").textContent = `${document.lastModified}`;




