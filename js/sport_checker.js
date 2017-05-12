function checkIt() {
  // Initialize scores
  var soccer = 0;
  var football = 0;
  var lacrosse = 0;
  var baseball = 0;
  var basketball = 0;
  var swimming = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'soccer') {
        soccer++;
      }
      else if (e.value == 'football') {
        football++;
      }
      else if (e.value == 'lacrosse') {
        lacrosse++;
      }
      if (e.value == 'baseball') {
        baseball++;
      }
      if (e.value == 'basketball') {
        basketball++;
      }
      if (e.value == 'swimming') {
        swimming++;
      }
    }

  }

  // Determine result
  var counts = "soccer: " + soccer + ", " +
               "football: " + football  + ", " +
               "lacrosse: " + lacrosse  + ", " +
               "baseball: " + baseball  + ", " +
               "basketball: " + basketball  + ", " +
               "swimming: " + swimming;

  // What is the highest value?
  var max = Math.max(soccer, football, lacrosse, baseball, basketball, swimming);

  // Form a message
  var message;

  if (max == soccer) {
    message = "GOALASO";
  }
  else if (max == football) {
    message = "TOUCHDOWN :)";
  }
  else if (max == lacrosse) {
    message = "GOALLLL";
  }
  else if (max == baseball) {
    message = "HOMERUN";
  }
  else if (max == basketball) {
    message = "SWISH";
  }
  else if (max == swimming) {
    message = "SPLASH";
  }

  // Display result
  document.getElementById('result').innerHTML = counts;
  // document.getElementById('result').innerHTML = message;

}
