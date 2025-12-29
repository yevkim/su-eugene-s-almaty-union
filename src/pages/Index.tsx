import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Mail, Mountain, Plane, FileText, Hotel } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/useParallax";
import heroImage from "@/assets/story-proposal.jpg";
import storyProposal from "@/assets/story-proposal2.jpeg";
import almatyFlights from "@/assets/almaty-flights.png";
import carAlmaty from "@/assets/car-almaty.jpg";
import carBao from "@/assets/car-bao.jpg";
import carCharyn from "@/assets/car-charyn.jpg";
import carKolsai from "@/assets/car-kolsai-lake.jpg";
import carMountain from "@/assets/car-mountain.jpeg";
const Index = () => {
  const {
    t
  } = useLanguage();
  const parallaxOffset = useParallax(0.3);
  return <div className="min-h-screen">
      {/* Language Switcher Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-end">
        <LanguageSwitcher />
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-start justify-center overflow-hidden pt-24 md:pt-28">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110" style={{
        backgroundImage: `url(${heroImage})`,
        transform: `translateY(${parallaxOffset}px) scale(1.1)`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
        </div>

        <div className="relative z-10 text-center text-foreground px-4">
          <p className="text-lg md:text-2xl tracking-widest mb-4 italic opacity-0 animate-stagger-reveal" style={{ animationDelay: '0.1s' }}>
            {t("SAVE THE DATE", "СОХРАНИТЕ ДАТУ")}
          </p>
          <h1 className="font-serif text-5xl md:text-8xl mb-2 opacity-0 animate-stagger-reveal" style={{ animationDelay: '0.2s' }}>
            {t("Eugene & June", "Евгений и Джун")}
          </h1>
          <div className="space-y-2 mb-8 opacity-0 animate-stagger-reveal" style={{ animationDelay: '0.4s' }}>
            <p className="font-serif text-3xl md:text-5xl">
              {t("8.8.2026", "8.8.2026")}
            </p>
            <p className="text-base md:text-xl py-4">
              {t("Sulu Sai, Almaty, Kazakhstan", "Сулу Сай, Алматы, Казахстан")}
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10 opacity-0 animate-stagger-reveal" style={{ animationDelay: '0.6s' }}>
          <p className="text-base md:text-xl">
              {t(
                "We’re getting married in the mountains of Kazakhstan!",
                "Мы женимся в Казахстане! "
              )}
            </p>
            <p className="text-base md:text-xl">
              {t(
                "Join us as we celebrate the union of KimChee.",
                "Будем рады видеть вас на нашей свадьбе."
              )}
            </p>
          </div>

          {/* <div className="flex justify-center opacity-20 animate-stagger-reveal" style={{
          animationDelay: '0.7s'
        }}>
            <Button size="lg" onClick={() => document.getElementById('rsvp')?.scrollIntoView({
            behavior: 'smooth'
          })} className="bg-rsvp-highlight hover:bg-rsvp-highlight/90 text-primary-foreground font-semibold gap-2">
              <Mail className="w-5 h-5" />
              {t("RSVP (invited guests only)", "Подтвердить участие")}
            </Button>
          </div> */}
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="bg-background">
        <div className="container-custom py-4">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-primary">
              {t("Our Story", "Наша история")}
            </h2>
          </ScrollReveal>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-full md:w-auto">
            <div className="inset-0 flex items-start justify-center">
                <ScrollReveal>
                  <div className="w-full max-w-2xl py-4 px-4 md:px-8 text-center ">
                    {/* <div className="bg-background/80  md:p-8 shadow-lg"> */}
                      <p className="text-base md:text-lg text-foreground/90">
                        {t("We met upside down in a yoga class. One chat turned into lunch, and the rest... we’ll save for the wedding.", "Мы познакомились на йоге — буквально вниз головой. Короткий разговор после занятия перерос в обед, а остальную историю мы расскажем уже на свадьбе.")}
                      </p>
                    {/* </div> */}
                  </div>
                </ScrollReveal>
            </div>
            <img src={storyProposal} alt={t("The proposal at Jewel Changi Airport", "Предложение в Jewel Changi Airport")} className="w-full h-auto md:max-h-screen md:object-contain" />

          </div>
        </div>
      </section>

      {/* Wedding Day Section */}
      <section id="wedding-day" className="section-padding bg-section-alt">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-6 text-primary">
              {t("Wedding Day", "Программа дня")}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <p className="text-2xl font-serif text-primary">
                      {t("8.8.2026", "8.8.2026")}
                    </p>
                    <p className="text-xl">
                      {t("Sulu Sai Mountain Resort", "Горный Курорт Сулу Сай")}
                      <br />
                      <span className="text-base text-muted-foreground">
                        {t("Lesnaya Skazka, Oi Qaragai, Almaty, Kazakhstan", "Лесная Сказка, Ой Карагай, Алматы, Казахстан")}
                      </span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-foreground/80">
                      {t(
                        "We invite you to join us starting at 3:00 PM for an outdoor ceremony on the green lawn of Sulu Sai, followed by a reception, dinner, and dancing until late in the resort’s Grand Hall.",
                        "Ждем вас к 15:00 на церемонию под открытым небом на лужайке Сулу Сай, после чего мы переместимся в банкетный зал отеля на праздничный ужин и танцы до поздней ночи."
                      )}
                    </p>

                    <p className="text-foreground/70">
                      {t("More details on timing and the full program will be shared closer to the date.", "Подробное расписание и программу дня отправим ближе к дате.")}
                    </p>
                  </div>

                  <div className="text-center pt-4">
                    <Button variant="outline" className="gap-2" onClick={() => window.open('https://maps.app.goo.gl/QYGnUd4ifX9FKcP9A', '_blank')}>
                      <MapPin className="w-4 h-4" />
                      {t("View on map", "Посмотреть на карте")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Collapsible Travel Info Sections */}
      <section id="travel-info" className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-center mb-6 text-primary">
              {t("Travel & Stay", "Путешествие и проживание")}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
              {/* Travel to Almaty */}
              <AccordionItem value="travel" className="border rounded-lg bg-card px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <Plane className="w-6 h-6 text-primary flex-shrink-0 animate-float" />
                    <span className="font-serif text-xl md:text-2xl text-primary">
                      {t("Travel to Kazakhstan", "Как добраться")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      {t("Getting here is easy, with many direct flights from major hubs in Europe and Asia arriving at Almaty International Airport (ALA). To fully enjoy the pre-wedding atmosphere and explore the city, we suggest arriving by Thursday, August 6th.", "В город летает множество прямых рейсов из Европы и Азии, пункт назначения — Международный аэропорт Алматы (ALA). Чтобы вы успели отдохнуть и познакомиться с городом, мы рекомендуем прилетать в четверг, 6 августа.")}
                    </p>
                    <p className="text-foreground/80">
                      {t("Citizens of Singapore, Malaysia, Germany, Italy, Australia, the United States, and many others can usually enter Kazakhstan visa‑free for a limited number of days.", "Граждане Сингапура, Малайзии, Германии, Италии, Австралии, США и ряда других государств обычно могут въезжать в Казахстан без визы на ограниченный срок.")}
                    </p>

                    <div className="pt-2">
                      <a href="https://www.gov.kz/memleket/entities/mfa/press/article/details/6764?lang=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {t("Official information on Kazakhstan's visa regime (Ministry of Foreign Affairs)", "Официальная информация о визовом режиме Казахстана (МИД)")}
                      </a>
                    </div>

                    <img src={almatyFlights} alt={t("Almaty Flights", "Рейсы в Алматы")} className="w-full h-full object-cover" />
                    <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
                      <p className="text-sm text-foreground/70">
                        <strong>{t("Transport to venue:", "Трансфер к месту свадьбы:")}</strong> {t(
                          "Closer to the wedding, we'll share details about how to get from the city to Sulu Sai.",
                          "Накануне свадьбы мы подскажем, как удобнее добраться из города до Sulu Sai."
                        )}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Top Sights */}
              <AccordionItem value="top-sights" className="border rounded-lg bg-card px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 animate-float" style={{ animationDelay: '0.3s' }} />
                    <span className="font-serif text-xl md:text-2xl text-primary">
                      {t("Top Sights", "Достопримечательности")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">

                        <div className="p-4 bg-muted/30 rounded-lg mb-4">
                          <p className="text-sm text-foreground/80">
                            {t("Kazakhstan is a hidden gem where nomadic traditions meet Silk Road history and legendary hospitality. At its heart lies Almaty: a vibrant mix of European charm and Soviet soul, right at the foot of the Trans-Ili Alatau mountains. Whether you’re sipping specialty coffee in a cozy city cafe or hiking mountain peaks just 30 minutes later, Almaty’s chill vibe is unmatched.", "Казахстан — это страна с большой душой, где кочевое прошлое переплетается с историей Шелкового пути и искренним гостеприимством. Алматы, «город-сад», уютно устроился прямо у подножия Тянь-Шаня. Здесь европейская архитектура соседствует с советским модернизмом, а лучшие кофейни и бары — с заснеженными пиками. Вайб Алматы просто неповторим: полчаса из центра — и вы уже в горах.")}
                          </p>
                        </div>
                        {/* Carousel of Places to Visit */}
                        <Carousel className="w-full">
                          <CarouselContent>
                            <CarouselItem>
                              <div className="space-y-4">
                                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                                  <img src={carAlmaty} alt={t("City Exploration", "Исследование города")} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <h4 className="font-serif text-lg text-primary mb-1">
                                    {t("City Exploration", "Исследование города")}
                                  </h4>
                                  <p className="text-sm text-foreground/80">
                                    {t("Explore Almaty's vibrant city center, visit Kok Tobe for panoramic views, and discover local markets filled with traditional crafts and delicious food.", "Исследуйте центр Алматы, посетите Кок‑Тобе для панорамных видов и откройте для себя местные рынки с традиционными ремеслами и вкусной едой.")}
                                  </p>
                                </div>
                              </div>
                            </CarouselItem>
                            <CarouselItem>
                              <div className="space-y-4">
                                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                                  <img src={carBao} alt={t("Mountain Lakes", "Горные озёра")} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <h4 className="font-serif text-lg text-primary mb-1">
                                    {t("Mountain Lakes", "Горные озёра")}
                                  </h4>
                                  <p className="text-sm text-foreground/80">
                                    {t("Take a day trip to Big Almaty Lake or Issyk Lake, surrounded by stunning mountain scenery. Perfect for hiking and photography.", "Совершите однодневную поездку на Большое Алматинское озеро или озеро Иссык, окруженные потрясающими горными пейзажами. Идеально для пеших прогулок и фотографии.")}
                                  </p>
                                </div>
                              </div>
                            </CarouselItem>
                            <CarouselItem>
                              <div className="space-y-4">
                                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                                  <img src={carCharyn} alt={t("Charyn Canyon", "Чарынский каньон")} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <h4 className="font-serif text-lg text-primary mb-1">
                                    {t("Charyn Canyon", "Чарынский каньон")}
                                  </h4>
                                  <p className="text-sm text-foreground/80">
                                    {t("Visit the breathtaking Charyn Canyon, often called the 'Grand Canyon of Kazakhstan'. A natural wonder with dramatic rock formations and scenic viewpoints.", "Посетите захватывающий Чарынский каньон, часто называемый 'Гранд-Каньоном Казахстана'. Природное чудо с драматическими скальными образованиями и живописными смотровыми площадками.")}
                                  </p>
                                </div>
                              </div>
                            </CarouselItem>
                            <CarouselItem>
                              <div className="space-y-4">
                                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                                  <img src={carKolsai} alt={t("Kolsai & Kaindy Lakes", "Озёра Кольсай и Каинды")} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <h4 className="font-serif text-lg text-primary mb-1">
                                    {t("Kolsai & Kaindy Lakes", "Озёра Кольсай и Каинды")}
                                  </h4>
                                  <p className="text-sm text-foreground/80">
                                    {t("Discover the stunning Kolsai Lakes and the unique sunken forest of Kaindy Lake. These emerald lakes are hidden gems in the Tien Shan mountains.", "Откройте для себя потрясающие озёра Кольсай и уникальный затопленный лес озера Каинды. Эти изумрудные озёра — скрытые жемчужины в горах Тянь-Шаня.")}
                                  </p>
                                </div>
                              </div>
                            </CarouselItem>
                            <CarouselItem>
                              <div className="space-y-4">
                                <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
                                  <img src={carMountain} alt={t("Mountain Resorts", "Горные курорты")} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <h4 className="font-serif text-lg text-primary mb-1">
                                    {t("Mountain Resorts & Relaxation", "Горные курорты и отдых")}
                                  </h4>
                                  <p className="text-sm text-foreground/80">
                                    {t("Enjoy the peaceful mountain atmosphere at resorts like Oi Qaragai. Perfect for spa treatments, nature walks, and unwinding before or after the wedding.", "Насладитесь спокойной горной атмосферой в таких курортах, как Ой Карагай. Идеально для спа-процедур, прогулок на природе и отдыха до или после свадьбы.")}
                                  </p>
                                </div>
                              </div>
                            </CarouselItem>
                          </CarouselContent>
                          <CarouselPrevious className="left-2 md:left-4" />
                          <CarouselNext className="right-2 md:right-4" />
                        </Carousel>

                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>


              {/* Where to Stay */}
              <AccordionItem value="stay" className="border rounded-lg bg-card px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <Hotel className="w-6 h-6 text-primary flex-shrink-0 animate-float" style={{ animationDelay: '1s' }} />
                    <span className="font-serif text-xl md:text-2xl text-primary">
                      {t("Where to Stay", "Проживание")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      {t("There are many beautiful places to stay in and around Almaty, from cozy city apartments to mountain resorts.", "В Алматы и вокруг города есть много красивых вариантов размещения — от уютных квартир в центре до горных курортов.")}
                    </p>

                    <p className="text-foreground/80">
                      {t("We'll share specific recommendations for hotels and areas a bit closer to the date.", "Конкретные рекомендации по отелям и районам мы отправим ближе к дате свадьбы.")}
                    </p>

                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-start gap-3">
                        <Mountain className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-float" style={{
                          animationDelay: '1.5s'
                        }} />
                        <div>
                          <h4 className="text-primary mb-1">Oi Qaragai (Lesnaya Skazka)</h4>
                          <p className="text-sm text-muted-foreground">
                            {t("If you like the idea of waking up in the mountains, places like Oi Qaragai are great for a short getaway before or after the wedding.", "Если вы хотите просыпаться с видом на горы, Oi Qaragai («Лесная сказка») — отличное место, чтобы отдохнуть пару дней.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>


              {/* FAQs */}
              <AccordionItem value="faqs" className="border rounded-lg bg-card px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0 animate-float" style={{ animationDelay: '2s' }} />
                    <span className="font-serif text-xl md:text-2xl text-primary">
                      {t("FAQs", "Часто задаваемые вопросы")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-1">{t("What will the weather be like?", "Какая погода будет?")}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t("Early August in Almaty is usually warm in the city (~30°C) and cooler in the mountains, especially in the evenings. Bring a light layer for nights outdoors.", "В начале августа в Алматы обычно жарко (~30°C), но в горах прохладнее, особенно по вечерам. Возьмите с собой легкую куртку или кардиган для вечерних прогулок.")}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-1">{t("What currency is used?", "Какая валюта используется?")}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t("The local currency is the Kazakhstani Tenge (KZT). Cards (Visa/Mastercard) are widely accepted in cafes and shops, but it's good to have some cash for markets or small tips. You can exchange USD or EUR easily at local exchange offices.", "Официальная валюта — казахстанский тенге (KZT). Почти везде принимают карты (Visa/Mastercard), но для рынков или чаевых лучше иметь при себе немного наличных. Обменять валюту (USD/EUR) можно в любом обменнике города.")}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-1">{t("Which apps should I download?", "Какие приложения мне нужно скачать?")}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t("For taxis and food delivery, download Yandex Go (works like Uber or Grab). For city navigation and finding the best spots, 2GIS is more detailed than Google Maps.", "Для заказа такси и доставки еды скачайте Yandex Go (работает как Uber или Grab). А для навигации и поиска мест лучше всего использовать 2GIS — он здесь точнее, чем Google Maps.")}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-1">{t("What about food and dietary restrictions?", "Что насчет еды?")}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t("Please let us know about any allergies or restrictions in your RSVP form so we can plan the menu accordingly.", "Пожалуйста, укажите ваши диетические предпочтения или аллергии в форме RSVP, чтобы мы могли это учесть при составлении меню.")}
                      </p>
                    </div>

                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* RSVP Section - Highlighted */}
      <section id="rsvp" className="section-padding bg-rsvp-highlight/30">
        <div className="container-custom">
          <ScrollReveal animation="reveal-scale">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-rsvp-highlight shadow-lg">
                <CardContent className="p-8 md:p-10">
                  <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-primary">
                    RSVP
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="text-center">
                      <p className="text-lg text-foreground/80">
                        {t("We can’t wait to celebrate with you! Invited guests only: Please RSVP by 31 January 2026.", "Мы очень ждем встречи с вами! Только для приглашенных гостей: Пожалуйста, подтвердите участие до 31 Января 2026.")}
                      </p>
                    </div>

                  </div>

                  <div className="text-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 gap-2" onClick={() => window.open('https://forms.gle/LgEozZW4r5iap4ex8', '_blank')}>
                      <Mail className="w-5 h-5" />
                      {t("RSVP now", "Заполнить RSVP")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container-custom text-center">
          <p className="font-serif text-2xl mb-2">{t("June & Eugene", "Джун и Евгений")}</p>
          <p className="text-sm opacity-80">{t("8 August 2026 · Almaty, Kazakhstan", "8 августа 2026 · Алматы, Казахстан")}</p>
        </div>
      </footer>
    </div>;
};
export default Index;
