const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
		'X-RapidAPI-Key': 'dff1cf2fa8msh49c630821c21972p16da73jsn51a856720bc1'
	}
};

let date = document.querySelectorAll('.date')
let max = document.querySelectorAll('.max')
let min = document.querySelectorAll('.min')
let vusnovok = document.querySelectorAll('.vusnovok')

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=49.2&lon=25.1', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		let data = response.data
		for (let i = 0; i < data.length; i += 1) {
			// Этот код выполняется для каждого элемента
			date[i].innerHTML = data[i].datetime
			max[i].innerHTML = data[i].max_temp
			min[i].innerHTML = data[i].min_temp
			if (data[i].max_temp > 15 ) {
				vusnovok[i].innerHTML = "Я і Вася в валяються в фосі"
			  }
			else{
				vusnovok[i].innerHTML = 'хуй а не пянка'
			}
		  }
	
	})
	.catch(err => console.error(err));
