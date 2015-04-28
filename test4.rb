numbers = [12, 34, 55, 66, 59]
numbers.each{ |number| puts (number +1)}

counter = 0
while counter < numbers.length
  puts (numbers[counter] + 1)
  counter += 1
end


for i in numbers
  puts(i + 1)
end
