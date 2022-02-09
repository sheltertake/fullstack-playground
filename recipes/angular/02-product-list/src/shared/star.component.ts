import { Component, Input,Output, OnChanges, EventEmitter } from "@angular/core";
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']
})

export class StarComponent implements OnChanges {
    @Input() rating:number = 0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter();
    cropWidth: number = 90;
    faStar = faStar;

    ngOnChanges(): void {
        this.cropWidth= this.rating*90/5;
        
    }

    onClick():void {
        this.ratingClicked.emit( `Rating: ${this.rating} `);
    }

}