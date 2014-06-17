// Funcations which extend the standard element object

// Toggle class
Element.prototype.toggleClass = function(className) {
  if (this.classList) {
    this.classList.toggle(className);
  } else {
    var classes = this.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) {
      classes.splice(existingIndex, 1);
    } else {
      classes.push(className);
    }

    this.className = classes.join(' ');
  }
};

// After
Element.prototype.after = function(newElement) {
  var parent = this.parentNode;

  if(parent.lastchild == this) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, this.nextSibling);
  }
};

// Before
Element.prototype.before = function(newElement) {
  this.insertAdjacentHTML('beforebegin', newElement.outerHTML);
};

// Has class
Element.prototype.hasClass = function(className) {
  if (this.classList) {
    this.classList.contains(className);
  } else {
    new RegExp('(^| )' + className + '( |$)', 'gi').test(this.className);
  }
};