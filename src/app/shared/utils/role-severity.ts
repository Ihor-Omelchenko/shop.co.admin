export function RoleSeverity(role: string): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
  switch (role) {
    case 'admin':
      return 'warn';
    case 'superAdmin':
      return 'success';
    case 'guest':
      return 'info';
    default:
      return 'secondary';
  }
}
