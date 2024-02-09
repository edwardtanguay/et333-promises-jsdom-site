import { getRandomColorGrid } from "../tools";

export const PageWelcome = () => {

	setTimeout(async () => {
		const contentElem = document.querySelector<HTMLParagraphElement>(".content");

		if (contentElem) {
			contentElem.innerHTML = await getRandomColorGrid();
		}
	}, 0);

	return /*html*/ `
<div class="page pageWelcome">
	<p class="content">Loading...</p>
</div>
`;
};
