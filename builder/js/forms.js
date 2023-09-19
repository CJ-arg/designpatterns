class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }
  getContent() {}

  getLabel(control) {
    return ` <label > ${control.text}</label>`;
  }
  getInput(control) {
    return `<input type="${control.type}"
            id="${control.name}"
            name="${control.name}"
        />`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }
  reset() {
    this.action = "";
    this.controls = [];
  }
  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: "text",
    });
    return this;
  }

  build() {
    const frm = new Form(this.controls, this.action);
    this.reset();
    return frm;
  }
}

// builder 1
const frmBuilder = new FormBuilder();
const formPeople = frmBuilder
  .setAction("add.php")
  .setText("firstName", "Nombre")
  .setText("lastName", "Apellidos")
  // .setCheckBox("drinker", "Es bebedor?")
  // .setColor("favoriteColor", "Color favorito")
  .build();
// form1.innerHTML = formPeople.getContent();
console.log(formPeople);
