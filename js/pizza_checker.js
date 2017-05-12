function checkIt() {
  // Initialize scores
  var hard_headed = 0;
  var soft = 0;
  var northern = 0;
  var simple = 0;
  var basic = 0;
  var fancy = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'hard_headed') {
        hard_headed++;
      }
      else if (e.value == 'soft') {
        soft++;
      }
      else if (e.value == 'northern') {
        northern++;
      }
      if (e.value == 'simple') {
        simple++;
      }
      if (e.value == 'basic') {
        basic++;
      }
      if (e.value == 'fancy') {
        fancy++;
      }
    }

  }

  // Determine result
  var counts = "hard_headed: " + hard_headed + ", " +
               "soft: " + soft  + ", " +
               "northern: " + northern  + ", " +
               "simple: " + simple  + ", " +
               "basic: " + basic  + ", " +
               "fancy: " + fancy;

  // What is the highest value?
  var max = Math.max(hard_headed, soft, northern, simple, basic, fancy);

  // Form a message
  var message;

  if (max == hard_headed) {
    message = "Ugh you don't listen!";
  }
  else if (max == soft) {
    message = "Your so sweet :)";
  }
  else if (max == northern) {
    message = "You don't live in the south haha";
  }
  else if (max == simple) {
    message = "Your very easy to be around";
  }
  else if (max == basic) {
    message = "Wow your basic";
  }
  else if (max == fancy) {
    message = "You have good manners";
  }

  // Display result
  document.getElementById('result').innerHTML = counts;
  // document.getElementById('result').innerHTML = message;

}
