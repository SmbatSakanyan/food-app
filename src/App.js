import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Button,Form,FormControl,Col,Row} from "react-bootstrap";
import "./App.css";
import Recipe from "./Recipe.js";

export default function App(){
    const APP_ID = "f88c91e6";
    const APP_KEY ="87c9c1d964e68d9475a7716d215f4a10";

    const[recipes,setRecipes]=useState([]);
    const[search,setSearch]=useState("");
    const[query,setQuery]=useState("chicken");

    useEffect(()=>{
        getRecipes();
    },[query]);

    const getRecipes = async ()=>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data =await response.json();
        setRecipes(data.hits);
    };
    function updateSearch(e) {
        setSearch(e.target.value);
    };
    function getSearch(e){
        e.preventDefault();
        setQuery(search);
    };

    return(
        <div className="App">
            <Container className="text-center">
                <Form  inline className="d-inline-block " onSubmit={getSearch}>
                    <FormControl type="text"  value={search} onChange={updateSearch}/>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>
                {recipes.map(recipe =>(
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                />
            ))}
            </Container>
        </div>
    )
}