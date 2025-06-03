import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-chart-pie-2',
  standalone: true,
  templateUrl: './chart-pie-2.component.html',
  styleUrl: './chart-pie-2.component.scss',
  imports: [UIChart]
})
export class ChartPie2Component implements AfterViewInit {
  data!: any;
  options!: any;

  constructor(private elRef: ElementRef) {
    const itemsByCategory = {
      Cat: 120,
      Dog: 85,
      Fish: 43,
    };

    const labels = Object.keys(itemsByCategory);
    const data = Object.values(itemsByCategory);

    this.data = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            'rgba(150, 200, 160, 0.5)',
            'rgba(150, 200, 235, 0.5)',
            'rgba(245, 215, 120, 0.5)',
            'rgba(240, 160, 180, 0.5)'
          ],
          borderColor: [
            'rgba(150, 200, 160, 1)',
            'rgba(150, 200, 235, 1)',
            'rgba(245, 215, 120, 1)',
            'rgba(240, 160, 180, 1)'
          ],
          borderWidth: 1
        }
      ]
    };

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Breakdown of products by animal type',
          font: {
            size: 18,
            weight: 'bold'
          },
          align: 'center'
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              const dataset = context.dataset;
              const total = dataset.data.reduce((sum: number, val: number) => sum + val, 0);
              const currentValue = context.raw;
              const percentage = ((currentValue / total) * 100).toFixed(1);
              const label = context.label || '—';
              return `${label}: ${currentValue} (${percentage}%)`;
            }
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
        wrapper.style.display = 'flex';
        wrapper.style.justifyContent = 'center';
        wrapper.style.alignItems = 'center';
      }

      if (canvas) {
        canvas.style.height = '100%';
        canvas.style.width = '100%';

      }
    });
  }

}
