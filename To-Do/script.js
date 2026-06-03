const LIST_COLORS = [
  "#c0845a",
  "#6b8f6b",
  "#5a7a8f",
  "#b06060",
  "#8a7aaf",
  "#a08060",
];
const TAG_CLASSES = [
  "tag-warm",
  "tag-green",
  "tag-blue",
  "tag-amber",
  "tag-red",
];

let lists = [
  { id: 1, name: "Personal", color: "#c0845a" },
  { id: 2, name: "Work", color: "#5a7a8f" },
  { id: 3, name: "Health", color: "#6b8f6b" },
];

let todos = [
  {
    id: 1,
    listId: 1,
    title: "Morning journaling",
    start: "2026-06-03",
    end: "2026-06-03",
    tags: ["habit"],
    priority: "low",
    done: false,
  },
  {
    id: 2,
    listId: 1,
    title: "Call mom",
    start: "2026-06-05",
    end: "2026-06-05",
    tags: ["family"],
    priority: "mid",
    done: false,
  },
  {
    id: 3,
    listId: 2,
    title: "Review pull request",
    start: "2026-06-03",
    end: "2026-06-04",
    tags: ["dev"],
    priority: "high",
    done: false,
  },
  {
    id: 4,
    listId: 2,
    title: "Prepare slides",
    start: "2026-06-04",
    end: "2026-06-05",
    tags: ["meeting"],
    priority: "mid",
    done: true,
  },
  {
    id: 5,
    listId: 3,
    title: "Evening walk 30 min",
    start: "2026-06-03",
    end: "2026-06-07",
    tags: ["fitness"],
    priority: "low",
    done: false,
  },
  {
    id: 6,
    listId: 3,
    title: "Dentist appointment",
    start: "2026-06-10",
    end: "2026-06-10",
    tags: ["health"],
    priority: "high",
    done: false,
  },
];

let activeList = 1;
let calYear = 2026,
  calMonth = 5;
let filterDate = null;
let sortMode = 0;
const SORT_MODES = ["Date", "Priority", "Title"];
let nextId = 20;
let activePriority = "mid";

const tagColorMap = {};
const STORAGE_KEY = "todo-dashboard-state";

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const state = JSON.parse(saved);
    if (Array.isArray(state.lists)) lists = state.lists;
    if (Array.isArray(state.todos)) todos = state.todos;
    if (Number.isInteger(state.activeList)) activeList = state.activeList;
    if (Number.isInteger(state.nextId)) nextId = state.nextId;
  } catch (error) {
    console.warn("Saved todo data could not be loaded.", error);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ lists, todos, activeList, nextId })
  );
}

