import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { StoreProvider } from "./Store/Store";
import "./Styles/general.scss";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
