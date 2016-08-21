# Email Creator
This program will take the necessary information to create a Saint Patrick email address.

### Basic Functionality
  - The name of the function is email()
  - The function accepts three variables: a first name, a last name, and graduation year.
  - The function concatenates all three parts together along with the "@stpatrick.org" domain to create a viable email address.

### Additional Functionality
  - Make sure that all strings are in lowercase.
    - read this [convert string to lowercase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
  - Create a teacher specific email function named teacherEmail() that only takes a first name and a last name.
  - Create a new function named graduationYear() that will take your grade and output the correct year.
    - read this [JavaScript always knows which year it is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)
    - You will need to use the if() and else{} to return the correct number based on if the user types in "freshman", "sophomore", "junior", or "senior"
