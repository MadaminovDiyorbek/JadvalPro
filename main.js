// JadvalPro - Main Application Logic

// --- Constants & State ---
const TAB_CONTENT = document.getElementById('tab-content');
const PAGE_TITLE = document.getElementById('page-title');
const DISPLAY_UNI_NAME = document.getElementById('display-uni-name');

// --- Translations ---
const translations = {
  uz: {
    dashboard: "Dashboard",
    'data-entry': "Ma'mulotlar kiritish",
    'view-data': "Ma'mulotlarni ko'rish",
    generate: "Jadval yaratish",
    schedules: "Jadvallar",
    heatmap: "Bandlik tahlili",
    'personal-schedules': "Shaxsiy jadvallar",
    uni: "Universitet",
    facs: "Fakultetlar",
    deps: "Kafedralar",
    teas: "O'qituvchilar",
    grus: "Guruhlar",
    subs: "Fanlar",
    roos: "Xonalar",
    tims: "Para vaqtlari",
    save: "Saqlash",
    add: "Qo'shish",
    delete: "O'chirish",
    name: "Nomi",
    type: "Turi",
    capacity: "Sig'imi",
    course: "Kurs",
    lang: "Tili",
    students: "Talabalar",
    faculty: "Fakultet",
    department: "Kafedra",
    subject: "Fan",
    teacher: "O'qituvchi",
    room: "Xona",
    day: "Kun",
    slot: "Para",
    time: "Vaqti",
    group: "Guruh",
    status: "Holati",
    gen_btn: "Jadval yaratish",
    loading: "Yuklanmoqda...",
    success: "Muvaffaqiyatli",
    error: "Xatolik",
    empty: "Ma'lumot mavjud emas",
    confirm_del: "O'chirishni tasdiqlaysizmi?",
    split: "Bo'lish",
    lecture: "Ma'ruza",
    practice: "Amaliyot",
    seminar: "Seminar",
    lab: "Laboratoriya",
    step_uni: "Universitet",
    step_fac: "Fakultetlar",
    step_dep: "Kafedralar",
    step_tea: "O'qituvchilar",
    step_gru: "Guruhlar",
    step_sub: "Fanlar",
    step_roo: "Xonalar",
    step_tim: "Para vaqtlari",
    welcome: "Xush kelibsiz, JadvalPro tizimiga!",
    welcome_text: "Universitet dars jadvalini yaratishni boshlash uchun avval 'Ma\'lumotlar kiritish' bo'limida barcha kerakli ma'lumotlarni kiritib chiqing.",
    day_1: "Dushanba", day_2: "Seshanba", day_3: "Chorshanba", day_4: "Payshanba", day_5: "Juma", day_6: "Shanba",
    course_1: "1-kurs", course_2: "2-kurs", course_3: "3-kurs", course_4: "4-kurs",
    lang_uz: "O'zbek", lang_ru: "Rus", lang_en: "Ingliz",
    type_day: "Kunduzgi", type_ext: "Sirtqi",
    day_count: "Ish kunlari",
    gen_schedule: "Yangi jadval yaratish",
    view_schedules: "Saqlangan jadvallar",
    room_analysis: "Xona bandligi",
    teacher_analysis: "O'qituvchi bandligi",
    select_schedule: "Jadvalni tanlang",
    busy: "Band",
    free: "Bo'sh",
    personal_schedules: "O'qituvchi shaxsiy jadvali",
    select_teacher: "O'qituvchini tanlang",
    export_teacher: "Shaxsiy jadvalni yuklash",
    edit_mode: "Qo'lda tahrirlash rejimi",
    conflict_teacher: "O'qituvchi band",
    conflict_room: "Xona band",
    conflict_group: "Guruh band",
    move_success: "Dars muvaffaqiyatli ko'chirildi"
  },
  ru: {
    dashboard: "Дашборд",
    'data-entry': "Ввод данных",
    'view-data': "Просмотр данных",
    generate: "Создать расписание",
    schedules: "Расписания",
    heatmap: "Анализ занятости",
    'personal-schedules': "Личные расписания",
    uni: "Университет",
    facs: "Факультеты",
    deps: "Кафедры",
    teas: "Преподаватели",
    grus: "Группы",
    subs: "Предметы",
    roos: "Аудитории",
    tims: "Время пар",
    save: "Сохранить",
    add: "Добавить",
    delete: "Удалить",
    name: "Название",
    type: "Тип",
    capacity: "Вместимость",
    course: "Курс",
    lang: "Язык",
    students: "Студенты",
    faculty: "Факультет",
    department: "Кафедра",
    subject: "Предмет",
    teacher: "Учитель",
    room: "Аудитория",
    day: "День",
    slot: "Пара",
    time: "Время",
    group: "Группа",
    status: "Статус",
    gen_btn: "Создать расписание",
    loading: "Загрузка...",
    success: "Успешно",
    error: "Ошибка",
    empty: "Нет данных",
    confirm_del: "Вы уверены, что хотите удалить?",
    split: "Делить",
    lecture: "Лекция",
    practice: "Практика",
    seminar: "Семинар",
    lab: "Лаборатория",
    step_uni: "Университет",
    step_fac: "Факультеты",
    step_dep: "Кафедры",
    step_tea: "Преподаватели",
    step_gru: "Группы",
    step_sub: "Предметы",
    step_roo: "Аудитории",
    step_tim: "Время пар",
    welcome: "Добро пожаловать в JadvalPro!",
    welcome_text: "Для начала создания расписания введите все данные в разделе 'Ввод данных'.",
    day_1: "Понедельник", day_2: "Вторник", day_3: "Среда", day_4: "Четверг", day_5: "Пятница", day_6: "Суббота",
    course_1: "1-курс", course_2: "2-курс", course_3: "3-курс", course_4: "4-курс",
    lang_uz: "Узбекский", lang_ru: "Русский", lang_en: "Английский",
    type_day: "Дневное", type_ext: "Заочное",
    day_count: "Рабочие дни",
    gen_schedule: "Создать новое расписание",
    view_schedules: "Сохраненные расписания",
    room_analysis: "Занятость аудиторий",
    teacher_analysis: "Занятость учителей",
    select_schedule: "Выберите расписание",
    busy: "Занято",
    free: "Свободно",
    personal_schedules: "Личное расписание преподавателя",
    select_teacher: "Выберите преподавателя",
    export_teacher: "Скачать личное расписание",
    edit_mode: "Режим ручного редактирования",
    conflict_teacher: "Преподаватель занят",
    conflict_room: "Аудитория занята",
    conflict_group: "Группа занята",
    move_success: "Урок успешно перемещен"
  },
  en: {
    dashboard: "Dashboard",
    'data-entry': "Data Entry",
    'view-data': "View Data",
    generate: "Generate Schedule",
    schedules: "Schedules",
    heatmap: "Occupancy Analysis",
    'personal-schedules': "Personal Schedules",
    uni: "University",
    facs: "Faculties",
    deps: "Departments",
    teas: "Teachers",
    grus: "Groups",
    subs: "Subjects",
    roos: "Rooms",
    tims: "Time Slots",
    save: "Save",
    add: "Add",
    delete: "Delete",
    name: "Name",
    type: "Type",
    capacity: "Capacity",
    course: "Course",
    lang: "Language",
    students: "Students",
    faculty: "Faculty",
    department: "Department",
    subject: "Subject",
    teacher: "Teacher",
    room: "Room",
    day: "Day",
    slot: "Slot",
    time: "Time",
    group: "Group",
    status: "Status",
    gen_btn: "Generate Schedule",
    loading: "Loading...",
    success: "Success",
    error: "Error",
    empty: "No data",
    confirm_del: "Are you sure you want to delete?",
    split: "Split",
    lecture: "Lecture",
    practice: "Practice",
    seminar: "Seminar",
    lab: "Laboratory",
    step_uni: "University",
    step_fac: "Faculties",
    step_dep: "Departments",
    step_tea: "Teachers",
    step_gru: "Groups",
    step_sub: "Subjects",
    step_roo: "Rooms",
    step_tim: "Time Slots",
    welcome: "Welcome to JadvalPro!",
    welcome_text: "To start creating the schedule, enter all necessary data in the 'Data Entry' section.",
    day_1: "Monday", day_2: "Tuesday", day_3: "Wednesday", day_4: "Thursday", day_5: "Friday", day_6: "Saturday",
    course_1: "1-course", course_2: "2-course", course_3: "3-course", course_4: "4-course",
    lang_uz: "Uzbek", lang_ru: "Russian", lang_en: "English",
    type_day: "Daytime", type_ext: "Extramural",
    day_count: "Working days",
    gen_schedule: "Create new schedule",
    view_schedules: "Saved schedules",
    room_analysis: "Room Occupancy",
    teacher_analysis: "Teacher Occupancy",
    select_schedule: "Select Schedule",
    busy: "Busy",
    free: "Free",
    personal_schedules: "Teacher's Personal Schedule",
    select_teacher: "Select Teacher",
    export_teacher: "Download Personal Schedule",
    edit_mode: "Manual Edit Mode",
    conflict_teacher: "Teacher conflict",
    conflict_room: "Room conflict",
    conflict_group: "Group conflict",
    move_success: "Lesson moved successfully"
  }
};


