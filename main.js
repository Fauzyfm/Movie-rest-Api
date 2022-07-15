
const root = document.getElementById('root')
const btn = document.getElementById('btn')
btn.addEventListener('click', function() {
const search = document.getElementById('default-search')
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'bbdc0d2b3fmshfbf690b9781a0ebp18fee1jsn1215f00adab3',
				'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
			}
		};
		
		fetch('https://advanced-movie-search.p.rapidapi.com/search/movie?query='+ search.value +'&page=1', options)
			.then(response => response.json())
			.then(response => {
				let list = response.results
				list.map(data => {
					const poster = data.poster_path
					const title = data.title
					const id_button = data.id
					const overview = data.overview
					const vote = data.vote_average
					const root = document.getElementById('root')
					// document.getElementById('root'). innerHTML = '';
					const loading = `
					<div id="spinner">
					
<svg role="status" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
</svg>
</div>

					`

					document.getElementById('root').innerHTML = loading
					const card = `
						<div class="max-w-sm bg-white m-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
						<a href="#" id='card'>
							<img class="rounded-t-lg" src=${poster} alt="">
						</a>
						<div class="p-5">
							<a href="#">
								<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
							</a>
							<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${overview}</p>
							<span class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900 ">${vote}</span>
							<button id='btn_id' value=${id_button} href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								Read more
								<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</button>
						</div>
						</div>
						`
					
						// var pembuang = document.getElementById('container')
						// const cards = document.getElementById('card')
						// pembuang.removeChild(cards)
					const time = setTimeout(MemunculkanCard, 3500)
					function MemunculkanCard() {
						document.getElementById('root').innerHTML += card;
						const spinner = document.querySelector('#spinner')
						spinner.innerHTML = '';
					}
					// const id_value = document.getElementById('btn_id')
					// id_value.addEventListener('click', function(){
					// 	console.log(id_value.value)
					// })


					search.value = null;
				})
			
			
			})
			.catch(err => console.error(err));

})

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9f8c61aeb1msh25975ea3be183cbp134a84jsnd9aa6e344e93',
// 		'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
// 	}
// };

// fetch('https://advanced-movie-search.p.rapidapi.com/genre/movie/list', options)
// 	.then(response => response.json())
// 	.then(response => {

// 		const data = response.genres
// 		data.forEach((list) => {
// 			console.log(list.name)
// 		} )
// 	})
// 	.catch(err => console.error(err));

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9f8c61aeb1msh25975ea3be183cbp134a84jsnd9aa6e344e93',
		'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
	}
};

fetch('https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=254', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



