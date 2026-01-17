require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// ✅ CONNECT DB FIRST
connectDB();

// ✅ THEN START SERVER
app.listen(PORT, () => {
  console.log(`>>> AbleLearn backend running on port ${PORT}`);
});
