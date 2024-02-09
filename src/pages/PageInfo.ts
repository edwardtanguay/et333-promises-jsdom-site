import { calculateTaxesForYear } from "../tools";

export const PageInfo = () => {
	setTimeout(async () => {
		const taxes2020Elem =
			document.querySelector<HTMLSpanElement>(".taxes2020");
		const taxes2021Elem =
			document.querySelector<HTMLSpanElement>(".taxes2021");
		const taxes2022Elem =
			document.querySelector<HTMLSpanElement>(".taxes2022");

		if (taxes2020Elem && taxes2021Elem && taxes2022Elem) {
			const promise2020 = calculateTaxesForYear();
			const promise2021 = calculateTaxesForYear();
			const promise2022 = calculateTaxesForYear();

			// const [taxes2020, taxes2021, taxes2022] = await Promise.all([promise2020, promise2021, promise2022]);
			// Promise.any([promise2020, promise2021, promise2022]).then((value:number) => console.log(value))
			promise2020.then((value) => {
				taxes2020Elem.innerHTML = String(value);
			});
			promise2021.then((value) => {
				taxes2021Elem.innerHTML = String(value);
			});
			promise2022.then((value) => {
				taxes2022Elem.innerHTML = String(value);
			});
		}
	}, 0);

	return /*html*/ `
<div class="page pageInfo">
	<input class="message"/>
	<p>2020 Taxes: <span class="taxes2020"><i class="fa fa-spinner" aria-hidden="true"></i>
</span></p>
	<p>2021 Taxes: <span class="taxes2021"><i class="fa fa-spinner" aria-hidden="true"></i>
</span></p>
	<p>2022 Taxes: <span class="taxes2022"><i class="fa fa-spinner" aria-hidden="true"></i>
</span></p>
</div>
`;
};
