(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {};

    person.firstName = "Daniel";
    person.lastName = "Browning";

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        console.log("Hello from " + person.firstName + " " + person.lastName);
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180
        },
        {
            name: 'Ryan',
            amount: 250
        },
        {
            name: 'George',
            amount: 320
        }
    ];

    var discount = 12 / 100;
    var discountAmount = shoppers[1].amount - (shoppers[1].amount * discount);

    if (shoppers.amount < 200) {
        console.log(shoppers.name + " does not qualify for a discount.");
    } else {
        (shoppers.amount > 200)
        console.log(shoppers.name + " does not qualify for a discount.");
        }


    console.log("The first shopper is named " + shoppers[0].name + " and before the discount he spent $" + shoppers[0].amount + ".");
    console.log("The second shopper is named " + shoppers[1].name + " and before the discount he spent $" + shoppers[1].amount + ". "  +  shoppers[1].name + " owes a total of $" + discountAmount + ".");
    console.log("The third shopper is named " + shoppers[2].name + " and before the discount he spent $" + shoppers[2].amount + ".");

    //shoppers.amount - (shoppers.amount * 0.12)
    //if shoppers.amount >= 200
    /*if/else example
    if (condition) {
        // code here gets executed if condition evaluates to true
    } else {
        // code here gets executed if condition evaluates to false
    } */

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: 'Harry Potter',
            author:
                {firstName: 'J.k',
                lastName: 'Rowling'
                },
            genre: 'Fiction'
        },
        {
            title: 'What I Know For Sure',
            author:
                {firstName: 'Oprah',
                lastName: 'Winfrey'
                },
            genre: 'Nonfiction'
        },
        {
            title: 'The Love Fix',
            author:
                {firstName: 'Tara',
                lastName: 'Fields'
                },
            genre: 'Nonfiction'
        },
        {
            title: 'The Perks of Being a Wallflower',
            author:
                {firstName: 'Stephen',
                lastName: 'Chbosky'
                },
            genre: 'Fiction'
        },
        {
            title: 'What Makes Love Last?',
            author:
                {firstName: 'John',
                    lastName: 'Gottman'
                },
            genre: 'Nonfiction'
        }
];

   // books.forEach(function (book) {
       // console.log(book.title);
    //});


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    var bookListing = function (book, id) {
        console.log("Book # " + id);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    };

    // bookListing(books[3], 3); //test

    books.forEach(function (book, id) {
        bookListing (book, id+1);
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var createBook = function (title, author) {
        var book = {};
        book.title = title;
        if (typeof author === "string") {
            var names = author.split(" ");
            var authObj = {
                firstName: names[0],
                lastName: names[1]
            }
            book.author = authObj;

        } else if (typeof author === "object") {
            book.author = author;
        }

        return book;
    }
    console.log(createBook("Harry Potter", "J.K Rowling"));

    var showBookInfo= function (book, id) {
        console.log("Book # " + id);
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    };
    books.forEach(function(book, id) {
        showBookInfo (book, id+1)
    })

})();
