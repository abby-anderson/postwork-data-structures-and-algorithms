def reverse_string(str)
  # type your code in here
  reversed_string = ""

  str.chars.each do |char|
    reversed_string = char + reversed_string
  end

  reversed_string
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  puts

  puts "Expecting: 'ybba'"
  puts "=>", reverse_string('abby')

  puts

  puts "Expecting: 'secnarf'"
  puts "=>", reverse_string('frances')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# set final reversed string variable equal to empty string
# then, for each character in the str from function invocation, do something
# with something being -- putting the character in front of whatever's already inside of the reversed string 
# then after it's done, return the reversed string

# And a written explanation of your solution
# Insted of converting to array and then back to string, we're declaring an empty string variable, and then iterating over each character of the given string. In the iteration, we'll add each character to the front of the new reversed string.
# So in the javascript method, we started with the last character and added them in reverse order onto the final product.
# In this method, we're starting with the first char and reordering them while adding to the final prorduct.