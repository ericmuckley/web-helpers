const dom = {

  get (id) {
    return document.getElementById(id);
  },

  getRandomId(n=12) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');
    var id = '';
    for (var i = 0; i < n; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    };
    return id;
  },


  make (type="div", info={}) {
    /*
    Make a DOM element.
    Inputs:
    type: string representation of element. e.g. "div", "a", "button"
    info: object containing the element info. Example:
    info = {
      'id': 'el_id',
      'classes': ['mt-2', 'bg-dark'],
      'styles': {'overflow': 'auto'},
      'parent': 'parent_id',
      'datasets': {"dataset1": "hello", "dataset2": [1,2,3]}
    }
    Output: element which was created
    */
    const el = document.createElement(type);
    for (const [k, v] of Object.entries(info)) {
      if (k === "styles") {
        Object.assign(el.style, v);
      } else if (k === "classes") {
        for (let c of v){
          el.classList.add(c);
        };
      } else if (k === "parent") {
        if (typeof v === "string") {
          document.getElementById(v).appendChild(el);
        } else {
          v.appendChild(el);
        };
      } else if (k === "datasets") {
        for (const [dname, dval] of Object.entries(v)){
          el.setAttribute(`data-${dname}`, dval);
        };
      } else if (k === "innerHTML") {
        el.innerHTML = v;
      } else if (k === "value") {
        el.value = v;
      } else if (['id', 'name', 'type', 'href', 'target'].includes(k)) {
        el.setAttribute(k, v);
      } else {
        alert(`No action performed for new component with info key: ${k}`);
      };
    };
    return el;
  },

};