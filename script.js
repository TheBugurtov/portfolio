// === i18n ===
const i18n = {
    en: {
        location: 'Krasnodar, Russia',
        title_Staff: 'Staff Product Designer',
        hero_desc: 'I architect scalable design systems and AI-driven product experiences. Led the evolution of the design system for 30+ teams and products used by 1.5M+ people — focused on clarity, velocity, and what matters: the user.',
        link_email: 'E-Mail', link_ph: 'Product Hunt', link_li: 'Linkedin', link_tg: 'Telegram', link_cv: 'CV',
        exp_section: 'Experience',
        plugins_section: 'Own Development',
        plugin_var_exporter_desc: 'Export color variables from selected layers with mode detection and alias resolution to HEX. Copy or download as JSON.',
        plugin_copy_layers_desc: 'Scan and export layer names with adjustable depth. Live preview, click-to-select on canvas, one-click copy.',
        plugin_var_refresher_desc: 'Restore broken local variable aliases in one click — after library migrations or copy-paste between files.',
        plugin_instance_swapper_desc: 'Bulk-replace components via source/target slots. Scope: Document, Page, or Selection — with swap count feedback.',
        role_ppd: 'Staff Product Designer', role_po: 'Senior Product Designer & Product Owner', role_expert: 'External Product Expert',
        role_senior: 'Senior Product Designer', role_lead: 'UI/UX Designer', role_comm: 'Communication Designer', role_po_lead: 'Senior Product Designer & Product Owner',
        role_label: 'Role:',
        period_present: '2025 – Present', period_2020_25: '2020 – 2025', period_23_24: '2023 – 2024',
        period_14_20: '2014 – 2020', period_16_20: '2016 – 2020', period_12_14: '2012 – 2014',
        proj_mts_system_title: 'MTS Design system',
        proj_mts_system_desc_en: 'Defined the company-wide strategy for scaling and evolving the design system used by 500+ designers across 30+ teams: optimized components, conducted reviews, onboarded and trained teams on best practices. Established governance and built an engineering-first ecosystem, implementing AI-driven workflows. Result: 25% faster release velocity, 40% internal adoption (MOI), and over 9 million design system components used in 2025.',
        proj_mts_system_nda: 'Confidential: Further metrics and details under NDA.',
        proj_mts_system_contrib: 'A unified design ecosystem for MTS, providing scalable UI components and patterns that ensure consistency across hundreds of digital touchpoints.',
        proj_mts_portal_title: 'MTS Design Portal',
        proj_mts_portal_contrib: 'Architected the design portal as a single source of truth — turned scattered docs into a high-velocity ecosystem for 500+ designers and developers.',
        proj_mts_portal_desc: 'Centralized hub for MTS design resources, making the design system accessible, searchable, and easy to adopt for thousands of employees.',
        proj_lunacy_contrib: 'Transformed a .sketch viewer into a cross-platform Figma alternative with 1.5M MAU. Led product and design; shipped AI-tool integration and an industry-leading design import engine.',
        proj_lunacy_desc: 'A cross-platform graphic editor with AI tools and native performance, now used globally by over 1.5 million designers.',
        proj_bg_title: 'AI Background Remover',
        proj_bg_contrib: 'Redesigned the editing experience and shipped neural-correction modes for hair and complex edges — raised the bar for automated background removal in the industry.',
        proj_bg_desc: 'A one-click AI tool that handles complex pixels so creators can focus on ideas, not tedious manual masking.',
        proj_pichon_contrib: 'Owned product and UX for the desktop client; delivered sub-second access to 1.5M assets with no lag — the largest icons library in a single app.',
        proj_pichon_desc: 'A high-performance desktop hub for Windows, bringing 1.5M+ graphics directly into the designer\'s workflow without the wait.',
        proj_swapper_title: 'AI Face Swapper',
        proj_swapper_contrib: 'Led design of the "Replace" engine — anatomical precision and micro-expressions preserved, addressing the main artifact issues in AI face synthesis.',
        proj_swapper_desc: 'High-resolution AI face synthesis tool designed for realistic, professional-grade results with minimal user effort.',
        proj_figma_title: 'Icons8 Figma Plugin',
        proj_figma_contrib: 'Shipped AI-powered search and semantic filters in the Figma plugin — 60% faster time to find the right asset across 1.5M+ items.',
        proj_figma_desc: 'The ultimate creative bridge for Figma, placing 1.5M+ assets and AI-search capabilities directly inside the design canvas.',
        explore_btn: 'Explore',
        contact_info: 'Krasnodar · Russia · 2026'
    },
    ru: {
        location: 'Краснодар, Россия',
        title_Staff: 'Главный продуктовый дизайнер',
        hero_desc: 'Проектирую масштабируемые дизайн-системы и продукты на базе AI. Развивал дизайн-систему для 30+ команд. Моими решениями пользуются более 1.5 млн человек. Ценю ясность, скорость и пользу для пользователя.',
        link_email: 'Email', link_ph: 'Product Hunt', link_li: 'LinkedIn', link_tg: 'Telegram', link_cv: 'Резюме',
        exp_section: 'Опыт работы',
        plugins_section: 'Собственные разработки',
        plugin_var_exporter_desc: 'Экспорт цветовых переменных из слоёв с учётом Mode и разрешением алиасов в HEX. Копирование или скачивание JSON.',
        plugin_copy_layers_desc: 'Сканирование и экспорт имён слоёв с настройкой глубины. Превью, выбор по клику, копирование списка.',
        plugin_var_refresher_desc: 'Восстановление сломанных локальных алиасов переменных в один клик — после миграций библиотек или копирования между файлами.',
        plugin_instance_swapper_desc: 'Массовая замена компонентов через слоты source/target. Область: Document, Page или Selection — с отчётом о количестве замен.',
        role_ppd: 'Главный продуктовый дизайнер', 
        role_po: 'Старший продуктовый дизайнер и владелец продукта', 
        role_expert: 'Внешний эксперт по продукту',
        role_senior: 'Старший продуктовый дизайнер', 
        role_lead: 'UI/UX дизайнер', 
        role_comm: 'Коммуникационный дизайнер', 
        role_po_lead: 'Старший продуктовый дизайнер и владелец продукта',
        role_label: 'Роль:',
        period_present: '2025 – по настоящее время', 
        period_2020_25: '2020 – 2025', 
        period_23_24: '2023 – 2024',
        period_14_20: '2014 – 2020', 
        period_16_20: '2016 – 2020', 
        period_12_14: '2012 – 2014',
        proj_mts_system_title: 'Дизайн-система МТС',
        proj_mts_system_desc: 'Определял стратегию развития и масштабирования дизайн-системы на уровне компании для 500+ дизайнеров из 30+ команд: оптимизировал компоненты, проводил ревью, онбордил и обучал правильному использованию. Выстроил governance-модель и инженерную экосистему, внедрил AI-воркфлоу. Итог: скорость релизов выросла на 25%, внедрение внутри компании (MOI) — на 40%. За 2025 год использовано более 9 млн компонентов из дизайн-системы',
        proj_mts_system_nda: 'Конфиденциально: подробные метрики защищены NDA.',
        proj_mts_system_contrib: 'Единая экосистема МТС: масштабируемая библиотека компонентов и паттернов, обеспечивающая консистентность сотен цифровых продуктов.',
        proj_mts_portal_title: 'Дизайн-портал МТС',
        proj_mts_portal_contrib: 'Спроектировал дизайн-портал как Single Source of Truth — превратил разрозненную документацию в единую базу знаний для 500+ дизайнеров и разработчиков.',
        proj_mts_portal_desc: 'Центральный хаб ресурсов МТС: сделал дизайн-систему доступной и понятной для тысяч сотрудников компании.',
        proj_lunacy_contrib: 'Трансформировал просмотрщик .sketch-файлов в полноценную альтернативу Figma с 1.5M MAU. Отвечал за продукт и дизайн; внедрил AI-инструменты и лучший на рынке движок импорта.',
        proj_lunacy_desc: 'Кроссплатформенный графический редактор с AI-функциями и высокой производительностью. Мировое признание и 1.5 миллиона пользователей.',
        proj_bg_title: 'AI Background Remover',
        proj_bg_contrib: 'Переработал опыт редактирования и запустил нейросетевые режимы для обработки волос и сложных контуров — задал новый стандарт качества для автоматического удаления фона.',
        proj_bg_desc: 'AI-инструмент для удаления фона в один клик. Берет на себя рутину с пикселями, позволяя авторам сосредоточиться на идеях.',
        proj_pichon_contrib: 'Product- и UX-owner десктоп-клиента. Обеспечил мгновенный доступ к 1.5 млн ассетов — самая большая библиотека иконок в одном приложении.',
        proj_pichon_desc: 'Высокопроизводительный хаб для Windows, интегрирующий огромную библиотеку графики прямо в рабочий процесс дизайнера.',
        proj_swapper_title: 'AI Face Swapper',
        proj_swapper_contrib: 'Лидировал дизайн движка «Replace» — добился анатомической точности и сохранения мимики, решив проблему артефактов при синтезе лиц.',
        proj_swapper_desc: 'Инструмент для фотореалистичной замены лиц на базе AI. Профессиональный результат при минимуме усилий пользователя.',
        proj_figma_title: 'Плагин Icons8 для Figma',
        proj_figma_contrib: 'Разработал AI-поиск и семантические фильтры — теперь поиск нужного ассета среди 1.5 млн объектов занимает на 60% меньше времени.',
        proj_figma_desc: 'Ультимативный мост между Icons8 и Figma: поиск и библиотека ресурсов прямо внутри рабочего пространства.',
        explore_btn: 'Подробнее',
        contact_info: 'Краснодар · Россия · 2026'
    },
    tribe: {
        location: 'Город Краснодар, Моя Земля',
        title_Staff: 'Главный строитель знаков',
        hero_desc: 'Делать большие системы правил для многих племен. Давать силу вещам, где живет Дух Машины. Мои знаки видят полтора миллиона глаз. Любить ясность. Любить быстроту. Приносить пользу людям.',
        link_email: 'Послание', link_ph: 'Охота на Вещи', link_li: 'Лес Связей', link_tg: 'Быстрая Весть', link_cv: 'Свиток Жизни',
        exp_section: 'Тропы, которыми прошел',
        plugins_section: 'Свои заклинания',
        plugin_var_exporter_desc: 'Вытащить цвета из слоёв. Знать свет и тьму. Развязать цепочки алиасов до чистого HEX. Отдать в JSON.',
        plugin_copy_layers_desc: 'Собрать имена слоёв на любую глубину. Смотреть список, ткнуть — найти на холсте. Скопировать одним ударом.',
        plugin_var_refresher_desc: 'Починить сломанные связи переменных одним кликом. После переноса библиотек или копирования между файлами.',
        plugin_instance_swapper_desc: 'Менять компоненты толпой. Взять старый, дать новый. Весь файл, страница или выбор — и сказать, сколько сменилось.',
        role_ppd: 'Главный строитель знаков', 
        role_po: 'Старший строитель и вождь продукта', 
        role_expert: 'Мудрец со стороны',
        role_senior: 'Старший строитель знаков', 
        role_lead: 'Резчик по экрану', 
        role_comm: 'Рисовал вести для людей', 
        role_po_lead: 'Старший строитель и вождь продукта',
        role_label: 'Кем был:',
        period_present: '2025 – по сей день', 
        period_2020_25: '2020 – 2025', 
        period_23_24: '2023 – 2024',
        period_14_20: '2014 – 2020', 
        period_16_20: '2016 – 2020', 
        period_12_14: '2012 – 2014',
        proj_mts_system_title: 'Система племени МТС',
        proj_mts_system_desc_en: 'Приручил 30 племен. Дал им общие правила. Теперь охотники строят хижины на четверть быстрее. В год взято девять миллионов камней из моей кладки.',
        proj_mts_system_desc: 'Приручил 30 племен. Дал им общие правила. Теперь охотники строят хижины на четверть быстрее. В год взято девять миллионов камней из моей кладки.',
        proj_mts_system_nda: 'Тайна: духи запретили говорить числа.',
        proj_mts_system_contrib: 'Общий котел МТС: большие запасы деталей, чтобы строить одинаково хорошо.',
        proj_mts_portal_title: 'Священная книга МТС',
        proj_mts_portal_contrib: 'Собрал все знания в один узел. Пять сотен мастеров теперь смотрят в одну истину.',
        proj_mts_portal_desc: 'Главный шатер МТС: все знаки и правила лежат здесь.',
        proj_lunacy_contrib: 'Взял малую вещь, сделал большой инструмент. Вложил туда разум машины.',
        proj_lunacy_desc: 'Инструмент рисовать. Дух машины помогать. Полтора миллиона глаз смотреть.',
        proj_bg_title: 'Убийца теней',
        proj_bg_contrib: 'Научил машину чистить грязь вокруг волос и тел.',
        proj_bg_desc: 'Один удар — чистый дух. Машина съедает лишнее, мастер думает о великом.',
        proj_pichon_contrib: 'Вождь продукта. Дал быстрый путь к горе иконок без ожидания.',
        proj_pichon_desc: 'Большой шатер для Windows. Полтора миллиона картинок под рукой.',
        proj_swapper_title: 'Меняющий Лица',
        proj_swapper_contrib: 'Машина берет лицо одного и отдает другому. Глаза и рот не кривятся.',
        proj_swapper_desc: 'Магия машин менять лица. Выглядит как правда, делать легко.',
        proj_figma_title: 'Мост в Фигму',
        proj_figma_contrib: 'Соединил два мира. Искать нужный знак в два раза быстрее.',
        proj_figma_desc: 'Тропа между Icons8 и Figma: все картинки и умный поиск прямо на холсте.',
        explore_btn: 'Смотреть глубже',
        contact_info: 'Город Краснодар · Земля · 2026'
    }
};

