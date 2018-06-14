const express = require("express");
const bodyParser = require("body-parser");
const mc = require(__dirname + "/controllers/messages_controller");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
