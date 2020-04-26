import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-button",
  styleUrl: "button.scss",
  shadow: true,
})
export class Button {
  @Prop() text: string;

  render() {
    return <div>Hello, World! I'm {this.text}</div>;
  }
}
