// Field Trials field report: the feedback widget for /games/. Loaded only
// while FEEDBACK_WIRED is true in src/pages/games.astro; hidden until a real
// endpoint is wired (2026-10-29).

// Field Trials feedback widget. One shared script wires every
// .feedback-box on the page against its own data-game / data-endpoint.
// If the endpoint is unreachable (placeholder URL, worker not deployed
// yet, network hiccup), each box degrades independently to a quiet
// status line and never shows a broken form.
interface FeedbackComment {
  id?: number;
  name?: string | null;
  body: string;
  created?: string;
}

function formatDate(iso?: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function renderComments(listEl: HTMLOListElement, comments: FeedbackComment[]) {
  listEl.textContent = '';
  if (!comments.length) {
    const empty = document.createElement('li');
    empty.className = 'feedback-empty';
    empty.textContent = 'No feedback yet — be the first.';
    listEl.appendChild(empty);
    return;
  }
  for (const c of comments) {
    const li = document.createElement('li');
    li.className = 'feedback-comment';

    const meta = document.createElement('p');
    meta.className = 'feedback-comment-meta';
    const who = c.name && c.name.trim() ? c.name.trim() : 'Anonymous';
    const when = formatDate(c.created);
    meta.textContent = when ? `${who} · ${when}` : who;

    const body = document.createElement('p');
    body.className = 'feedback-comment-body';
    body.textContent = c.body;

    li.appendChild(meta);
    li.appendChild(body);
    listEl.appendChild(li);
  }
}

function degrade(statusEl: HTMLElement, listEl: HTMLElement, formEl: HTMLElement) {
  statusEl.textContent = 'Feedback wire not yet connected.';
  statusEl.hidden = false;
  listEl.hidden = true;
  formEl.hidden = true;
}

async function init() {
  // ONE field-report box for the whole cabinet (Ray, 2026-08-12): the game
  // dropdown replaces the old per-panel boxes; selecting a cartridge files
  // the report under that game automatically.
  const box = document.querySelector<HTMLElement>('.feedback-box');
  const gameSelect = document.querySelector<HTMLSelectElement>('#fr-game');
  if (!box || !gameSelect) return;

  const endpoint = box.dataset.endpoint;
  const statusEl = box.querySelector<HTMLElement>('.feedback-status');
  const listEl = box.querySelector<HTMLOListElement>('.feedback-list');
  const formEl = box.querySelector<HTMLFormElement>('.feedback-form');
  const noteEl = box.querySelector<HTMLElement>('.feedback-note');
  const submitEl = box.querySelector<HTMLButtonElement>('.feedback-submit');
  if (!endpoint || !statusEl || !listEl || !formEl || !noteEl || !submitEl) return;

  let game = gameSelect.value;
  let loadSeq = 0;

  const fetchThread = async (id: string): Promise<FeedbackComment[]> => {
    const res = await fetch(`${endpoint}/comments?game=${encodeURIComponent(id)}`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  };

  // The first load gates degrade — endpoint unreachable means the whole
  // plate goes quiet, never broken.
  try {
    renderComments(listEl, await fetchThread(game));
  } catch {
    degrade(statusEl, listEl, formEl);
    gameSelect.disabled = true;
    return;
  }

  const showThread = async (id: string) => {
    game = id;
    const seq = ++loadSeq;
    try {
      const comments = await fetchThread(id);
      if (seq === loadSeq) renderComments(listEl, comments);
    } catch {
      if (seq !== loadSeq) return;
      listEl.textContent = '';
      const li = document.createElement('li');
      li.className = 'feedback-empty';
      li.textContent = "Couldn't load this thread right now.";
      listEl.appendChild(li);
    }
  };

  gameSelect.addEventListener('change', () => {
    void showThread(gameSelect.value);
  });

  document.getElementById('cabinet')?.addEventListener('cab:select', ((e: Event) => {
    const id = (e as CustomEvent).detail?.id as string | undefined;
    if (!id || id === gameSelect.value) return;
    if (![...gameSelect.options].some((o) => o.value === id)) return;
    gameSelect.value = id;
    void showThread(id);
  }) as EventListener);

  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(formEl);
    const honeypot = String(data.get('website') || '').trim();
    const body = String(data.get('body') || '').trim();
    const name = String(data.get('name') || '').trim();

    if (!body) {
      noteEl.textContent = 'Say something first.';
      noteEl.classList.add('is-error');
      return;
    }

    submitEl.disabled = true;
    noteEl.textContent = 'Sending…';
    noteEl.classList.remove('is-error');

    try {
      const res = await fetch(`${endpoint}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ game, name: name || undefined, body, website: honeypot }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      const created: FeedbackComment = await res.json();

      const emptyLi = listEl.querySelector('.feedback-empty');
      if (emptyLi) emptyLi.remove();

      const li = document.createElement('li');
      li.className = 'feedback-comment';
      const meta = document.createElement('p');
      meta.className = 'feedback-comment-meta';
      meta.textContent = `${name || 'Anonymous'} · just now`;
      const bodyEl = document.createElement('p');
      bodyEl.className = 'feedback-comment-body';
      bodyEl.textContent = created.body ?? body;
      li.appendChild(meta);
      li.appendChild(bodyEl);
      listEl.insertBefore(li, listEl.firstChild);

      formEl.reset();
      noteEl.textContent = "Thanks — that's in.";
    } catch {
      noteEl.textContent = "Couldn't send that. Try again in a bit.";
      noteEl.classList.add('is-error');
    } finally {
      submitEl.disabled = false;
    }
  });
}

init();
