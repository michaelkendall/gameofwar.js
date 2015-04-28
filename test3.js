var numbers = [12, 53, 23, 33, 77]



for(var i= 0; i <
numbers.length; i++) {
  console.log(numbers[i] + 1)
}


for(i in numbers){
  console.log(numbers[i] + 1)
}

var counter = 0
while (counter < numbers.length){
  console.log(numbers[counter] + 1)
  counter ++
}

var numberArray = [];

for(var i = 0; i <= 1000; i++){
    numberArray.push(i);

    }
console.log(numberArray);
