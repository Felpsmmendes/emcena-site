// Todo o conteúdo editável do site fica aqui.
// Itens marcados com [—] ou "CONFIRMAR" ainda dependem de dado real.

export const contato = {
  whatsapp: '5511992453439',
  whatsappExibicao: '(11) 99245-3439',
  email: 'comercial@emcenaeventos.com.br',
  instagram: 'https://www.instagram.com/emcenaeventos/',
  instagramHandle: '@emcenaeventos',
  horario: 'Seg–sex 9h–18h · sáb 9h–13h',
  regiao: 'São Paulo e Grande ABC',
};

// ─── EM ABERTO (Felps) ───────────────────────────────────────────────
// Quantos eventos já fizeram desde 2017 (aproximado vale: '+800').
// Quando preenchido, substitui "8 serviços" no topo da home.
export const eventosRealizados: string | null = null;

export const prova = {
  nota: 5.0,
  avaliacoes: 93,
  recomendam: '100%',
  fonte: 'casamentos.com.br',
  fonteUrl: 'https://www.casamentos.com.br/bebidas-casamento/em-cena-eventos--e256431',
  selo: 'Casamentos Awards',
  seloAnos: '2020 a 2026',
  // Trechos reais do casamentos.com.br (conferidos em out/2026), sem citar ninguém da equipe.
  depoimentos: [
    { titulo: 'Casamento Clarice e Vinicius', texto: 'Melhor escolha que fizemos foi contratar o serviço da Em Cena, atendimento desde o início muito atencioso e cuidadoso.', autor: 'Vinicius', quando: '16/03/2026' },
    { titulo: 'Melhor bar', texto: 'Drinks excepcionais, produtos de qualidade, rapidez na entrega dos copos.', autor: 'Tamires', quando: '11/01/2026' },
    { titulo: 'Nota 1000 em tudo!!!', texto: 'Acertamos demais em contratar o totem para nosso casamento.', autor: 'Nathalia', quando: '05/12/2025' },
    { titulo: 'Casamento Gabriela e Gabriel', texto: 'Profissionais muito atenciosos e simpáticos. Todas as bebidas e o totem estavam impecáveis.', autor: 'Gabriela', quando: '01/09/2025' },
  ],
};

