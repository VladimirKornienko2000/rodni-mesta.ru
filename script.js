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
      title: "Поляна - Сандык-Кая",
      description:
        "Однодневный маршрут из посёлка Поляна на вершину Сандык-Кая с видом на Байдарскую и Бельбекскую долины.",
      distance: 5,
      elevation: "518 м",
      duration: "2 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3090937c338f4a25355dc831340837ab1c847e2bcb02237c9a4fed2a05bfa0b1&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "Танковое - Сурень-Тау",
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
      title: "Центр Севастополя",
      description:
        "Городской маршрут по центральным улицам, набережной и знаковым точкам Севастополя.",
      distance: 2,
      elevation: "60 м",
      duration: "1,5 ч",
      durationDays: 1,
      difficulty: "легкий",
      terrain: "городская",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=33.525367%2C44.616650&z=13" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "Балаклава и тропы",
      description:
        "Смешанный маршрут: городская Балаклава, виды на бухту и природные участки побережья.",
      distance: 10,
      elevation: "340 м",
      duration: "5 ч",
      durationDays: 1,
      difficulty: "средний",
      terrain: "смешанная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=33.599075%2C44.500978&z=13" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "Большая Севастопольская тропа",
      description:
        "Длинный природный маршрут для подготовленной команды с насыщенными видовыми точками.",
      distance: 20,
      elevation: "780 м",
      duration: "1 день",
      durationDays: 1,
      difficulty: "сложный",
      terrain: "природная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=33.738570%2C44.527950&z=11" width="1280" height="720" frameborder="0"></iframe>'
    },
    {
      title: "Крымский двухдневный маршрут",
      description:
        "Большой маршрут на два дня для тех, кто хочет совместить природу, движение и ночевку.",
      distance: 40,
      elevation: "1200 м",
      duration: "2 дня",
      durationDays: 2,
      difficulty: "сложный",
      terrain: "смешанная",
      map:
        '<iframe src="https://yandex.ru/map-widget/v1/?ll=34.200000%2C44.700000&z=9" width="1280" height="720" frameborder="0"></iframe>'
    }
  ];

  const activeFilters = {
    distance: "all",
    terrain: "all",
    difficulty: "all",
    durationDays: "all"
  };

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

    filteredRoutes.forEach((route, index) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "route-tile reveal visible";

      card.innerHTML = `
        <div class="route-tile-top">
          <div class="route-distance">${route.distance} км</div>
          <div class="route-symbol">⌁</div>
        </div>

        <h3>${route.title}</h3>

        <div class="route-tags">
          <span>${route.terrain}</span>
          <span>${route.difficulty}</span>
          <span>${route.durationDays === 1 ? "1 день" : "2 дня"}</span>
        </div>
      `;

      card.addEventListener("click", () => openRouteModal(index));
      routesGrid.appendChild(card);
    });
  }

  function openRouteModal(index) {
    const route = routes[index];

    document.querySelector("#modalTitle").textContent = route.title;
    document.querySelector("#modalDescription").textContent = route.description;

    document.querySelector("#modalStats").innerHTML = `
      <span>Расстояние: ${route.distance} км</span>
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
