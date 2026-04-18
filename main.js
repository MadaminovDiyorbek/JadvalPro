// JadvalPro - Main Application Logic (To'liq tuzatilgan versiya)

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  uz: {
    dashboard: "Dashboard",
    'data-entry': "Ma'lumotlar kiritish",
    'view-data': "Ma'lumotlarni ko'rish",
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
    success: "Muvaffaqiyatli saqlandi",
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
    move_success: "Dars muvaffaqiyatli ko'chirildi",
    view_data: "Ma'lumotlarni ko'rish",
    data_entry: "Ma'lumotlar kiritish",
    all_facs: "Barcha fakultetlar",
    days_label: "kunlik",
    gen_info: "Jadval yaratish uchun avval barcha ma'lumotlarni kiriting",
    no_data_enough: "Ma'lumot yetarli emas. Guruh, fan, o'qituvchi, xona va para vaqtlarini kiriting.",
    schedule_saved: "Jadval muvaffaqiyatli yaratildi va saqlandi!",
    saved: "Saqlandi",
    confirm: "Tasdiqlash",
    cancel: "Bekor qilish",
    storage_full: "Xotira to'lib qoldi. Eski jadvallarni o'chirib qayta urinib ko'ring.",
    drag_diff_sched: "Faqat bitta jadval ichida ko'chirish mumkin",
    conflict_detected: "Ziddiyat aniqlandi! Ko'chirish bekor qilindi.",
    room_type_mismatch: "Xona turi fan turiga mos emas",
    gen_fallback_subjects: "Ayrim guruhlar uchun fakultet bo‘yicha fan topilmadi — barcha fanlar qo‘llanildi.",
    sched_unknown_faculty: "Boshqa / aniqlanmagan guruhlar",
    logout: "Chiqish"
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
    success: "Успешно сохранено",
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
    view_schedules: "Сохранённые расписания",
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
    move_success: "Урок успешно перемещён",
    view_data: "Просмотр данных",
    data_entry: "Ввод данных",
    all_facs: "Все факультеты",
    days_label: "дней",
    gen_info: "Для создания расписания сначала введите все данные",
    no_data_enough: "Недостаточно данных. Введите группы, предметы, учителей, аудитории и время пар.",
    schedule_saved: "Расписание успешно создано и сохранено!",
    saved: "Сохранено",
    confirm: "Подтвердить",
    cancel: "Отмена",
    storage_full: "Хранилище заполнено. Удалите старые расписания и попробуйте снова.",
    drag_diff_sched: "Можно перемещать только внутри одного расписания",
    conflict_detected: "Обнаружен конфликт! Перемещение отменено.",
    room_type_mismatch: "Тип аудитории не соответствует типу занятия",
    gen_fallback_subjects: "Для части групп не найдены предметы факультета — использованы все предметы.",
    sched_unknown_faculty: "Прочие / неизвестные группы",
    logout: "Выход"
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
    success: "Successfully saved",
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
    course_1: "1st year", course_2: "2nd year", course_3: "3rd year", course_4: "4th year",
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
    move_success: "Lesson moved successfully",
    view_data: "View Data",
    data_entry: "Data Entry",
    all_facs: "All faculties",
    days_label: "days",
    gen_info: "Enter all data before generating a schedule",
    no_data_enough: "Not enough data. Please add groups, subjects, teachers, rooms and time slots.",
    schedule_saved: "Schedule successfully created and saved!",
    saved: "Saved",
    confirm: "Confirm",
    cancel: "Cancel",
    storage_full: "Storage is full. Delete old schedules and try again.",
    drag_diff_sched: "Can only move lessons within the same schedule",
    conflict_detected: "Conflict detected! Move cancelled.",
    room_type_mismatch: "Room type does not match lesson type",
    gen_fallback_subjects: "No faculty-matched subjects for some groups — all subjects were used.",
    sched_unknown_faculty: "Other / unidentified groups",
    logout: "Log out"
  }
};

// ============================================
// STATE — translations dan OLDIN e'lon qilinadi
// ============================================
let state = (() => {
  try {
    return JSON.parse(localStorage.getItem('jadvalpro_state')) || defaultState();
  } catch {
    return defaultState();
  }
})();

