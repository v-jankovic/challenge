function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

function fact(input) {
  const arr = input.toString().split("");
  let sum = 0;
  for (let digit of arr) {
    sum += factorialize(parseInt(digit))
  }

  return sum
}

var caesarShift = function (str, amount) {
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  var output = "";

  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    output += c;
  }

  return output;
};

function main() {
  const f = fact(9602);
  console.log(caesarShift("vega", f));
}

main()
