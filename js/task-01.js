const categoriesNumbers = document.querySelectorAll(`.item`);

console.log( "Number of categories:", categoriesNumbers.length);

categoriesNumbers.forEach((element) => {
    return console.log(`Category: ${element.querySelector("h2").textContent}
Elements:${element.querySelectorAll("li").length}`);
})
