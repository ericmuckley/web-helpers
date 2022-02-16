/*
const RequestUtils = {


  async function postData(url="", data={}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    return response.json();
  };

  // send GET request to retrieve data from the server
  async function getData(url) {
    const response = await fetch(url, {method: 'GET'});
    return response.json();
  };


};

*/





/*



function swapStrings(s, swaps) {
  if (s.includes(swaps[0])){
      return s.replace(swaps[0], swaps[1]);
  } else {
      return s.replace(swaps[1], swaps[0]);
  };
};


// Remove all child elements form a parent element.
function removeAllChildren(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  };
};

// Add an element to the front of an array if it exists in the array
function addToFront(arr, el){
  if (arr.includes(el)){
      arr = arr.filter(item => item !== el);
      arr.unshift(el);
  };
  return arr;
};


// Format an array of strings by capitalizing the
// first letter and replacing underscores with spaces.
// use the "mapping" argument object to map specific labels
// to new ones.
function formatLabels(labels, mapping={}){
  var new_labels = [];
  for (let label of labels) {
      var new_label = null;
      if (mapping.hasOwnProperty(label)) {
          new_label = mapping[label];
      } else {
        if (label === '') {
          new_label = '';
        } else {
            new_label = (label.charAt(0).toUpperCase() + label.slice(1));
            new_label = new_label.replace('_', ' ');
        };
    };
    new_labels.push(new_label);
};
return new_labels;
};


// convert a string to a valid ID by lowercasing and
// replacing spaces with hyphens.
function strToId(str){
  return str.toLowerCase().replaceAll(' ', '-');
}

*/