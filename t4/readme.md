# How to use the app:

## Search:

    When searching enter the specified name you want to search in the input box on the left 
    section of the page and select one of the nine categories by clicking on the radio button 
    next to the category name. Then lastly click the search button. If the user wants to search 
    a new category the steps can be repeated. 

## Search Results: 

    If the search results is not immediately displayed 'loading..' will appear on the right 
    section of the page. If the results is successfully fetched a list of the search results 
    will be displayed instead of 'loading..'. This is because fetching the API data might 
    take some time thus this will help solve that issue if it appears.

## Favorites: 

    To add a favorite search result simply just like one of the results and it'll be displayed 
    at the end of the result list. To remove a favorite simply just click on the delete button next 
    to the favorited result.

# To install and run the application

    Copy the react application to your local machine

## To install (Back-end)

    To install the back-end dependencies simply open a new terminal and make sure that the terminal is 
    in the backend directory 't4' (t4 = Task 4) by typing cd t4 in the terminal. Then in the terminal 
    type npm i and press enter.


## To install (Front-end)

    To install the front-end dependencies simply open a new terminal and make sure that the terminal is 
    in the front-end directory 'front-end' by typing cd front-end in the terminal. Then in the terminal 
    type npm i and press enter.

## To run the application

### Back-end:

    In the back-end terminal (T4) type npm start and the back-end will be run in localhost:8080/searches

    note: cd t4

### Front-end 

    In the front-end terminal (front end) type npm start and the front end will be run in localhost:3000 

    note: cd front-end 

# Security measures that have been taken

    Snapshot and unit test

## Back-end

    By using mocha and chai to perform a back-end server test.

### Mocha and chai

    Mocha provides a robust testing framework, while Chai enhances the readability and expressiveness 
    of test assertions.

url: https://www.browserstack.com/guide/unit-testing-for-nodejs-using-mocha-and-chai#:~:text=Mocha%20provides%20a%20robust%20testing,specific%20project%20needs%20and%20preferences.

## front-end 

    With front-end a snapshot and unit  test has been performed this file can be found in the test folder 
    inside the src folder.

# Handling of API keys 

 The back-end server is used as relay to fetch the API results and then the results is being passed on to the front-end.

