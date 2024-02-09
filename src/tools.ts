import * as tools from "./tools";

export const getCurrentUrl = () => {
	return window.location.href;
};

export const getCurrentPageIdCode = () => {
	const url = tools.getCurrentUrl();
	const parts = url.split("/");
	return parts[parts.length - 1];
};

/**
 * REPLACE ALL OCCURANCES IN A STRING:
 *
 * qstr.replaceAll("This is a tost.", "o", "e");
 *
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};

export const cleanCharactersToAscii = (text: string) => {
	text = tools.replaceAll(text, "Ü", "ue");
	text = tools.replaceAll(text, "ü", "ue");
	text = tools.replaceAll(text, "Ö", "oe");
	text = tools.replaceAll(text, "ö", "oe");
	text = tools.replaceAll(text, "Ä", "oe");
	text = tools.replaceAll(text, "ä", "oe");
	text = tools.replaceAll(text, "ß", "ss");
	text = tools.replaceAll(text, " ", "");
	return text;
};

export const calculateTaxesForYear = () => {
	const secondsToWait = tools.getRandomNumber(1, 5);
	return new Promise<number>((resolve) => {
		setTimeout(() => {
			resolve(234344.34);
		}, secondsToWait * 1000);
	});
};

export const getRandomNumber = (start = 0, end = 9) => {
	return Math.floor(Math.random() * (end - start + 1)) + start;
};

export const getRandomColorGrid = (width = 1000, height = 200) => {
	return new Promise<string>((resolve) => {
		let html = "";

		const colors = ["red", "green", "blue", "yellow"];

		html += "<table>";

		for (let y = 1; y <= height; y++) {
			html += "<tr>";

			for (let x = 1; x <= width; x++) {
				const rand = tools.getRandomNumber();
				const randomIndex = tools.getRandomNumber(0, colors.length - 1);
				const randomColor = colors[randomIndex];
				html += `<td style="color: ${randomColor}">${rand}</td>`;
			}
		}
		html += "</tr>";

		html += "</table>";

		resolve(html);
	});
};
