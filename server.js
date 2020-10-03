const express = require("express");
const app = express();
const accounts = require("./server/routes/");
const { notFoundError, internalServerError, useCORS } = require("./server/middleware/");

app.use(useCORS);

app.use("/api/accounts", accounts);
app.use(notFoundError);
app.use(internalServerError);

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log("Example app listening on port 3000!\n");
});
