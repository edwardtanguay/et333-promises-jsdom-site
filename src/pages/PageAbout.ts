import { processRecords } from "../tools";

export const PageAbout = () => {
	setTimeout(() => {
		const messageElem = document.querySelector<HTMLParagraphElement>(".message");
		const message2Elem = document.querySelector<HTMLParagraphElement>(".message2");

		if (messageElem) {
			processRecords((recnum) => {
				messageElem.innerHTML = `finished (${recnum} records)`;
			});
		}
		if (message2Elem) {
			processRecords((recnum) => {
				message2Elem.innerHTML = `<span style="color: green">${recnum} records were processed</span>`;
			});
		}
	}, 0);

	return /*html*/ `
<div class="page pageAbout">
	<p class="message">Processing records...</p>
	<p class="message2">Processing records...</p>
</div>
`;
};
