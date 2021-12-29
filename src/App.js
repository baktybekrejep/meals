import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import Main from "./components/Main";
import MealInfo from "./components/MealInfo";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import FromIngs from "./components/FromIngs";


function App() {

    return (
    <div>
        <Header/>
      <Routes>
          <Route path={"/"} element={<Main/>}/>
          <Route path={"/meals/:id"} element={<MealInfo/>}/>
          <Route path={"/search/:name"} element={<SearchResults/>}/>
          <Route path={"/ings/:ing"} element={<FromIngs/>}/>
          <Route path="*" element={<Navigate to= "/"/>}/>


      </Routes>


    </div>
  );
}

export default App;
