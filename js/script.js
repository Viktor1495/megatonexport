const megatonReady = callback => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    callback();
  }
};

megatonReady(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#main-navigation");
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownLink = dropdown?.querySelector(".dropdown-link");

  const closeMenu = () => {
    navigation?.classList.remove("active");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Открыть меню");
    dropdown?.classList.remove("active");
    dropdownLink?.setAttribute("aria-expanded", "false");
  };

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("active");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
      if (!isOpen) {
        dropdown?.classList.remove("active");
        dropdownLink?.setAttribute("aria-expanded", "false");
      }
    });

    navigation.querySelectorAll("a").forEach((link) => {
      if (link === dropdownLink) return;
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 800px)").matches) closeMenu();
      });
    });
  }

  if (dropdown && dropdownLink) {
    dropdownLink.setAttribute("aria-haspopup", "true");
    dropdownLink.setAttribute("aria-expanded", "false");
    dropdownLink.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 800px)").matches) {
        event.preventDefault();
        const isOpen = dropdown.classList.toggle("active");
        dropdownLink.setAttribute("aria-expanded", String(isOpen));
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (navigation?.classList.contains("active") &&
        !event.target.closest(".header__inner")) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 800px)").matches) closeMenu();
  });
});


/* ===== Multilingual interface: Russian / English / Simplified Chinese ===== */
const MEGATON_TRANSLATIONS = {"en":{"Мегатон Экспорт — международные грузоперевозки":"Megaton Export — International Freight Forwarding","Авиаперевозки — Мегатон Экспорт":"Air Freight — Megaton Export","Автомобильные перевозки — Мегатон Экспорт":"Road Freight — Megaton Export","Аутсорсинг — Мегатон Экспорт":"Logistics Outsourcing — Megaton Export","Железнодорожные перевозки — Мегатон Экспорт":"Rail Freight — Megaton Export","Контакты — Мегатон Экспорт":"Contacts — Megaton Export","Морские перевозки — Мегатон Экспорт":"Sea Freight — Megaton Export","Мультимодальные перевозки — Мегатон Экспорт":"Multimodal Transport — Megaton Export","Наши партнёры — Мегатон Экспорт":"Our Partners — Megaton Export","Перевозка опасных грузов — Мегатон Экспорт":"Dangerous Goods Transportation — Megaton Export","Таможенное оформление — Мегатон Экспорт":"Customs Clearance — Megaton Export","Опасные грузы":"Dangerous Goods","Услуги":"Services","Автомобильные перевозки":"Road Freight","Морские перевозки":"Sea Freight","Железнодорожные перевозки":"Rail Freight","Авиаперевозки":"Air Freight","Мультимодальные перевозки":"Multimodal Transport","Таможенное оформление":"Customs Clearance","Аутсорсинг":"Outsourcing","Партнёры":"Partners","Контакты":"Contacts","Международная логистика":"International Logistics","Сложные грузы.":"Complex Cargo.","Точные":"Precise","маршруты.":"Routes.","Организуем перевозку грузов различной сложности автомобильным, морским, железнодорожным и воздушным транспортом.":"We arrange the transportation of complex cargo by road, sea, rail and air.","Обсудить перевозку":"Discuss Your Shipment","Изучить услуги":"Explore Services","Логистика без лишних звеньев":"Logistics Without Unnecessary Links","АВИА · АВТО · МОРЕ · Ж/Д":"AIR · ROAD · SEA · RAIL","Листайте, чтобы узнать больше":"Scroll to learn more","МОСКВА / ВЕСЬ МИР":"MOSCOW / WORLDWIDE","Специализация":"Expertise","Ответственный подход к сложным задачам":"A Responsible Approach to Complex Challenges","Перевозка":"Transportation","опасных":"Dangerous","грузов":"Goods","Когда важна каждая деталь — от подготовки документов до выбора маршрута.":"When every detail matters — from documentation to route selection.","Организуем транспортировку опасных грузов с учётом требований безопасности и особенностей конкретного вида перевозки.":"We arrange dangerous goods transportation in accordance with safety requirements and the specific transport mode.","Подробнее об услуге":"Learn More","Что мы предлагаем":"What We Offer","Разные способы. Одна логика.":"Different Modes. One Strategy.","Выбираем маршрут":"We Choose the Route","под":"For","вашу задачу.":"Your Needs.","Подбираем формат перевозки с учётом типа груза, сроков, географии и особенностей логистической цепочки.":"We select the right transport solution based on cargo type, deadlines, geography and the logistics chain.","Гибкая доставка от отправителя до получателя":"Flexible Delivery from Sender to Recipient","Международная доставка морским транспортом":"International Sea Freight","Организация перевозок по железной дороге":"Rail Freight Coordination","Доставка грузов воздушным транспортом":"Air Cargo Delivery","Комбинация нескольких видов транспорта":"A Combination of Transport Modes","Сопровождение таможенных процедур":"Customs Procedure Support","Поддержка отдельных логистических процессов":"Support for Specific Logistics Processes","Выберите направление, чтобы узнать подробности":"Choose a service to learn more","Сотрудничество":"Partnership","Связи, которые помогают двигаться дальше":"Connections That Move Business Forward","Логистика":"Logistics","строится на":"Is Built on","доверии.":"Trust.","Надёжное взаимодействие — важная часть международных перевозок.":"Reliable cooperation is an essential part of international freight transportation.","Мы развиваем сотрудничество с компаниями в сфере международной логистики и организации грузоперевозок.":"We build partnerships with companies in international logistics and freight transportation.","О партнёрах":"Our Partners","Свяжитесь с нами":"Contact Us","Есть задача?":"Have a Shipment?","Найдём решение.":"We’ll Find a Solution.","Расскажите о вашем грузе и маршруте — обсудим возможные варианты перевозки.":"Tell us about your cargo and route, and we will discuss possible shipping options.","Телефон для связи":"Phone","Все контакты ↗":"All Contacts ↗","Международные грузоперевозки":"International Freight Transportation","Контакты ↗":"Contacts ↗","© Мегатон Экспорт. Все права защищены.":"© Megaton Export. All rights reserved.","/ Мегатон Экспорт":"/ Megaton Export","/ Свяжитесь с нами":"/ Contact Us","Воздушная доставка грузов":"Air Cargo Delivery","Организация международных авиаперевозок с координацией необходимых этапов доставки.":"International air freight with coordination of all required delivery stages.","Подробнее":"Learn More","НАВИГАЦИЯ":"NAVIGATION","Воздушный транспорт позволяет организовать доставку грузов в случаях, когда важны сроки и требуется международное сообщение.":"Air transport is suitable when delivery time is critical and international connections are required.","«Мегатон Экспорт» организует авиаперевозки с учётом характеристик груза, маршрута и требований к перевозке.":"Megaton Export arranges air freight based on cargo characteristics, route and transport requirements.","Организация авиаперевозки":"Air Freight Planning","Подбор подходящего маршрута.":"Selecting a suitable route.","Согласование условий перевозки.":"Agreeing on shipping terms.","Подготовка необходимых документов.":"Preparing the required documents.","Координация отправки груза.":"Coordinating cargo dispatch.","Контроль процесса доставки.":"Monitoring the delivery process.","Расскажите о грузе и маршруте — обсудим возможные варианты перевозки.":"Tell us about your cargo and route to discuss possible shipping options.","Обсудим ваш груз, направление и возможные варианты организации перевозки.":"Let’s discuss your cargo, destination and possible transport arrangements.","Связаться с Мегатон Экспорт":"Contact Megaton Export","Вы можете связаться с нами по указанным телефонам, чтобы обсудить перевозку, маршрут и особенности груза.":"Call us using the numbers below to discuss your shipment, route and cargo requirements.","Телефоны":"Phone Numbers","Обсудим вашу перевозку":"Let’s Discuss Your Shipment","Сообщите информацию о грузе, направлении и желаемых сроках доставки — это поможет определить подходящий вариант организации перевозки.":"Tell us about the cargo, destination and desired delivery time so we can identify a suitable transport solution.","Документальное сопровождение":"Documentation Support","Сопровождение таможенных процедур в рамках международных грузоперевозок.":"Support with customs procedures for international freight shipments.","Таможенное оформление является важной частью международной перевозки и требует подготовки документов и учёта требований к конкретному грузу.":"Customs clearance is an important part of international shipping and requires proper documentation and attention to cargo-specific requirements.","«Мегатон Экспорт» организует сопровождение грузов при прохождении таможенных процедур в рамках логистической услуги.":"Megaton Export coordinates cargo support through customs procedures as part of its logistics services.","Сопровождение":"Support","Подготовка и согласование необходимых документов.":"Preparing and coordinating the required documents.","Проверка данных о грузе.":"Checking cargo information.","Координация взаимодействия участников перевозки.":"Coordinating the parties involved in transportation.","Организация дальнейшей доставки.":"Arranging onward delivery.","Специализированная логистика":"Specialized Logistics","Организация перевозки опасных грузов с учётом характеристик груза, маршрута и требований безопасности.":"Dangerous goods transportation planned around cargo characteristics, route and safety requirements.","Перевозка опасных грузов требует внимательного планирования, соблюдения требований безопасности и учёта особенностей транспортируемого груза.":"Dangerous goods transportation requires careful planning, compliance with safety requirements and consideration of cargo-specific characteristics.","Компания «Мегатон Экспорт» организует логистические решения для перевозки грузов с учётом выбранного вида транспорта, маршрута и характеристик груза.":"Megaton Export develops logistics solutions based on the chosen transport mode, route and cargo characteristics.","Организация перевозки":"Transport Planning","Анализ характеристик и особенностей груза.":"Assessing cargo characteristics and requirements.","Подбор подходящего вида транспорта.":"Selecting the appropriate transport mode.","Планирование маршрута перевозки.":"Planning the transport route.","Согласование необходимых документов.":"Coordinating the required documents.","Координация процесса доставки.":"Coordinating the delivery process.","Единая логистическая цепочка":"One Integrated Logistics Chain","Комбинирование нескольких видов транспорта для организации международной доставки.":"Combining multiple transport modes for international delivery.","Мультимодальная перевозка предполагает использование нескольких видов транспорта в рамках одного логистического маршрута.":"Multimodal transport uses several modes of transportation within a single logistics route.","Компания «Мегатон Экспорт» координирует этапы доставки с учётом маршрута, характеристик груза и требований к срокам.":"Megaton Export coordinates each delivery stage based on the route, cargo characteristics and timing requirements.","Организация мультимодальной перевозки":"Multimodal Transport Planning","Разработка маршрута доставки.":"Developing the delivery route.","Подбор комбинации видов транспорта.":"Selecting a combination of transport modes.","Координация отдельных этапов перевозки.":"Coordinating individual transport stages.","Сопровождение документации.":"Managing transport documentation.","Контроль движения груза на маршруте.":"Tracking cargo along the route.","Поддержка логистических процессов":"Logistics Process Support","Логистический аутсорсинг":"Logistics Outsourcing","Организация и координация отдельных логистических процессов под задачи компании.":"Organizing and coordinating selected logistics processes to meet business needs.","Логистический аутсорсинг позволяет передать отдельные задачи по организации перевозок внешнему специалисту.":"Logistics outsourcing allows specific transportation tasks to be delegated to an external specialist.","Компания «Мегатон Экспорт» может координировать транспортные и сопутствующие логистические процессы в соответствии с поставленными задачами.":"Megaton Export can coordinate transportation and related logistics processes according to your requirements.","Что может включать сопровождение":"What Support May Include","Организация транспортных перевозок.":"Arranging freight transportation.","Поиск и координация исполнителей.":"Finding and coordinating service providers.","Планирование маршрутов.":"Route planning.","Сопровождение документов.":"Documentation support.","Контроль выполнения логистических задач.":"Monitoring logistics tasks.","Сотрудничество в логистике":"Logistics Partnerships","Взаимодействие с компаниями, участвующими в организации международных грузоперевозок.":"Cooperation with companies involved in international freight transportation.","Наши партнёры":"Our Partners","Мы развиваем сотрудничество с компаниями, участвующими в организации международных перевозок и сопутствующих логистических процессов.":"We build partnerships with companies involved in international transport and related logistics processes.","Логистические компании":"Logistics Companies","Взаимодействие при организации международных маршрутов и перевозок.":"Cooperation on international routes and shipments.","Транспортные компании":"Transport Companies","Организация отдельных этапов доставки различными видами транспорта.":"Arranging individual delivery stages across different transport modes.","Терминалы и инфраструктура":"Terminals and Infrastructure","Взаимодействие с инфраструктурными объектами в рамках перевозок.":"Cooperation with infrastructure facilities as part of shipments.","Экспедиторские организации":"Freight Forwarding Companies","Сопровождение и координация логистических операций.":"Support and coordination of logistics operations.","Связаться с нами":"Contact Us","Доставка автотранспортом":"Road Freight Delivery","Гибкие автомобильные маршруты для международной доставки грузов.":"Flexible road routes for international cargo delivery.","Автомобильный транспорт позволяет организовать доставку грузов по различным маршрутам с учётом требований к срокам и условиям перевозки.":"Road transport enables delivery across a range of routes while accommodating timing and shipping requirements.","Компания «Мегатон Экспорт» организует автомобильные перевозки, включая перевозку негабаритных и тяжёлых грузов.":"Megaton Export arranges road freight, including oversized and heavy cargo.","Подбор подходящего транспортного средства.":"Selecting the right vehicle.","Планирование маршрута.":"Route planning.","Координация погрузки и доставки.":"Coordinating loading and delivery.","Организация перевозки негабаритных и тяжёлых грузов.":"Arranging oversized and heavy cargo transportation.","Контроль процесса перевозки.":"Monitoring the transportation process.","Международная морская логистика":"International Sea Logistics","Организация доставки грузов морским транспортом в составе международной логистической цепочки.":"Arranging sea freight as part of an international logistics chain.","Морские перевозки используются для международной доставки различных категорий грузов на значительные расстояния.":"Sea freight is used to transport various types of cargo over long international distances.","«Мегатон Экспорт» организует логистику морских перевозок с учётом маршрута, характеристик груза и требований к доставке.":"Megaton Export coordinates sea freight based on the route, cargo characteristics and delivery requirements.","Организация морской перевозки":"Sea Freight Planning","Подбор маршрута и морского направления.":"Selecting the route and sea lane.","Организация доставки до терминала.":"Arranging delivery to the terminal.","Координация погрузочных работ.":"Coordinating loading operations.","Контроль движения груза.":"Monitoring cargo movement.","Перевозки по железной дороге":"Rail Freight","Планирование железнодорожной доставки с учётом направления, характеристик груза и сроков.":"Planning rail delivery around destination, cargo characteristics and timing.","Железнодорожный транспорт применяется для перевозки грузов на значительные расстояния и может использоваться в составе международных логистических маршрутов.":"Rail transport is suitable for long-distance cargo and can form part of international logistics routes.","Компания «Мегатон Экспорт» организует железнодорожные перевозки с учётом особенностей груза и выбранного маршрута.":"Megaton Export arranges rail freight based on cargo characteristics and the selected route.","Подбор железнодорожного маршрута.":"Selecting a rail route.","Организация подачи и отправки груза.":"Arranging cargo delivery to the departure point and dispatch.","Координация взаимодействия с терминалами.":"Coordinating with terminals.","Сопровождение транспортных документов.":"Managing transport documents.","Контроль доставки.":"Monitoring delivery.","html":"html","Перевозка опасных грузов":"Dangerous Goods Transportation","СОТРУДНИЧЕСТВО":"PARTNERSHIP","Сопровождение таможенных процедур.":"Support with customs procedures.","Выберите язык":"Choose a language","Выберите язык сайта":"Choose website language","Выберите язык отображения сайта.":"Choose the language used to display the website.","Закрыть выбор языка":"Close language selection","Русский":"Russian","English":"English","简体中文":"Simplified Chinese"},"zh":{"Мегатон Экспорт — международные грузоперевозки":"Megaton Export — 国际货运","Авиаперевозки — Мегатон Экспорт":"空运 — Megaton Export","Автомобильные перевозки — Мегатон Экспорт":"公路运输 — Megaton Export","Аутсорсинг — Мегатон Экспорт":"物流外包 — Megaton Export","Железнодорожные перевозки — Мегатон Экспорт":"铁路运输 — Megaton Export","Контакты — Мегатон Экспорт":"联系我们 — Megaton Export","Морские перевозки — Мегатон Экспорт":"海运 — Megaton Export","Мультимодальные перевозки — Мегатон Экспорт":"多式联运 — Megaton Export","Наши партнёры — Мегатон Экспорт":"合作伙伴 — Megaton Export","Перевозка опасных грузов — Мегатон Экспорт":"危险品运输 — Megaton Export","Таможенное оформление — Мегатон Экспорт":"报关服务 — Megaton Export","Опасные грузы":"危险品运输","Услуги":"服务","Автомобильные перевозки":"公路运输","Морские перевозки":"海运","Железнодорожные перевозки":"铁路运输","Авиаперевозки":"空运","Мультимодальные перевозки":"多式联运","Таможенное оформление":"报关服务","Аутсорсинг":"外包服务","Партнёры":"合作伙伴","Контакты":"联系我们","Международная логистика":"国际物流","Сложные грузы.":"复杂货物。","Точные":"精准的","маршруты.":"运输路线。","Организуем перевозку грузов различной сложности автомобильным, морским, железнодорожным и воздушным транспортом。":"我们通过公路、海运、铁路和航空运输各种复杂货物。","Организуем перевозку грузов различной сложности автомобильным, морским, железнодорожным и воздушным транспортом.":"我们通过公路、海运、铁路和航空运输各种复杂货物。","Обсудить перевозку":"讨论货运需求","Изучить услуги":"了解服务","Логистика без лишних звеньев":"高效直达的物流方案","АВИА · АВТО · МОРЕ · Ж/Д":"空运 · 公路 · 海运 · 铁路","Листайте, чтобы узнать больше":"向下滚动了解更多","МОСКВА / ВЕСЬ МИР":"莫斯科 / 全球","Специализация":"专业领域","Ответственный подход к сложным задачам":"认真应对复杂物流需求","Перевозка":"运输","опасных":"危险","грузов":"货物","Когда важна каждая деталь — от подготовки документов до выбора маршрута.":"每个细节都很重要——从文件准备到路线选择。","Организуем транспортировку опасных грузов с учётом требований безопасности и особенностей конкретного вида перевозки.":"我们根据安全要求和运输方式特点安排危险品运输。","Подробнее об услуге":"了解服务详情","Что мы предлагаем":"我们的服务","Разные способы. Одна логика.":"多种方式，同一目标。","Выбираем маршрут":"选择运输路线","под":"满足","вашу задачу.":"您的需求。","Подбираем формат перевозки с учётом типа груза, сроков, географии и особенностей логистической цепочки.":"我们根据货物类型、时效、地理位置和物流链特点选择运输方案。","Гибкая доставка от отправителя до получателя":"从发货方到收货方的灵活配送","Международная доставка морским транспортом":"国际海运","Организация перевозок по железной дороге":"铁路货运安排","Доставка грузов воздушным транспортом":"航空货运","Комбинация нескольких видов транспорта":"多种运输方式组合","Сопровождение таможенных процедур":"报关流程支持","Поддержка отдельных логистических процессов":"物流流程支持","Выберите направление, чтобы узнать подробности":"选择服务方向了解详情","Сотрудничество":"合作","Связи, которые помогают двигаться дальше":"携手合作，共创发展","Логистика":"物流","строится на":"建立在","доверии.":"信任之上。","Надёжное взаимодействие — важная часть международных перевозок.":"可靠的合作是国际货运的重要组成部分。","Мы развиваем сотрудничество с компаниями в сфере международной логистики и организации грузоперевозок.":"我们与国际物流和货运领域的企业开展合作。","О партнёрах":"合作伙伴介绍","Свяжитесь с нами":"联系我们","Есть задача?":"有货运需求？","Найдём решение.":"我们为您寻找解决方案。","Расскажите о вашем грузе и маршруте — обсудим возможные варианты перевозки.":"请告诉我们货物信息和路线，我们将讨论可行的运输方案。","Телефон для связи":"联系电话","Все контакты ↗":"查看联系方式 ↗","Международные грузоперевозки":"国际货运","Контакты ↗":"联系方式 ↗","© Мегатон Экспорт. Все права защищены.":"© Megaton Export。版权所有。","/ Мегатон Экспорт":"/ Megaton Export","/ Свяжитесь с нами":"/ 联系我们","Воздушная доставка грузов":"航空货运","Организация международных авиаперевозок с координацией необходимых этапов доставки.":"协调国际空运各个必要环节。","Подробнее":"了解更多","НАВИГАЦИЯ":"导航","Воздушный транспорт позволяет организовать доставку грузов в случаях, когда важны сроки и требуется международное сообщение.":"当时效至关重要且需要国际运输时，可选择航空运输。","«Мегатон Экспорт» организует авиаперевозки с учётом характеристик груза, маршрута и требований к перевозке.":"Megaton Export 根据货物特点、路线和运输要求安排空运。","Организация авиаперевозки":"空运安排","Подбор подходящего маршрута.":"选择合适的路线。","Согласование условий перевозки.":"确认运输条件。","Подготовка необходимых документов.":"准备所需文件。","Координация отправки груза.":"协调货物发运。","Контроль процесса доставки.":"跟进配送过程。","Обсудим ваш груз, направление и возможные варианты организации перевозки.":"让我们讨论您的货物、目的地和可行的运输安排。","Связаться с Мегатон Экспорт":"联系 Megaton Export","Вы можете связаться с нами по указанным телефонам, чтобы обсудить перевозку, маршрут и особенности груза.":"您可以拨打以下电话，与我们讨论货运、路线和货物特点。","Телефоны":"电话","Обсудим вашу перевозку":"讨论您的货运需求","Сообщите информацию о грузе, направлении и желаемых сроках доставки — это поможет определить подходящий вариант организации перевозки.":"请提供货物、目的地和期望交付时间，以便我们确定合适的运输方案。","Документальное сопровождение":"文件支持","Сопровождение таможенных процедур в рамках международных грузоперевозок.":"为国际货运提供报关流程支持。","Таможенное оформление является важной частью международной перевозки и требует подготовки документов и учёта требований к конкретному грузу.":"报关是国际运输的重要环节，需要准备文件并考虑具体货物的相关要求。","«Мегатон Экспорт» организует сопровождение грузов при прохождении таможенных процедур в рамках логистической услуги.":"Megaton Export 在物流服务中协调货物通关流程。","Сопровождение":"支持服务","Подготовка и согласование необходимых документов.":"准备并确认所需文件。","Проверка данных о грузе.":"核查货物信息。","Координация взаимодействия участников перевозки.":"协调运输各方。","Организация дальнейшей доставки.":"安排后续配送。","Специализированная логистика":"专业物流","Организация перевозки опасных грузов с учётом характеристик груза, маршрута и требований безопасности.":"根据货物特点、路线和安全要求安排危险品运输。","Перевозка опасных грузов требует внимательного планирования, соблюдения требований безопасности и учёта особенностей транспортируемого груза.":"危险品运输需要周密规划、遵守安全要求并考虑货物特性。","Компания «Мегатон Экспорт» организует логистические решения для перевозки грузов с учётом выбранного вида транспорта, маршрута и характеристик груза.":"Megaton Export 根据运输方式、路线和货物特点制定物流方案。","Организация перевозки":"运输安排","Анализ характеристик и особенностей груза.":"分析货物特征和要求。","Подбор подходящего вида транспорта.":"选择合适的运输方式。","Планирование маршрута перевозки.":"规划运输路线。","Согласование необходимых документов.":"确认所需文件。","Координация процесса доставки.":"协调配送流程。","Единая логистическая цепочка":"一体化物流链","Комбинирование нескольких видов транспорта для организации международной доставки.":"组合多种运输方式完成国际配送。","Мультимодальная перевозка предполагает использование нескольких видов транспорта в рамках одного логистического маршрута.":"多式联运是在同一物流路线中使用多种运输方式。","Компания «Мегатон Экспорт» координирует этапы доставки с учётом маршрута, характеристик груза и требований к срокам.":"Megaton Export 根据路线、货物特点和时效要求协调各个配送环节。","Организация мультимодальной перевозки":"多式联运安排","Разработка маршрута доставки.":"制定配送路线。","Подбор комбинации видов транспорта.":"选择运输方式组合。","Координация отдельных этапов перевозки.":"协调各运输环节。","Сопровождение документации.":"文件管理支持。","Контроль движения груза на маршруте.":"跟踪货物运输状态。","Поддержка логистических процессов":"物流流程支持","Логистический аутсорсинг":"物流外包","Организация и координация отдельных логистических процессов под задачи компании.":"根据企业需求组织并协调特定物流流程。","Логистический аутсорсинг позволяет передать отдельные задачи по организации перевозок внешнему специалисту.":"物流外包可将特定运输组织任务交由外部专业人员处理。","Компания «Мегатон Экспорт» может координировать транспортные и сопутствующие логистические процессы в соответствии с поставленными задачами.":"Megaton Export 可根据需求协调运输及相关物流流程。","Что может включать сопровождение":"服务内容可包括","Организация транспортных перевозок.":"组织货物运输。","Поиск и координация исполнителей.":"寻找并协调服务供应商。","Планирование маршрутов.":"路线规划。","Сопровождение документов.":"文件支持。","Контроль выполнения логистических задач.":"跟进物流任务执行。","Сотрудничество в логистике":"物流合作","Взаимодействие с компаниями, участвующими в организации международных грузоперевозок.":"与参与国际货运的企业合作。","Наши партнёры":"我们的合作伙伴","Мы развиваем сотрудничество с компаниями, участвующими в организации международных перевозок и сопутствующих логистических процессов.":"我们与参与国际运输及相关物流流程的企业建立合作关系。","Логистические компании":"物流公司","Взаимодействие при организации международных маршрутов и перевозок.":"合作组织国际路线和货运。","Транспортные компании":"运输公司","Организация отдельных этапов доставки различными видами транспорта.":"安排不同运输方式的各个配送环节。","Терминалы и инфраструктура":"货运站及基础设施","Взаимодействие с инфраструктурными объектами в рамках перевозок.":"在运输过程中与基础设施运营方协作。","Экспедиторские организации":"货运代理机构","Сопровождение и координация логистических операций.":"支持并协调物流作业。","Связаться с нами":"联系我们","Доставка автотранспортом":"公路货运","Гибкие автомобильные маршруты для международной доставки грузов.":"灵活的国际公路货运路线。","Автомобильный транспорт позволяет организовать доставку грузов по различным маршрутам с учётом требований к срокам и условиям перевозки.":"公路运输可根据时效和运输条件要求安排不同路线的货物配送。","Компания «Мегатон Экспорт» организует автомобильные перевозки, включая перевозку негабаритных и тяжёлых грузов.":"Megaton Export 提供公路运输，包括超尺寸和重型货物运输。","Подбор подходящего транспортного средства.":"选择合适的车辆。","Планирование маршрута.":"路线规划。","Координация погрузки и доставки.":"协调装货与配送。","Организация перевозки негабаритных и тяжёлых грузов.":"安排超尺寸和重型货物运输。","Контроль процесса перевозки.":"跟进运输过程。","Международная морская логистика":"国际海运物流","Организация доставки грузов морским транспортом в составе международной логистической цепочки.":"将海运纳入国际物流链，安排货物配送。","Морские перевозки используются для международной доставки различных категорий грузов на значительные расстояния.":"海运适用于不同类别货物的长距离国际运输。","«Мегатон Экспорт» организует логистику морских перевозок с учётом маршрута, характеристик груза и требований к доставке.":"Megaton Export 根据路线、货物特点和配送要求协调海运物流。","Организация морской перевозки":"海运安排","Подбор маршрута и морского направления.":"选择路线和海运航线。","Организация доставки до терминала.":"安排货物运至码头。","Координация погрузочных работ.":"协调装货作业。","Контроль движения груза.":"跟进货物运输。","Перевозки по железной дороге":"铁路货运","Планирование железнодорожной доставки с учётом направления, характеристик груза и сроков.":"根据目的地、货物特点和时效规划铁路运输。","Железнодорожный транспорт применяется для перевозки грузов на значительные расстояния и может использоваться в составе международных логистических маршрутов.":"铁路运输适用于长距离货运，也可纳入国际物流路线。","Компания «Мегатон Экспорт» организует железнодорожные перевозки с учётом особенностей груза и выбранного маршрута.":"Megaton Export 根据货物特点和选定路线安排铁路运输。","Подбор железнодорожного маршрута.":"选择铁路路线。","Организация подачи и отправки груза.":"安排货物集运与发运。","Координация взаимодействия с терминалами.":"协调与货运站的合作。","Сопровождение транспортных документов.":"管理运输文件。","Контроль доставки.":"跟进配送。","Перевозка опасных грузов":"危险品运输","Расскажите о грузе и маршруте — обсудим возможные варианты перевозки.":"请告诉我们货物信息和路线，我们将讨论可行的运输方案。","СОТРУДНИЧЕСТВО":"合作","Сопровождение таможенных процедур.":"报关流程支持。","Выберите язык":"选择语言","Выберите язык сайта":"选择网站语言","Выберите язык отображения сайта.":"请选择网站显示语言。","Закрыть выбор языка":"关闭语言选择","Русский":"俄语","English":"英语","简体中文":"简体中文"}};
const MEGATON_META = {
  en: { title: {
    'index.html':'Megaton Export — International Freight Forwarding',
    'air.html':'Air Freight — Megaton Export','road.html':'Road Freight — Megaton Export','sea.html':'Sea Freight — Megaton Export','rail.html':'Rail Freight — Megaton Export','multimodal.html':'Multimodal Transport — Megaton Export','dangerous.html':'Dangerous Goods Transportation — Megaton Export','customs.html':'Customs Clearance — Megaton Export','outsourcing.html':'Logistics Outsourcing — Megaton Export','partners.html':'Our Partners — Megaton Export','contacts.html':'Contacts — Megaton Export'
  }, description:'International road, sea, rail, air and multimodal freight services. Dangerous and oversized cargo transportation.' },
  zh: { title: {
    'index.html':'Megaton Export — 国际货运','air.html':'空运 — Megaton Export','road.html':'公路运输 — Megaton Export','sea.html':'海运 — Megaton Export','rail.html':'铁路运输 — Megaton Export','multimodal.html':'多式联运 — Megaton Export','dangerous.html':'危险品运输 — Megaton Export','customs.html':'报关服务 — Megaton Export','outsourcing.html':'物流外包 — Megaton Export','partners.html':'合作伙伴 — Megaton Export','contacts.html':'联系我们 — Megaton Export'
  }, description:'国际公路、海运、铁路、空运及多式联运服务。危险品和超尺寸货物运输。' }
};
function initMegatonLanguages() {
  const normalize = value => (value || '').replace(/\s+/g, ' ').trim();
  const modal = document.querySelector('#language-dialog');
  const opener = document.querySelector('.language-button');
  const closer = document.querySelector('.language-close');
  const options = [...document.querySelectorAll('.language-option')];
  const current = document.querySelector('.language-current');
  let lang = 'ru';
  try { lang = localStorage.getItem('megaton-language') || 'ru'; } catch (_) {}
  if (!['ru','en','zh'].includes(lang)) lang = 'ru';

  const pageName = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  // Translate every text node, including text inside headings/buttons that also contain icons or spans.
  // Keep original node text so users can switch between languages repeatedly without losing content.
  const originalTextNodes = new WeakMap();
  function applyLanguage(nextLang) {
    lang = nextLang;
    const dict = MEGATON_TRANSLATIONS[lang] || {};
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, noscript, template')) return NodeFilter.FILTER_REJECT;
        if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach(node => {
      if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
      const original = originalTextNodes.get(node);
      if (lang === 'ru') { node.nodeValue = original; return; }
      const clean = normalize(original);
      const translated = dict[clean];
      if (translated) {
        const leading = (original.match(/^\s*/) || [''])[0];
        const trailing = (original.match(/\s*$/) || [''])[0];
        node.nodeValue = leading + translated + trailing;
      }
    });

    // Translate accessible text and form controls as well as visible page copy.
    const attributeDict = {
      en: {
        'Мегатон Экспорт':'Megaton Export','Открыть меню':'Open menu','Закрыть меню':'Close menu',
        'Основная навигация':'Main navigation','Подробнее об услуге':'Learn more about this service',
        'Выберите язык':'Choose a language','Выберите язык сайта':'Choose website language',
        'Выберите язык отображения сайта.':'Choose the language used to display the website.',
        'Закрыть выбор языка':'Close language selection','Выбрать язык сайта':'Choose website language','Международный грузовой терминал':'International cargo terminal'
      },
      zh: {
        'Мегатон Экспорт':'Megaton Export','Открыть меню':'打开菜单','Закрыть меню':'关闭菜单',
        'Основная навигация':'主导航','Подробнее об услуге':'了解服务详情',
        'Выберите язык':'选择语言','Выберите язык сайта':'选择网站语言',
        'Выберите язык отображения сайта.':'请选择网站显示语言。','Закрыть выбор языка':'关闭语言选择','Выбрать язык сайта':'选择网站语言','Международный грузовой терминал':'国际货运站'
      }
    };
    document.querySelectorAll('[alt],[aria-label],[title],[placeholder]').forEach(el => {
      ['alt','aria-label','title','placeholder'].forEach(attr => {
        if (!el.hasAttribute(attr)) return;
        const originalAttr = 'data-original-' + attr;
        if (!el.hasAttribute(originalAttr)) el.setAttribute(originalAttr, el.getAttribute(attr));
        const original = el.getAttribute(originalAttr);
        el.setAttribute(attr, lang === 'ru' ? original : ((attributeDict[lang] || {})[original] || (dict[normalize(original)] || original)));
      });
    });
    document.querySelectorAll('input[type="submit"],input[type="button"]').forEach(el => {
      if (!el.hasAttribute('data-original-value')) el.setAttribute('data-original-value', el.value);
      const original = el.getAttribute('data-original-value');
      el.value = lang === 'ru' ? original : (dict[normalize(original)] || original);
    });
    document.querySelectorAll('meta[name="description"]').forEach(meta => {
      if (!meta.hasAttribute('data-original-content')) meta.setAttribute('data-original-content', meta.content);
      meta.content = lang === 'ru' ? meta.getAttribute('data-original-content') : (MEGATON_META[lang]?.description || meta.content);
    });
    const titleEl = document.querySelector('title');
    if (titleEl) {
      if (!titleEl.hasAttribute('data-original-title')) titleEl.setAttribute('data-original-title', titleEl.textContent);
      const originalTitle = titleEl.getAttribute('data-original-title');
      const titles = MEGATON_META[lang]?.title || {};
      titleEl.textContent = lang === 'ru' ? originalTitle : (titles[pageName] || dict[normalize(originalTitle)] || originalTitle);
    }
    if (current) current.textContent = lang === 'zh' ? '中文' : lang.toUpperCase();
    options.forEach(button => {
      button.classList.toggle('is-selected', button.dataset.language === lang);
      button.setAttribute('aria-pressed', String(button.dataset.language === lang));
    });
    try { localStorage.setItem('megaton-language', lang); } catch (_) {}
  }
  function openDialog() {
    if (!modal) return;
    modal.hidden = false; document.body.classList.add('language-modal-open');
    opener?.setAttribute('aria-expanded','true');
    modal.querySelector('[data-language="' + lang + '"]')?.focus();
  }
  function closeDialog() {
    if (!modal) return;
    modal.hidden = true; document.body.classList.remove('language-modal-open');
    opener?.setAttribute('aria-expanded','false'); opener?.focus();
  }
  opener?.addEventListener('click', openDialog);
  closer?.addEventListener('click', closeDialog);
  modal?.addEventListener('click', e => { if (e.target === modal) closeDialog(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal && !modal.hidden) closeDialog(); });
  options.forEach(button => button.addEventListener('click', () => { applyLanguage(button.dataset.language); closeDialog(); }));
  applyLanguage(lang);
}
megatonReady(initMegatonLanguages);


