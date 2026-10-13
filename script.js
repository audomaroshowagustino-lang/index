(() => {
'use strict';

/* =====================================================================
   Requiere datos.js con:  const rawTransactions = [ {id, fecha, mes, ...}, ... ];
   Total anual, tops, tendencia, barras y dona se calculan de ahí.
   ===================================================================== */
const datos = typeof rawTransactions !== 'undefined' ? rawTransactions : [];
if (!datos.length) console.error('No se encontró rawTransactions: revisa que datos.js cargue antes que script.js.');

const MESES_FULL = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
const MESES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

// Nombres distintos del mismo cliente (variante: nombre oficial). Pon {} para desactivar.
const ALIAS = {
    'PYRGOS': 'GRUPO PYRGOS',
    'ALUPREMIEER': 'ALUPREMIER',
    'JAIME NIGMO': 'ING JAIME NIGMO',
    'RODRIGO': 'CONTRATISTA RODRIGO'
    // 'CONTRATISTA BONATTI ALEJANDRO': 'BONATTI SPA'   <- quita las // si es el mismo cliente
};
const VISTA = { 'KEKEN': 'KEKÉN' }; // cómo se muestra un nombre en pantalla
const GRUPO_MAYO = ['KEKEN', 'HACIENDA XCANATUN', 'SERVICIOS INMOBILIARIOS TURISTICOS'];

// Vendedores del VDT. Javier (2026) sale del dataset; el resto está aquí.
// [mes, Carlos, Javier (null = tomar del dataset), Aarón]
const VDT = [
    ["Ago '25", 25030.17, 62105.17, 429282.76],
    ["Sep '25", 23009.48, 105939.66, 507389.66],
    ["Oct '25", 46025.00, 157823.28, 298976.72],
    ["Nov '25", 98744.83, 132137.07, 900280.17],
    ["Dic '25", 96914.66, 62985.34, 268767.72],
    ["Ene '26", 44329.31, null, 151835.34],
    ["Feb '26", 75615.52, null, 582231.90],
    ["Mar '26", 23277.59, null, 952066.38],
    ["Abr '26", 35462.07, null, 337859.48],
    ["May '26", 77859.48, null, 314118.97],
    ["Jun '26", 88008.62, null, 363098.28],
    ["Jul '26", 80360.34, null, 566065.52],
    ["Ago '26", 59389.66, null, 1459627.59],
    ["Sep '26", 110454.31, null, 337925.86]
];
const SERIES = [
    { nombre: 'Carlos', color: '#9b59b6', col: 1, foto: 'IMAGENES/carlos.jpeg' },
    { nombre: 'Javier', color: '#f1c40f', col: 2, foto: 'IMAGENES/javier.jpeg' },
    { nombre: 'Aarón',  color: '#e74c3c', col: 3, foto: 'IMAGENES/aaron.jpeg' }
];

/* ===================== Utilidades ===================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const NS = 'http://www.w3.org/2000/svg';
const fmt = n => '$' + Math.round(n).toLocaleString('en-US');
const fmt2 = n => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const miles = n => '$' + Math.floor(n / 1000) + 'k';
const cap = s => s[0] + s.slice(1).toLowerCase();
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const canon = c => ALIAS[c] || c;
const vista = c => VISTA[c] || c;

function el(tag, attrs = {}, texto) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (texto != null) n.textContent = texto;
    return n;
}

// Curva suave sin sobreimpulso
function curva(p) {
    let d = `M ${p[0].x} ${p[0].y}`;
    for (let i = 1; i < p.length; i++) {
        const mx = (p[i - 1].x + p[i].x) / 2;
        d += ` C ${mx} ${p[i - 1].y}, ${mx} ${p[i].y}, ${p[i].x} ${p[i].y}`;
    }
    return d;
}

function conectarTooltip(contenedor, tip, selector, texto) {
    const alMover = e => {
        const nodo = e.target.closest(selector);
        if (!nodo) { tip.style.opacity = '0'; return; }
        const r = contenedor.getBoundingClientRect();
        tip.textContent = texto(nodo);
        tip.style.left = (e.clientX - r.left) + 'px';
        tip.style.top = (e.clientY - r.top - 15) + 'px';
        tip.style.opacity = '1';
    };
    contenedor.addEventListener('pointermove', alMover);
    contenedor.addEventListener('pointerdown', alMover);
    contenedor.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') tip.style.opacity = '0'; });
}

/* ===================== Agregados desde el dataset ===================== */
const ultimo = Math.max(...datos.map(t => MESES_FULL.indexOf(t.mes))); // último mes con datos = mes en curso
const mesesN = ultimo + 1;
const totales = Array(mesesN).fill(0);                 // sin IVA por mes
const porMes = Array.from({ length: mesesN }, () => ({}));
const porCuenta = {};
let totalAnual = 0;

datos.forEach(t => {
    const m = MESES_FULL.indexOf(t.mes), c = canon(t.cuenta);
    totales[m] += t.montoSinIva;
    totalAnual += t.montoSinIva;
    porMes[m][c] = (porMes[m][c] || 0) + t.montoSinIva;
    porCuenta[c] = (porCuenta[c] || 0) + t.montoSinIva;
});
const top3 = obj => Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, 3);
const etiquetaMes = i => MESES[i] + (i === ultimo ? '*' : '');

/* ===================== Estado VDT ===================== */
const X_PASO = 65;
let paso = 0;
let timer = null;
const grupos = [];
const btnPlay = $('#btnPlay');
const btnReset = $('#btnReset');
const timeline = $('#videoTimeline');
const timelineLabel = $('#timelineLabel');

/* ===================== Pestañas ===================== */
const tabs = $$('.tab-button');
const paneles = $$('.tab-content');

function activarTab(btn) {
    tabs.forEach(b => {
        const on = b === btn;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on);
        b.tabIndex = on ? 0 : -1;
    });
    paneles.forEach(p => p.classList.toggle('active', p.id === btn.dataset.target));
    $$('video').forEach(v => v.pause());
    pausar();
}
tabs.forEach(b => b.addEventListener('click', () => activarTab(b)));
$('.tabs').addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    const sig = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
    sig.focus();
    activarTab(sig);
});

