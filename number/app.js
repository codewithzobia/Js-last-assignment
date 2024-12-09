let secretNumber = 7;
let userNumber = +prompt("Enter a Guess Number from 1 to 10")
if (userNumber == secretNumber)
    {document.write("Congratulations You guess correct number")}
else if (++userNumber == secretNumber)
    {document.write("You are very close to correct number")}
else{document.write("Oops! Your answer is wrong")}