export const SUBSCRIPTIONS = [
  { name: '요정픈 가아점', plan: 'Pro',   card: '현대카드(904*)', nextDate: '2027.05.02', amount: '300,000원' },
  { name: '요정픈 가아점', plan: 'Ultra', card: '현대카드(904*)', nextDate: '2027.05.02', amount: '300,000원' },
];

export const ALL_PAYMENTS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  orderNo: `20261231-${String(i + 1).padStart(6, '0')}`,
  date: '2025.12.31',
  product: '(프로) 매장명',
  planName: '울트라플랜',
  amount: '9,999,999',
  amountFull: '300,000원',
  installment: '임시불',
  card: '현대카드 (9040-****-****-4301)',
  status: '완료',
}));

export const ITEMS_PER_PAGE = 10;
export const TOTAL_PAGES = Math.ceil(ALL_PAYMENTS.length / ITEMS_PER_PAGE);

export const currentYear = new Date().getFullYear();
export const YEARS  = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);
export const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

export function getMaxDays(year, month) {
  if (!month) return 31;
  if (month === 2) {
    if (!year) return 29;
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  }
  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}

export const INITIAL_CARDS = [
  { id: 1, name: '현대카드(803*)', isDefault: true,  isSubscribed: true  },
  { id: 2, name: '신한카드(103*)', isDefault: false, isSubscribed: false },
];
