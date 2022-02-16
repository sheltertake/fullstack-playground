import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { DataService } from "./data.service";
import { Book } from "app/models/book";

describe(`DataService Tests `,() => {



let dataService: DataService;
let HttpTestingController: HttpTestingController;

let testBook: Book[] = [
    {bookID: 1, title: "Goodnight Moon", author: "Margaret Wise Brown", publicationYear: 1953},
     {bookID: 2, title: "Winnie-the-Pooh", author: "A. A. Milne", publicationYear: 1926},
    {bookID: 3, title: "Where the Wild Things Are", author: "Maurice Sendak", publicationYear: 1963}
];

    beforeEach(()=>{
TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule],
    providers: [DataService]
});

    dataService = TestBed.get(DataService);
    HttpTestingController= TestBed.get(HttpTestingController);
    });


    it('should GET all books',() =>{
        dataService.getAllBooks()
        // .subscribe((data: Book[]) => {
        //     expect(data.length).toBe(3);
        // }

        );

        let booksRequest: TestRequest = HttpTestingController.expectOne('/api/book');
        expect(booksRequest.request.method).toEqual('GET');

        booksRequest.flush(testBook);
    });
    it('test 2',() =>{
        
    });

});





