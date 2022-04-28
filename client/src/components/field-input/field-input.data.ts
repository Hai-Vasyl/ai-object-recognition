import FieldInput from "./FieldInput";

export default class FieldInputData {
  public value = "";
  public msg = "";
  public hidden: boolean;
  public title = "";
  public type: string;
  public Element = FieldInput;

  public constructor(title: string, type = "text", hidden = false) {
    this.title = title;
    this.type = type;
    this.hidden = hidden;
  }
}
