import ChallengeCSS from "../ChallengeCSS";
import "./App.css";

function App() {
	const car = [
		{ id: 1, nome: "M3", km: 12333, marca: "BMW" },
		{ id: 2, nome: "Panamera", km: 0, marca: "Porsche" },
		{ id: 3, nome: "Enzo", km: 120000, marca: "Ferrari" },
	];

	return (
		<>
			<div className="">
				<h1 className="title">Cars Showroom</h1>
				<div className="car-container">
					{car.map((cars) => (
						<ChallengeCSS key={car.id} nome={cars.nome} km={cars.km} marca={cars.marca} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
