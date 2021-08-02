function main() {
  console.log('Hello')

  const stats = {}
  stats.smallest = 1

  // let userNumber = parseFloat(prompt('Give us a number please: '))
  // console.log(userNumber)

  let colors = ['blue', 'red', 'purple']
  // Jordans Preference
  colors.forEach(color => console.log(color))
  // Alternative
  colors.forEach(function (color) {
    console.log(color)
  })
  let numbers =
    '46033 36845 21172 46228 43641 21576 14356 35621 46142 27357 29774 25532 30614 28554 21948 13210 45222 33739 37004 37668 46751 14540 30379 32451 28295 49436 12451 17659 30759 23730 43473 27313 41185 43652 22771 14670 36888 38184 25049 19420 44782 24169 10602 11158 11536 37474 14737 28339 32376 47660 45225 15953 36524 13588 15139 20202 42573 38915 11664 24291 10793 31487 40466 27724 12649 31294 22073 25843 34365 38672 12228 24367 14413 37258 12293 32388 18732 29503 32255 14284 15386 19822 21826 18332 49011 13774 12292 15965 28076 18470 14203 49093 19354 40883 41817 39748 14356 32552 35751 43275'.split(
      ' '
    )
  // Make an assumption about the smallest being the first num
  let smallestNumber = numbers[0]
  let largestNumber = numbers[0]
  // For the length of the array check the numbers at each index and compare to the smallestNum
  for (let index = 0; index < numbers.length; index++) {
    // If the smallestNumber is larger than the numbers at the index of index
    if (smallestNumber > numbers[index])
      // Set the smallest number to be numbers at the index of index.
      smallestNumber = numbers[index]
    if (largestNumber < numbers[index])
      // Set the smallest number to be numbers at the index of index.
      largestNumber = numbers[index]
  }
  console.log(smallestNumber)
  console.log(largestNumber)
  console.log(Math.min(...numbers))
  console.log(Math.max(...numbers))
  console.log(numbers)
  // numbers.forEach(num => console.log(num))
}

document.addEventListener('DOMContentLoaded', main)
