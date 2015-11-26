(function(){
Template.body.addContent((function() {
  var view = this;
  return Spacebars.include(view.lookupTemplate("mainBox"));
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("mainBox");
Template["mainBox"] = new Template("Template.mainBox", (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, HTML.Raw("\n    <h2>BESTchat</h2>\n    <!-- shows login buttons -->\n    \n"), Spacebars.include(view.lookupTemplate("loginButtons")), "\n\n  ", Spacebars.include(view.lookupTemplate("chatBox")), "\n  ");
}));

Template.__checkName("chatBox");
Template["chatBox"] = new Template("Template.chatBox", (function() {
  var view = this;
  return [ HTML.DIV({
    id: "messages"
  }, "\n    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("messages"));
  }, function() {
    return [ "\n      ", Spacebars.include(view.lookupTemplate("chatMessage")), "\n    " ];
  }), "\n  "), "\n     \n  ", HTML.TEXTAREA({
    id: "chat-message",
    onkeyup: "process(event, this)",
    placeholder: "Wpisz Wiadomość"
  }), HTML.Raw('<br>\n  <button class="btn btn-warning" id="send">Dodaj</button>\n  '), HTML.SCRIPT("\nfunction dol() {\n    var suwak = document.getElementById(\"messages\");\n    suwak.scrollTop = 99999999999;\n}\n  function wyslij() {\n	  try{\n	 if (Meteor.user().username=='null'){\n	 }\n	 else {\n    var message = $('#chat-message').val();\n    if (message=='\\n'){\n		    $('#chat-message').val(null);\n		return 0;\n			}\n	else{\n    chatCollection.insert({\n      userId: 'ty',\n      message: message\n    });\n}\n  }\n}\ncatch(TypeError){\n	alert(\"Aby pisać musisz się zalogować!\");\n	$('#chat-message').val(null);\n	return 0;\n}\n    $('#chat-message').val(null);\n    \n    chatStream.emit('chat', message);\n  }\n  \n"), "\n", HTML.SCRIPT("\n	\nfunction process(e) {\n    var code = (e.keyCode ? e.keyCode : e.which);\n    if (code == 13) { \nwyslij();\n    }\n}\n") ];
}));

Template.__checkName("chatMessage");
Template["chatMessage"] = new Template("Template.chatMessage", (function() {
  var view = this;
  return [ HTML.SCRIPT('\nsetInterval("dol();"); \n'), "\n  ", HTML.DIV(" \n    ", HTML.B({
    style: function() {
      return [ "color:", Spacebars.mustache(view.lookup("kolor")) ];
    }
  }, Blaze.View("lookup:user", function() {
    return Spacebars.mustache(view.lookup("user"));
  }), ":"), " ", Blaze.View("lookup:message", function() {
    return Spacebars.mustache(view.lookup("message"));
  }), "  \n  ") ];
}));

})();
