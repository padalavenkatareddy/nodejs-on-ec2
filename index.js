const app = require("express")();
app.get("/", (request ,response) => {
  return response.send(

    <h1>
             Hello OPTIT
    </h1>
  );
});

app.listen(3000, () => console.log("server running"));
