import { readFile, writeFile } from "node:fs/promises";

class LiteralParser {
  constructor(text, position) {
    this.text = text;
    this.position = position;
  }

  skipWhitespace() {
    while (/\s/.test(this.text[this.position] ?? "")) this.position += 1;
  }

  parse() {
    this.skipWhitespace();
    return this.parseValue();
  }

  parseValue() {
    this.skipWhitespace();
    const character = this.text[this.position];
    if (character === "{") return this.parseObject();
    if (character === "[") return this.parseArray();
    if (character === '"') return this.parseString();
    if (this.text.startsWith("!0", this.position)) {
      this.position += 2;
      return true;
    }
    if (this.text.startsWith("!1", this.position)) {
      this.position += 2;
      return false;
    }
    if (this.text.startsWith("null", this.position)) {
      this.position += 4;
      return null;
    }
    const number = this.text.slice(this.position).match(/^-?\d+(?:\.\d+)?/);
    if (number) {
      this.position += number[0].length;
      return Number(number[0]);
    }
    throw new Error(`Unsupported literal at ${this.position}: ${this.text.slice(this.position, this.position + 60)}`);
  }

  parseArray() {
    const values = [];
    this.position += 1;
    this.skipWhitespace();
    while (this.text[this.position] !== "]") {
      values.push(this.parseValue());
      this.skipWhitespace();
      if (this.text[this.position] === ",") {
        this.position += 1;
        this.skipWhitespace();
      } else if (this.text[this.position] !== "]") {
        throw new Error(`Expected comma or ] at ${this.position}`);
      }
    }
    this.position += 1;
    return values;
  }

  parseObject() {
    const value = {};
    this.position += 1;
    this.skipWhitespace();
    while (this.text[this.position] !== "}") {
      const key = this.parseKey();
      this.skipWhitespace();
      if (this.text[this.position] !== ":") throw new Error(`Expected colon at ${this.position}`);
      this.position += 1;
      value[key] = this.parseValue();
      this.skipWhitespace();
      if (this.text[this.position] === ",") {
        this.position += 1;
        this.skipWhitespace();
      } else if (this.text[this.position] !== "}") {
        throw new Error(`Expected comma or } at ${this.position}`);
      }
    }
    this.position += 1;
    return value;
  }

  parseKey() {
    this.skipWhitespace();
    if (this.text[this.position] === '"') return this.parseString();
    const match = this.text.slice(this.position).match(/^[A-Za-z_$][\w$]*/);
    if (!match) throw new Error(`Expected object key at ${this.position}`);
    this.position += match[0].length;
    return match[0];
  }

  parseString() {
    const start = this.position;
    this.position += 1;
    let escaped = false;
    while (this.position < this.text.length) {
      const character = this.text[this.position];
      if (!escaped && character === '"') {
        this.position += 1;
        return JSON.parse(this.text.slice(start, this.position));
      }
      escaped = !escaped && character === "\\";
      if (character !== "\\") escaped = false;
      this.position += 1;
    }
    throw new Error("Unterminated string literal");
  }
}

const bundlePath = "/home/ubuntu/lifeecode-site-recovery/migration-source/live-site.bundle.js";
const variable = process.argv[2] ?? "g2";
const outputPath = process.argv[3] ?? "/home/ubuntu/lifeecode-site-recovery/migration-source/briefs.json";
const bundle = await readFile(bundlePath, "utf8");
const declaration = `${variable}=`;
const declarationPosition = bundle.indexOf(declaration);
if (declarationPosition < 0) throw new Error(`Array declaration ${declaration} was not found.`);

const parser = new LiteralParser(bundle, declarationPosition + declaration.length);
const items = parser.parse();
if (!Array.isArray(items) || items.length === 0) throw new Error(`No values were extracted from ${variable}.`);

await writeFile(outputPath, `${JSON.stringify(items, null, 2)}\n`);
console.log(JSON.stringify({ variable, itemCount: items.length, outputPath }));
