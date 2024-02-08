import { getRandomColorGrid } from "../tools"

export const PageWelcome = () => {
	return /*html*/`
<div class="page pageWelcome">
	<p>${getRandomColorGrid()}</p>
</div>
`; 
}