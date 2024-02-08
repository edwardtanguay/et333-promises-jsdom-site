import { getRandomColorGrid } from "../tools";

export const PageWelcome = () => {

	setTimeout(() => {
		const contentElem = document.querySelector(".content");

		if (contentElem) {
			contentElem.innerHTML = getRandomColorGrid();
		}
	}, 0);

	return /*html*/ `
<div class="page pageWelcome">
	<p class="content">Loading...</p>
</div>
`;
};
