## Examples

### Basic Script

```js
require("autohotkey.js").init("Name Of File");

on("^t", function() {
  send("Hi");
});
```

### Which Outputs

```ahk
^t::
  Send, Hi
Return
```

### Basic Script With If Statement

```js
require("autohotkey.js").init("Name Of File");

on("^t", function() {
  If(winExist('"Untitled - Notepad"'), function() {
    send("Notepad Open");
  });
});
```

### Which Outputs

```ahk
^t::
  if (winExist("Untitled - Notepad")) {
    Send, Notepad Open
  }
Return
```

### Basic Script With If/Else Statement

```js
require("autohotkey.js").init("Name Of File");

on("^t", function() {
  If(winExist('"Untitled - Notepad"'), function() {
    send("Notepad Open");
  }).Else(function() {
    send("Notepad Not Open");
  });
});
```

### Which Outputs

```ahk
^t::
  if (winExist("Untitled - Notepad")) {
    Send, Notepad Open
  }
  else {
    Send, Notepad Not Open
  }
Return
```

### Basic Script With Variables

```js
require("autohotkey.js").init("Name Of File");

on("^t", function() {
  set("Variable", '"Untitled - Notepad"');
  If(winExist(get("Variable")), function() {
    send("Notepad Open");
  }).Else(function() {
    send("Notepad Not Open");
  });
  send(get("Variable").contents());
});
```

### Which Outputs

```ahk
^t::
  Variable := "Untitled - Notepad"
  if (WinExist(Variable)) {
    Send, Notepad Open
  }
  else {
    Send, Notepad Not Open
  }
  Send, %Variable%
Return
```

### Runing Functions

```js
get("Variable")
  .get("Function")
  .run('"Argrument"');
winExist(
  get("Variable")
    .get("Function")
    .runInline('"Argrument"')
);
```
