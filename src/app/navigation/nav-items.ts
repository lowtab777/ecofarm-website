export interface NavItem {
  label: string;
  mobileLabel?: string;
  path: string;
  exact?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'МЕДИЧНИЙ КАНАБІС', mobileLabel: 'Головна', path: '/main-page', exact: true },
  { label: 'ПРО НАС', path: '/about-us' },
  { label: 'АПТЕЧНЕ ВИГОТОВЛЕННЯ', path: '/products' },
  { label: 'КОМАНДА', path: '/team' },
  { label: 'НОВИНИ', path: '/news' },
  { label: 'ЛІЦЕНЗІЇ', path: '/licenses' },
  { label: 'ВАКАНСІЇ', path: '/vacancies', exact: true },
  { label: 'КОНТАКТИ', path: '/contacts' },
];