const t = (key) => translations[state.lang || 'uz'][key] || key;

window.changeLang = (val) => {
  state.lang = val;
  saveState();
  location.reload();
};

// --- State Management ---
let state = JSON.parse(localStorage.getItem('jadvalpro_state')) || {
  university: 'Nukus davlat texnika universiteti',
  faculties: [],
  departments: [],
  teachers: [],
  groups: [],
  subjects: [],
  rooms: [],
  timeSlots: [],
  schedules: [],
  lang: 'uz'
};

let currentEntryStep = 'uni';

// --- Helper Functions ---
function saveState() {
  localStorage.setItem('jadvalpro_state', JSON.stringify(state));
  translateUI();
}

function translateUI() {
  document.querySelectorAll('.nav-item').forEach(item => {
    const key = item.dataset.tab;
    if (key) item.querySelector('span:last-child').textContent = t(key);
  });
  const uniNameDisplay = document.getElementById('display-uni-name');
  if (uniNameDisplay) uniNameDisplay.innerText = state.university;
  // Update page title if needed
  const activeTab = document.querySelector('.nav-item.active');
  if (activeTab) PAGE_TITLE.textContent = t(activeTab.dataset.tab);
}

function render(html) {
  TAB_CONTENT.innerHTML = `<div class="fade-in">${html}</div>`;
}

// --- Tab Renderers ---