function setLang(lang) {
    if (!i18n[lang]) lang = 'en';
    document.body.classList.remove('lang-en', 'lang-ru', 'lang-tribe');
    document.body.classList.add('lang-' + lang);
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = i18n[lang][key];
        if (text !== undefined) el.innerHTML = text;
    });
}

// === Погода и время ===
const WEATHER_API_KEY = "b963c3343617405c9e4111229252608";
function updateKrasnodarTime() {
    const timeElem = document.getElementById('krasnodar-time');
    if (timeElem) timeElem.textContent = new Date().toLocaleTimeString('en-US', { timeZone: 'Europe/Moscow', hour: '2-digit', minute: '2-digit', hour12: false });
}

function mapWeatherCode(code, isDay) {
    const d = isDay ? "day" : "night";

    switch(code) {
        case 1000: return `wi-${d}-sunny`;                 // Ясно
        case 1003: return `wi-${d}-cloudy`;                // Малооблачно
        case 1006: return "wi-cloudy";                     // Облачно
        case 1009: return "wi-cloudy";                     // Пасмурно
        case 1030: 
        case 1135: 
        case 1147: return "wi-fog";                        // Туман
        case 1063: 
        case 1150: 
        case 1153: 
        case 1180: 
        case 1183: 
        case 1186: 
        case 1189: 
        case 1192: 
        case 1195: return "wi-rain";                       // Дождь
        case 1072: 
        case 1168: 
        case 1171: 
        case 1198: 
        case 1201: return "wi-sleet";                      // Снег с дождем / мокрый снег
        case 1066: 
        case 1210: 
        case 1213: 
        case 1216: 
        case 1219: 
        case 1222: 
        case 1225: return "wi-snow";                       // Снег
        case 1114: 
        case 1117: return "wi-snow-wind";                  // Снегопад сильный
        case 1087: 
        case 1273: 
        case 1276: return "wi-thunderstorm";              // Гроза
        case 1150: 
        case 1153: 
        case 1168: 
        case 1171: return "wi-showers";                   // Лёгкий дождь
        case 1180: 
        case 1183: 
        case 1186: 
        case 1189: 
        case 1192: 
        case 1195: return "wi-rain";                      // Дождь
        case 1240: 
        case 1243: 
        case 1246: return "wi-rain";                      // Ливень
        case 1255: 
        case 1258: return "wi-snow";                      // Снегопад
        case 1261: 
        case 1264: return "wi-sleet";                     // Мокрый снег
        case 1279: 
        case 1282: return "wi-thunderstorm";              // Гроза со снегом
        default: return "wi-na";                            // На всякий случай
    }
}

