import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Mail, Mountain, Plane, FileText, Hotel } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-hands.jpg";
import storyProposal from "@/assets/story-proposal.jpg";

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
            {t("June & Eugene", "Джун и Евгений")}
          </h1>
          <div className="space-y-2 text-base md:text-xl mb-8 animate-in fade-in duration-1000 delay-200">
            <p>{t(
              "08.08.2026 · Алматы, Казахстан",
              "08.08.2026 · Алматы"
            )}</p>
          </div>

          <div className="max-w-2xl mx-auto mb-10 animate-in fade-in duration-1000 delay-300">
            <p className="text-base md:text-xl font-light">
              {t(
                "We're getting married in the mountains of Kazakhstan and would love for you to celebrate with us.",
                "Мы празднуем свадьбу в горах Заилийского Алатау и будем очень рады видеть вас."
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
              {t("RSVP (invited guests only)", "Подтвердить участие")}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              {t("Our Story", "Наша история")}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <p className="text-lg text-foreground/80">
                {t(
                  "We actually met upside down in a yoga class — literally. One chat after class turned into a lunch, then into many more dates, and everything else unfolded naturally from there. The rest of the story… we will save for the wedding.",
                  "Мы встретились вверх ногами — в прямом смысле, на классе йоги. Один разговор после тренировки превратился в обед, потом в свидания… а дальше всё сложилось само собой. Полную историю расскажем уже на свадьбе."
                )}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-scale" delay={200}>
            <div className="max-w-lg mx-auto">
              <img
                src={storyProposal}
                alt={t("The proposal at Jewel Changi Airport", "Предложение в Jewel Changi Airport")}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Wedding Day Section */}
      <section id="wedding-day" className="section-padding bg-section-alt">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
              {t("Wedding Day", "Программа дня")}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <p className="text-2xl font-serif text-primary">
                      {t("8 August 2026", "8 августа 2026")}
                    </p>
                    <p className="text-xl">
                      Suly Sai Resort & SPA
                      <br />
                      <span className="text-base text-muted-foreground">
                        {t("Near Almaty, Kazakhstan", "В предгорьях Алматы")}
                      </span>
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-foreground/80">
                      {t(
                        "Our wedding will take place at Suly Sai, a beautiful spot in the mountains just outside Almaty. It will be an outdoor + indoor celebration, surrounded by nature and fresh air.",
                        "Свадьба пройдёт в Suly Sai. Это красивое место в горах прямо над городом. Праздник будет и на открытом воздухе, и внутри — в окружении природы и свежести."
                      )}
                    </p>

                    <p className="text-foreground/70">
                      {t(
                        "More details on timing and the full program will be shared closer to the date.",
                        "Подробное расписание и программу дня отправим ближе к дате."
                      )}
                    </p>
                  </div>

                  <div className="text-center pt-4">
                    <Button
                      variant="outline"
                      className="gap-2"
                      onClick={() => window.open('https://maps.app.goo.gl/QYGnUd4ifX9FKcP9A', '_blank')}
                    >
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
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
                    <Plane className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                      {t("Travel to Almaty", "Как добраться")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      {t(
                        "Almaty is the largest city in Kazakhstan, set right next to the mountains. It's easy to reach with a combination of regional and international flights. You'll be flying into Almaty International Airport (ALA).",
                        "Алматы — крупнейший город Казахстана, расположенный у подножия гор. Сюда летает множество удобных рейсов. Вам нужен Международный аэропорт Алматы (ALA)."
                      )}
                    </p>

                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">{t("Suggested Itineraries", "Что посмотреть")}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t(
                            "Many guests will arrive on Thursday, celebrate with us on Saturday 8 August, and then stay longer to explore.",
                            "Многие гости прилетают в четверг и планируют остаться подольше, чтобы погулять по горам и городу."
                          )}
                        </p>

                        <div className="p-4 bg-muted/30 rounded-lg">
                          <p className="text-sm text-foreground/80">
                            {t(
                              "These are not fixed tours, just suggestions. You can mix and match or join small group tours with local guides.",
                              "Это просто идеи для вдохновения. Вы можете свободно менять планы или взять гида."
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
                              <span className="font-semibold text-primary min-w-[80px]">{t("6 August", "6 августа")}</span>
                              <span className="text-muted-foreground">{t("Arrive, check in, gentle walk", "Прилёт, заселение, прогулка")}</span>
                            </div>
                            <div className="flex gap-3">
                              <span className="font-semibold text-primary min-w-[80px]">{t("7 August", "7 августа")}</span>
                              <span className="text-muted-foreground">{t("Explore city, Kok Tobe, markets", "Город, Кок‑Тобе, рынки")}</span>
                            </div>
                            <div className="flex gap-3">
                              <span className="font-semibold text-primary min-w-[80px]">{t("8 August", "8 августа")}</span>
                              <span className="text-muted-foreground">{t("Wedding day!", "День свадьбы!")}</span>
                            </div>
                            <div className="flex gap-3">
                              <span className="font-semibold text-primary min-w-[80px]">{t("9 August", "9 августа")}</span>
                              <span className="text-muted-foreground">{t("Day trip to lakes (Big Almaty or Issyk)", "Озёра (Большое Алматинское или Иссык)")}</span>
                            </div>
                            <div className="flex gap-3">
                              <span className="font-semibold text-primary min-w-[80px]">{t("10 August", "10 августа")}</span>
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
                              <span className="font-semibold text-primary min-w-[80px]">{t("6-7 August", "6-7 августа")}</span>
                              <span className="text-muted-foreground">{t("Arrival + city exploration", "Прилёт + город")}</span>
                            </div>
                            <div className="flex gap-3">
                              <span className="font-semibold text-primary min-w-[80px]">{t("8 August", "8 августа")}</span>
                              <span className="text-muted-foreground">{t("Wedding day", "День свадьбы")}</span>
                            </div>
                            <div className="flex gap-3">
                              <span className="font-semibold text-primary min-w-[80px]">{t("9-10 August", "9-10 августа")}</span>
                              <span className="text-muted-foreground">{t("Charyn Canyon + Kolsai/Kaindy lakes", "Чарынский каньон + Кольсай/Каинды")}</span>
                            </div>
                            <div className="flex gap-3">
                              <span className="font-semibold text-primary min-w-[80px]">{t("11-12 August", "11-12 августа")}</span>
                              <span className="text-muted-foreground">{t("Slow city day + departure", "Спа, кофе, вылет")}</span>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
                      <p className="text-sm text-foreground/70">
                        <strong>{t("Transport to venue:", "Трансфер к месту свадьбы:")}</strong> {t(
                          "Closer to the wedding, we'll share details about how to get from the city to Suly Sai.",
                          "Накануне свадьбы мы подскажем, как удобнее добраться из города до Suly Sai."
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
                      {t("Visa & Entry Basics", "Виза")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-6">
                    <p className="text-foreground/80">
                      {t(
                        "Citizens of Singapore, Malaysia, Germany, Italy, Australia, the United States, and many others can usually enter Kazakhstan visa‑free for a limited number of days.",
                        "Граждане Сингапура, Малайзии, Германии, Италии, Австралии, США и ряда других государств обычно могут въезжать в Казахстан без визы на ограниченный срок."
                      )}
                    </p>

                    <div className="pt-2">
                      <a href="https://www.gov.kz/memleket/entities/mfa/press/article/details/6764?lang=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {t("Official information on Kazakhstan's visa regime (Ministry of Foreign Affairs)", "Официальная информация о визовом режиме Казахстана (МИД)")}
                      </a>
                    </div>

                    <div className="p-4 bg-accent/20 rounded-lg border border-accent">
                      <p className="text-foreground/80">
                        {t(
                          "Kazakhstan has a friendly visa policy for many countries. However, rules can change before August 2026, so please always check official sources before you travel.",
                          "У Казахстана безвизовый режим со многими странами. Но правила могут меняться, поэтому, пожалуйста, проверяйте актуальную информацию перед поездкой."
                        )}
                      </p>
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
                      {t("Where to Stay", "Проживание")}
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
                              "Если вы хотите просыпаться с видом на горы, Oi Qaragai («Лесная сказка») — отличное место, чтобы отдохнуть пару дней."
                            )}
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
                    <FileText className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-serif text-xl md:text-2xl font-semibold text-primary">
                      {t("FAQs", "Часто задаваемые вопросы")}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
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
                          "Closer to the date, we'll share details about transport between Almaty city and Suly Sai.",
                          "Ближе к дате мы поделимся информацией о транспорте из Алматы до Сулусая."
                        )}
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
                            "Чтобы всем было комфортно, обратите внимание:"
                          )}
                        </p>
                        <ul className="space-y-2 text-foreground/70">
                          <li>• {t(
                            "Only invited guests should fill in the RSVP form.",
                            "Заполнять форму RSVP должны только гости, которые получили персональное приглашение."
                          )}</li>
                          <li>• {t(
                            "Please do not bring additional plus‑ones unless they are clearly included in your invitation.",
                            "К сожалению, мы не сможем принять гостей +1, если они не указаны в приглашении."
                          )}</li>
                          <li>• {t(
                            "Please do not bring children unless they are specifically invited.",
                            "Мы также очень просим вас воздержаться от визита с детьми, если они не приглашены отдельно."
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
    </div>
  );
};

export default Index;