const views = {
  dashboard: () => {
    PAGE_TITLE.textContent = t('dashboard');
    const html = `
      <div class="stats-grid">
        <div class="glass-card stat-item">
          <span class="stat-title">${t('facs')}</span>
          <span class="stat-value">${state.faculties.length}</span>
        </div>
        <div class="glass-card stat-item">
          <span class="stat-title">${t('teas')}</span>
          <span class="stat-value">${state.teachers.length}</span>
        </div>
        <div class="glass-card stat-item">
          <span class="stat-title">${t('grus')}</span>
          <span class="stat-value">${state.groups.length}</span>
        </div>
        <div class="glass-card stat-item">
          <span class="stat-title">${t('roos')}</span>
          <span class="stat-value">${state.rooms.length}</span>
        </div>
      </div>

      <div class="glass-card" style="margin-top: 2rem;">
        <h2 style="margin-bottom: 1.5rem;">${t('welcome')}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">
          ${t('welcome_text')}
        </p>
        <button class="btn-primary" onclick="switchTab('data-entry')">${t('gen_btn')} ✨</button>
      </div>
    `;
    render(html);
  },

  'data-entry': () => {
    PAGE_TITLE.textContent = t('data_entry');
    const steps = [
      { id: 'uni', icon: '🏛️', label: t('step_uni') },
      { id: 'fac', icon: '🏢', label: t('step_fac') },
      { id: 'dep', icon: '🏫', label: t('step_dep') },
      { id: 'tea', icon: '👨‍🏫', label: t('step_tea') },
      { id: 'gru', icon: '👥', label: t('step_gru') },
      { id: 'sub', icon: '📚', label: t('step_sub') },
      { id: 'roo', icon: '🏠', label: t('step_roo') },
      { id: 'tim', icon: '⏰', label: t('step_tim') }
    ];

    let html = `
      <div class="wizard-nav">
        ${steps.map(s => `
          <div class="wizard-step ${currentEntryStep === s.id ? 'active' : ''}" onclick="window.setEntryStep('${s.id}')">
            <span class="wizard-icon">${s.icon}</span>
            <span>${s.label}</span>
          </div>
        `).join('')}
      </div>
      <div id="wizard-content" class="fade-in"></div>
    `;
    render(html);
    renderStep();
  },

  'view-data': () => {
    PAGE_TITLE.textContent = t('view_data');
    const html = `
      <div class="glass-card">
        <h3>${t('view_data')}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${t('uni')}: ${state.university}</p>
        <div class="stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
          ${['faculties', 'departments', 'teachers', 'groups', 'subjects', 'rooms', 'timeSlots'].map(key => {
            const count = state[key].length;
            const label = t(key === 'timeSlots' ? 'tims' : key.substring(0, 3) + 's');
            return `
              <div class="glass-card" style="padding: 1rem; border-color: rgba(255,255,255,0.05);">
                <span style="display:block; font-size: 0.9rem; color: var(--text-secondary);">${label}</span>
                <span style="font-size: 1.5rem; font-weight: 700; color: var(--accent-color);">${count}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
    render(html);
  },

  generate: () => {
    PAGE_TITLE.textContent = t('generate');
    const html = `
      <div class="glass-card">
        <h3>${t('gen_schedule')}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">${t('gen_btn')} ✨</p>
        
        <div class="form-container grid-2">
          <div class="form-group">
            <label>${t('faculty')}</label>
            <select id="gen-fac" class="select-field">
              <option value="all">${state.lang == 'uz' ? 'Barcha fakultetlar' : state.lang == 'ru' ? 'Все факультеты' : 'All faculties'}</option>
              ${state.faculties.map(f => `<option value="${f.id}">${f.name}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>${t('day_count')}</label>
            <select id="gen-days" class="select-field">
              <option value="5">5 ${state.lang == 'uz' ? 'kunlik' : state.lang == 'ru' ? 'дней' : 'days'}</option>
              <option value="6">6 ${state.lang == 'uz' ? 'kunlik' : state.lang == 'ru' ? 'дней' : 'days'}</option>
            </select>
          </div>
        </div>

        <button onclick="runGeneticAlgorithm()" class="btn-primary" style="margin-top: 2rem; width: 100%; justify-content: center; height: 50px; font-size: 1.1rem;">
          ⚡ ${t('gen_btn')}
        </button>
      </div>

      <div id="gen-status" style="margin-top: 2rem;"></div>
    `;
    render(html);
  },
  schedules: () => {
    PAGE_TITLE.textContent = t('schedules');
    if (state.schedules.length === 0) {
      render(`<div class="glass-card"><p>${t('empty')}</p></div>`);
      return;
    }

    const html = `
      <div class="list-container" style="max-height: none; overflow: visible;">
        ${state.schedules.map((s, idx) => {
          const groupedByGroup = s.data.reduce((acc, curr) => {
            if (!acc[curr.group]) acc[curr.group] = [];
            acc[curr.group].push(curr);
            return acc;
          }, {});

          return `
          <div class="glass-card" style="margin-bottom: 3rem; border-color: rgba(0, 242, 254, 0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;">
              <div>
                <h4 style="color: var(--accent-color); font-size: 1.2rem;">${t('subject')} #${s.id}</h4>
                <small style="color: var(--text-secondary);">${s.date}</small>
              </div>
              <div style="display: flex; gap: 10px;">
                <button onclick="toggleScheduleEdit(${idx})" class="btn-small" style="background: ${s.editing ? 'var(--accent-color)' : 'transparent'}; border: 1px solid var(--accent-color); color: ${s.editing ? 'black' : 'var(--accent-color)'};" title="${t('edit_mode')}">✏️</button>
                <button onclick="exportToExcel(${idx})" class="btn-small" title="Excel">📊</button>
                <button onclick="exportToPDF(${idx})" class="btn-small" title="PDF">📄</button>
                <button onclick="removeSchedule(${idx})" data-remove-idx="${idx}" class="btn-delete" title="${t('delete')}">🗑️</button>
              </div>
            </div>

            ${Object.keys(groupedByGroup).map(groupName => {
              let lastDay = "";
              return `
                <div style="margin-bottom: 2rem;">
                  <h5 style="background: rgba(255, 255, 255, 0.05); padding: 8px 15px; border-radius: 8px; color: var(--accent-color); display: inline-block; margin-bottom: 1rem;">
                    👥 ${t('group')}: ${groupName}
                  </h5>
                  <div style="overflow-x: auto;">
                    <table class="schedule-table ${s.editing ? 'edit-mode' : ''}">
                      <thead>
                        <tr>
                          <th style="width: 120px;">${t('day')}</th><th style="width: 150px;">${t('slot')}</th><th>${t('subject')}</th><th>${t('teacher')}</th><th>${t('room')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${groupedByGroup[groupName].map((d, dIdx) => {
                          const showDay = d.day !== lastDay;
                          lastDay = d.day;
                          const lessonIndex = s.data.indexOf(d);
                          return `
                          <tr 
                            style="${showDay ? 'border-top: 1px solid var(--border-color);' : ''}"
                            class="${s.editing ? 'draggable-row' : ''}"
                            ${s.editing ? `draggable="true" ondragstart="handleDragStart(event, ${idx}, ${lessonIndex})"` : ''}
                          >
                            <td style="font-weight: 600; color: ${showDay ? 'var(--text-primary)' : 'transparent'};">
                              ${d.day}
                            </td>
                            <td 
                              class="${s.editing ? 'drop-zone' : ''}"
                              ${s.editing ? `ondragover="handleDragOver(event)" ondrop="handleDrop(event, ${idx}, ${lessonIndex})"` : ''}
                            >
                              ${d.slot} <br/>
                              <small style="color: var(--text-secondary); opacity: 0.8;">${d.time}</small>
                            </td>
                            <td>${d.subject}</td>
                            <td>${d.teacher}</td>
                            <td>${d.room}</td>
                          </tr>
                          `;
                        }).join('')}
                      </tbody>
                    </table>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}).join('')}
      </div>
    `;
    render(html);
  },

  heatmap: () => {
    PAGE_TITLE.textContent = t('heatmap');
    if (state.schedules.length === 0) {
      render(`<div class="glass-card"><p>${t('empty')}</p></div>`);
      return;
    }

    const html = `
      <div class="glass-card">
        <h3>${t('heatmap')}</h3>
        <div class="form-container grid-3" style="margin-bottom: 2rem;">
          <div class="form-group">
            <label>${t('select_schedule')}</label>
            <select id="heat-sched" class="select-field" onchange="renderHeatmap()">
              ${[...state.schedules].reverse().map(s => `<option value="${s.id}">${t('subject')} #${s.id} (${s.date})</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>${t('type')}</label>
            <select id="heat-type" class="select-field" onchange="updateHeatEntitySelector()">
              <option value="room">${t('room_analysis')}</option>
              <option value="teacher">${t('teacher_analysis')}</option>
            </select>
          </div>
          <div class="form-group">
            <label>${t('name')}</label>
            <select id="heat-entity" class="select-field" onchange="renderHeatmap()">
              <!-- Populated by updateHeatEntitySelector -->
            </select>
          </div>
        </div>

        <div id="heatmap-container" style="margin-top: 2rem; overflow-x: auto;"></div>
      </div>
    `;
    render(html);
    updateHeatEntitySelector();
  },

  'personal-schedules': () => {
    PAGE_TITLE.textContent = t('personal-schedules');
    if (state.schedules.length === 0) {
      render(`<div class="glass-card"><p>${t('empty')}</p></div>`);
      return;
    }

    const html = `
      <div class="glass-card">
        <h3>${t('personal_schedules')}</h3>
        <div class="form-container grid-2" style="margin-bottom: 2rem;">
          <div class="form-group">
            <label>${t('select_schedule')}</label>
            <select id="pers-sched" class="select-field" onchange="renderPersonalSchedule()">
              ${[...state.schedules].reverse().map(s => `<option value="${s.id}">${t('subject')} #${s.id} (${s.date})</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>${t('teacher')}</label>
            <select id="pers-teacher" class="select-field" onchange="renderPersonalSchedule()">
              ${state.teachers.map(t_obj => `<option value="${t_obj.name}">${t_obj.name}</option>`).join('')}
            </select>
          </div>
        </div>

        <div id="personal-container" style="margin-top: 2rem;"></div>
      </div>
    `;
    render(html);
    renderPersonalSchedule();
  }
};

// --- Wizard Step Renderers ---
const renderStep = () => {
  const container = document.getElementById('wizard-content');
  if (!container) return;
  let html = '';

  switch (currentEntryStep) {
    case 'uni':
      html = `
        <div class="glass-card">
          <h3>${t('uni')} ${t('name')}</h3>
          <div class="form-container">
            <input type="text" id="uni-name-input" class="input-field" value="${state.university}" placeholder="${t('uni')} ${t('name')}">
            <button onclick="saveUniName()" class="btn-primary">${t('save')}</button>
          </div>
        </div>
      `;
      break;

    case 'fac':
      html = `
        <div class="glass-card">
          <h3>${t('facs')}</h3>
          <div class="list-container">
            ${state.faculties.length === 0 ? `<p>${t('empty')}</p>` : state.faculties.map(f => `
              <div class="list-item">
                <span>${f.name}</span>
                <button class="btn-delete" onclick="removeEntity('faculties', ${f.id})">🗑️</button>
              </div>
            `).join('')}
          </div>
          <div class="form-group-inline">
            <input type="text" id="new-fac-name" class="input-field" placeholder="${t('faculty')} ${t('name')}">
            <button onclick="addEntity('faculties', {name: document.getElementById('new-fac-name').value})" class="btn-small">➕</button>
          </div>
        </div>
      `;
      break;

    case 'dep':
      html = `
        <div class="glass-card">
          <h3>${t('deps')}</h3>
          <div class="list-container">
            ${state.departments.map(d => {
              const fac = state.faculties.find(f => f.id == d.facultyId);
              return `
                <div class="list-item">
                  <div class="list-item-info">
                    <span class="list-item-title">${d.name}</span>
                    <span class="list-item-subtitle">${fac ? fac.name : t('error')}</span>
                  </div>
                  <button class="btn-delete" onclick="removeEntity('departments', ${d.id})">🗑️</button>
                </div>
              `;
            }).join('')}
          </div>
          <div class="form-container">
            <select id="new-dep-fac" class="select-field">
              <option value="">${t('faculty')}</option>
              ${state.faculties.map(f => `<option value="${f.id}">${f.name}</option>`).join('')}
            </select>
            <div class="form-group-inline">
              <input type="text" id="new-dep-name" class="input-field" placeholder="${t('department')} ${t('name')}">
              <button onclick="addDepartment()" class="btn-small">➕</button>
            </div>
          </div>
        </div>
      `;
      break;

    case 'tea':
      html = `
        <div class="glass-card">
          <h3>${t('teas')}</h3>
          <div class="list-container">
            ${state.teachers.map(t_obj => {
              const dep = state.departments.find(d => d.id == t_obj.departmentId);
              return `
                <div class="list-item">
                  <div class="list-item-info">
                    <span class="list-item-title">${t_obj.name}</span>
                    <span class="list-item-subtitle">${dep ? dep.name : t('error')}</span>
                  </div>
                  <button class="btn-delete" onclick="removeEntity('teachers', ${t_obj.id})">🗑️</button>
                </div>
              `;
            }).join('')}
          </div>
          <div class="form-container">
            <select id="new-tea-dep" class="select-field">
              <option value="">${t('department')}</option>
              ${state.departments.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
            </select>
            <div class="form-group-inline">
              <input type="text" id="new-tea-name" class="input-field" placeholder="${t('name')}">
              <button onclick="addTeacher()" class="btn-small">➕</button>
            </div>
          </div>
        </div>
      `;
      break;

    case 'gru':
      html = `
        <div class="glass-card">
          <h3>${t('grus')}</h3>
          <div class="list-container">
            ${state.groups.map(g => `
              <div class="list-item">
                <div class="list-item-info">
                  <span class="list-item-title">${g.name}</span>
                  <span class="list-item-subtitle">${g.course}-${t('course')}, ${g.lang}, ${g.students} ${t('students').toLowerCase()}</span>
                </div>
                <button class="btn-delete" onclick="removeEntity('groups', ${g.id})">🗑️</button>
              </div>
            `).join('')}
          </div>
          <div class="form-container grid-2">
            <input type="text" id="new-gru-name" class="input-field" placeholder="${t('group')} ${t('name')}">
            <select id="new-gru-fac" class="select-field">
              <option value="">${t('faculty')}</option>
              ${state.faculties.map(f => `<option value="${f.id}">${f.name}</option>`).join('')}
            </select>
            <select id="new-gru-course" class="select-field">
              <option value="1">1-${t('course')}</option><option value="2">2-${t('course')}</option>
              <option value="3">3-${t('course')}</option><option value="4">4-${t('course')}</option>
            </select>
            <select id="new-gru-type" class="select-field">
              <option value="Kunduzgi">${t('type_day')}</option><option value="Sirtqi">${t('type_ext')}</option>
            </select>
            <select id="new-gru-lang" class="select-field">
              <option value="O'zbek">${t('lang_uz')}</option><option value="Rus">${t('lang_ru')}</option><option value="Ingliz">${t('lang_en')}</option>
            </select>
            <input type="number" id="new-gru-students" class="input-field" placeholder="${t('students')}">
            <button onclick="addGroup()" class="btn-primary">${t('add')}</button>
          </div>
        </div>
      `;
      break;

    case 'sub':
      html = `
        <div class="glass-card">
          <h3>${t('subs')}</h3>
          <div class="list-container">
            ${state.subjects.map(s => {
              const dep = state.departments.find(d => d.id == s.departmentId);
              return `
                <div class="list-item">
                  <div class="list-item-info">
                    <span class="list-item-title">${s.name}</span>
                    <span class="list-item-subtitle">${dep ? dep.name : t('error')}, ${s.type}</span>
                  </div>
                  <button class="btn-delete" onclick="removeEntity('subjects', ${s.id})">🗑️</button>
                </div>
              `;
            }).join('')}
          </div>
          <div class="form-container">
            <select id="new-sub-dep" class="select-field">
              <option value="">${t('department')}</option>
              ${state.departments.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
            </select>
            <div class="form-group-inline" style="flex-wrap: wrap;">
              <input type="text" id="new-sub-name" class="input-field" placeholder="${t('name')}">
              <div class="form-container" style="background: var(--sidebar-bg); padding: 5px 15px; border-radius: 10px;">
                <label><input type="checkbox" id="sub-type-m"> ${t('lecture')}</label>
                <label><input type="checkbox" id="sub-type-a"> ${t('practice')}</label>
                <label><input type="checkbox" id="sub-type-s"> ${t('seminar')}</label>
                <label><input type="checkbox" id="sub-type-l"> ${t('lab')}</label>
                <label style="color: var(--accent-color);"><input type="checkbox" id="sub-is-split"> ✂️ ${t('split')}</label>
              </div>
              <button onclick="addSubject()" class="btn-primary">➕</button>
            </div>
          </div>
        </div>
      `;
      break;

    case 'roo':
      html = `
        <div class="glass-card">
          <h3>${t('roos')}</h3>
          <div class="list-container">
            ${state.rooms.map(r => `
              <div class="list-item">
                <div class="list-item-info">
                  <span class="list-item-title">${r.name}</span>
                  <span class="list-item-subtitle">${r.type}, ${t('capacity')}: ${r.capacity}</span>
                </div>
                <button class="btn-delete" onclick="removeEntity('rooms', ${r.id})">🗑️</button>
              </div>
            `).join('')}
          </div>
          <div class="form-container grid-2">
            <input type="text" id="new-roo-name" class="input-field" placeholder="${t('name')}">
            <select id="new-roo-type" class="select-field">
              <option value="Ma'ruza">${t('lecture')}</option>
              <option value="Amaliyot">${t('practice')}</option>
              <option value="Laboratoriya">${t('lab')}</option>
              <option value="Seminar">${t('seminar')}</option>
            </select>
            <input type="number" id="new-roo-cap" class="input-field" placeholder="${t('capacity')}">
            <button onclick="addRoom()" class="btn-primary">${t('add')}</button>
          </div>
        </div>
      `;
      break;
    
    case 'tim':
      html = `
        <div class="glass-card">
          <h3>${t('tims')}</h3>
          <div class="list-container">
            ${state.timeSlots.map(t_obj => `
              <div class="list-item">
                <span>${t_obj.name}: ${t_obj.start} - ${t_obj.end}</span>
                <button class="btn-delete" onclick="removeEntity('timeSlots', ${t_obj.id})">🗑️</button>
              </div>
            `).join('')}
          </div>
          <div class="form-group-inline">
            <input type="text" id="new-tim-name" class="input-field" placeholder="${t('name')}">
            <input type="time" id="new-tim-start" class="input-field">
            <input type="time" id="new-tim-end" class="input-field">
            <button onclick="addTimeSlot()" class="btn-primary">➕</button>
          </div>
        </div>
      `;
      break;
  }
  container.innerHTML = html;
};

// --- Handlers ---
window.switchTab = (tabId) => {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.tab === tabId);
  });
  if (views[tabId]) views[tabId]();
  translateUI();
};

window.setEntryStep = (step) => {
  currentEntryStep = step;
  views['data-entry']();
};

window.saveUniName = () => {
  state.university = document.getElementById('uni-name-input').value;
  saveState();
  alert(t('success'));
};

window.addEntity = (key, data) => {
  if (!data.name) return;
  state[key].push({ id: Date.now(), ...data });
  saveState();
  renderStep();
};

window.removeEntity = (key, id) => {
  if (!confirm(t('confirm_del'))) return;
  // Use number comparison as Date.now() returns numbers
  state[key] = state[key].filter(i => Number(i.id) !== Number(id));
  saveState();
  if (['dashboard', 'schedules'].includes(document.querySelector('.nav-item.active').dataset.tab)) {
    views[document.querySelector('.nav-item.active').dataset.tab]();
  } else {
    renderStep();
  }
};

window.addDepartment = () => {
  const name = document.getElementById('new-dep-name').value;
  const facultyId = document.getElementById('new-dep-fac').value;
  if (!name || !facultyId) return;
  state.departments.push({ id: Date.now(), name, facultyId });
  saveState();
  renderStep();
};

window.addTeacher = () => {
  const name = document.getElementById('new-tea-name').value;
  const departmentId = document.getElementById('new-tea-dep').value;
  if (!name || !departmentId) return;
  state.teachers.push({ id: Date.now(), name, departmentId });
  saveState();
  renderStep();
};

window.addGroup = () => {
  const name = document.getElementById('new-gru-name').value;
  const facultyId = document.getElementById('new-gru-fac').value;
  const course = document.getElementById('new-gru-course').value;
  const type = document.getElementById('new-gru-type').value;
  const lang = document.getElementById('new-gru-lang').value;
  const students = document.getElementById('new-gru-students').value;
  if (!name || !facultyId || !students) return;
  state.groups.push({ id: Date.now(), name, facultyId, course, type, lang, students });
  saveState();
  renderStep();
};

window.addSubject = () => {
  const name = document.getElementById('new-sub-name').value;
  const departmentId = document.getElementById('new-sub-dep').value;
  const isM = document.getElementById('sub-type-m').checked;
  const isA = document.getElementById('sub-type-a').checked;
  const isS = document.getElementById('sub-type-s').checked;
  const isL = document.getElementById('sub-type-l').checked;
  const isSplit = document.getElementById('sub-is-split').checked;
  
  if (!name || !departmentId || (!isM && !isA && !isS && !isL)) return;
  
  const types = [];
  if (isM) types.push(t('lecture'));
  if (isA) types.push(t('practice'));
  if (isS) types.push(t('seminar'));
  if (isL) types.push(t('lab'));
  
  state.subjects.push({ id: Date.now(), name, departmentId, type: types.join(', '), isSplit, typesList: types });
  saveState();
  renderStep();
};

window.addRoom = () => {
  const name = document.getElementById('new-roo-name').value;
  const type = document.getElementById('new-roo-type').value;
  const capacity = document.getElementById('new-roo-cap').value;
  if (!name || !capacity) return;
  state.rooms.push({ id: Date.now(), name, type, capacity });
  saveState();
  renderStep();
};

window.addTimeSlot = () => {
  const name = document.getElementById('new-tim-name').value;
  const start = document.getElementById('new-tim-start').value;
  const end = document.getElementById('new-tim-end').value;
  if (!name || !start || !end) return;
  state.timeSlots.push({ id: Date.now(), name, start, end });
  saveState();
  renderStep();
};

window.updateHeatEntitySelector = () => {
  const type = document.getElementById('heat-type').value;
  const select = document.getElementById('heat-entity');
  if (!select) return;
  let options = '';
  if (type === 'room') {
    options = state.rooms.map(r => `<option value="${r.name}">${r.name}</option>`).join('');
  } else {
    options = state.teachers.map(t_obj => `<option value="${t_obj.name}">${t_obj.name}</option>`).join('');
  }
  select.innerHTML = options;
  renderHeatmap();
};

window.renderHeatmap = () => {
  const schedId = document.getElementById('heat-sched').value;
  const type = document.getElementById('heat-type').value;
  const entityName = document.getElementById('heat-entity').value;
  const container = document.getElementById('heatmap-container');
  if (!container) return;
  
  const sched = state.schedules.find(s => s.id == schedId);
  if (!sched || !entityName) {
    container.innerHTML = `<p>${t('empty')}</p>`;
    return;
  }

  const daysCount = parseInt(document.getElementById('gen-days')?.value || 6); // fallback
  const dayKeys = ['day_1', 'day_2', 'day_3', 'day_4', 'day_5', 'day_6'];
  const days = dayKeys.slice(0, 6).map(k => t(k));
  const slots = state.timeSlots;

  if (slots.length === 0) {
    container.innerHTML = `<p>${t('empty')}</p>`;
    return;
  }

  let html = `
    <table class="schedule-table">
      <thead>
        <tr>
          <th style="width: 150px;">${t('slot')}</th>
          ${days.map(d => `<th>${d}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${slots.map(slot => `
          <tr>
            <td style="font-weight: 600; background: rgba(255,255,255,0.02);">
              ${slot.name}<br/>
              <small style="color: var(--text-secondary);">${slot.start} - ${slot.end}</small>
            </td>
            ${days.map((day, dIdx) => {
              const dayKey = dayKeys[dIdx];
              const entry = sched.data.find(d => {
                // Determine if this entry's day string matches the target day in ANY language
                const isSameDay = (d.day === translations.uz[dayKey] || d.day === translations.ru[dayKey] || d.day === translations.en[dayKey]);
                return isSameDay && 
                       d.slot === slot.name && 
                       (type === 'room' ? d.room.includes(entityName) : d.teacher.includes(entityName));
              });
              if (entry) {
                return `
                  <td style="background: rgba(255, 71, 87, 0.15); color: #ff4757; border-left: 4px solid #ff4757;">
                    <div style="font-weight: 700; font-size: 0.8rem; margin-bottom: 2px;">${t('busy').toUpperCase()}</div>
                    <div style="font-size: 0.85rem; line-height: 1.2;">${entry.subject}</div>
                    <div style="font-size: 0.75rem; opacity: 0.8;">${entry.group}</div>
                  </td>
                `;
              } else {
                return `
                  <td style="background: rgba(46, 213, 115, 0.05); color: #2ed573; opacity: 0.6; text-align: center; vertical-align: middle; font-size: 0.8rem;">
                    ${t('free')}
                  </td>
                `;
              }
            }).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  container.innerHTML = html;
};

window.renderPersonalSchedule = () => {
  const schedId = document.getElementById('pers-sched')?.value;
  const teacherName = document.getElementById('pers-teacher')?.value;
  const container = document.getElementById('personal-container');
  if (!container) return;

  const sched = state.schedules.find(s => s.id == schedId);
  if (!sched || !teacherName) {
    container.innerHTML = `<p>${t('empty')}</p>`;
    return;
  }

  const teacherData = sched.data.filter(d => d.teacher.includes(teacherName));
  if (teacherData.length === 0) {
    container.innerHTML = `<p>${t('empty')}</p>`;
    return;
  }

  // Sort by day and slot index
  const dayKeys = ['day_1', 'day_2', 'day_3', 'day_4', 'day_5', 'day_6'];
  teacherData.sort((a, b) => {
    const getIdx = (dayStr) => dayKeys.findIndex(k => translations.uz[k] === dayStr || translations.ru[k] === dayStr || translations.en[k] === dayStr);
    const dayDiff = getIdx(a.day) - getIdx(b.day);
    if (dayDiff !== 0) return dayDiff;
    return a.slot.localeCompare(b.slot);
  });

  let html = `
    <div style="display: flex; justify-content: flex-end; gap: 10px; margin-bottom: 1.5rem;">
      <button onclick="exportTeacherSchedule('excel')" class="btn-small" style="background: #27ae60; color: white; border: none; padding: 8px 15px; border-radius: 6px;">📊 Excel</button>
      <button onclick="exportTeacherSchedule('pdf')" class="btn-small" style="background: #e74c3c; color: white; border: none; padding: 8px 15px; border-radius: 6px;">📄 PDF</button>
    </div>
    <div style="overflow-x: auto;">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>${t('day')}</th>
            <th>${t('slot')}</th>
            <th>${t('subject')}</th>
            <th>${t('group')}</th>
            <th>${t('room')}</th>
          </tr>
        </thead>
        <tbody>
          ${teacherData.map(d => `
            <tr>
              <td style="font-weight:600;">${d.day}</td>
              <td>${d.slot}<br/><small style="color: var(--text-secondary);">${d.time}</small></td>
              <td>${d.subject}</td>
              <td>${d.group}</td>
              <td>${d.room}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  container.innerHTML = html;
};

window.exportTeacherSchedule = (format) => {
  const schedId = document.getElementById('pers-sched').value;
  const teacherName = document.getElementById('pers-teacher').value;
  const sched = state.schedules.find(s => s.id == schedId);
  if (!sched) return;

  const teacherData = sched.data.filter(d => d.teacher.includes(teacherName));
  const filename = `${teacherName}_Jadval`.replace(/\s+/g, '_');

  if (format === 'excel') {
    const ws = XLSX.utils.json_to_sheet(teacherData.map(d => ({
      [t('day')]: d.day,
      [t('slot')]: d.slot,
      [t('time')]: d.time,
      [t('subject')]: d.subject,
      [t('group')]: d.group,
      [t('room')]: d.room
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Jadval");
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'base64' });
    const a = document.createElement('a'); a.style.display = 'none';
    a.href = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,' + wbout;
    a.download = `${filename}.xlsx`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  } else {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(`${teacherName} - ${t('personal_schedules')}`, 14, 15);
    doc.autoTable({
      startY: 20,
      head: [[t('day'), t('slot'), t('time'), t('subject'), t('group'), t('room')]],
      body: teacherData.map(d => [d.day, d.slot, d.time, d.subject, d.group, d.room])
    });
    doc.save(`${filename}.pdf`);
  }
};

window.toggleScheduleEdit = (idx) => {
  state.schedules[idx].editing = !state.schedules[idx].editing;
  views.schedules();
};

window.removeSchedule = (idx) => {
  // Use inline confirmation to avoid browser dialog blocking
  const btn = document.querySelector(`[data-remove-idx="${idx}"]`);
  if (btn && btn.dataset.confirmed === 'true') {
    state.schedules.splice(idx, 1);
    saveState();
    views.schedules();
  } else if (btn) {
    btn.dataset.confirmed = 'true';
    btn.textContent = '✅ Tasdiqlash';
    btn.style.background = '#e74c3c';
    btn.style.color = 'white';
    btn.style.padding = '4px 8px';
    btn.style.borderRadius = '6px';
    btn.style.border = 'none';
    setTimeout(() => {
      if (btn.dataset.confirmed) {
        btn.dataset.confirmed = '';
        btn.textContent = '🗑️';
        btn.style = '';
      }
    }, 3000);
  }
};

window.handleDragStart = (e, schedIdx, lessonIdx) => {
  e.dataTransfer.setData('text/plain', JSON.stringify({ schedIdx, lessonIdx }));
  e.currentTarget.classList.add('dragging');
};

window.handleDragOver = (e) => {
  e.preventDefault();
  const dz = e.currentTarget.closest('.drop-zone') || e.currentTarget;
  dz.classList.add('drag-over');
};

window.handleDrop = (e, targetSchedIdx, targetLessonIdx) => {
  e.preventDefault();
  document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
  
  const rawData = e.dataTransfer.getData('text/plain');
  if (!rawData) return;
  const data = JSON.parse(rawData);
  const { schedIdx, lessonIdx } = data;

  if (schedIdx !== targetSchedIdx || lessonIdx === targetLessonIdx) return;

  const sched = state.schedules[schedIdx];
  const lessonA = sched.data[lessonIdx];
  const lessonB = sched.data[targetLessonIdx];

  // SWAP coordinates
  const temp = { day: lessonA.day, slot: lessonA.slot, time: lessonA.time };
  
  // Potential Conflict check for A moving to B's slot
  const conflictA = sched.data.find((d, idx) => 
    idx !== lessonIdx && idx !== targetLessonIdx &&
    d.day === lessonB.day && d.slot === lessonB.slot &&
    (d.teacher === lessonA.teacher || d.room === lessonA.room || d.group === lessonA.group)
  );

  // Potential Conflict check for B moving to A's slot
  const conflictB = sched.data.find((d, idx) => 
    idx !== lessonIdx && idx !== targetLessonIdx &&
    d.day === temp.day && d.slot === temp.slot &&
    (d.teacher === lessonB.teacher || d.room === lessonB.room || d.group === lessonB.group)
  );

  if (conflictA || conflictB) {
    alert(t('error') + ": Conflict detected!");
    return;
  }

  lessonA.day = lessonB.day; lessonA.slot = lessonB.slot; lessonA.time = lessonB.time;
  lessonB.day = temp.day; lessonB.slot = temp.slot; lessonB.time = temp.time;

  saveState();
  views.schedules();
};

// --- GA Implementation (Simplified for Multi-lang) ---
window.runGeneticAlgorithm = () => {
  const statusDiv = document.getElementById('gen-status');
  statusDiv.innerHTML = `<div class="glass-card"><h4>${t('loading')}</h4></div>`;

  setTimeout(() => {
    const facId = document.getElementById('gen-fac').value;
    const daysCount = parseInt(document.getElementById('gen-days').value);
    const groups = facId === 'all' ? state.groups : state.groups.filter(g => g.facultyId == facId);
    
    if (groups.length === 0 || state.subjects.length === 0 || state.teachers.length === 0 || state.rooms.length === 0 || state.timeSlots.length === 0) {
      statusDiv.innerHTML = `<div class="glass-card"><p style="color: coral;">${t('error')}: Ma'lumot yetarli emas.</p></div>`;
      return;
    }

    const dayKeys = ['day_1', 'day_2', 'day_3', 'day_4', 'day_5', 'day_6'];
    const days = dayKeys.slice(0, daysCount).map(k => t(k));
    
    let scheduleData = [];
    let teacherBusy = {};
    let roomBusy = {};
    let groupBusy = {};

    groups.forEach(group => {
      days.forEach(day => {
        state.timeSlots.forEach(slot => {
          const subject = state.subjects[Math.floor(Math.random() * state.subjects.length)];
          const key = `${day}_${slot.id}`;
          
          // Randomly pick one of the subject's types
          const availableTypes = subject.typesList || subject.type.split(', ');
          const sessionType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
          const sessionLabel = `[${sessionType[0]}] ${subject.name}`; // Short prefix like [M] or [A]

          if (subject.isSplit && (sessionType === t('practice') || sessionType === t('lab') || sessionType === t('seminar'))) {
            const availableTeachers = state.teachers.filter(t_obj => !teacherBusy[`${t_obj.id}_${key}`]);
            const availableRooms = state.rooms.filter(r => parseInt(r.capacity) >= parseInt(group.students)/2 && !roomBusy[`${r.id}_${key}`]);

            if (availableTeachers.length >= 2 && availableRooms.length >= 2 && !groupBusy[`${group.id}_${key}`]) {
              const t1 = availableTeachers[0]; const t2 = availableTeachers[1];
              const r1 = availableRooms[0]; const r2 = availableRooms[1];
              scheduleData.push({ day, slot: slot.name, time: `${slot.start}-${slot.end}`, group: group.name, subject: `${sessionLabel} (${t('split')})`, teacher: `${t1.name}/${t2.name}`, room: `${r1.name}/${r2.name}` });
              teacherBusy[`${t1.id}_${key}`] = true; teacherBusy[`${t2.id}_${key}`] = true;
              roomBusy[`${r1.id}_${key}`] = true; roomBusy[`${r2.id}_${key}`] = true;
              groupBusy[`${group.id}_${key}`] = true;
            }
          } else {
            const tea = state.teachers.find(t_obj => !teacherBusy[`${t_obj.id}_${key}`]);
            const roo = state.rooms.find(r => parseInt(r.capacity) >= parseInt(group.students) && !roomBusy[`${r.id}_${key}`]);
            if (tea && roo && !groupBusy[`${group.id}_${key}`]) {
              scheduleData.push({ day, slot: slot.name, time: `${slot.start}-${slot.end}`, group: group.name, subject: sessionLabel, teacher: tea.name, room: roo.name });
              teacherBusy[`${tea.id}_${key}`] = true; roomBusy[`${roo.id}_${key}`] = true; groupBusy[`${group.id}_${key}`] = true;
            }
          }
        });
      });
    });

    state.schedules.push({ id: Date.now(), date: new Date().toLocaleString(), data: scheduleData });
    saveState();
    statusDiv.innerHTML = `<div class="glass-card" style="border-color: var(--success-color);"><h4>✅ ${t('success')}!</h4><button class="btn-primary" onclick="switchTab('schedules')" style="margin-top:1rem">${t('schedules')}</button></div>`;
  }, 1000);
};

// --- Export ---
const getTime = (d) => d.time || '';

window.exportToExcel = (idx) => {
  const s = state.schedules[idx];
  const worksheet = XLSX.utils.json_to_sheet(s.data.map(d => ({ [t('day')]: d.day, [t('slot')]: d.slot, [t('time')]: d.time, [t('group')]: d.group, [t('subject')]: d.subject, [t('teacher')]: d.teacher, [t('room')]: d.room })));
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Jadval");
  const base64 = XLSX.write(workbook, { bookType: 'xlsx', type: 'base64' });
  const a = document.createElement('a'); a.style.display = 'none';
  a.href = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,' + base64;
  a.download = `JadvalPro.xlsx`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
};

window.exportToPDF = (idx) => {
  const { jsPDF } = window.jspdf; const doc = new jsPDF(); const s = state.schedules[idx];
  doc.text(`JadvalPro - ${s.id}`, 14, 15);
  doc.autoTable({ startY: 20, head: [[t('day'), t('slot'), t('time'), t('group'), t('subject'), t('teacher'), t('room')]], body: s.data.map(d => [d.day, d.slot, d.time, d.group, d.subject, d.teacher, d.room]) });
  doc.save(`JadvalPro.pdf`);
};

// --- Init ---
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => switchTab(item.dataset.tab));
});

if (document.getElementById('lang-select')) {
  document.getElementById('lang-select').value = state.lang || 'uz';
}

translateUI();
switchTab('dashboard');

// --- Mobile Sidebar Toggle ---
window.toggleSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
};

window.closeSidebar = () => {
  document.querySelector('.sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
};

// Mobildan nav-item bosilganda sidebar avtomatik yopilsin
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 768) closeSidebar();
  });
});
