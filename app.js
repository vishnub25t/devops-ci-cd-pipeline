const express = require("express");

const app = express();

app.get("/", (req, res) => {
	    res.send("Node.js CI/CD Project Running 🚀");
});

app.get("/health", (req, res) => {
	    res.status(200).json({
		            status: "UP"
		        });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
	    app.listen(PORT, () => {
		            console.log(`Server Running on Port ${PORT}`);
		        });
}

module.exports = app;
