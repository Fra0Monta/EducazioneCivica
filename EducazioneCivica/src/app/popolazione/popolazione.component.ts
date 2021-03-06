import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { GoogleChartInterface } from 'ng2-google-charts';
import { ServizioService } from '../servizio.service';
import { ChartData} from '../chartdata.model';
@Component({
  selector: 'app-popolazione',
  templateUrl: './popolazione.component.html',
  styleUrls: ['./popolazione.component.css']
})
export class PopolazioneComponent {

query: string;
  title = 'Popolazione Rurale';
  obsSDG: Observable<Object>;
  results: any;
  dati = [];

  constructor(public servizio: ServizioService,
              private route: ActivatedRoute,
              private location: Location) {}

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsSDG = this.servizio.popolazione(this.query);
    this.obsSDG.subscribe(this.getData);
  }


  getData = (data) => {
    console.log(data);
    this.dati.push(['TimePeriod', 'Value']);
    for (var i of data)
    {
      this.dati.push([i['TimePeriod'], i['Value']]);
    }
    console.log(this.dati);
    this.LineChart.dataTable = this.dati;
  }



  public LineChart: GoogleChartInterface = {
  chartType: 'ColumnChart',
  dataTable: undefined,
  options: {'TimePeriod': 'Value'},
};


}

