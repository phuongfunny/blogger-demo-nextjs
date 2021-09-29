import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        </Head>
        <body style={{ backgroundColor: "#efefef" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
