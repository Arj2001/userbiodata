import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.putBiodata()
  }

  putBiodata=()=>{
    this.myApi.getBiodata().subscribe(
      (data)=>{
        this.biodataData =data
      }
    )
  }

  biodataData:any = []

  ngOnInit(): void {
  }

}
