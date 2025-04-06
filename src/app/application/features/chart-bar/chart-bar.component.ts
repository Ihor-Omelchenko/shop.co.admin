import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-chart-bar',
  standalone: true,
  templateUrl: './chart-bar.component.html',
  styleUrl: './chart-bar.component.scss',
  imports: [UIChart]
})
export class ChartBarComponent implements AfterViewInit {
  data!: any;
  options!: any;


  constructor(private elRef: ElementRef) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    this.data = {
      labels: [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ],
      datasets: [
        {
          label: 'Food',
          data: [100, 105, 107.5, 112.5, 115, 120, 125, 127.5, 122.5, 117.5, 115, 120],
          backgroundColor: 'rgba(150, 200, 160, 0.5)',
          borderColor: 'rgba(150, 200, 160, 1)',
          borderWidth: 1,
          borderRadius: 6
        },
        {
          label: 'Toys',
          data: [37.5, 40, 38.75, 41.25, 42.5, 43.75, 45, 47.5, 46.25, 43.75, 42.5, 45],
          backgroundColor: 'rgba(150, 200, 235, 0.5)',
          borderColor: 'rgba(150, 200, 235, 1)',
          borderWidth: 1,
          borderRadius: 6
        },
        {
          label: 'Clothing',
          data: [22.5, 23.75, 21.25, 25, 26.25, 27.5, 30, 31.25, 28.75, 27.5, 27, 28.75],
          backgroundColor: 'rgba(245, 215, 120, 0.5)',
          borderColor: 'rgba(245, 215, 120, 1)',
          borderWidth: 1,
          borderRadius: 6
        },
        {
          label: 'Medicine',
          data: [32.5, 35, 33.75, 36.25, 37.5, 38.75, 40, 41.25, 40, 38.75, 37.5, 40],
          backgroundColor: 'rgba(240, 160, 180, 0.5)',
          borderColor: 'rgba(240, 160, 180, 1)',
          borderWidth: 1,
          borderRadius: 6
        }
      ]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Breakdown of income by category by month',
          font: {
            size: 18,
            weight: 'bold'
          },
          align: 'start'
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function (context: any) {
              const label = context.dataset.label || '';
              const value = context.raw;
              return `${label}: $${value}`;
            },
            footer: (tooltipItems: any[]) => {
              const total = tooltipItems.reduce((sum, item) => sum + item.parsed.y, 0);
              return `Total: $${total}`;
            }
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            callback: (value: number) => `$${value}`,
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
  }


  ngAfterViewInit(): void {
    setTimeout((): void => {
      const canvas: HTMLCanvasElement | null = this.elRef.nativeElement.querySelector('canvas');
      const wrapper: HTMLElement | null | undefined = canvas?.parentElement;

      if (wrapper) {
        wrapper.style.height = '100%';
        wrapper.style.width = '100%';
      }

      if (canvas) {
        canvas.style.height = '100%';
        canvas.style.width = '100%';
      }
    });
  }

}
