const { readFileSync } = require("fs");

exports.data = {
	menu: JSON.parse(readFileSync("./src/data/menu.json", "utf8")),
	phone: JSON.parse(readFileSync("./src/data/phone.json", "utf8")),
	social: JSON.parse(readFileSync("./src/data/social.json", "utf8")),
	work: JSON.parse(readFileSync("./src/data/work.json", "utf8")),
	benefits: JSON.parse(readFileSync("./src/data/benefits.json", "utf8")),
	reviews: JSON.parse(readFileSync("./src/data/reviews.json", "utf8")),
	faq: JSON.parse(readFileSync("./src/data/faq.json", "utf8")),
	team: JSON.parse(readFileSync("./src/data/team.json", "utf8")),
};