function defaultState() {
  return {
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
}

// ============================================
// HELPERS
// ============================================
const t = (key) => (translations[state.lang] || translations.uz)[key] || key;

// Fan turlarini — tarjimadan mustaqil constant key orqali saqlash
const LESSON_TYPE_KEYS = {
  lecture: 'lecture',
  practice: 'practice',
  seminar: 'seminar',
  lab: 'lab'
};

// Xona turi bilan fan turi mosligini tekshirish
const ROOM_TYPE_MAP = {
  lecture: ['lecture'],
  practice: ['practice', 'seminar', 'lecture'],
  seminar: ['seminar', 'practice', 'lecture'],
  lab: ['lab']
};

/** Dars turlari — jadvalda qisqa belgi (tilga bog'liq emas) */
const SESSION_TYPE_MARK = { lecture: 'L', practice: 'P', seminar: 'S', lab: 'Lab' };

const TYPE_KEYS_ORDER = ['lecture', 'practice', 'seminar', 'lab'];

/** Guruh fakultetiga tegishli kafedralar idlari */
function departmentIdsForFaculty(facultyId) {
  return state.departments
    .filter(d => String(d.facultyId) === String(facultyId))
    .map(d => d.id);
}

/** Guruh uchun mos fanlar (kafedra orqali fakultetga bog'langan) */
function subjectsForGroup(group) {
  const deptIds = departmentIdsForFaculty(group.facultyId);
  if (!deptIds.length) return state.subjects;
  const set = new Set(deptIds.map(id => String(id)));
  return state.subjects.filter(s => set.has(String(s.departmentId)));
}

/** Fan bo'yicha o'qituvchilar: avval o'sha kafedra, keyin shu fakultetdagi boshqa kafedralar */
function teachersEligibleForSubject(subject) {
  const sid = subject.departmentId;
  const sameDept = state.teachers.filter(t => String(t.departmentId) === String(sid));
  if (sameDept.length) return sameDept;
  const dep = state.departments.find(d => String(d.id) === String(sid));
  if (!dep) return state.teachers;
  const facDeptIds = state.departments
    .filter(d => String(d.facultyId) === String(dep.facultyId))
    .map(d => d.id);
  const fromFac = state.teachers.filter(t =>
    facDeptIds.some(id => String(id) === String(t.departmentId))
  );
  return fromFac.length ? fromFac : state.teachers;
}

function orderedTypeKeysForSubject(subject) {
  const keys = subject.typeKeys && subject.typeKeys.length ? subject.typeKeys : ['lecture'];
  return TYPE_KEYS_ORDER.filter(k => keys.includes(k));
}

function sortTimeSlotsChronological(slots) {
  return [...slots].sort((a, b) => String(a.start).localeCompare(String(b.start)));
}

/** Til tartibi: O'zbek → Rus → Ingliz */
const LANG_ORDER = { uz: 0, ru: 1, en: 2 };

function langSortOrder(lang) {
  return LANG_ORDER[lang] ?? 50;
}

/** Jadvaldagi guruh nomlari: kurs (1–4), keyin til */
function sortGroupNamesForDisplay(names) {
  return [...names].sort((a, b) => {
    const ga = state.groups.find(g => g.name === a);
    const gb = state.groups.find(g => g.name === b);
    const ca = ga ? parseInt(ga.course, 10) : 99;
    const cb = gb ? parseInt(gb.course, 10) : 99;
    if (ca !== cb) return ca - cb;
    const la = ga ? langSortOrder(ga.lang) : 99;
    const lb = gb ? langSortOrder(gb.lang) : 99;
    if (la !== lb) return la - lb;
    return String(a).localeCompare(String(b), undefined, { sensitivity: 'base' });
  });
}

/** Fakultetlar: nom bo'yicha, "noma'lum" oxirida */
function scheduleFacultySections(groupNames) {
  const ids = new Set();
  for (const n of groupNames) {
    const g = state.groups.find(x => x.name === n);
    ids.add(g ? String(g.facultyId) : '_unknown');
  }
  const ordered = [...ids].sort((a, b) => {
    if (a === '_unknown') return 1;
    if (b === '_unknown') return -1;
    const fa = state.faculties.find(f => String(f.id) === a);
    const fb = state.faculties.find(f => String(f.id) === b);
    return (fa?.name || '').localeCompare(fb?.name || '', undefined, { sensitivity: 'base' });
  });
  return ordered.map(fid => {
    const namesInFac = groupNames.filter(n => {
      const g = state.groups.find(x => x.name === n);
      if (fid === '_unknown') return !g;
      if (!g) return false;
      return String(g.facultyId) === fid;
    });
    const facultyName =
      fid === '_unknown'
        ? t('sched_unknown_faculty')
        : escapeHtml(state.faculties.find(f => String(f.id) === fid)?.name || t('faculty'));
    return {
      facultyKey: fid,
      facultyName,
      groupNames: sortGroupNamesForDisplay(namesInFac)
    };
  });
}

function dayIndexForSort(dayStr) {
  const dayKeys = ['day_1', 'day_2', 'day_3', 'day_4', 'day_5', 'day_6'];
  const idx = dayKeys.findIndex(
    (k) =>
      translations.uz[k] === dayStr ||
      translations.ru[k] === dayStr ||
      translations.en[k] === dayStr
  );
  return idx === -1 ? 99 : idx;
}

function sortLessonsForGroupExport(lessons) {
  return [...lessons].sort((a, b) => {
    const da = dayIndexForSort(a.day);
    const db = dayIndexForSort(b.day);
    if (da !== db) return da - db;
    return String(a.slot).localeCompare(String(b.slot), undefined, { numeric: true });
  });
}

function facultyPlainNameForExport(fid) {
  if (fid === '_unknown') return t('sched_unknown_faculty');
  return state.faculties.find((f) => String(f.id) === String(fid))?.name || t('faculty');
}

/**
 * Veb sahifadagi kabi: fakultet → guruhlar (tartiblangan) → har biri uchun
 * faqat KUN / PARA / FAN / O'QITUVCHI / XONA; kun birinchi parada.
 */
function buildScheduleExportBlocks(scheduleData) {
  const grouped = scheduleData.reduce((acc, curr) => {
    if (!acc[curr.group]) acc[curr.group] = [];
    acc[curr.group].push(curr);
    return acc;
  }, {});
  const sections = scheduleFacultySections(Object.keys(grouped));
  return sections.map((sec) => ({
    facultyName: facultyPlainNameForExport(sec.facultyKey),
    groups: sec.groupNames.map((gname) => {
      const lessons = sortLessonsForGroupExport(grouped[gname]);
      const gMeta = state.groups.find((g) => g.name === gname);
      const subTitle = gMeta ? `${t('course_' + gMeta.course)} · ${t('lang_' + gMeta.lang)}` : '';
      let lastDay = '';
      const displayRows = lessons.map((d) => {
        const showDay = d.day !== lastDay;
        lastDay = d.day;
        return {
          dayDisplay: showDay ? d.day : '',
          slotLine: `${d.slot}\n${d.time}`,
          subject: d.subject,
          teacher: d.teacher,
          room: d.room
        };
      });
      return { groupName: gname, subTitle, displayRows };
    })
  }));
}


// Toast notification — alert() va confirm() o'rniga
function showToast(message, type = 'success', duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✅', error: '❌', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || '✅'}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Inline confirm dialog (confirm() o'rniga)
function showInlineConfirm(btn, onConfirm) {
  if (btn.dataset.confirmed === 'true') {
    onConfirm();
    btn.dataset.confirmed = '';
    return;
  }
  const original = btn.innerHTML;
  const originalStyle = btn.getAttribute('style') || '';
  btn.dataset.confirmed = 'true';
  btn.innerHTML = `✅ ${t('confirm')}`;
  btn.style.cssText = 'background:#e74c3c;color:white;padding:4px 8px;border-radius:6px;border:none;cursor:pointer;';

  const timeout = setTimeout(() => {
    btn.dataset.confirmed = '';
    btn.innerHTML = original;
    btn.setAttribute('style', originalStyle);
  }, 3000);

  btn.dataset.timeoutId = timeout;
}

function saveState() {
  try {
    localStorage.setItem('jadvalpro_state', JSON.stringify(state));
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      showToast(t('storage_full'), 'error', 5000);
    }
  }
  translateUI();
}

function render(html) {
  TAB_CONTENT.innerHTML = `<div class="fade-in">${html}</div>`;
}

function translateUI() {
  document.querySelectorAll('.nav-item').forEach(item => {
    const key = item.dataset.tab;
    if (key) {
      const span = item.querySelector('span:last-child');
      if (span) span.textContent = t(key);
    }
  });
  const uniEl = document.getElementById('display-uni-name');
  if (uniEl) uniEl.textContent = state.university;
  const activeTab = document.querySelector('.nav-item.active');
  if (activeTab && PAGE_TITLE) PAGE_TITLE.textContent = t(activeTab.dataset.tab);
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) logoutBtn.textContent = t('logout');
}

// ============================================
// DOM REFERENCES
// ============================================
const TAB_CONTENT = document.getElementById('tab-content');
const PAGE_TITLE = document.getElementById('page-title');

let currentEntryStep = 'uni';

