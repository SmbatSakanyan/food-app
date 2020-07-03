import React,{useState,useEffect} from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button, Form, FormControl, Navbar, Nav} from "react-bootstrap";
import Recipe from "./components/Recipe.js";


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
            <Container className="text-center ">
                <Navbar bg="dark" variant="dark" className="navColor">
                    <Navbar.Brand href="/">Best Cook</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"
                                     value={search}
                                     onChange={updateSearch}/>
                        <Button variant="outline-info" type="submit"
                                onClick={getSearch}
                        >Search</Button>
                    </Form>
                </Navbar>
                {/*<Form  inline className="d-inline-block " onSubmit={getSearch}>*/}
                {/*    <FormControl type="text"  value={search} onChange={updateSearch}/>*/}
                {/*    <Button variant="primary" type="submit" onSubmit={getSearch} >Search</Button>*/}
                {/*</Form>*/}
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