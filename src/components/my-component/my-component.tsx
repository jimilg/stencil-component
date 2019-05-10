import { Component, Element, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;
  /**  element */
  @Element() element: HTMLElement

  private getText(): string {
    // resourcesUrl : /Users/e074694/dxp/sample-latest/my-component/node_modules/@stencil/core/dist/runtime/index.js
    return format(this.first, this.middle, this.last);
  }

  /** actions to be performed after component is loaded */
  componentDidLoad() {
    if (this.getText()) {
      // RTE
      // console.log(this.element)
      console.log(this.getText())
      this.element.shadowRoot.querySelector('.abcd').innerHTML = this.getText()
    }
  }

  handleClick(event: any) {
    console.log(event.target)
    let boldText = event.target.querySelector('b').innerText;
    console.log(boldText);
  }

  render() {
    // return <div class='abcd'>Hello, World! I'm {this.getText()}</div>;
    return (
      <div class="outer">
        <div class='abcd' onClick={this.handleClick.bind(this)}></div>
      </div>
    );

  }
}
