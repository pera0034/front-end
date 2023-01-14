import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import "./components/public/styles/styles.css";

import App from "./components/App";

render(<Router>
        <App />
        </Router>, 
        document.getElementById("wrapper")
);