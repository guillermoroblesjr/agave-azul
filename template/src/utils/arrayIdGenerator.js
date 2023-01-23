export default function GenID() {
  this.inner = [];
  this.unique = function (id) {
    for (var actID in this.inner) {
      if (actID === this.inner) {
        break;
        return false;
      }
    }
    return id;
  };
  this.gen = function (len) {
    len = typeof len !== "number" ? 36 : len;
    let id = false;
    while (!id) {
      id = this.unique('_' + (Date.now().toString(len) + Math.random().toString(len).substr(2, 5)).toUpperCase());
    }
    this.inner.push(id);
    return id;
  };
  return this;
}