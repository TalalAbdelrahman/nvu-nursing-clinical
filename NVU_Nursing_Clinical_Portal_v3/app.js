(function () {
  'use strict';

  const DATA = window.NVU_DATA;
  if (!DATA) return;

  const ICONS = {
    sun: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"/></svg>',
    moon: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    hospital: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/></svg>',
    lab: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 3h6"/><path d="M10 3v6.4L4.7 18.2A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.7-2.8L14 9.4V3"/><path d="M8.5 14h7"/></svg>',
    users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    copy: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    print: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
    download: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    external: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    zoom: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',
    alert: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    chev: '<svg class="icon icon-sm chev" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"/></svg>',
    chevDrop: '<svg class="cselect-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="6 9 12 15 18 9"/></svg>',
    check: '<svg class="cselect-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
    file: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    calendar: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    info: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
  };

  const I18N = {
    ar: {
      brandTitle: 'كلية التمريض — جامعة وادي النيل',
      brandSub: 'التدريب العملي • تمريض بالغين 1 (2026–2027)',
      tabSearch: 'جدولك',
      tabGroups: 'كل الجروبات (\u20661–40\u2069)',
      tabGuide: 'التعليمات والملفات',
      courseTag: 'الفرقة الثانية • الفصل الدراسي الأول',
      groupsScope: '40 جروب عملي (\u2066AI 1 – AI 40\u2069)',
      searchHeading: 'استعلام عن جدول المستشفى والمعمل',
      searchLead: 'ابحث باسمك بالعربي أو الإنجليزي أو برقم الـ ID الجامعي لعرض جروبك وموعد المستشفى والمبنى والدور والمعمل وزمايلك.',
      searchPlaceholder: 'اكتب اسمك (عربي أو إنجليزي) أو رقم الـ ID...',
      stripTitle: 'تنبيه هام قبل الحضور (بدون استثناء)',
      stripBody: 'اليونيفورم الرسمي كاملًا والكارنيه الجامعي داخل ID Holder إلزاميان طوال اليوم. الحضور في غير يومك أو فترتك يُحسب غيابًا.',
      stripBtn: 'التعليمات والملفات',
      tileGroupsTitle: 'تصفح كل الجروبات (\u2066AI 1 – AI 40\u2069)',
      tileGroupsDesc: 'استعرض توزيع المستشفيات والمعامل لكل جروب أو صفّي حسب اليوم والمبنى والفترة.',
      tileFilesTitle: 'التعليمات وتحميل الشيتات للطباعة',
      tileFilesDesc: 'حمّل شيت التقييم الطبي الجراحي وسجل التمريض للطباعة، وراجع اليونيفورم وقواعد المستشفى.',
      browseTitle: 'كل الجروبات العملية (\u2066AI 1 – AI 40\u2069)',
      browseSub: 'اختر رقم الجروب أو صفّي الجروبات حسب يوم المستشفى أو المبنى أو الفترة.',
      fltDayLbl: 'يوم المستشفى',
      fltBldLbl: 'المستشفى / المبنى',
      fltShiftLbl: 'الفترة',
      optAllHospDays: 'كل أيام المستشفى',
      optAllBuildings: 'كل المستشفيات',
      optOldSurg: 'مستشفى الجامعة القديمة (جراحة)',
      optNewMed: 'مستشفى الجامعة الجديدة (باطنة)',
      optAllShifts: 'كل الفترات',
      optMorning: 'صباحي (9:00 – 12:45)',
      optAfternoon: 'مسائي (1:00 – 5:00)',
      resetFilters: 'مسح الفلاتر',
      showingGroups: 'عدد الجروبات المعروضة:',
      subgroupLbl: 'جروب العملي',
      mainGroupLbl: 'الجروب الرئيسي',
      idLabel: 'الرقم الجامعي',
      copyId: 'نسخ الـ ID',
      copiedId: 'تم نسخ الرقم الجامعي',
      printBtn: 'طباعة الجدول',
      woTitle: 'عندك يومين عملي في الأسبوع (يوم مستشفى + يوم معمل)',
      woSub: 'ده ملخص يومينك بالترتيب، وتحتيهم تفاصيل كل يوم بالكامل:',
      woDay1Hosp: 'اليوم الأول — يوم المستشفى',
      woDay2Hosp: 'اليوم الثاني — يوم المستشفى',
      woDay1Lab: 'اليوم الأول — يوم المعمل (Lab)',
      woDay2Lab: 'اليوم الثاني — يوم المعمل (Lab)',
      hospCardTitle: 'تفاصيل يوم المستشفى',
      labCardTitle: 'تفاصيل يوم المعمل (Lab)',
      buildingLbl: 'المستشفى والمبنى',
      labRoomLbl: 'قاعة المعمل',
      dayDate: 'اليوم والتاريخ',
      shiftTime: 'الفترة والموعد',
      deptFloor: 'القسم والدور',
      doctor: 'الدكتور المسؤول',
      supervisors: 'المشرفون',
      procedure: 'المهارات المطلوبة',
      coGroups: 'الجروبات المشاركة بالمعمل',
      rosterTitle: 'زملاؤك في جروب',
      rosterGroupTitle: 'قائمة طلاب جروب',
      studentsUnit: 'طالب',
      rosterFilterPh: 'ابحث داخل الجروب...',
      colSeq: '#',
      colAr: 'الاسم بالعربي',
      colEn: 'الاسم بالإنجليزي',
      colId: 'الرقم الجامعي',
      youBadge: 'أنت',
      morningShort: 'صباحي',
      afternoonShort: 'مسائي',
      noMatch: 'لا توجد نتائج مطابقة — جرّب كتابة الاسم الأول واسم العائلة أو رقم الـ ID.',
      noGroupsMatch: 'لا توجد جروبات مطابقة لهذه الفلاتر.',
      dlSectionTitle: 'الملفات المطلوب تحميلها وطباعتها',
      dlSectionSub: 'ملفين أساسيين هتحملهم وتطبعهم وتجهزهم معاك للتدريب العملي:',
      dlPrintTip: 'حمّل الملفين واطبعهم عشان هتشتغل عليهم وتسلمهم (الأسبوع الأول شيت تجريبي Trial والأسبوع الثاني Final). ملحوظة: الشيت المطبوع بيفضل في الشنطة جوه المستشفى، وتاخد البيانات في نوتة صغيرة وبعدين تفرغها في الشيت المطبوع.',
      downloadBtn: 'تحميل PDF',
      viewBtn: 'عرض الملف',
      localDlToast: 'تم فتح الملف — في التشغيل المحلي احفظه من زر الحفظ (Ctrl+S)، وعند الرفع أونلاين يتحمل مباشرة.',
      uniformSectionTitle: 'اليونيفورم الرسمي وقائمة التجهيز قبل النزول',
      zoomHint: 'اضغط للتكبير',
      checklistTitle: 'تجهيز قبل الخروج',
      resetChecklist: 'مسح التحديد',
      rulesSectionTitle: 'أهم تعليمات الحضور والمستشفى',
      notebookSectionTitle: 'دليل عناوين النوتة (لأن الشيت المطبوع ممنوع في يدك داخل القسم)',
      nbAssessTitle: 'عناوين شيت التقييم الطبي الجراحي (Medical Surgical Assessment Sheet)',
      nbRecordTitle: 'عناوين سجل التمريض (Nursing Record)'
    },
    en: {
      brandTitle: 'Faculty of Nursing — Nile Valley University',
      brandSub: 'Clinical Training • Adult Nursing I (2026–2027)',
      tabSearch: 'My Schedule',
      tabGroups: 'All Groups (1–40)',
      tabGuide: 'Guide & Files',
      courseTag: '2nd Level • 1st Semester',
      groupsScope: '40 Clinical Groups (AI 1 – AI 40)',
      searchHeading: 'Hospital & Lab Schedule Lookup',
      searchLead: 'Search by your name (Arabic or English) or University Student ID to view your clinical subgroup, hospital building, floor, lab session, and teammates.',
      searchPlaceholder: 'Search by Name (AR or EN) or Student ID...',
      stripTitle: 'Mandatory Attendance Warning (No Exceptions)',
      stripBody: 'Full official uniform and visible University ID in an ID Holder are required all day. Attending another day or shift counts as ABSENT.',
      stripBtn: 'Guide & Files',
      tileGroupsTitle: 'Browse All Groups (AI 1 – AI 40)',
      tileGroupsDesc: 'Inspect hospital and lab plans for every subgroup or filter by day, building, and shift.',
      tileFilesTitle: 'Rules & Printable Clinical Sheets',
      tileFilesDesc: 'Download printable Assessment Sheet & Nursing Record, and review uniform & ward rules.',
      browseTitle: 'All Clinical Groups (AI 1 – AI 40)',
      browseSub: 'Select a subgroup or filter by hospital day, building, or shift.',
      fltDayLbl: 'Hospital Day',
      fltBldLbl: 'Hospital Building',
      fltShiftLbl: 'Shift',
      optAllHospDays: 'All Hospital Days',
      optAllBuildings: 'All Hospitals',
      optOldSurg: 'Old University Hospital (Surgery)',
      optNewMed: 'New University Hospital (Medicine)',
      optAllShifts: 'All Shifts',
      optMorning: 'Morning (9:00 AM – 12:45 PM)',
      optAfternoon: 'Afternoon (1:00 PM – 5:00 PM)',
      resetFilters: 'Reset Filters',
      showingGroups: 'Matching groups:',
      subgroupLbl: 'Clinical Subgroup',
      mainGroupLbl: 'Main Group',
      idLabel: 'Student ID',
      copyId: 'Copy ID',
      copiedId: 'Student ID copied',
      printBtn: 'Print Schedule',
      woTitle: 'You have 2 clinical days this week (1 Hospital day + 1 Lab day)',
      woSub: 'Quick overview of your 2 clinical days in order, with full details right below:',
      woDay1Hosp: 'Day 1 — Hospital Day',
      woDay2Hosp: 'Day 2 — Hospital Day',
      woDay1Lab: 'Day 1 — Lab Day',
      woDay2Lab: 'Day 2 — Lab Day',
      hospCardTitle: 'Hospital Day Details',
      labCardTitle: 'Clinical Lab Day Details',
      buildingLbl: 'Hospital Building',
      labRoomLbl: 'Lab Room',
      dayDate: 'Day & Date',
      shiftTime: 'Shift & Time',
      deptFloor: 'Department & Floor',
      doctor: 'Assigned Doctor',
      supervisors: 'Supervisors',
      procedure: 'Required Procedures',
      coGroups: 'Groups Sharing Lab',
      rosterTitle: 'Teammates in',
      rosterGroupTitle: 'Student Roster for',
      studentsUnit: 'students',
      rosterFilterPh: 'Filter inside group...',
      colSeq: '#',
      colAr: 'Arabic Name',
      colEn: 'English Name',
      colId: 'Student ID',
      youBadge: 'Selected',
      morningShort: 'AM',
      afternoonShort: 'PM',
      noMatch: 'No matching students found — try first & last name or Student ID.',
      noGroupsMatch: 'No groups match the selected filters.',
      dlSectionTitle: 'Required Printable Clinical Forms',
      dlSectionSub: 'Download and print both official forms to prepare and submit during your clinical rotation:',
      dlPrintTip: 'Download and print both sheets for Week 1 (Trial) and Week 2 (Final). Remember: keep printed sheets inside your bag while in the ward, take notes in a small notebook, then fill out your printed forms.',
      downloadBtn: 'Download PDF',
      viewBtn: 'Open PDF',
      localDlToast: 'Opened PDF — locally use Save (Ctrl+S). On Netlify/GitHub Pages it downloads directly.',
      uniformSectionTitle: 'Official Uniform & Pre-Shift Checklist',
      zoomHint: 'Click to zoom',
      checklistTitle: 'Before Leaving Home',
      resetChecklist: 'Reset',
      rulesSectionTitle: 'Essential Attendance & Ward Rules',
      notebookSectionTitle: 'Pocket Notebook Outline (Printed sheets are not allowed in hand inside the ward)',
      nbAssessTitle: 'Medical Surgical Assessment Sheet Domains',
      nbRecordTitle: 'Nursing Record Sections'
    }
  };

  function normAr(str) {
    return (str || '')
      .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/عبد\s+/g, 'عبد')
      .replace(/ابو\s+/g, 'ابو')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function normEnLight(str) {
    return (str || '').toLowerCase().replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function normEnPhon(str) {
    return (str || '')
      .toLowerCase()
      .replace(/[-_'`.]/g, ' ')
      .replace(/\babd\s*(el|al)\s*/g, 'abdel')
      .replace(/\babdul\s*/g, 'abdel')
      .replace(/\babd\s+allah\b/g, 'abdallah')
      .replace(/\babdullah\b/g, 'abdallah')
      .replace(/\babou\s*/g, 'abo')
      .replace(/\babu\s*/g, 'abo')
      .replace(/\b(el|al)\s+/g, 'el')
      .replace(/ph/g, 'f')
      .replace(/ou|oo/g, 'u')
      .replace(/ee|ei|ie/g, 'i')
      .replace(/ey|ay/g, 'a')
      .replace(/dh|th/g, 'z')
      .replace(/q/g, 'k')
      .replace(/c(?=[aou])/g, 'k')
      .replace(/([a-z])\1+/g, '$1')
      .replace(/[aeiou]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function dateKey(ddmmyyyy) {
    const parts = String(ddmmyyyy || '').split('/');
    if (parts.length !== 3) return 0;
    return Number(parts[2]) * 10000 + Number(parts[1]) * 100 + Number(parts[0]);
  }

  const INDEX = DATA.students.map((s) => ({
    ...s,
    _ar: normAr(s.name_ar),
    _arCompact: normAr(s.name_ar).replace(/\s+/g, ''),
    _enLight: normEnLight(s.name_en),
    _enPhon: normEnPhon(s.name_en),
    _enPhonCompact: normEnPhon(s.name_en).replace(/\s+/g, '')
  }));

  const BY_GROUP = {};
  for (let g = 1; g <= 40; g++) BY_GROUP[g] = [];
  INDEX.forEach((s) => BY_GROUP[s.group].push(s));

  const state = {
    lang: localStorage.getItem('nvu_lang') || 'ar',
    theme: localStorage.getItem('nvu_theme') || 'light',
    tab: 'search',
    selectedStudentId: localStorage.getItem('nvu_last_student') || null,
    selectedGroup: 1,
    filters: { day: 'all', building: 'all', shift: 'all' },
    openDropdown: null,
    checklist: JSON.parse(localStorage.getItem('nvu_checklist') || '{}')
  };

  function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || key; }
  function esc(str) {
    return String(str || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function ltr(str) { return `<bdi dir="ltr" class="mono">${esc(str)}</bdi>`; }

  function showToast(msg, duration = 2200) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => el.classList.remove('show'), duration);
  }

  // ---------- Smart PDF Download (Works smoothly on Netlify/GitHub Pages AND locally) ----------
  function handlePdfDownload(fileUrl, filename) {
    if (window.location.protocol === 'file:') {
      window.open(fileUrl, '_blank', 'noopener');
      showToast(t('localDlToast'), 4200);
      return;
    }
    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.blob();
      })
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(blobUrl), 3000);
      })
      .catch(() => {
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = filename;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  }

  // ---------- Search Engine ----------
  function searchStudents(rawQuery) {
    const q = (rawQuery || '').trim();
    if (!q) return [];
    if (/^\d+$/.test(q)) {
      const exact = INDEX.filter((s) => s.id === q);
      const starts = INDEX.filter((s) => s.id !== q && s.id.startsWith(q));
      const contains = INDEX.filter((s) => !s.id.startsWith(q) && s.id.includes(q));
      return [...exact, ...starts, ...contains].slice(0, 14);
    }
    if (/[\u0600-\u06FF]/.test(q)) {
      const nq = normAr(q);
      const tokens = nq.split(' ').filter(Boolean);
      const scored = [];
      for (const s of INDEX) {
        if (tokens.every((tk) => s._ar.includes(tk) || s._arCompact.includes(tk))) {
          let score = 0;
          if (s._ar.startsWith(nq)) score += 100;
          if (s._ar.startsWith(tokens[0])) score += 40;
          score -= Math.abs(s._ar.length - nq.length) * 0.1;
          scored.push({ s, score });
        }
      }
      scored.sort((a, b) => b.score - a.score);
      return scored.slice(0, 14).map((x) => x.s);
    } else {
      const lq = normEnLight(q);
      const lTokens = lq.split(' ').filter(Boolean);
      const pq = normEnPhon(q);
      const pTokens = pq.split(' ').filter(Boolean);
      const scored = [];
      for (const s of INDEX) {
        const direct = lTokens.every((tk) => s._enLight.includes(tk));
        const phon = pTokens.length > 0 && pTokens.every((tk) => s._enPhon.includes(tk) || s._enPhonCompact.includes(tk));
        if (direct || phon) {
          let score = direct ? 60 : 25;
          if (s._enLight.startsWith(lq)) score += 80;
          else if (s._enLight.startsWith(lTokens[0])) score += 30;
          scored.push({ s, score });
        }
      }
      scored.sort((a, b) => b.score - a.score);
      return scored.slice(0, 14).map((x) => x.s);
    }
  }

  // ---------- Render 2-Day Plain-Language Summary + Two Schedule Cards ----------
  function renderScheduleCards(groupNum) {
    const h = DATA.hospitalPlan[String(groupNum)];
    const l = DATA.labPlan[String(groupNum)];
    const isAr = state.lang === 'ar';

    const hospDay = isAr ? `${h.day_ar} — ${ltr(h.date)}` : `${h.day_en} — ${ltr(h.date)}`;
    const labDay = isAr ? `${l.day_ar} — ${ltr(l.date)}` : `${l.day_en} — ${ltr(l.date)}`;
    const bTag = h.building_type === 'old_surgery' ? 'tag-surgery' : 'tag-medicine';
    const coGrpText = l.co_groups.map((g) => `AI (${g})`).join(' + ');

    // Sort the 2 clinical days chronologically so students immediately see which comes first
    const hospFirst = dateKey(h.date) <= dateKey(l.date);
    const hospItem = {
      cls: h.building_type === 'old_surgery' ? 'is-hosp-old' : 'is-hosp-new',
      label: hospFirst ? t('woDay1Hosp') : t('woDay2Hosp'),
      day: hospDay,
      meta: `${esc(isAr ? h.shift_ar : h.shift_en)} • ${esc(isAr ? h.hospital_ar : h.hospital_en)} (${esc(isAr ? h.floor_ar : h.floor_en)})`
    };
    const labItem = {
      cls: 'is-lab',
      label: hospFirst ? t('woDay2Lab') : t('woDay1Lab'),
      day: labDay,
      meta: `${esc(isAr ? l.time_ar : l.time_en)} • ${esc(isAr ? l.lab_ar : l.lab_en)}`
    };
    const ordered = hospFirst ? [hospItem, labItem] : [labItem, hospItem];

    return `
      <!-- Clear 2-Day Clinical Overview -->
      <div class="week-overview">
        <div class="wo-head">
          <span style="color:var(--teal); display:inline-flex;">${ICONS.calendar}</span>
          <h3 class="wo-title">${t('woTitle')}</h3>
        </div>
        <p class="wo-sub" style="margin-bottom:14px;">${t('woSub')}</p>
        <div class="wo-days">
          ${ordered.map((item, idx) => `
            <div class="wo-day-pill ${item.cls}">
              <div class="wo-num">${idx + 1}</div>
              <div>
                <div class="wo-day-k">${item.label}</div>
                <div class="wo-day-v">${item.day}</div>
                <div class="wo-day-meta">${item.meta}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Two Detailed Cards -->
      <div class="schedule-grid">
        <article class="sched-card ${h.building_type}">
          <div class="sched-head">
            <h3 class="sched-head-title">${ICONS.hospital} <span>${t('hospCardTitle')}</span></h3>
            <span class="tag ${bTag}">${ltr(`AI (${groupNum})`)}</span>
          </div>
          <div class="sched-body">
            <div class="location-banner ${h.building_type}">
              <div class="loc-label">${t('buildingLbl')}</div>
              <div class="loc-main">${esc(isAr ? h.hospital_ar : h.hospital_en)}</div>
              <div class="loc-sub">${esc(isAr ? h.hospital_en : h.hospital_ar)}</div>
            </div>
            <div class="detail-list">
              <div class="detail-row">
                <span class="detail-k">${t('dayDate')}</span>
                <span class="detail-v">${hospDay}</span>
              </div>
              <div class="detail-row">
                <span class="detail-k">${t('shiftTime')}</span>
                <span class="detail-v">
                  <span class="tag ${h.shift_key === 'morning' ? 'tag-amber' : 'tag-plum'}">${esc(isAr ? h.shift_ar : h.shift_en)}</span>
                </span>
              </div>
              <div class="detail-row">
                <span class="detail-k">${t('deptFloor')}</span>
                <span class="detail-v">${esc(isAr ? h.area_ar : h.area_en)}</span>
                <span class="detail-v-sub">${esc(isAr ? h.area_en : h.area_ar)}</span>
              </div>
              <div class="detail-row">
                <span class="detail-k">${t('doctor')}</span>
                <span class="detail-v en-text"><bdi dir="ltr">${esc(h.staff)}</bdi></span>
              </div>
              <div class="detail-row">
                <span class="detail-k">${t('supervisors')}</span>
                <span class="detail-v-sub en-text"><bdi dir="ltr">${esc(h.supervisors.join(' • '))}</bdi></span>
              </div>
            </div>
          </div>
        </article>

        <article class="sched-card lab">
          <div class="sched-head">
            <h3 class="sched-head-title">${ICONS.lab} <span>${t('labCardTitle')}</span></h3>
            <span class="tag tag-plum"><bdi dir="ltr">${esc(l.lab_en)}</bdi></span>
          </div>
          <div class="sched-body">
            <div class="location-banner lab">
              <div class="loc-label">${t('labRoomLbl')}</div>
              <div class="loc-main">${esc(isAr ? l.lab_ar : l.lab_en)}</div>
              <div class="loc-sub">${esc(isAr ? l.lab_en : l.lab_ar)}</div>
            </div>
            <div class="detail-list">
              <div class="detail-row">
                <span class="detail-k">${t('dayDate')}</span>
                <span class="detail-v">${labDay}</span>
              </div>
              <div class="detail-row">
                <span class="detail-k">${t('shiftTime')}</span>
                <span class="detail-v"><span class="tag tag-plum">${esc(isAr ? l.time_ar : l.time_en)}</span></span>
              </div>
              <div class="detail-row">
                <span class="detail-k">${t('procedure')}</span>
                <span class="detail-v">${esc(isAr ? l.procedure_ar : l.procedure_en)}</span>
                <span class="detail-v-sub">${esc(isAr ? l.procedure_en : l.procedure_ar)}</span>
              </div>
              <div class="detail-row">
                <span class="detail-k">${t('doctor')}</span>
                <span class="detail-v en-text"><bdi dir="ltr">${esc(l.staff)}</bdi></span>
              </div>
              <div class="detail-row">
                <span class="detail-k">${t('coGroups')}</span>
                <span class="detail-v-sub">${ltr(coGrpText)}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    `;
  }

  // ---------- Render Group Roster ----------
  function renderRosterCard(groupNum, highlightId, prefix) {
    const members = BY_GROUP[groupNum] || [];
    const heading = highlightId
      ? `${t('rosterTitle')} ${ltr(`AI (${groupNum})`)}`
      : `${t('rosterGroupTitle')} ${ltr(`AI (${groupNum})`)}`;

    const rows = members.map((m) => {
      const isMe = highlightId && m.id === highlightId;
      return `<tr class="${isMe ? 'is-me' : ''}" data-pick-id="${m.id}">` +
        `<td class="mono">${m.seq}</td>` +
        `<td class="ar-text">${esc(m.name_ar)}${isMe ? ` <span class="tag tag-teal" style="margin-inline-start:6px">${t('youBadge')}</span>` : ''}</td>` +
        `<td class="en-text"><bdi dir="ltr">${esc(m.name_en)}</bdi></td>` +
        `<td class="mono id-cell">${m.id}</td>` +
        `</tr>`;
    }).join('');

    return `
      <div class="roster-card">
        <div class="roster-header">
          <h3 class="roster-title">${ICONS.users} <span>${heading}</span> <span class="tag tag-neutral">${members.length} ${t('studentsUnit')}</span></h3>
          <input type="text" class="roster-filter" id="${prefix}_rosterFilter" placeholder="${esc(t('rosterFilterPh'))}" />
        </div>
        <div class="table-scroll">
          <table class="roster-table" id="${prefix}_rosterTable">
            <thead>
              <tr>
                <th>${t('colSeq')}</th>
                <th>${t('colAr')}</th>
                <th>${t('colEn')}</th>
                <th>${t('colId')}</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  function bindRosterEvents(container, prefix) {
    const filterEl = container.querySelector(`#${prefix}_rosterFilter`);
    const tableEl = container.querySelector(`#${prefix}_rosterTable`);
    if (filterEl && tableEl) {
      filterEl.addEventListener('input', () => {
        const q = filterEl.value.trim();
        const qAr = normAr(q);
        const qEn = normEnLight(q);
        tableEl.querySelectorAll('tbody tr').forEach((tr) => {
          if (!q) { tr.style.display = ''; return; }
          const txt = tr.textContent || '';
          const hit = txt.includes(q) || normAr(txt).includes(qAr) || normEnLight(txt).includes(qEn);
          tr.style.display = hit ? '' : 'none';
        });
      });
    }
    if (tableEl) {
      tableEl.querySelectorAll('tbody tr[data-pick-id]').forEach((tr) => {
        tr.addEventListener('click', () => selectStudent(tr.getAttribute('data-pick-id'), true));
      });
    }
  }

  // ---------- Select Student ----------
  function selectStudent(studentId, jumpToSearchTab = false) {
    const student = INDEX.find((s) => s.id === studentId);
    if (!student) return;

    state.selectedStudentId = student.id;
    localStorage.setItem('nvu_last_student', student.id);

    if (jumpToSearchTab && state.tab !== 'search') switchTab('search');

    const input = document.getElementById('studentSearch');
    const clearBtn = document.getElementById('clearSearch');
    const resultsBox = document.getElementById('searchResults');
    input.value = state.lang === 'ar' ? student.name_ar : student.name_en;
    clearBtn.classList.add('visible');
    resultsBox.classList.remove('open');

    document.getElementById('emptyState').style.display = 'none';
    const dash = document.getElementById('studentDashboard');
    dash.classList.add('visible');

    const isAr = state.lang === 'ar';
    dash.innerHTML = `
      <div class="student-card">
        <div>
          <h2 class="student-name-main">${esc(isAr ? student.name_ar : student.name_en)}</h2>
          <p class="student-name-alt">${isAr ? `<bdi dir="ltr" class="en-text">${esc(student.name_en)}</bdi>` : `<bdi dir="rtl" class="ar-text">${esc(student.name_ar)}</bdi>`}</p>
          <div class="student-meta-row">
            <span class="meta-chip accent"><span class="mk">${t('subgroupLbl')}</span><span class="mv">${ltr(`AI (${student.group})`)}</span></span>
            <span class="meta-chip"><span class="mk">${t('mainGroupLbl')}</span><span class="mv">${ltr(`AI (${student.main_group})`)}</span></span>
            <span class="meta-chip"><span class="mk">${t('idLabel')}</span><span class="mv">${ltr(student.id)}</span></span>
          </div>
        </div>
        <div class="student-actions">
          <button class="btn" type="button" id="copyIdBtn">${ICONS.copy} <span>${t('copyId')}</span></button>
          <button class="btn btn-primary" type="button" id="printSchedBtn">${ICONS.print} <span>${t('printBtn')}</span></button>
        </div>
      </div>

      ${renderScheduleCards(student.group)}
      ${renderRosterCard(student.group, student.id, 'dash')}
    `;

    dash.querySelector('#copyIdBtn').addEventListener('click', () => {
      if (navigator.clipboard) navigator.clipboard.writeText(student.id).then(() => showToast(t('copiedId')));
      else showToast(student.id);
    });
    dash.querySelector('#printSchedBtn').addEventListener('click', () => window.print());
    bindRosterEvents(dash, 'dash');
  }

  // ---------- Custom Modern Dropdown Filters (All Groups Tab) ----------
  function getFilterDefinitions() {
    const isAr = state.lang === 'ar';
    return [
      {
        key: 'day',
        mini: t('fltDayLbl'),
        options: [
          { value: 'all', label: t('optAllHospDays') },
          { value: 'Saturday', label: isAr ? 'السبت — 21/11/2026' : 'Saturday — 21/11/2026' },
          { value: 'Sunday', label: isAr ? 'الأحد — 22/11/2026' : 'Sunday — 22/11/2026' },
          { value: 'Tuesday', label: isAr ? 'الثلاثاء — 24/11/2026' : 'Tuesday — 24/11/2026' },
          { value: 'Wednesday', label: isAr ? 'الأربعاء — 25/11/2026' : 'Wednesday — 25/11/2026' },
          { value: 'Thursday', label: isAr ? 'الخميس — 26/11/2026' : 'Thursday — 26/11/2026' }
        ]
      },
      {
        key: 'building',
        mini: t('fltBldLbl'),
        options: [
          { value: 'all', label: t('optAllBuildings') },
          { value: 'old_surgery', label: t('optOldSurg') },
          { value: 'new_medicine', label: t('optNewMed') }
        ]
      },
      {
        key: 'shift',
        mini: t('fltShiftLbl'),
        options: [
          { value: 'all', label: t('optAllShifts') },
          { value: 'morning', label: t('optMorning') },
          { value: 'afternoon', label: t('optAfternoon') }
        ]
      }
    ];
  }

  function renderCustomFilters() {
    const bar = document.getElementById('customFiltersBar');
    const defs = getFilterDefinitions();

    bar.innerHTML = defs.map((def) => {
      const curVal = state.filters[def.key];
      const activeOpt = def.options.find((o) => o.value === curVal) || def.options[0];
      const isOpen = state.openDropdown === def.key;
      const isFiltered = curVal !== 'all';

      return `
        <div class="cselect ${isOpen ? 'open' : ''} ${isFiltered ? 'has-filter' : ''}" data-cselect="${def.key}">
          <button type="button" class="cselect-trigger" aria-haspopup="listbox" aria-expanded="${isOpen}">
            <span class="cselect-label-wrap">
              <span class="cselect-mini">${esc(def.mini)}</span>
              <span class="cselect-value">${esc(activeOpt.label)}</span>
            </span>
            ${ICONS.chevDrop}
          </button>
          <div class="cselect-menu" role="listbox">
            ${def.options.map((opt) => `
              <button type="button" class="cselect-opt ${opt.value === curVal ? 'selected' : ''}" data-fkey="${def.key}" data-fval="${opt.value}" role="option" aria-selected="${opt.value === curVal}">
                <span>${esc(opt.label)}</span>
                ${ICONS.check}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');

    bar.querySelectorAll('.cselect-trigger').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = btn.closest('.cselect').getAttribute('data-cselect');
        state.openDropdown = state.openDropdown === key ? null : key;
        renderCustomFilters();
      });
    });

    bar.querySelectorAll('.cselect-opt').forEach((optBtn) => {
      optBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = optBtn.getAttribute('data-fkey');
        const val = optBtn.getAttribute('data-fval');
        state.filters[key] = val;
        state.openDropdown = null;
        renderCustomFilters();
        renderGroupChips();
      });
    });
  }

  function renderGroupChips() {
    const { day: dayF, building: bldF, shift: shiftF } = state.filters;
    const wrap = document.getElementById('groupChips');
    const statusRow = document.getElementById('filterStatusRow');

    const matching = [];
    for (let g = 1; g <= 40; g++) {
      const h = DATA.hospitalPlan[String(g)];
      if (dayF !== 'all' && h.day_en !== dayF) continue;
      if (bldF !== 'all' && h.building_type !== bldF) continue;
      if (shiftF !== 'all' && h.shift_key !== shiftF) continue;
      matching.push(g);
    }

    const hasAnyFilter = dayF !== 'all' || bldF !== 'all' || shiftF !== 'all';
    statusRow.innerHTML = hasAnyFilter
      ? `<span class="tag tag-teal">${t('showingGroups')} <bdi dir="ltr" class="mono">${matching.length} / 40</bdi></span>
         <button type="button" class="ctrl-btn" id="resetFiltersBtn" style="height:30px; font-size:12.5px;">${t('resetFilters')}</button>`
      : '';

    const resetBtn = statusRow.querySelector('#resetFiltersBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.filters = { day: 'all', building: 'all', shift: 'all' };
        state.openDropdown = null;
        renderCustomFilters();
        renderGroupChips();
      });
    }

    if (matching.length && !matching.includes(state.selectedGroup)) {
      state.selectedGroup = matching[0];
    }

    wrap.innerHTML = matching.map((g) => {
      const h = DATA.hospitalPlan[String(g)];
      const tag = h.shift_key === 'morning' ? t('morningShort') : t('afternoonShort');
      return `<button type="button" class="group-btn ${g === state.selectedGroup ? 'active' : ''}" data-grp="${g}"><bdi dir="ltr">AI (${g})</bdi><small>${esc(tag)}</small></button>`;
    }).join('');

    wrap.querySelectorAll('.group-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.selectedGroup = Number(btn.getAttribute('data-grp'));
        renderGroupChips();
        renderGroupDetail(false);
      });
    });

    renderGroupDetail(matching.length === 0);
  }

  function renderGroupDetail(isEmpty) {
    const view = document.getElementById('groupDetailView');
    if (isEmpty) {
      view.innerHTML = `<div class="section-card">${t('noGroupsMatch')}</div>`;
      return;
    }
    const g = state.selectedGroup;
    view.innerHTML = renderScheduleCards(g) + renderRosterCard(g, null, 'grp');
    bindRosterEvents(view, 'grp');
  }

  // ---------- Unified Guide & Files Tab (ONLY the 2 Printable Forms) ----------
  function renderGuideTab() {
    const isAr = state.lang === 'ar';
    const g = DATA.guide;
    const container = document.getElementById('guideContainer');

    const dlCards = DATA.downloads.map((d, idx) => `
      <div class="dl-card">
        <div>
          <div class="dl-top">
            <span class="tag tag-teal">${esc(isAr ? d.tag_ar : d.tag_en)}</span>
            <span style="color:var(--teal)">${ICONS.file}</span>
          </div>
          <h4 class="dl-title">${esc(isAr ? d.title_ar : d.title_en)}</h4>
          <p class="dl-desc">${esc(isAr ? d.desc_ar : d.desc_en)}</p>
          <div class="dl-meta">${esc(isAr ? d.meta_ar : d.meta_en)}</div>
        </div>
        <div class="dl-actions">
          <button type="button" class="btn btn-primary" data-dl-idx="${idx}">${ICONS.download} <span>${t('downloadBtn')}</span></button>
          <a class="btn" href="${d.file}" target="_blank" rel="noopener">${ICONS.external} <span>${t('viewBtn')}</span></a>
        </div>
      </div>
    `).join('');

    const checkedCount = g.checklist.filter((c) => state.checklist[c.id]).length;
    const chkRows = g.checklist.map((c) => {
      const done = !!state.checklist[c.id];
      return `
        <label class="chk-row ${done ? 'done' : ''}">
          <input type="checkbox" data-chk="${c.id}" ${done ? 'checked' : ''} />
          <span>${esc(isAr ? c.ar : c.en)}</span>
        </label>
      `;
    }).join('');

    const ruleCards = g.rules.map((r) => `
      <article class="rule-box tone-${r.tone}">
        <h3>${esc(isAr ? r.title_ar : r.title_en)}</h3>
        <ul>
          ${r.items.map((pair) => `<li>${esc(isAr ? pair[0] : pair[1])}</li>`).join('')}
        </ul>
      </article>
    `).join('');

    const nbAssess = g.notebook.assessment.map(([title, pts]) => `
      <div class="nb-item"><strong>${esc(title)}</strong><p>${esc(pts)}</p></div>
    `).join('');

    const nbRecord = g.notebook.record.map(([title, pts]) => `
      <div class="nb-item"><strong>${esc(title)}</strong><p>${esc(pts)}</p></div>
    `).join('');

    container.innerHTML = `
      <!-- 1. Official Notice -->
      <div class="alert-bar" style="margin-bottom:0;">
        <div class="alert-body">
          <div class="alert-title">${ICONS.alert} <span>${esc(isAr ? g.notice.title_ar : g.notice.title_en)}</span></div>
          <p class="alert-text">${esc(isAr ? g.notice.body_ar : g.notice.body_en)}</p>
        </div>
      </div>

      <!-- 2. Only the 2 Printable Clinical Forms -->
      <div class="section-card" style="margin-bottom:0;">
        <h2 class="section-title">${t('dlSectionTitle')}</h2>
        <p class="section-sub" style="margin-bottom:14px;">${t('dlSectionSub')}</p>
        <div class="print-tip">
          ${ICONS.info}
          <div>${t('dlPrintTip')}</div>
        </div>
        <div class="downloads-grid">${dlCards}</div>
      </div>

      <!-- 3. Uniform Image + Checklist -->
      <div class="section-card" style="margin-bottom:0;">
        <h2 class="section-title" style="margin-bottom:16px;">${t('uniformSectionTitle')}</h2>
        <div class="uniform-layout">
          <div class="uniform-frame" id="openUniformModal">
            <img src="assets/uniform-guide.jpg" alt="Official Nursing Uniform Guidelines" loading="lazy" />
            <span class="zoom-pill">${ICONS.zoom} <span>${t('zoomHint')}</span></span>
          </div>
          <div>
            <div class="chk-header">
              <strong style="font-size:15px;">${t('checklistTitle')}</strong>
              <div style="display:flex; align-items:center; gap:8px;">
                <span class="tag tag-teal mono">${checkedCount} / ${g.checklist.length}</span>
                ${checkedCount > 0 ? `<button type="button" class="ctrl-btn" id="resetChecklistBtn" style="height:28px; font-size:12px; padding:0 9px;">${t('resetChecklist')}</button>` : ''}
              </div>
            </div>
            <div class="chk-list">${chkRows}</div>
          </div>
        </div>
      </div>

      <!-- 4. Concise Clinical Rules -->
      <div>
        <h2 class="section-title" style="margin-bottom:14px;">${t('rulesSectionTitle')}</h2>
        <div class="rules-grid">${ruleCards}</div>
      </div>

      <!-- 5. Collapsible Notebook Outline -->
      <div class="section-card" style="margin-bottom:0;">
        <h2 class="section-title" style="margin-bottom:14px;">${t('notebookSectionTitle')}</h2>
        <details class="accordion">
          <summary><span>${t('nbAssessTitle')}</span> ${ICONS.chev}</summary>
          <div class="acc-body">${nbAssess}</div>
        </details>
        <details class="accordion">
          <summary><span>${t('nbRecordTitle')}</span> ${ICONS.chev}</summary>
          <div class="acc-body">${nbRecord}</div>
        </details>
      </div>
    `;

    container.querySelectorAll('button[data-dl-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const d = DATA.downloads[Number(btn.getAttribute('data-dl-idx'))];
        if (d) handlePdfDownload(d.file, d.filename);
      });
    });

    container.querySelector('#openUniformModal').addEventListener('click', () => {
      document.getElementById('imgModal').classList.add('open');
    });

    container.querySelectorAll('input[data-chk]').forEach((inp) => {
      inp.addEventListener('change', () => {
        state.checklist[inp.getAttribute('data-chk')] = inp.checked;
        localStorage.setItem('nvu_checklist', JSON.stringify(state.checklist));
        renderGuideTab();
      });
    });

    const resetBtn = container.querySelector('#resetChecklistBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.checklist = {};
        localStorage.setItem('nvu_checklist', '{}');
        renderGuideTab();
      });
    }
  }

  // ---------- Tabs, Language & Theme ----------
  function switchTab(tabName) {
    state.tab = tabName;
    state.openDropdown = null;
    document.querySelectorAll('.nav-tab').forEach((btn) => {
      const active = btn.getAttribute('data-tab') === tabName;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    document.querySelectorAll('.tab-panel').forEach((p) => {
      p.classList.toggle('active', p.id === `panel-${tabName}`);
    });
    if (tabName === 'groups') {
      renderCustomFilters();
      renderGroupChips();
    }
    if (tabName === 'guide') renderGuideTab();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function applyLanguage() {
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langToggle').textContent = state.lang === 'ar' ? 'English' : 'عربي';
    document.getElementById('studentSearch').placeholder = t('searchPlaceholder');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (I18N[state.lang][key]) el.textContent = I18N[state.lang][key];
    });

    if (state.selectedStudentId) selectStudent(state.selectedStudentId, false);
    if (state.tab === 'groups') {
      renderCustomFilters();
      renderGroupChips();
    }
    if (state.tab === 'guide') renderGuideTab();
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    document.getElementById('themeToggle').innerHTML = state.theme === 'dark' ? ICONS.sun : ICONS.moon;
  }

  // ---------- Wire Events ----------
  const searchInput = document.getElementById('studentSearch');
  const clearBtn = document.getElementById('clearSearch');
  const resultsBox = document.getElementById('searchResults');

  searchInput.addEventListener('input', () => {
    const val = searchInput.value;
    clearBtn.classList.toggle('visible', val.length > 0);
    if (!val.trim()) {
      resultsBox.classList.remove('open');
      return;
    }
    const matches = searchStudents(val);
    if (!matches.length) {
      resultsBox.innerHTML = `<div style="padding:14px 16px; color:var(--text-muted); font-size:14px;">${t('noMatch')}</div>`;
      resultsBox.classList.add('open');
      return;
    }
    const isAr = state.lang === 'ar';
    resultsBox.innerHTML = matches.map((s) => {
      const h = DATA.hospitalPlan[String(s.group)];
      const bCls = h.building_type === 'old_surgery' ? 'tag-surgery' : 'tag-medicine';
      return `
        <button type="button" class="sri-btn" data-sid="${s.id}" role="option">
          <div class="sri-names">
            <div class="sri-primary">${esc(isAr ? s.name_ar : s.name_en)}</div>
            <div class="sri-secondary">${isAr ? `<bdi dir="ltr" class="en-text">${esc(s.name_en)}</bdi>` : `<bdi dir="rtl" class="ar-text">${esc(s.name_ar)}</bdi>`}</div>
          </div>
          <div class="sri-tags">
            <span class="tag ${bCls}">${ltr(`AI (${s.group})`)}</span>
            <span class="tag tag-neutral">${ltr(s.id)}</span>
          </div>
        </button>
      `;
    }).join('');
    resultsBox.classList.add('open');

    resultsBox.querySelectorAll('.sri-btn').forEach((btn) => {
      btn.addEventListener('click', () => selectStudent(btn.getAttribute('data-sid')));
    });
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const first = resultsBox.querySelector('.sri-btn');
      if (first) {
        e.preventDefault();
        selectStudent(first.getAttribute('data-sid'));
      }
    }
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.remove('visible');
    resultsBox.classList.remove('open');
    state.selectedStudentId = null;
    localStorage.removeItem('nvu_last_student');
    document.getElementById('studentDashboard').classList.remove('visible');
    document.getElementById('emptyState').style.display = '';
    searchInput.focus();
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box-wrap')) resultsBox.classList.remove('open');
    if (state.openDropdown && !e.target.closest('.cselect')) {
      state.openDropdown = null;
      renderCustomFilters();
    }
  });

  document.querySelectorAll('.nav-tab').forEach((btn) => {
    btn.addEventListener('click', () => switchTab(btn.getAttribute('data-tab')));
  });

  document.getElementById('goGuideBtn').addEventListener('click', () => switchTab('guide'));
  document.getElementById('homeBrowseGroupsBtn').addEventListener('click', () => switchTab('groups'));
  document.getElementById('homeGuideFilesBtn').addEventListener('click', () => switchTab('guide'));

  document.getElementById('langToggle').addEventListener('click', () => {
    state.lang = state.lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('nvu_lang', state.lang);
    applyLanguage();
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('nvu_theme', state.theme);
    applyTheme();
  });

  const imgModal = document.getElementById('imgModal');
  document.getElementById('closeModal').addEventListener('click', () => imgModal.classList.remove('open'));
  imgModal.addEventListener('click', (e) => { if (e.target === imgModal) imgModal.classList.remove('open'); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      imgModal.classList.remove('open');
      if (state.openDropdown) {
        state.openDropdown = null;
        renderCustomFilters();
      }
    }
  });

  // ---------- Init ----------
  applyTheme();
  applyLanguage();
})();
