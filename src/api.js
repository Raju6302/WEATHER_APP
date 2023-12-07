// const url = '/cities';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '13e39af593msh8eb2009e938f44fp12e6d0jsn8aa24e342ee8',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const Weather_API_URL = "https://api.openweathermap.org/data/2.5";

export const Weather_API_Key = "49592b095f92f8673cb60c950592a637";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }