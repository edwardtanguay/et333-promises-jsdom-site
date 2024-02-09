import { getRandomColorGrid } from "../tools";

export const PageWelcome = () => {

	setTimeout(async () => {
		const contentElem = document.querySelector<HTMLParagraphElement>(".content");

		const html = await getRandomColorGrid();

		if (contentElem) {
			contentElem.innerHTML = html;
		}
	}, 0);

	return /*html*/ `
<div class="page pageWelcome">
	<p class="content">Loading...</p>
</div>
`;
};