// ============================================
// VIEWS
// ============================================
const views = {
  dashboard: () => {
    PAGE_TITLE.textContent = t('dashboard');
    render(`
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
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">${t('welcome_text')}</p>
        <button class="btn-primary" onclick="switchTab('data-entry')">✨ ${t('data_entry')}</button>
      </div>
    `);
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
    render(`
      <div class="wizard-nav">
        ${steps.map(s => `
          <div class="wizard-step ${currentEntryStep === s.id ? 'active' : ''}" onclick="window.setEntryStep('${s.id}')">
            <span>${s.icon}</span><span>${s.label}</span>
          </div>
        `).join('')}
      </div>
      <div id="wizard-content" class="fade-in"></div>
    `);
    renderStep();
  },

  'view-data': () => {
    PAGE_TITLE.textContent = t('view_data');
    const dataKeys = [
      { key: 'faculties',   label: t('facs') },
      { key: 'departments', label: t('deps') },
      { key: 'teachers',    label: t('teas') },
      { key: 'groups',      label: t('grus') },
      { key: 'subjects',    label: t('subs') },
      { key: 'rooms',       label: t('roos') },
      { key: 'timeSlots',   label: t('tims') },
    ];
    render(`
      <div class="glass-card">
        <h3 style="margin-bottom: 0.5rem;">${t('view_data')}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${t('uni')}: <strong>${state.university}</strong></p>
        <div class="stats-grid" style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));">
          ${dataKeys.map(({ key, label }) => `
            <div class="glass-card" style="padding: 1rem; border-color: rgba(255,255,255,0.05); cursor: default;">
              <span style="display:block; font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px;">${label}</span>
              <span style="font-size: 1.8rem; font-weight: 700; color: var(--accent-color);">${state[key].length}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `);
  },

  generate: () => {
    PAGE_TITLE.textContent = t('generate');
    render(`
      <div class="glass-card">
        <h3 style="margin-bottom: 0.5rem;">${t('gen_schedule')}</h3>
        <p style="color: var(--text-secondary); margin-bottom: 2rem;">${t('gen_info')}</p>
        <div class="form-container grid-2">
          <div class="form-group">
            <label>${t('faculty')}</label>
            <select id="gen-fac" class="select-field">
              <option value="all">${t('all_facs')}</option>
              ${state.faculties.map(f => `<option value="${f.id}">${f.name}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>${t('day_count')}</label>
            <select id="gen-days" class="select-field">
              <option value="5">5 ${t('days_label')}</option>
              <option value="6">6 ${t('days_label')}</option>
            </select>
          </div>
        </div>
        <button onclick="runScheduleAlgorithm()" class="btn-primary" style="margin-top: 2rem; width: 100%; justify-content: center; height: 50px; font-size: 1.1rem;">
          ⚡ ${t('gen_btn')}
        </button>
      </div>
      <div id="gen-status" style="margin-top: 2rem;"></div>
    `);
  },

  schedules: () => {
    PAGE_TITLE.textContent = t('schedules');
    if (state.schedules.length === 0) {
      render(`<div class="glass-card"><p style="color: var(--text-secondary);">${t('empty')}</p></div>`);
      return;
    }
    render(`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${state.schedules.map((s, idx) => {
          const groupedByGroup = s.data.reduce((acc, curr) => {
            if (!acc[curr.group]) acc[curr.group] = [];
            acc[curr.group].push(curr);
            return acc;
          }, {});

          return `
          <div class="glass-card" style="border-color: rgba(0, 242, 254, 0.2);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; flex-wrap: wrap; gap: 10px;">
              <div>
                <h4 style="color: var(--accent-color);">📅 ${t('schedules')} #${idx + 1}</h4>
                <small style="color: var(--text-secondary);">${s.date}</small>
              </div>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                <button onclick="toggleScheduleEdit(${idx})" class="btn-small" style="background: ${s.editing ? 'var(--accent-color)' : 'transparent'}; border: 1px solid var(--accent-color); color: ${s.editing ? 'black' : 'var(--accent-color)'};" title="${t('edit_mode')}">✏️</button>
                <button onclick="exportToExcel(${idx})" class="btn-small" title="Excel">📊</button>
                <button onclick="exportToPDF(${idx})" class="btn-small" title="PDF">📄</button>
                <button onclick="removeSchedule(${idx})" data-remove-idx="${idx}" class="btn-delete" title="${t('delete')}">🗑️</button>
              </div>
            </div>
            ${scheduleFacultySections(Object.keys(groupedByGroup)).map((section) => `
              <div class="schedule-faculty-block">
                <div class="schedule-faculty-title">🏛️ ${section.facultyName}</div>
                ${section.groupNames.map((groupName) => {
                  let lastDay = '';
                  const gMeta = state.groups.find((g) => g.name === groupName);
                  const subLine = gMeta
                    ? `${t('course_' + gMeta.course)} · ${t('lang_' + gMeta.lang)}`
                    : '';
                  return `
                <div class="schedule-group-block" style="margin-bottom: 2rem;">
                  <h5 style="background: rgba(255,255,255,0.04); padding: 8px 15px; border-radius: 8px; color: var(--accent-color); display: inline-block; margin-bottom: 0.35rem;">
                    👥 ${t('group')}: ${escapeHtml(groupName)}
                  </h5>
                  ${subLine ? `<p style="font-size:0.82rem;color:var(--text-secondary);margin-bottom:0.85rem;">${subLine}</p>` : ''}
                  <div style="overflow-x: auto;">
                    <table class="schedule-table ${s.editing ? 'edit-mode' : ''}">
                      <thead>
                        <tr>
                          <th style="min-width:100px;">${t('day')}</th>
                          <th style="min-width:120px;">${t('slot')}</th>
                          <th>${t('subject')}</th>
                          <th>${t('teacher')}</th>
                          <th>${t('room')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${groupedByGroup[groupName].map((d) => {
                          const showDay = d.day !== lastDay;
                          lastDay = d.day;
                          const lessonIndex = s.data.indexOf(d);
                          return `
                          <tr
                            style="${showDay ? 'border-top: 2px solid var(--border-color);' : ''}"
                            class="${s.editing ? 'draggable-row' : ''}"
                            ${s.editing ? `draggable="true" ondragstart="handleDragStart(event, ${idx}, ${lessonIndex})"` : ''}
                          >
                            <td style="font-weight: 600; color: ${showDay ? 'var(--text-primary)' : 'transparent'}; user-select: none;">${d.day}</td>
                            <td class="${s.editing ? 'drop-zone' : ''}"
                              ${s.editing ? `ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" ondrop="handleDrop(event, ${idx}, ${lessonIndex})"` : ''}>
                              ${d.slot}<br/>
                              <small style="color: var(--text-secondary);">${d.time}</small>
                            </td>
                            <td>${d.subject}</td>
                            <td>${d.teacher}</td>
                            <td>${d.room}</td>
                          </tr>`;
                        }).join('')}
                      </tbody>
                    </table>
                  </div>
                </div>`;
                }).join('')}
              </div>`).join('')}
          </div>`;
        }).join('')}
      </div>
    `);
  },

  heatmap: () => {
    PAGE_TITLE.textContent = t('heatmap');
    if (state.schedules.length === 0) {
      render(`<div class="glass-card"><p style="color: var(--text-secondary);">${t('empty')}</p></div>`);
      return;
    }
    render(`
      <div class="glass-card">
        <h3 style="margin-bottom: 1.5rem;">${t('heatmap')}</h3>
        <div class="form-container grid-3" style="margin-bottom: 2rem;">
          <div class="form-group">
            <label>${t('select_schedule')}</label>
            <select id="heat-sched" class="select-field" onchange="renderHeatmap()">
              ${[...state.schedules].reverse().map((s, i) => `<option value="${s.id}">${t('schedules')} #${state.schedules.length - i} (${s.date})</option>`).join('')}
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
            <select id="heat-entity" class="select-field" onchange="renderHeatmap()"></select>
          </div>
        </div>
        <div id="heatmap-container" style="overflow-x: auto;"></div>
      </div>
    `);
    updateHeatEntitySelector();
  },

  'personal-schedules': () => {
    PAGE_TITLE.textContent = t('personal_schedules');
    if (state.schedules.length === 0) {
      render(`<div class="glass-card"><p style="color: var(--text-secondary);">${t('empty')}</p></div>`);
      return;
    }
    render(`
      <div class="glass-card">
        <h3 style="margin-bottom: 1.5rem;">${t('personal_schedules')}</h3>
        <div class="form-container grid-2" style="margin-bottom: 2rem;">
          <div class="form-group">
            <label>${t('select_schedule')}</label>
            <select id="pers-sched" class="select-field" onchange="renderPersonalSchedule()">
              ${[...state.schedules].reverse().map((s, i) => `<option value="${s.id}">${t('schedules')} #${state.schedules.length - i} (${s.date})</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>${t('teacher')}</label>
            <select id="pers-teacher" class="select-field" onchange="renderPersonalSchedule()">
              ${state.teachers.map(t_obj => `<option value="${t_obj.name}">${t_obj.name}</option>`).join('')}
            </select>
          </div>
        </div>
        <div id="personal-container"></div>
      </div>
    `);
    renderPersonalSchedule();
  }
};

// ============================================
// WIZARD STEP RENDERERS
// ============================================
const renderStep = () => {
  const container = document.getElementById('wizard-content');
  if (!container) return;
  let html = '';

  switch (currentEntryStep) {
    case 'uni':
      html = `
        <div class="glass-card">
          <h3 style="margin-bottom: 1.5rem;">${t('uni')} ${t('name')}</h3>
          <div class="form-container">
            <input type="text" id="uni-name-input" class="input-field" value="${escapeHtml(state.university)}" placeholder="${t('uni')} ${t('name')}">
            <button onclick="saveUniName()" class="btn-primary">💾 ${t('save')}</button>
          </div>
        </div>`;
      break;

    case 'fac':
      html = `
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem;">${t('facs')}</h3>
          <div class="list-container">
            ${state.faculties.length === 0
              ? `<p style="color: var(--text-secondary);">${t('empty')}</p>`
              : state.faculties.map(f => `
                <div class="list-item">
                  <span class="list-item-title">${escapeHtml(f.name)}</span>
                  <button class="btn-delete" onclick="removeEntity('faculties', ${f.id})">🗑️</button>
                </div>`).join('')}
          </div>
          <div class="form-group-inline" style="margin-top: 12px;">
            <input type="text" id="new-fac-name" class="input-field" placeholder="${t('faculty')} ${t('name')}" onkeydown="if(event.key==='Enter') addEntity('faculties', {name: document.getElementById('new-fac-name').value})">
            <button onclick="addEntity('faculties', {name: document.getElementById('new-fac-name').value})" class="btn-small">➕</button>
          </div>
        </div>`;
      break;

    case 'dep':
      html = `
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem;">${t('deps')}</h3>
          <div class="list-container">
            ${state.departments.length === 0
              ? `<p style="color: var(--text-secondary);">${t('empty')}</p>`
              : state.departments.map(d => {
                  const fac = state.faculties.find(f => f.id == d.facultyId);
                  return `
                    <div class="list-item">
                      <div class="list-item-info">
                        <span class="list-item-title">${escapeHtml(d.name)}</span>
                        <span class="list-item-subtitle">${fac ? escapeHtml(fac.name) : t('error')}</span>
                      </div>
                      <button class="btn-delete" onclick="removeEntity('departments', ${d.id})">🗑️</button>
                    </div>`;
                }).join('')}
          </div>
          <div class="form-container" style="margin-top: 12px;">
            <select id="new-dep-fac" class="select-field">
              <option value="">${t('faculty')}</option>
              ${state.faculties.map(f => `<option value="${f.id}">${escapeHtml(f.name)}</option>`).join('')}
            </select>
            <div class="form-group-inline">
              <input type="text" id="new-dep-name" class="input-field" placeholder="${t('department')} ${t('name')}">
              <button onclick="addDepartment()" class="btn-small">➕</button>
            </div>
          </div>
        </div>`;
      break;

    case 'tea':
      html = `
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem;">${t('teas')}</h3>
          <div class="list-container">
            ${state.teachers.length === 0
              ? `<p style="color: var(--text-secondary);">${t('empty')}</p>`
              : state.teachers.map(t_obj => {
                  const dep = state.departments.find(d => d.id == t_obj.departmentId);
                  return `
                    <div class="list-item">
                      <div class="list-item-info">
                        <span class="list-item-title">${escapeHtml(t_obj.name)}</span>
                        <span class="list-item-subtitle">${dep ? escapeHtml(dep.name) : t('error')}</span>
                      </div>
                      <button class="btn-delete" onclick="removeEntity('teachers', ${t_obj.id})">🗑️</button>
                    </div>`;
                }).join('')}
          </div>
          <div class="form-container" style="margin-top: 12px;">
            <select id="new-tea-dep" class="select-field">
              <option value="">${t('department')}</option>
              ${state.departments.map(d => `<option value="${d.id}">${escapeHtml(d.name)}</option>`).join('')}
            </select>
            <div class="form-group-inline">
              <input type="text" id="new-tea-name" class="input-field" placeholder="${t('name')}">
              <button onclick="addTeacher()" class="btn-small">➕</button>
            </div>
          </div>
        </div>`;
      break;

    case 'gru':
      html = `
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem;">${t('grus')}</h3>
          <div class="list-container">
            ${state.groups.length === 0
              ? `<p style="color: var(--text-secondary);">${t('empty')}</p>`
              : state.groups.map(g => `
                <div class="list-item">
                  <div class="list-item-info">
                    <span class="list-item-title">${escapeHtml(g.name)}</span>
                    <span class="list-item-subtitle">${g.course}-${t('course')}, ${g.lang}, ${g.students} ${t('students').toLowerCase()}</span>
                  </div>
                  <button class="btn-delete" onclick="removeEntity('groups', ${g.id})">🗑️</button>
                </div>`).join('')}
          </div>
          <div class="form-container grid-2" style="margin-top: 12px;">
            <input type="text" id="new-gru-name" class="input-field" placeholder="${t('group')} ${t('name')}">
            <select id="new-gru-fac" class="select-field">
              <option value="">${t('faculty')}</option>
              ${state.faculties.map(f => `<option value="${f.id}">${escapeHtml(f.name)}</option>`).join('')}
            </select>
            <select id="new-gru-course" class="select-field">
              <option value="1">1-${t('course')}</option>
              <option value="2">2-${t('course')}</option>
              <option value="3">3-${t('course')}</option>
              <option value="4">4-${t('course')}</option>
            </select>
            <select id="new-gru-type" class="select-field">
              <option value="day">${t('type_day')}</option>
              <option value="ext">${t('type_ext')}</option>
            </select>
            <select id="new-gru-lang" class="select-field">
              <option value="uz">${t('lang_uz')}</option>
              <option value="ru">${t('lang_ru')}</option>
              <option value="en">${t('lang_en')}</option>
            </select>
            <input type="number" id="new-gru-students" class="input-field" placeholder="${t('students')}" min="1" max="500">
            <button onclick="addGroup()" class="btn-primary">➕ ${t('add')}</button>
          </div>
        </div>`;
      break;

    case 'sub':
      html = `
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem;">${t('subs')}</h3>
          <div class="list-container">
            ${state.subjects.length === 0
              ? `<p style="color: var(--text-secondary);">${t('empty')}</p>`
              : state.subjects.map(s => {
                  const dep = state.departments.find(d => d.id == s.departmentId);
                  const typeLabels = (s.typeKeys || []).map(k => t(k)).join(', ');
                  return `
                    <div class="list-item">
                      <div class="list-item-info">
                        <span class="list-item-title">${escapeHtml(s.name)}</span>
                        <span class="list-item-subtitle">${dep ? escapeHtml(dep.name) : t('error')} · ${typeLabels}${s.isSplit ? ' ✂️' : ''}</span>
                      </div>
                      <button class="btn-delete" onclick="removeEntity('subjects', ${s.id})">🗑️</button>
                    </div>`;
                }).join('')}
          </div>
          <div class="form-container" style="margin-top: 12px;">
            <select id="new-sub-dep" class="select-field">
              <option value="">${t('department')}</option>
              ${state.departments.map(d => `<option value="${d.id}">${escapeHtml(d.name)}</option>`).join('')}
            </select>
            <input type="text" id="new-sub-name" class="input-field" placeholder="${t('name')}">
            <div style="background: var(--sidebar-bg); padding: 12px 16px; border-radius: 10px; display: flex; flex-wrap: wrap; gap: 12px;">
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="sub-type-lecture"> ${t('lecture')}</label>
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="sub-type-practice"> ${t('practice')}</label>
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="sub-type-seminar"> ${t('seminar')}</label>
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;"><input type="checkbox" id="sub-type-lab"> ${t('lab')}</label>
              <label style="display:flex;align-items:center;gap:6px;cursor:pointer;color:var(--accent-color);"><input type="checkbox" id="sub-is-split"> ✂️ ${t('split')}</label>
            </div>
            <button onclick="addSubject()" class="btn-primary">➕ ${t('add')}</button>
          </div>
        </div>`;
      break;

    case 'roo':
      html = `
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem;">${t('roos')}</h3>
          <div class="list-container">
            ${state.rooms.length === 0
              ? `<p style="color: var(--text-secondary);">${t('empty')}</p>`
              : state.rooms.map(r => `
                <div class="list-item">
                  <div class="list-item-info">
                    <span class="list-item-title">${escapeHtml(r.name)}</span>
                    <span class="list-item-subtitle">${t(r.typeKey || 'lecture')} · ${t('capacity')}: ${r.capacity}</span>
                  </div>
                  <button class="btn-delete" onclick="removeEntity('rooms', ${r.id})">🗑️</button>
                </div>`).join('')}
          </div>
          <div class="form-container grid-2" style="margin-top: 12px;">
            <input type="text" id="new-roo-name" class="input-field" placeholder="${t('name')}">
            <select id="new-roo-type" class="select-field">
              <option value="lecture">${t('lecture')}</option>
              <option value="practice">${t('practice')}</option>
              <option value="lab">${t('lab')}</option>
              <option value="seminar">${t('seminar')}</option>
            </select>
            <input type="number" id="new-roo-cap" class="input-field" placeholder="${t('capacity')}" min="1">
            <button onclick="addRoom()" class="btn-primary">➕ ${t('add')}</button>
          </div>
        </div>`;
      break;

    case 'tim':
      html = `
        <div class="glass-card">
          <h3 style="margin-bottom: 1rem;">${t('tims')}</h3>
          <div class="list-container">
            ${state.timeSlots.length === 0
              ? `<p style="color: var(--text-secondary);">${t('empty')}</p>`
              : state.timeSlots.map(ts => `
                <div class="list-item">
                  <span>${escapeHtml(ts.name)}: ${ts.start} – ${ts.end}</span>
                  <button class="btn-delete" onclick="removeEntity('timeSlots', ${ts.id})">🗑️</button>
                </div>`).join('')}
          </div>
          <div class="form-group-inline" style="margin-top: 12px; flex-wrap: wrap; gap: 8px;">
            <input type="text" id="new-tim-name" class="input-field" placeholder="${t('name')}" style="min-width: 80px;">
            <input type="time" id="new-tim-start" class="input-field" style="min-width: 110px;">
            <input type="time" id="new-tim-end" class="input-field" style="min-width: 110px;">
            <button onclick="addTimeSlot()" class="btn-primary">➕</button>
          </div>
        </div>`;
      break;
  }
  container.innerHTML = html;
};

// ============================================
// SCHEDULE GENERATION ALGORITHM
// Backtracking + Constraint Satisfaction (greedy with conflict prevention)
// ============================================
window.runScheduleAlgorithm = () => {
  const statusDiv = document.getElementById('gen-status');
  const facId = document.getElementById('gen-fac').value;
  const daysCount = parseInt(document.getElementById('gen-days').value);

  const groups = facId === 'all' ? state.groups : state.groups.filter(g => g.facultyId == facId);

  if (!groups.length || !state.subjects.length || !state.teachers.length || !state.rooms.length || !state.timeSlots.length) {
    showToast(t('no_data_enough'), 'error', 5000);
    statusDiv.innerHTML = `<div class="glass-card"><p style="color: var(--danger-color);">${t('no_data_enough')}</p></div>`;
    return;
  }

  statusDiv.innerHTML = `
    <div class="glass-card">
      <h4 style="margin-bottom: 1rem;">⚡ ${t('loading')}</h4>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" id="gen-progress" style="width: 0%"></div></div>
    </div>`;

  // Run asynchronously so UI updates
  setTimeout(() => {
    const dayKeys = ['day_1', 'day_2', 'day_3', 'day_4', 'day_5', 'day_6'];
    const days = dayKeys.slice(0, daysCount).map(k => t(k));
    const sortedSlots = sortTimeSlotsChronological(state.timeSlots);

    let scheduleData = [];
    const teacherBusy = {};
    const roomBusy = {};
    const groupBusy = {};
    /** Guruh–fan bo'yicha necha para qo'yilgani (adolatli tarqatish) */
    const groupSubjectLoad = {};

    const shuffle = (arr) => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    let usedFallbackSubjects = false;
    const totalSteps = groups.length * days.length * sortedSlots.length;
    let step = 0;
    const progressEl = document.getElementById('gen-progress');

    const tryPlaceLesson = (group, day, slot, subject, typeKey) => {
      const key = `${day}_${slot.id}`;
      const mark = SESSION_TYPE_MARK[typeKey] || typeKey.charAt(0).toUpperCase();
      const sessionLabel = `[${mark}] ${subject.name}`;
      const compatibleRoomTypes = ROOM_TYPE_MAP[typeKey] || [typeKey];

      const roomOk = (r, minCap) =>
        !roomBusy[`${r.id}_${key}`] &&
        parseInt(r.capacity, 10) >= minCap &&
        compatibleRoomTypes.includes(r.typeKey || 'lecture');

      const pool = teachersEligibleForSubject(subject);

      if (subject.isSplit && (typeKey === 'practice' || typeKey === 'lab' || typeKey === 'seminar')) {
        const halfStudents = Math.ceil(parseInt(group.students, 10) / 2);
        const splitRooms = state.rooms.filter(r => roomOk(r, halfStudents));
        const freeTeachers = pool.filter(t => !teacherBusy[`${t.id}_${key}`]);

        if (freeTeachers.length >= 2 && splitRooms.length >= 2) {
          const [t1, t2] = shuffle(freeTeachers).slice(0, 2);
          const [r1, r2] = shuffle(splitRooms).slice(0, 2);
          scheduleData.push({
            day,
            slot: slot.name,
            time: `${slot.start}–${slot.end}`,
            group: group.name,
            subject: `${sessionLabel} (${t('split')})`,
            teacher: `${t1.name} / ${t2.name}`,
            room: `${r1.name} / ${r2.name}`,
            typeKey
          });
          teacherBusy[`${t1.id}_${key}`] = true;
          teacherBusy[`${t2.id}_${key}`] = true;
          roomBusy[`${r1.id}_${key}`] = true;
          roomBusy[`${r2.id}_${key}`] = true;
          groupBusy[`${group.id}_${key}`] = true;
          return true;
        }
        /* Split shartlari bajarilmasa — bitta xona / bitta o'qituvchi (to'liq guruh) */
      }

      const availableRooms = state.rooms.filter(r =>
        roomOk(r, parseInt(group.students, 10))
      );
      const freeTeachers = pool.filter(t => !teacherBusy[`${t.id}_${key}`]);

      if (freeTeachers.length && availableRooms.length) {
        const tea = shuffle(freeTeachers)[0];
        const roo = shuffle(availableRooms)[0];
        scheduleData.push({
          day,
          slot: slot.name,
          time: `${slot.start}–${slot.end}`,
          group: group.name,
          subject: sessionLabel,
          teacher: tea.name,
          room: roo.name,
          typeKey
        });
        teacherBusy[`${tea.id}_${key}`] = true;
        roomBusy[`${roo.id}_${key}`] = true;
        groupBusy[`${group.id}_${key}`] = true;
        return true;
      }
      return false;
    };

    for (const group of groups) {
      let pool = subjectsForGroup(group);
      if (!pool.length) {
        pool = state.subjects;
        usedFallbackSubjects = true;
      }

      for (const day of days) {
        for (const slot of sortedSlots) {
          step++;
          if (progressEl) progressEl.style.width = `${Math.round((step / totalSteps) * 100)}%`;

          const slotKey = `${day}_${slot.id}`;
          if (groupBusy[`${group.id}_${slotKey}`]) continue;

          const loadKey = (sid) => `${group.id}_${sid}`;
          const orderedSubjects = shuffle(pool).sort((a, b) => {
            const ca = groupSubjectLoad[loadKey(a.id)] || 0;
            const cb = groupSubjectLoad[loadKey(b.id)] || 0;
            if (ca !== cb) return ca - cb;
            return a.id - b.id;
          });

          let placed = false;

          for (const subject of orderedSubjects) {
            if (placed) break;
            const typeKeys = orderedTypeKeysForSubject(subject);
            for (const typeKey of typeKeys) {
              if (tryPlaceLesson(group, day, slot, subject, typeKey)) {
                groupSubjectLoad[loadKey(subject.id)] = (groupSubjectLoad[loadKey(subject.id)] || 0) + 1;
                placed = true;
                break;
              }
            }
          }
        }
      }
    }

    if (usedFallbackSubjects) {
      showToast(t('gen_fallback_subjects'), 'warning', 4000);
    }

    state.schedules.push({
      id: Date.now(),
      date: new Date().toLocaleString(),
      data: scheduleData,
      editing: false
    });
    saveState();

    statusDiv.innerHTML = `
      <div class="glass-card" style="border-color: var(--success-color);">
        <h4 style="color: var(--success-color); margin-bottom: 1rem;">✅ ${t('schedule_saved')}</h4>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${t('schedules')}: ${scheduleData.length} ta dars joylashtirildi.</p>
        <button class="btn-primary" onclick="switchTab('schedules')">📅 ${t('view_schedules')}</button>
      </div>`;
    showToast(t('schedule_saved'), 'success');
  }, 100);
};

// ============================================
// ENTITY HANDLERS
// ============================================
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
  const val = document.getElementById('uni-name-input').value.trim();
  if (!val) return;
  state.university = val;
  saveState();
  showToast(t('success'), 'success');
};

window.addEntity = (key, data) => {
  if (!data.name || !data.name.trim()) return;
  data.name = data.name.trim();
  state[key].push({ id: Date.now(), ...data });
  saveState();
  renderStep();
  // Clear input
  const inputId = key === 'faculties' ? 'new-fac-name' : null;
  if (inputId) {
    const el = document.getElementById(inputId);
    if (el) el.value = '';
  }
};

window.removeEntity = (key, id) => {
  const btn = event && event.currentTarget ? event.currentTarget : null;
  const doRemove = () => {
    state[key] = state[key].filter(i => Number(i.id) !== Number(id));
    saveState();
    renderStep();
    showToast(t('delete') + ' ✓', 'success', 2000);
  };

  if (btn) {
    showInlineConfirm(btn, doRemove);
  } else {
    doRemove();
  }
};

window.addDepartment = () => {
  const name = document.getElementById('new-dep-name').value.trim();
  const facultyId = document.getElementById('new-dep-fac').value;
  if (!name || !facultyId) { showToast(t('error') + ': ' + t('name') + ' & ' + t('faculty'), 'error'); return; }
  state.departments.push({ id: Date.now(), name, facultyId });
  saveState();
  renderStep();
};

window.addTeacher = () => {
  const name = document.getElementById('new-tea-name').value.trim();
  const departmentId = document.getElementById('new-tea-dep').value;
  if (!name || !departmentId) { showToast(t('error') + ': ' + t('name') + ' & ' + t('department'), 'error'); return; }
  state.teachers.push({ id: Date.now(), name, departmentId });
  saveState();
  renderStep();
};

window.addGroup = () => {
  const name      = document.getElementById('new-gru-name').value.trim();
  const facultyId = document.getElementById('new-gru-fac').value;
  const course    = document.getElementById('new-gru-course').value;
  const type      = document.getElementById('new-gru-type').value;
  const lang      = document.getElementById('new-gru-lang').value;
  const students  = document.getElementById('new-gru-students').value;
  if (!name || !facultyId || !students) { showToast(t('error'), 'error'); return; }
  state.groups.push({ id: Date.now(), name, facultyId, course, type, lang, students: parseInt(students) });
  saveState();
  renderStep();
};

window.addSubject = () => {
  const name         = document.getElementById('new-sub-name').value.trim();
  const departmentId = document.getElementById('new-sub-dep').value;
  const isSplit      = document.getElementById('sub-is-split').checked;

  // Save CONSTANT KEY NAMES — not translated strings
  const typeKeys = [];
  if (document.getElementById('sub-type-lecture').checked)  typeKeys.push('lecture');
  if (document.getElementById('sub-type-practice').checked) typeKeys.push('practice');
  if (document.getElementById('sub-type-seminar').checked)  typeKeys.push('seminar');
  if (document.getElementById('sub-type-lab').checked)      typeKeys.push('lab');

  if (!name || !departmentId || typeKeys.length === 0) { showToast(t('error'), 'error'); return; }

  state.subjects.push({ id: Date.now(), name, departmentId, typeKeys, isSplit });
  saveState();
  renderStep();
};

window.addRoom = () => {
  const name     = document.getElementById('new-roo-name').value.trim();
  const typeKey  = document.getElementById('new-roo-type').value; // constant key
  const capacity = document.getElementById('new-roo-cap').value;
  if (!name || !capacity) { showToast(t('error'), 'error'); return; }
  state.rooms.push({ id: Date.now(), name, typeKey, capacity: parseInt(capacity) });
  saveState();
  renderStep();
};

window.addTimeSlot = () => {
  const name  = document.getElementById('new-tim-name').value.trim();
  const start = document.getElementById('new-tim-start').value;
  const end   = document.getElementById('new-tim-end').value;
  if (!name || !start || !end) { showToast(t('error'), 'error'); return; }
  if (start >= end) { showToast(t('error') + ': Boshlanish vaqti tugash vaqtidan keyin!', 'error'); return; }
  state.timeSlots.push({ id: Date.now(), name, start, end });
  saveState();
  renderStep();
};

// ============================================
// SCHEDULE MANAGEMENT
// ============================================
window.toggleScheduleEdit = (idx) => {
  state.schedules[idx].editing = !state.schedules[idx].editing;
  saveState();
  views.schedules();
};

window.removeSchedule = (idx) => {
  const btn = document.querySelector(`[data-remove-idx="${idx}"]`);
  if (!btn) return;
  showInlineConfirm(btn, () => {
    state.schedules.splice(idx, 1);
    saveState();
    views.schedules();
    showToast(t('delete') + ' ✓', 'success', 2000);
  });
};

// ============================================
// DRAG & DROP
// ============================================
window.handleDragStart = (e, schedIdx, lessonIdx) => {
  e.dataTransfer.setData('text/plain', JSON.stringify({ schedIdx, lessonIdx }));
  e.currentTarget.classList.add('dragging');
};

window.handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const dz = e.currentTarget.closest('.drop-zone') || e.currentTarget;
  if (dz.classList.contains('drop-zone')) dz.classList.add('drag-over');
};

window.handleDragLeave = (e) => {
  const dz = e.currentTarget.closest('.drop-zone') || e.currentTarget;
  dz.classList.remove('drag-over');
};

window.handleDrop = (e, targetSchedIdx, targetLessonIdx) => {
  e.preventDefault();
  document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
  document.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));

  const rawData = e.dataTransfer.getData('text/plain');
  if (!rawData) return;

  let parsed;
  try { parsed = JSON.parse(rawData); } catch { return; }

  const { schedIdx, lessonIdx } = parsed;

  if (schedIdx !== targetSchedIdx) {
    showToast(t('drag_diff_sched'), 'warning');
    return;
  }
  if (lessonIdx === targetLessonIdx) return;

  const sched = state.schedules[schedIdx];
  const lessonA = sched.data[lessonIdx];
  const lessonB = sched.data[targetLessonIdx];

  // Conflict check: A moving to B's slot
  const conflictA = sched.data.some((d, i) =>
    i !== lessonIdx && i !== targetLessonIdx &&
    d.day === lessonB.day && d.slot === lessonB.slot &&
    (d.teacher === lessonA.teacher || d.room === lessonA.room || d.group === lessonA.group)
  );

  // Conflict check: B moving to A's slot
  const conflictB = sched.data.some((d, i) =>
    i !== lessonIdx && i !== targetLessonIdx &&
    d.day === lessonA.day && d.slot === lessonA.slot &&
    (d.teacher === lessonB.teacher || d.room === lessonB.room || d.group === lessonB.group)
  );

  if (conflictA || conflictB) {
    showToast(t('conflict_detected'), 'error');
    return;
  }

  // SWAP
  const tempDay  = lessonA.day;
  const tempSlot = lessonA.slot;
  const tempTime = lessonA.time;
  lessonA.day = lessonB.day; lessonA.slot = lessonB.slot; lessonA.time = lessonB.time;
  lessonB.day = tempDay;     lessonB.slot = tempSlot;     lessonB.time = tempTime;

  saveState();
  views.schedules();
  showToast(t('move_success'), 'success', 2000);
};

