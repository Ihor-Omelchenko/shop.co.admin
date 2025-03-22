export function statusSeverity(status: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
  switch (status) {
    case 'INSTOCK':
      return 'success';
    case 'OUTOFSTOCK':
      return 'danger';
    case 'LOWSTOCK':
      return 'warn';
    default:
      return 'secondary';
  }
}
