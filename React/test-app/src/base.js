import { Component } from 'react';
import './index.css';


class MainHtml extends Component {

  render() {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <title>React App</title>
        </head>
        <body>
          <h1 class='h1'>Hello, World!</h1>
          <div id="root">
          </div>
        </body>
      </html>`;
    return html;
  }
}

export { MainHtml }