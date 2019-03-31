require("autohotkey.js").init("scripts.js");

on("^t", function() {
  send("Hi");
});

on("^t", function() {
  If(winExist('"Untitled - Notepad"'), function() {
    send("Notepad Open");
  });
});

on("^t", function() {
  If(winExist('"Untitled - Notepad"'), function() {
    send("Notepad Open");
  }).Else(function() {
    send("Notepad Not Open");
  });
});

on("^t", function() {
  set("Variable", '"Untitled - Notepad"');
  If(winExist(get("Variable")), function() {
    send("Notepad Open");
  }).Else(function() {
    send("Notepad Not Open");
  });
  send(get("Variable").contents());
});

get("Variable")
  .get("Function")
  .run('"Argrument"');
winExist(
  get("Variable")
    .get("Function")
    .runInline('"Argrument"')
);
