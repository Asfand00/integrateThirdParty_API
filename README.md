# integrateThirdParty_API

API docs page: https://animechan.xyz/docs

STEPS ON SETTING IT UP:

1. install node.js and clone repo into deisred folder
2. modify/delete package.json for your own personalized settings (if delete use `npm init` (`-y` optional for easy creation)),
   though for best results use provided defualt package.json 
3. run `node index.js` in terminal to start the application

HOW IT WORKS:

Program will start by prompting user to enter an anime name, If the correct anime name is given a
random quote will be displayed in terminal with details of ID, anime, quote, and character in JSON format

example: If entered 'naruto' 
    
    {
      "id": 3404,
      "quote": "Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain because life's greatest lessons are learned through pain.",
      "anime": "Naruto",
      "character": "Pain"
    }

If the incorrect anime name is given or a slight misspelling is given, then an error will be displayed and the user will then be prompted to enter an anime name again 

When a correct quote is displayed, user is then prompted to continue the program or end it early by typing 'yes' or 'no'

if 'yes' is selected the program continues and user is asked to enter an anime name 

if 'no' is selected then program ends 

if anything else is entered besides 'yes' or 'no' then error will be displayed only accepting 'yes' or 'no' 

## NOTES ON ANIME NAMES
anime names must be correct so certain anime names like 'naruto', 'bleach' or, 'one piece' will display a quote fine and others like Code Geass will have a long title that must be entered correctly

ex. for Code Geass enter 'Code Geass: Lelouch of the Rebellion'. otherwise an error will display and user is prompted again.

some anime names use their japanese counterpart so instead of 'Attack on titan', it might be 'Shingeki no kyojin'

minor design flaws that could be updated in future.





   
