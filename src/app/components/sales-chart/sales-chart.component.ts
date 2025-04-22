import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { default as ChartDataLabels } from 'chartjs-plugin-datalabels';
import { Order } from '../../../data/orders';
import { OrdersService } from '../../services/orders.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

// Register Chart.js plugins
import Chart from 'chart.js/auto';
import {
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [BaseChartDirective, FormsModule, NgIf],
  templateUrl: './sales-chart.component.html',
  styleUrl: './sales-chart.component.css',
})
export class SalesChartComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  orders: Order[] = [];
  selectedYear: number = new Date().getFullYear();
  availableYears: number[] = [];
  selectedStatus: string = 'all';
  private subscription: Subscription = new Subscription();
  isDataLoaded = false;

  private tailwindColors = {
    sky500: '#0ea5e9',
    sky400: '#38bdf8',
    sky300: '#7dd3fc',
    amber500: '#f59e0b',
    amber400: '#fbbf24',
    indigo500: '#6366f1',
    indigo400: '#818cf8',
    emerald500: '#10b981',
    emerald400: '#34d399',
    rose500: '#f43f5e',
    rose400: '#fb7185',
    slate900: '#0f172a',
    slate800: '#1e293b',
    slate700: '#334155',
    slate600: '#475569',
    slate500: '#64748b',
    slate300: '#cbd5e1',
    slate200: '#e2e8f0',
    slate100: '#f1f5f9',
    white: '#ffffff',
  };

  // Status colors
  statusColors = {
    pending: this.tailwindColors.amber400,
    processing: this.tailwindColors.sky400,
    shipped: this.tailwindColors.indigo400,
    delivered: this.tailwindColors.emerald400,
    cancelled: this.tailwindColors.rose400,
    all: this.tailwindColors.sky500,
  };

  barChartType: ChartType = 'bar';
  barChartPlugins = [];

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: this.tailwindColors.slate700,
        },
        ticks: {
          color: this.tailwindColors.slate300,
          font: {
            weight: 'bold',
          },
          padding: 10,
          callback: (value) => {
            return 'KWD ' + value;
          },
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: this.tailwindColors.slate300,
          font: {
            weight: 'bold',
          },
          padding: 10,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          color: this.tailwindColors.slate300,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            weight: 'bold',
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: this.tailwindColors.slate800,
        titleColor: this.tailwindColors.white,
        bodyColor: this.tailwindColors.white,
        cornerRadius: 8,
        padding: 12,
        displayColors: true,
        boxPadding: 6,
        titleFont: {
          weight: 'bold',
          size: 14,
        },
        callbacks: {
          label: (context) => {
            const value = context.raw as number;
            return `Sales: KWD ${value.toFixed(2)}`;
          },
        },
      },
      datalabels: {
        display: function (context) {
          const value = context.dataset.data[context.dataIndex];
          return value !== null && value !== undefined && (value as number) > 0;
        },
        anchor: 'end',
        align: 'top',
        offset: 0,
        color: this.tailwindColors.white,
        font: {
          weight: 'bold',
          size: 11,
        },
        formatter: (value) => {
          return 'KWD ' + (+value).toFixed(0);
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 6,
      },
    },
    animation: {
      duration: 1500,
    },
  };

  barChartLabels: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [],
  };

  constructor(
    private ordersService: OrdersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscription = this.ordersService.orders$.subscribe((orders) => {
      console.log('Orders received:', orders.length);
      this.orders = orders;
      this.extractYears();
      this.updateChartData();
      this.isDataLoaded = true;

      // Force chart update on next tick
      setTimeout(() => {
        this.updateChart();
        this.cdr.detectChanges();
      });
    });
  }

  ngAfterViewInit(): void {
    // If we already have data when view initializes
    setTimeout(() => {
      this.updateChart();
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Force chart to update
  updateChart(): void {
    if (this.chart) {
      console.log('Updating chart');
      this.chart.update();
    }
  }

  extractYears(): void {
    if (!this.orders || this.orders.length === 0) return;

    this.availableYears = [
      ...new Set(
        this.orders.map((order) => new Date(order.orderDate).getFullYear())
      ),
    ].sort((a, b) => b - a);

    if (
      !this.availableYears.includes(this.selectedYear) &&
      this.availableYears.length > 0
    ) {
      this.selectedYear = this.availableYears[0];
    }
  }

  changeYear(year: number): void {
    if (this.selectedYear !== year) {
      this.selectedYear = year;
      this.updateChartData();
    }
  }

  changeStatus(status: string): void {
    if (this.selectedStatus !== status) {
      this.selectedStatus = status;
      this.updateChartData();
    }
  }

  updateChartData(): void {
    console.log('Updating chart data, orders count:', this.orders?.length);
    if (!this.orders || this.orders.length === 0) {
      console.log('No orders, generating dummy data');
      this.generateDummyData();
      return;
    }

    // Initialize monthly sales data for each order status
    const monthlySales = {
      all: Array(12).fill(0),
      pending: Array(12).fill(0),
      processing: Array(12).fill(0),
      shipped: Array(12).fill(0),
      delivered: Array(12).fill(0),
      cancelled: Array(12).fill(0),
    };

    console.log('Processing orders for year:', this.selectedYear);
    // Process orders for the selected year
    this.orders.forEach((order) => {
      const orderDate = new Date(order.orderDate);
      const orderYear = orderDate.getFullYear();

      if (orderYear === this.selectedYear) {
        const month = orderDate.getMonth();
        const status = order.status as keyof typeof monthlySales;
        console.log(
          `Adding order: Month=${month}, Status=${status}, Price=${order.totalPrice}`
        );

        // Add to specific status total
        monthlySales[status][month] += order.totalPrice;

        // Add to all orders total
        monthlySales.all[month] += order.totalPrice;
      }
    });

    console.log('Monthly sales data:', monthlySales);

    // Update chart data based on selected status
    if (this.selectedStatus === 'all') {
      // Show stacked data for all statuses
      this.barChartData = {
        labels: this.barChartLabels,
        datasets: [
          {
            data: monthlySales.delivered,
            label: 'Delivered',
            backgroundColor: this.statusColors.delivered,
            stack: 'Stack 0',
            borderColor: 'transparent',
            borderRadius: 6,
            maxBarThickness: 35,
          },
          {
            data: monthlySales.shipped,
            label: 'Shipped',
            backgroundColor: this.statusColors.shipped,
            stack: 'Stack 0',
            borderColor: 'transparent',
            borderRadius: 6,
            maxBarThickness: 35,
          },
          {
            data: monthlySales.processing,
            label: 'Processing',
            backgroundColor: this.statusColors.processing,
            stack: 'Stack 0',
            borderColor: 'transparent',
            borderRadius: 6,
            maxBarThickness: 35,
          },
          {
            data: monthlySales.pending,
            label: 'Pending',
            backgroundColor: this.statusColors.pending,
            stack: 'Stack 0',
            borderColor: 'transparent',
            borderRadius: 6,
            maxBarThickness: 35,
          },
          {
            data: monthlySales.cancelled,
            label: 'Cancelled',
            backgroundColor: this.statusColors.cancelled,
            stack: 'Stack 0',
            borderColor: 'transparent',
            borderRadius: 6,
            maxBarThickness: 35,
          },
        ],
      };
    } else {
      // Show single status data
      this.barChartData = {
        labels: this.barChartLabels,
        datasets: [
          {
            data: monthlySales[
              this.selectedStatus as keyof typeof monthlySales
            ],
            label: `${
              this.selectedStatus.charAt(0).toUpperCase() +
              this.selectedStatus.slice(1)
            } Orders`,
            backgroundColor:
              this.statusColors[
                this.selectedStatus as keyof typeof this.statusColors
              ],
            borderColor: 'transparent',
            borderRadius: 6,
            maxBarThickness: 35,
          },
        ],
      };
    }

    // Force chart update on next tick
    setTimeout(() => {
      this.updateChart();
    });
  }

  generateDummyData(): void {
    // Create more visible dummy data for testing
    const currentYear = new Date().getFullYear();
    this.selectedYear = currentYear;
    this.availableYears = [currentYear];

    // Larger random values to make bars more visible
    const monthlySales = Array(12)
      .fill(0)
      .map(() => Math.floor(Math.random() * 50000) + 20000);

    this.barChartData = {
      labels: this.barChartLabels,
      datasets: [
        {
          data: monthlySales,
          label: `Sales ${this.selectedYear}`,
          backgroundColor: this.tailwindColors.sky400,
          borderColor: 'transparent',
          borderWidth: 1,
          borderRadius: 6,
          maxBarThickness: 35,
        },
      ],
    };

    console.log('Generated dummy data:', monthlySales);
  }

  chartClicked(event: any): void {
    console.log('Chart Clicked:', event);
  }

  chartHovered(event: any): void {
    console.log('Chart Hovered:', event);
  }
}
