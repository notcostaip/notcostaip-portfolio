import { Language } from "./translations";

export interface Project {
    id: string;
    slug: string;
    title: string;
    subtitle: Record<Language, string>;
    description: Record<Language, string>;
    features: Record<Language, string[]>;
    technologies: string[];
    coverImage: string;
    images: string[];
    externalLink?: string;
    githubLink?: string;
    category: string;
    year: string;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "reta-final-enem",
        title: "Reta Final ENEM",
        subtitle: {
            PT: "Plataforma completa de revisão estratégica para o ENEM",
            EN: "Complete strategic review platform for ENEM exam",
            ES: "Plataforma completa de revisión estratégica para el examen ENEM",
            FR: "Plateforme complète de révision stratégique pour l'examen ENEM",
            ZH: "针对 ENEM 考试的完整战略复习平台"
        },
        description: {
            PT: "Uma plataforma educacional focada na preparação para a reta final do ENEM. O sistema oferece cronogramas automáticos, dashboards de desempenho, acesso a materiais de estudo estratégicos e uma interface gamificada para manter o engajamento dos estudantes.",
            EN: "An educational platform focused on the final preparation stretch for the ENEM exam. The system offers automatic schedules, performance dashboards, access to strategic study materials, and a gamified interface to keep students engaged.",
            ES: "Una plataforma educativa enfocada en la preparación final para el examen ENEM. El sistema ofrece cronogramas automáticos, paneles de rendimiento, acceso a materiales de estudio estratégicos y una interfaz gamificada para mantener el compromiso de los estudiantes.",
            FR: "Une plateforme éducative axée sur la préparation finale à l'examen ENEM. Le système propose des plannings automatiques, des tableaux de bord de performance, l'accès à des supports d'étude stratégiques et une interface ludifiée pour maintenir l'engagement des étudiants.",
            ZH: "一个专注于 ENEM 考试最后冲刺准备的教育平台。该系统提供自动时间表、绩效仪表板、战略学习材料的访问权限以及游戏化界面，以保持学生的参与度。"
        },
        features: {
            PT: ["Cronogramas Automáticos", "Dashboards de Desempenho", "Interface Gamificada"],
            EN: ["Automatic Schedules", "Performance Dashboards", "Gamified Interface"],
            ES: ["Horarios Automáticos", "Paneles de Rendimiento", "Interfaz Gamificada"],
            FR: ["Plannings Automatiques", "Tableaux de Bord de Performance", "Interface Ludifiée"],
            ZH: ["自动时间表", "绩效仪表板", "游戏化界面"]
        },
        technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        coverImage: "/images/projects/reta-final/cover_v2.png",
        images: [
            "/images/projects/reta-final/cover_v2.png",
            "/images/projects/reta-final/1_v2.png",
            "/images/projects/reta-final/2_v2.png",
            "/images/projects/reta-final/3_v2.png",
            "/images/projects/reta-final/4_v2.png"
        ],
        externalLink: "https://retafinal.site/",
        githubLink: "https://github.com/notcostaip/retafinalenem-main",
        category: "Full Stack",
        year: "2025",
    },
    {
        id: "2",
        slug: "material-ibge",
        title: "Material Definitivo IBGE",
        subtitle: {
            PT: "Aprovando milhares no concurso do IBGE",
            EN: "Helping thousands pass the IBGE exam",
            ES: "Ayudando a miles a aprobar el examen del IBGE",
            FR: "Aide à des milliers de personnes à réussir l'examen de l'IBGE",
            ZH: "帮助成千上万的人通过 IBGE 考试"
        },
        description: {
            PT: "Landing page de alta conversão para venda de material preparatório para o concurso do IBGE. Foco em copywriting persuasivo, design limpo e otimização para mobile. Inclui seções de benefícios, prova social, garantia e oferta irresistível, garantindo uma experiência de usuário fluida e focada em resultados.",
            EN: "High-conversion landing page for selling preparatory material for the IBGE exam. Focused on persuasive copywriting, clean design, and mobile optimization. Includes sections for benefits, social proof, guarantee, and an irresistible offer, ensuring a smooth and result-focused user experience.",
            ES: "Landing page de alta conversión para la venta de material preparatorio para el examen del IBGE. Centrada en redacción persuasiva, diseño limpio y optimización para móviles. Incluye secciones de beneficios, prueba social, garantía y una oferta irresistible, garantizando una experiencia de usuario fluida y enfocada en resultados.",
            FR: "Page de destination à fort taux de conversion pour la vente de matériel préparatoire à l'examen de l'IBGE. Axée sur la rédaction persuasive, un design épuré et l'optimisation mobile. Comprend des sections sur les avantages, la preuve sociale, la garantie et une offre irrésistible, assurant une expérience utilisateur fluide et axée sur les résultats.",
            ZH: "用于销售 IBGE 考试备考资料的高转化率着陆页。专注于有说服力的文案、简洁的设计和移动端优化。包括优势、社会证明、保证和不可抗拒的优惠部分，确保流畅且注重结果的用户体验。"
        },
        features: {
            PT: ["Alta Conversão", "Copywriting Persuasivo", "Design Responsivo"],
            EN: ["High Conversion", "Persuasive Copywriting", "Responsive Design"],
            ES: ["Alta Conversión", "Redacción Persuasiva", "Diseño Adaptable"],
            FR: ["Haute Conversion", "Rédaction Persuasive", "Design Réactif"],
            ZH: ["高转化率", "有说服力的文案", "响应式设计"]
        },
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        coverImage: "/images/projects/ibge/cover.png",
        images: [
            "/images/projects/ibge/cover.png",
            "/images/projects/ibge/1.png",
            "/images/projects/ibge/2.png",
            "/images/projects/ibge/3.png",
            "/images/projects/ibge/4.png"
        ],
        externalLink: "https://materialibge.com.br",
        githubLink: "https://github.com/notcostaip/ibge-landing-page",
        category: "Front-End",
        year: "2025",
    },
];
