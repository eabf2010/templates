import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  public doughnutChartLabels:string[] = ['UX DESIGN', 'UI DESIGN', 'CODE'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  public doughnutChartColors:Array<any> = [
    { // rosa
      backgroundColor: ['rgba(255,45,120,1)', 'rgba(4,174,199,1)', 'rgba(77,65,139,1)'],
      borderColor: ['rgba(157,17,67,1)', 'rgba(10,115,130,1)', 'rgba(43,34,90,1)']
    }
  ];
 


  // lineChart
  public lineChartData:Array<any> = [
    {data: [28, 10, 40, 19, 33, 11, 31], label: 'UX DESIGN'},
    {data: [18, 48, 51, 9, 77, 27, 22], label: 'UI DESIGN'},
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'CODE'}
  ];
  public lineChartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // pink
      backgroundColor: 'rgba(255,45,120,0.8)',
      borderColor: 'rgba(255,45,120,1)',
      pointBackgroundColor: 'rgba(255,45,120,1)',
      pointBorderColor: 'rgba(255,45,120,1)',
      pointHoverBackgroundColor: 'rgba(255,45,120,1)',
      pointHoverBorderColor: 'rgba(255,45,120,0.8)'
    },
    { // green
      backgroundColor: 'rgba(4,174,199,0.8)',
      borderColor: 'rgba(4,174,199,1)',
      pointBackgroundColor: 'rgba(4,174,199,1)',
      pointBorderColor: 'rgba(4,174,199,1)',
      pointHoverBackgroundColor: 'rgba(4,174,199,1)',
      pointHoverBorderColor: 'rgba(4,174,199,1)'
    },
    { // purple
      backgroundColor: 'rgba(77,65,139,0.8)',
      borderColor: 'rgba(77,65,139,1)',
      pointBackgroundColor: 'rgba(77,65,139,1)',
      pointBorderColor: 'rgba(77,65,139,1)',
      pointHoverBackgroundColor: 'rgba(77,65,139,1)',
      pointHoverBorderColor: 'rgba(77,65,139,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';



  //lines

    public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartColors:Array<any> = [
    { // dark green
      backgroundColor: 'rgba(4,174,199,1)',
      borderColor: 'rgba(4,174,199,1)',
      pointBackgroundColor: 'rgba(4,174,199,1)',
      pointBorderColor: 'rgba(4,174,199,1)',
      pointHoverBackgroundColor: 'rgba(4,174,199,1)',
      pointHoverBorderColor: 'rgba(4,174,199,1)'
    },
    { // purple
      backgroundColor: 'rgba(77,65,139,1)',
      borderColor: 'rgba(77,65,139,1)',
      pointBackgroundColor: 'rgba(77,65,139,1)',
      pointBorderColor: 'rgba(77,65,139,1)',
      pointHoverBackgroundColor: 'rgba(77,65,139,1)',
      pointHoverBorderColor: 'rgba(77,65,139,1)'
    }
  ];
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'UI DESIGN'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'UX DESIGN'}
  ];



  // Radar
  public radarChartLabels:string[] = ['MON', 'SUN', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  public radarChartColor:Array<any> = [
    { // pink
      backgroundColor: 'rgba(255,45,120,0.6)',
      borderColor: 'rgba(255,45,120,1)',
      pointBackgroundColor: 'rgba(255,45,120,1)',
      pointBorderColor: 'rgba(255,45,120,1)',
      pointHoverBackgroundColor: 'rgba(255,45,120,1)',
      pointHoverBorderColor: 'rgba(255,45,120,0.6)'
    },
    { // purple
      backgroundColor: 'rgba(77,65,139,0.8)',
      borderColor: 'rgba(77,65,139,1)',
      pointBackgroundColor: 'rgba(77,65,139,1)',
      pointBorderColor: 'rgba(77,65,139,1)',
      pointHoverBackgroundColor: 'rgba(77,65,139,1)',
      pointHoverBorderColor: 'rgba(77,65,139,0.8)'
    }
  ];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'UI DESIGN'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'UX DESIGN'}
  ];
  public radarChartType:string = 'radar';
 

     // PolarArea
  public polarAreaChartLabels:string[] = ['UI DESIGN', 'UX DESIGN', 'CODE'];
  public polarAreaChartData:number[] = [380, 299, 237 ];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';
  
  public polarAreaChartColors:Array<any> = [
    { 
      backgroundColor: ['rgba(255,45,120,0.6)', 'rgba(4,174,199,0.6)', 'rgba(77,65,139,0.6)'],
      borderColor: ['rgba(255,45,120,0.8)', 'rgba(4,174,199,0.8)', 'rgba(77,65,139,0.8)']
    }
  ];


   //lines point
   
  public linePointChartData:Array<any> = [
    {data: [33, 50, 12, 74, 21, 8, 65], label: 'UX DESIGN'},
    {data: [95, 61, 77, 1, 30, 68, 44], label: 'UI DESIGN'},
    {data: [23, 11, 72, 66, 98, 57, 19], label: 'CODE'}
  ];
  public linePointChartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public linePointChartOptions:any = {
    responsive: true
  };
  public linePointChartColors:Array<any> = [
    { // pink
      backgroundColor: 'rgba(255,45,120,0)',
      borderColor: 'rgba(255,45,120,1)',
      pointBackgroundColor: 'rgba(255,45,120,1)',
      pointBorderColor: 'rgba(255,45,120,1)',
      pointHoverBackgroundColor: 'rgba(255,45,120,1)',
      pointHoverBorderColor: 'rgba(255,45,120,0.8)'
    },
    { // green
      backgroundColor: 'rgba(4,174,199,0)',
      borderColor: 'rgba(4,174,199,1)',
      pointBackgroundColor: 'rgba(4,174,199,1)',
      pointBorderColor: 'rgba(4,174,199,1)',
      pointHoverBackgroundColor: 'rgba(4,174,199,1)',
      pointHoverBorderColor: 'rgba(4,174,199,1)'
    },
    { // purple
      backgroundColor: 'rgba(77,65,139,0)',
      borderColor: 'rgba(77,65,139,1)',
      pointBackgroundColor: 'rgba(77,65,139,1)',
      pointBorderColor: 'rgba(77,65,139,1)',
      pointHoverBackgroundColor: 'rgba(77,65,139,1)',
      pointHoverBorderColor: 'rgba(77,65,139,0.8)'
    }
  ];
  public linePointChartLegend:boolean = true;
  public linePointChartType:string = 'line';


  // Pie
  public pieChartLabels:string[] = ['UI DESIGN', 'UX DESIGN', 'CODE'];
  public pieChartData:number[] = [480, 154, 366];

  public pieChartColors:Array<any> = [
    { // rosa
      backgroundColor: ['rgba(255,45,120,1)', 'rgba(4,174,199,1)', 'rgba(77,65,139,1)'],
      borderColor: ['rgba(157,17,67,1)', 'rgba(10,115,130,1)', 'rgba(43,34,90,1)']
    }
  ];
  
  public pieChartType:string = 'pie';
   
   
   //points
   
  public pointChartData:Array<any> = [
    {data: [24, 50, 34, 47, 10, 2, 34, 35, 46,20], label: 'UX DESIGN'},
    {data: [14, 33, 25, 30, 15, 16, 4, 27, 33, 4], label: 'UI DESIGN'},
    {data: [37, 11, 14, 43, 38, 31, 22, 50, 39, 42], label: 'CODE'}
  ];
  public pointChartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public pointChartOptions:any = {
    responsive: true
  };
  public pointChartColors:Array<any> = [
    { // pink
      backgroundColor: 'rgba(255,45,120,0)',
      borderColor: 'rgba(255,45,120,0)',
      pointBackgroundColor: 'rgba(255,45,120,6)',
      pointBorderColor: 'rgba(255,45,120,6)',
      pointHoverBackgroundColor: 'rgba(255,45,120,1)',
      pointHoverBorderColor: 'rgba(255,45,120,6)'
    },
    { // green
      backgroundColor: 'rgba(4,174,199,0)',
      borderColor: 'rgba(4,174,199,0)',
      pointBackgroundColor: 'rgba(4,174,199,6)',
      pointBorderColor: 'rgba(4,174,199,6)',
      pointHoverBackgroundColor: 'rgba(4,174,199,1)',
      pointHoverBorderColor: 'rgba(4,174,199,6)'
    },
    { // purple
      backgroundColor: 'rgba(77,65,139,0)',
      borderColor: 'rgba(77,65,139,0)',
      pointBackgroundColor: 'rgba(77,65,139,6)',
      pointBorderColor: 'rgba(77,65,139,6)',
      pointHoverBackgroundColor: 'rgba(77,65,139,1)',
      pointHoverBorderColor: 'rgba(77,65,139,6)'
    }
  ];
  public pointChartLegend:boolean = true;
  public pointChartType:string = 'line';



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }





}
