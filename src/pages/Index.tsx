import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Mail, Mountain, Plane, FileText, Hotel, Map } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import heroImage from "@/assets/hero-hands.jpg";
import storyBalloons from "@/assets/story-balloons.jpg";
import storyBench from "@/assets/story-bench.jpg";
import storyProposal from "@/assets/story-proposal.jpg";
import footerHands from "@/assets/footer-hands.jpg";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Language Switcher Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-end">
        <LanguageSwitcher />
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
        </div>
        
        <div className="relative z-10 text-center text-foreground px-4">
          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-4 animate-in fade-in duration-1000">
            {t("Su June & Eugene", "Су Джун и Евгений")}
          </h1>
          <div className="space-y-2 text-base md:text-xl mb-8 animate-in fade-in duration-1000 delay-200">
            <p>{t(
              "08.08.2026 · Sulusai, near Almaty, Kazakhstan",
              "08.08.2026 · Сулуса́й, недалеко от Алматы, Казахстан"
            )}</p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-8 animate-in fade-in duration-1000 delay-300">
            <p className="text-base md:text-xl font-light">
              {t(
                "We're getting married in the mountains of Kazakhstan and would love for you to celebrate with us.",
                "Мы женимся в горах Казахстана и очень хотим отпраздновать этот день вместе с вами."
              )}
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10 animate-in fade-in duration-1000 delay-400">
            <p className="text-sm md:text-base opacity-80">
              {t(
                "This page has everything you need to plan your trip, from how to get to Almaty to ideas for exploring after the wedding.",
                "Здесь вы найдёте всю нужную информацию: как добраться до Алматы и чем заняться до и после свадьбы."
              )}
            </p>
          </div>

          <div className="flex justify-center animate-in fade-in duration-1000 delay-500">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-rsvp-highlight hover:bg-rsvp-highlight/90 text-primary-foreground font-semibold gap-2"
            >
              <Mail className="w-5 h-5" />
              {t("RSVP (invited guests only)", "RSVP (только для приглашённых гостей)")}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            {t("Our Story", "Наша История")}
          </h2>
          
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-foreground/80">
              {t(
                "A Kazakh–German–Russian boy from Almaty and a Chinese Hakka girl from Malaysia somehow ended up in the same tiny dot on the map: Singapore. One coffee chat led to many more, and suddenly the idea of 'home' started to mean each other.",
                "Казахско‑немецко‑русский парень из Алматы и китайская хака‑девушка из Малайзии каким‑то образом оказались в одном и том же маленьком месте на карте — в Сингапуре. Одна случайная встреча за кофе плавно превратилась в много тёплых разговоров, и понятие «дом» очень быстро стало означать друг друга."
              )}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Milestone 1 - Balloons */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src={storyBalloons} 
                  alt={t("Su June and Eugene at colorful light installation", "Су Джун и Евгений у красочной световой инсталляции")}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2 space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  {t("We crossed paths in Singapore", "Мы встретились в Сингапуре")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "We met in Singapore, both far away from where we grew up, and immediately bonded over food, stories about our families, and life between cultures.",
                    "Мы познакомились в Сингапуре, далеко от мест, где выросли, и сразу нашли общий язык: через еду, рассказы о семьях и жизнь между разными культурами."
                  )}
                </p>
              </div>
            </div>

            {/* Milestone 2 - Bench */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-primary">
                  {t("Many flights, one team", "Множество перелётов, одна команда")}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    "Between work trips, family visits, and holidays, we collected a lot of boarding passes and even more inside jokes. Somewhere between airports, we quietly became a team.",
                    "Рабочие командировки, поездки к родным и совместные отпуска подарили нам целую коллекцию посадочных талонов и ещё больше внутренних шуток. Где‑то между аэропортами мы очень незаметно стали настоящей командой."
                  )}
                </p>
              </div>
              <div>
                <img 
                  src={storyBench} 
                  alt={t("Su June and Eugene on a bench in nature", "Су Джун и Евгений на скамейке на природе")}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Milestone 3 - Proposal */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-primary">
                {t("The proposal", "Предложение")}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  "Surrounded by beautiful views and way too many photos, Eugene asked, Su June said yes, and both of us cried more than expected.",
                  "В окружении красивых видов и бесконечного количества фотографий Евгений сделал предложение, Су Джун сказала «да», и оба вдруг расплакались куда сильнее, чем планировали."
                )}
              </p>
              <div className="mt-6">
                <img 
                  src={storyProposal} 
                  alt={t("The proposal at Jewel Changi Airport", "Предложение в Jewel Changi Airport")}
                  className="rounded-lg shadow-lg w-full h-auto max-w-lg mx-auto"
                />
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h3 className="font-serif text-2xl font-semibold text-primary">
                {t("Now it's wedding time", "Теперь время свадьбы")}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  "Next stop: the mountains near Almaty, to bring together our families and friends from all over the world and start the next chapter.",
                  "Следующая остановка — горы под Алматы, где мы соберём родных и друзей со всего мира и начнём новую главу нашей истории."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Day Section */}
      <section id="wedding-day" className="section-padding bg-section-alt">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            {t("Wedding Day", "День Свадьбы")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-2xl font-serif text-primary">
                    {t("8 August 2026", "8 августа 2026")}
                  </p>
                  <p className="text-xl">
                    Sulusai (Sulu Sai) Resort & SPA
                    <br />
                    <span className="text-base text-muted-foreground">
                      {t("Near Almaty, Kazakhstan", "Недалеко от Алматы, Казахстан")}
                    </span>
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground/80">
                    {t(
                      "On 8 August 2026, we'll be celebrating our wedding at Sulusai, a cozy mountain resort just outside Almaty. Think fresh air, pine trees, big skies, and a lot of happy tears.",
                      "8 августа 2026 года мы будем праздновать нашу свадьбу в Сулусае — уютном горном курорте недалеко от Алматы. Представьте свежий воздух, сосны, огромное небо и много‑много счастливых слёз."
                    )}
                  </p>
                  
                  <p className="text-foreground/80">
                    {t(
                      "Sulusai is a peaceful spot in the foothills with beautiful views, wooden details, and nature all around. It's the kind of place where time slows down a little, and evenings feel extra magical.",
                      "Сулусай — это тихое место в предгорьях с прекрасными видами, деревянными деталями и природой вокруг. Здесь время будто идёт медленнее, а вечера кажутся особенно волшебными."
                    )}
                  </p>

                  <p className="text-foreground/70">
                    {t(
                      "Exact timing and program for the day will be shared closer to the date, but you can already plan to spend the whole day and evening with us.",
                      "Точное время и программа дня будут опубликованы ближе к дате, но уже сейчас можно смело планировать провести с нами весь день и вечер."
                    )}
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open('https://maps.google.com/?q=Sulusai+Resort+Almaty', '_blank')}
                  >
                    <MapPin className="w-4 h-4" />
                    {t("View venue on map", "Посмотреть место на карте")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collapsible Travel Info Sections */}
      <section id="travel-info" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            {t("Travel & Stay", "Путешествие и проживание")}
          </h2>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Travel to Almaty */}
              <AccordionItem value="travel" className="border rounded-lg bg-card px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <Plane className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                      {t("Travel to Almaty", "Как добраться до Алматы")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      {t(
                        "Almaty is the largest city in Kazakhstan, set right next to the mountains. It's easy to reach with a combination of regional and international flights.",
                        "Алматы — крупнейший город Казахстана, который буквально упирается в горы. Добраться сюда можно с помощью удобных стыковочных и прямых рейсов."
                      )}
                    </p>

                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">{t("Airport & Getting Around", "Аэропорт и трансфер")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "You'll be flying into Almaty International Airport (ALA). From the airport, it's about 25–40 minutes by car to the city centre.",
                            "Вы прилетите в Международный аэропорт Алматы (ALA). От аэропорта до центра города примерно 25–40 минут на машине."
                          )}
                        </p>
                      </div>

                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">{t("From Singapore & Southeast Asia", "Из Сингапура и Юго-Восточной Азии")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "One or two connections via regional hubs, total travel time around 10–13 hours including transit.",
                            "Одна‑две стыковки через региональные хабы, общее время в пути около 10–13 часов."
                          )}
                        </p>
                      </div>

                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">{t("From Europe", "Из Европы")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "Via hubs such as Istanbul, Dubai, or Frankfurt. Total travel time around 7–10 hours.",
                            "Через хабы — Стамбул, Дубай или Франкфурт. Весь путь около 7–10 часов."
                          )}
                        </p>
                      </div>

                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">{t("From the US & Long-Haul", "Из США и дальних направлений")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "Expect at least two flights and 14–20 hours total travel time via European or Middle Eastern hubs.",
                            "Минимум два перелёта, 14–20 часов через европейские или ближневосточные хабы."
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
                      <p className="text-sm text-foreground/70">
                        <strong>{t("Transport to venue:", "Трансфер к месту свадьбы:")}</strong> {t(
                          "Closer to the wedding, we'll share details about how to get from the city to Sulusai.",
                          "Ближе к свадьбе мы поделимся информацией о том, как добраться из города до Сулусая."
                        )}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Visa & Entry */}
              <AccordionItem value="visa" className="border rounded-lg bg-card px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                      {t("Visa & Entry Basics", "Визы и въезд")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <div className="p-4 bg-accent/20 rounded-lg border border-accent">
                      <p className="text-foreground/80">
                        {t(
                          "Kazakhstan has a friendly visa policy for many countries. However, rules can change before August 2026, so please always check official sources before you travel.",
                          "У Казахстана лояльный визовый режим для многих стран. Но правила могут измениться к августу 2026 года, поэтому проверяйте актуальную информацию перед поездкой."
                        )}
                      </p>
                    </div>

                    <p className="text-foreground/80">
                      {t(
                        "Citizens of Singapore, Malaysia, Germany, Italy, Australia, the United States, and many others can usually enter Kazakhstan visa‑free for a limited number of days.",
                        "Граждане Сингапура, Малайзии, Германии, Италии, Австралии, США и ряда других государств обычно могут въезжать в Казахстан без визы на ограниченный срок."
                      )}
                    </p>

                    <div className="pt-2">
                      <h4 className="font-semibold mb-3">{t("Helpful Resources:", "Полезные ресурсы:")}</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {t("Official information on Kazakhstan's visa regime (Ministry of Foreign Affairs)", "Официальная информация о визовом режиме Казахстана (МИД)")}</li>
                        <li>• {t("Travel advice from your country's foreign affairs ministry", "Рекомендации от МИДа вашей страны")}</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Where to Stay */}
              <AccordionItem value="stay" className="border rounded-lg bg-card px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <Hotel className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                      {t("Where to Stay", "Где остановиться")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      {t(
                        "There are many beautiful places to stay in and around Almaty, from cozy city apartments to mountain resorts.",
                        "В Алматы и вокруг города есть много красивых вариантов размещения — от уютных квартир в центре до горных курортов."
                      )}
                    </p>

                    <p className="text-foreground/80">
                      {t(
                        "We'll share specific recommendations for hotels and areas a bit closer to the date.",
                        "Конкретные рекомендации по отелям и районам мы отправим ближе к дате свадьбы."
                      )}
                    </p>

                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-start gap-3">
                        <Mountain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Oi Qaragai (Lesnaya Skazka)</h4>
                          <p className="text-sm text-muted-foreground">
                            {t(
                              "If you like the idea of waking up in the mountains, places like Oi Qaragai are great for a short getaway before or after the wedding.",
                              "Если вам нравится идея просыпаться в горах, «Ой‑Карагай» — отличный вариант для мини‑отпуска до или после свадьбы."
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Suggested Itineraries */}
              <AccordionItem value="itineraries" className="border rounded-lg bg-card px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <Map className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                      {t("Suggested Itineraries", "Предлагаемые маршруты")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      {t(
                        "Many guests will arrive on Thursday, celebrate with us on Saturday 8 August, and then stay longer to explore.",
                        "Многие гости прилетят в четверг, отметят с нами свадьбу в субботу 8 августа, а потом останутся подольше."
                      )}
                    </p>

                    <div className="p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-foreground/80">
                        {t(
                          "These are not fixed tours, just suggestions. You can mix and match or join small group tours with local guides.",
                          "Это не готовые туры, а лишь идеи. Можно комбинировать или присоединиться к турам с местными гидами."
                        )}
                      </p>
                    </div>

                    {/* 5-Day Itinerary */}
                    <div className="space-y-4">
                      <h4 className="font-serif text-lg font-semibold text-primary">
                        {t("5-Day Extended Trip", "5-дневная поездка")}
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex gap-3">
                          <span className="font-semibold text-primary min-w-[80px]">{t("Day 1", "День 1")}</span>
                          <span className="text-muted-foreground">{t("Arrive, check in, gentle walk", "Прилёт, заселение, прогулка")}</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-semibold text-primary min-w-[80px]">{t("Day 2", "День 2")}</span>
                          <span className="text-muted-foreground">{t("Explore city, Kok Tobe, markets", "Город, Кок‑Тобе, рынки")}</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-semibold text-primary min-w-[80px]">{t("Day 3", "День 3")}</span>
                          <span className="text-muted-foreground">{t("Wedding day!", "День свадьбы!")}</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-semibold text-primary min-w-[80px]">{t("Day 4", "День 4")}</span>
                          <span className="text-muted-foreground">{t("Day trip to lakes (Big Almaty or Issyk)", "Озёра (Большое Алматинское или Иссык)")}</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-semibold text-primary min-w-[80px]">{t("Day 5", "День 5")}</span>
                          <span className="text-muted-foreground">{t("Relax, last sights, departure", "Отдых, покупки, вылет")}</span>
                        </div>
                      </div>
                    </div>

                    {/* 7-Day Itinerary */}
                    <div className="space-y-4">
                      <h4 className="font-serif text-lg font-semibold text-primary">
                        {t("7-Day Full Experience", "7-дневный полный опыт")}
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex gap-3">
                          <span className="font-semibold text-primary min-w-[80px]">{t("Days 1–2", "Дни 1–2")}</span>
                          <span className="text-muted-foreground">{t("Arrival + city exploration", "Прилёт + город")}</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-semibold text-primary min-w-[80px]">{t("Day 3", "День 3")}</span>
                          <span className="text-muted-foreground">{t("Wedding day", "День свадьбы")}</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-semibold text-primary min-w-[80px]">{t("Days 4–5", "Дни 4–5")}</span>
                          <span className="text-muted-foreground">{t("Charyn Canyon + Kolsai/Kaindy lakes", "Чарынский каньон + Кольсай/Каинды")}</span>
                        </div>
                        <div className="flex gap-3">
                          <span className="font-semibold text-primary min-w-[80px]">{t("Days 6–7", "Дни 6–7")}</span>
                          <span className="text-muted-foreground">{t("Slow city day + departure", "Спа, кофе, вылет")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* RSVP Section - Highlighted */}
      <section id="rsvp" className="section-padding bg-rsvp-highlight/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-rsvp-highlight shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
                  RSVP
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="text-center">
                    <p className="text-lg text-foreground/80">
                      {t(
                        "If you have received an invitation from us, we would be very happy if you could let us know whether you can join.",
                        "Если вы получили от нас приглашение, нам будет очень приятно, если вы сообщите, сможете ли приехать."
                      )}
                    </p>
                  </div>

                  <div className="p-6 bg-accent/30 rounded-lg border border-accent/50 space-y-4">
                    <p className="font-semibold text-center">{t("Important:", "Важно:")}</p>
                    <div className="space-y-3 text-sm">
                      <p className="text-foreground/80">
                        {t(
                          "To help us plan the day and the seating carefully, please note:",
                          "Чтобы мы могли аккуратно спланировать день и рассадку, пожалуйста, обратите внимание:"
                        )}
                      </p>
                      <ul className="space-y-2 text-foreground/70">
                        <li>• {t(
                          "Only invited guests should fill in the RSVP form.",
                          "Заполнять форму RSVP должны только гости, которые получили персональное приглашение."
                        )}</li>
                        <li>• {t(
                          "Please do not bring additional plus‑ones unless they are clearly included in your invitation.",
                          "Пожалуйста, не приводите дополнительных +1, если они явно не указаны в вашем приглашении."
                        )}</li>
                        <li>• {t(
                          "Please do not bring children unless they are specifically invited.",
                          "Пожалуйста, не приводите детей, если они отдельно не приглашены."
                        )}</li>
                      </ul>
                      <p className="text-foreground/70 pt-2">
                        {t(
                          "Thank you for understanding and helping us keep the celebration personal and comfortable for everyone.",
                          "Спасибо за понимание и за то, что помогаете нам сделать праздник личным и комфортным для всех гостей."
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 gap-2"
                    onClick={() => window.open('https://notion.so/your-rsvp-form', '_blank')}
                  >
                    <Mail className="w-5 h-5" />
                    {t("RSVP now", "Заполнить RSVP")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs & Contact Section */}
      <section id="faqs" className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            {t("FAQs & Contact", "Вопросы и контакты")}
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  {t("Frequently Asked Questions", "Часто задаваемые вопросы")}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">{t("What will the weather be like?", "Какая погода будет?")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Early August in Almaty is usually warm in the city and cooler in the mountains, especially in the evenings. Bring a light layer for nights outdoors.",
                        "В начале августа в городе обычно тепло, а в горах прохладнее, особенно вечером. Возьмите лёгкую тёплую одежду."
                      )}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t("Can I arrive earlier or stay longer?", "Могу ли я приехать раньше или остаться дольше?")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Yes! Many guests plan to arrive on Thursday or Friday and stay a few extra days to explore.",
                        "Да! Многие гости планируют прилететь в четверг или пятницу и остаться на несколько дней."
                      )}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t("What about food and dietary restrictions?", "Что насчет еды?")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Please let us know about any dietary restrictions in your RSVP form so we can accommodate them.",
                        "Укажите все пищевые ограничения в форме RSVP, чтобы мы могли учесть ваши пожелания."
                      )}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">{t("How will we get to the venue?", "Как доберёмся до места?")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t(
                        "Closer to the date, we'll share details about transport between Almaty city and Sulusai.",
                        "Ближе к дате мы поделимся информацией о транспорте из Алматы до Сулусая."
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6 text-primary">
                  {t("Get in Touch", "Связаться с нами")}
                </h3>
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    {t(
                      "If you have any questions about travel, visas, or plans, please feel free to reach out to us.",
                      "Если у вас есть вопросы о поездке, визе или планах, пожалуйста, не стесняйтесь написать нам."
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {t("Email us: [your email here]", "Написать нам: [ваш email]")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Image */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom flex justify-center">
          <img 
            src={footerHands} 
            alt={t("Hands with engagement ring", "Руки с обручальным кольцом")}
            className="rounded-lg shadow-lg max-w-sm md:max-w-md w-full h-auto"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container-custom text-center">
          <p className="font-serif text-2xl mb-2">{t("Su June & Eugene", "Су Джун и Евгений")}</p>
          <p className="text-sm opacity-80">{t("8 August 2026 · Almaty, Kazakhstan", "8 августа 2026 · Алматы, Казахстан")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
