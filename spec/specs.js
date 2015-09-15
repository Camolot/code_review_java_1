describe('replace', function() {

  it("it searches a single word with a single letter, for that same letter, and replaces it with a different one", function () {
    expect(replace("a", "a", "s")).to.equal("s");
  });

  it("it returns a message when the specified word cannot be found within the string", function() {
    expect(replace("a", "as", "s")).to.equal("Sorry! No matches found, no changes made.");
  });

  it("it searches a string for an exact match and replaces it with the provided word", function() {
    expect(replace("is", "is", "as")).to.equal("as");
  });

  it("it searches a full sentence for an exact match, replacing it with the provided word", function() {
    expect(replace("what were they doing", "doing", "eating")).to.equal("what were they eating");
  });

  it("it searches a full sentence for an exact match, replacing it with the provided word", function() {
    expect(replace("what is a way to build a shed", "a", "the")).to.equal("what is the way to build the shed");
  });

  //"Hello! How are you?"
  //"Hello"
  //"Hi"
  //"Hi! How are you?"

  it("searches a full sentence for a specified word, accounting for punctuation", function() {
    expect(replace("Jean-luc Picard", "Jean", "Dean")).to.equal("Dean-luc Picard");
  });

  it("recognizes numeric characters in the searchWord and outputs an error message", function() {
    expect(replace("four", "f0ur", "nine")).to.equal("Please input only letter characters.");
  });

  it ("ignores special letter cases in a sentence in reference to the searchWord and outputs the replaceWord instead", function() {
    expect(replace("Hi", "hi", "hello")).to.equal("hello");
  });


  // it("searches a full sentence for multiple words, replacing them with provided word(s)", function() {
  //   expect(replace("steven universe is a great show", "universe, show"))
  // });

  //sentence: "a"
  //searchWord: "a"
  //replaceWord: "s"
  //output: "s"
});