// Highlight the navigation item that matches the page currently being viewed.
megatonReady(() => {
  const navigation = document.querySelector('#main-navigation');
  if (!navigation) return;

  const normalizePath = pathname => {
    let path = decodeURIComponent(pathname || '/').replace(/\\/g, '/');
    path = path.replace(/\/{2,}/g, '/');
    if (path.endsWith('/index.html')) path = path.slice(0, -'index.html'.length);
    if (!path.endsWith('/')) path += '/';
    return path;
  };

  const currentPath = normalizePath(window.location.pathname);
  const links = navigation.querySelectorAll('a[href]');
  links.forEach(link => {
    link.classList.remove('is-current');
    link.removeAttribute('aria-current');

    const rawHref = link.getAttribute('href');
    if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('tel:') || rawHref.startsWith('mailto:')) return;

    let target;
    try { target = new URL(rawHref, window.location.href); } catch (_) { return; }
    if (target.origin !== window.location.origin || target.hash && normalizePath(target.pathname) === currentPath) return;

    if (normalizePath(target.pathname) === currentPath) {
      link.classList.add('is-current');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Also mark the Services trigger when the current page is one of its submenu pages.
  const dropdown = navigation.querySelector('.nav-dropdown');
  if (dropdown?.querySelector('.dropdown-menu a.is-current')) {
    dropdown.querySelector('.dropdown-link')?.classList.add('is-current');
  }
});
