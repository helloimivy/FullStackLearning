function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items = [...this.items].concat([item]);
  };

  this.removeItem = function (item) {
    this.items = this.items.filter((element) => element !== item);
  };

  this.render = function () {
    return `<select>
      ${this.items.map((item) => `<option>${item}</option>`).join("")}
      </select>
      `;
  };
}

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<src=${this.src}>`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const elements = [
  new HtmlSelectElement(["1", "2", "3"]),
  new HtmlImageElement("http://"),
];

for (let element of elements) console.log(element.render());
