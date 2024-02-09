import { calculateTaxesForYear } from "../tools";

export const PageInfo = () => {
	return /*html*/`
<div class="page pageInfo">
<p>Taxes are ${calculateTaxesForYear()}</p>
</div>
`; 
}