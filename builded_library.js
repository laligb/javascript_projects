class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(state) {
    this._isCheckedOut = state;
  }

  toggleCheckOutStatus(value) {
    if (this._isCheckedOut === false) {
      this._isCheckedOut = true;
    } else {
      this._isCheckedOut = false;
    }
  }

  getAverageRating() {
    let sum = this._ratings.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(sum)
    return sum / this._ratings.length;
  }

  addRating(rating){
    this._ratings.push(rating);
  }
}


// Test
const test = new Media("Hello");
test.addRating(10);
test.addRating(5);
test.addRating(15);
test.addRating(2);
test.addRating(12);
console.log(test.ratings)
console.log(test.getAverageRating() )

class Book extends Media{
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }

}

class Movie extends Media{
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
    return this._director;
  }

  get runTime(){
    return this._runTime;
  }
}

// Testing Book Instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());


// Testing Movie Instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