/** Mensagem pronta do WhatsApp — mesma estrutura do portfólio. */
export function linkWhatsApp(servico = '', extras: Record<string, string> = {}) {
  const linhas = [
    'Olá! Vi o site da Em Cena e quero um orçamento.',
    '',
    `👤 *Nome:* ${extras.nome ?? ''}`,
    `🎉 *Tipo de evento:* ${extras.tipo ?? ''}`,
    `📅 *Data do evento:* ${extras.data ?? ''}`,
    `👥 *Quantidade de convidados:* ${extras.convidados ?? ''}`,
    `📍 *Local do evento:* ${extras.local ?? ''}`,
    `✨ *Serviço(s) de interesse:* ${servico}`,
  ];
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(linhas.join('\n'))}`;
}

/** Enquadramento de cada foto (CSS object-position: horizontal vertical).
 *  Ajuste se cortar rosto/equipamento num formato. Padrão: centro. */
export const fotoPosicao: Record<string, string> = {
  hero: '50% 35%',
  bar: '50% 64%',
  faixa: '50% 38%',
  equipe: '50% 40%',
  'totem-retro': '50% 62%',
  atracoes: '50% 58%',
};

export const tiposEvento = ['Casamentos', 'Formaturas', '15 anos', 'Aniversários', 'Eventos corporativos', 'Confraternizações'];

// Cardápios do portfólio (A4). Para mudar um drink, edite aqui.
export type Pacote = { nome: string; para: string; copo: 'Vidro' | 'Descartável'; aPartirDe: string | null; semAlcool: string[]; comAlcool: string[] };

export const pacotes: Pacote[] = [
  { nome: 'Intermediário', para: 'Variedade e sabor para celebrar sem abrir mão da experiência', copo: 'Descartável', aPartirDe: null,
    semAlcool: ['Mojito Fresh', 'Kaly M&M', 'Soda Italiana'],
    comAlcool: ['Banana Boat', 'Mojito', 'Sex on the Beach', 'Dry Mandarino', 'Espanhola', 'Piña Colada', 'Citric'] },
  { nome: 'Premium', para: 'Mais variedade para uma experiência completa de coquetelaria', copo: 'Vidro', aPartirDe: null,
    semAlcool: ['Mojito Fresh', 'Summer', 'Fresh Lemon', 'Kaly M&M'],
    comAlcool: ['Gin Tônica', 'Negroni', 'Piña Colada', 'Cosmopolitan', 'Lagoa Vermelha', 'Água Viva', 'Moscow Mule', 'Mojito', 'Citric', 'Dry Mandarino', 'Sex on the Beach'] },
  { nome: 'Clássico', para: 'Clássicos atemporais para quem aprecia a boa coquetelaria', copo: 'Vidro', aPartirDe: null,
    semAlcool: ['Mojito Fresh', 'Summer'],
    comAlcool: ['Gin Tônica', 'Bramble', 'Espresso Martini', 'Penicillin', 'Clericot', 'Moscow Mule', 'Negroni', 'Fitzgerald'] },
  { nome: 'Black Top', para: 'Nossa experiência mais completa em coquetelaria', copo: 'Vidro', aPartirDe: null,
    semAlcool: ['Mojito Fresh', 'Fresh Lemon', 'Soda Italiana'],
    comAlcool: ['Gin Tônica', 'Ramazzotti', 'Pisco Sour', 'Cosmopolitan', 'Gin Blue', 'Saquerita', 'Moscow Mule', 'Negroni', 'Boulevardier', 'Whisky Sour', 'Sonata', 'Aperol Spritz'] },
  { nome: 'Sem Álcool', para: 'Drinks sem álcool para todos os públicos · combina com qualquer pacote', copo: 'Descartável', aPartirDe: null,
    semAlcool: ['Mojito Fresh', 'Kaly M&M', 'Barcelona', 'Espanhola', 'Sunset on the Beach', 'Beijo na Boca', 'Soda Italiana', 'Ilha Bela', 'Lagoa Azul', 'Verdes Mares', 'Power Blue'],
    comAlcool: [] },
];

export const caipirinha = ['morango', 'abacaxi', 'melancia', 'limão', 'maracujá'];
export const modelosBar = ['Bar 360', 'Tradicional', 'Premium', 'Branco', 'Rústico'];
export const formatosImpressao = ['tirinha', 'polaroid', '10×15'];

export type Servico = {
  slug: string;
  nome: string;
  tipo: 'bar' | 'foto';
  resumo: string;
  frase: string;
  inclui: string[];
  foto: string; // nome do arquivo em src/assets/fotos (sem extensão)
  fotoLegenda: string;
  seoTitulo: string;
  seoDescricao: string;
  /** EM ABERTO (Felps): 2–3 parágrafos só deste serviço — como funciona na prática,
   *  espaço que ocupa, se precisa de tomada, para que evento combina mais.
   *  Enquanto vazio, a seção "Como funciona" da página não aparece. */
  comoFunciona?: string[];
  /** EM ABERTO (Felps): perguntas específicas deste serviço. */
  perguntas?: { q: string; a: string }[];
};

const incluiFoto = [
  '4 horas de atração com promotor durante todo o evento',
  `Impressão na hora: ${formatosImpressao.join(', ')}`,
  'Moldura personalizada com a identidade do evento',
  'Foto original para o convidado baixar por QR Code',
];

export const servicos: Servico[] = [
  {
    slug: 'bar-de-drinks', nome: 'Bar de drinks', tipo: 'bar',
    resumo: 'Bartenders profissionais, drinks feitos na hora e cardápio do jeito do seu evento.',
    frase: 'Drink feito na hora, do jeito do seu evento.',
    inclui: [
      'Cinco cardápios prontos ou um cardápio personalizado',
      `Festival de Caipirinha incluso nos pacotes com álcool (${caipirinha.join(', ')})`,
      `${modelosBar.length} modelos de bar: ${modelosBar.join(', ')}`,
      'Equipe e módulos de bar dimensionados pelo número de convidados',
      '5 horas de serviço',
    ],
    foto: 'bar', fotoLegenda: 'Bar montado em evento',
    seoTitulo: 'Bar de drinks para eventos em São Paulo e ABC',
    seoDescricao: 'Bar de drinks com bartenders profissionais para casamentos, formaturas e eventos corporativos em São Paulo e Grande ABC. Cinco cardápios ou cardápio personalizado.',
  },
  {
    slug: 'totem-fotografico', nome: 'Totem Fotográfico', tipo: 'foto',
    resumo: 'Foto impressa na hora, com a moldura do seu evento.', frase: 'A lembrança que o convidado leva pra casa.',
    inclui: incluiFoto, foto: 'totem-fotografico', fotoLegenda: 'Convidados no Totem Fotográfico',
    seoTitulo: 'Totem fotográfico para festas e eventos', seoDescricao: 'Totem fotográfico com impressão na hora e moldura personalizada para casamentos, 15 anos e eventos em São Paulo e Grande ABC.',
  },
  {
    slug: 'totem-retro', nome: 'Totem Retrô', tipo: 'foto',
    resumo: 'Visual de época e impressão instantânea.', frase: 'Cara de antigo, foto na hora.',
    inclui: incluiFoto, foto: 'totem-retro', fotoLegenda: 'Totem Retrô em evento',
    seoTitulo: 'Totem retrô para casamentos e festas', seoDescricao: 'Totem retrô com impressão instantânea para casamentos, formaturas e eventos em São Paulo e Grande ABC.',
  },
  {
    slug: 'espelho-magico', nome: 'Espelho Mágico', tipo: 'foto',
    resumo: 'Espelho interativo que conversa com o convidado e dispara a foto.', frase: 'O espelho que faz o convidado sorrir.',
    inclui: incluiFoto, foto: 'espelho-magico', fotoLegenda: 'Espelho Mágico em evento',
    seoTitulo: 'Espelho mágico para eventos', seoDescricao: 'Espelho mágico fotográfico com impressão na hora para casamentos, 15 anos e eventos corporativos em São Paulo e Grande ABC.',
  },
  {
    slug: 'cabine-fotografica', nome: 'Cabine Fotográfica', tipo: 'foto',
    resumo: 'Cortina fechada, acessórios e liberdade para a turma.', frase: 'Entra quieto, sai rindo.',
    inclui: [...incluiFoto, 'Acessórios para as fotos'], foto: 'cabine', fotoLegenda: 'Cabine fotográfica',
    seoTitulo: 'Cabine fotográfica para festas em SP e ABC', seoDescricao: 'Cabine fotográfica com acessórios e impressão instantânea para casamentos, formaturas, 15 anos e eventos em São Paulo e Grande ABC.',
  },
  {
    slug: 'plataforma-360', nome: 'Plataforma 360°', tipo: 'foto',
    resumo: 'Vídeo girando em câmera lenta, pronto para postar.', frase: 'O vídeo que todo mundo posta.',
    inclui: ['4 horas de atração com promotor durante todo o evento', 'Vídeo em câmera lenta com moldura do evento', 'Envio do vídeo para o convidado na hora'], foto: 'plataforma-360', fotoLegenda: 'Plataforma 360° em evento',
    seoTitulo: 'Plataforma 360 para eventos', seoDescricao: 'Plataforma 360° com vídeo em câmera lenta e moldura personalizada para casamentos, 15 anos e eventos em São Paulo e Grande ABC.',
  },
  {
    slug: 'capa-de-revista', nome: 'Capa de Revista', tipo: 'foto',
    resumo: 'O convidado vira capa, com a moldura do seu evento.', frase: 'Todo convidado vira capa.',
    inclui: incluiFoto, foto: 'capa-de-revista', fotoLegenda: 'Capa de Revista em evento',
    seoTitulo: 'Capa de revista para festas e eventos', seoDescricao: 'Atração Capa de Revista com impressão na hora para casamentos, 15 anos e eventos em São Paulo e Grande ABC.',
  },
  {
    slug: 'pista-de-led', nome: 'Pista de LED', tipo: 'foto',
    resumo: 'A pista de dança iluminada vira o palco da noite.', frase: 'A pista vira palco.',
    inclui: ['Pista de LED montada e desmontada pela equipe', 'CONFIRMAR: tamanhos disponíveis e efeitos'], foto: 'pista-led', fotoLegenda: 'Pista de LED',
    seoTitulo: 'Pista de LED para festas', seoDescricao: 'Pista de dança de LED para casamentos, 15 anos e festas em São Paulo e Grande ABC.',
  },
];

export const atracoes = servicos.filter((s) => s.tipo === 'foto');

export const processo = [
  { t: 'Orçamento', d: 'Você informa data, local, convidados e serviços. A proposta chega completa.' },
  { t: 'Reserva da data', d: '20% de entrada garantem a data. O saldo vence até 20 dias antes, no boleto ou cartão.' },
  { t: 'Aprovação dos detalhes', d: 'Modelo do bar, cardápio, formato de impressão e moldura do 360°, um por um.' },
  { t: 'Dia do evento', d: 'A equipe chega antes, monta, serve e desmonta. Você só aproveita.' },
];

// EM ABERTO (Felps): troque/complete com as 5 perguntas que mais chegam no WhatsApp
// (ex.: bebida inclusa? espaço necessário? tomada? tempo de montagem? degustação?).
export const faq = [
  { q: 'Quanto tempo dura o serviço?', a: 'Bar: 5 horas. Atrações fotográficas: 4 horas. Hora adicional sob consulta.' },
  { q: 'Como reservo a minha data?', a: 'Com 20% de entrada. O saldo vence até 20 dias antes do evento, por boleto ou cartão de crédito.' },
  { q: 'Posso personalizar o cardápio?', a: 'Sim. Dá para incluir e substituir drinks ou montar um cardápio do zero com a equipe.' },
  { q: 'Os drinks são servidos em vidro?', a: 'Premium, Clássico e Black Top em vidro. Intermediário e Sem Álcool em copo descartável.' },
  { q: 'Quantos bartenders vão no meu evento?', a: 'Calculamos os módulos de bar e a equipe pelo número de convidados, não por pacote fixo.' },
  { q: 'Vocês atendem fora de São Paulo?', a: 'Atendemos São Paulo, Grande ABC e região. Para outras cidades, o frete entra no orçamento.' },
];

export const historia = {
  titulo: 'Uma empresa que nasceu',
  tituloDestaque: 'dentro de uma feira de eventos.',
  // CONFIRMAR: texto tirado do site atual.
  paragrafos: [
    'Diego e Luiz se conheceram em 2015, numa feira de eventos em Ribeirão Preto. Passaram dois anos em cursos e seminários antes de abrir a Em Cena no Grande ABC, em 2017.',
    'Hoje a equipe atende casamentos, formaturas e eventos corporativos em São Paulo e região.',
  ],
  citacao: 'Nunca desista de atender com excelência.',
  autor: 'Diego Menezes dos Santos, fundador',
};
