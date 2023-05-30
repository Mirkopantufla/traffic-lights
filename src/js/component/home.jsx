import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {

	let algo;

	const [color, setColor] = useState("red");

	const cambiarEstado = (e) => {
		algo = document.querySelector(`.${color}`);
		algo.classList.remove('selected')
		setColor(e.target.classList.item(0))
	}

	useEffect(() => {
		algo = document.querySelector(`.${color}`);
		algo.classList.add('selected')
	}, [color]);

	return (
		<div className="text-center contenedor">
			<div className="support"></div>
			<div className="traffic-light">
				<div id='0' className="red" onClick={cambiarEstado}></div>
				<div id='1' className="yellow" onClick={cambiarEstado}></div>
				<div id='2' className="green" onClick={cambiarEstado}></div>
			</div>
		</div>
	);
};

export default Home;
