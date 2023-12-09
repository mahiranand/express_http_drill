const express = require("express");
const uuid = require("uuid");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome To Home Page");
  res.end();
});

app.get("/html", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
          <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
          <p> - Martin Fowler</p>
    
      </body>
    </html>`);
});

app.get("/json", (req, res) => {
  res.json({
    slideshow: {
      author: "Yours Truly",
      date: "date of publication",
      slides: [
        {
          title: "Wake up to WonderWidgets!",
          type: "all",
        },
        {
          items: [
            "Why <em>WonderWidgets</em> are great",
            "Who <em>buys</em> WonderWidgets",
          ],
          title: "Overview",
          type: "all",
        },
      ],
      title: "Sample Slide Show",
    },
  });
  res.end();
});

app.get("/uuid", (req, res) => {
  res.json({ uuid: uuid.v4() });
  res.end();
});

app.get("/status/:status_code", (req, res) => {
  res
    .status(parseInt(req.params.status_code))
    .send(`The status code for this page is ${req.params.status_code}`);
  res.end();
});

app.get("/delay/:delay_in_second", (req, res) => {
  setTimeout(() => {
    res.send(
      `The page will appear after ${req.params.delay_in_second} seconds`
    );
    res.end();
  }, parseInt(req.params.delay_in_second) * 1000);
});

app.listen(8000, () => {
  console.log("Server is Started On Port : 8000");
});
