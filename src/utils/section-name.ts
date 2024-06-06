export const sections = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
];

export type SectionName = (typeof sections)[number]["name"];