/* ===================== 1. Resumen anual ===================== */
function pintarResumen() {
    $('#montoAnual').textContent = fmt(totalAnual);
    $('#rangoAnual').textContent = `Total consolidado de Enero a ${cap(MESES_FULL[ultimo])} 2026`;
    top3(porCuenta).forEach(([c, v], i) => {
        $(`#anual-c${i + 1}-nombre`).textContent = `${i + 1}. ${vista(c)}`;
        $(`#anual-c${i + 1}-monto`).textContent = fmt(v);
    });
}

/* ===================== 2. Tendencia mensual ===================== */
function dibujarTendencia() {
    const svg = $('#svgTendencia');
    const techo = Math.ceil(Math.max(...totales) / 100000) * 100000;
    const y = v => 250 - v / techo * 235;
    const pasoX = mesesN > 1 ? 800 / (mesesN - 1) : 0;

    for (let v = techo; v >= 100000; v -= 100000) {
        const meta = v === 100000, yy = y(v);
        svg.append(
            el('text', { x: -15, y: yy + 4, class: meta ? 'etiqueta-100k' : 'axis-label', 'text-anchor': 'end' }, (v / 1000) + 'k'),
            el('line', { x1: 0, y1: yy, x2: 800, y2: yy, class: meta ? 'linea-100k' : 'grid-line' })
        );
        if (meta) svg.append(el('text', { x: 810, y: yy + 4, class: 'etiqueta-100k' }, 'Meta Base'));
    }
    svg.append(
        el('text', { x: -15, y: 254, class: 'axis-label', 'text-anchor': 'end' }, '0'),
        el('line', { x1: 0, y1: 250, x2: 800, y2: 250, class: 'axis-base' })
    );

    const pts = totales.map((v, i) => ({ x: i * pasoX, y: y(v) }));
    const linea = pts.length > 1 ? curva(pts) : `M 0 ${pts[0].y}`;
    svg.append(
        el('path', { d: `M 0 250 L${linea.slice(1)} L ${pts[pts.length - 1].x} 250 Z`, fill: 'rgba(52,152,219,.15)' }),
        el('path', { d: linea, fill: 'none', stroke: '#2980b9', 'stroke-width': 4 })
    );
    pts.forEach((p, i) => svg.append(
        el('circle', { cx: p.x, cy: p.y, r: 7, fill: '#3498db', class: 'punto-grafica', 'data-val': fmt(totales[i]) + (i === ultimo ? ' (mes en curso)' : '') }),
        el('text', { x: p.x, y: 275, class: 'axis-label', 'text-anchor': 'middle' }, etiquetaMes(i))
    ));
    conectarTooltip($('#contenedor-svg'), $('#tooltip-svg'), '.punto-grafica', n => n.getAttribute('data-val'));
}

