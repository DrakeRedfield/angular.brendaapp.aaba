import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { 
  Chart,
  ChartConfiguration,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
} from 'chart.js'

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('chartElm', {static: false}) chartElm: any;
  chart: Chart | null = null;

  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.createChart()
  }

  getLastSixMonth(): string[] {
    const now = new Date();
    now.setMonth( now.getMonth() - 6 )
    const monthLastSix = now.getMonth()
    let tempList = []
    for(let i = 0; i < 6; i++)    {
      tempList.push(this.months[(monthLastSix+i)%12])
    }
    return tempList;
  }

  createChart(){
    const data: any = {
      labels: this.getLastSixMonth(),
      datasets: [
        {
          label: 'Ventas Totales',
          data: [60,78,55,63,70,90],
          borderColor: 'rgba(54,152,235,0.6)',
          backgroundColor: 'rgba(54,152,235,0.6)',
        },
      ]
    }
    const configChart: any = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        y: {
          suggestedMin: 0,
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      },
    }
    this.chart = new Chart(this.chartElm.nativeElement,configChart)
    this.chart.resize(400,200);
  }

}
