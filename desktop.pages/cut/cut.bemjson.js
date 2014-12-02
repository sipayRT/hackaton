({
	block : 'page',
	title : 'bem-components: cut',
	mods : { theme : 'simple' },
	head : [
		{ elem : 'css', url : '_cut.css' },
		{ elem : 'js', url : '_cut.js' }
	],
	content : [
		{ tag : 'h2', content : 'История создания БЭМ' },
		{
			tag : 'p',
			content : [
				'Однажды, в далёкой-далёкой стране, компания Яндекс начала ',
				'разрабатывать поиск по Интернету и сопутствующие сервисы.'
			]
		},
		{
			block : 'cut',
			mods : { theme : 'hackaton', switcher : 'button', size : 'm' },
			switcher : 'Подробнее',
			expandedText : 'Скрыть',
			content : [
				'Время шло, сервисы развивались и всё больше разработчиков ',
				'интерфейсов вкладывали свои усилия в развитие Яндекса.'
			]
		}
	]
});
