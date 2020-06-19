var leonardoDiCaprio = {
	'born': 1974, 
	'birth name': 'Leonardo Wilhelm DiCaprio', 
	'most popular movies': ['Titanic', 'A tégla', 'Viharsziget', 'Eredet', 'Django elszabadul'],
	'oscar award winning film': function() {
		leonardoDiCaprio.oscar = prompt('Melyik filmjével nyert oscar díjat Leonardo DiCaprio?');
		alert('Ezzel a filmjével nyert oscar díjat:' + leonardoDiCaprio.oscar + '.');
	}
};

leonardoDiCaprio['oscar award winning film']();