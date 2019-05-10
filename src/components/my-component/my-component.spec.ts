import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component'
// import { Component, h } from '@stencil/core';

it('test shadow root innerHTML', async () => {
  const page = await newSpecPage({
    components: [MyComponent],
    html: ` <my-component first="A" last="B"></my-component>`,
  });
  // expect(page.root).toEqualHtml(`
  //   <my-component class="hydrated" first="A" last="B">
  //     <shadow-root>
  //     <div>Hello, World! I'm A B</div>
  //     </shadow-root>
  //   </my-component>
  // `);
  expect(page.root).toEqualHtml(`
    <my-component class="hydrated" first="A" last="B">
      <shadow-root>
      <div class="outer">
        <div class="abcd">
          A B
        </div>
      </shadow-root>
    </my-component>
  `);
});