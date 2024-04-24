const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
	const categoryName = category.querySelector("h2").textContent;
	const categoryItems = category.querySelectorAll("ul li");
	console.log(`Category: ${categoryName}`);
	console.log(`Number of items: ${categoryItems.length}`);
});