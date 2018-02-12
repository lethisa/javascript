/////////////////////
// BIND-CALL-APPLY //
/////////////////////

var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log("Good " +
        timeOfDay + ", Ladies and gentlemen! Im " +
        this.name + " Im a " +
        this.job + " and Im " +
        this.age + " years old");
    } else if (style === "friendly") {
      console.log("Hey! What is up? Im " +
        this.name + " Im a " +
        this.job + " and Im " +
        this.age + " years old. Have a nice " +
        timeOfDay);
    }
  }
};

var emily = {
  name: "Emily",
  age:35,
  job:"designer"
};

john.presentation("formal","morning");
// method borrowing - call
john.presentation.call(emily, "friendly","afternoon");
// apply - work in array
john.presentation.apply(emily,["friendly","evening"]);
// bind, like call but bind dont immediately call function - store
var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("morning");
johnFriendly("night");
