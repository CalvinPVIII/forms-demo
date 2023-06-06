function handleForm(e) {
  // we don't want the page to refresh, so we need to prevent the default action of this event.
  e.preventDefault();
  //   setting up variables form my form. e.target.{nameOfInput}.value will give me the value as a string
  const name = e.target.name.value;
  const age = parseInt(e.target.age.value);
  const movie = e.target.movie.value;
  //   creating an element that we will update later
  let result = document.createElement("h3");

  //   branching to determine result
  if (age <= 16 && movie === "wick") {
    // updating our result based on what the input was
    result.innerText = "You are not old enough";
  } else {
    // updating our result based on what the input was
    result.innerText = "One ticket for " + name + " to see " + movie;
  }
  // finding the element to append our result
  const output = document.querySelector("#output");
  // resetting our result so there won't me multiple lines
  output.innerHTML = "";
  // appending the result to the output
  output.append(result);
}

window.addEventListener("load", function () {
  // finding our form
  const form = document.getElementById("movieForm");

  // adding an event listener to our form. It is being handled by the function handleForm that we defined above.
  form.addEventListener("submit", handleForm);
});
