 /*
                                             MVC Model View Control
                                             SearchView
                                             ResultsView
                                             Model
                                             Controller(Search View)'
                                */
 import SwapiModel from './models/swapi.js'
 import SearchView from './views/search-view'
 import ResultsView from './views/results-view'
 import SearchController from './controllers/search-controller'


 // creating an instance of the SwapiModel
 const model = new SwapiModel();
 const searchView = new SearchView('#search');
 const resultView = new ResultsView('#results');
 const searchController = new SearchController(model, searchView, resultView)

 console.log(searchController)