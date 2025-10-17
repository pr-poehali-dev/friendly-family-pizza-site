import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [loyaltyPoints, setLoyaltyPoints] = useState(450);

  const menuItems = [
    { id: 1, name: 'Маргарита', price: 450, category: 'Классические', description: 'Томатный соус, моцарелла, базилик', image: 'https://cdn.poehali.dev/projects/f212a6bc-2c88-4beb-bfd4-af60c548ad46/files/fa60b270-70b6-47f3-87b0-580b0ba2ccc9.jpg' },
    { id: 2, name: 'Пепперони', price: 550, category: 'Классические', description: 'Томатный соус, моцарелла, пепперони', image: 'https://cdn.poehali.dev/projects/f212a6bc-2c88-4beb-bfd4-af60c548ad46/files/e0c89a4a-bdb4-4732-9cb6-15ed5d4e3c1e.jpg' },
    { id: 3, name: 'Четыре сыра', price: 620, category: 'Премиум', description: 'Моцарелла, пармезан, горгонзола, чеддер', image: 'https://cdn.poehali.dev/projects/f212a6bc-2c88-4beb-bfd4-af60c548ad46/files/ae34f045-d720-4402-ab60-31770aec0f0c.jpg' },
    { id: 4, name: 'Мясная', price: 680, category: 'Премиум', description: 'Говядина, курица, бекон, ветчина', image: 'https://cdn.poehali.dev/projects/f212a6bc-2c88-4beb-bfd4-af60c548ad46/files/fa60b270-70b6-47f3-87b0-580b0ba2ccc9.jpg' },
    { id: 5, name: 'Вегетарианская', price: 520, category: 'Специальные', description: 'Овощи гриль, моцарелла, оливки', image: 'https://cdn.poehali.dev/projects/f212a6bc-2c88-4beb-bfd4-af60c548ad46/files/e0c89a4a-bdb4-4732-9cb6-15ed5d4e3c1e.jpg' },
    { id: 6, name: 'Гавайская', price: 580, category: 'Специальные', description: 'Курица, ананасы, моцарелла', image: 'https://cdn.poehali.dev/projects/f212a6bc-2c88-4beb-bfd4-af60c548ad46/files/ae34f045-d720-4402-ab60-31770aec0f0c.jpg' },
  ];

  const promotions = [
    { title: 'Пицца дня', discount: '30%', description: 'Скидка на Маргариту до конца дня' },
    { title: 'Комбо для семьи', discount: '25%', description: '2 большие пиццы + напитки' },
    { title: 'Бонус за регистрацию', discount: '200 ₽', description: 'Начисляем бонусы сразу после регистрации' },
  ];

  const categories = ['Все', 'Классические', 'Премиум', 'Специальные'];
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredMenu = selectedCategory === 'Все' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const nextLevelPoints = 1000;
  const progressPercent = (loyaltyPoints / nextLevelPoints) * 100;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold font-heading text-primary">🍕 ДРУЖНАЯ СЕМЬЯ</h1>
            
            <nav className="hidden md:flex gap-6">
              {['home', 'menu', 'delivery', 'promotions', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`font-semibold transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'menu' && 'Меню'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'promotions' && 'Акции'}
                  {section === 'about' && 'О нас'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>

            <Button className="font-semibold">
              <Icon name="ShoppingCart" className="mr-2" size={18} />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {activeSection === 'home' && (
        <>
          <section className="bg-gradient-to-br from-secondary/30 to-background py-20 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-foreground">
                  Настоящая итальянская пицца для всей семьи
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Свежие ингредиенты, традиционные рецепты, быстрая доставка
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg font-semibold" onClick={() => setActiveSection('menu')}>
                    Смотреть меню
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg font-semibold">
                    <Icon name="Phone" className="mr-2" size={20} />
                    +7 (999) 123-45-67
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold font-heading mb-10 text-center">Популярные пиццы</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {menuItems.slice(0, 3).map((item, index) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CardContent className="p-6">
                      <div className="aspect-square bg-secondary/30 rounded-lg mb-4 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-xl font-bold font-heading mb-2">{item.name}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                        <Button>В корзину</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-secondary/20">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold font-heading mb-10 text-center">Программа лояльности</h3>
              <div className="max-w-2xl mx-auto">
                <Card className="p-8 animate-scale-in">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold font-heading mb-1">Ваши бонусы</h4>
                      <p className="text-muted-foreground">Копите и получайте скидки</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-primary">{loyaltyPoints}</div>
                      <div className="text-sm text-muted-foreground">баллов</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>До следующего уровня</span>
                      <span className="font-semibold">{nextLevelPoints - loyaltyPoints} баллов</span>
                    </div>
                    <Progress value={progressPercent} className="h-3" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Icon name="Gift" className="mx-auto mb-2 text-primary" size={32} />
                      <div className="font-bold">1% кешбэк</div>
                      <div className="text-xs text-muted-foreground">с каждого заказа</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Icon name="Star" className="mx-auto mb-2 text-primary" size={32} />
                      <div className="font-bold">Подарки</div>
                      <div className="text-xs text-muted-foreground">за уровни</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <Icon name="Percent" className="mx-auto mb-2 text-primary" size={32} />
                      <div className="font-bold">Скидки</div>
                      <div className="text-xs text-muted-foreground">до 20%</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'menu' && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-heading mb-8 text-center">Наше меню</h2>
            
            <div className="flex justify-center gap-3 mb-10 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  className="font-semibold"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenu.map((item, index) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-6">
                    <div className="aspect-square bg-secondary/30 rounded-lg mb-4 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <Badge className="mb-3">{item.category}</Badge>
                    <h4 className="text-xl font-bold font-heading mb-2">{item.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                      <Button>
                        <Icon name="Plus" className="mr-1" size={16} />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'promotions' && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-heading mb-8 text-center">Акции и скидки</h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {promotions.map((promo, index) => (
                <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-primary">{promo.discount}</span>
                    </div>
                    <h4 className="text-xl font-bold font-heading mb-2">{promo.title}</h4>
                    <p className="text-muted-foreground">{promo.description}</p>
                    <Button className="mt-4 w-full">Заказать</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'delivery' && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold font-heading mb-8 text-center">Доставка</h2>
            
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Icon name="Clock" className="mx-auto mb-4 text-primary" size={48} />
                  <h4 className="font-bold font-heading mb-2">30-40 минут</h4>
                  <p className="text-muted-foreground text-sm">Среднее время доставки</p>
                </div>
                <div className="text-center">
                  <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={48} />
                  <h4 className="font-bold font-heading mb-2">До 10 км</h4>
                  <p className="text-muted-foreground text-sm">Зона бесплатной доставки</p>
                </div>
                <div className="text-center">
                  <Icon name="Wallet" className="mx-auto mb-4 text-primary" size={48} />
                  <h4 className="font-bold font-heading mb-2">От 500 ₽</h4>
                  <p className="text-muted-foreground text-sm">Минимальная сумма заказа</p>
                </div>
              </div>

              <div className="bg-secondary/20 p-6 rounded-lg">
                <h4 className="font-bold font-heading mb-4 text-lg">Условия доставки:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 mt-1 text-primary flex-shrink-0" size={18} />
                    <span>Бесплатная доставка при заказе от 1000 ₽</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 mt-1 text-primary flex-shrink-0" size={18} />
                    <span>Доставка за пределами зоны — 150 ₽</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 mt-1 text-primary flex-shrink-0" size={18} />
                    <span>Принимаем оплату картой и наличными</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-2 mt-1 text-primary flex-shrink-0" size={18} />
                    <span>Отслеживание заказа в режиме реального времени</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold font-heading mb-8 text-center">О нас</h2>
            
            <Card className="p-8">
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Пиццерия "ДРУЖНАЯ СЕМЬЯ" — это место, где каждый найдет свою идеальную пиццу. 
                  Мы работаем с 2020 года и за это время завоевали любовь тысяч клиентов.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="text-center p-6 bg-secondary/20 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-muted-foreground">Довольных клиентов</div>
                  </div>
                  <div className="text-center p-6 bg-secondary/20 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">25</div>
                    <div className="text-muted-foreground">Видов пиццы</div>
                  </div>
                  <div className="text-center p-6 bg-secondary/20 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                    <div className="text-muted-foreground">Рейтинг</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading mb-4">Наши преимущества:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-3 mt-1 text-primary flex-shrink-0" size={20} />
                    <span>Используем только свежие и качественные ингредиенты</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-3 mt-1 text-primary flex-shrink-0" size={20} />
                    <span>Тесто делаем вручную каждый день</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-3 mt-1 text-primary flex-shrink-0" size={20} />
                    <span>Выпекаем в настоящей итальянской печи</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="mr-3 mt-1 text-primary flex-shrink-0" size={20} />
                    <span>Быстрая доставка в любую точку города</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold font-heading mb-8 text-center">Контакты</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8">
                <h4 className="text-xl font-bold font-heading mb-6">Свяжитесь с нами</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Phone" className="mr-4 text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="mr-4 text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@druzhnaya-semya.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" className="mr-4 text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">ул. Пушкина, д. 10, Москва</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="mr-4 text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-muted-foreground">Ежедневно 10:00 — 23:00</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h4 className="text-xl font-bold font-heading mb-6">Мы в соцсетях</h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Icon name="MessageCircle" className="mr-3" size={20} />
                    Telegram
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Icon name="Send" className="mr-3" size={20} />
                    VKontakte
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="lg">
                    <Icon name="Instagram" className="mr-3" size={20} />
                    Instagram
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-foreground text-background py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold font-heading text-xl mb-4">🍕 ДРУЖНАЯ СЕМЬЯ</h4>
              <p className="text-background/80 text-sm">Лучшая пицца для всей семьи с 2020 года</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Меню</h5>
              <ul className="space-y-2 text-sm text-background/80">
                <li><button onClick={() => setActiveSection('menu')}>Пиццы</button></li>
                <li><button onClick={() => setActiveSection('promotions')}>Акции</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Информация</h5>
              <ul className="space-y-2 text-sm text-background/80">
                <li><button onClick={() => setActiveSection('delivery')}>Доставка</button></li>
                <li><button onClick={() => setActiveSection('about')}>О нас</button></li>
                <li><button onClick={() => setActiveSection('contacts')}>Контакты</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Контакты</h5>
              <ul className="space-y-2 text-sm text-background/80">
                <li>+7 (999) 123-45-67</li>
                <li>info@druzhnaya-semya.ru</li>
                <li>ул. Пушкина, д. 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            © 2024 ДРУЖНАЯ СЕМЬЯ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;