import { Injectable } from '@angular/core';
import { NewsItem } from '../interfaces/news-item';

@Injectable({ providedIn: 'root' })
export class NewsRepository {
  // when adding backend support - change content (XSS attacks)
  private readonly list: NewsItem[] = [
    {
      slug: 'merezha-vyrobnychyh-aptek-ekofarm-pershu-vzhe-vidkryto',
      title:
        'Мережа виробничих аптек «Екофарм» розширюється: першу вже відкрито!',
      description:
        'Перша ліцензована виробнича аптека вже працює у місті Вінниця (вул. Привокзальна, 2/1). Виготовляємо препарати на місці за рецептом лікаря — швидко та індивідуально.',
      imageUrl:
        'https://media1.tenor.com/m/4f40v0du6PIAAAAC/weed-shades-on.gif',
      content: `
  <p>Мережа виробничих аптек «Екофарм» розширюється: першу вже відкрито!</p>
  <p>У рамках національної стратегії з розвитку локального аптечного виробництва, перша ліцензована виробнича аптека вже працює у місті Вінниця за адресою: <b>вул. Привокзальна буд. 2/1.</b><br><br>
Ця аптека виготовляє препарати на місці, відповідно до рецепта лікаря, що значно скорочує час очікування пацієнтів і дозволяє забезпечити індивідуальний підхід до лікування.</p>
<p>Найближчим часом планується відкриття нових аптек у містах:</p>
  <ul>
    <li>Хмельницький</li>
    <li>Дніпро</li>
    <li>Львів</li>
    <li>Київ</li>
    <li>Одеса</li>
    <li>Кропивницький</li>
    <li>Івано-Франківськ</li>
  </ul>
  <p>Ми переконані: доступність сучасної фармакотерапії — це не майбутнє, а реальність, яку ми створюємо вже сьогодні.</p>
`,
    }
  ];

  getAll() {
    return this.list;
  }
  bySlug(slug: string) {
    return this.list.find((n) => n.slug === slug);
  }
}
