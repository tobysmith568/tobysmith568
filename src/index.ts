import * as Data from "./data.json";
import { writeFileSync } from "fs";

const result = `### Hi!

### Click the tags below to see my work:

${tags()}

### Find me here:

${links()}

Find my university projects <a href="https://github.com/tobysmith568-university">here</a>.  
Find some projects I have collaborated on <a href="https://github.com/TobyAndToby">here</a>.
`;

writeFileSync("./README.md", result, { encoding: "utf8" });

function tags(): string {
  const lines: string[] = [];

  for (const tag of Data.tags) {
    const searchLink = `https://github.com/search?q=${tagAccounts()}+${tag.term}`;
    const shieldLink = `https://img.shields.io/badge/${tag.label}-%23${tag.colour}.svg?style=for-the-badge&logo=${tag.logo}&logoColor=${tag.logoColour}&link=${searchLink}`;
    lines.push(`<a href="${searchLink}"><img src="${shieldLink}"/></a>`);
  }

  return lines.join("\n");
}

function tagAccounts(): string {
  const users: string[] = [];

  for (const account of Data.accounts) {
    users.push(`user%3A${account}`);
  }

  return users.join("+");
}

function links(): string {
  const lines: string[] = [];

  for (const link of Data.links) {
    const shieldLink = `https://img.shields.io/badge/${link.label}-%23${link.colour}.svg?style=for-the-badge&logoColor=${link.logoColour}&link=${link.url}`;
    lines.push(`<a href="${link.url}"><img src="${shieldLink}"/></a>`);
  }

  return lines.join("\n");
}
