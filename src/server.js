// const express = require("express");
// const path = require("path");
// const app = express();
// const port = process.env.PORT || 80;
// const fs = require("fs");

// app.use(express.static(path.join(__dirname, "build")));
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// const dataDir = path.join(__dirname, "public", "data");
// if (!fs.existsSync(dataDir)) {
//   fs.mkdirSync(dataDir);
// }

// app.post("/addList", (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log("email : ", email);

//     const filePath = path.join(__dirname, "public", "lists.csv");
//     fs.appendFileSync(filePath, email + "\n");
//     res.send("ok");
//   } catch (e) {
//     console.error(e);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
