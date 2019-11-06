const express = require("express");
const app = express();
// this is saying use process.env.PORT if truthy, otherwise use 4000.
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
