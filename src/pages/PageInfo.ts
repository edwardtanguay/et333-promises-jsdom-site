import { calculateTaxesForYear } from "../tools";

export const PageInfo = () => {
	setTimeout(async () => {
		const taxesElem = document.querySelector<HTMLSpanElement>(".taxes");

		if (taxesElem) {
			taxesElem.innerHTML = String(await calculateTaxesForYear());
		}
	}, 0);

	return /*html*/ `
<div class="page pageInfo">
	<input>
<p>Taxes are <span class="taxes">(...loading...)</span></p>
</div>
`;
};