// ============================================
// HEATMAP
// ============================================
window.updateHeatEntitySelector = () => {
  const type   = document.getElementById('heat-type')?.value;
  const select = document.getElementById('heat-entity');
  if (!select) return;

  const items = type === 'room' ? state.rooms : state.teachers;
  select.innerHTML = items.map(item => `<option value="${escapeHtml(item.name)}">${escapeHtml(item.name)}</option>`).join('');
  renderHeatmap();
};

window.renderHeatmap = () => {
  const schedId    = document.getElementById('heat-sched')?.value;
  const type       = document.getElementById('heat-type')?.value;
  const entityName = document.getElementById('heat-entity')?.value;
  const container  = document.getElementById('heatmap-container');
  if (!container) return;

  const sched = state.schedules.find(s => s.id == schedId);
  if (!sched || !entityName) { container.innerHTML = `<p>${t('empty')}</p>`; return; }
  if (state.timeSlots.length === 0) { container.innerHTML = `<p>${t('empty')}</p>`; return; }

  // Determine days from schedule data itself
  const dayKeys = ['day_1', 'day_2', 'day_3', 'day_4', 'day_5', 'day_6'];
  const allLangDays = dayKeys.map(k => ({
    key: k,
    values: [translations.uz[k], translations.ru[k], translations.en[k]]
  }));

  const usedDays = new Set(sched.data.map(d => d.day));
  const activeDayKeys = allLangDays.filter(dk => dk.values.some(v => usedDays.has(v)));
  const displayDays = activeDayKeys.map(dk => t(dk.key));

  container.innerHTML = `
    <table class="schedule-table">
      <thead>
        <tr>
          <th style="min-width: 130px;">${t('slot')}</th>
          ${displayDays.map(d => `<th style="min-width: 100px;">${d}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${state.timeSlots.map(slot => `
          <tr>
            <td style="font-weight: 600; background: rgba(255,255,255,0.02);">
              ${escapeHtml(slot.name)}<br/>
              <small style="color: var(--text-secondary);">${slot.start}–${slot.end}</small>
            </td>
            ${activeDayKeys.map(dk => {
              const entry = sched.data.find(d => {
                const sameDay = dk.values.includes(d.day);
                const sameSlot = d.slot === slot.name;
                const match = type === 'room' ? d.room.includes(entityName) : d.teacher.includes(entityName);
                return sameDay && sameSlot && match;
              });
              return entry
                ? `<td style="background:rgba(255,71,87,0.12);color:#ff4757;border-left:3px solid #ff4757;">
                     <div style="font-weight:700;font-size:0.75rem;margin-bottom:2px;">${t('busy').toUpperCase()}</div>
                     <div style="font-size:0.8rem;">${escapeHtml(entry.subject)}</div>
                     <div style="font-size:0.72rem;opacity:0.75;">${escapeHtml(entry.group)}</div>
                   </td>`
                : `<td style="background:rgba(46,213,115,0.04);color:#2ed573;text-align:center;vertical-align:middle;font-size:0.8rem;opacity:0.7;">${t('free')}</td>`;
            }).join('')}
          </tr>`).join('')}
      </tbody>
    </table>`;
};

// ============================================
// PERSONAL SCHEDULE
// ============================================
window.renderPersonalSchedule = () => {
  const schedId    = document.getElementById('pers-sched')?.value;
  const teacherName = document.getElementById('pers-teacher')?.value;
  const container  = document.getElementById('personal-container');
  if (!container) return;

  const sched = state.schedules.find(s => s.id == schedId);
  if (!sched || !teacherName) { container.innerHTML = `<p>${t('empty')}</p>`; return; }

  const teacherData = sched.data.filter(d => d.teacher.includes(teacherName));
  if (teacherData.length === 0) { container.innerHTML = `<p style="color:var(--text-secondary);">${t('empty')}</p>`; return; }

  const sorted = sortLessonsForGroupExport(teacherData);
  let lastDayUi = '';

  container.innerHTML = `
    <div style="display:flex;justify-content:flex-end;gap:10px;margin-bottom:1.5rem;flex-wrap:wrap;">
      <button onclick="exportTeacherSchedule('excel')" class="btn-primary" style="background:#27ae60;color:white;">📊 Excel</button>
      <button onclick="exportTeacherSchedule('pdf')" class="btn-primary" style="background:#e74c3c;color:white;">📄 PDF</button>
    </div>
    <div style="overflow-x:auto;">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>${t('day')}</th><th>${t('slot')}</th><th>${t('subject')}</th><th>${t('group')}</th><th>${t('room')}</th>
          </tr>
        </thead>
        <tbody>
          ${sorted.map((d) => {
            const showDay = d.day !== lastDayUi;
            lastDayUi = d.day;
            return `
            <tr style="${showDay ? 'border-top: 2px solid var(--border-color);' : ''}">
              <td style="font-weight:600; color: ${showDay ? 'var(--text-primary)' : 'transparent'}; user-select:none;">${showDay ? escapeHtml(d.day) : ''}</td>
              <td>${escapeHtml(d.slot)}<br/><small style="color:var(--text-secondary);">${escapeHtml(d.time)}</small></td>
              <td>${escapeHtml(d.subject)}</td>
              <td>${escapeHtml(d.group)}</td>
              <td>${escapeHtml(d.room)}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
};

/** O'qituvchi shaxsiy jadval — veb ko'rinishidagi kabi qatorlar */
function buildTeacherPersonalExportRows(lessons) {
  const sorted = sortLessonsForGroupExport(lessons);
  let lastDay = '';
  return sorted.map((d) => {
    const showDay = d.day !== lastDay;
    lastDay = d.day;
    return {
      dayDisplay: showDay ? d.day : '',
      slotLine: `${d.slot}\n${d.time}`,
      subject: d.subject,
      group: d.group,
      room: d.room
    };
  });
}

window.exportTeacherSchedule = (format) => {
  const schedId = document.getElementById('pers-sched').value;
  const teacherName = document.getElementById('pers-teacher').value;
  const sched = state.schedules.find((s) => s.id == schedId);
  if (!sched) return;

  const teacherData = sched.data.filter((d) => d.teacher.includes(teacherName));
  if (!teacherData.length) return;

  const displayRows = buildTeacherPersonalExportRows(teacherData);
  const filename = `${teacherName}_Jadval`.replace(/\s+/g, '_');

  if (format === 'excel') {
    const aoa = [];
    const merges = [];
    let r = 0;
    const mergeRow = (text) => {
      merges.push({ s: { r, c: 0 }, e: { r, c: 4 } });
      aoa.push([text]);
      r++;
    };

    mergeRow(`${state.university} — ${teacherName} — ${t('personal_schedules')}`);
    mergeRow(`${t('schedules')}: ${sched.date}`);
    aoa.push([t('day'), t('slot'), t('subject'), t('group'), t('room')]);
    r++;
    for (const row of displayRows) {
      aoa.push([row.dayDisplay, row.slotLine, row.subject, row.group, row.room]);
      r++;
    }

    const ws = XLSX.utils.aoa_to_sheet(aoa);
    ws['!merges'] = merges;
    ws['!cols'] = [{ wch: 14 }, { wch: 18 }, { wch: 36 }, { wch: 18 }, { wch: 12 }];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Jadval');
    const base64 = XLSX.write(wb, { bookType: 'xlsx', type: 'base64' });
    downloadLink(`data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${base64}`, `${filename}.xlsx`);
  } else {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape' });
    const margin = 14;
    let y = 12;

    doc.setFontSize(13);
    doc.setFont(undefined, 'bold');
    doc.text(`${state.university}`, margin, y);
    y += 7;
    doc.setFontSize(11);
    doc.text(`${teacherName} — ${t('personal_schedules')}`, margin, y);
    y += 6;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    doc.setTextColor(90, 90, 90);
    doc.text(`${t('schedules')}: ${sched.date}`, margin, y);
    y += 10;
    doc.setTextColor(0, 0, 0);

    doc.autoTable({
      startY: y,
      head: [
        [
          t('day').toUpperCase(),
          t('slot').toUpperCase(),
          t('subject').toUpperCase(),
          t('group').toUpperCase(),
          t('room').toUpperCase()
        ]
      ],
      body: displayRows.map((row) => [
        row.dayDisplay,
        row.slotLine,
        row.subject,
        row.group,
        row.room
      ]),
      theme: 'plain',
      headStyles: {
        fillColor: [0, 168, 204],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        halign: 'left'
      },
      styles: {
        fontSize: 9,
        cellPadding: 3,
        valign: 'top',
        overflow: 'linebreak'
      },
      columnStyles: {
        0: { cellWidth: 28 },
        1: { cellWidth: 32 },
        2: { cellWidth: 'auto' },
        3: { cellWidth: 36 },
        4: { cellWidth: 20, halign: 'center' }
      },
      alternateRowStyles: { fillColor: [248, 250, 252] },
      margin: { left: margin, right: margin }
    });
    doc.save(`${filename}.pdf`);
  }
};

// ============================================
// EXPORT (Excel / PDF)
// ============================================
window.exportToExcel = (idx) => {
  const s = state.schedules[idx];
  const blocks = buildScheduleExportBlocks(s.data);
  const aoa = [];
  const merges = [];
  let r = 0;

  const mergeRow = (text) => {
    merges.push({ s: { r, c: 0 }, e: { r, c: 4 } });
    aoa.push([text]);
    r++;
  };

  mergeRow(`${state.university} — JadvalPro · ${t('schedules')} #${idx + 1}`);
  aoa.push(['', '', '', '', '']);
  r++;

  for (const block of blocks) {
    mergeRow(`${t('faculty')}: ${block.facultyName}`);
    for (const g of block.groups) {
      mergeRow(`${t('group')}: ${g.groupName}`);
      mergeRow(g.subTitle || '—');
      aoa.push([t('day'), t('slot'), t('subject'), t('teacher'), t('room')]);
      r++;
      for (const row of g.displayRows) {
        aoa.push([row.dayDisplay, row.slotLine, row.subject, row.teacher, row.room]);
        r++;
      }
      aoa.push(['', '', '', '', '']);
      r++;
    }
  }

  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!merges'] = merges;
  ws['!cols'] = [{ wch: 14 }, { wch: 18 }, { wch: 36 }, { wch: 24 }, { wch: 10 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Jadval');
  const base64 = XLSX.write(wb, { bookType: 'xlsx', type: 'base64' });
  downloadLink(`data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${base64}`, `JadvalPro_${s.id}.xlsx`);
};

window.exportToPDF = (idx) => {
  const { jsPDF } = window.jspdf;
  const s = state.schedules[idx];
  const blocks = buildScheduleExportBlocks(s.data);
  const doc = new jsPDF({ orientation: 'landscape' });
  const margin = 14;
  let y = 12;
  const pageH = doc.internal.pageSize.getHeight();

  doc.setFontSize(13);
  doc.setFont(undefined, 'bold');
  doc.text(`${state.university}`, margin, y);
  y += 7;
  doc.setFontSize(11);
  doc.text(`JadvalPro · ${t('schedules')} #${idx + 1}`, margin, y);
  y += 10;
  doc.setFont(undefined, 'normal');

  const tableHead = [
    [
      t('day').toUpperCase(),
      t('slot').toUpperCase(),
      t('subject').toUpperCase(),
      t('teacher').toUpperCase(),
      t('room').toUpperCase()
    ]
  ];

  const ensureSpace = (need = 36) => {
    if (y > pageH - need) {
      doc.addPage();
      y = margin;
    }
  };

  for (const block of blocks) {
    ensureSpace(28);
    doc.setFontSize(11);
    doc.setTextColor(0, 140, 170);
    doc.setFont(undefined, 'bold');
    doc.text(`${t('faculty')}: ${block.facultyName}`, margin, y);
    y += 8;
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'normal');

    for (const g of block.groups) {
      ensureSpace(40);
      doc.setFontSize(10);
      doc.setFont(undefined, 'bold');
      doc.text(`${t('group')}: ${g.groupName}`, margin, y);
      y += 5;
      doc.setFont(undefined, 'normal');
      doc.setFontSize(9);
      doc.setTextColor(90, 90, 90);
      doc.text(g.subTitle || '—', margin, y);
      y += 7;
      doc.setTextColor(0, 0, 0);

      doc.autoTable({
        startY: y,
        head: tableHead,
        body: g.displayRows.map((row) => [
          row.dayDisplay,
          row.slotLine,
          row.subject,
          row.teacher,
          row.room
        ]),
        theme: 'plain',
        headStyles: {
          fillColor: [0, 168, 204],
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          halign: 'left',
          valign: 'middle'
        },
        styles: {
          fontSize: 9,
          cellPadding: 3,
          valign: 'top',
          overflow: 'linebreak',
          lineColor: [220, 220, 220],
          lineWidth: 0.1
        },
        columnStyles: {
          0: { cellWidth: 28 },
          1: { cellWidth: 32 },
          2: { cellWidth: 'auto' },
          3: { cellWidth: 48 },
          4: { cellWidth: 18, halign: 'center' }
        },
        alternateRowStyles: { fillColor: [248, 250, 252] },
        margin: { left: margin, right: margin }
      });
      y = doc.lastAutoTable.finalY + 12;
    }
  }

  doc.save(`JadvalPro_${s.id}.pdf`);
};

// ============================================
// UTILITIES
// ============================================
function downloadLink(href, filename) {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function escapeHtml(str) {
  if (typeof str !== 'string') return str ?? '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================================
// LANGUAGE CHANGE — sahifani qayta yuklamasdan!
// ============================================
window.changeLang = (val) => {
  state.lang = val;
  saveState();
  // Hozirgi tabni qayta render qilish — location.reload() o'rniga
  translateUI();
  const activeTab = document.querySelector('.nav-item.active');
  if (activeTab && views[activeTab.dataset.tab]) {
    views[activeTab.dataset.tab]();
  }
};

// ============================================
// MOBILE SIDEBAR
// ============================================
window.toggleSidebar = () => {
  document.querySelector('.sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('active');
};

window.closeSidebar = () => {
  document.querySelector('.sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
};

// ============================================
// INIT
// ============================================
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    switchTab(item.dataset.tab);
    if (window.innerWidth <= 768) closeSidebar();
  });
});

const langSelect = document.getElementById('lang-select');
if (langSelect) langSelect.value = state.lang || 'uz';

translateUI();
switchTab('dashboard');
