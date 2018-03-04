class SmartCalculator {
  constructor(initialValue) {
    this.data = [initialValue];
  }

  valueOf() {
    let arr = this.data,
        pos;

    while (arr.lastIndexOf('^') >= 0) {
        pos = arr.lastIndexOf('^');      
        arr.splice((pos-1), 3, Math.pow(arr[pos-1],arr[pos+1]));
    }

    while (arr.indexOf('/') >= 0) {
        pos = arr.indexOf('/');
        arr.splice((pos-1),3, arr[pos-1]/arr[pos+1])
    }

    while (arr.indexOf('*') >= 0) {
      pos =  arr.indexOf('*')
      arr.splice((pos-1),3, arr[pos-1]*arr[pos+1])
    }

    while (arr.indexOf('+') >= 0) {
        pos =  arr.indexOf('+')
        if (arr[pos-2]=="-") {
          arr.splice((pos-1), 3, +arr[pos-1] - +arr[pos+1]);
        }
        else {
          arr.splice((pos-1), 3, +arr[pos-1] + +arr[pos+1]);
        }
    }

    while (arr.indexOf('-') >= 0) {
        pos =  arr.indexOf('-') 
        if (arr[pos-2]=="-") {
          arr.splice((pos-1), 3, +arr[pos-1] + +arr[pos+1]);
        }
        else {
          arr.splice((pos-1), 3, +arr[pos-1] - +arr[pos+1]);
        }
      }
    return arr[0];
  }

  add(number) {
    this.data = this.data.concat(['+', number]);
   return this;
  }
  
  subtract(number) {
    this.data = this.data.concat(['-', number]);
    return this;
  }

  multiply(number) {
    this.data = this.data.concat(['*', number]);
   return this;
  }

  devide(number) {
    this.data = this.data.concat(['/', number]);
   return this;
  }

  pow(number) {
    this.data = this.data.concat(['^', number]);
    return this;
  }
}

module.exports = SmartCalculator;
