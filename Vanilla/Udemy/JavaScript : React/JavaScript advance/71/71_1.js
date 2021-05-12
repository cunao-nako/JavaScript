function myModule() {
  this.hello = () => console.log('hello');
  this.goodbye = () => console.log('goodbue');
}

module.exports = myModule;