async function getKrasnodarWeather() {
    const tempElement = document.getElementById('weather-temp');
    const iconElement = document.getElementById('weather-icon');
    
    // Проверка, есть ли элементы, чтобы не ловить ошибки
    if (!tempElement) return;

    try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Krasnodar&lang=ru`); // Добавил lang=ru для описания, если нужно
        
        if (!res.ok) {
            throw new Error(`Ошибка API: ${res.status}`);
        }

        const data = await res.json();

        if (data?.current) {
            // 1. Обновляем температуру
            tempElement.textContent = `${Math.round(data.current.temp_c)}°C`;
            
            // 2. Обновляем иконку (если заменил <i> на <img> в HTML)
            if (iconElement && data.current.condition.code) {
        iconElement.className =
        "wi " + mapWeatherCode(
            data.current.condition.code,
            data.current.is_day
        );
}
        }
    } catch (e) {
        console.error("Не удалось загрузить погоду:", e);
        // Можно вывести заглушку, чтобы пользователь понял
        tempElement.textContent = "--"; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setLang(localStorage.getItem('lang') || 'en');
    document.querySelectorAll('.lang-btn').forEach(btn => btn.onclick = () => setLang(btn.getAttribute('data-lang')));
    
    updateKrasnodarTime();
    setInterval(updateKrasnodarTime, 60000);
    getKrasnodarWeather();

    // Параллакс заголовка
    const title = document.querySelector('.main-title');
    if (title) {
        let tx = 50, ty = 50, cx = 50, cy = 50;
        document.addEventListener('mousemove', e => {
            tx = 50 + (e.clientX / window.innerWidth - 0.5) * 50;
            ty = 50 + (e.clientY / window.innerHeight - 0.5) * 40;
        });
        (function anim() {
            cx += (tx - cx) * 0.02; cy += (ty - cy) * 0.02;
            title.style.backgroundPosition = `${cx}% ${cy}%`;
            requestAnimationFrame(anim);
        })();
    }

    // Внешние ссылки
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.target = "_blank"; link.rel = "noopener noreferrer";
    });

    // Плавное затемнение Hero
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        if (hero) document.documentElement.style.setProperty('--scroll-darkness', Math.min(window.scrollY / hero.offsetHeight, 1));
    });

    initLightbox();
});

// === ЛАЙТБОКС ===
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const track = document.getElementById('lightbox-track');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    if (!lightbox || !track) return;

    let gallery = [], index = 0;
    let isDragging = false, startX = 0, currentTranslate = 0, wasMoved = false;

    document.querySelectorAll('.gallery-thumb').forEach(thumb => {
        thumb.onclick = function() {
            const thumbs = this.closest('.gallery-grid').querySelectorAll('.gallery-thumb');
            const originalGallery = Array.from(thumbs).map(t => t.getAttribute('data-full'));
            
            const first = originalGallery[0];
            const last = originalGallery[originalGallery.length - 1];
            gallery = [last, ...originalGallery, first];
            index = Array.from(thumbs).indexOf(this) + 1;
            
            track.innerHTML = gallery.map(src => `<div class="lightbox-slide"><img src="${src}" draggable="false" loading="lazy"></div>`).join('');
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            track.style.transition = 'none';
            updateSlide();
            setTimeout(() => track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)', 50);
        };
    });

    function updateSlide() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    track.addEventListener('transitionend', () => {
        if (index === 0) {
            track.style.transition = 'none';
            index = gallery.length - 2;
            updateSlide();
            setTimeout(() => track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)', 20);
        }
        if (index === gallery.length - 1) {
            track.style.transition = 'none';
            index = 1;
            updateSlide();
            setTimeout(() => track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)', 20);
        }
    });

    const getX = e => e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;

    const start = e => {
        isDragging = true;
        wasMoved = false;
        startX = getX(e);
        track.style.transition = 'none';
    };

    const move = e => {
        if (!isDragging) return;
        
        // Адаптивная блокировка скролла страницы при горизонтальном свайпе
        if (e.type === 'touchmove') {
            const currentX = e.touches[0].clientX;
            const diffX = Math.abs(currentX - startX);
            if (diffX > 10) { // Если движение явно горизонтальное
                e.preventDefault();
            }
        }

        currentTranslate = getX(e) - startX;
        if (Math.abs(currentTranslate) > 5) wasMoved = true;
        
        const trackWidth = track.offsetWidth;
        track.style.transform = `translateX(${-index * trackWidth + currentTranslate}px)`;
    };

    const end = () => {
        if (!isDragging) return;
        isDragging = false;
        track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
        
        // Адаптивный порог переключения (20% от ширины экрана)
        const threshold = window.innerWidth * 0.2;
        
        if (currentTranslate < -threshold) index++;
        else if (currentTranslate > threshold) index--;
        
        updateSlide();
        currentTranslate = 0;
    };

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    lightbox.onmousedown = (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-container') || e.target.classList.contains('lightbox-slide')) {
            const checkClick = () => {
                if (!wasMoved) closeLightbox();
                window.removeEventListener('mouseup', checkClick);
            };
            window.addEventListener('mouseup', checkClick);
        }
    };

    // События мыши и тача
    track.onmousedown = start;
    window.onmousemove = move;
    window.onmouseup = end;
    
    track.addEventListener('touchstart', start, {passive: true});
    track.addEventListener('touchmove', move, {passive: false}); // passive: false нужен для preventDefault
    track.addEventListener('touchend', end, {passive: true});

    nextBtn.onclick = (e) => { e.stopPropagation(); index++; updateSlide(); };
    prevBtn.onclick = (e) => { e.stopPropagation(); index--; updateSlide(); };
    closeBtn.onclick = closeLightbox;

    document.onkeydown = e => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') { index++; updateSlide(); }
        if (e.key === 'ArrowLeft') { index--; updateSlide(); }
    };
}

document.addEventListener('DOMContentLoaded', function () {
    updateKrasnodarTime();
    setInterval(updateKrasnodarTime, 60000);

    getKrasnodarWeather();   // ВАЖНО
});