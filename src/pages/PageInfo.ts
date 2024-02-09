import { calculateTaxesForYear } from "../tools";

export const PageInfo = () => {
	setTimeout(async () => {
		const taxes2020Elem = document.querySelector<HTMLSpanElement>(".taxes2020");
		const taxes2021Elem = document.querySelector<HTMLSpanElement>(".taxes2021");
		const taxes2022Elem = document.querySelector<HTMLSpanElement>(".taxes2022");

		if (taxes2020Elem && taxes2021Elem && taxes2022Elem) {
			taxes2020Elem.innerHTML = String(await calculateTaxesForYear());
			taxes2021Elem.innerHTML = String(await calculateTaxesForYear());
			taxes2022Elem.innerHTML = String(await calculateTaxesForYear());
		}
	}, 0);

	return /*html*/ `
<div class="page pageInfo">
	<p>2020 Taxes: <span class="taxes2020">...loading...</span></p>
	<p>2021 Taxes: <span class="taxes2021">...loading...</span></p>
	<p>2022 Taxes: <span class="taxes2022">...loading...</span></p>
</div>
`;
};
