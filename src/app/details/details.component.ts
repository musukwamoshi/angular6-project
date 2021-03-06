import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private data:DataService) {

       this.route.params.subscribe( params => this.user$ = params.id );
   }

    user$:Object;

  ngOnInit() {

    this.data.getUser(this.user$).subscribe(
             data => this.user$ = data
    );

  }

}
