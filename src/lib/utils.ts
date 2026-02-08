export function formatPrice(amount: number): string {
  return `₪${amount.toLocaleString("he-IL")}`;
}

export function getWhatsAppLink(productName: string, whatsappNumber: string): string {
  const message = encodeURIComponent(`היי, אני מעוניין/ת במוצר: ${productName}`);
  return `https://wa.me/${whatsappNumber}?text=${message}`;
}