/* ===================== 3. Mayo ===================== */
function pintarMayo() {
    const m = MESES_FULL.indexOf('MAYO');
    if (m > ultimo || !totales[m]) return;
    const grupo = GRUPO_MAYO.reduce((a, c) => a + (porMes[m][c] || 0), 0);
    const pct = grupo / totales[m] * 100;
    $('.donut-chart').style.setProperty('--pct', pct.toFixed(2) + '%');
    $('#mayoTotal').textContent = miles(totales[m]);
    $('#mayoGrupo').textContent = `${fmt(grupo)} (${pct.toFixed(1)}%)`;
    $('#mayoResto').textContent = `${fmt(totales[m] - grupo)} (${(100 - pct).toFixed(1)}%)`;
}

/* ===================== 4. Top mensual ===================== */
function dibujarBarras() {
    const cont = $('#barras');
    const max = Math.max(...totales) * 1.04;
    totales.forEach((v, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'bar-col';
        b.dataset.index = i;
        b.setAttribute('aria-label', `${MESES[i]}: ${fmt(v)}. Ver top 3 clientes`);
        b.innerHTML = `<span class="bar-tooltip">${miles(v)}</span>` +
            `<span class="bar" style="height:${(v / max * 100).toFixed(2)}%"></span>` +
            `<span class="bar-label">${etiquetaMes(i)}</span>`;
        cont.append(b);
    });
    cont.addEventListener('click', e => {
        const b = e.target.closest('.bar-col');
        if (b) seleccionarMes(+b.dataset.index);
    });
}

function seleccionarMes(i) {
    $$('.bar-col').forEach((b, j) => {
        b.classList.toggle('selected', j === i);
        b.setAttribute('aria-pressed', j === i);
    });
    $('#tituloClientes').textContent = `Top 3 Clientes - ${MESES[i]} 2026${i === ultimo ? ' (parcial)' : ''}`;
    const top = top3(porMes[i]);
    for (let n = 0; n < 3; n++) {
        $(`#cliente${n + 1}-nombre`).textContent = top[n] ? `${n + 1}. ${vista(top[n][0])}` : '';
        $(`#cliente${n + 1}-monto`).textContent = top[n] ? fmt(top[n][1]) : '';
    }
}

/* ===================== 5 y 6. Carruseles y tabla técnica ===================== */
function iniciarCarruseles() {
    $$('.carousel-wrapper').forEach(w => {
        const track = $('.carousel-track', w);
        const total = track.children.length;
        let actual = 0, x0 = null;
        const ir = n => {
            $$('video', track).forEach(v => v.pause());
            actual = (n + total) % total;
            track.style.transform = `translateX(-${actual * 100}%)`;
        };
        $('.prev-btn', w).addEventListener('click', () => ir(actual - 1));
        $('.next-btn', w).addEventListener('click', () => ir(actual + 1));
        track.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
        track.addEventListener('touchend', e => {
            if (x0 === null) return;
            const dx = e.changedTouches[0].clientX - x0;
            if (Math.abs(dx) > 50) ir(actual + (dx < 0 ? 1 : -1));
            x0 = null;
        }, { passive: true });
    });
}

