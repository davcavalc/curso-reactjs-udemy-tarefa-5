import React from "react";
import styles from "./ChallengeCSS.module.css";

const ChallengeCSS = ({ nome, km, marca }) => {
    function CarroNovo() {
        return (
          <>
            <p style={{color:"green",textTransform:"uppercase"}}>O carro é novo.</p>
          </>
        )
      }
    
      function CarroVelho() {
        return (
          <>
            <p style={{color:"red",textTransform:"uppercase"}}>O carro é velho/usado.</p>
          </>
        )
      }
	return (
		<>
			<div className={styles.card}>
				<h1>{nome}</h1>
				<li>KM: {km}</li>
                <li>Marca: {marca}</li>
                {km > 0 ? <CarroVelho/> : <CarroNovo/>} 
			</div>
		</>
	);
};

export default ChallengeCSS;
