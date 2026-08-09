const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      nav.classList.remove("active");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* Routes page */
const routesGrid = document.querySelector("#routesGrid");
const routesCount = document.querySelector("#routesCount");
const emptyState = document.querySelector("#emptyState");
const routeModal = document.querySelector("#routeModal");

if (routesGrid && routesCount && emptyState && routeModal) {
  const routes = [
    {
      title: "ПОЛЯНА — САНДЫК-КАЯ",
      description:
        "Однодневный маршрут из посёлка Поляна на вершину Сандык-Кая с видом на Байдарскую и Бельбекскую долины.",
      distance: 5,
      elevation: "518 м",
      duration: "2 ч",
      durationDays: 1,
      difficulty: "средний",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3090937c338f4a25355dc831340837ab1c847e2bcb02237c9a4fed2a05bfa0b1&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "ТАНКОВОЕ — СУРЕНЬ-ТАУ",
      description: "Однодневный маршрут из села Танковое на гору Сюрень-Тау.",
      distance: 4,
      elevation: "192 м",
      duration: "2 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A70d2f8c50d5a11043681ba3b7fdd3c2a3b54849291dcf3236cf80fa193137893&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "ПЕРЕДОВОЕ — КИЗИЛ-КАЯ",
      description:
        "Однодневный маршрут из посёлка Передовое на гору Кизил-Кая с видом на Чернореченский каньон.",
      distance: 4,
      elevation: "175 м",
      duration: "2 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af5789d8cd65975c2b32863547b26fab003c25941e9cd393f8c0fd6241577765b&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "ПОЛЯНА — ЯЛПАХ-КАЯ",
      description: "Однодневный маршрут из посёлка Поляна на вершину горы Ялпах-Кая.",
      distance: 4,
      elevation: "560 м",
      duration: "2 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A19f674bf6027d59df6fd75a999ec74d5e02045e395d6c4f4d00661dabd03210b&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "НА СМОТРОВУЮ ГОРЫ КАЯ-БАШ",
      description:
        "Однодневный маршрут из Богатого Ущелья на видовую вершину горы Кая-Баш.",
      distance: 4,
      elevation: "2 м",
      duration: "2 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1d2defd2da42d43c6efd36d45e40813792bc0604a49d21ac5bfc344fd411fa2&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "БОГАТОЕ УЩЕЛЬЕ — ВОДОПАД СУАТКАН",
      description: "Однодневный маршрут из посёлка Богатое Ущелье к водопаду Суаткан.",
      distance: 2,
      elevation: "155 м",
      duration: "1 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A20a7c28875d72b527c857738eaeb3d07d42ce120b6e0d49423d67c2fac763379&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "НИЖНЕЕ И ВЕРХНЕЕ ПЛАТО ЧАТЫР-ДАГА",
      description:
        "Однодневный кольцевой маршрут по верхнему и нижнему плато Чатыр-Дага. До места старта можно доехать на машине.",
      distance: 18,
      elevation: "688 м",
      duration: "6 ч",
      durationDays: 1,
      difficulty: "сложный",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac115f63e0177aa39d54e8678c774879a1762a231001ff1e5093fc712e1f31e7e&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "КУТУЗОВСКОЕ ОЗЕРО И РОЩА СЕКВОЙ",
      description:
        "Однодневный прогулочный маршрут Ангарского перевала до Кутузовского озера и Секвойной рощи.",
      distance: 3,
      elevation: "147 м",
      duration: "2 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A073ac9332618eac5fa3163fc5f4f16ef58c2791c66d2f0112cdb1d33919e6454&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "ТИСОВОЕ УЩЕЛЬЕ ЧАТЫР-ДАГА",
      description:
        "Однодневный маршрут по Тисовому ущелью с выходом на нижнее плато Чатыр-Дага.",
      distance: 6,
      elevation: "450 м",
      duration: "3 ч",
      durationDays: 1,
      difficulty: "средний",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1d8cdedea96596f2d28b980e2abf14286c5e515636dcd3ea5a7a2ae2da7a201e&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "ПО ВЕРХНЕМУ ПЛАТО ЧАТЫР-ДАГА",
      description:
        "Однодневный маршрут по верхнему плато Чатыр-Дага. Посещение вершин Ангар-Бурун и Эклизи-Бурун.",
      distance: 7,
      elevation: "298 м",
      duration: "3 ч",
      durationDays: 1,
      difficulty: "средний",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab57fa9b248fd62954ebd82c84173c0faf21ca52d2fd3cf382d0bffbd4ee649f1&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "БУКОВАЯ ПОЛЯНА — ВЕРХНЕЕ ПЛАТО",
      description: "Однодневный маршрут через Буковую поляну на верхнее плато Чатыр-Дага.",
      distance: 4,
      elevation: "468 м",
      duration: "2 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acbc98e3b123cdd1a57d59dd0ae3e0f21ecb351b57df00c3bd31488a4d0b6965c&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "МРАМОРНОЕ — НИЖНЕЕ ПЛАТО ЧАТЫР-ДАГА НА МАШИНЕ",
      description:
        "Однодневный маршрут из Мраморного по грунтовке на нижнее плато Чатыр-Дага. По этой дороге, в сухую погоду, возможно проехать на машине, даже на обычном седане.",
      distance: 10,
      elevation: "586 м",
      duration: "3 ч",
      durationDays: 1,
      difficulty: "сложный",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acf47d7fea5df54ed5f528fb6de2c0339c936ad01fca71444a21a7c2411981670&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "ГОРОДСКОЙ ХОЛМ. СЕВАСТОПОЛЬ",
      description: "Однодневный маршрут по историческому городскому холму в центре Севастополя.",
      distance: 2,
      elevation: "57 м",
      duration: "20 мин",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "городская",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=33.525278%2C44.610073&mode=routes&rtext=44.600618%2C33.524118~44.603291%2C33.526599~44.606235%2C33.525963~44.606126%2C33.524231~44.610840%2C33.523026~44.610922%2C33.523750~44.613331%2C33.521688&rtt=pd&ruri=~~~~~~&z=16.66" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>'
    },
    {
      title: "ЦЕНТРАЛЬНЫЕ НАБЕРЕЖНЫЕ СЕВАСТОПОЛЯ",
      description: "Однодневный маршрут по береговой линии в центре Севастополя.",
      distance: 4,
      elevation: "76 м",
      duration: "45 мин",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "городская",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=33.520576%2C44.615872&mode=routes&rtd=0&rtext=44.605506%2C33.527329~44.609826%2C33.527593~44.611248%2C33.528384~44.612955%2C33.527754~44.612722%2C33.525619~44.617044%2C33.526300~44.618417%2C33.526198~44.618023%2C33.523613~44.616793%2C33.521692~44.615873%2C33.521208~44.614019%2C33.520601~44.613861%2C33.518645~44.616680%2C33.516587&rtt=pd&ruri=~~~~~~~ymapsbm1%3A%2F%2Forg%3Foid%3D85840537489~ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3D1543289651~ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3D1543289663~~~&z=17.34" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>'
    },
    {
      title: "НАБЕРЕЖНАЯ ЯЛТЫ",
      description: "Однодневный маршрут от Автостанции Ялты до одного из концов набережной города.",
      distance: 5,
      elevation: "112 м",
      duration: "1 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "городская",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=34.160099%2C44.480154&mode=routes&rtd=0&rtext=44.512530%2C34.171549~44.496503%2C34.169823~44.488224%2C34.161550~44.475040%2C34.154625&rtt=pd&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D1748700738~~~&utm_source=share&z=16.12" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>'
    },
    {
      title: "НАБЕРЕЖНАЯ АЛУШТЫ",
      description: "Однодневный маршрут по береговой линии Алушты.",
      distance: 8.5,
      elevation: "162 м",
      duration: "2 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "городская",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=34.391408%2C44.629220&mode=routes&rtd=0&rtext=44.688684%2C34.433663~44.643321%2C34.400015~44.628584%2C34.386323&rtt=pd&ruri=~~&utm_source=share&z=16.63" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>'
    },
    {
      title: "ИСТОРИЧЕСКИЙ ЦЕНТР СИМФЕРОПОЛЯ",
      description: "Однодневный кольцевой маршрут по историческому центру Симферополя.",
      distance: 5,
      elevation: "109 м",
      duration: "1 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "городская",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=34.102821%2C44.948046&mode=routes&rtd=0&rtext=44.945114%2C34.098606~44.948916%2C34.101733~44.952008%2C34.106801~44.956631%2C34.113083~44.957908%2C34.109099~44.955080%2C34.103988~44.952197%2C34.100912~44.945324%2C34.093008&rtt=pd&ruri=~~~~~~~&utm_source=share&z=16.44" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>'
    },
    {
      title: "ПРИРОДНЫЙ СИМФЕРОПОЛЬ",
      description: "Однодневный кольцевой маршрут по рекреационным зонам Симферополя.",
      distance: 15,
      elevation: "232 м",
      duration: "3 ч",
      durationDays: 1,
      difficulty: "сложный",
      terrain: "смешанная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=34.174896%2C44.920529&mode=routes&rtd=0&rtext=44.913296%2C34.154495~44.904964%2C34.171406~44.924601%2C34.166482~44.938282%2C34.147737~44.927960%2C34.144003~44.913897%2C34.152735&rtt=pd&ruri=ymapsbm1%3A%2F%2Forg%3Foid%3D73949787141~~~~ymapsbm1%3A%2F%2Forg%3Foid%3D219191674162~&utm_source=share&z=14.22" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>'
    },
    {
      title: "БАЛАКЛАВА — ПЛЯЖ ИНЖИР",
      description: "Однодневный маршрут из Балаклавы на пляж Инжир.",
      distance: 7,
      elevation: "300 м",
      duration: "3 ч",
      durationDays: 1,
      difficulty: "средний",
      terrain: "смешанная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=33.640804%2C44.472800&mode=routes&rtd=0&rtext=44.505129%2C33.598757~44.496814%2C33.598976~44.494337%2C33.601797~44.492174%2C33.607184%2C33.616833~44.468428%2C33.637865&rtt=pd&ruri=~~ymapsbm1%3A%2F%2Forg%3Foid%3D170542190648~~ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3D3151762417~&utm_source=share&z=15.15" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>'
    },
    {
      title: "ОРЛИНОЕ — ФОРОС",
      description: "Однодневный маршрут из Байдарской долины, села Орлиное, в парк санатория Форос.",
      distance: 14,
      elevation: "540 м",
      duration: "5 ч",
      durationDays: 1,
      difficulty: "сложный",
      terrain: "смешанная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=33.793511%2C44.391947&mode=routes&rtd=0&rtext=44.444400%2C33.773081~44.416341%2C33.771033~44.406189%2C33.781863~44.402063%2C33.787320~44.388534%2C33.781972&rtt=pd&ruri=~~ymapsbm1%3A%2F%2Forg%3Foid%3D10952725801~~&utm_source=share&z=15.84" width="560" height="400" frameborder="1" allowfullscreen="true"></iframe>'
    }
  ];

  const activeFilters = {
    distance: "all",
    terrain: "all",
    difficulty: "all",
    durationDays: "all"
  };

  function getDayLabel(days) {
    if (days === 1) {
      return "1 день";
    }

    return `${days} дня`;
  }

  function renderRoutes() {
    const filteredRoutes = routes.filter((route) => {
      const distanceMatch =
        activeFilters.distance === "all" ||
        route.distance <= Number(activeFilters.distance);

      const terrainMatch =
        activeFilters.terrain === "all" ||
        route.terrain === activeFilters.terrain;

      const difficultyMatch =
        activeFilters.difficulty === "all" ||
        route.difficulty === activeFilters.difficulty;

      const durationMatch =
        activeFilters.durationDays === "all" ||
        route.durationDays === Number(activeFilters.durationDays);

      return distanceMatch && terrainMatch && difficultyMatch && durationMatch;
    });

    routesCount.textContent = filteredRoutes.length;
    routesGrid.innerHTML = "";
    emptyState.classList.toggle("visible", filteredRoutes.length === 0);

    filteredRoutes.forEach((route) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "route-tile reveal visible";

      card.innerHTML = `
        <div class="route-tile-top">
          <div class="route-distance">${String(route.distance).replace(".", ",")} км</div>
          <div class="route-symbol">⌁</div>
        </div>

        <h3>${route.title}</h3>

        <div class="route-tags">
          <span>${route.terrain}</span>
          <span>${route.difficulty}</span>
          <span>${getDayLabel(route.durationDays)}</span>
        </div>
      `;

      card.addEventListener("click", () => openRouteModal(route));
      routesGrid.appendChild(card);
    });
  }

  function openRouteModal(route) {
    document.querySelector("#modalTitle").textContent = route.title;
    document.querySelector("#modalDescription").textContent = route.description;

    document.querySelector("#modalStats").innerHTML = `
      <span>Расстояние: ${String(route.distance).replace(".", ",")} км</span>
      <span>Набор высоты: ${route.elevation}</span>
      <span>Длительность: ${route.duration}</span>
      <span>Сложность: ${route.difficulty}</span>
      <span>Местность: ${route.terrain}</span>
    `;

    document.querySelector("#modalMap").innerHTML = route.map;

    routeModal.classList.add("active");
    routeModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeRouteModal() {
    routeModal.classList.remove("active");
    routeModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.querySelector("#modalMap").innerHTML = "";
  }

  document.querySelectorAll(".filter-options").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");

      if (!button) {
        return;
      }

      const filterName = group.dataset.filter;
      activeFilters[filterName] = button.dataset.value;

      group.querySelectorAll(".filter-btn").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      renderRoutes();
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeRouteModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && routeModal.classList.contains("active")) {
      closeRouteModal();
    }
  });

  renderRoutes();
}
/* Videoguides page */
const videoModal = document.querySelector("#videoModal");
const videoModalPlayer = document.querySelector("#videoModalPlayer");