function iniciarComparativa() {
    $$('.comp-fila[data-desc]').forEach(fila => {
        const desc = document.createElement('div');
        desc.className = 'param-desc';
        desc.textContent = fila.dataset.desc;
        fila.append(desc);
        fila.tabIndex = 0;
        fila.setAttribute('role', 'button');
        fila.setAttribute('aria-expanded', 'false');
        const alternar = () => fila.setAttribute('aria-expanded', fila.classList.toggle('activo'));
        fila.addEventListener('click', alternar);
        fila.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); alternar(); }
        });
    });
}

/* ===================== 7. Cronología VDT ===================== */
// Escala partida: bajo 500k, 25k = 15 px; sobre 500k, 200k = 21 px
function yVdt(v) {
    if (v <= 500000) return 417 - (v / 500000) * 300;
    return 117 - (Math.min(v - 500000, 1000000) / 1000000) * 105;
}
const etiquetaEje = v => v >= 1e6 ? (v / 1e6) + 'M' : v ? (v / 1e3) + 'k' : '0';
const valorVdt = (fila, i, col) => fila[col] ?? totales[i - 5] ?? 0; // Javier 2026 = dataset

function construirVdt() {
    const svg = $('#svgCronologia');
    const clip = el('clipPath', { id: 'recorte-foto' });
    clip.append(el('circle', { r: 12 }));
    svg.append(el('defs')).append(clip);

    const marcas = [1.5e6, 1.3e6, 1.1e6, 9e5, 7e5, 5e5];
    for (let v = 475e3; v >= 0; v -= 25e3) marcas.push(v);
    marcas.forEach(v => {
        const yy = yVdt(v), meta = v === 1e5;
        const clase = v === 0 ? 'axis-base' : meta ? 'linea-meta' : v <= 5e5 ? 'grid-line fino' : 'grid-line';
        svg.append(
            el('text', { x: -30, y: yy + 4, class: 'axis-label' + (meta ? ' meta' : ''), 'text-anchor': 'end' }, etiquetaEje(v)),
            el('line', { x1: 0, y1: yy, x2: 845, y2: yy, class: clase })
        );
    });

    SERIES.forEach(s => {
        s.path = el('path', { fill: 'none', stroke: s.color, 'stroke-width': 3 });
        svg.append(s.path);
    });

    const capa = el('g');
    svg.append(capa);
    VDT.forEach((fila, i) => {
        const g = el('g', { class: 'mes-grupo' });
        SERIES.forEach(s => {
            const valor = valorVdt(fila, i, s.col);
            const nodo = el('g', {
                class: 'punto-vendedor-hover',
                transform: `translate(${i * X_PASO} ${yVdt(valor)})`,
                'data-nombre': s.nombre, 'data-mes': fila[0], 'data-val': fmt2(valor)
            });
            nodo.append(
                el('circle', { r: 14, fill: s.color, stroke: '#fff', 'stroke-width': 2.5 }),
                el('image', { href: s.foto, x: -12, y: -12, width: 24, height: 24, preserveAspectRatio: 'xMidYMid slice', 'clip-path': 'url(#recorte-foto)' })
            );
            g.append(nodo);
        });
        grupos.push(g);
        capa.append(g);
        svg.append(el('text', { x: i * X_PASO, y: 445, class: 'axis-label', 'text-anchor': 'middle' }, fila[0]));
    });

    $('#leyendaVdt').innerHTML = SERIES.map(s => `<span><i style="--c:${s.color}"></i>${s.nombre}</span>`).join('');
    conectarTooltip($('#contenedor-cronologia'), $('#tooltip-vdt'), '.punto-vendedor-hover',
        n => `${n.getAttribute('data-nombre')} (${n.getAttribute('data-mes')}): ${n.getAttribute('data-val')}`);
}

