import React from "react";
import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
	return (
		<div>
			<div className="bg-success p-4">
				<b className="text-light"> Profile Digital Assistants</b>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						<ProfileCard
							title="Alexa"
							handle="@alexa32"
							image={AlexaImage}
							description="Alexa was created by Amazon."
						/>
					</div>
					<div className="col">
						<ProfileCard
							title="Cortana"
							handle="@cortana21"
							image={CortanaImage}
							description="Cortana was created by Microsoft."
						/>
					</div>
					<div className="col">
						<ProfileCard
							title="Siri"
							handle="@siri01"
							image={SiriImage}
							description="Siri was created by Apple"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
