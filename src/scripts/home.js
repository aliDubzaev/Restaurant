
function loadHome() {
	const container = document.querySelector('.container')
	container.textContent = ''

	const home = document.createElement('div')
	const heading = document.createElement('h1')
	const text = document.createElement('p')
	const button = document.createElement('button')

	home.classList.add('home')

	heading.textContent = 'Добро пожаловать в "Луковые деликатесы"!'
	text.innerHTML =
		'Мы — ресторан, в котором особое внимание уделяется одному необычному овощу — луку. Наша страсть и креативность позволяют нам создавать бесчисленное множество вкусов и уникальных кулинарных впечатлений, используя только это скромное, но универсальное растение. Мы предлагаем аутентичные вкусовые ощущения всем любителям лука.'
	button.textContent = "попробуйте, какой лук сегодня"

	home.append(heading)
	home.append(text)
	home.append(button)
	container.append(home)
}

export { loadHome }