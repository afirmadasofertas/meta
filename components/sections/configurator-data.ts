// ─── Helper: constrói URL para arquivos locais ───────────────────────────────
const m = (model: string, color: string, file: string) =>
  encodeURI(`/images/modelos/${model}/${color}/${file}`)

// ─── Types ────────────────────────────────────────────────────────────────────
export type GenLabel = 'Gen 1' | 'Gen 2' | 'Oakley'

export interface ColorVariant {
  name: string
  swatch: string
  image: string      // primeira mídia (sempre óculos sem pessoa)
  images?: string[]  // demais mídias; vídeos .mp4 ficam por último
}

export interface GlassesModel {
  id: string
  name: string
  gen: GenLabel
  tagline: string
  thumb: string
  colors: ColorVariant[]
  sizes: string[]
  fits: string[]
  price: string
  originalPrice: string
}

// ─── Dados dos 8 modelos ──────────────────────────────────────────────────────
export const models: GlassesModel[] = [

  /* ── 1. Wayfarer Gen 2 ──────────────────────────────────────────────────── */
  {
    id: 'wayfarer-gen2',
    name: 'Wayfarer',
    gen: 'Gen 2',
    tagline: 'O ícone reinventado com tecnologia de última geração.',
    thumb: m('Wayfarer (Gen 2)', 'Preto brilhante', '01.webp'),
    sizes: ['Padrão', 'Grande'],
    fits: ['Ponte Alta'],
    price: 'R$ 397,90',
    originalPrice: 'R$ 599,00',
    colors: [
      {
        name: 'Preto Brilhante',
        swatch: '#2A2A2A',
        image: m('Wayfarer (Gen 2)', 'Preto brilhante', '01.webp'),
        images: [
          m('Wayfarer (Gen 2)', 'Preto brilhante', '02.webp'),
          m('Wayfarer (Gen 2)', 'Preto brilhante', '03.webp'),
          m('Wayfarer (Gen 2)', 'Preto brilhante', '04.webp'),
          m('Wayfarer (Gen 2)', 'Preto brilhante', '05.webp'),
          m('Wayfarer (Gen 2)', 'Preto brilhante', '06.webp'),
        ],
      },
      {
        name: 'Preto Matte',
        swatch: '#1A1A1A',
        image: m('Wayfarer (Gen 2)', 'Preto Matte', '01.webp'),
        images: [
          m('Wayfarer (Gen 2)', 'Preto Matte', '02.webp'),
          m('Wayfarer (Gen 2)', 'Preto Matte', '03.webp'),
          m('Wayfarer (Gen 2)', 'Preto Matte', '04.webp'),
          m('Wayfarer (Gen 2)', 'Preto Matte', '05.webp'),
        ],
      },
      {
        name: 'Preto Matte Grafite Degradê',
        swatch: '#404040',
        image: m('Wayfarer (Gen 2)', 'preto matte grafite degrade', '01.webp'),
        images: [
          m('Wayfarer (Gen 2)', 'preto matte grafite degrade', '02.webp'),
          m('Wayfarer (Gen 2)', 'preto matte grafite degrade', '03.webp'),
          m('Wayfarer (Gen 2)', 'preto matte grafite degrade', '04.webp'),
          m('Wayfarer (Gen 2)', 'preto matte grafite degrade', '05.webp'),
        ],
      },
      {
        // 01 é mp4 → primeira imagem estática é 02.webp
        name: 'Azul Cósmico Brilhante',
        swatch: '#1A3FA8',
        image: m('Wayfarer (Gen 2)', 'Azul Cósmico Brilhante', '02.webp'),
        images: [
          m('Wayfarer (Gen 2)', 'Azul Cósmico Brilhante', '03.webp'),
          m('Wayfarer (Gen 2)', 'Azul Cósmico Brilhante', '04.webp'),
          m('Wayfarer (Gen 2)', 'Azul Cósmico Brilhante', '05.webp'),
          m('Wayfarer (Gen 2)', 'Azul Cósmico Brilhante', '06.webp'),
          m('Wayfarer (Gen 2)', 'Azul Cósmico Brilhante', '01.mp4'),
        ],
      },
      {
        name: 'Preto Brilhante Transitions® Verde Grafite',
        swatch: '#1A3D22',
        image: m('Wayfarer (Gen 2)', 'Preto brilhante transitions transparente a verde grafite', '02.webp'),
        images: [
          m('Wayfarer (Gen 2)', 'Preto brilhante transitions transparente a verde grafite', '03.webp'),
          m('Wayfarer (Gen 2)', 'Preto brilhante transitions transparente a verde grafite', '04.webp'),
          m('Wayfarer (Gen 2)', 'Preto brilhante transitions transparente a verde grafite', '05.webp'),
          m('Wayfarer (Gen 2)', 'Preto brilhante transitions transparente a verde grafite', '01.mp4'),
        ],
      },
      {
        name: 'Preto Matte Transitions® Cinza',
        swatch: '#3A3A3A',
        image: m('Wayfarer (Gen 2)', 'Preto Matte transitions transparente e cinza', '02.webp'),
        images: [
          m('Wayfarer (Gen 2)', 'Preto Matte transitions transparente e cinza', '03.webp'),
          m('Wayfarer (Gen 2)', 'Preto Matte transitions transparente e cinza', '04.webp'),
          m('Wayfarer (Gen 2)', 'Preto Matte transitions transparente e cinza', '05.webp'),
          m('Wayfarer (Gen 2)', 'Preto Matte transitions transparente e cinza', '01.mp4'),
        ],
      },
    ],
  },

  /* ── 2. Wayfarer Gen 1 ──────────────────────────────────────────────────── */
  {
    id: 'wayfarer-gen1',
    name: 'Wayfarer',
    gen: 'Gen 1',
    tagline: 'O clássico que começou a revolução dos smart glasses.',
    thumb: m('Wayfarer (Gen 1)', 'Preto brilhante', 'DM_20260320155948_001.WEBP'),
    sizes: ['Padrão', 'Grande'],
    fits: ['Ponte Alta'],
    price: 'R$ 397,90',
    originalPrice: 'R$ 599,00',
    colors: [
      {
        name: 'Preto Brilhante',
        swatch: '#2A2A2A',
        image: m('Wayfarer (Gen 1)', 'Preto brilhante', 'DM_20260320155948_001.WEBP'),
        images: [
          m('Wayfarer (Gen 1)', 'Preto brilhante', 'DM_20260320155948_002.WEBP'),
          m('Wayfarer (Gen 1)', 'Preto brilhante', 'DM_20260320155948_003.WEBP'),
          m('Wayfarer (Gen 1)', 'Preto brilhante', 'DM_20260320155948_004.WEBP'),
          m('Wayfarer (Gen 1)', 'Preto brilhante', 'DM_20260320155948_005.WEBP'),
        ],
      },
      {
        name: 'Preto Brilhante Verde',
        swatch: '#1A3D1A',
        image: m('Wayfarer (Gen 1)', 'preto brilhante verde', 'DM_20260320155510_001.webp'),
        images: [
          m('Wayfarer (Gen 1)', 'preto brilhante verde', 'DM_20260320155510_002.webp'),
          m('Wayfarer (Gen 1)', 'preto brilhante verde', 'DM_20260320155510_003.webp'),
          m('Wayfarer (Gen 1)', 'preto brilhante verde', 'DM_20260320155510_004.webp'),
          m('Wayfarer (Gen 1)', 'preto brilhante verde', 'DM_20260320155510_005.webp'),
        ],
      },
      {
        name: 'Preto Matte Grafite Degradê',
        swatch: '#383838',
        image: m('Wayfarer (Gen 1)', 'preto matte grafite degrade', '01.webp'),
        images: [
          m('Wayfarer (Gen 1)', 'preto matte grafite degrade', '02.webp'),
          m('Wayfarer (Gen 1)', 'preto matte grafite degrade', '03.webp'),
        ],
      },
      {
        name: 'Preto Matte Transitions® Verde Grafite',
        swatch: '#2D402D',
        image: m('Wayfarer (Gen 1)', 'Preto Matte transparentes a verde grafite', 'DM_20260320155619_001.webp'),
        images: [
          m('Wayfarer (Gen 1)', 'Preto Matte transparentes a verde grafite', 'DM_20260320155619_002.webp'),
          m('Wayfarer (Gen 1)', 'Preto Matte transparentes a verde grafite', 'DM_20260320155619_003.webp'),
          m('Wayfarer (Gen 1)', 'Preto Matte transparentes a verde grafite', 'DM_20260320155619_004.webp'),
        ],
      },
      {
        name: 'Caramelo Brilhante Transparente',
        swatch: '#C8916A',
        image: m('Wayfarer (Gen 1)', 'Caramelo brilhante transparente', 'DM_20260320155723_001.WEBP'),
        images: [
          m('Wayfarer (Gen 1)', 'Caramelo brilhante transparente', 'DM_20260320155723_002.WEBP'),
          m('Wayfarer (Gen 1)', 'Caramelo brilhante transparente', 'DM_20260320155723_003.WEBP'),
          m('Wayfarer (Gen 1)', 'Caramelo brilhante transparente', 'DM_20260320155723_004.WEBP'),
          m('Wayfarer (Gen 1)', 'Caramelo brilhante transparente', 'DM_20260320155723_005.WEBP'),
        ],
      },
      {
        name: 'Jeans Matte Transparente',
        swatch: '#4A6A8E',
        image: m('Wayfarer (Gen 1)', 'Jeans matte transparente', 'DM_20260320155841_001.WEBP'),
        images: [
          m('Wayfarer (Gen 1)', 'Jeans matte transparente', 'DM_20260320155841_002.WEBP'),
          m('Wayfarer (Gen 1)', 'Jeans matte transparente', 'DM_20260320155841_003.WEBP'),
          m('Wayfarer (Gen 1)', 'Jeans matte transparente', 'DM_20260320155841_004.WEBP'),
          m('Wayfarer (Gen 1)', 'Jeans matte transparente', 'DM_20260320155841_005.WEBP'),
        ],
      },
      {
        name: 'Marrom Brilhante Transparente',
        swatch: '#7B3A1A',
        image: m('Wayfarer (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160054_001.WEBP'),
        images: [
          m('Wayfarer (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160054_002.WEBP'),
          m('Wayfarer (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160054_003.WEBP'),
          m('Wayfarer (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160054_004.WEBP'),
          m('Wayfarer (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160054_005.WEBP'),
        ],
      },
    ],
  },

  /* ── 3. Skyler Gen 2 ────────────────────────────────────────────────────── */
  {
    id: 'skyler-gen2',
    name: 'Skyler',
    gen: 'Gen 2',
    tagline: 'Design feminino com a mais alta performance.',
    thumb: m('Skyler Gen 2', 'Cinza-esbranquiçado brilhante', 'DM_20260320162858_001.WEBP'),
    sizes: ['Padrão'],
    fits: ['Ponte Alta'],
    price: 'R$ 397,90',
    originalPrice: 'R$ 599,00',
    colors: [
      {
        name: 'Cinza-esbranquiçado Brilhante',
        swatch: '#B8C8D8',
        image: m('Skyler Gen 2', 'Cinza-esbranquiçado brilhante', 'DM_20260320162858_001.WEBP'),
        images: [
          m('Skyler Gen 2', 'Cinza-esbranquiçado brilhante', 'DM_20260320162858_002.WEBP'),
          m('Skyler Gen 2', 'Cinza-esbranquiçado brilhante', 'DM_20260320162858_003.WEBP'),
          m('Skyler Gen 2', 'Cinza-esbranquiçado brilhante', 'DM_20260320162858_004.WEBP'),
          m('Skyler Gen 2', 'Cinza-esbranquiçado brilhante', '01.mp4'),
        ],
      },
      {
        name: 'Preto Brilhante Verde',
        swatch: '#1A3D1A',
        image: m('Skyler Gen 2', 'Preto Brilhante verde', 'DM_20260320162729_001.WEBP'),
        images: [
          m('Skyler Gen 2', 'Preto Brilhante verde', 'DM_20260320162729_002.WEBP'),
          m('Skyler Gen 2', 'Preto Brilhante verde', 'DM_20260320162729_003.WEBP'),
          m('Skyler Gen 2', 'Preto Brilhante verde', 'DM_20260320162729_004.WEBP'),
          m('Skyler Gen 2', 'Preto Brilhante verde', 'DM_20260320162729_005.WEBP'),
        ],
      },
      {
        name: 'Preto Brilhante Clear',
        swatch: '#2A2A2A',
        image: m('Skyler Gen 2', 'Preto brilhante clear', 'DM_20260320163009_001.WEBP'),
        images: [
          m('Skyler Gen 2', 'Preto brilhante clear', 'DM_20260320163009_002.WEBP'),
          m('Skyler Gen 2', 'Preto brilhante clear', 'DM_20260320163009_003.WEBP'),
          m('Skyler Gen 2', 'Preto brilhante clear', 'DM_20260320163009_004.WEBP'),
          m('Skyler Gen 2', 'Preto brilhante clear', 'DM_20260320163009_005.WEBP'),
          m('Skyler Gen 2', 'Preto brilhante clear', 'DM_20260320163009_006.WEBP'),
        ],
      },
      {
        name: 'Preto Brilhante Transitions® Verde Grafite',
        swatch: '#2D402D',
        image: m('Skyler Gen 2', 'Preto brilhante traansparente a verde grafite', 'DM_20260320162941_001.WEBP'),
        images: [
          m('Skyler Gen 2', 'Preto brilhante traansparente a verde grafite', 'DM_20260320162941_002.WEBP'),
          m('Skyler Gen 2', 'Preto brilhante traansparente a verde grafite', 'DM_20260320162941_003.WEBP'),
          m('Skyler Gen 2', 'Preto brilhante traansparente a verde grafite', 'DM_20260320162941_004.WEBP'),
          m('Skyler Gen 2', 'Preto brilhante traansparente a verde grafite', '01.mp4'),
        ],
      },
      {
        name: 'Preto Brilhante Transitions® Ametista',
        swatch: '#4A1A6B',
        image: m('Skyler Gen 2', 'Preto brilhante transparente a ametista', 'DM_20260320163058_001.WEBP'),
        images: [
          m('Skyler Gen 2', 'Preto brilhante transparente a ametista', 'DM_20260320163058_002.WEBP'),
          m('Skyler Gen 2', 'Preto brilhante transparente a ametista', 'DM_20260320163058_003.WEBP'),
          m('Skyler Gen 2', 'Preto brilhante transparente a ametista', '01.mp4'),
        ],
      },
      {
        name: 'Violeta Místico Brilhante',
        swatch: '#6B3FA0',
        image: m('Skyler Gen 2', 'Violeta místico brilhante', 'DM_20260320163137_001.WEBP'),
        images: [
          m('Skyler Gen 2', 'Violeta místico brilhante', 'DM_20260320163137_002.WEBP'),
          m('Skyler Gen 2', 'Violeta místico brilhante', 'DM_20260320163137_003.WEBP'),
          m('Skyler Gen 2', 'Violeta místico brilhante', 'DM_20260320163137_004.WEBP'),
          m('Skyler Gen 2', 'Violeta místico brilhante', 'DM_20260320163137_005.WEBP'),
          m('Skyler Gen 2', 'Violeta místico brilhante', '01.mp4'),
        ],
      },
      {
        name: 'Preto Brilhante Grafite Degradê',
        swatch: '#383838',
        image: m('Skyler Gen 2', 'preto brilhante grafite degrade', 'DM_20260320162818_001.WEBP'),
        images: [
          m('Skyler Gen 2', 'preto brilhante grafite degrade', 'DM_20260320162818_002.WEBP'),
          m('Skyler Gen 2', 'preto brilhante grafite degrade', 'DM_20260320162818_003.WEBP'),
          m('Skyler Gen 2', 'preto brilhante grafite degrade', 'DM_20260320162818_004.WEBP'),
          m('Skyler Gen 2', 'preto brilhante grafite degrade', 'DM_20260320162818_005.WEBP'),
        ],
      },
    ],
  },

  /* ── 4. Skyler Gen 1 ────────────────────────────────────────────────────── */
  {
    id: 'skyler-gen1',
    name: 'Skyler',
    gen: 'Gen 1',
    tagline: 'O design que combina estilo e tecnologia.',
    thumb: m('Skyler Gen 1', 'preto brilhante', 'DM_20260320162431_001.WEBP'),
    sizes: ['Padrão'],
    fits: ['Ponte Alta'],
    price: 'R$ 397,90',
    originalPrice: 'R$ 599,00',
    colors: [
      {
        name: 'Preto Brilhante',
        swatch: '#2A2A2A',
        image: m('Skyler Gen 1', 'preto brilhante', 'DM_20260320162431_001.WEBP'),
        images: [
          m('Skyler Gen 1', 'preto brilhante', 'DM_20260320162431_002.WEBP'),
          m('Skyler Gen 1', 'preto brilhante', 'DM_20260320162431_003.WEBP'),
          m('Skyler Gen 1', 'preto brilhante', 'DM_20260320162431_004.WEBP'),
          m('Skyler Gen 1', 'preto brilhante', 'DM_20260320162431_005.WEBP'),
        ],
      },
      {
        name: 'Preto Brilhante Verde',
        swatch: '#1A3D1A',
        image: m('Skyler Gen 1', 'Preto brilhante verde', 'DM_20260320162356_001.WEBP'),
        images: [
          m('Skyler Gen 1', 'Preto brilhante verde', 'DM_20260320162356_002.WEBP'),
          m('Skyler Gen 1', 'Preto brilhante verde', 'DM_20260320162356_003.WEBP'),
          m('Skyler Gen 1', 'Preto brilhante verde', 'DM_20260320162356_004.WEBP'),
        ],
      },
      {
        name: 'Cinza-esbranquiçado Brilhante',
        swatch: '#B8C8D8',
        image: m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante', 'DM_20260320162321_001.WEBP'),
        images: [
          m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante', 'DM_20260320162321_002.WEBP'),
          m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante', 'DM_20260320162321_003.WEBP'),
          m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante', 'DM_20260320162321_004.WEBP'),
          m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante', '01.mp4'),
        ],
      },
      {
        name: 'Cinza-esbranquiçado Rosa Canela',
        swatch: '#C4B8C0',
        image: m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante rosa canela', 'DM_20260320162547_001.WEBP'),
        images: [
          m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante rosa canela', 'DM_20260320162547_002.WEBP'),
          m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante rosa canela', 'DM_20260320162547_003.WEBP'),
          m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante rosa canela', 'DM_20260320162547_004.WEBP'),
          m('Skyler Gen 1', 'Cinza-esbranquiçado brilhante rosa canela', 'DM_20260320162547_005.WEBP'),
        ],
      },
      {
        name: 'Preto Brilhante Transitions® Ametista',
        swatch: '#4A1A6B',
        image: m('Skyler Gen 1', 'preto brilhante transprantes a ametista', 'DM_20260320162520_001.WEBP'),
        images: [
          m('Skyler Gen 1', 'preto brilhante transprantes a ametista', 'DM_20260320162520_002.WEBP'),
          m('Skyler Gen 1', 'preto brilhante transprantes a ametista', 'DM_20260320162520_003.WEBP'),
          m('Skyler Gen 1', 'preto brilhante transprantes a ametista', '01.mp4'),
        ],
      },
      {
        name: 'Preto Brilhante Azul Ciano',
        swatch: '#1A3D6B',
        image: m('Skyler Gen 1', 'Preto brilhante suave a azul ciano', 'DM_20260320162641_001.WEBP'),
        images: [
          m('Skyler Gen 1', 'Preto brilhante suave a azul ciano', 'DM_20260320162641_002.WEBP'),
          m('Skyler Gen 1', 'Preto brilhante suave a azul ciano', 'DM_20260320162641_003.WEBP'),
          m('Skyler Gen 1', 'Preto brilhante suave a azul ciano', 'DM_20260320162641_004.WEBP'),
          m('Skyler Gen 1', 'Preto brilhante suave a azul ciano', 'DM_20260320162641_005.WEBP'),
          m('Skyler Gen 1', 'Preto brilhante suave a azul ciano', '01.mp4'),
        ],
      },
    ],
  },

  /* ── 5. Headliner Gen 2 ─────────────────────────────────────────────────── */
  {
    id: 'headliner-gen2',
    name: 'Headliner',
    gen: 'Gen 2',
    tagline: 'Oversized icônico com câmera e áudio de nível superior.',
    thumb: m('Headliner (Gen 2)', 'Preto brilhante transparente a safira', 'DM_20260320161505_001.WEBP'),
    sizes: ['Padrão', 'Grande'],
    fits: ['Ponte Alta', 'Ponte Baixa'],
    price: 'R$ 397,90',
    originalPrice: 'R$ 599,00',
    colors: [
      {
        name: 'Preto Brilhante Transparente a Safira',
        swatch: '#1A2D5A',
        image: m('Headliner (Gen 2)', 'Preto brilhante transparente a safira', 'DM_20260320161505_001.WEBP'),
        images: [
          m('Headliner (Gen 2)', 'Preto brilhante transparente a safira', 'DM_20260320161505_002.WEBP'),
          m('Headliner (Gen 2)', 'Preto brilhante transparente a safira', 'DM_20260320161505_003.WEBP'),
          m('Headliner (Gen 2)', 'Preto brilhante transparente a safira', 'DM_20260320161505_004.WEBP'),
        ],
      },
      {
        name: 'Preto Matte',
        swatch: '#1A1A1A',
        image: m('Headliner (Gen 2)', 'preto matte', 'DM_20260320161229_001.WEBP'),
        images: [
          m('Headliner (Gen 2)', 'preto matte', 'DM_20260320161229_002.WEBP'),
          m('Headliner (Gen 2)', 'preto matte', 'DM_20260320161229_003.WEBP'),
          m('Headliner (Gen 2)', 'preto matte', 'DM_20260320161229_004.WEBP'),
          m('Headliner (Gen 2)', 'preto matte', 'DM_20260320161229_005.WEBP'),
        ],
      },
      {
        name: 'Preto Matte Grafite Degradê',
        swatch: '#404040',
        image: m('Headliner (Gen 2)', 'Preto Matte grafite degrade', 'DM_20260320161329_001.WEBP'),
        images: [
          m('Headliner (Gen 2)', 'Preto Matte grafite degrade', 'DM_20260320161329_002.WEBP'),
          m('Headliner (Gen 2)', 'Preto Matte grafite degrade', 'DM_20260320161329_003.WEBP'),
          m('Headliner (Gen 2)', 'Preto Matte grafite degrade', 'DM_20260320161329_004.WEBP'),
          m('Headliner (Gen 2)', 'Preto Matte grafite degrade', 'DM_20260320161329_005.WEBP'),
        ],
      },
      {
        name: 'Preto Brilhante Verde Grafite',
        swatch: '#1A3D22',
        image: m('Headliner (Gen 2)', 'Preto brilhante transparente a verde grafite', 'DM_20260320161406_001.WEBP'),
        images: [
          m('Headliner (Gen 2)', 'Preto brilhante transparente a verde grafite', 'DM_20260320161406_002.WEBP'),
          m('Headliner (Gen 2)', 'Preto brilhante transparente a verde grafite', 'DM_20260320161406_003.WEBP'),
          m('Headliner (Gen 2)', 'Preto brilhante transparente a verde grafite', 'DM_20260320161406_004.WEBP'),
        ],
      },
      {
        name: 'Cinza Asteroide Transparente a Esmeralda',
        swatch: '#2D5A3D',
        image: m('Headliner (Gen 2)', 'Cinza asteroide brilhante Transparentes a Esmeralda', 'DM_20260320161156_001.WEBP'),
        images: [
          m('Headliner (Gen 2)', 'Cinza asteroide brilhante Transparentes a Esmeralda', 'DM_20260320161156_002.WEBP'),
          m('Headliner (Gen 2)', 'Cinza asteroide brilhante Transparentes a Esmeralda', 'DM_20260320161156_003.WEBP'),
          m('Headliner (Gen 2)', 'Cinza asteroide brilhante Transparentes a Esmeralda', 'DM_20260320161156_004.WEBP'),
          m('Headliner (Gen 2)', 'Cinza asteroide brilhante Transparentes a Esmeralda', '01.mp4'),
        ],
      },
      {
        name: 'Preto Matte Verde',
        swatch: '#1E3A2A',
        image: m('Headliner (Gen 2)', 'preto matte verde', 'DM_20260320161259_001.WEBP'),
        images: [
          m('Headliner (Gen 2)', 'preto matte verde', 'DM_20260320161259_002.WEBP'),
          m('Headliner (Gen 2)', 'preto matte verde', 'DM_20260320161259_003.WEBP'),
          m('Headliner (Gen 2)', 'preto matte verde', 'DM_20260320161259_004.WEBP'),
          m('Headliner (Gen 2)', 'preto matte verde', 'DM_20260320161259_005.WEBP'),
          m('Headliner (Gen 2)', 'preto matte verde', 'DM_20260320161259_006.WEBP'),
        ],
      },
    ],
  },

  /* ── 6. Headliner Gen 1 ─────────────────────────────────────────────────── */
  {
    id: 'headliner-gen1',
    name: 'Headliner',
    gen: 'Gen 1',
    tagline: 'Grande personalidade, presença marcante.',
    thumb: m('Headliner (Gen 1)', 'Preto brilhante', 'DM_20260320160819_001.WEBP'),
    sizes: ['Padrão'],
    fits: ['Ponte Alta', 'Ponte Baixa'],
    price: 'R$ 397,90',
    originalPrice: 'R$ 599,00',
    colors: [
      {
        name: 'Preto Brilhante',
        swatch: '#2A2A2A',
        image: m('Headliner (Gen 1)', 'Preto brilhante', 'DM_20260320160819_001.WEBP'),
        images: [
          m('Headliner (Gen 1)', 'Preto brilhante', 'DM_20260320160819_002.WEBP'),
          m('Headliner (Gen 1)', 'Preto brilhante', 'DM_20260320160819_003.WEBP'),
          m('Headliner (Gen 1)', 'Preto brilhante', 'DM_20260320160819_004.WEBP'),
          m('Headliner (Gen 1)', 'Preto brilhante', 'DM_20260320160819_005.WEBP'),
        ],
      },
      {
        name: 'Preto Brilhante Transparente a Safira',
        swatch: '#1A2D5A',
        image: m('Headliner (Gen 1)', 'Preto brilhante Transparentes a Safira', 'DM_20260320160520_001.WEBP'),
        images: [
          m('Headliner (Gen 1)', 'Preto brilhante Transparentes a Safira', 'DM_20260320160520_002.WEBP'),
          m('Headliner (Gen 1)', 'Preto brilhante Transparentes a Safira', 'DM_20260320160520_003.WEBP'),
          m('Headliner (Gen 1)', 'Preto brilhante Transparentes a Safira', 'DM_20260320160520_004.WEBP'),
        ],
      },
      {
        name: 'Preto Matte Carvão',
        swatch: '#1E1E1E',
        image: m('Headliner (Gen 1)', 'Preto Matte Preto carvão', 'DM_20260320160607_001.WEBP'),
        images: [
          m('Headliner (Gen 1)', 'Preto Matte Preto carvão', 'DM_20260320160607_002.WEBP'),
          m('Headliner (Gen 1)', 'Preto Matte Preto carvão', 'DM_20260320160607_003.WEBP'),
          m('Headliner (Gen 1)', 'Preto Matte Preto carvão', 'DM_20260320160607_004.WEBP'),
          m('Headliner (Gen 1)', 'Preto Matte Preto carvão', 'DM_20260320160607_005.WEBP'),
        ],
      },
      {
        name: 'Preto Matte Transitions® Cinza',
        swatch: '#3A3A3A',
        image: m('Headliner (Gen 1)', 'Preto Matte transprarentes a cinza', 'DM_20260320160704_001.WEBP'),
        images: [
          m('Headliner (Gen 1)', 'Preto Matte transprarentes a cinza', 'DM_20260320160704_002.WEBP'),
          m('Headliner (Gen 1)', 'Preto Matte transprarentes a cinza', 'DM_20260320160704_003.WEBP'),
          m('Headliner (Gen 1)', 'Preto Matte transprarentes a cinza', 'DM_20260320160704_004.WEBP'),
          m('Headliner (Gen 1)', 'Preto Matte transprarentes a cinza', 'DM_20260320160704_005.WEBP'),
        ],
      },
      {
        name: 'Marrom Brilhante Transparente',
        swatch: '#7B3A1A',
        image: m('Headliner (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160757_001.WEBP'),
        images: [
          m('Headliner (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160757_002.WEBP'),
          m('Headliner (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160757_003.WEBP'),
          m('Headliner (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160757_004.WEBP'),
          m('Headliner (Gen 1)', 'Marrom brilhante transparente', 'DM_20260320160757_005.WEBP'),
        ],
      },
    ],
  },

  /* ── 7. Oakley Vanguard ─────────────────────────────────────────────────── */
  {
    id: 'oakley-vanguard',
    name: 'Vanguard',
    gen: 'Oakley',
    tagline: 'Performance atlética para o treino de alta intensidade.',
    thumb: m('Vanguard', 'Prizm 24K', 'DM_20260320163950_001.WEBP'),
    sizes: ['Padrão'],
    fits: ['Ponte Alta'],
    price: 'R$ 397,90',
    originalPrice: 'R$ 599,00',
    colors: [
      {
        name: 'Prizm™ 24K',
        swatch: '#2A1A00',
        image: m('Vanguard', 'Prizm 24K', 'DM_20260320163950_001.WEBP'),
        images: [
          m('Vanguard', 'Prizm 24K', 'DM_20260320163950_002.WEBP'),
          m('Vanguard', 'Prizm 24K', 'DM_20260320163950_003.WEBP'),
          m('Vanguard', 'Prizm 24K', 'DM_20260320163950_004.WEBP'),
          m('Vanguard', 'Prizm 24K', 'DM_20260320163950_005.WEBP'),
        ],
      },
      {
        name: 'Branco / Prizm™ Black',
        swatch: '#D8D8D8',
        image: m('Vanguard', 'Branco Prizm Black', 'DM_20260320164024_001.WEBP'),
        images: [
          m('Vanguard', 'Branco Prizm Black', 'DM_20260320164024_002.WEBP'),
          m('Vanguard', 'Branco Prizm Black', 'DM_20260320164024_003.WEBP'),
          m('Vanguard', 'Branco Prizm Black', 'DM_20260320164024_004.WEBP'),
          m('Vanguard', 'Branco Prizm Black', 'DM_20260320164024_005.WEBP'),
        ],
      },
      {
        name: 'Prizm™ Road',
        swatch: '#2A0800',
        image: m('Vanguard', 'Prizm Road', 'DM_20260320164114_001.WEBP'),
        images: [
          m('Vanguard', 'Prizm Road', 'DM_20260320164114_002.WEBP'),
          m('Vanguard', 'Prizm Road', 'DM_20260320164114_003.WEBP'),
          m('Vanguard', 'Prizm Road', 'DM_20260320164114_004.WEBP'),
          m('Vanguard', 'Prizm Road', 'DM_20260320164114_005.WEBP'),
        ],
      },
      {
        name: 'Prizm™ Sapphire',
        swatch: '#C0D0E8',
        image: m('Vanguard', 'Prizm Sapphire', 'DM_20260320164138_001.WEBP'),
        images: [
          m('Vanguard', 'Prizm Sapphire', 'DM_20260320164138_002.WEBP'),
          m('Vanguard', 'Prizm Sapphire', 'DM_20260320164138_003.WEBP'),
          m('Vanguard', 'Prizm Sapphire', 'DM_20260320164138_004.WEBP'),
          m('Vanguard', 'Prizm Sapphire', 'DM_20260320164138_005.WEBP'),
        ],
      },
    ],
  },

  /* ── 8. Oakley HSTN ─────────────────────────────────────────────────────── */
  {
    id: 'oakley-hstn',
    name: 'HSTN',
    gen: 'Oakley',
    tagline: 'Estilo de vida ativo para o uso diário e esportes leves.',
    thumb: m('HSTN', 'Black clear', 'DM_20260320163451_001.WEBP'),
    sizes: ['Padrão'],
    fits: ['Ponte Alta'],
    price: 'R$ 397,90',
    originalPrice: 'R$ 599,00',
    colors: [
      {
        name: 'Black Clear',
        swatch: '#2A2A2A',
        image: m('HSTN', 'Black clear', 'DM_20260320163451_001.WEBP'),
        images: [
          m('HSTN', 'Black clear', 'DM_20260320163451_002.WEBP'),
          m('HSTN', 'Black clear', 'DM_20260320163451_003.WEBP'),
          m('HSTN', 'Black clear', 'DM_20260320163451_004.WEBP'),
          m('HSTN', 'Black clear', 'DM_20260320163451_005.WEBP'),
        ],
      },
      {
        name: 'Black Amethyst',
        swatch: '#4A1A6B',
        image: m('HSTN', 'Black amethyst', 'DM_20260320163559_001.WEBP'),
        images: [
          m('HSTN', 'Black amethyst', 'DM_20260320163559_002.WEBP'),
          m('HSTN', 'Black amethyst', 'DM_20260320163559_003.WEBP'),
          m('HSTN', 'Black amethyst', 'DM_20260320163559_004.WEBP'),
          m('HSTN', 'Black amethyst', '01.mp4'),
        ],
      },
      {
        name: 'Black Polarized',
        swatch: '#111111',
        image: m('HSTN', 'Black polarized', 'DM_20260320163655_001.WEBP'),
        images: [
          m('HSTN', 'Black polarized', 'DM_20260320163655_002.WEBP'),
          m('HSTN', 'Black polarized', 'DM_20260320163655_003.WEBP'),
          m('HSTN', 'Black polarized', 'DM_20260320163655_004.WEBP'),
          m('HSTN', 'Black polarized', 'DM_20260320163655_005.WEBP'),
        ],
      },
      {
        name: 'Brown Smoke',
        swatch: '#0B4F6C',
        image: m('HSTN', 'Brown Smoke', 'DM_20260320163717_001.WEBP'),
        images: [
          m('HSTN', 'Brown Smoke', 'DM_20260320163717_002.WEBP'),
          m('HSTN', 'Brown Smoke', 'DM_20260320163717_003.WEBP'),
          m('HSTN', 'Brown Smoke', 'DM_20260320163717_004.WEBP'),
          m('HSTN', 'Brown Smoke', 'DM_20260320163717_005.WEBP'),
        ],
      },
      {
        name: 'Clear / Transitions® Cinza',
        swatch: '#D8DCE8',
        image: m('HSTN', 'Clear', 'DM_20260320163750_001.WEBP'),
        images: [
          m('HSTN', 'Clear', 'DM_20260320163750_002.WEBP'),
          m('HSTN', 'Clear', 'DM_20260320163750_003.WEBP'),
          m('HSTN', 'Clear', 'DM_20260320163750_004.WEBP'),
          m('HSTN', 'Clear', '01.mp4'),
        ],
      },
      {
        name: 'Warm Grey / Prizm™ 24K',
        swatch: '#9E8A5A',
        image: m('HSTN', 'Warm Grey', 'DM_20260320163629_001.WEBP'),
        images: [
          m('HSTN', 'Warm Grey', 'DM_20260320163629_002.WEBP'),
          m('HSTN', 'Warm Grey', 'DM_20260320163629_003.WEBP'),
          m('HSTN', 'Warm Grey', 'DM_20260320163629_004.WEBP'),
          m('HSTN', 'Warm Grey', 'DM_20260320163629_005.WEBP'),
        ],
      },
    ],
  },
]

export function getImageUrl(model: GlassesModel, colorIdx: number, _size: string): string {
  return model.colors[colorIdx]?.image ?? model.thumb
}
