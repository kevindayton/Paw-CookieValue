// Grabs a value from cookies for a specified key, returns as dynamic value
var CookieValue = function () {
  this.evaluate = function (context) {
    const f = function (key) {
      var request = context.getCurrentRequest(),
        cookies = (request.getHeaderByName("Cookie") || "").split(";"),
        token = null;
      if (key.trim().length > 0) {
        for (let index in cookies) {
          var cookie = cookies[index].trim();
          console.log(cookie);
          if (cookie.indexOf(key) == 0) {
            token = decodeURIComponent(cookie.split("=")[1]);
          }
          console.log(token);
        }
      }
      return token;
    };

    var key = this.key;
    return f(key);
  };
};

CookieValue.identifier = "com.volatileeight.PawExtensions.CookieValue";
CookieValue.title = "Cookie Value Dynamic Value";
CookieValue.inputs = [
  InputField("key", "Cookie Key", "String", {
    persisted: true,
    defaultValue: "",
    placeholder: "Enter the key for the token",
  }),
];

registerDynamicValueClass(CookieValue);
