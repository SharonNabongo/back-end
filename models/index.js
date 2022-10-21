const mongoose=require("mongoose");
mongoose.set("debug",true);
mongoose.promise=promise;
mongoose.connect(
"mongodb+srv://sharon:<password>@cluster0.mjs72we.mongodb.net/chatapp?retryWrites=true&w=majority",
{keepAlive:true}
);
