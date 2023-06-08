import { app } from "./app.js";
import { ConnectDB } from "./data/database.js";

// database
ConnectDB(process.env.DATABASE_URI);

// server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}..`);
});
