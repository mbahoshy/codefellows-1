function Library () {
	//create new arrays to hold shelf and book objects
	shelf_array = [];
	book_array = [];

	//method to add new shelf to library, creates new shelf object and adds to shelf array
	this.addShelf = function (shelf_title, shelf_genre) {
		shelf_array.push(new Shelf (shelf_title, shelf_genre));
	}

	//method to add new book to library, creates new book object and adds to book array
	this.addBook = function (book_title, book_author, shelf_title) {
		book_array.push(new Book (book_title, book_author, shelf_title));
	}



	//method to return array of books whose property meets a certain condition
	this.reportBooks = function (book_property, book_condition) {
		tmp_array = [];
		if (book_property.toUpperCase() == 'ALL') {
			tmp_array = book_array;
		}
		else {
			for (i=0; i<book_array.length; i++) {
				if (book_array[i][book_property].toUpperCase() == book_condition.toUpperCase()) {
					tmp_array.push(book_array[i]);
				}
			}
		}
		return tmp_array;
	}

	//method to return a certain property of all shelves
	this.reportShelf = function (shelf_property, shelf_condition) {
		tmp_array = [];
		if (shelf_property.toUpperCase() == 'ALL') {
			tmp_array = shelf_array;
		}
		else {
			for (i=0; i<shelf_array.length; i++) {
				if (shelf_array[i][shelf_property].toUpperCase() == shelf_condition.toUpperCase()) {
					tmp_array.push(shelf_array[i]);
				}
			}
		}
		return tmp_array;
	}

}

function Shelf (shelf_title, shelf_genre) {
	this.genre = shelf_genre;
	this.shelftitle = shelf_title;
}

function Book(book_title, book_author, shelf_title) {
	this.booktitle = book_title;
	this.bookauthor = book_author;
	this.bookshelf = shelf_title;

	//method to change bookshelf
	this.enshelf = function (new_shelf) {
		this.bookshelf = new_shelf;
	}

	//method to remove bookshelf
	this.unshelf = function () {
		this.bookshelf = '';
	}

}