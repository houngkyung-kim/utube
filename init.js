import app from "./app";

const port = 3000;

const handleListening = () =>
  console.log(`✅ Listening at http://localhost:${port}`);

app.listen(port, handleListening)