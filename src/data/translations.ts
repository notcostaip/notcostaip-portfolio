export type Language = "PT" | "EN" | "ES" | "FR" | "ZH";

export const translations = {
    PT: {
        nav: {
            home: "Home",
            solutions: "Soluções",
            portfolio: "Portfólio",
            investment: "Investimento",
            faq: "FAQ",
            hireMe: "Contrate-me"
        },
        hero: {
            greeting: "Olá, eu sou o",
            role: "Estrategista Digital",
            description: "Estrategista Digital e Desenvolvedor Full-stack focado em Alta Performance. Não sou apenas um programador, sou seu parceiro estratégico de tecnologia para alavancar negócios.",
            contact: "Entre em Contato",
            projects: "Ver Projetos"
        },
        investment: {
            title: "Investimento Único",
            subtitle: "Projetos entregues prontos para usar. Sem mensalidades ocultas.",
            disclaimer: "Valores estimados baseados em escopos padrão. Podemos negociar e adaptar o pacote para caber no orçamento do seu momento atual.",
            cards: [
                {
                    title: "Landing Page",
                    tag: "High-Performance",
                    price: "2.200",
                    desc: "Foco total em campanhas e vendas.",
                    features: ["Design One-Page", "Alta Conversão", "Pixel Setup", "Otimização Mobile"]
                },
                {
                    title: "Posicionamento",
                    tag: "Authority",
                    price: "3.600",
                    recommended: "Recomendado",
                    desc: "Site Institucional Completo e Blog.",
                    features: ["Multi-páginas", "SEO Técnico Avançado", "Blog/Notícias", "Painel Administrativo"]
                },
                {
                    title: "Ecossistema",
                    tag: "Digital",
                    price: "5.500",
                    desc: "Lojas Virtuais e Sistemas.",
                    features: ["E-commerce", "Área de Membros", "Integração CRM", "Design System"]
                }
            ]
        },
        services: {
            title: "Soluções Digitais Estratégicas",
            items: [
                {
                    title: "Landing Page High-Performance",
                    desc: "Não é apenas uma página, é uma ferramenta para converter visitantes em receita. Design One-Page focado em engenharia de vendas e carregamento instantâneo. Ideal para gerar negócios com tráfego pago."
                },
                {
                    title: "Posicionamento Authority",
                    desc: "Plataforma de marca robusta para líderes de mercado. Arquitetura multi-páginas com Blog para Marketing de Conteúdo e SEO Técnico nativo. A escolha certa para escritórios e consultorias."
                },
                {
                    title: "Ecossistema Digital & E-commerce",
                    desc: "Para projetos de escala. Lojas Virtuais seguras, Áreas de Membros e integrações via API (CRM, Email). Um Design System completo que centraliza sua operação digital."
                }
            ]
        },
        methodology: {
            title: "Por que meus projetos performam melhor?",
            items: [
                {
                    title: "Design Premium & Visual",
                    desc: "Estética inspirada na fluidez Apple/iOS: minimalista e intencional. Interfaces que transmitem confiança imediata e valor de marca."
                },
                {
                    title: "Velocidade É Dinheiro",
                    desc: "Sites lentos perdem 40% dos visitantes. Meus projetos High-Performance carregam instantaneamente para máxima retenção."
                },
                {
                    title: "Mobile-First Real",
                    desc: "Desenvolvimento nativo para experiência móvel. Navegação fluida e 'thumb-friendly' que funciona perfeitamente em qualquer iPhone ou Android."
                },
                {
                    title: "Código Limpo & Escalável",
                    desc: "Arquitetura robusta e semântica. Codebase organizada que facilita manutenção e garante a longevidade do software."
                }
            ]
        },
        process: {
            title: "Processo de Desenvolvimento",
            steps: [
                {
                    title: "01. Design & Estratégia Visual",
                    desc: "Definição de arquitetura e identidade visual (3-4 dias). Protótipos de alta fidelidade para garantir alinhamento total com seus objetivos."
                },
                {
                    title: "02. Engenharia Code-First",
                    desc: "Programação linha por linha (sem construtores lentos). Foco total em semântica, segurança, animações fluidas e performance extrema."
                },
                {
                    title: "03. Testes, SEO & Lançamento",
                    desc: "Bateria de testes de compatibilidade, auditoria de SEO Técnico, configuração de domínios/SSL e lançamento oficial."
                }
            ]
        },
        faq: {
            title: "Perguntas Frequentes",
            items: [
                {
                    question: "Qual a diferença entre um site comum e Alta Performance?",
                    answer: "A diferença é conversão e tecnologia. Meus projetos são aplicações web modernas (Next.js), seguras e rápidas, focadas em converter visitantes sem 'quebrar' ou carregar lentamente."
                },
                {
                    question: "Você atende empresas de quais regiões?",
                    answer: "Sou um parceiro global. Atendo todo o Brasil (com forte presença em Goiânia e Brasília) e exterior remotamente, com infraestrutura cloud de nível internacional."
                },
                {
                    question: "Como funciona o ranqueamento no Google?",
                    answer: "O Google prioriza velocidade e estrutura. Meus projetos nascem com SEO Técnico avançado, criando a fundação perfeita para escalar nas buscas orgânicas."
                },
                {
                    question: "Onde o site fica hospedado? É seguro?",
                    answer: "Utilizo infraestrutura Cloud VPS dedicada e gerenciada. Blindagem contra invasões, monitoramento 24/7 e alta capacidade de tráfego. Muito superior a hospedagens compartilhadas."
                }
            ]
        },
        about: {
            title: "O que eu faço",
            description: "Eu posso ajudar a desenvolver soluções que impulsionam o crescimento do seu negócio:",
            whatIDo: "O que eu faço",
            whatIDoDesc: "Soluções completas para seu negócio.",
            whatIDoList: [
                { title: "UI/UX Design", icon: "Palette" },
                { title: "Desenvolvimento Web Fullstack", icon: "Layout" },
                { title: "Desenvolvimento Mobile", icon: "Smartphone" },
                { title: "Modelagem de Banco de Dados", icon: "Database" },
                { title: "Integração de APIs", icon: "Server" }
            ],
            tools: "Ferramentas que eu utilizo",
            toolsDesc: "Uso as tecnologias mais atuais para criar produtos funcionais, modernos e escaláveis:",
            toolsCategories: {
                frontend: { title: "Frontend", items: ["JavaScript", "HTML5", "Next.js", "Tailwind CSS", "React", "TypeScript"] },
                backend: { title: "Backend", items: ["Node.js", "Fastify", "MongoDB"] },
                design: { title: "Design", items: ["Figma", "Framer"] }
            },
            uiuxTitle: "UI/UX Design",
            uiuxDesc: "Antes de tudo, sou designer — depois, desenvolvedor. Posso criar interfaces limpas, modernas e focadas no usuário:",
            uiuxFeatures: ["Design Centrado no Usuário", "UI Moderna e Minimalista", "Layouts Responsivos", "Wireframes & Protótipos"],
            explore: "Explore"
        },
        contact: {
            viewProjects: "Ver Meus Projetos",
            title: "Vamos escalar seu negócio?",
            subtitle: "Transforme sua visão em autoridade digital",
            desc: "Seu próximo nível começa com uma conversa estratégica.",
            form: {
                name: "Nome",
                phone: "Telefone / WhatsApp",
                email: "Email Profissional",
                message: "Como posso ajudar seu negócio?",
                submit: "Solicitar Consultoria",
                placeholderName: "Seu Nome",
                placeholderPhone: "(00) 00000-0000",
                placeholderEmail: "seuemail@empresa.com",
                placeholderMsg: "Descreva seu projeto..."
            }
        },
        footer: {
            role: "Estrategista Digital",
            madeIn: "Desenvolvido no Brasil",
            rights: "Todos os direitos reservados."
        },
        projectsPage: {
            title: "Portfólio Selecionado",
            description: "Projetos que unem estética premium e engenharia de alta performance.",
            viewDetails: "Ver Case"
        },
        projectDetails: {
            back: "Voltar para Portfólio",
            visit: "Visitar Site",
            repo: "Código Fonte",
            year: "Ano",
            category: "Categoria",
            about: "Sobre o Projeto",
            features: "Diferenciais",
            tech: "Tecnologias",
            gallery: "Galeria"
        }
    },
    EN: {
        nav: {
            home: "Home",
            solutions: "Solutions",
            portfolio: "Portfolio",
            investment: "Investment",
            faq: "FAQ",
            hireMe: "Hire Me"
        },
        hero: {
            greeting: "Hello, I am",
            role: "Digital Strategist",
            description: "Digital Strategist and Full-stack Developer focused on High Performance. I'm not just a coder, I'm your strategic technology partner to leverage business.",
            contact: "Get in Touch",
            projects: "View Projects"
        },
        investment: {
            title: "One-time Investment",
            subtitle: "Projects delivered ready to use. No hidden fees.",
            disclaimer: "Estimated values based on standard scopes. We can negotiate and adapt the package to fit your current budget.",
            cards: [
                {
                    title: "Landing Page",
                    tag: "High-Performance",
                    price: "2,200",
                    desc: "Total focus on campaigns and sales.",
                    features: ["One-Page Design", "High Conversion", "Pixel Setup", "Mobile Optimization"]
                },
                {
                    title: "Positioning",
                    tag: "Authority",
                    price: "3,600",
                    recommended: "Recommended",
                    desc: "Complete Institutional Site.",
                    features: ["Multi-page", "Advanced Technical SEO", "Blog/News", "Admin Panel"]
                },
                {
                    title: "Ecosystem",
                    tag: "Digital",
                    price: "5,500",
                    desc: "Virtual Stores and Systems.",
                    features: ["E-commerce", "Member Area", "CRM Integration", "Design System"]
                }
            ]
        },
        services: {
            title: "Strategic Digital Solutions",
            items: [
                {
                    title: "High-Performance Landing Page",
                    desc: "Not just a page, a conversion tool. One-Page Design focused on sales engineering and instant loading. Ideal for generating business with paid traffic."
                },
                {
                    title: "Authority Positioning",
                    desc: "Robust brand platform for market leaders. Multi-page architecture with Blog for Content Marketing and native Technical SEO. The right choice for offices and consultancies."
                },
                {
                    title: "Digital Ecosystem & E-commerce",
                    desc: "For scale projects. Secure Online Stores, Member Areas, and API integrations (CRM, Email). A complete Design System centralizing your digital operation."
                }
            ]
        },
        methodology: {
            title: "Why my projects perform better?",
            items: [
                {
                    title: "Premium Design & Visual",
                    desc: "Aesthetics inspired by Apple/iOS fluidity: minimalist and intentional. Interfaces that convey immediate trust and brand value."
                },
                {
                    title: "Speed is Money",
                    desc: "Slow sites lose 40% of visitors. My High-Performance projects load instantly for maximum retention."
                },
                {
                    title: "Real Mobile-First",
                    desc: "Native development for mobile experience. Fluid and 'thumb-friendly' navigation that works perfectly on any iPhone or Android."
                },
                {
                    title: "Clean & Scalable Code",
                    desc: "Robust and semantic architecture. Organized codebase that facilitates maintenance and ensures software longevity."
                }
            ]
        },
        process: {
            title: "Development Process",
            steps: [
                {
                    title: "01. Design & Visual Strategy",
                    desc: "Architecture and visual identity definition (3-4 days). High-fidelity prototypes to ensure full alignment with your objectives."
                },
                {
                    title: "02. Code-First Engineering",
                    desc: "Line-by-line programming (no slow builders). Total focus on semantics, security, fluid animations, and extreme performance."
                },
                {
                    title: "03. Tests, SEO & Launch",
                    desc: "Compatibility testing suite, Technical SEO audit, domain/SSL setup, and official launch."
                }
            ]
        },
        faq: {
            title: "Frequently Asked Questions",
            items: [
                {
                    question: "Difference between common vs High Performance site?",
                    answer: "The difference is conversion and technology. My projects are modern web apps (Next.js), secure and fast, focused on converting visitors without breaking or loading slowly."
                },
                {
                    question: "Which regions do you serve?",
                    answer: "I am a global partner. I serve all of Brazil (strong presence in Goiânia and Brasília) and abroad remotely, with international-level cloud infrastructure."
                },
                {
                    question: "How does Google ranking work?",
                    answer: "Google prioritizes speed and structure. My projects are born with advanced Technical SEO, creating the perfect foundation to scale in organic searches."
                },
                {
                    question: "Where is the site hosted? Is it secure?",
                    answer: "I use dedicated and managed Cloud VPS infrastructure. Shielding against intrusions, 24/7 monitoring, and high traffic capacity. Far superior to shared hosting."
                }
            ]
        },
        about: {
            title: "What I Do",
            description: "I can help develop solutions that drive your business growth:",
            whatIDo: "What I Do",
            whatIDoDesc: "Complete solutions for your business.",
            whatIDoList: [
                { title: "UI/UX Design", icon: "Palette" },
                { title: "Fullstack Web Development", icon: "Layout" },
                { title: "Mobile Development", icon: "Smartphone" },
                { title: "Database Modeling", icon: "Database" },
                { title: "API Integration", icon: "Server" }
            ],
            tools: "Tools I Use",
            toolsDesc: "I use the latest technologies to create functional, modern, and scalable products:",
            toolsCategories: {
                frontend: { title: "Frontend", items: ["JavaScript", "HTML5", "Next.js", "Tailwind CSS", "React", "TypeScript"] },
                backend: { title: "Backend", items: ["Node.js", "Fastify", "MongoDB"] },
                design: { title: "Design", items: ["Figma", "Framer"] }
            },
            uiuxTitle: "UI/UX Design",
            uiuxDesc: "First and foremost, I am a designer — then, a developer. I create clean, modern, user-focused interfaces:",
            uiuxFeatures: ["User-Centered Design", "Modern & Minimalist UI", "Responsive Layouts", "Wireframes & Prototypes"],
            explore: "Explore"
        },
        contact: {
            viewProjects: "View My Projects",
            title: "Let's scale your business?",
            subtitle: "Turn your vision into digital authority",
            desc: "Your next level starts with a strategic conversation.",
            form: {
                name: "Name",
                phone: "Phone / WhatsApp",
                email: "Professional Email",
                message: "How can I help your business?",
                submit: "Request Consult",
                placeholderName: "Your Name",
                placeholderPhone: "(00) 00000-0000",
                placeholderEmail: "email@company.com",
                placeholderMsg: "Describe your project..."
            }
        },
        footer: {
            role: "Digital Strategist",
            madeIn: "Made in Brazil",
            rights: "All rights reserved."
        },
        projectsPage: {
            title: "Selected Portfolio",
            description: "Projects combining premium aesthetics and high-performance engineering.",
            viewDetails: "View Case"
        },
        projectDetails: {
            back: "Back to Portfolio",
            visit: "Visit Site",
            repo: "Source Code",
            year: "Year",
            category: "Category",
            about: "About Project",
            features: "Key Features",
            tech: "Technologies",
            gallery: "Gallery"
        }
    },
    ES: {
        nav: {
            home: "Inicio",
            solutions: "Soluciones",
            portfolio: "Portafolio",
            investment: "Inversión",
            faq: "FAQ",
            hireMe: "Contrátame"
        },
        hero: {
            greeting: "Hola, soy",
            role: "Estratega Digital",
            description: "Estratega Digital y Desarrollador Full-stack enfocado en Alto Rendimiento. No soy solo un programador, soy tu socio tecnológico estratégico.",
            contact: "Contáctame",
            projects: "Ver Proyectos"
        },
        investment: {
            title: "Inversión Única",
            subtitle: "Proyectos entregados listos para usar. Sin tarifas ocultas.",
            disclaimer: "Valores estimados basados en alcances estándar. Podemos negociar y adaptar el paquete para ajustarse a su presupuesto actual.",
            cards: [
                {
                    title: "Landing Page",
                    tag: "Alto Rendimiento",
                    price: "2.200",
                    desc: "Enfoque total en campañas y ventas.",
                    features: ["Diseño One-Page", "Alta Conversión", "Configuración de Pixel", "Optimización Móvil"]
                },
                {
                    title: "Posicionamiento",
                    tag: "Autoridad",
                    price: "3.600",
                    recommended: "Recomendado",
                    desc: "Sitio Institucional Completo.",
                    features: ["Multi-página", "SEO Técnico Avanzado", "Blog/Noticias", "Panel Administrativo"]
                },
                {
                    title: "Ecosistema",
                    tag: "Digital",
                    price: "5.500",
                    desc: "Tiendas Virtuales y Sistemas.",
                    features: ["E-commerce", "Área de Miembros", "Integración CRM", "Design System"]
                }
            ]
        },
        services: {
            title: "Soluciones Digitales Estratégicas",
            items: [
                {
                    title: "Landing Page High-Performance",
                    desc: "No es solo una página, es una herramienta de conversión. Diseño One-Page enfocado en ingeniería de ventas y carga instantánea."
                },
                {
                    title: "Posicionamiento de Autoridad",
                    desc: "Plataforma de marca robusta para líderes. Arquitectura multi-página con Blog y SEO Técnico nativo."
                },
                {
                    title: "Ecosistema Digital & E-commerce",
                    desc: "Tiendas Virtuales seguras y áreas de miembros. Un Design System completo que centraliza tu operación digital."
                }
            ]
        },
        methodology: {
            title: "¿Por qué mis proyectos rinden mejor?",
            items: [
                {
                    title: "Diseño Premium & Visual",
                    desc: "Estética inspirada en Apple/iOS: minimalista e intencional. Interfaces que transmiten confianza."
                },
                {
                    title: "Velocidad es Dinero",
                    desc: "Sitios lentos pierden 40% de visitas. Mis proyectos cargan instantáneamente."
                },
                {
                    title: "Mobile-First Real",
                    desc: "Desarrollo nativo para móviles. Navegación fluida para iPhone y Android."
                },
                {
                    title: "Código Limpio y Escalable",
                    desc: "Arquitectura robusta. Código organizado que facilita el mantenimiento."
                }
            ]
        },
        process: {
            title: "Proceso de Desarrollo",
            steps: [
                {
                    title: "01. Diseño y Estrategia",
                    desc: "Definición visual y prototipos de alta fidelidad (3-4 días)."
                },
                {
                    title: "02. Ingeniería Code-First",
                    desc: "Programación línea por línea. Enfoque en seguridad y performance extrema."
                },
                {
                    title: "03. Tests, SEO y Lanzamiento",
                    desc: "Pruebas, auditoría SEO, configuración de dominios y lanzamiento."
                }
            ]
        },
        faq: {
            title: "Preguntas Frecuentes",
            items: [
                {
                    question: "¿Diferencia vs sitio común?",
                    answer: "Conversión y tecnología. Aplicaciones modernas, seguras y rápidas."
                },
                {
                    question: "¿Qué regiones atiendes?",
                    answer: "Globalmente. Atiendo todo Brasil y el extranjero con infraestructura cloud."
                },
                {
                    question: "¿Ranking en Google?",
                    answer: "Priorizo velocidad y estructura. SEO Técnico avanzado incluido."
                },
                {
                    question: "¿Dónde se aloja?",
                    answer: "Infraestructura Cloud VPS dedicada y segura. Superior a hosting compartido."
                }
            ]
        },
        about: {
            title: "Visión de Negocio",
            description: "Resultados reales.",
            whatIDo: "Expertise",
            whatIDoDesc: "Dominio del stack moderno.",
            whatIDoList: [
                { title: "Diseño UI/UX", icon: "Palette" },
                { title: "Desarrollo Web Fullstack", icon: "Layout" },
                { title: "Desarrollo Móvil", icon: "Smartphone" },
                { title: "Base de Datos", icon: "Database" },
                { title: "Integración de API", icon: "Server" }
            ],
            tools: "Arsenal",
            toolsDesc: "Tecnologías de punta.",
            toolsCategories: {
                frontend: { title: "Frontend", items: ["JavaScript", "HTML5", "Next.js", "Tailwind CSS", "React", "TypeScript"] },
                backend: { title: "Backend", items: ["Node.js", "Fastify", "MongoDB"] },
                design: { title: "Diseño", items: ["Figma", "Framer"] }
            },
            uiuxTitle: "UI/UX & Design",
            uiuxDesc: "Diseño que convierte.",
            uiuxFeatures: ["Diseño Centrado en Usuario", "UI Moderna", "Responsivo", "Prototipos"],
            explore: "Explorar"
        },
        contact: {
            viewProjects: "Ver Proyectos",
            title: "¿Escalamos tu negocio?",
            subtitle: "Transforma tu visión",
            desc: "Hablemos de estrategia.",
            form: {
                name: "Nombre",
                phone: "Teléfono",
                email: "Email",
                message: "Mensaje",
                submit: "Enviar",
                placeholderName: "Nombre",
                placeholderPhone: "Teléfono",
                placeholderEmail: "email@ejemplo.com",
                placeholderMsg: "Mensaje..."
            }
        },
        footer: {
            role: "Estratega Digital",
            madeIn: "Hecho en Brasil",
            rights: "Reservados todos los derechos."
        },
        projectsPage: {
            title: "Portafolio",
            description: "Proyectos selectos.",
            viewDetails: "Ver Detalle"
        },
        projectDetails: {
            back: "Volver",
            visit: "Visitar",
            repo: "Código",
            year: "Año",
            category: "Categoría",
            about: "Sobre",
            features: "Características",
            tech: "Tecnologías",
            gallery: "Galería"
        }
    },
    FR: {
        nav: {
            home: "Accueil",
            solutions: "Solutions",
            portfolio: "Portfolio",
            investment: "Investissement",
            faq: "FAQ",
            hireMe: "Engagez-moi"
        },
        hero: {
            greeting: "Bonjour, je suis",
            role: "Stratège Numérique",
            description: "Stratège Numérique et Développeur Full-stack axé sur la Haute Performance. Je suis votre partenaire technologique stratégique.",
            contact: "Contactez-moi",
            projects: "Voir Projets"
        },
        investment: {
            title: "Investissement Unique",
            subtitle: "Projets livrés clés en main. Pas de frais cachés.",
            disclaimer: "Valeurs estimées basées sur des périmètres standard. Nous pouvons négocier et adapter le forfait à votre budget actuel.",
            cards: [
                {
                    title: "Landing Page",
                    tag: "Haute Performance",
                    price: "2 200",
                    desc: "Focalisation totale sur les campagnes et les ventes.",
                    features: ["Design One-Page", "Haute Conversion", "Configuration Pixel", "Optimisation Mobile"]
                },
                {
                    title: "Positionnement",
                    tag: "Autorité",
                    price: "3 600",
                    recommended: "Recommandé",
                    desc: "Site Institutionnel Complet.",
                    features: ["Multi-pages", "SEO Technique Avancé", "Blog/Actualités", "Panneau Administratif"]
                },
                {
                    title: "Écosystème",
                    tag: "Numérique",
                    price: "5 500",
                    desc: "Boutiques Virtuelles et Systèmes.",
                    features: ["E-commerce", "Espace Membres", "Intégration CRM", "Design System"]
                }
            ]
        },
        services: {
            title: "Solutions Numériques Stratégiques",
            items: [
                {
                    title: "Landing Page Haute Performance",
                    desc: "Outil de conversion. Design One-Page axé sur l'ingénierie des ventes et le chargement instantané."
                },
                {
                    title: "Positionnement d'Autorité",
                    desc: "Plateforme de marque robuste. Architecture multi-pages avec SEO Technique natif."
                },
                {
                    title: "Écosystème Numérique",
                    desc: "Boutiques en ligne sécurisées et intégrations API. Design System complet."
                }
            ]
        },
        methodology: {
            title: "Pourquoi mes projets sont meilleurs?",
            items: [
                {
                    title: "Design Premium",
                    desc: "Esthétique inspirée par Apple/iOS. Interfaces qui inspirent confiance."
                },
                {
                    title: "La Vitesse c'est de l'Argent",
                    desc: "Les sites lents perdent des visiteurs. Mes projets sont instantanés."
                },
                {
                    title: "Mobile-First Réel",
                    desc: "Développement natif pour mobile. Navigation fluide iPhone/Android."
                },
                {
                    title: "Code Propre et Évolutif",
                    desc: "Architecture robuste. Base de code organisée pour une maintenance facile."
                }
            ]
        },
        process: {
            title: "Processus de Développement",
            steps: [
                {
                    title: "01. Design & Stratégie",
                    desc: "Définition visuelle et prototypes (3-4 jours)."
                },
                {
                    title: "02. Ingénierie Code-First",
                    desc: "Programmation ligne par ligne. Sécurité et performance extrême."
                },
                {
                    title: "03. Tests, SEO & Lancement",
                    desc: "Tests, audit SEO, configuration domaine et lancement."
                }
            ]
        },
        faq: {
            title: "Questions Fréquentes",
            items: [
                {
                    question: "Différence vs site commun?",
                    answer: "Conversion et technologie. Apps modernes, sécurisées et rapides."
                },
                {
                    question: "Quelles régions?",
                    answer: "Mondial. Infrastructure cloud internationale."
                },
                {
                    question: "Classement Google?",
                    answer: "Je priorise vitesse et structure. SEO Technique inclus."
                },
                {
                    question: "Hébergement?",
                    answer: "Cloud VPS dédié et sécurisé."
                }
            ]
        },
        about: {
            title: "Vision d'Affaires",
            description: "Résultats réels.",
            whatIDo: "Expertise",
            whatIDoDesc: "Maîtrise du stack moderne.",
            whatIDoList: [
                { title: "Design UI/UX", icon: "Palette" },
                { title: "Développement Web Fullstack", icon: "Layout" },
                { title: "Développement Mobile", icon: "Smartphone" },
                { title: "Base de Données", icon: "Database" },
                { title: "Intégration API", icon: "Server" }
            ],
            tools: "Arsenal",
            toolsDesc: "Technologies de pointe.",
            toolsCategories: {
                frontend: { title: "Frontend", items: ["JavaScript", "HTML5", "Next.js", "Tailwind CSS", "React", "TypeScript"] },
                backend: { title: "Backend", items: ["Node.js", "Fastify", "MongoDB"] },
                design: { title: "Design", items: ["Figma", "Framer"] }
            },
            uiuxTitle: "UI/UX & Design",
            uiuxDesc: "Design qui convertit.",
            uiuxFeatures: ["Centré Utilisateur", "UI Moderne", "Responsive", "Prototypes"],
            explore: "Explorer"
        },
        contact: {
            viewProjects: "Voir Projets",
            title: "Développons votre entreprise?",
            subtitle: "Transformez votre vision",
            desc: "Parlons stratégie.",
            form: {
                name: "Nom",
                phone: "Téléphone",
                email: "Email",
                message: "Message",
                submit: "Envoyer",
                placeholderName: "Nom",
                placeholderPhone: "Téléphone",
                placeholderEmail: "email@exemple.com",
                placeholderMsg: "Message..."
            }
        },
        footer: {
            role: "Stratège Numérique",
            madeIn: "Fait au Brésil",
            rights: "Tous droits réservés."
        },
        projectsPage: {
            title: "Portfolio",
            description: "Projets sélectionnés.",
            viewDetails: "Voir Détails"
        },
        projectDetails: {
            back: "Retour",
            visit: "Visiter",
            repo: "Code",
            year: "Année",
            category: "Catégorie",
            about: "À propos",
            features: "Caractéristiques",
            tech: "Technologies",
            gallery: "Galerie"
        }
    },
    ZH: {
        nav: {
            home: "首页",
            solutions: "解决方案",
            portfolio: "投资组合",
            investment: "投资",
            faq: "常见问题",
            hireMe: "聘请我"
        },
        hero: {
            greeting: "你好，我是",
            role: "数字战略家",
            description: "专注于高性能的数字战略家和全栈开发人员。我不仅是程序员，更是您的战略技术合作伙伴。",
            contact: "联系我",
            projects: "查看项目"
        },
        investment: {
            title: "一次性投资",
            subtitle: "项目交付即可使用。无隐藏费用。",
            disclaimer: "估值基于标准范围。我们可以协商并调整套餐以适应您当前的预算。",
            cards: [
                {
                    title: "着陆页",
                    tag: "高性能",
                    price: "2,200",
                    desc: "专注于活动和销售。",
                    features: ["单页设计", "高转化率", "像素设置", "移动端优化"]
                },
                {
                    title: "品牌定位",
                    tag: "权威",
                    price: "3,600",
                    recommended: "推荐",
                    desc: "完整的机构网站。",
                    features: ["多页面", "高级技术 SEO", "博客/新闻", "管理后台"]
                },
                {
                    title: "生态系统",
                    tag: "数字",
                    price: "5,500",
                    desc: "虚拟商店和系统。",
                    features: ["电子商务", "会员专区", "CRM 集成", "设计系统"]
                }
            ]
        },
        services: {
            title: "战略数字解决方案",
            items: [
                {
                    title: "高性能着陆页",
                    desc: "不仅仅是页面，更是转化工具。专注于销售工程和即时加载的单页设计。"
                },
                {
                    title: "权威定位",
                    desc: "为市场领导者打造的强大品牌平台。包含内容营销博客和原生技术SEO的多页架构。"
                },
                {
                    title: "数字生态系统 & 电子商务",
                    desc: "适用规模化项目。安全的在线商店和会员区。完整的数字运营设计系统。"
                }
            ]
        },
        methodology: {
            title: "为什么我的项目表现更好？",
            items: [
                {
                    title: "优质设计 & 视觉",
                    desc: "灵感来自 Apple/iOS 的流畅美学：极简且有意图。传递即时信任的界面。"
                },
                {
                    title: "速度就是金钱",
                    desc: "缓慢的网站会流失 40% 的访客。我的项目即时加载。"
                },
                {
                    title: "真正的移动优先",
                    desc: "原生移动开发。适合 iPhone/Android 的流畅导航。"
                },
                {
                    title: "整洁且可扩展的代码",
                    desc: "健壮的架构。有组织的代码库，易于维护。"
                }
            ]
        },
        process: {
            title: "开发流程",
            steps: [
                {
                    title: "01. 设计 & 策略",
                    desc: "视觉定义和高保真原型（3-4天）。"
                },
                {
                    title: "02. 代码优先工程",
                    desc: "逐行编程。专注于安全性和极致性能。"
                },
                {
                    title: "03. 测试, SEO & 发布",
                    desc: "测试，SEO审计，域名配置和发布。"
                }
            ]
        },
        faq: {
            title: "常见问题",
            items: [
                {
                    question: "与普通网站的区别？",
                    answer: "转化率和技术。现代、安全且快速的应用程序。"
                },
                {
                    question: "服务区域？",
                    answer: "全球。拥有国际级云基础设施。"
                },
                {
                    question: "Google 排名？",
                    answer: "优先考虑速度和结构。包含高级技术 SEO。"
                },
                {
                    question: "托管在哪里？",
                    answer: "专用且安全的各项云 VPS。"
                }
            ]
        },
        about: {
            title: "商业愿景",
            description: "真实结果。",
            whatIDo: "专长",
            whatIDoDesc: "掌握现代技术栈。",
            whatIDoList: [
                { title: "UI/UX 设计", icon: "Palette" },
                { title: "全栈 Web 开发", icon: "Layout" },
                { title: "移动开发", icon: "Smartphone" },
                { title: "数据库建模", icon: "Database" },
                { title: "API 集成", icon: "Server" }
            ],
            tools: "技术库",
            toolsDesc: "尖端技术。",
            toolsCategories: {
                frontend: { title: "前端", items: ["JavaScript", "HTML5", "Next.js", "Tailwind CSS", "React", "TypeScript"] },
                backend: { title: "后端", items: ["Node.js", "Fastify", "MongoDB"] },
                design: { title: "设计", items: ["Figma", "Framer"] }
            },
            uiuxTitle: "UI/UX & 设计",
            uiuxDesc: "有效的转化为设计。",
            uiuxFeatures: ["以用户为中心", "现代 UI", "响应式", "原型设计"],
            explore: "探索"
        },
        contact: {
            viewProjects: "查看项目",
            title: "扩展您的业务？",
            subtitle: "转变您的愿景",
            desc: "谈谈策略。",
            form: {
                name: "姓名",
                phone: "电话",
                email: "电子邮件",
                message: "留言",
                submit: "发送",
                placeholderName: "姓名",
                placeholderPhone: "电话",
                placeholderEmail: "email@example.com",
                placeholderMsg: "留言..."
            }
        },
        footer: {
            role: "数字战略家",
            madeIn: "巴西制造",
            rights: "版权所有。"
        },
        projectsPage: {
            title: "作品集",
            description: "精选项目。",
            viewDetails: "查看详情"
        },
        projectDetails: {
            back: "返回",
            visit: "访问",
            repo: "代码",
            year: "年份",
            category: "类别",
            about: "关于",
            features: "特点",
            tech: "技术",
            gallery: "画廊"
        }
    }
};
