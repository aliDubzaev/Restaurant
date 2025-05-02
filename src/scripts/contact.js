function loadContact() {
	const container = document.querySelector('.container')

	const contactBox = document.createElement('div')
	const heading = document.createElement('h2')
	const title = document.createElement('p')
	const address = document.createElement('p')
	const address2 = document.createElement('p')
	const title2 = document.createElement('p')
	const phone = document.createElement('p')

	contactBox.classList.add('contact-box')
	title.classList.add('title')
	title2.classList.add('title')

  heading.textContent = 'Луковые деликатесы';
  title.textContent = 'Наш адрес:';
  address.textContent = 'ул. Луковая, д. 666';
  address2.textContent = 'г. Луковск, 98765-8765';
  title2.textContent = 'Бронирование:';
  phone.textContent = '8 800 555 35 35';

	contactBox.append(heading)
	contactBox.append(title)
	contactBox.append(address)
	contactBox.append(address2)
	contactBox.append(title2)
	contactBox.append(phone)
	container.append(contactBox)
}

export { loadContact }