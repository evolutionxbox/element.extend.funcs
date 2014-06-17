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