import { books } from "./deckare.js"

const cardGrid = document.querySelector('.card-grid')

// console.log('Deckare', books, cardGrid)

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