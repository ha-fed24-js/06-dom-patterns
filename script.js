import { books } from "./deckare.js"

const cardGrid = document.querySelector('.card-grid')

// console.log('Deckare', books, cardGrid)
addBooks(books)

function addBooks(books) {
	books.forEach(book => {
		// Skapa DOM-element
		const card = document.createElement('section')
		const cardTitle = document.createElement('h3')
		const cardAuthor = document.createElement('p')
		const cardPrice = document.createElement('p')

		// Lägg till innehåll till elementen
		card.classList.add('card')

		cardTitle.innerText = book.title
		cardAuthor.innerText = book.author
		cardPrice.innerText = book.price

		// Lägg in element i parent
		card.append(cardTitle)
		card.append(cardAuthor)
		card.append(cardPrice)

		// Lägg till "card" på sidan
		cardGrid.append(card)
	})
}



const cardPriceButton = document.querySelector('#card-price-button')
cardPriceButton.addEventListener('click', () => {
	// öka priset 10% -> modifiera listan med lista.map eller vanlig for-loop
	// ta bort alla cards
	// lägg till cards igen - kan vi använda en funktion?

	let expensiveBooks = books.map(item => {
		return {
			...item,
			price: item.price * 1.10
		}
	})
	// let expensiveBooks2 = books.map(item => ({
	// 	...item,
	// 	price: item.price * 1.10
	// }))
	// console.log('10% dyrare: ', expensiveBooks)
	cardGrid.innerHTML = ''
	addBooks(expensiveBooks)
})
