/* Valeria & Hugo — interacciones. JS puro; GSAP/ScrollTrigger solo para los reveals. */
(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Cuenta atrás (sábado 15 de mayo de 2027, 12:30h, hora de Barcelona = CEST) ---------- */
  var target = new Date('2027-05-15T12:30:00+02:00').getTime();
  var cd = { d: $('[data-cd="d"]'), h: $('[data-cd="h"]'), m: $('[data-cd="m"]'), s: $('[data-cd="s"]') };
  function pad(n, l) { n = String(n); while (n.length < l) n = '0' + n; return n; }
  function tick() {
    var diff = Math.max(0, target - Date.now());
    var s = Math.floor(diff / 1000);
    cd.d.textContent = pad(Math.floor(s / 86400), 3);
    cd.h.textContent = pad(Math.floor(s % 86400 / 3600), 2);
    cd.m.textContent = pad(Math.floor(s % 3600 / 60), 2);
    cd.s.textContent = pad(s % 60, 2);
    if (diff === 0) { $('#cd-done').hidden = false; }
  }
  tick(); setInterval(tick, 1000);
  /* Un único barrido plateado al cargar (en táctil no hay hover) */
  var frame = $('#countdown');
  if (!reduce) setTimeout(function () { frame.classList.add('sweep'); }, 900);

  /* ---------- Header y menú ---------- */
  var header = $('#site-header'), menu = $('#menu'), btn = $('#menu-btn');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  function setMenu(open) {
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', String(!open));
    header.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) { var f = $('a', menu); if (f) f.focus({ preventScroll: true }); }
  }
  btn.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); btn.focus(); }
  });
  window.matchMedia('(min-width: 1200px)').addEventListener('change', function (m) { if (m.matches) setMenu(false); });

  /* Enlace activo en la navegación */
  var navLinks = $$('.nav a.navlink');
  if ('IntersectionObserver' in window) {
    var secs = $$('main > section[id]');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + en.target.id)); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach(function (s) { io.observe(s); });
  }

  /* ---------- Reveals con GSAP (contenidos: fade + slide-up 400ms) ---------- */
  function initReveal() {
    if (reduce || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.add('js-reveal');
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 92%', once: true,
      onEnter: function (els) {
        gsap.to(els, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.08, overwrite: true });
      }
    });
    /* Nuestra historia: entrada propia, más elaborada (el único pasaje que la lleva) */
    $$('.hito').forEach(function (h) {
      var img = $('.hito-img', h), pic = $('img', h), txt = $$('.hito-txt > *', h);
      var tl = gsap.timeline({ scrollTrigger: { trigger: h, start: 'top 72%', once: true }, defaults: { ease: 'power3.out' } });
      tl.to(img, { clipPath: 'inset(0 0 0% 0)', duration: 0.9 }, 0)
        .to(pic, { scale: 1, duration: 1.1 }, 0)
        .to(txt, { opacity: 1, y: 0, duration: 0.5, stagger: 0.09 }, 0.35);
      h.classList.add('hito-armed');
      ScrollTrigger.create({ trigger: h, start: 'top 72%', once: true, onEnter: function () { h.classList.add('hito-in'); } });
    });
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  }
  if (document.readyState === 'complete' || document.readyState === 'interactive') initReveal();
  else document.addEventListener('DOMContentLoaded', initReveal);

  /* Mapas: el iframe no captura el scroll hasta que se pulsa */
  $$('.map').forEach(function (m) {
    m.addEventListener('click', function () { m.classList.add('active'); });
    m.addEventListener('mouseleave', function () { m.classList.remove('active'); });
  });
  document.addEventListener('touchstart', function (e) { $$('.map.active').forEach(function (m) { if (!m.contains(e.target)) m.classList.remove('active'); }); }, { passive: true });

  /* ---------- FAQ ---------- */
  $$('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var open = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', String(!open));
      $('#' + q.getAttribute('aria-controls')).classList.toggle('open', !open);
    });
  });

  /* ---------- Galería + lightbox ---------- */
  var gal = $('#gallery'), shots = $$('button', gal), lb = $('#lb'), lbImg = $('#lb-img'), lbCap = $('#lb-cap');
  var cur = 0, lastFocus = null;
  function show(i) {
    cur = (i + shots.length) % shots.length;
    var im = $('img', shots[cur]);
    lbImg.src = im.currentSrc || im.src; lbImg.alt = im.alt; lbCap.textContent = im.alt + ' · ' + (cur + 1) + ' / ' + shots.length;
  }
  function openLb(i) {
    lastFocus = document.activeElement; show(i);
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
    $('.lb-close', lb).focus();
  }
  function closeLb() {
    lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  shots.forEach(function (b, i) { b.addEventListener('click', function () { openLb(i); }); b.setAttribute('aria-label', 'Ampliar foto ' + (i + 1) + ' de ' + shots.length); });
  $('.lb-close', lb).addEventListener('click', closeLb);
  $('.lb-prev', lb).addEventListener('click', function () { show(cur - 1); });
  $('.lb-next', lb).addEventListener('click', function () { show(cur + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowLeft') show(cur - 1);
    else if (e.key === 'ArrowRight') show(cur + 1);
    else if (e.key === 'Tab') {
      var f = $$('button', lb), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  var sx = null;
  lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    if (sx === null) return;
    var dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
  });
  /* Contador del carrusel móvil */
  var gc = $('#gal-count');
  gal.addEventListener('scroll', function () {
    var w = shots[0].offsetWidth + 12;
    gc.textContent = (Math.min(shots.length, Math.round(gal.scrollLeft / w) + 1)) + ' / ' + shots.length + ' · desliza';
  }, { passive: true });

  /* ---------- IBAN: copiar ---------- */
  var copyBtn = $('#copy-iban');
  copyBtn.addEventListener('click', function () {
    var txt = $('#iban').textContent, lab = $('#copy-lab');
    function done() { lab.textContent = 'Copiado'; setTimeout(function () { lab.textContent = 'Copiar'; }, 1800); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, done); else done();
  });

  /* ---------- RSVP ---------- */
  var form = $('#rsvp-form'), ok = $('#rsvp-ok');
  var out = $('#acomp-out'), hid = $('#acompanantes'), minus = $('#acomp-minus'), plus = $('#acomp-plus'), stepper = $('#stepper');
  var n = 0;
  function setN(v) {
    n = Math.max(0, Math.min(4, v)); out.textContent = n; hid.value = n;
    minus.disabled = n === 0 || stepper.classList.contains('is-off'); plus.disabled = n === 4 || stepper.classList.contains('is-off');
  }
  minus.addEventListener('click', function () { setN(n - 1); });
  plus.addEventListener('click', function () { setN(n + 1); });
  setN(0);
  $$('input[name="asistencia"]').forEach(function (r) {
    r.addEventListener('change', function () {
      var no = r.value.indexOf('No') === 0 && r.checked;
      stepper.classList.toggle('is-off', no);
      if (no) { n = 0; }
      setN(n); $('#e-asiste').classList.remove('show');
    });
  });
  function setErr(id, field, on) {
    $('#' + id).classList.toggle('show', on);
    if (field) field.setAttribute('aria-invalid', on ? 'true' : 'false');
  }
  function validate() {
    var bad = [], nombre = $('#nombre');
    var okName = nombre.value.trim().split(/\s+/).filter(Boolean).length >= 2;
    setErr('e-nombre', nombre, !okName); if (!okName) bad.push(nombre);
    var chosen = $('input[name="asistencia"]:checked');
    setErr('e-asiste', null, !chosen); if (!chosen) bad.push($('input[name="asistencia"]'));
    return { bad: bad, chosen: chosen, nombre: nombre.value.trim() };
  }
  $('#nombre').addEventListener('input', function () { if (this.getAttribute('aria-invalid') === 'true' && this.value.trim().split(/\s+/).length >= 2) setErr('e-nombre', this, false); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    $('#e-send').classList.remove('show');
    var v = validate();
    if (v.bad.length) { v.bad[0].focus(); return; }
    if ($('input[name="_honey"]', form).value) return;
    var submit = $('#rsvp-submit'); submit.disabled = true; submit.style.opacity = '.6';
    var data = new FormData(form);
    /* Envío real sin backend: FormSubmit en modo AJAX con el mismo email del action */
    var endpoint = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    /* El email de ejemplo usa el TLD reservado .example: FormSubmit no puede entregar ahí.
       En la demo se simula el envío; con un email real (sin .example) el fetch es real. */
    if (/\.example$/.test(form.action)) { setTimeout(function () { success(v); }, 600); return; }
    fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
      .then(function (j) { if (j && String(j.success) === 'false') throw new Error(j.message || 'rechazado'); success(v); })
      .catch(function () { submit.disabled = false; submit.style.opacity = ''; $('#e-send').classList.add('show'); });
  });
  function success(v) {
    var first = v.nombre.split(/\s+/)[0], yes = v.chosen.value.indexOf('Sí') === 0;
    $('#ok-title').textContent = yes ? 'Gracias, ' + first : 'Gracias por avisarnos, ' + first;
    $('#ok-text').textContent = yes
      ? 'Hemos recibido tu confirmación. Te esperamos el sábado 15 de mayo de 2027: ceremonia a las 12:30h en los Jardines de Pedralbes y celebración a las 14:00h en el Palacete Vilanova.'
      : 'Sentimos que no puedas acompañarnos. Hemos guardado tu respuesta y te llevaremos con nosotros ese día. Si cambia algo, escríbenos.';
    form.style.display = 'none'; ok.classList.add('show'); ok.focus({ preventScroll: true });
    ok.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
  }
  $('#rsvp-again').addEventListener('click', function () {
    form.reset(); setN(0); stepper.classList.remove('is-off'); setN(0);
    var s = $('#rsvp-submit'); s.disabled = false; s.style.opacity = '';
    ok.classList.remove('show'); form.style.display = ''; $('#nombre').focus();
  });
})();
