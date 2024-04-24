import React from "react";

//include images into your bundle
import { Header } from './Header';
import { ToDoList } from "./ToDoList";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Header/>
			<ToDoList/>
			<Footer/>
		</div>
	);
};

export default Home;
