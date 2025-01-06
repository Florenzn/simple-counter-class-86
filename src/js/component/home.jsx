import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter}) => {
	const digits = counter.toString().padStart(6, "0");
    return (
        <div className="text-center">
            <div className="counter-container">
                {digits.split("").map((digit, index) => (
                    <div className="digitos" key={index}>
                        <h1>{digit}</h1>
                    </div>
                ))}
            </div>
        </div>
		);
	};
			
			

export default Home;
