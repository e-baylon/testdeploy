/* 
swap base url: 'https://swapi.dev/api/'

initial query people?search=luke'

*/


function SwapiModel() {
    this.apiBaseURL = 'https://swapi.dev/api';

    // init functino is called by the searchController to init the UI of the resultView

    this.init = function() {
        const result = this.query('https://swapi.dev/api/people?search=luke')
        return result
    }

    this.query = async function(url) {
        const req = await fetch(url)
        const res = await req.json()
        return res
    }

}

export default SwapiModel