Lists = new Mongo.Collection('lists');

// Calculate a default name for a list in the form of 'List A'
Lists.defaultName = function() {
	
	var unique_num = Math.round(Math.random() * 100);
	var unique_lindex = Math.round(Math.random() * 100 / 3.85);
	var unique_letter = String.fromCharCode('A'.charCodeAt(0) + unique_lindex);

	var nextLetter = 'A';
	var nextName = 'Chancho ' + unique_letter + unique_num;
  
  while (Lists.findOne({name: nextName})) {
    // not going to be too smart here, can go past Z
    nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
    nextName = 'List ' + nextLetter;
  }

  return nextName;
};

Todos = new Mongo.Collection('todos');
