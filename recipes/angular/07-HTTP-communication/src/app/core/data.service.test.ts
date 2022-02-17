import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from "@angular/common/http/testing";
import { DataService } from "./data.service";
import { Book } from "app/models/book";
import { BookTrackerError } from "app/models/bookTrackerError";

describe(`DataService Tests `, () => {
  let dataService: DataService;
  let HttpTestingController: HttpTestingController;
console.log("ciaooo");

  let testBook: Book[] = [
    {
      bookID: 1,
      title: "Goodnight Moon",
      author: "Margaret Wise Brown",
      publicationYear: 1953,
    },
    {
      bookID: 2,
      title: "Winnie-the-Pooh",
      author: "A. A. Milne",
      publicationYear: 1926,
    },
    {
      bookID: 3,
      title: "Where the Wild Things Are",
      author: "Maurice Sendak",
      publicationYear: 1963,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });

    dataService = TestBed.get(DataService);
    HttpTestingController = TestBed.get(HttpTestingController);
  });


  afterEach(()=>{

    HttpTestingController.verify();
  });

  it("should GET all books", () => {
    console.log("ciaooo");

    dataService.getAllBooks().subscribe((data: Book[] | BookTrackerError) => {
      expect(data).length === 3;
    });

    let booksRequest: TestRequest =
      HttpTestingController.expectOne("/api/books");
    expect(booksRequest.request.method).toEqual("GET");

    booksRequest.flush(testBook);
 
  });

  it("should return a BookTrackerError", () => {
    dataService.getAllBooks().subscribe(

        (data: Book[] | BookTrackerError)=> fail('this should been an error'),
        (err: BookTrackerError) => {

            expect(err.errorNumber).toEqual(100);
            expect(err.friendlyMessage).toEqual('An error occurred retrieving dara.')
        }
    
         
    );
    let booksRequest: TestRequest =
      HttpTestingController.expectOne("/api/books");
      booksRequest.flush("error", {
      status: 500,
      statusText: "serverError",
    });
  });
});