if (videoModal && videoModalPlayer) {
  document.querySelectorAll(".video-tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      const oid = tile.dataset.oid;
      const id = tile.dataset.id;

      videoModalPlayer.innerHTML = `
        <iframe
          src="https://vk.com/video_ext.php?oid=${oid}&id=${id}&hd=2&autoplay=1"
          width="100%"
          height="100%"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          frameborder="0"
          allowfullscreen
        ></iframe>
      `;

      videoModal.classList.add("active");
      videoModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  function closeVideoModal() {
    videoModal.classList.remove("active");
    videoModal.setAttribute("aria-hidden", "true");
    videoModalPlayer.innerHTML = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-close-video-modal]").forEach((button) => {
    button.addEventListener("click", closeVideoModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && videoModal.classList.contains("active")) {
      closeVideoModal();
    }
  });
}

/* Course page */
const courseGrid = document.querySelector("#courseGrid");
const courseCount = document.querySelector("#courseCount");
const courseModal = document.querySelector("#courseModal");

if (courseGrid && courseCount && courseModal) {
  const lessons = [
    { number: 1, direction: "Туризм", topic: "Введение в профессию", title: "Туристический агент: кто это?", description: "Обзор профессии, ключевых задач и сфер деятельности, перспективы рынка", oid: "-239796241", id: "456239017" },
    { number: 2, direction: "Туризм", topic: "Введение в профессию", title: "Безопасность и этика в туризме", description: "Правила поведения, профессиональная этика, юридические нюансы", oid: "-239796241", id: "456239018" },
    { number: 3, direction: "Туризм", topic: "Введение в профессию", title: "Основные виды туризма", description: "Краткий разбор культурного, экологического, событийного и активного туризма", oid: "-239796241", id: "456239020" },
    { number: 4, direction: "Туризм", topic: "Введение в профессию", title: "Мотивация и командная работа", description: "Дискуссия о ценностях профессии, командные упражнения", oid: "-239796241", id: "456239034" },
    { number: 5, direction: "Туризм", topic: "Введение в профессию", title: "Знакомство с локальными туристическими ресурсами", description: "Обзор ключевых сайтов, организаций и маршрутов Крыма и Севастополя", oid: "-239796241", id: "456239026" },
    { number: 6, direction: "Туризм", topic: "Экологический туризм", title: "Принципы экотуризма", description: "Бережное отношение к природе, туристическая нагрузка, экоэтикет", oid: "-239796241", id: "456239036" },
    { number: 7, direction: "Туризм", topic: "Экологический туризм", title: "Заповедные зоны Крыма и Севастополя", description: "Изучение особо охраняемых территорий региона", oid: "-239796241", id: "456239041" },
    { number: 8, direction: "Туризм", topic: "Экологический туризм", title: "Практические навыки: организация экомаршрута", description: "Планирование маршрута, разметка, подготовка инвентаря", oid: "-239796241", id: "456239022" },
    { number: 9, direction: "Туризм", topic: "Экологический туризм", title: "Экологические акции и проекты", description: "Обзор региональных эко-инициатив и примеры успешных проектов", oid: "-239796241", id: "456239032" },
    { number: 10, direction: "Туризм", topic: "Экологический туризм", title: "Мини-кейс: квиз по экотуризму", description: "Создание и проведение мини-квиза по экотеме для школьников", oid: "-239796241", id: "456239043" },
    { number: 11, direction: "Туризм", topic: "История и культура", title: "Исторические эпохи Крыма и Севастополя", description: "Древний мир, средневековье, современность", oid: "-239796241", id: "456239037" },
    { number: 12, direction: "Туризм", topic: "История и культура", title: "Культурное многообразие региона", description: "Религии, этнические особенности, наследие народов", oid: "-239796241", id: "456239039" },
    { number: 13, direction: "Туризм", topic: "История и культура", title: "Знаковые памятники и объекты", description: "Обзор известных музеев, крепостей, городов", oid: "-239796241", id: "456239028" },
    { number: 14, direction: "Туризм", topic: "История и культура", title: "Туристические маршруты по истории", description: "Создание тематических маршрутов (военные, культурные, литературные)", oid: "-239796241", id: "456239042" },
    { number: 15, direction: "Туризм", topic: "История и культура", title: "Проект: квест/квиз для школьников о культуре", description: "Разработка сценария квеста или квиза на базе культурной темы", oid: "-239796241", id: "456239040" },
    { number: 16, direction: "Туризм", topic: "Организация походов и событий", title: "Подготовка туриста: инвентарь и фитнес", description: "Снаряжение, питание, физическая подготовка", oid: "-239796241", id: "456239030" },
    { number: 17, direction: "Туризм", topic: "Организация походов и событий", title: "Построение маршрута и оценка рисков", description: "Анализ погодных условий, географии, логистики", oid: "-239796241", id: "456239021" },
    { number: 18, direction: "Туризм", topic: "Организация походов и событий", title: "Безопасное поведение в природе", description: "Связь, первая помощь, работа с картой/навигацией", oid: "-239796241", id: "456239025" },
    { number: 19, direction: "Туризм", topic: "Организация походов и событий", title: "Тимбилдинг на маршруте", description: "Роли в команде, взаимодействие, лидерство", oid: "-239796241", id: "456239035" },
    { number: 20, direction: "Туризм", topic: "Организация походов и событий", title: "Проведение финального турпохода", description: "Практика: организация похода с реальным выходом на маршрут", oid: "-239796241", id: "456239019" },
    { number: 21, direction: "Туризм", topic: "Экскурсионная и квиз-деятельность", title: "Создание тур-квиза/квеста: основы", description: "Типы вопросов, баланс тем, геймификация", oid: "-239796241", id: "456239023" },
    { number: 22, direction: "Туризм", topic: "Экскурсионная и квиз-деятельность", title: "Работа с целевой аудиторией", description: "Психология подростков, коммуникации, поощрение участников", oid: "-239796241", id: "456239024" },
    { number: 23, direction: "Туризм", topic: "Экскурсионная и квиз-деятельность", title: "Проведение квиза/квеста: практика", description: "Виды работы с группой, тайминг, обратная связь", oid: "-239796241", id: "456239031" },
    { number: 24, direction: "Туризм", topic: "Экскурсионная и квиз-деятельность", title: "Публичное выступление", description: "Навыки презентации, уверенности, умение держать аудиторию", oid: "-239796241", id: "456239027" },
    { number: 25, direction: "Туризм", topic: "Экскурсионная и квиз-деятельность", title: "Итоговая презентация школьникам", description: "Проведение собственного тур-квиза или квеста для школьников", oid: "-239796241", id: "456239038" },
    { number: 26, direction: "Медиа", topic: "Введение в медиа для туризма", title: "Современные форматы продвижения", description: "Обзор цифровых инструментов в туризме", oid: "-239796241", id: "456239029" },
    { number: 27, direction: "Медиа", topic: "Введение в медиа для туризма", title: "Туристические тренды в соцсетях", description: "Instagram, VK, YouTube, TikTok — кейсы успешной коммуникации", oid: "-239796241", id: "456239033" },
    { number: 28, direction: "Медиа", topic: "Введение в медиа для туризма", title: "Разработка медиа-стратегии проекта", description: "Постановка целей, целевая аудитория, подбор каналов", oid: "-239796241", id: "456239047" },
    { number: 29, direction: "Медиа", topic: "Введение в медиа для туризма", title: "Основы SMM и работа с контент-планом", description: "Планирование публикаций, регулярность, взаимодействие с подписчиками", oid: "-239796241", id: "456239045" },
    { number: 30, direction: "Медиа", topic: "Введение в медиа для туризма", title: "Репетиция: обсуждение идей для онлайн-гидов", description: "Генерация идей будущих видеопроектов команды", oid: "-239796241", id: "456239059" },
    { number: 31, direction: "Медиа", topic: "Фото- и видеосъемка", title: "Знакомство с техникой и оборудованием", description: "Смартфоны, камеры, приёмы съемки на природе", oid: "-239796241", id: "456239064" },
    { number: 32, direction: "Медиа", topic: "Фото- и видеосъемка", title: "Композиция и работа со светом", description: "Основы построения кадра, цвет, ракурсы", oid: "-239796241", id: "456239066" },
    { number: 33, direction: "Медиа", topic: "Фото- и видеосъемка", title: "Съёмка в движении", description: "Динамические репортажи, трекинговые сюжеты, интервальные фото/видео", oid: "-239796241", id: "456239048" },
    { number: 34, direction: "Медиа", topic: "Фото- и видеосъемка", title: "Работа с героями и натурой", description: "Интервью, сторителлинг, особенности съёмки путевых заметок", oid: "-239796241", id: "456239058" },
    { number: 35, direction: "Медиа", topic: "Фото- и видеосъемка", title: "Мини-практикум: съёмка для блога", description: "Практическое занятие: создание фото- и видеоконтента в городе или на маршруте", oid: "-239796241", id: "456239046" },
    { number: 36, direction: "Медиа", topic: "Монтаж и обработка", title: "Введение в программы для монтажа", description: "Lightworks, iMovie, CapCut, компьютерные и мобильные приложения", oid: "-239796241", id: "456239060" },
    { number: 37, direction: "Медиа", topic: "Монтаж и обработка", title: "Основные приёмы монтажа", description: "Склейки, ритм, работа со звуком и титрами", oid: "-239796241", id: "456239051" },
    { number: 38, direction: "Медиа", topic: "Монтаж и обработка", title: "Вставка инфографики, маркеров на карте", description: "Графика для объяснения маршрутов, пояснения для школьников", oid: "-239796241", id: "456239053" },
    { number: 39, direction: "Медиа", topic: "Монтаж и обработка", title: "Работа с музыкой и озвучкой", description: "Легальные источники музыки, запись голоса, наложение", oid: "-239796241", id: "456239044" },
    { number: 40, direction: "Медиа", topic: "Монтаж и обработка", title: "Практика: монтаж пробного видеогида", description: "Командная работа над первым общим видеороликом", oid: "-239796241", id: "456239057" },
    { number: 41, direction: "Медиа", topic: "Создание онлайн-гидов", title: "Построение сценария видеогида", description: "Структура повествования, выбор объектов, сценарный план", oid: "-239796241", id: "456239054" },
    { number: 42, direction: "Медиа", topic: "Создание онлайн-гидов", title: "Турист как гид: навыки рассказчика", description: "Ораторское мастерство, работа с телом и голосом", oid: "-239796241", id: "456239050" },
    { number: 43, direction: "Медиа", topic: "Создание онлайн-гидов", title: "Работа в кадре и за кадром", description: "Взаимодействие в команде, дублеры, съемка интервью", oid: "-239796241", id: "456239063" },
    { number: 44, direction: "Медиа", topic: "Создание онлайн-гидов", title: "Запись репортажей с маршрута", description: "Практика выездной съёмки на месте, интервью с «местными экспертами»", oid: "-239796241", id: "456239056" },
    { number: 45, direction: "Медиа", topic: "Создание онлайн-гидов", title: "Монтаж полного видеогида", description: "Завершение и оформление итогового ролика, публикация", oid: "-239796241", id: "456239052" },
    { number: 46, direction: "Медиа", topic: "Продвижение и медиакампании", title: "Таргетинг и продвижение видеоконтента", description: "Базовые принципы рекламы в сети, аттракция новой аудитории", oid: "-239796241", id: "456239062" },
    { number: 47, direction: "Медиа", topic: "Продвижение и медиакампании", title: "Краудсорсинг и коллаборации", description: "Партнерские проекты, сбор идей и обратной связи от зрителей", oid: "-239796241", id: "456239065" },
    { number: 48, direction: "Медиа", topic: "Продвижение и медиакампании", title: "Аналитика контента", description: "Оценка статистики, отслеживание просмотров и вовлечённости", oid: "-239796241", id: "456239055" },
    { number: 49, direction: "Медиа", topic: "Продвижение и медиакампании", title: "Кризисная коммуникация и модерация комментариев", description: "Работа с негативом, обратная связь, спасение репутации", oid: "-239796241", id: "456239049" },
    { number: 50, direction: "Медиа", topic: "Продвижение и медиакампании", title: "Финальная сессия: презентация проектов", description: "Защита видеогидов, обмен опытом, планирование будущих проектов", oid: "-239796241", id: "456239061" },
  ];

  const activeCourseFilters = {
    direction: "all"
  };

  function renderCourse() {
    const filteredLessons = lessons.filter((lesson) => {
      return (
        activeCourseFilters.direction === "all" ||
        lesson.direction === activeCourseFilters.direction
      );
    });

    courseCount.textContent = filteredLessons.length;
    courseGrid.innerHTML = "";

    const topics = [];
    filteredLessons.forEach((lesson) => {
      let group = topics.find(
        (item) => item.direction === lesson.direction && item.topic === lesson.topic
      );

      if (!group) {
        group = { direction: lesson.direction, topic: lesson.topic, lessons: [] };
        topics.push(group);
      }

      group.lessons.push(lesson);
    });

    topics.forEach((group) => {
      const groupEl = document.createElement("div");
      groupEl.className = "lessons-group reveal visible";

      const header = document.createElement("div");
      header.className = "lessons-group-title";
      header.innerHTML = `
        <span class="lessons-group-direction">${group.direction}</span>
        <h3>${group.topic}</h3>
        <span class="lessons-group-count">${group.lessons.length} занятий</span>
      `;
      groupEl.appendChild(header);

      const grid = document.createElement("div");
      grid.className = "lessons-grid";

      group.lessons.forEach((lesson) => {
        const tile = document.createElement("button");
        tile.type = "button";
        tile.className = "lesson-tile";
        tile.innerHTML = `
          <div class="lesson-number">${lesson.number}</div>
          <h4>${lesson.title}</h4>
          <p>${lesson.description}</p>
        `;
        tile.addEventListener("click", () => openCourseModal(lesson));
        grid.appendChild(tile);
      });

      groupEl.appendChild(grid);
      courseGrid.appendChild(groupEl);
    });
  }

  function openCourseModal(lesson) {
    document.querySelector("#courseModalKicker").textContent = `Урок ${lesson.number} · ${lesson.direction}`;
    document.querySelector("#courseModalTitle").textContent = lesson.title;
    document.querySelector("#courseModalDescription").textContent = lesson.description;

    document.querySelector("#courseModalPlayer").innerHTML = `
      <iframe
        src="https://vk.com/video_ext.php?oid=${lesson.oid}&id=${lesson.id}&hd=2&autoplay=1"
        width="100%"
        height="100%"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        frameborder="0"
        allowfullscreen
      ></iframe>
    `;

    courseModal.classList.add("active");
    courseModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeCourseModal() {
    courseModal.classList.remove("active");
    courseModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.querySelector("#courseModalPlayer").innerHTML = "";
  }

  document.querySelectorAll("[data-filter='direction']").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");

      if (!button) {
        return;
      }

      activeCourseFilters.direction = button.dataset.value;

      group.querySelectorAll(".filter-btn").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
      renderCourse();
    });
  });

  document.querySelectorAll("[data-close-course-modal]").forEach((element) => {
    element.addEventListener("click", closeCourseModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && courseModal.classList.contains("active")) {
      closeCourseModal();
    }
  });

  renderCourse();
}