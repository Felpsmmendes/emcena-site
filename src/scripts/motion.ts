import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

declare global { interface Window { __motionReady?: boolean } }

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s) as NodeListOf<T>);

export function iniciarMovimento() {
  const html = document.documentElement;
  window.__motionReady = true;

  // Cabeçalho compacto e CTA fixo do celular — funcionam mesmo sem animação.
  const aoRolar = () => {
    const y = window.scrollY;
    html.classList.toggle('scrolled', y > 24);
    html.classList.toggle('cta-on', y > window.innerHeight * 0.6);
  };
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  if (!html.classList.contains('motion')) return; // movimento reduzido

  // ---------- Rolagem suave ----------
  const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // âncoras internas com a rolagem suave
  $<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href')!.replace(/^\//, '');
      if (location.pathname !== '/' && a.getAttribute('href')!.startsWith('/#')) return;
      const alvo = document.querySelector(hash);
      if (!alvo) return;
      e.preventDefault();
      lenis.scrollTo(alvo as HTMLElement, { offset: -70 });
      history.replaceState(null, '', hash);
    });
  });

  const ease = 'expo.out';

  // Quando disparar: elemento que cabe na tela só anima quando aparece inteiro
  // (acima da barra do WhatsApp no celular); elemento maior que a tela anima com o meio à vista.
  const quando = (el: Element) => () =>
    (el as HTMLElement).offsetHeight < window.innerHeight * 0.75 ? 'bottom 86%' : 'center 70%';
  // Garantia: o que fica no fim da página (rodapé no desktop) pode nunca chegar no ponto
  // de disparo; ao bater no fim da rolagem, roda o que ainda não rodou.
  const doFim: gsap.core.Animation[] = [];
  const noFim = <T extends gsap.core.Animation>(a: T) => { doFim.push(a); return a; };
  window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4)
      doFim.forEach((a) => { if (a.progress() === 0) a.play(); });
  }, { passive: true });

  // ---------- Abertura (hero) ----------
  // No celular a foto do topo fica abaixo da dobra: a cortina espera ela aparecer
  // (antes ela rodava ao carregar e ninguém via).
  const heroWipe = document.querySelector<HTMLElement>('[data-hero-wipe]');
  const fig = heroWipe?.closest('figure');
  const heroAbaixo = !!heroWipe && heroWipe.getBoundingClientRect().top > window.innerHeight * 0.7;
  // o que já está na tela entra na abertura; o que está abaixo da dobra espera a rolagem
  const fades = $('[data-fade]').filter((el) => !(heroAbaixo && fig?.contains(el)));
  const dobra = window.innerHeight * 0.9;
  const fadesJa = fades.filter((el) => el.getBoundingClientRect().top < dobra);
  const fadesDepois = fades.filter((el) => el.getBoundingClientRect().top >= dobra);
  const intro = gsap.timeline({ defaults: { ease } });
  intro
    .fromTo('.hero-line > span', { y: 0, yPercent: 105 }, { y: 0, yPercent: 0, duration: 1.2, stagger: 0.09 }, 0)
    .fromTo(fadesJa, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12 }, 0.35);
  fadesDepois.forEach((el) => gsap.fromTo(el, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1, ease,
    scrollTrigger: { trigger: el, start: quando(el), toggleActions: 'play complete none none' } }));
  if (heroWipe) {
    heroWipe.removeAttribute('data-wipe');
    const tl = gsap.timeline(heroAbaixo
      ? { scrollTrigger: { trigger: heroWipe, start: quando(heroWipe), toggleActions: 'play complete none none' } }
      : { delay: 0.15 });
    tl.fromTo(heroWipe, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.inOut' }, 0)
      .fromTo(heroWipe.querySelector('.zin'), { scale: 1.2 }, { scale: 1, duration: 2.2, ease }, 0);
    const leg = fig?.querySelector('[data-fade]');
    if (heroAbaixo && leg) tl.fromTo(leg, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1, ease }, 0.5);
  }

  // ---------- Revelações ao rolar (em lote, escalonadas) ----------
  // onLeave cobre o caso de pular a seção (âncora, "voltar ao topo", recarregar no meio da página)
  const revela = (els: Element[]) => gsap.to(els, { opacity: 1, y: 0, duration: 1.1, ease, stagger: 0.09, overwrite: true });
  ScrollTrigger.batch('[data-reveal]', { start: 'top 84%', once: true, onEnter: revela, onLeave: revela });

  $('[data-wipe]').forEach((el) => {
    const tl = noFim(gsap.timeline({ scrollTrigger: { trigger: el, start: quando(el), toggleActions: 'play complete none none' } }));
    tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.inOut' })
      .fromTo(el.querySelector('.zin'), { scale: 1.16 }, { scale: 1, duration: 1.8, ease }, 0);
  });

  // linha que se desenha conforme a rolagem
  $('[data-line]').forEach((el) => {
    gsap.to(el, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 45%', scrub: 0.6 } });
  });

  // ---------- Números contando ----------
  $('[data-count]').forEach((el) => {
    const fim = parseFloat(el.dataset.count!);
    const casas = Number(el.dataset.dec ?? 0);
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onLeave: () => { el.textContent = fim.toFixed(casas).replace('.', ','); },
      onEnter: () => gsap.to(obj, { v: fim, duration: 1.6, ease: 'power3.out', onUpdate: () => { el.textContent = obj.v.toFixed(casas).replace('.', ','); } }),
    });
  });

  // ---------- Parallax ----------
  $('[data-parallax]').forEach((el) => {
    const f = parseFloat(el.dataset.parallax || '0.1');
    gsap.to(el, { yPercent: -f * 100, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // ---------- Atrações: cards do carrossel entram em sequência ----------
  const cards = $('[data-hs-card]');
  if (cards.length) {
    gsap.fromTo(cards, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, ease, stagger: 0.08, scrollTrigger: { trigger: cards[0], start: quando(cards[0]), toggleActions: 'play complete none none' } });
  }

  // ---------- Faixa de ponta a ponta ----------
  $('.fx').forEach((fx) => {
    const media = fx.querySelector('[data-fx-media]');
    if (media) gsap.fromTo(media, { yPercent: -8, scale: 1.08 }, { yPercent: 8, scale: 1, ease: 'none', scrollTrigger: { trigger: fx, start: 'top bottom', end: 'bottom top', scrub: true } });
    const frase = fx.querySelector('.fx__frase') ?? fx;
    gsap.fromTo(fx.querySelectorAll('.fx-line > span'), { y: 0, yPercent: 105 }, { y: 0, yPercent: 0, duration: 1.3, ease, stagger: 0.12, scrollTrigger: { trigger: frase, start: quando(frase), toggleActions: 'play complete none none' } });
  });

  // ---------- Marca gigante no rodapé ----------
  const letras = $('.ft__l');
  if (letras.length) {
    noFim(gsap.fromTo(letras, { y: 0, yPercent: 100 }, { y: 0, yPercent: 0, duration: 1.2, ease, stagger: 0.05, scrollTrigger: { trigger: letras[0].parentElement!, start: quando(letras[0].parentElement!), toggleActions: 'play complete none none' } }));
  }

  // recalcula depois que fontes e imagens carregam
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