function renderizarPaso(hasta) {
    grupos.forEach((g, i) => g.classList.toggle('visible', i <= hasta));
    SERIES.forEach(s => {
        const pts = VDT.slice(0, hasta + 1).map((f, i) => ({ x: i * X_PASO, y: yVdt(valorVdt(f, i, s.col)) }));
        s.path.setAttribute('d', pts.length > 1 ? curva(pts) : '');
    });
    timeline.value = hasta;
    timelineLabel.textContent = VDT[hasta][0];
}
function pausar() {
    clearInterval(timer);
    timer = null;
    btnPlay.textContent = '▶ Reproducir';
}
function reproducir() {
    if (paso >= VDT.length - 1) paso = 0;
    btnPlay.textContent = '⏸ Pausa';
    renderizarPaso(paso);
    timer = setInterval(() => (paso < VDT.length - 1 ? renderizarPaso(++paso) : pausar()), 700);
}
btnPlay.addEventListener('click', () => (timer ? pausar() : reproducir()));
btnReset.addEventListener('click', () => { pausar(); paso = 0; reproducir(); });
timeline.addEventListener('input', () => { pausar(); paso = +timeline.value; renderizarPaso(paso); });

/* ===================== 8. Análisis dinámico ===================== */
function iniciarAnalisis() {
    const selMes = $('#filtroMesDinamico'), selCta = $('#filtroCuentaDinamico');
    const txt = $('#filtroTextoDinamico'), cuerpo = $('#tablaDinamicaBody');

    MESES_FULL.slice(0, mesesN).forEach(m => selMes.add(new Option(cap(m), m)));
    [...new Set(datos.map(t => canon(t.cuenta)))].sort().forEach(c => selCta.add(new Option(vista(c), c)));

    const celda = (tr, texto, clase) => {
        const td = tr.insertCell();
        td.textContent = texto;
        if (clase) td.className = clase;
        return td;
    };

    function pintar() {
        const q = norm(txt.value.trim());
        const f = datos.filter(t =>
            (!selMes.value || t.mes === selMes.value) &&
            (!selCta.value || canon(t.cuenta) === selCta.value) &&
            (!q || norm([t.factura, t.cotizacion, t.producto, t.cuenta].join(' ')).includes(q)));

        $('#kpiDinamicoConIva').textContent = fmt2(f.reduce((a, t) => a + t.monto, 0));
        $('#kpiDinamicoSinIva').textContent = fmt2(f.reduce((a, t) => a + t.montoSinIva, 0));
        $('#kpiDinamicoCount').textContent = f.length.toLocaleString('en-US');
        $('#contadorRegistrosDinamicos').textContent = `Mostrando ${f.length} de ${datos.length} registros`;

        cuerpo.replaceChildren();
        if (!f.length) {
            const td = cuerpo.insertRow().insertCell();
            td.colSpan = 9;
            td.className = 'vacio';
            td.textContent = 'No se encontraron registros con los filtros seleccionados.';
            return;
        }
        f.forEach(t => {
            const tr = cuerpo.insertRow();
            celda(tr, t.id, 'mono id-col');
            celda(tr, t.fecha, 'fuerte');
            const m = celda(tr, '');
            const b = document.createElement('span');
            b.className = 'badge-mes';
            b.textContent = t.mes;
            m.append(b);
            celda(tr, t.cotizacion, 'mono');
            celda(tr, t.factura, 'mono');
            celda(tr, t.cuenta, 'fuerte');
            celda(tr, fmt2(t.monto), 'num verde');
            celda(tr, fmt2(t.montoSinIva), 'num');
            celda(tr, t.producto, 'td-prod').title = t.producto;
        });
    }
    selMes.addEventListener('change', pintar);
    selCta.addEventListener('change', pintar);
    txt.addEventListener('input', pintar);
    pintar();
}

/* ===================== Validación del dataset ===================== */
function validarDatos() {
    const ids = new Set();
    datos.forEach(t => {
        if (ids.has(t.id)) console.warn('id duplicado:', t.id);
        ids.add(t.id);
        if (!MESES_FULL.includes(t.mes)) console.warn('mes desconocido en id', t.id, t.mes);
    });
}

/* ===================== Arranque ===================== */
if (datos.length) {
    validarDatos();
    pintarResumen();
    dibujarTendencia();
    pintarMayo();
    dibujarBarras();
    seleccionarMes(Math.min(4, ultimo));
    iniciarAnalisis();
}
iniciarCarruseles();
iniciarComparativa();
construirVdt();
renderizarPaso(0);
activarTab($('.tab-button.active'));

})();