function getTagClass(tag) {
  if (!tagColorMap[tag]) {
    const idx = Object.keys(tagColorMap).length % TAG_CLASSES.length;
    tagColorMap[tag] = TAG_CLASSES[idx];
  }
  return tagColorMap[tag];
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function renderLists() {
  const c = document.getElementById("list-container");
  c.innerHTML = "";
  lists.forEach((l) => {
    const count = todos.filter((t) => t.listId === l.id && !t.done).length;
    const btn = document.createElement("button");
    btn.className = "list-btn" + (l.id === activeList ? " active " : "");
    btn.innerHTML = `<span class="list-dot" style="background:${l.color}"></span>${l.name}<span class="list-count">${count}</span>`;
    btn.onclick = () => {
      activeList = l.id;
      renderAll();
    };
    c.appendChild(btn);
  });
}

function renderTodos() {
  const list = lists.find((l) => l.id === activeList);
  document.getElementById("page-title").textContent = list
    ? list.name
    : "Tasks";
  document.getElementById("sort-label").textContent = SORT_MODES[sortMode];

  const wrap = document.getElementById("todos-wrap");
  let items = todos.filter((t) => t.listId === activeList);

  if (filterDate) {
    items = items.filter((t) => t.start <= filterDate && t.end >= filterDate);
  }

  if (sortMode === 0) items.sort((a, b) => a.start.localeCompare(b.start));
  else if (sortMode === 1) {
    const p = { high: 0, mid: 1, low: 2 };
    items.sort((a, b) => p[a.priority] - p[b.priority]);
  } else items.sort((a, b) => a.title.localeCompare(b.title));

  if (!items.length) {
    wrap.innerHTML = `<div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
        <span style="font-size:13px">${filterDate ? "No todos on this date" : "No todos yet - add one!"}</span>
        </div>`;
    return;
  }

  const pending = items.filter((t) => !t.done);
  const done = items.filter((t) => t.done);

  let html = "";

  if (pending.length) {
    html += `<div class="section-heading">Pending (${pending.length})</div>`;
    html += pending.map(cardHTML).join("");
  }

  if (done.length) {
    html += `<div class="section-heading" style="margin-top:10px">Completed (${done.length})</div>`;
    html += done.map(cardHTML).join("");
  }

  wrap.innerHTML = html;
}

function cardHTML(t) {
  const isOverdue = !t.done && t.end < today();
  const dateStr =
    t.end && t.end !== t.start ? `${t.start} -> ${t.end}` : t.start;
  const tags = t.tags
    .map((tg) => `<span class="tag ${getTagClass(tg)}">${tg}</span>`)
    .join("");
  return `
        <div class="todo-card${t.done ? " done" : ""}">
            <button class="check-btn" onclick="toggleDone(${t.id})" title="Toggle complete">${t.done ? "&#10003;" : ""}</button>
            <div class="todo-body">
                <div class="todo-title">${t.title}</div>
                    <div class="todo-meta">
                    <span class="todo-date" style="${isOverdue ? "color:var(--red)" : ""}">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    ${dateStr}${isOverdue ? " - overdue" : ""}
                    </span>
                    <span class="priority-pill p-${t.priority}">${t.priority}</span>
                    ${tags}
                    </div>
                </div>
            <div class="todo-actions">
            <button class="icon-btn" onclick="deleteTodo(${t.id})" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                </button>
            </div>
        </div>`;
}

function renderCalendar() {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("cal-title").textContent =
    `${MONTHS[calMonth]} ${calYear}`;

  const grid = document.getElementById("cal-grid");
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  let html = days.map((d) => `<div class="cal-dow">${d}</div>`).join("");

  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const td = today();
  const listTodos = todos.filter((t) => t.listId === activeList);

  for (let i = 0; i < firstDay; i++) html += `<div></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const hasTodo = listTodos.some((t) => t.start <= ds && t.end >= ds);
    const isSel = filterDate === ds;
    const isToday = td === ds;
    const cls = [
      "cal-day",
      isToday && "today",
      isSel && "selected",
      hasTodo && "has-todo",
    ]
      .filter(Boolean)
      .join(" ");
    html += `<div class="${cls}" onclick="setFilter('${ds}')">${d}</div>`;
  }

  grid.innerHTML = html;

  const fi = document.getElementById("filter-info");
  fi.innerHTML = filterDate
    ? `<span class="filter-badge" onclick="clearFilter()" title="Click to clear">Date: ${filterDate} &times;</span>`
    : "";
}

function renderStats() {
  const items = todos.filter((t) => t.listId === activeList);
  const td = today();
  const total = items.length;
  const done = items.filter((t) => t.done).length;
  const pending = items.filter((t) => !t.done).length;
  const overdue = items.filter((t) => !t.done && t.end < td).length;

  document.getElementById("s-total").textContent = total;
  document.getElementById("s-done").textContent = done;
  document.getElementById("s-pending").textContent = pending;
  document.getElementById("s-overdue").textContent = overdue;

  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("progress-bar").style.width = pct + "%";
  document.getElementById("progress-label").textContent =
    `${done} of ${total} done (${pct}%)`;
}

function renderAll() {
  renderLists();
  renderTodos();
  renderCalendar();
  renderStats();
  saveState();
}

function toggleDone(id) {
  const t = todos.find((t) => t.id === id);
  if (t) {
    t.done = !t.done;
    renderAll();
  }
}

function deleteTodo(id) {
  if (!confirm("Delete this todo?")) return;
  todos = todos.filter((t) => t.id !== id);
  renderAll();
}

function setFilter(d) {
  filterDate = filterDate === d ? null : d;
  renderAll();
}

function clearFilter() {
  filterDate = null;
  renderAll();
}
function prevMonth() {
  calMonth--;
  if (calMonth < 0) {
    calMonth = 11;
    calYear--;
  }
  renderCalendar();
}
function nextMonth() {
  calMonth++;
  if (calMonth > 11) {
    calMonth = 0;
    calYear++;
  }
  renderCalendar();
}
function cycleSort() {
  sortMode = (sortMode + 1) % 3;
  renderTodos();
}

function addList() {
  const name = prompt("Enter list name: ");
  if (!name || !name.trim()) return;
  const color = LIST_COLORS[lists.length % LIST_COLORS.length];
  const id = ++nextId;
  lists.push({ id, name: name.trim(), color });
  activeList = id;
  renderAll();
}

let modalEl = null;

function openModal() {
  closeModal();
  activePriority = "mid";

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
  };

  overlay.innerHTML = `<div class="modal" onclick="event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-title">New Todo</div>
        <button class="icon-btn" onclick="closeModal()" style="opacity:.6">&times;</button>
      </div>
 
      <div class="form-group">
        <label class="form-label">Title</label>
        <input class="form-input" id="m-title" type="text" placeholder="What needs to be done?" />
      </div>
 
      <div class="two-col">
        <div class="form-group">
          <label class="form-label">Start date</label>
          <input class="form-input" id="m-start" type="date" />
        </div>
        <div class="form-group">
          <label class="form-label">End date</label>
          <input class="form-input" id="m-end" type="date" />
        </div>
      </div>
 
      <div class="form-group">
        <label class="form-label">Priority</label>
        <div class="priority-row">
          <button class="p-choice" id="pc-high" onclick="selP('high')">High</button>
          <button class="p-choice sel-mid" id="pc-mid"  onclick="selP('mid')">Mid</button>
          <button class="p-choice" id="pc-low"  onclick="selP('low')">Low</button>
        </div>
      </div>
 
      <div class="form-group">
        <label class="form-label">Tags <span style="font-weight:400;color:var(--text3)">(comma separated)</span></label>
        <input class="form-input" id="m-tags" type="text" placeholder="e.g. work, urgent, health" />
      </div>
 
      <div class="modal-footer">
        <button class="btn-cancel-modal" onclick="closeModal()">Cancel</button>
        <button class="btn-add-modal" onclick="submitTodo()">Add Todo</button>
      </div>
    </div>`;

      document.body.appendChild(overlay);
    modalEl = overlay;
 
    const td = today();
    document.getElementById('m-start').value = td;
    document.getElementById('m-end').value   = td;
    setTimeout(() => document.getElementById('m-title').focus(), 50);
}

function selP(p) {
    activePriority = p;
    ['high','mid','low'].forEach(x => {
        document.getElementById('pc-' + x).className = 'p-choice' + (x === p ? ' sel-' + x : '');
    });
}

function closeModal() {
    if (modalEl) { modalEl.remove(); modalEl = null; }
}

function submitTodo() {
    const title = document.getElementById('m-title').value.trim();
    if (!title) { document.getElementById('m-title').focus(); return; }

    const start = document.getElementById('m-start').value || today();
    const end = document.getElementById('m-end').value || start;
    const tagStr = document.getElementById('m-tags').value;
    const tags = tagStr.split(',').map(t => t.trim()).filter(Boolean);

    todos.push({
        id: ++nextId,
        listId: activeList,
        title, 
        start,
        end: end < start ? start : end,
        tags: tags.length ? tags : ['general'],
        priority: activePriority,
        done: false,
    });

    closeModal();
    renderAll();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') { e.preventDefault(); openModal(); } 
});

loadState();
renderAll();
