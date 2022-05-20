import AbstractView from "./AbstractView.js";
import { getdayNightMode } from "./dayNightMode.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("homepage");
    }

    async getHTML() {
        return `


		<div class="night-toggle" onClick="switchMode()">
			<div id="moon" class="moon"></div>
		</div>
        `;
    }
}

// <div style="background-color: red">
// <button id="test">description</button>
// </div>
// <button onclick="myFunction()">Toggle dark mode</button>