
import './App.css';
import Navbare from './Components/Navbare';
import Filter from './Components/Filter';
import Add from './Components/Add';
import MovieList from './Components/MovieList';
import {useState} from 'react';
import {movies}from './Components/movies';
import {Switch,Route}from 'react-router-dom';
import Details from './Components/Details';

//console.log(movies)
function App() {
  const [movieList,setmovieList]= useState(movies)
  //fonction for adding a new movieList
 
  const addHandler=(newMovie)=>{
    setmovieList([...movieList,newMovie])
  }
  //fonction for search movieList
  const [search,setsearch] = useState("")

  //fonction for search movieList by rating
  const[rating,setrating]=useState("1")

  return (
    <div className="App">
      <Navbare/>
      <Filter setsearch= {setsearch} rating={rating} setrating={setrating}/> 
      <Add addHandler={addHandler} />
      <Switch>
      <Route exact path="/"><MovieList  movieList= {movieList} search = {search}  rating={rating}/> </Route>
      <Route path="/details/:id" render={(props)=> <Details {...props} list={movies}/>}/>
   
      </Switch>
     
    </div> 
  );
}

export default App;


   