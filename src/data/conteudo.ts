export type Idioma = 'pt' | 'en';

export const contato = {
  linkedin: 'https://www.linkedin.com/in/allan-lopreti/',
  github: 'https://github.com/allanlopreti',
  email: 'rafael.lopreti@gmail.com',
  emailGaragemAqui: 'contato@garagemaqui.com.br',
  whatsapp: '5511974735850',
  whatsappFormatado: '(11) 97473-5850',
  garagemAqui: 'https://garagemaqui.com.br',
};

export const linkWhatsapp = (mensagem: string) =>
  `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;

interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  local: string;
  resumo: string;
  pontos: string[];
  destaque?: boolean;
}

interface Projeto {
  nome: string;
  descricao: string;
  tags: string[];
  link: string;
  rotuloLink: string;
  imagem?: string;
}

interface Conteudo {
  lang: string;
  locale: string;
  caminho: string;
  titulo: string;
  descricao: string;
  pular: string;
  menu: { href: string; rotulo: string }[];
  outroIdioma: { href: string; rotulo: string; nome: string };
  tema: { claro: string; escuro: string };
  heroi: {
    saudacao: string;
    cargo: string;
    texto: string;
    local: string;
    contato: string;
    garagemAqui: string;
  };
  numeros: { valor: string; rotulo: string }[];
  sobre: { titulo: string; paragrafos: string[] };
  garagemAqui: {
    rotulo: string;
    titulo: string;
    texto: string;
    pontos: string[];
    link: string;
  };
  experiencia: { titulo: string; itens: Experiencia[] };
  projetos: { titulo: string; texto: string; itens: Projeto[] };
  competencias: { titulo: string; grupos: { nome: string; itens: string[] }[] };
  escrita: { titulo: string; texto: string; temas: string[]; link: string };
  recomendacao: { titulo: string; texto: string; autor: string; cargo: string; link: string };
  formacao: {
    titulo: string;
    itens: { nome: string; instituicao: string; periodo: string }[];
    idiomas: string;
    certificados: string;
  };
  contatoSecao: {
    titulo: string;
    texto: string;
    mensagemWhatsapp: string;
    rotulos: { email: string; garagemAqui: string; whatsapp: string };
  };
  rodape: string;
  naoEncontrada: { titulo: string; texto: string; voltar: string };
}

export const conteudo: Record<Idioma, Conteudo> = {
  pt: {
    lang: 'pt-BR',
    locale: 'pt_BR',
    caminho: '/',
    titulo: 'Allan Lopreti · Engenheiro de Software Sênior',
    descricao:
      'Engenheiro de Software Sênior em sistemas financeiros e fundador do GaragemAqui. Java, Spring Boot, Kafka, microsserviços e produto do zero ao ar.',
    pular: 'Pular para o conteúdo',
    menu: [
      { href: '#sobre', rotulo: 'Sobre' },
      { href: '#garagemaqui', rotulo: 'GaragemAqui' },
      { href: '#experiencia', rotulo: 'Experiência' },
      { href: '#projetos', rotulo: 'Projetos' },
      { href: '#contato', rotulo: 'Contato' },
    ],
    outroIdioma: { href: '/en', rotulo: 'EN', nome: 'Read in English' },
    tema: { claro: 'Usar tema claro', escuro: 'Usar tema escuro' },
    heroi: {
      saudacao: 'Olá, eu sou o',
      cargo: 'Engenheiro de Software Sênior · Fundador do GaragemAqui',
      texto:
        'Construo sistemas críticos para o mercado financeiro, onde cada transação precisa estar certa, e coloquei no ar sozinho um produto completo: o GaragemAqui.',
      local: 'São Paulo, Brasil',
      contato: 'Vamos conversar',
      garagemAqui: 'Conheça o GaragemAqui',
    },
    numeros: [
      { valor: '5+', rotulo: 'anos com Java no back-end' },
      { valor: 'FX', rotulo: 'câmbio, tesouraria e core bancário' },
      { valor: '1', rotulo: 'produto criado do zero ao ar' },
    ],
    sobre: {
      titulo: 'Sobre mim',
      paragrafos: [
        'Sou apaixonado por tecnologia desde os 10 anos. Hoje trabalho como Engenheiro de Software Sênior, com foco em sistemas críticos, escaláveis e de alto desempenho, principalmente no back-end, com Java, Spring Boot, microsserviços, APIs REST e mensageria.',
        'Passei por core bancário, tesouraria e, atualmente, câmbio (FX), sempre em ambientes onde disponibilidade e consistência não são opcionais. Também trabalho no front-end com Flutter, Dart, TypeScript e React, o que me permite entregar uma funcionalidade de ponta a ponta.',
        'Sou formado em Gestão da Tecnologia da Informação pelo Senac-SP, com passagem pela Fatec-SP.',
      ],
    },
    garagemAqui: {
      rotulo: 'Projeto próprio',
      titulo: 'GaragemAqui',
      texto:
        'Um marketplace que conecta motoristas a quem tem uma vaga de garagem parada, com aluguel por hora. Criei e desenvolvo sozinho, da ideia ao lançamento.',
      pontos: [
        'App Android e iOS, back-end, site e operação, tudo construído e mantido por mim',
        'Busca no mapa por proximidade, reserva com Pix ou cartão e repasse automático ao dono da vaga',
        'Moderação automática de fotos, chat entre as partes e avaliações para dar segurança aos dois lados',
        'Deploy automatizado, com testes, varredura de segurança e volta de versão em caso de falha',
      ],
      link: 'Visitar garagemaqui.com.br',
    },
    experiencia: {
      titulo: 'Experiência',
      itens: [
        {
          cargo: 'Engenheiro de Software Sênior · Investimento & Câmbio',
          empresa: 'Qaracter Brasil',
          periodo: 'nov. 2026 – atual',
          local: 'São Paulo · Híbrido',
          resumo: 'Alocado no Santander, desenvolvendo aplicações financeiras de Foreign Exchange (FX).',
          pontos: [],
        },
        {
          cargo: 'Fundador e Desenvolvedor',
          empresa: 'GaragemAqui',
          periodo: 'nov. 2026 – atual',
          local: 'Remoto',
          resumo: 'Marketplace de vagas de garagem por hora, criado e desenvolvido sozinho, da ideia ao lançamento.',
          pontos: [],
          destaque: true,
        },
        {
          cargo: 'Analista de Desenvolvimento Back-End Sênior · Tesouraria',
          empresa: 'GFT Technologies',
          periodo: 'abr. 2026 – nov. 2026',
          local: 'São Paulo · Híbrido',
          resumo: 'Arquitetura e evolução de soluções corporativas de tesouraria, do back-end às integrações.',
          pontos: [
            'Arquitetura de microsserviços em Java e Spring Boot, com foco em escalabilidade e resiliência',
            'Concepção da camada Backend-for-Frontend (BFF), reduzindo o acoplamento entre front-end e serviços',
            'Governança de APIs com Sensedia API Gateway e MuleSoft',
            'Pipelines de dados com Databricks, revisões de código e disseminação de boas práticas',
          ],
        },
        {
          cargo: 'Analista de Desenvolvimento Back-End Pleno · Core Bancário',
          empresa: 'Matera',
          periodo: 'dez. 2022 – abr. 2026',
          local: 'Remoto',
          resumo: 'Sistemas críticos de alta disponibilidade em arquitetura distribuída de microsserviços.',
          pontos: [
            'APIs REST em Java e Spring Boot; programação assíncrona para ganhar throughput em APIs críticas',
            'Comunicação orientada a eventos com Kafka e Siddhi (CEP) para processamento em tempo real',
            'CI/CD com Jenkins e Tekton; Docker e Kubernetes com PDB, QoS e KEDA',
            'Testes automatizados (Cucumber, Mockito), observabilidade com Grafana e Prometheus e testes de carga com K6',
          ],
        },
        {
          cargo: 'Estagiário de Desenvolvimento Java',
          empresa: 'Matera',
          periodo: 'jan. 2022 – dez. 2022',
          local: 'Remoto',
          resumo: 'Início da carreira no back-end com Java, Spring e o dia a dia de um time de produto bancário.',
          pontos: [],
        },
      ],
    },
    projetos: {
      titulo: 'Projetos',
      texto: 'Alguns projetos públicos. O código do GaragemAqui é privado, mas o produto está no ar.',
      itens: [
        {
          nome: 'GaragemAqui',
          descricao:
            'Marketplace de vagas de garagem por hora: app Android e iOS em Flutter, back-end em Java e Spring Boot com PostgreSQL/PostGIS, pagamentos e infraestrutura na nuvem.',
          tags: ['Flutter', 'Java', 'Spring Boot', 'PostGIS', 'AWS'],
          link: contato.garagemAqui,
          rotuloLink: 'Ver o produto',
          imagem: '/garagemaqui.png',
        },
        {
          nome: 'ledger-flow',
          descricao:
            'Ledger transacional com lançamentos, depósitos e transações de câmbio com taxa, além de idempotência por chave nas requisições. Um laboratório dos problemas de quem processa dinheiro.',
          tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Liquibase', 'Testcontainers'],
          link: 'https://github.com/allanlopreti/ledger-flow',
          rotuloLink: 'Ver no GitHub',
        },
        {
          nome: 'university_front',
          descricao: 'Aplicativo em Flutter desenvolvido no meu plano de desenvolvimento individual (PDI).',
          tags: ['Flutter', 'Dart'],
          link: 'https://github.com/allanlopreti/university_front',
          rotuloLink: 'Ver no GitHub',
        },
      ],
    },
    competencias: {
      titulo: 'Competências',
      grupos: [
        { nome: 'Back-end', itens: ['Java', 'Spring Boot', 'Microsserviços', 'APIs REST', 'BFF', 'Maven'] },
        { nome: 'Mensageria e dados', itens: ['Apache Kafka', 'Siddhi (CEP)', 'PostgreSQL', 'PostGIS', 'Databricks'] },
        { nome: 'Cloud e DevOps', itens: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Tekton', 'GitHub Actions'] },
        { nome: 'Qualidade e observabilidade', itens: ['Cucumber', 'Mockito', 'K6', 'Grafana', 'Prometheus'] },
        { nome: 'Front-end e mobile', itens: ['Flutter', 'Dart', 'TypeScript', 'React'] },
      ],
    },
    escrita: {
      titulo: 'O que eu compartilho',
      texto: 'Escrevo no LinkedIn sobre o que aprendo construindo sistemas que lidam com dinheiro e com produção de verdade.',
      temas: [
        'O que muda quando seu back-end começa a processar dinheiro',
        'Idempotência em ledgers e processamento duplicado no Kafka',
        'Lições de alta disponibilidade em sistemas críticos',
        'Moderação de imagens que falha fechada, sem deixar passar conteúdo',
      ],
      link: 'Ler no LinkedIn',
    },
    recomendacao: {
      titulo: 'Recomendação',
      texto:
        'Allan é um profissional excepcional, muito proativo, inteligente e obstinado pela solução de problemas! Ressalto sua qualidade técnica no desenvolvimento, olhar de detetive e criteriosidade em seus desenvolvimentos e revisão de código.',
      autor: 'Caio Paiva',
      cargo: 'Senior Software Engineer, trabalhou na mesma equipe',
      link: 'Ver no LinkedIn',
    },
    formacao: {
      titulo: 'Formação',
      itens: [
        { nome: 'Gestão da Tecnologia da Informação', instituicao: 'Centro Universitário Senac', periodo: '2021 – 2023' },
        { nome: 'UpStags! Java Back-End', instituicao: "Ada (Let's Code)", periodo: '2022' },
      ],
      idiomas: 'Português nativo · Inglês intermediário',
      certificados: '34 certificados, entre eles Azure Databricks Foundations (Databricks) e Formação Java e Orientação a Objetos (Alura).',
    },
    contatoSecao: {
      titulo: 'Vamos conversar',
      texto: 'Oportunidades, parcerias ou uma conversa sobre engenharia: me chame pelo canal que preferir.',
      mensagemWhatsapp: 'Olá, Allan! Vi seu portfólio em lopreti.com.br.',
      rotulos: { email: 'E-mail', garagemAqui: 'GaragemAqui', whatsapp: 'WhatsApp' },
    },
    rodape: 'Feito por Allan Lopreti.',
    naoEncontrada: {
      titulo: 'Página não encontrada',
      texto: 'O endereço que você abriu não existe por aqui.',
      voltar: 'Voltar ao início',
    },
  },
  en: {
    lang: 'en',
    locale: 'en_US',
    caminho: '/en',
    titulo: 'Allan Lopreti · Senior Software Engineer',
    descricao:
      'Senior Software Engineer in financial systems and founder of GaragemAqui. Java, Spring Boot, Kafka, microservices and products shipped from scratch.',
    pular: 'Skip to content',
    menu: [
      { href: '#sobre', rotulo: 'About' },
      { href: '#garagemaqui', rotulo: 'GaragemAqui' },
      { href: '#experiencia', rotulo: 'Experience' },
      { href: '#projetos', rotulo: 'Projects' },
      { href: '#contato', rotulo: 'Contact' },
    ],
    outroIdioma: { href: '/', rotulo: 'PT', nome: 'Ler em português' },
    tema: { claro: 'Use light theme', escuro: 'Use dark theme' },
    heroi: {
      saudacao: "Hi, I'm",
      cargo: 'Senior Software Engineer · Founder of GaragemAqui',
      texto:
        'I build critical systems for the financial market, where every transaction has to be right, and I single-handedly shipped a complete product: GaragemAqui.',
      local: 'São Paulo, Brazil',
      contato: "Let's talk",
      garagemAqui: 'Discover GaragemAqui',
    },
    numeros: [
      { valor: '5+', rotulo: 'years of back-end Java' },
      { valor: 'FX', rotulo: 'foreign exchange, treasury and core banking' },
      { valor: '1', rotulo: 'product built from scratch and live' },
    ],
    sobre: {
      titulo: 'About me',
      paragrafos: [
        "I've been passionate about technology since I was 10. Today I work as a Senior Software Engineer focused on critical, scalable, high-performance systems, mostly on the back-end with Java, Spring Boot, microservices, REST APIs and messaging.",
        "I've worked on core banking, treasury and now foreign exchange (FX), always in environments where availability and consistency are not optional. I also work on the front-end with Flutter, Dart, TypeScript and React, which lets me deliver a feature end to end.",
        'I hold a degree in IT Management from Senac-SP and also studied at Fatec-SP.',
      ],
    },
    garagemAqui: {
      rotulo: 'My own product',
      titulo: 'GaragemAqui',
      texto:
        'A marketplace that connects drivers with people who have an idle garage spot, rented by the hour. I created and build it on my own, from idea to launch.',
      pontos: [
        'Android and iOS app, back-end, website and operations, all built and run by me',
        'Map search by proximity, booking with Pix or card and automatic payout to the spot owner',
        'Automatic photo moderation, chat between both parties and reviews to keep both sides safe',
        'Automated deployment with tests, security scanning and rollback on failure',
      ],
      link: 'Visit garagemaqui.com.br',
    },
    experiencia: {
      titulo: 'Experience',
      itens: [
        {
          cargo: 'Senior Software Engineer · Investment & FX',
          empresa: 'Qaracter Brasil',
          periodo: 'Nov 2026 – present',
          local: 'São Paulo · Hybrid',
          resumo: 'Working at Santander, building foreign exchange (FX) financial applications.',
          pontos: [],
        },
        {
          cargo: 'Founder and Developer',
          empresa: 'GaragemAqui',
          periodo: 'Nov 2026 – present',
          local: 'Remote',
          resumo: 'Hourly garage parking marketplace, created and built on my own from idea to launch.',
          pontos: [],
          destaque: true,
        },
        {
          cargo: 'Senior Back-End Developer · Treasury',
          empresa: 'GFT Technologies',
          periodo: 'Apr 2026 – Nov 2026',
          local: 'São Paulo · Hybrid',
          resumo: 'Architecture and evolution of corporate treasury solutions, from back-end to integrations.',
          pontos: [
            'Microservices architecture in Java and Spring Boot, focused on scalability and resilience',
            'Designed the Backend-for-Frontend (BFF) layer, reducing coupling between front-end and services',
            'API governance with Sensedia API Gateway and MuleSoft',
            'Data pipelines with Databricks, code reviews and sharing engineering best practices',
          ],
        },
        {
          cargo: 'Back-End Developer · Core Banking',
          empresa: 'Matera',
          periodo: 'Dec 2022 – Apr 2026',
          local: 'Remote',
          resumo: 'High-availability critical systems in a distributed microservices architecture.',
          pontos: [
            'REST APIs in Java and Spring Boot; asynchronous programming to raise throughput on critical APIs',
            'Event-driven communication with Kafka and Siddhi (CEP) for real-time processing',
            'CI/CD with Jenkins and Tekton; Docker and Kubernetes with PDB, QoS and KEDA',
            'Automated tests (Cucumber, Mockito), observability with Grafana and Prometheus and load tests with K6',
          ],
        },
        {
          cargo: 'Java Development Intern',
          empresa: 'Matera',
          periodo: 'Jan 2022 – Dec 2022',
          local: 'Remote',
          resumo: 'Started my back-end career with Java, Spring and the daily routine of a banking product team.',
          pontos: [],
        },
      ],
    },
    projetos: {
      titulo: 'Projects',
      texto: "Some public projects. GaragemAqui's code is private, but the product is live.",
      itens: [
        {
          nome: 'GaragemAqui',
          descricao:
            'Hourly garage parking marketplace: Android and iOS app in Flutter, Java and Spring Boot back-end with PostgreSQL/PostGIS, payments and cloud infrastructure.',
          tags: ['Flutter', 'Java', 'Spring Boot', 'PostGIS', 'AWS'],
          link: contato.garagemAqui,
          rotuloLink: 'See the product',
          imagem: '/garagemaqui.png',
        },
        {
          nome: 'ledger-flow',
          descricao:
            'Transactional ledger with postings, deposits and FX transactions with exchange rates, plus key-based request idempotency. A lab for the problems of handling money.',
          tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Liquibase', 'Testcontainers'],
          link: 'https://github.com/allanlopreti/ledger-flow',
          rotuloLink: 'View on GitHub',
        },
        {
          nome: 'university_front',
          descricao: 'Flutter app built as part of my individual development plan (IDP).',
          tags: ['Flutter', 'Dart'],
          link: 'https://github.com/allanlopreti/university_front',
          rotuloLink: 'View on GitHub',
        },
      ],
    },
    competencias: {
      titulo: 'Skills',
      grupos: [
        { nome: 'Back-end', itens: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'BFF', 'Maven'] },
        { nome: 'Messaging and data', itens: ['Apache Kafka', 'Siddhi (CEP)', 'PostgreSQL', 'PostGIS', 'Databricks'] },
        { nome: 'Cloud and DevOps', itens: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Tekton', 'GitHub Actions'] },
        { nome: 'Quality and observability', itens: ['Cucumber', 'Mockito', 'K6', 'Grafana', 'Prometheus'] },
        { nome: 'Front-end and mobile', itens: ['Flutter', 'Dart', 'TypeScript', 'React'] },
      ],
    },
    escrita: {
      titulo: 'What I write about',
      texto: 'I write on LinkedIn (in Portuguese) about what I learn building systems that handle money and real production traffic.',
      temas: [
        'What changes when your back-end starts processing money',
        'Idempotency in ledgers and duplicate processing in Kafka',
        'High availability lessons from critical systems',
        'Image moderation that fails closed',
      ],
      link: 'Read on LinkedIn',
    },
    recomendacao: {
      titulo: 'Recommendation',
      texto:
        'Allan is an exceptional professional, very proactive, smart and relentless about solving problems! I highlight his technical quality, his detective eye and his thoroughness in development and code review.',
      autor: 'Caio Paiva',
      cargo: 'Senior Software Engineer, worked on the same team',
      link: 'See on LinkedIn',
    },
    formacao: {
      titulo: 'Education',
      itens: [
        { nome: 'IT Management (Gestão da Tecnologia da Informação)', instituicao: 'Centro Universitário Senac', periodo: '2021 – 2023' },
        { nome: 'UpStags! Java Back-End', instituicao: "Ada (Let's Code)", periodo: '2022' },
      ],
      idiomas: 'Portuguese (native) · English (intermediate)',
      certificados: '34 certificates, including Azure Databricks Foundations (Databricks) and Java and Object-Oriented Programming (Alura).',
    },
    contatoSecao: {
      titulo: "Let's talk",
      texto: 'Opportunities, partnerships or an engineering chat: reach me through whichever channel you prefer.',
      mensagemWhatsapp: 'Hi Allan! I saw your portfolio at lopreti.com.br.',
      rotulos: { email: 'Email', garagemAqui: 'GaragemAqui', whatsapp: 'WhatsApp' },
    },
    rodape: 'Made by Allan Lopreti.',
    naoEncontrada: {
      titulo: 'Page not found',
      texto: "The address you opened doesn't exist here.",
      voltar: 'Back to home',
    },
  },
};
