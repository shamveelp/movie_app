import Counter from "./components/Count"
import MovieCard from "./components/MovieCard";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Favorites from "./pages/Fovorites";
import NavBar from "./components/NavBar";
import './css/App.css'
import { MovieProvider } from "./contexts/MovieContext";


function App() {
  const movieNumber = 2;

  return(
    <>
    {/* <div> */}
        {/* <Counter /> */}
        {/* <Text display="Hello Bro" /> */}
        {/* {movieNumber==1?(
          <MovieCard movie={{url:"https://avatars.githubusercontent.com/u/77664311?v=4",title:"After Life", release_date:"2055"}}/>
        ) : ( 
        <MovieCard movie={{url:"https://avatars.githubusercontent.com/u/77664311?v=4",title:"Before Time", release_date:"20111"}}/>
        )
        } */}
    {/* </div> */}
    

    {/* <div>
      <Home></Home>

    </div> */}

    <MovieProvider>
      <div>
        <NavBar/>
      </div>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>

      

    
    </>
  );
}

// function Text({display}) {
//   return(
//     <div>
//       <p>Hello World: {display}</p>
//     </div>
//   );
// }

export default App
