const QUESTIONS_DB = [
  {
    id: 1,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Um engenheiro de rede precisa construir uma arquitetura de nuvem híbrida conectando redes locais à Nuvem AWS usando o AWS Direct Connect. A empresa possui algumas VPCs em uma única região da AWS e espera aumentar o número de VPCs para centenas ao longo do tempo. Qual serviço ou recurso da AWS o engenheiro deve usar para simplificar e dimensionar essa conectividade à medida que o número de VPCs aumenta?",
    options: [
      "AWS Transit Gateway",
      "Amazon Route 53",
      "VPC endpoints",
      "AWS Secrets Manager"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Transit Gateway atua como um hub central de trânsito de rede que interconecta centenas de VPCs e redes locais (via Direct Connect ou VPN) em uma topologia hub-and-spoke escalável.",
      incorrect: {
        1: "Amazon Route 53 é um serviço gerenciado de DNS e registro de domínios.",
        2: "VPC endpoints conectam uma VPC de forma privada a serviços da AWS sem usar a internet, mas não escalam o roteamento entre centenas de VPCs e redes locais.",
        3: "AWS Secrets Manager é usado para armazenar e rotacionar credenciais e segredos de aplicativos."
      }
    }
  },
  {
    id: 2,
    domain: "Segurança e Conformidade",
    question: "Uma empresa deseja estabelecer um cronograma para a rotação das credenciais dos usuários do banco de dados. Qual serviço da AWS oferecerá suporte a esse requisito com a MENOS sobrecarga operacional?",
    options: [
      "AWS Secrets Manager",
      "AWS License Manager",
      "AWS Systems Manager",
      "AWS Managed Services"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Secrets Manager permite armazenar, gerenciar e rotacionar automaticamente credenciais de bancos de dados com o mínimo de sobrecarga operacional.",
      incorrect: {
        1: "O AWS License Manager gerencia licenças de software de fornecedores como Microsoft e Oracle.",
        2: "O AWS Systems Manager (Parameter Store) armazena parâmetros e segredos, mas não realiza rotação automática nativa sem código customizado no AWS Lambda.",
        3: "O AWS Managed Services é um serviço de operação gerenciada de infraestrutura em nome do cliente."
      }
    }
  },
  {
    id: 3,
    domain: "Segurança e Conformidade",
    question: "Qual serviço AWS é usado para fornecer criptografia para Amazon EBS?",
    options: [
      "AWS Config",
      "AWS Certificate Manager",
      "AWS KMS",
      "AWS Systems Manager"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS Key Management Service (AWS KMS) cria e gerencia as chaves de criptografia utilizadas para criptografar volumes e snapshots do Amazon EBS em repouso.",
      incorrect: {
        0: "O AWS Config avalia e audita configurações de recursos da AWS ao longo do tempo.",
        1: "O AWS Certificate Manager (ACM) provisiona e gerencia certificados SSL/TLS públicos e privados.",
        3: "O AWS Systems Manager centraliza insights operacionais e automação de tarefas em instâncias."
      }
    }
  },
  {
    id: 4,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja gerenciar seus recursos da Nuvem AWS por meio de uma interface web. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "AWS Cloud9",
      "AWS CLI",
      "AWS Management Console",
      "AWS SDK"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS Management Console é a interface gráfica baseada na web para acessar e gerenciar os serviços da AWS.",
      incorrect: {
        0: "O AWS Cloud9 é um ambiente de desenvolvimento integrado (IDE) baseado em nuvem.",
        1: "A AWS CLI é uma ferramenta de linha de comando para gerenciar serviços via terminal.",
        3: "O AWS SDK fornece bibliotecas para integrar serviços da AWS diretamente no código de aplicações."
      }
    }
  },
  {
    id: 5,
    domain: "Conceitos de Nuvem",
    question: "Quais das opções a seguir são vantagens da Nuvem AWS? (Escolha dois.)",
    options: [
      "Foco no gerenciamento da infraestrutura de hardware",
      "Lançar globalmente em minutos",
      "Elevadas economias de escala",
      "Superprovisão para garantir capacidade",
      "Trocar despesas variáveis por despesas de capital"
    ],
    correctAnswers: [1, 2],
    explanation: {
      correct: "Duas das seis vantagens principais da computação em nuvem AWS são: alcançar elevadas economias de escala (preços menores pelo uso agregado global) e implantar aplicações globalmente em minutos.",
      incorrect: {
        0: "Na nuvem, você deixa de gastar dinheiro gerenciando data centers e hardware.",
        3: "Na nuvem, você para de adivinhar ou superprovisionar capacidade, ajustando sob demanda.",
        4: "A vantagem é exatamente o oposto: trocar despesas de capital (CapEx) por despesas variáveis (OpEx)."
      }
    }
  },
  {
    id: 6,
    domain: "Conceitos de Nuvem",
    question: "Qual benefício da Nuvem AWS é demonstrado pela capacidade de uma arquitetura de resistir a falhas com tempo de inatividade mínimo?",
    options: [
      "Escalabilidade",
      "Alta disponibilidade",
      "Elasticidade",
      "Agilidade"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "Alta disponibilidade refere-se à capacidade de um sistema permanecer operacional e acessível mesmo diante de falhas de componentes, com tempo de inatividade mínimo.",
      incorrect: {
        0: "Escalabilidade é a capacidade de crescer para atender ao aumento da demanda.",
        2: "Elasticidade é a capacidade de expandir e retrair recursos automaticamente conforme a carga muda.",
        3: "Agilidade é a rapidez para desenvolver, testar e lançar novos recursos de TI."
      }
    }
  },
  {
    id: 7,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Um desenvolvedor precisa manter uma infraestrutura de ambiente de desenvolvimento e uma infraestrutura de ambiente de produção de forma repetível. Qual serviço AWS o desenvolvedor deve usar para atender a esses requisitos?",
    options: [
      "AWS Ground Station",
      "AWS IoT Device Defender",
      "AWS Shield",
      "AWS CloudFormation"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS CloudFormation permite modelar e provisionar toda a infraestrutura como código (IaC) usando templates YAML ou JSON, garantindo ambientes idênticos e repetíveis.",
      incorrect: {
        0: "AWS Ground Station controla comunicações com satélites.",
        1: "AWS IoT Device Defender audita configurações de segurança em dispositivos IoT.",
        2: "AWS Shield oferece proteção gerenciada contra ataques DDoS."
      }
    }
  },
  {
    id: 8,
    domain: "Segurança e Conformidade",
    question: "Qual tarefa é de responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Configurar firewalls e redes.",
      "Aplicar patch no sistema operacional das instâncias do Amazon RDS.",
      "Manter a segurança da Nuvem AWS.",
      "Implementar controles físicos e ambientais."
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O cliente é responsável pela segurança 'na' nuvem, o que inclui configurar regras de rede, Security Groups, Network ACLs e firewalls.",
      incorrect: {
        1: "Como o Amazon RDS é um serviço gerenciado, a AWS aplica patches no sistema operacional subjacente.",
        2: "A segurança 'da' nuvem (infraestrutura global) é responsabilidade da AWS.",
        3: "Controles físicos e ambientais dos data centers são responsabilidade exclusiva da AWS."
      }
    }
  },
  {
    id: 9,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço da AWS ajuda a fornecer aplicativos altamente disponíveis com failover rápido para arquiteturas multirregionais e multi-AZ?",
    options: [
      "AWS Direct Connect",
      "AWS Shield",
      "AWS Global Accelerator",
      "AWS WAF"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS Global Accelerator utiliza endereços IP estáticos anycast e a rede global da AWS para rotear o tráfego ao endpoint íntegro mais próximo, oferecendo failover instantâneo entre regiões e AZs.",
      incorrect: {
        0: "AWS Direct Connect estabelece uma conexão de rede dedicada entre um data center local e a AWS.",
        1: "AWS Shield protege aplicações contra ataques DDoS.",
        3: "AWS WAF filtra tráfego HTTP/HTTPS malicioso na camada de aplicação."
      }
    }
  },
  {
    id: 10,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa possui um conjunto de aplicativos de comércio eletrônico. Os aplicativos precisam ser capazes de enviar mensagens entre si. Qual serviço AWS atende a esse requisito?",
    options: [
      "Elastic Load Balancing",
      "Amazon Simple Queue Service (Amazon SQS)",
      "AWS Auto Scaling",
      "Amazon Kinesis Data Streams"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon SQS é um serviço totalmente gerenciado de filas de mensagens que permite desacoplar e enviar mensagens de forma assíncrona entre microsserviços e aplicativos.",
      incorrect: {
        0: "Elastic Load Balancing distribui o tráfego de rede recebido entre múltiplos destinos.",
        2: "AWS Auto Scaling ajusta automaticamente a capacidade computacional conforme a demanda.",
        3: "Amazon Kinesis Data Streams é usado para ingestão e análise de fluxos contínuos de dados em tempo real."
      }
    }
  },
  {
    id: 11,
    domain: "Faturamento, Preços e Suporte",
    question: "Quais são os benefícios do faturamento consolidado para serviços de nuvem AWS? (Escolha dois.)",
    options: [
      "Custo personalizado e criação de orçamento de uso",
      "Uma fatura para várias contas",
      "Descontos por volume",
      "Opções de parcelamento",
      "Uma taxa adicional mínima para uso"
    ],
    correctAnswers: [1, 2],
    explanation: {
      correct: "O faturamento consolidado (via AWS Organizations) unifica a cobrança de várias contas em uma única fatura e soma o uso de todas elas para atingir faixas de descontos por volume.",
      incorrect: {
        0: "Criação de orçamentos e alertas é feita pelo AWS Budgets, não pelo faturamento consolidado.",
        3: "A AWS não oferece parcelamento de faturas mensais de consumo.",
        4: "O faturamento consolidado é gratuito e não cobra taxa adicional."
      }
    }
  },
  {
    id: 12,
    domain: "Segurança e Conformidade",
    question: "Um usuário deseja revisar todos os buckets do Amazon S3 com ACLs e políticas de bucket do S3 no console do S3. Qual serviço ou recurso da AWS atenderá a esse requisito?",
    options: [
      "AWS IAM Identity Center (AWS Single Sign-On)",
      "S3 Storage Lens",
      "S3 Multi-Region Access Points",
      "Access Analyzer for S3"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O IAM Access Analyzer for S3 analisa e revisa políticas de bucket e ACLs diretamente no console do S3 para identificar buckets públicos ou compartilhados externamente.",
      incorrect: {
        0: "O IAM Identity Center gerencia acesso único (SSO) para usuários em várias contas.",
        1: "O S3 Storage Lens fornece métricas de uso e otimização de armazenamento.",
        2: "O S3 Multi-Region Access Points fornece um endpoint global para rotear solicitações entre buckets em várias regiões."
      }
    }
  },
  {
    id: 13,
    domain: "Segurança e Conformidade",
    question: "Qual é o melhor recurso para um usuário encontrar informações e relatórios relacionados à conformidade sobre a AWS?",
    options: [
      "AWS Artifact",
      "AWS Marketplace",
      "AWS Support",
      "Amazon Inspector"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Artifact é o portal central de autoatendimento para baixar relatórios de auditoria e certificações de conformidade (ISO, SOC, PCI) da AWS.",
      incorrect: {
        1: "O AWS Marketplace é um catálogo digital para comprar e implantar software de terceiros.",
        2: "O AWS Support fornece suporte técnico e consultoria operacional.",
        3: "O Amazon Inspector realiza varredura automatizada de vulnerabilidades em instâncias EC2 e contêineres."
      }
    }
  },
  {
    id: 14,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço da AWS permite que as empresas implantem um aplicativo próximo aos usuários finais?",
    options: [
      "Amazon Route 53",
      "AWS AppSync",
      "Amazon CloudFront",
      "AWS Auto Scaling"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O Amazon CloudFront utiliza uma rede global de locais de borda (Edge Locations) para armazenar conteúdo em cache e entregar aplicações com baixa latência próximo aos usuários finais.",
      incorrect: {
        0: "Amazon Route 53 é um serviço de DNS para roteamento de nomes de domínio.",
        1: "AWS AppSync é um serviço gerenciado de APIs GraphQL.",
        3: "AWS Auto Scaling ajusta automaticamente a capacidade dos recursos computacionais."
      }
    }
  },
  {
    id: 15,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço ou recurso da AWS melhora o desempenho da rede enviando tráfego através da infraestrutura de rede mundial da AWS?",
    options: [
      "Route table",
      "AWS Transit Gateway",
      "Amazon VPC",
      "AWS Global Accelerator"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS Global Accelerator roteia o tráfego dos usuários através da rede troncal privada e global da AWS, reduzindo jitter e latência.",
      incorrect: {
        0: "Route tables definem regras de roteamento interno dentro de uma VPC.",
        1: "AWS Transit Gateway interconecta múltiplas VPCs e redes locais.",
        2: "Amazon VPC é a rede virtual isolada onde você implanta seus recursos na nuvem."
      }
    }
  },
  {
    id: 16,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço da AWS oferece armazenamento de objetos altamente durável?",
    options: [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon FSx",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon S3"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon S3 é um serviço de armazenamento de objetos projetado para oferecer 99,999999999% (11 noves) de durabilidade.",
      incorrect: {
        0: "Amazon EBS oferece armazenamento em blocos para instâncias EC2.",
        1: "Amazon FSx oferece sistemas de arquivos gerenciados de terceiros (como Windows File Server e Lustre).",
        2: "Amazon EFS oferece armazenamento de arquivos compartilhados via protocolo NFS para Linux."
      }
    }
  },
  {
    id: 17,
    domain: "Segurança e Conformidade",
    question: "Qual responsabilidade pertence à AWS quando uma empresa hospeda seus bancos de dados em instâncias do Amazon EC2?",
    options: [
      "Instalações do sistema operacional",
      "Patches do sistema operacional",
      "Patches de software de banco de dados",
      "Backups de banco de dados"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "Ao provisionar uma instância EC2, a AWS é responsável por fornecer a imagem base e instalar o sistema operacional inicial na infraestrutura virtualizada, enquanto toda manutenção posterior é do cliente.",
      incorrect: {
        1: "Aplicar patches no sistema operacional convidado da EC2 é responsabilidade do cliente.",
        2: "Atualizar o software de banco de dados instalado dentro da EC2 é responsabilidade do cliente.",
        3: "Gerenciar backups de bancos instalados manualmente em EC2 é responsabilidade do cliente."
      }
    }
  },
  {
    id: 18,
    domain: "Conceitos de Nuvem",
    question: "Quais das opções a seguir são vantagens de migrar para a Nuvem AWS? (Escolha dois.)",
    options: [
      "A capacidade de usar o modelo pré-pago.",
      "Não é mais necessário adivinhar qual capacidade será necessária.",
      "A capacidade de ter controle total sobre a infraestrutura física.",
      "A capacidade de transferir a responsabilidade por toda a segurança para a AWS.",
      "Não se preocupe mais com os controles de acesso dos usuários."
    ],
    correctAnswers: [0, 1],
    explanation: {
      correct: "Na nuvem AWS você paga apenas pelo que consome (modelo pré-pago / pay-as-you-go) e elimina a necessidade de adivinhar a capacidade futura antecipadamente.",
      incorrect: {
        2: "O controle físico dos data centers pertence exclusivamente à AWS.",
        3: "A segurança é uma responsabilidade compartilhada entre a AWS e o cliente.",
        4: "O controle de acesso de usuários (IAM) continua sendo responsabilidade crítica do cliente."
      }
    }
  },
  {
    id: 19,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço da AWS é um serviço de armazenamento em nuvem híbrida que fornece aos usuários locais acesso a armazenamento em nuvem praticamente ilimitado?",
    options: [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3 Glacier",
      "AWS DataSync",
      "AWS Storage Gateway"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS Storage Gateway conecta ambientes locais (on-premises) ao armazenamento em nuvem da AWS com cache local de baixa latência.",
      incorrect: {
        0: "Amazon EBS fornece volumes de bloco anexados a instâncias EC2 na nuvem.",
        1: "Amazon S3 Glacier é uma classe de armazenamento para arquivamento frio de longo prazo.",
        2: "AWS DataSync automatiza a transferência em massa de dados entre armazenamento local e AWS, não fornecendo acesso contínuo híbrido."
      }
    }
  },
  {
    id: 20,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa planeja migrar para a AWS e deseja criar estimativas de custos para seus casos de uso da AWS. Qual serviço ou ferramenta da AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "Amazon CloudWatch",
      "AWS Budgets"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "A AWS Pricing Calculator permite modelar arquiteturas e estimar os custos mensais antes de provisionar os recursos na AWS.",
      incorrect: {
        0: "AWS Cost Explorer analisa gastos históricos e atuais já incorridos.",
        2: "Amazon CloudWatch monitora métricas de desempenho e logs operacionais.",
        3: "AWS Budgets define orçamentos e envia alertas quando os gastos ultrapassam limites."
      }
    }
  },
  {
    id: 21,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual ferramenta um desenvolvedor deve usar para integrar recursos de serviços da AWS diretamente em um aplicativo?",
    options: [
      "AWS Lambda",
      "AWS Batch",
      "AWS Software Development Kit (SDK)",
      "AWS CodeDeploy"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS SDK fornece bibliotecas nativas em diversas linguagens (Python, JavaScript, Java, C#) para chamar APIs da AWS diretamente do código da aplicação.",
      incorrect: {
        0: "AWS Lambda executa código serverless em resposta a eventos.",
        1: "AWS Batch gerencia e executa trabalhos de computação em lote.",
        3: "AWS CodeDeploy automatiza a implantação de código em instâncias e servidores."
      }
    }
  },
  {
    id: 22,
    domain: "Conceitos de Nuvem",
    question: "Qual das alternativas a seguir é um princípio de design recomendado do AWS Well-Architected Framework?",
    options: [
      "Reduza o tempo de inatividade fazendo alterações na infraestrutura com pouca frequência e em grandes incrementos.",
      "Aprenda a melhorar com as falhas operacionais.",
      "Use design de aplicativo monolítico para centralização.",
      "Invista tempo para configurar a infraestrutura manualmente."
    ],
    correctAnswers: [1],
    explanation: {
      correct: "Aprender com todas as falhas operacionais e compartilhar as lições entre as equipes é um princípio central do pilar de Excelência Operacional.",
      incorrect: {
        0: "A recomendação é fazer alterações pequenas, frequentes e reversíveis.",
        2: "A AWS recomenda arquiteturas desacopladas e microsserviços, evitando monolitos rígidos.",
        3: "A infraestrutura deve ser automatizada como código (IaC), nunca configurada manualmente."
      }
    }
  },
  {
    id: 23,
    domain: "Segurança e Conformidade",
    question: "Usar o AWS Identity and Access Management (IAM) para conceder acesso apenas aos recursos necessários para executar uma tarefa é um conceito conhecido como:",
    options: [
      "Acesso simbólico.",
      "Acesso restrito.",
      "Acesso conforme necessário.",
      "Acesso com privilégios mínimos."
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O princípio de privilégios mínimos (Least Privilege) consiste em conceder apenas as permissões estritamente necessárias para realizar uma atividade.",
      incorrect: {
        0: "Termo inexistente na terminologia de segurança da AWS.",
        1: "Não é o nome oficial da prática recomendada do IAM.",
        2: "Refere-se a modelos temporários (Just-in-Time), não à definição clássica do IAM."
      }
    }
  },
  {
    id: 24,
    domain: "Segurança e Conformidade",
    question: "Qual serviço ou ferramenta da AWS pode ser usado para configurar um firewall para controlar o tráfego que entra e sai de uma sub-rede Amazon VPC?",
    options: [
      "Network ACL",
      "AWS WAF",
      "Security group",
      "AWS Firewall Manager"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "A Network ACL (NACL) atua como um firewall sem estado (stateless) no nível da sub-rede, filtrando todo o tráfego de entrada e saída.",
      incorrect: {
        1: "AWS WAF protege aplicações web na camada HTTP/HTTPS contra ataques como SQL Injection.",
        2: "Security Group atua como firewall com estado (stateful) no nível da instância (interface de rede), não da sub-rede.",
        3: "AWS Firewall Manager gerencia regras de firewall centralmente entre várias contas."
      }
    }
  },
  {
    id: 25,
    domain: "Segurança e Conformidade",
    question: "Qual serviço da AWS é usado para rastrear, registrar e auditar alterações de configuração feitas nos recursos da AWS?",
    options: [
      "AWS Config",
      "AWS Shield",
      "AWS IAM",
      "Amazon Inspector"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Config registra continuamente o histórico de configurações dos recursos da AWS e avalia se estão em conformidade com as regras definidas.",
      incorrect: {
        1: "AWS Shield protege contra ataques DDoS.",
        2: "AWS IAM gerencia usuários, grupos, funções e permissões.",
        3: "Amazon Inspector analisa instâncias e imagens em busca de vulnerabilidades de software."
      }
    }
  },
  {
    id: 26,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja operar um data warehouse para analisar dados sem gerenciar a infraestrutura do data warehouse. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "Amazon Aurora",
      "Amazon RDS",
      "AWS Lambda",
      "Amazon Redshift Serverless"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon Redshift é o serviço de Data Warehouse da AWS, e a modalidade Serverless permite executar consultas analíticas sem provisionar ou gerenciar clusters.",
      incorrect: {
        0: "Amazon Aurora é um banco de dados relacional transacional (OLTP), não um data warehouse.",
        1: "Amazon RDS gerencia bancos de dados relacionais transacionais (OLTP).",
        2: "AWS Lambda é um serviço de computação serverless para execução de código orientado a eventos."
      }
    }
  },
  {
    id: 27,
    domain: "Faturamento, Preços e Suporte",
    question: "Como a computação em nuvem AWS ajuda as empresas a reduzir custos? (Escolha dois.)",
    options: [
      "A AWS cobra os mesmos preços pelos serviços em todas as regiões da AWS.",
      "A AWS oferece descontos para instâncias do Amazon EC2 que permanecem inativas por mais de uma semana.",
      "A AWS não cobra pelos dados enviados da Nuvem AWS para a Internet.",
      "A AWS elimina muitos dos custos de construção e manutenção de data centers locais.",
      "A AWS permite que a capacidade seja ajustada sob demanda."
    ],
    correctAnswers: [3, 4],
    explanation: {
      correct: "A nuvem reduz custos ao eliminar despesas de capital com data centers físicos e permitir escalar recursos sob demanda, pagando apenas pelo uso real.",
      incorrect: {
        0: "Os preços variam entre regiões devido a impostos, energia e infraestrutura local.",
        1: "Instâncias EC2 paradas ou ociosas não ganham descontos automáticos; o ideal é desligá-las ou redimensioná-las.",
        2: "A transferência de dados de saída (Data Transfer Out) para a internet é cobrada."
      }
    }
  },
  {
    id: 28,
    domain: "Segurança e Conformidade",
    question: "Uma empresa deseja conceder aos usuários de uma conta da AWS acesso a recursos de outra conta da AWS. Os usuários atualmente não têm permissão para acessar os recursos. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "Função do IAM",
      "IAM tag",
      "Analisador de acesso IAM",
      "Grupo do IAM"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "Uma Função do IAM (IAM Role) permite delegar acesso seguro e temporário entre diferentes contas da AWS (cross-account access).",
      incorrect: {
        1: "IAM tags são rótulos de metadados usados para organização e controle de acesso baseado em atributos.",
        2: "IAM Access Analyzer identifica recursos compartilhados externamente, mas não concede acesso.",
        3: "Grupos do IAM organizam usuários apenas dentro da mesma conta AWS."
      }
    }
  },
  {
    id: 29,
    domain: "Segurança e Conformidade",
    question: "Qual tarefa é de responsabilidade da AWS ao usar os serviços da AWS?",
    options: [
      "Criação de regras de grupo de segurança para acesso de saída",
      "Aplicação de patches do sistema operacional Amazon EC2",
      "Manutenção de controles físicos e ambientais",
      "Gerenciamento de permissões de usuário IAM"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "A AWS é integralmente responsável pela segurança física dos data centers, incluindo controle de acesso físico, energia e climatização.",
      incorrect: {
        0: "Configurar regras de Security Groups é responsabilidade do cliente.",
        1: "Aplicar patches no SO convidado de instâncias EC2 é responsabilidade do cliente.",
        3: "Gerenciar usuários, senhas e políticas no IAM é responsabilidade do cliente."
      }
    }
  },
  {
    id: 30,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa está executando uma carga de trabalho na Nuvem AWS. Qual prática recomendada da AWS garante a arquitetura MAIS econômica para a carga de trabalho?",
    options: [
      "Redimensionamento",
      "Loose coupling",
      "Redundância",
      "Cache"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O redimensionamento (Right-sizing) consiste em escolher os tipos e tamanhos de instâncias mais adequados à demanda real, evitando pagar por capacidade ociosa.",
      incorrect: {
        1: "Loose coupling (acoplamento fraco) aumenta a resiliência e escalabilidade da arquitetura.",
        2: "Redundância aumenta a alta disponibilidade e tolerância a falhas.",
        3: "Cache melhora a latência e o desempenho de leitura."
      }
    }
  },
  {
    id: 31,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa está usando um serviço de terceiros para fazer backup de 10 TB de dados em uma biblioteca de fitas. O servidor de backup local está ficando sem espaço. A empresa deseja usar os serviços da AWS para backups sem alterar seus fluxos de trabalho de backup existentes. Qual serviço AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Lambda",
      "Amazon Elastic Block Store (Amazon EBS)",
      "AWS Storage Gateway"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS Storage Gateway (na modalidade Tape Gateway) emula uma biblioteca de fitas virtuais (VTL), permitindo manter os softwares e fluxos de backup locais intactos enviando dados ao S3/Glacier.",
      incorrect: {
        0: "Amazon ECS é um serviço de orquestração de contêineres.",
        1: "AWS Lambda é computação serverless para execução de código.",
        2: "Amazon EBS fornece volumes de armazenamento em blocos para instâncias EC2."
      }
    }
  },
  {
    id: 32,
    domain: "Faturamento, Preços e Suporte",
    question: "Qual ferramenta da AWS oferece aos usuários a capacidade de planejar o uso do serviço, os custos do serviço e as reservas de instâncias, além de permitir que definam alertas personalizados quando seus custos ou uso excederem os limites estabelecidos?",
    options: [
      "Relatórios de instâncias reservadas",
      "Cost Explorer",
      "AWS Cost and Usage Report",
      "AWS Budgets"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS Budgets permite definir orçamentos personalizados de custo, uso e cobertura de reservas, disparando alertas por e-mail ou SNS quando os limites são ultrapassados.",
      incorrect: {
        0: "Relatórios de RI mostram apenas a utilização de instâncias reservadas, sem alertas de orçamento geral.",
        1: "Cost Explorer permite visualizar e analisar custos históricos e previsões, mas os alertas de limite pertencem ao AWS Budgets.",
        2: "AWS Cost and Usage Report gera arquivos CSV/Parquet detalhados de faturamento no S3."
      }
    }
  },
  {
    id: 33,
    domain: "Segurança e Conformidade",
    question: "Quais tarefas são de responsabilidade do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS? (Escolha dois.)",
    options: [
      "Corrigir instâncias de banco de dados do Amazon RDS.",
      "Estabelecer a infra-estrutura global.",
      "Configurar credenciais do IAM.",
      "Locais de borda seguros.",
      "Execute a criptografia de dados do lado do cliente."
    ],
    correctAnswers: [2, 4],
    explanation: {
      correct: "O cliente é responsável pelo gerenciamento de identidades e credenciais no IAM e pela criptografia dos seus dados antes de enviá-los à nuvem (lado do cliente).",
      incorrect: {
        0: "Aplicar patches no motor do banco de dados gerenciado Amazon RDS é responsabilidade da AWS.",
        1: "Construir e manter regiões, AZs e infraestrutura global é responsabilidade da AWS.",
        3: "Proteger fisicamente os Edge Locations é responsabilidade da AWS."
      }
    }
  },
  {
    id: 34,
    domain: "Segurança e Conformidade",
    question: "Um desenvolvedor foi contratado por uma grande empresa e precisa de credenciais da AWS. Quais são as melhores práticas de segurança que devem ser seguidas? (Escolha dois.)",
    options: [
      "Conceda ao desenvolvedor acesso apenas aos recursos da AWS necessários para executar o trabalho.",
      "Adicione o desenvolvedor ao grupo de administradores no AWS IAM.",
      "Configure uma política de senha que garanta que a senha do desenvolvedor não possa ser alterada.",
      "Compartilhe as credenciais do usuário raiz da conta AWS com o desenvolvedor.",
      "Certifique-se de que a política de senha da conta exija um comprimento mínimo."
    ],
    correctAnswers: [0, 4],
    explanation: {
      correct: "As boas práticas do IAM exigem aplicar o princípio de menor privilégio (apenas os recursos necessários) e impor uma política de senhas forte com comprimento mínimo.",
      incorrect: {
        1: "Conceder acesso administrativo amplo viola o princípio de menor privilégio.",
        2: "Os usuários devem poder alterar suas próprias senhas e rotacioná-las regularmente.",
        3: "As credenciais do usuário raiz (root) nunca devem ser compartilhadas."
      }
    }
  },
  {
    id: 35,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa tem várias contas da AWS que incluem cargas de trabalho de computação que não podem ser interrompidas. A empresa deseja obter descontos de faturamento com base no uso dos serviços AWS pela empresa. Qual recurso ou opção de compra da AWS atenderá a esses requisitos?",
    options: [
      "Preços pré-pagos",
      "Marcação de recursos",
      "Instâncias spot",
      "Faturamento consolidado"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O faturamento consolidado agrega o consumo de todas as contas da organização para qualificar a empresa a descontos por volume.",
      incorrect: {
        0: "Preços pré-pagos (On-Demand) cobram a tarifa padrão sem descontos agregados entre contas.",
        1: "Marcação de recursos (Tags) serve para organizar e alocar custos, não para gerar descontos.",
        2: "Instâncias Spot podem ser interrompidas pela AWS a qualquer momento, violando o requisito da carga de trabalho."
      }
    }
  },
  {
    id: 36,
    domain: "Segurança e Conformidade",
    question: "Um usuário deseja permitir que aplicativos em execução em uma instância do Amazon EC2 façam chamadas para outros serviços da AWS. O acesso concedido deve ser seguro. Qual serviço ou recurso da AWS deve ser usado?",
    options: [
      "Chaves SSH do usuário IAM",
      "AWS Firewall Manager",
      "Security groups",
      "Funções do IAM"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Associar uma Função do IAM (IAM Role) à instância EC2 fornece credenciais temporárias e rotacionadas automaticamente, evitando armazenar chaves fixas no código.",
      incorrect: {
        0: "Chaves SSH são usadas apenas para acesso remoto ao terminal Linux, não para permissões de API da AWS.",
        1: "AWS Firewall Manager gerencia regras de firewall em múltiplas contas.",
        2: "Security Groups controlam tráfego de rede (portas e IPs), não permissões de API."
      }
    }
  },
  {
    id: 37,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja um servidor de arquivos Windows totalmente gerenciado para seus aplicativos baseados em Windows. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "Amazon FSx",
      "Amazon EMR",
      "Serviço Amazon Elastic Kubernetes (Amazon EKS)",
      "Amazon Elastic Container Service (Amazon ECS)"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O Amazon FSx for Windows File Server oferece armazenamento de arquivos totalmente gerenciado baseado no Windows Server com suporte nativo ao protocolo SMB e Active Directory.",
      incorrect: {
        1: "Amazon EMR é uma plataforma gerenciada de big data (Hadoop/Spark).",
        2: "Amazon EKS é um serviço gerenciado de Kubernetes para contêineres.",
        3: "Amazon ECS é um orquestrador de contêineres da AWS."
      }
    }
  },
  {
    id: 38,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja migrar sua carga de trabalho local do NFS para a AWS. Qual tipo de AWS Storage Gateway a empresa deve usar para atender a esse requisito?",
    options: [
      "Gateway de fita",
      "Gateway de arquivos Amazon S3",
      "Gateway de volume",
      "Gateway de arquivos Amazon FSx"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon S3 File Gateway permite que aplicações locais armazenem e acessem arquivos como objetos no Amazon S3 utilizando protocolos padrão como NFS e SMB.",
      incorrect: {
        0: "Gateway de fita é destinado a backups em fitas virtuais.",
        2: "Gateway de volume apresenta volumes de armazenamento em bloco via protocolo iSCSI.",
        3: "Gateway de arquivos Amazon FSx é otimizado para compartilhamentos Windows (SMB) no FSx for Windows File Server."
      }
    }
  },
  {
    id: 39,
    domain: "Segurança e Conformidade",
    question: "Uma empresa precisa rastrear a atividade em suas contas da AWS e saber quando uma chamada de API é feita em seus recursos da AWS. Qual ferramenta ou serviço da AWS pode ser usado para atender a esses requisitos?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "Amazon Inspector",
      "AWS IAM"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O AWS CloudTrail registra, monitora e audita todas as chamadas de API e eventos de governança realizados na conta AWS.",
      incorrect: {
        0: "Amazon CloudWatch monitora métricas de desempenho e logs de aplicações/infraestrutura.",
        2: "Amazon Inspector verifica vulnerabilidades de software.",
        3: "AWS IAM gerencia identidades e permissões de acesso."
      }
    }
  },
  {
    id: 40,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa possui um aplicativo ininterrupto executado em instâncias do Amazon EC2. O aplicativo processa constantemente um backlog de arquivos em uma fila do Amazon Simple Queue Service (Amazon SQS). Espera-se que esse uso continue a crescer por anos. Qual é o modelo de compra de instância EC2 MAIS econômico para atender a esses requisitos?",
    options: [
      "Instâncias sob demanda",
      "Hosts Dedicados",
      "Savings Plans",
      "Instâncias spot"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "Para cargas de trabalho contínuas e de longo prazo (1 a 3 anos), os Savings Plans oferecem descontos de até 72% em relação ao preço sob demanda com flexibilidade de família de instância.",
      incorrect: {
        0: "Instâncias sob demanda têm o maior custo por hora para uso contínuo prolongado.",
        1: "Hosts Dedicados são servidores físicos exclusivos e possuem custo elevado.",
        3: "Instâncias Spot podem ser interrompidas pela AWS, não sendo indicadas para aplicações ininterruptas."
      }
    }
  },
  {
    id: 41,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja que um serviço AWS forneça recomendações de produtos com base nos dados de seus clientes. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "Amazon Polly",
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon Personalize"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon Personalize é um serviço de machine learning totalmente gerenciado que cria recomendações personalizadas em tempo real com base no comportamento dos usuários.",
      incorrect: {
        0: "Amazon Polly converte texto em fala realista.",
        1: "Amazon Comprehend realiza processamento de linguagem natural (análise de sentimento e entidades).",
        2: "Amazon Rekognition analisa imagens e vídeos."
      }
    }
  },
  {
    id: 42,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa está planejando sua migração para a Nuvem AWS. A empresa está identificando suas lacunas de capacidade usando as perspectivas do AWS Cloud Adoption Framework (AWS CAF). Qual fase da jornada de transformação da nuvem inclui essas atividades de identificação?",
    options: [
      "Alinhar",
      "Escala",
      "Lançamento",
      "Visualize"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "A fase Alinhar (Align) do AWS CAF concentra-se em identificar lacunas de capacidade organizacional nas seis perspectivas e criar planos de ação para superá-las.",
      incorrect: {
        1: "Escalar (Scale) foca em expandir os pilotos de produção e os benefícios de negócios em toda a organização.",
        2: "Lançar (Launch) foca na entrega de projetos piloto em produção e demonstração de valor incremental.",
        3: "Visualizar (Envision) foca em demonstrar como a nuvem ajudará a acelerar os resultados de negócios."
      }
    }
  },
  {
    id: 43,
    domain: "Segurança e Conformidade",
    question: "Uma empresa de mídia social deseja proteger seu aplicativo Web contra explorações comuns da Web, como injeções de SQL e scripts entre sites. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS WAF"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS WAF (Web Application Firewall) protege aplicações web contra ataques na camada 7 (HTTP/HTTPS), incluindo SQL Injection e Cross-Site Scripting (XSS).",
      incorrect: {
        0: "Amazon GuardDuty é um serviço de detecção inteligente de ameaças na conta e rede.",
        1: "Amazon Inspector verifica vulnerabilidades de pacotes e rede em EC2 e contêineres.",
        2: "Amazon CloudWatch monitora métricas e logs de recursos."
      }
    }
  },
  {
    id: 44,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço AWS totalmente gerenciado auxilia na criação, teste e gerenciamento de imagens personalizadas do Amazon EC2?",
    options: [
      "AWS Elastic Beanstalk",
      "Amazon Machine Image (AMI)",
      "Assistente de inicialização da AWS (AWS Launch Wizard)",
      "Construtor de imagens EC2 (EC2 Image Builder)"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O EC2 Image Builder automatiza a criação, validação, atualização e distribuição de imagens personalizadas (AMIs) e imagens de contêineres.",
      incorrect: {
        0: "AWS Elastic Beanstalk é um serviço PaaS para implantação rápida de aplicações web.",
        1: "Uma AMI é o artefato/modelo estático resultante, não o serviço gerenciado de automação do ciclo de vida.",
        2: "AWS Launch Wizard guia o dimensionamento e implantação de cargas de trabalho corporativas como SAP e SQL Server."
      }
    }
  },
  {
    id: 45,
    domain: "Segurança e Conformidade",
    question: "Uma empresa deseja um processo automatizado para verificar continuamente suas instâncias do Amazon EC2 em busca de vulnerabilidades de software. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon Detective",
      "Amazon Inspector",
      "Amazon GuardDuty",
      "Amazon Cognito"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon Inspector realiza avaliações contínuas e automatizadas de vulnerabilidades de software (CVEs) e exposição de rede em instâncias EC2 e imagens ECR.",
      incorrect: {
        0: "Amazon Detective ajuda a investigar e analisar a causa raiz de incidentes de segurança.",
        2: "Amazon GuardDuty detecta atividades maliciosas e comportamentos anômalos usando logs de DNS, CloudTrail e VPC Flow Logs.",
        3: "Amazon Cognito gerencia autenticação e autorização de usuários em aplicativos."
      }
    }
  },
  {
    id: 46,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa realizar o processamento de dados uma vez por semana, o que normalmente leva cerca de 5 horas para ser concluído. Qual serviço AWS a empresa deve usar para esta carga de trabalho?",
    options: [
      "Amazon EC2",
      "AWS CodeDeploy",
      "AWS Lambda",
      "AWS Wavelength"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O Amazon EC2 permite executar cargas de trabalho contínuas de longa duração (como 5 horas semanais), cobrando apenas pelo tempo em que a instância estiver em execução.",
      incorrect: {
        1: "AWS CodeDeploy automatiza a implantação de código em servidores.",
        2: "AWS Lambda possui tempo máximo de execução de 15 minutos por invocação.",
        3: "AWS Wavelength incorpora serviços de computação e armazenamento na borda das redes 5G."
      }
    }
  },
  {
    id: 47,
    domain: "Segurança e Conformidade",
    question: "Qual serviço ou recurso da AWS fornece informações de log do tráfego de entrada e saída em interfaces de rede em uma VPC?",
    options: [
      "Amazon CloudWatch Logs",
      "VPC Flow Logs",
      "AWS Identity and Access Management (IAM)",
      "AWS CloudTrail"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O VPC Flow Logs captura metadados sobre o tráfego IP que entra e sai das interfaces de rede em uma VPC.",
      incorrect: {
        0: "Amazon CloudWatch Logs é o serviço de armazenamento e monitoramento onde os logs são enviados, não o recurso que captura o tráfego da VPC.",
        2: "AWS IAM gerencia identidades e permissões de acesso.",
        3: "AWS CloudTrail registra chamadas de API e eventos de auditoria na conta."
      }
    }
  },
  {
    id: 48,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa planeja implantar contêineres na AWS. A empresa deseja controle total dos recursos computacionais que hospedam os contêineres. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "AWS Fargate",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Serviço Amazon Elastic Kubernetes (Amazon EKS)",
      "Amazon EC2"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Quando o requisito exige controle total sobre o servidor subjacente e o sistema operacional que hospeda os contêineres, o Amazon EC2 é a escolha indicada.",
      incorrect: {
        0: "AWS Fargate é serverless e abstrai completamente o gerenciamento de servidores.",
        1: "Amazon ECS é um orquestrador gerenciado de contêineres.",
        2: "Amazon EKS é um serviço gerenciado de Kubernetes."
      }
    }
  },
  {
    id: 49,
    domain: "Faturamento, Preços e Suporte",
    question: "Qual serviço ou recurso da AWS permite que os usuários criem novas contas da AWS, agrupem várias contas para organizar fluxos de trabalho e apliquem políticas a grupos de contas?",
    options: [
      "AWS Identity and Access Management (IAM)",
      "AWS CloudFormation",
      "AWS Organizations",
      "AWS Trusted Advisor"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS Organizations permite criar contas centralmente, agrupá-las em Unidades Organizacionais (OUs), aplicar Service Control Policies (SCPs) e consolidar o faturamento.",
      incorrect: {
        0: "AWS IAM gerencia usuários e permissões dentro de uma única conta.",
        1: "AWS CloudFormation provisiona recursos de infraestrutura via templates.",
        3: "AWS Trusted Advisor fornece recomendações de melhores práticas em cinco categorias."
      }
    }
  },
  {
    id: 50,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja armazenar e recuperar arquivos no Amazon S3 para seus aplicativos locais existentes usando protocolos de sistema de arquivos padrão do setor. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Gateway de arquivos Amazon S3",
      "AWS DataSync",
      "AWS Snowball Edge",
      "AWS Transfer Family"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O Amazon S3 File Gateway fornece uma interface de arquivos local (NFS e SMB) respaldada pelo armazenamento de objetos no Amazon S3.",
      incorrect: {
        1: "AWS DataSync realiza transferência automatizada de dados em lote entre armazenamento local e nuvem.",
        2: "AWS Snowball Edge é um dispositivo físico para migração offline e computação de borda.",
        3: "AWS Transfer Family fornece transferência gerenciada de arquivos via SFTP, FTPS e FTP."
      }
    }
  },
  {
    id: 51,
    domain: "Segurança e Conformidade",
    question: "Uma empresa quer bloquear ataques de injeção de SQL. Qual serviço ou recurso da AWS a empresa deve usar para atender a esse requisito?",
    options: [
      "Security groups",
      "AWS Certificate Manager (ACM)",
      "Network ACLs",
      "AWS WAF"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS WAF inspeciona o tráfego HTTP/HTTPS e bloqueia padrões maliciosos comuns na camada de aplicação, como SQL Injection e XSS.",
      incorrect: {
        0: "Security groups filtram tráfego por IP, porta e protocolo (camadas 3 e 4), sem inspecionar payloads SQL.",
        1: "AWS Certificate Manager gerencia certificados digitais SSL/TLS.",
        2: "Network ACLs filtram tráfego no nível de sub-rede por IP e porta."
      }
    }
  },
  {
    id: 52,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja uma ferramenta unificada para fornecer um método consistente de interação com os serviços da AWS. Qual serviço ou ferramenta da AWS atenderá a esse requisito?",
    options: [
      "AWS CLI",
      "AWS Virtual Private Network (AWS VPN)",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS Cloud9"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "A AWS Command Line Interface (AWS CLI) oferece uma interface de linha de comando unificada para gerenciar e automatizar vários serviços da AWS.",
      incorrect: {
        1: "AWS VPN cria túneis criptografados entre redes locais e VPCs.",
        2: "Amazon ECS orquestra contêineres Docker.",
        3: "AWS Cloud9 é uma IDE baseada em navegador."
      }
    }
  },
  {
    id: 53,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa precisa avaliar seu ambiente AWS e fornecer recomendações de melhores práticas em cinco categorias: custo, desempenho, limites de serviço, tolerância a falhas e segurança. Qual serviço AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      "AWS Shield",
      "AWS Service Catalog",
      "AWS WAF",
      "AWS Trusted Advisor"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS Trusted Advisor inspeciona o ambiente da conta AWS e fornece recomendações em tempo real nessas cinco categorias.",
      incorrect: {
        0: "AWS Shield protege contra ataques DDoS.",
        1: "AWS Service Catalog permite criar e gerenciar catálogos de produtos de TI aprovados para uso interno.",
        2: "AWS WAF protege aplicações web contra exploits."
      }
    }
  },
  {
    id: 54,
    domain: "Conceitos de Nuvem",
    question: "Qual perspectiva do AWS Cloud Adoption Framework (AWS CAF) inclui recursos para gerenciamento de configuração e gerenciamento de patches?",
    options: [
      "Segurança",
      "Operações",
      "Plataforma",
      "Governança"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "A perspectiva de Operações do AWS CAF garante que os serviços em nuvem sejam entregues no nível exigido pelo negócio, abrangendo observabilidade, gerenciamento de configuração e patches.",
      incorrect: {
        0: "Segurança foca na proteção de dados, identidades e conformidade.",
        2: "Plataforma foca na arquitetura de sistemas, modernização e engenharia de dados.",
        3: "Governança foca no alinhamento estratégico, gestão de riscos e controle financeiro."
      }
    }
  },
  {
    id: 55,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa tem uma carga de trabalho de computação estável, previsível e ininterrupta. Quais opções de compra de instâncias do Amazon EC2 atendem a esses requisitos de maneira MAIS econômica? (Escolha dois.)",
    options: [
      "Instâncias sob demanda",
      "Instâncias Reservadas",
      "Instâncias spot",
      "Hosts Dedicados",
      "Savings Plans"
    ],
    correctAnswers: [1, 4],
    explanation: {
      correct: "Tanto as Instâncias Reservadas quanto os Savings Plans oferecem descontos significativos (até 72%) em troca de um compromisso de uso de 1 ou 3 anos para cargas estáveis.",
      incorrect: {
        0: "Instâncias sob demanda cobram o valor integral por hora sem desconto de compromisso.",
        2: "Instâncias Spot podem ser interrompidas pela AWS a qualquer momento.",
        3: "Hosts Dedicados são servidores físicos exclusivos de custo elevado."
      }
    }
  },
  {
    id: 56,
    domain: "Segurança e Conformidade",
    question: "Qual opção é uma responsabilidade compartilhada entre a AWS e seus clientes no modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Criptografia do lado do servidor do sistema de arquivos do aplicativo",
      "Segurança da infraestrutura física",
      "Gerenciamento de patches",
      "Configuração de sistemas operacionais de instâncias do Amazon EC2"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O gerenciamento de patches é um controle compartilhado: a AWS aplica patches na infraestrutura física e serviços gerenciados, enquanto o cliente atualiza o SO convidado e aplicativos nas instâncias EC2.",
      incorrect: {
        0: "Criptografia dos dados e arquivos da aplicação é responsabilidade do cliente.",
        1: "Segurança física dos data centers é responsabilidade exclusiva da AWS.",
        3: "Configuração do SO convidado de EC2 é responsabilidade exclusiva do cliente."
      }
    }
  },
  {
    id: 57,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa deseja migrar suas cargas de trabalho locais para a Nuvem AWS. A empresa deseja separar as cargas de trabalho para estorno em diferentes departamentos. Quais serviços ou recursos da AWS atenderão a esses requisitos? (Escolha dois.)",
    options: [
      "AWS Config",
      "Placement groups",
      "Multiple AWS accounts",
      "Faturamento consolidado (Consolidated billing)",
      "Locais de presença (Edge locations)"
    ],
    correctAnswers: [2, 3],
    explanation: {
      correct: "Usar múltiplas contas AWS isola perfeitamente os custos por departamento, e o faturamento consolidado (AWS Organizations) permite visualizar e ratear (chargeback) os gastos de cada conta em uma fatura única.",
      incorrect: {
        0: "AWS Config audita configurações de recursos.",
        1: "Placement groups controlam o posicionamento físico de instâncias EC2 para baixa latência ou dispersão.",
        4: "Edge locations são usados para cache de conteúdo do Amazon CloudFront."
      }
    }
  },
  {
    id: 58,
    domain: "Segurança e Conformidade",
    question: "Qual tarefa é de responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Configurar políticas de segurança do IAM para cumprir o princípio de privilégio mínimo.",
      "Aplicar atualizações ao hipervisor Nitro.",
      "Aplique patch no sistema operacional convidado em uma instância do Amazon EC2.",
      "Habilite a criptografia do lado do cliente para objetos armazenados no Amazon S3."
    ],
    correctAnswers: [1],
    explanation: {
      correct: "A camada de virtualização (incluindo o AWS Nitro System / hipervisor) faz parte da segurança 'da' nuvem e é mantida exclusivamente pela AWS.",
      incorrect: {
        0: "Configurar políticas do IAM é responsabilidade do cliente.",
        2: "Aplicar patches no sistema operacional convidado da EC2 é responsabilidade do cliente.",
        3: "Criptografia do lado do cliente é responsabilidade do cliente."
      }
    }
  },
  {
    id: 59,
    domain: "Conceitos de Nuvem",
    question: "Qual opção é um recurso de perspectiva de negócios do AWS Cloud Adoption Framework (AWS CAF)?",
    options: [
      "Gestão de eventos",
      "Evolução da cultura",
      "Monetização de dados",
      "Arquitetura da plataforma"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "A monetização de dados (Data Monetization) é uma capacidade da perspectiva de Negócios (Business) do AWS CAF, focada em transformar dados em valor financeiro.",
      incorrect: {
        0: "Gestão de eventos pertence à perspectiva de Operações.",
        1: "Evolução da cultura pertence à perspectiva de Pessoas.",
        3: "Arquitetura da plataforma pertence à perspectiva de Plataforma."
      }
    }
  },
  {
    id: 60,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa está avaliando seu plano do AWS Business Support para determinar se o plano ainda atende às necessidades da empresa. A empresa está considerando mudar para o AWS Enterprise Support. Qual benefício adicional a empresa receberá com o AWS Enterprise Support?",
    options: [
      "Acesso por telefone, e-mail e chat para engenheiros de suporte na nuvem 24 horas por dia, 7 dias por semana",
      "Um gerente técnico de contas (TAM) designado para auxiliar no monitoramento e otimização",
      "Um conjunto completo de verificações do AWS Trusted Advisor",
      "Uma revisão consultiva e orientação de arquitetura para os aplicativos da empresa"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "Um Gerente Técnico de Contas (TAM) dedicado e proativo é um diferencial exclusivo do plano AWS Enterprise Support.",
      incorrect: {
        0: "Suporte 24/7 por telefone, chat e e-mail já está incluído no plano Business Support.",
        2: "O conjunto completo de verificações do Trusted Advisor já está disponível a partir do Business Support.",
        3: "Orientação arquitetural geral já é oferecida no Business Support."
      }
    }
  },
  {
    id: 61,
    domain: "Faturamento, Preços e Suporte",
    question: "Qual modelo de precificação interromperá uma instância do Amazon EC2 em execução se a capacidade ficar temporariamente indisponível?",
    options: [
      "Instâncias sob demanda",
      "Instâncias reservadas conversíveis",
      "Instâncias spot",
      "Instâncias reservadas padrão"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "As Instâncias Spot utilizam capacidade ociosa do EC2 com até 90% de desconto, mas podem ser interrompidas pela AWS com aviso de 2 minutos caso a capacidade seja requisitada.",
      incorrect: {
        0: "Instâncias sob demanda não são interrompidas por falta de capacidade ociosa.",
        1: "Instâncias reservadas garantem capacidade quando associadas a uma Zona de Disponibilidade.",
        3: "Instâncias reservadas padrão não sofrem interrupção por retomada de capacidade Spot."
      }
    }
  },
  {
    id: 62,
    domain: "Conceitos de Nuvem",
    question: "Quais opções são recursos de perspectiva de segurança do AWS Cloud Adoption Framework (AWS CAF)? (Escolha dois.)",
    options: [
      "Resposta a incidentes",
      "Proteção de infraestrutura",
      "Observabilidade",
      "Disponibilidade e continuidade",
      "Gerenciamento de incidentes e problemas"
    ],
    correctAnswers: [0, 1],
    explanation: {
      correct: "Resposta a incidentes (Incident Response) e Proteção de infraestrutura (Infrastructure Protection) são capacidades oficiais da perspectiva de Segurança do AWS CAF.",
      incorrect: {
        2: "Observabilidade pertence à perspectiva de Operações.",
        3: "Disponibilidade e continuidade pertence à perspectiva de Operações.",
        4: "Gerenciamento de incidentes e problemas pertence à perspectiva de Operações."
      }
    }
  },
  {
    id: 63,
    domain: "Conceitos de Nuvem",
    question: "Qual característica da Nuvem AWS ajuda os usuários a eliminar a capacidade subutilizada da CPU?",
    options: [
      "Confiabilidade",
      "Durabilidade",
      "Agilidade",
      "Elasticidade"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "A elasticidade permite aumentar e reduzir automaticamente os recursos computacionais conforme a demanda real, evitando CPU ociosa e subutilizada.",
      incorrect: {
        0: "Confiabilidade refere-se à capacidade de se recuperar de falhas e funcionar corretamente.",
        1: "Durabilidade refere-se à proteção de dados contra perda ou corrupção ao longo do tempo.",
        2: "Agilidade refere-se à rapidez para experimentar e implantar recursos."
      }
    }
  },
  {
    id: 64,
    domain: "Conceitos de Nuvem",
    question: "Quais serviços da AWS uma empresa pode usar para obter uma arquitetura pouco acoplada? (Escolha dois.)",
    options: [
      "Amazon WorkSpaces",
      "Amazon Connect",
      "Amazon Simple Queue Service (Amazon SQS)",
      "AWS Trusted Advisor",
      "AWS Step Functions"
    ],
    correctAnswers: [2, 4],
    explanation: {
      correct: "O Amazon SQS desacopla produtores e consumidores por meio de filas assíncronas, e o AWS Step Functions coordena fluxos de trabalho entre microsserviços independentes.",
      incorrect: {
        0: "Amazon WorkSpaces é um serviço de desktops virtuais (DaaS).",
        1: "Amazon Connect é um serviço de contact center em nuvem.",
        3: "AWS Trusted Advisor é uma ferramenta de inspeção e recomendações de boas práticas."
      }
    }
  },
  {
    id: 65,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa mover arquivos de forma rápida e segura por longas distâncias entre seu cliente e um bucket do Amazon S3. Qual recurso do S3 atenderá a esse requisito?",
    options: [
      "S3 ACLs",
      "S3 Intelligent-Tiering",
      "S3 Transfer Acceleration",
      "S3 Versionamento"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O S3 Transfer Acceleration utiliza os locais de borda (Edge Locations) do Amazon CloudFront e a rede global otimizada da AWS para acelerar transferências de longa distância para o S3.",
      incorrect: {
        0: "S3 ACLs controlam permissões de acesso a buckets e objetos.",
        1: "S3 Intelligent-Tiering move objetos automaticamente entre camadas de armazenamento para otimizar custos.",
        3: "S3 Versionamento mantém múltiplas versões de um objeto para proteção contra exclusão ou sobrescrita."
      }
    }
  },
  {
    id: 66,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa precisa executar continuamente uma carga de trabalho experimental em uma instância do Amazon EC2 e interrompê-la após 12 horas. Qual opção de compra de instância atenderá a esse requisito de maneira MAIS econômica?",
    options: [
      "Instâncias Reservadas",
      "Instâncias Dedicadas",
      "Instâncias sob demanda",
      "Instâncias spot"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "Para uma carga de trabalho experimental curta (12 horas) que deve rodar continuamente sem risco de interrupção antes do término, as Instâncias sob demanda (On-Demand) são a opção mais econômica e adequada.",
      incorrect: {
        0: "Instâncias Reservadas exigem compromisso de 1 ou 3 anos.",
        1: "Instâncias Dedicadas têm custo elevado e são voltadas a requisitos de conformidade e licenciamento.",
        3: "Instâncias Spot podem ser interrompidas a qualquer momento pela AWS, violando o requisito de rodar continuamente por 12 horas."
      }
    }
  },
  {
    id: 67,
    domain: "Conceitos de Nuvem",
    question: "Qual fase da jornada de transformação da nuvem do AWS Cloud Adoption Framework (AWS CAF) se concentra em demonstrar como a nuvem ajuda a acelerar os resultados dos negócios?",
    options: [
      "Visualizar",
      "Lançamento",
      "Escalar",
      "Alinhar"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "A fase Visualizar (Envision) foca em identificar oportunidades de transformação e demonstrar como a nuvem acelerará os resultados estratégicos de negócio.",
      incorrect: {
        1: "Lançar (Launch) foca na implantação de pilotos em produção.",
        2: "Escalar (Scale) foca na expansão da adoção para toda a empresa.",
        3: "Alinhar (Align) foca na identificação de lacunas de capacidade organizacional."
      }
    }
  },
  {
    id: 68,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja que suas instâncias do Amazon EC2 operem em um ambiente altamente disponível, mesmo que haja um desastre natural em uma área geográfica específica. Qual abordagem alcançará esse objetivo?",
    options: [
      "Use instâncias EC2 em vários locais do Amazon CloudFront.",
      "Use instâncias EC2 em zonas locais (local zones) da AWS.",
      "Use instâncias EC2 em vários pontos de presença (edge locations).",
      "Use instâncias EC2 em várias regiões da AWS."
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Implantar recursos em múltiplas Regiões da AWS garante isolamento geográfico amplo, mantendo a aplicação ativa mesmo se um desastre natural afetar toda uma região.",
      incorrect: {
        0: "Edge locations do CloudFront servem para cache de conteúdo, não hospedam instâncias EC2.",
        1: "Local Zones ficam próximas a grandes centros urbanos, mas ainda vinculadas a uma região geográfica.",
        2: "Edge locations não executam instâncias EC2."
      }
    }
  },
  {
    id: 69,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa quer modernizar e converter uma aplicação monolítica em microsserviços. A empresa quer migrar o aplicativo para AWS. Qual estratégia de migração a empresa deve usar?",
    options: [
      "Replataforma",
      "Refatorar",
      "Hospedar novamente",
      "Recompra"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "Refatorar (Refactor / Re-architect) envolve reescrever ou rearquitetar a aplicação — como dividir um monolito em microsserviços nativos em nuvem.",
      incorrect: {
        0: "Replataforma (Replatform) faz otimizações pontuais sem alterar a arquitetura central do código.",
        2: "Hospedar novamente (Rehost / Lift-and-Shift) move a aplicação sem alterações.",
        3: "Recompra (Repurchase) substitui o sistema atual por um produto SaaS comercial."
      }
    }
  },
  {
    id: 70,
    domain: "Segurança e Conformidade",
    question: "Um administrador de sistemas criou um novo usuário IAM para um desenvolvedor e atribuiu ao usuário uma chave de acesso em vez de um nome de usuário e uma senha. Para que serve a chave de acesso?",
    options: [
      "Para acessar todas as contas AWS de uma empresa",
      "Para acessar a conta da AWS como usuário raiz da conta da AWS",
      "Para acessar a conta da AWS por meio do AWS Management Console",
      "Para acessar a conta AWS por meio de uma CLI"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Chaves de acesso (Access Key ID e Secret Access Key) são usadas para acesso programático aos serviços da AWS via AWS CLI, SDKs ou chamadas diretas de API.",
      incorrect: {
        0: "As chaves de acesso são vinculadas a um usuário específico dentro de uma conta.",
        1: "O usuário criado é um usuário IAM comum, não o usuário raiz.",
        2: "O acesso ao AWS Management Console (interface web) exige nome de usuário e senha."
      }
    }
  },
  {
    id: 71,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual opção é um ambiente que consiste em um ou mais data centers?",
    options: [
      "AWS Outposts",
      "VPC",
      "Zona de disponibilidade",
      "Amazon CloudFront"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "Uma Zona de Disponibilidade (Availability Zone - AZ) consiste em um ou mais data centers discretos com energia, rede e conectividade redundantes dentro de uma Região AWS.",
      incorrect: {
        0: "AWS Outposts leva infraestrutura física da AWS para o data center local do cliente.",
        1: "VPC é uma rede virtual logicamente isolada dentro de uma região.",
        3: "Amazon CloudFront é uma rede de entrega de conteúdo (CDN)."
      }
    }
  },
  {
    id: 72,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa está migrando um data center local para a Nuvem AWS. A empresa deve migrar 50 petabytes de dados de armazenamento de arquivos para a AWS com a menor sobrecarga operacional possível. Qual serviço ou recurso da AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS Database Migration Service (AWS DMS)",
      "AWS Snowmobile",
      "AWS Snowball Edge",
      "AWS Data Exchange"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O AWS Snowmobile é um caminhão contêiner seguro projetado para migrar volumes em escala de exabytes (ou dezenas de petabytes, como 50 PB) com mínima sobrecarga operacional.",
      incorrect: {
        0: "AWS DMS migra bancos de dados relacionais e NoSQL, não 50 PB de arquivos.",
        2: "AWS Snowball Edge armazena dezenas de terabytes por dispositivo; seriam necessárias centenas de unidades para 50 PB.",
        3: "AWS Data Exchange é um serviço para assinar e compartilhar conjuntos de dados de terceiros."
      }
    }
  },
  {
    id: 73,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa possui um aplicativo com requisitos robustos de hardware. O aplicativo deve ser acessado por alunos que utilizam laptops leves e de baixo custo. Qual serviço da AWS ajudará a empresa a implantar o aplicativo sem investir em infraestrutura de back-end ou hardware de cliente de última geração?",
    options: [
      "AWS AppSync",
      "Amazon AppStream 2.0",
      "AWS Elastic Beanstalk",
      "Amazon WorkLink"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon AppStream 2.0 é um serviço totalmente gerenciado de streaming de aplicativos que executa softwares pesados na nuvem e transmite a interface para qualquer navegador em dispositivos leves.",
      incorrect: {
        0: "AWS AppSync gerencia APIs GraphQL e sincronização de dados.",
        2: "AWS Elastic Beanstalk implanta aplicações web, mas não faz streaming de aplicativos desktop pesados.",
        3: "Amazon WorkLink (descontinuado) fornecia acesso móvel a sites internos."
      }
    }
  },
  {
    id: 74,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa deseja consultar os logs de seu servidor para obter insights sobre as experiências de seus clientes. Qual serviço da AWS armazenará esses dados de maneira MAIS econômica?",
    options: [
      "Amazon Aurora",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon S3",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O Amazon S3 oferece o armazenamento mais econômico para grandes volumes de logs e permite consultá-los diretamente via SQL usando o Amazon Athena sem precisar de servidores.",
      incorrect: {
        0: "Amazon Aurora é um banco de dados relacional transacional com custo muito superior para armazenar logs brutos.",
        1: "Amazon EFS é um sistema de arquivos NFS de alto desempenho, mais caro por GB que o S3.",
        3: "Amazon EBS é armazenamento em bloco vinculado a instâncias EC2."
      }
    }
  },
  {
    id: 75,
    domain: "Segurança e Conformidade",
    question: "Qual serviço de segurança reconhece e classifica automaticamente dados confidenciais ou propriedade intelectual na AWS?",
    options: [
      "Amazon Inspector",
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Shield"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon Macie utiliza machine learning e correspondência de padrões para descobrir, classificar e proteger automaticamente dados confidenciais (como PII, CPFs e cartões) no Amazon S3.",
      incorrect: {
        0: "Amazon Inspector busca vulnerabilidades de software em instâncias EC2 e contêineres.",
        2: "Amazon GuardDuty detecta ameaças e atividades maliciosas na conta.",
        3: "AWS Shield protege contra ataques DDoS."
      }
    }
  },
  {
    id: 76,
    domain: "Segurança e Conformidade",
    question: "Quais ações são práticas recomendadas para um usuário root de conta da AWS? (Escolha dois.)",
    options: [
      "Compartilhe credenciais de usuário root com membros da equipe.",
      "Crie vários usuários root para a conta, separados por ambiente.",
      "Crie um usuário IAM com privilégios de administrador para tarefas administrativas diárias, em vez de usar o usuário root.",
      "Habilite a autenticação multifator (MFA) no usuário root.",
      "Use acesso programático em vez do usuário root e senha."
    ],
    correctAnswers: [2, 3],
    explanation: {
      correct: "As duas principais boas práticas para a conta root são habilitar o MFA imediatamente e criar usuários IAM administrativos para o uso cotidiano, mantendo o root bloqueado.",
      incorrect: {
        0: "Nunca compartilhe as credenciais do usuário root com ninguém.",
        1: "Existe apenas um usuário root por conta AWS; não é possível criar vários.",
        4: "Não se deve gerar chaves de acesso programático para o usuário root."
      }
    }
  },
  {
    id: 77,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa está executando uma carga de trabalho crítica em uma instância de banco de dados do Amazon RDS. A empresa precisa que a instância de banco de dados esteja altamente disponível com um tempo de recuperação inferior a 5 minutos. Qual solução atenderá a esses requisitos?",
    options: [
      "Tire snapshots frequentes da instância de banco de dados. Armazene os snapshots no Amazon S3.",
      "Crie uma réplica de leitura da instância de banco de dados.",
      "Crie um modelo da instância de banco de dados usando AWS CloudFormation.",
      "Modifique a instância de banco de dados para ser uma implantação Multi-AZ."
    ],
    correctAnswers: [3],
    explanation: {
      correct: "A implantação Multi-AZ do Amazon RDS mantém uma réplica em espera síncrona em outra Zona de Disponibilidade com failover automático em cerca de 60 a 120 segundos (bem abaixo de 5 minutos).",
      incorrect: {
        0: "Restaurar um snapshot manual leva muito mais tempo e exige intervenção operacional.",
        1: "Réplicas de leitura são assíncronas e voltadas para escalabilidade de leitura, exigindo promoção manual em caso de falha.",
        2: "AWS CloudFormation automatiza a criação da infraestrutura, não realiza failover automático de banco de dados."
      }
    }
  },
  {
    id: 78,
    domain: "Segurança e Conformidade",
    question: "Uma empresa precisa transferir dados entre um bucket do Amazon S3 e um aplicativo local. Quem é o responsável pela segurança desses dados, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Fornecedor de firewall",
      "Parceiro do AWS Marketplace",
      "A empresa",
      "AWS"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "No modelo de responsabilidade compartilhada, o cliente (a empresa) é sempre responsável pela segurança dos seus dados, tanto em repouso quanto em trânsito.",
      incorrect: {
        0: "Fornecedores externos não assumem a responsabilidade de governança de dados do cliente na AWS.",
        1: "Parceiros do Marketplace fornecem softwares, mas não respondem pela transferência de dados da empresa.",
        3: "A AWS protege a infraestrutura subjacente, não os dados trafegados pelo cliente."
      }
    }
  },
  {
    id: 79,
    domain: "Conceitos de Nuvem",
    question: "Qual pilar do AWS Well-Architected Framework se refere à capacidade de um sistema se recuperar de interrupções de infraestrutura ou serviço e adquirir recursos de computação dinamicamente para atender à demanda?",
    options: [
      "Otimização de custos",
      "Confiabilidade",
      "Segurança",
      "Eficiência de desempenho"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O pilar de Confiabilidade (Reliability) abrange a capacidade de uma carga de trabalho executar sua função pretendida, recuperar-se de falhas e escalar dinamicamente para atender à demanda.",
      incorrect: {
        0: "Otimização de custos foca em evitar gastos desnecessários e obter o menor preço.",
        2: "Segurança foca na proteção de sistemas, dados e controle de acessos.",
        3: "Eficiência de desempenho foca no uso eficiente de recursos computacionais e escolha das tecnologias adequadas."
      }
    }
  },
  {
    id: 80,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço da AWS oferece aos usuários a capacidade de criar painéis interativos de business intelligence que incluem insights de machine learning?",
    options: [
      "Amazon Kendra",
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon QuickSight"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon QuickSight é o serviço serverless de Business Intelligence (BI) da AWS para criar dashboards interativos com insights baseados em machine learning.",
      incorrect: {
        0: "Amazon Kendra é um serviço de pesquisa inteligente corporativa alimentado por ML.",
        1: "Amazon Redshift é um data warehouse em nuvem.",
        2: "Amazon Athena é um serviço de consulta interativa SQL diretamente no Amazon S3."
      }
    }
  },
  {
    id: 81,
    domain: "Conceitos de Nuvem",
    question: "Qual das alternativas a seguir é uma proposta de valor da AWS que descreve a capacidade de um usuário de dimensionar a infraestrutura com base na demanda?",
    options: [
      "Velocidade da inovação",
      "Arquitetura dissociada",
      "Elasticidade de recursos",
      "Implantação global"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "A elasticidade de recursos refere-se à capacidade de expandir ou reduzir automaticamente a capacidade computacional conforme as variações na demanda.",
      incorrect: {
        0: "Velocidade da inovação refere-se à agilidade para testar e lançar novas funcionalidades rapidamente.",
        1: "Arquitetura dissociada (acoplamento fraco) é uma prática de design para reduzir dependências entre componentes.",
        3: "Implantação global refere-se à capacidade de lançar aplicações em várias regiões do mundo em minutos."
      }
    }
  },
  {
    id: 82,
    domain: "Segurança e Conformidade",
    question: "Qual ação é uma prática recomendada de segurança para acesso a dados confidenciais armazenados em um bucket do Amazon S3?",
    options: [
      "Use funções do IAM para aplicativos que exigem acesso ao bucket S3.",
      "Habilite a replicação entre regiões (CRR) do S3 no bucket S3.",
      "Configure o AWS WAF para evitar acesso não autorizado ao bucket S3.",
      "Configure o Amazon GuardDuty para evitar acesso não autorizado ao bucket S3."
    ],
    correctAnswers: [0],
    explanation: {
      correct: "Usar Funções do IAM (IAM Roles) permite conceder permissões temporárias e gerenciadas automaticamente aos aplicativos, evitando o uso de credenciais estáticas.",
      incorrect: {
        1: "CRR replica objetos entre regiões para recuperação de desastres ou latência, não controla permissões de acesso.",
        2: "AWS WAF protege aplicações web (HTTP/HTTPS) contra exploits, não gerencia autorização de acesso ao S3.",
        3: "Amazon GuardDuty detecta ameaças e atividades anômalas, mas não bloqueia nem controla acesso preventivo."
      }
    }
  },
  {
    id: 83,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa deseja saber mais sobre os benefícios oferecidos pela computação em nuvem. A empresa quer entender a vantagem operacional da agilidade. Como a AWS oferece agilidade aos usuários?",
    options: [
      "A capacidade de garantir alta disponibilidade implantando cargas de trabalho em diversas regiões",
      "Um modelo pré-pago para muitos serviços e recursos",
      "A capacidade de provisionar e desprovisionar recursos rapidamente com esforço mínimo",
      "A capacidade de transferir o gerenciamento de infraestrutura para a Nuvem AWS"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "Na nuvem AWS, a agilidade significa poder provisionar e liberar recursos de TI em minutos, reduzindo drasticamente o tempo de experimentação e entrega.",
      incorrect: {
        0: "Implantação multirregional refere-se à alta disponibilidade e alcance global.",
        1: "Modelo pré-pago (pay-as-you-go) refere-se à otimização financeira e despesas variáveis.",
        3: "Transferir a gestão física refere-se à redução de sobrecarga operacional com infraestrutura."
      }
    }
  },
  {
    id: 84,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço da AWS os usuários devem usar para aprender sobre a disponibilidade e as operações dos serviços da AWS?",
    options: [
      "AWS Service Catalog",
      "AWS Health Dashboard",
      "Amazon EventBridge",
      "AWS Control Tower"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O AWS Health Dashboard fornece visibilidade em tempo real sobre a disponibilidade geral dos serviços da AWS e eventos operacionais que afetam a sua conta.",
      incorrect: {
        0: "AWS Service Catalog gerencia catálogos de produtos de TI aprovados para implantação interna.",
        2: "Amazon EventBridge é um barramento de eventos serverless para integrar aplicações.",
        3: "AWS Control Tower automatiza a configuração e governança de ambientes multi-conta."
      }
    }
  },
  {
    id: 85,
    domain: "Segurança e Conformidade",
    question: "O que o cliente SEMPRE é responsável por gerenciar, de acordo com o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Dados do cliente",
      "Licenças de software",
      "Rede",
      "Chaves de criptografia"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "Independentemente do modelo de serviço utilizado (IaaS, PaaS ou SaaS), o cliente sempre mantém a propriedade e a responsabilidade total pelos seus próprios dados.",
      incorrect: {
        1: "Em serviços gerenciados com licença incluída, a AWS gerencia o licenciamento.",
        2: "O gerenciamento da infraestrutura física de rede e, em serviços serverless, da rede subjacente pertence à AWS.",
        3: "Quando o cliente opta por chaves gerenciadas pelo serviço (como SSE-S3), a AWS gerencia o ciclo de vida das chaves."
      }
    }
  },
  {
    id: 86,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa planeja migrar para a Nuvem AWS. A empresa está coletando informações sobre sua infraestrutura local e exige informações como nome do host, endereço IP e endereço MAC. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "AWS Application Migration Service",
      "AWS Application Discovery Service",
      "AWS Database Migration Service (AWS DMS)",
      "AWS DataSync"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O AWS Application Discovery Service coleta inventário detalhado dos servidores locais (hostname, IP, MAC, uso de CPU/memória e dependências) para planejar migrações.",
      incorrect: {
        0: "AWS Application Migration Service executa a replicação e migração lift-and-shift dos servidores.",
        2: "AWS DMS migra bancos de dados para a nuvem.",
        3: "AWS DataSync automatiza a transferência de arquivos e objetos entre armazenamento local e AWS."
      }
    }
  },
  {
    id: 87,
    domain: "Segurança e Conformidade",
    question: "Qual ação ajudará a aumentar a segurança na Nuvem AWS?",
    options: [
      "Alterne as chaves de acesso periodicamente.",
      "Use políticas inline em vez de políticas gerenciadas pelo cliente.",
      "Use usuários do IAM em vez de funções do IAM para delegar permissões.",
      "Habilite o acesso programático para todos os usuários do IAM."
    ],
    correctAnswers: [0],
    explanation: {
      correct: "Alternar (rotacionar) chaves de acesso periodicamente reduz o risco de comprometimento prolongado caso uma credencial seja exposta.",
      incorrect: {
        1: "Políticas gerenciadas oferecem melhor reutilização, versionamento e auditoria do que políticas inline.",
        2: "Funções do IAM (Roles) são mais seguras que usuários IAM com credenciais estáticas para delegação de permissões.",
        3: "O acesso programático só deve ser habilitado para usuários que realmente necessitam dele."
      }
    }
  },
  {
    id: 88,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa está planejando migrar seu aplicativo para a Nuvem AWS. Qual ferramenta ou conjunto de recursos da AWS a empresa deve usar para analisar e avaliar sua preparação para a migração?",
    options: [
      "AWS Cloud Adoption Framework (AWS CAF)",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Well-Architected Framework"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Cloud Adoption Framework (AWS CAF) fornece orientações e perspectivas organizacionais para avaliar a prontidão e planejar a jornada de adoção da nuvem.",
      incorrect: {
        1: "AWS Pricing Calculator estima os custos mensais dos serviços da AWS.",
        2: "AWS Budgets define orçamentos e alertas de gastos.",
        3: "AWS Well-Architected Framework avalia arquiteturas e cargas de trabalho já projetadas ou em execução na nuvem."
      }
    }
  },
  {
    id: 89,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual das alternativas a seguir descreve algumas das principais funcionalidades do Amazon S3?",
    options: [
      "O Amazon S3 é um serviço de armazenamento em blocos de alto desempenho projetado para uso com o Amazon EC2.",
      "O Amazon S3 é um NFS elástico escalável e totalmente gerenciado para uso com serviços da Nuvem AWS e recursos locais.",
      "O Amazon S3 é um sistema de armazenamento de arquivos totalmente gerenciado, altamente confiável e escalável, acessível por meio do protocolo SMB padrão do setor.",
      "Amazon S3 é um serviço de armazenamento de objetos que oferece desempenho, segurança, escalabilidade e disponibilidade de dados de alto nível."
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon S3 é um serviço de armazenamento de objetos altamente durável (11 noves), escalável e seguro acessível via API HTTP/HTTPS.",
      incorrect: {
        0: "Armazenamento em blocos de alto desempenho para EC2 descreve o Amazon EBS.",
        1: "Sistema de arquivos NFS elástico descreve o Amazon EFS.",
        2: "Sistema de arquivos SMB gerenciado descreve o Amazon FSx for Windows File Server."
      }
    }
  },
  {
    id: 90,
    domain: "Faturamento, Preços e Suporte",
    question: "Qual benefício da AWS é demonstrado pelos serviços de tecnologia sob demanda que permitem às empresas substituir despesas fixas iniciais por despesas variáveis?",
    options: [
      "Alcance global",
      "Economias de escala",
      "Preços pré-pagos",
      "Alta disponibilidade"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O modelo de preços pré-pagos (Pay-as-you-go) permite pagar apenas pelos recursos consumidos sob demanda, convertendo investimentos iniciais (CapEx) em custos variáveis (OpEx).",
      incorrect: {
        0: "Alcance global refere-se à implantação em regiões ao redor do mundo.",
        1: "Economias de escala referem-se à redução contínua de preços graças ao volume agregado da AWS.",
        3: "Alta disponibilidade refere-se à resiliência contra falhas de infraestrutura."
      }
    }
  },
  {
    id: 91,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Quais serviços ou recursos da AWS permitem que os usuários conectem redes locais a uma VPC? (Escolha dois.)",
    options: [
      "AWS VPN",
      "Amazon CloudFront",
      "VPC peering",
      "Elastic Load Balancing",
      "AWS Direct Connect"
    ],
    correctAnswers: [0, 4],
    explanation: {
      correct: "O AWS Site-to-Site VPN (via internet criptografada) e o AWS Direct Connect (via link físico dedicado) conectam redes locais (on-premises) a uma Amazon VPC.",
      incorrect: {
        1: "Amazon CloudFront é uma rede de entrega de conteúdo (CDN).",
        2: "VPC peering conecta duas VPCs entre si, não uma rede local.",
        3: "Elastic Load Balancing distribui tráfego entre instâncias e contêineres."
      }
    }
  },
  {
    id: 92,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Um usuário precisa implantar rapidamente um banco de dados não relacional na AWS. O usuário não deseja gerenciar o hardware subjacente ou o software de banco de dados. Qual serviço AWS pode ser usado para fazer isso?",
    options: [
      "Amazônia Aurora",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon RDS"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon DynamoDB é um banco de dados NoSQL (não relacional) de chave-valor e documentos totalmente gerenciado e serverless.",
      incorrect: {
        0: "Amazon Aurora é um banco de dados relacional compatível com MySQL e PostgreSQL.",
        2: "Amazon Redshift é um data warehouse relacional para análise de dados.",
        3: "Amazon RDS gerencia bancos de dados relacionais (SQL)."
      }
    }
  },
  {
    id: 93,
    domain: "Segurança e Conformidade",
    question: "Qual serviço ou recurso da AWS uma empresa pode usar para aplicar regras de segurança a instâncias específicas do Amazon EC2?",
    options: [
      "AWS WAF",
      "ACLs de rede",
      "AWS Trusted Advisor",
      "Grupos de segurança"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Os Grupos de segurança (Security Groups) atuam como firewalls virtuais com estado (stateful) diretamente no nível da instância EC2 (interface de rede).",
      incorrect: {
        0: "AWS WAF protege aplicações web contra ataques HTTP/HTTPS.",
        1: "ACLs de rede atuam no nível da sub-rede, não de instâncias específicas.",
        2: "AWS Trusted Advisor fornece recomendações de melhores práticas."
      }
    }
  },
  {
    id: 94,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa está construindo um aplicativo que requer a capacidade de enviar, armazenar e receber mensagens entre componentes do aplicativo. A empresa tem outro requisito para processar mensagens na ordem FIFO (primeiro a entrar, primeiro a sair). Qual serviço AWS a empresa deve usar?",
    options: [
      "AWS Step Functions",
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Kinesis Data Streams",
      "Amazon Simple Notification Service (Amazon SNS)"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon SQS oferece filas FIFO (First-In, First-Out) projetadas especificamente para garantir que a ordem de envio e processamento das mensagens seja preservada exatamente.",
      incorrect: {
        0: "AWS Step Functions orquestra fluxos de trabalho entre serviços.",
        2: "Amazon Kinesis Data Streams ingere e processa fluxos contínuos de dados em tempo real.",
        3: "Amazon SNS é um serviço de mensagens pub/sub para envio de notificações push."
      }
    }
  },
  {
    id: 95,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço ou recurso da AWS é um serviço pré-autenticado baseado em navegador que pode ser iniciado diretamente no Console de gerenciamento da AWS?",
    options: [
      "AWS Lightsail",
      "AWS API",
      "AWS Cloud9",
      "AWS CloudShell"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS CloudShell é um terminal de linha de comando pré-autenticado baseado em navegador, iniciado diretamente pelo Console da AWS com a AWS CLI já instalada.",
      incorrect: {
        0: "AWS Lightsail oferece servidores virtuais privados (VPS) simplificados.",
        1: "AWS API é a interface programática dos serviços, não um shell no navegador.",
        2: "AWS Cloud9 é um ambiente de desenvolvimento integrado (IDE) completo na nuvem."
      }
    }
  },
  {
    id: 96,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja migrar seu banco de dados para um serviço gerenciado da AWS compatível com PostgreSQL. Quais serviços da AWS atenderão a esses requisitos? (Escolha dois.)",
    options: [
      "Amazon Athena",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon EC2",
      "Amazon RDS"
    ],
    correctAnswers: [2, 4],
    explanation: {
      correct: "Tanto o Amazon RDS (engine PostgreSQL) quanto o Amazon Aurora (Aurora PostgreSQL-Compatible) são serviços gerenciados de banco de dados relacional compatíveis com PostgreSQL.",
      incorrect: {
        0: "Amazon Athena consulta arquivos no S3 via SQL, não é um banco de dados transacional.",
        1: "Amazon DynamoDB é um banco de dados NoSQL.",
        3: "Amazon EC2 oferece servidores virtuais não gerenciados na camada de banco de dados."
      }
    }
  },
  {
    id: 97,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa possui uma frota de navios cargueiros. Os navios cargueiros possuem sensores que coletam dados no mar, onde há conectividade intermitente ou inexistente com a internet. A empresa precisa coletar, formatar e processar os dados no mar e movê-los posteriormente para a AWS. Qual serviço AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS IoT Core",
      "AWS Storage Gateway",
      "AWS Snowball Edge",
      "Amazon Lightsail"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS Snowball Edge é um dispositivo físico robusto com capacidade de computação e armazenamento local projetado para operar em ambientes desconectados (como navios) e depois transferir os dados fisicamente à AWS.",
      incorrect: {
        0: "AWS IoT Core exige conectividade ativa com a internet para receber mensagens MQTT/HTTPS.",
        1: "AWS Storage Gateway requer conexão de rede contínua com a nuvem AWS.",
        3: "Amazon Lightsail é um serviço de servidores virtuais em nuvem."
      }
    }
  },
  {
    id: 98,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Um usuário tem conhecimento limitado dos serviços da AWS, mas deseja implantar rapidamente um aplicativo Node.js escalonável na Nuvem AWS. Qual serviço deve ser usado para implantar o aplicativo?",
    options: [
      "Amazon EC2",
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "AWS OpsWorks"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS Elastic Beanstalk é um serviço PaaS que permite enviar apenas o código (como Node.js, Python ou Java) enquanto ele provisiona automaticamente EC2, balanceador de carga e Auto Scaling.",
      incorrect: {
        0: "Amazon EC2 exige que o usuário configure manualmente o servidor, rede e escalabilidade.",
        1: "AWS CloudFormation exige escrever templates de infraestrutura como código.",
        3: "AWS OpsWorks gerencia configurações usando Chef e Puppet."
      }
    }
  },
  {
    id: 99,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa de uma rede de entrega de conteúdo que forneça entrega segura de dados, vídeos, aplicativos e APIs para usuários em todo o mundo, com baixa latência e altas velocidades de transferência. Qual serviço da AWS atende a esses requisitos?",
    options: [
      "Amazon S3",
      "Elastic Load Balancing",
      "Amazon Elastic Transcoder",
      "Amazon CloudFront"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon CloudFront é a rede global de entrega de conteúdo (CDN) da AWS que entrega dados, vídeos e APIs com baixa latência através de Edge Locations.",
      incorrect: {
        0: "Amazon S3 é armazenamento de objetos regional.",
        1: "Elastic Load Balancing distribui tráfego dentro de uma região.",
        2: "Amazon Elastic Transcoder converte arquivos de mídia entre formatos."
      }
    }
  },
  {
    id: 100,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa precisa usar software de terceiros para sua carga de trabalho na AWS. Qual serviço ou recurso da AWS a empresa pode usar para adquirir o software?",
    options: [
      "AWS Managed Service",
      "AWS License Manager",
      "AWS Marketplace",
      "AWS Resource Access Manager"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS Marketplace é uma loja digital com milhares de soluções de software de terceiros prontas para serem adquiridas e implantadas na AWS.",
      incorrect: {
        0: "AWS Managed Services opera a infraestrutura AWS em nome do cliente.",
        1: "AWS License Manager rastreia e gerencia licenças já adquiridas de fornecedores.",
        3: "AWS Resource Access Manager (RAM) compartilha recursos AWS entre contas."
      }
    }
  },
  {
    id: 101,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa de armazenamento de arquivos totalmente gerenciado, altamente confiável e escalável, acessível por meio do protocolo Server Message Block (SMB). Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon FSx for Windows File Server",
      "Amazon S3",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon FSx for Windows File Server oferece armazenamento de arquivos totalmente gerenciado com suporte nativo ao protocolo SMB e integração com Active Directory.",
      incorrect: {
        0: "Amazon EFS utiliza o protocolo NFS para sistemas Linux, não SMB.",
        2: "Amazon S3 é armazenamento de objetos via API HTTP, não sistema de arquivos SMB.",
        3: "Amazon EBS fornece volumes em bloco anexados a uma instância EC2."
      }
    }
  },
  {
    id: 102,
    domain: "Segurança e Conformidade",
    question: "Uma empresa precisa configurar e gerenciar centralmente grupos de segurança da Amazon VPC em várias contas da AWS em uma organização no AWS Organizations. Qual serviço AWS a empresa deve usar para atender a esses requisitos?",
    options: [
      "AWS Firewall Manager",
      "Amazon GuardDuty",
      "AWS WAF",
      "Amazon Detective"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Firewall Manager permite gerenciar e auditar centralmente regras de AWS WAF, AWS Shield Advanced e Security Groups da VPC em todas as contas do AWS Organizations.",
      incorrect: {
        1: "Amazon GuardDuty detecta ameaças de segurança.",
        2: "AWS WAF filtra tráfego HTTP/HTTPS em aplicações web.",
        3: "Amazon Detective auxilia na investigação de incidentes de segurança."
      }
    }
  },
  {
    id: 103,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa possui uma instância do Amazon EC2 em uma sub-rede privada. A empresa deseja iniciar uma conexão com a Internet para obter atualizações do sistema operacional e, ao mesmo tempo, impedir que o tráfego da Internet acesse a instância do EC2. Qual serviço gerenciado pela AWS permite isso?",
    options: [
      "Amazon PrivateLink",
      "NAT gateway",
      "VPC endpoint",
      "VPC peering"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "Um NAT Gateway implantado em uma sub-rede pública permite que instâncias em sub-redes privadas iniciem conexões de saída para a internet (como baixar patches), bloqueando conexões de entrada não solicitadas.",
      incorrect: {
        0: "Amazon PrivateLink expõe serviços privados entre VPCs sem passar pela internet.",
        2: "VPC endpoint conecta recursos privados a serviços da AWS sem internet.",
        3: "VPC peering interconecta duas VPCs privadamente."
      }
    }
  },
  {
    id: 104,
    domain: "Segurança e Conformidade",
    question: "Qual serviço ou recurso da AWS pode ser usado para identificar serviços que foram usados por um usuário em um intervalo de datas especificado?",
    options: [
      "Network Access Analyzer",
      "AWS Identity and Access Management Access Analyzer",
      "Listas de controle de acesso (ACLs) do Amazon S3",
      "AWS Certificate Manager (ACM)"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O IAM Access Analyzer (e os dados de último acesso no IAM) analisa as permissões e identifica quais serviços foram efetivamente acessados por usuários ou roles em um período.",
      incorrect: {
        0: "Network Access Analyzer analisa caminhos de rede na VPC.",
        2: "ACLs do S3 definem permissões básicas de leitura/escrita em buckets.",
        3: "AWS Certificate Manager gerencia certificados SSL/TLS."
      }
    }
  },
  {
    id: 105,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa precisa contratar consultores terceirizados para ajudar a manter e dar suporte ao seu ambiente AWS e às necessidades de negócios da empresa. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
    options: [
      "AWS Support",
      "AWS Organizations",
      "AWS Service Catalog",
      "AWS Partner Network (APN)"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "A AWS Partner Network (APN) é a comunidade global de parceiros e consultores certificados que ajudam clientes a projetar, migrar e gerenciar soluções na AWS.",
      incorrect: {
        0: "AWS Support fornece suporte técnico direto dos engenheiros da própria AWS.",
        1: "AWS Organizations gerencia múltiplas contas AWS.",
        2: "AWS Service Catalog gerencia catálogos internos de produtos de TI."
      }
    }
  },
  {
    id: 106,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa deseja criar painéis do Amazon QuickSight semanalmente usando seus dados de faturamento. Qual recurso ou ferramenta da AWS a empresa pode usar para atender a esses requisitos?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost Anomaly Detection",
      "AWS Cost and Usage Report"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS Cost and Usage Report (CUR) publica os dados mais detalhados de faturamento e uso em um bucket S3, podendo ser integrado diretamente ao Amazon Athena e Amazon QuickSight.",
      incorrect: {
        0: "AWS Cost Explorer fornece gráficos prontos no console, mas não alimenta pipelines personalizados do QuickSight com dados granulares.",
        1: "AWS Budgets envia alertas de limite de gastos.",
        2: "AWS Cost Anomaly Detection usa machine learning para alertar sobre picos inesperados de gastos."
      }
    }
  },
  {
    id: 107,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa planejar, agendar e executar centenas de milhares de trabalhos de computação na AWS. Qual serviço AWS a empresa pode usar para atender a esse requisito?",
    options: [
      "Amazon Simple Queue Service (Amazon SQS)",
      "AWS Service Catalog",
      "AWS Step Functions",
      "AWS Batch"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS Batch planeja, agenda e executa centenas de milhares de trabalhos de computação em lote (batch jobs) provisionando dinamicamente instâncias EC2 ou Spot.",
      incorrect: {
        0: "Amazon SQS é um serviço de filas de mensagens.",
        1: "AWS Service Catalog gerencia catálogos de modelos de infraestrutura.",
        2: "AWS Step Functions coordena fluxos de trabalho entre microsserviços."
      }
    }
  },
  {
    id: 108,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual das alternativas a seguir é uma maneira de usar grupos do Amazon EC2 Auto Scaling para dimensionar a capacidade na Nuvem AWS?",
    options: [
      "Transferir recursos de CPU não utilizados entre instâncias EC2.",
      "Use instâncias EC2 sem servidor.",
      "Dimensione automaticamente o número de instâncias do EC2, com base na demanda.",
      "Aumente ou diminua o tamanho das instâncias do EC2 automaticamente, com base na demanda."
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O Amazon EC2 Auto Scaling realiza escalonamento horizontal, adicionando ou removendo automaticamente instâncias EC2 conforme a demanda definida nas políticas.",
      incorrect: {
        0: "Não é possível transferir CPU ociosa de uma instância EC2 para outra.",
        1: "Instâncias EC2 são máquinas virtuais, não computação sem servidor (serverless).",
        3: "Alterar o tamanho (vCPU/RAM) da instância é escalonamento vertical e exige parar a instância, não sendo feito pelo Auto Scaling."
      }
    }
  },
  {
    id: 109,
    domain: "Segurança e Conformidade",
    question: "Qual serviço de segurança da AWS protege aplicativos contra ataques distribuídos de negação de serviço com detecção sempre ativa e mitigações automáticas em linha?",
    options: [
      "Elastic Load Balancing (ELB)",
      "AWS Shield",
      "Amazon Inspector",
      "AWS Web Application Firewall (AWS WAF)"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O AWS Shield fornece proteção gerenciada contra ataques DDoS com detecção contínua e mitigação automática em linha.",
      incorrect: {
        0: "ELB distribui o tráfego de rede entre instâncias.",
        2: "Amazon Inspector verifica vulnerabilidades de software.",
        3: "AWS WAF filtra requisições maliciosas na camada HTTP/HTTPS (como SQL Injection)."
      }
    }
  },
  {
    id: 110,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço da AWS permite que os usuários modelem e provisionem recursos da AWS usando linguagens de programação comuns?",
    options: [
      "AWS Systems Manager",
      "AWS CodePipeline",
      "AWS Cloud Development Kit (AWS CDK)",
      "AWS CloudFormation"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS CDK permite definir infraestrutura em nuvem usando linguagens de programação familiares (TypeScript, Python, Java, C#, Go) e sintetizá-la em templates do CloudFormation.",
      incorrect: {
        0: "AWS Systems Manager gerencia operações e configurações de instâncias.",
        1: "AWS CodePipeline automatiza pipelines de CI/CD.",
        3: "AWS CloudFormation utiliza arquivos declarativos estáticos em YAML ou JSON, não linguagens de programação imperativas."
      }
    }
  },
  {
    id: 111,
    domain: "Faturamento, Preços e Suporte",
    question: "Qual modelo de preço de instância do Amazon EC2 pode oferecer descontos de até 90%?",
    options: [
      "Instâncias Reservadas",
      "Hosts Dedicados",
      "Sob demanda",
      "Instâncias spot"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "As Instâncias Spot aproveitam a capacidade computacional ociosa da AWS oferecendo descontos de até 90% em comparação aos preços sob demanda.",
      incorrect: {
        0: "Instâncias Reservadas oferecem descontos de até 72%.",
        1: "Hosts Dedicados têm preço premium por serem servidores físicos exclusivos.",
        2: "Instâncias sob demanda cobram a tarifa padrão sem desconto."
      }
    }
  },
  {
    id: 112,
    domain: "Segurança e Conformidade",
    question: "Quais tipos de criptografia podem ser usados para proteger objetos em repouso no Amazon S3? (Escolha dois.)",
    options: [
      "Transparent Data Encryption (TDE)",
      "Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)",
      "TLS",
      "Server-side encryption with AWS KMS managed keys (SSE-KMS)",
      "SSL"
    ],
    correctAnswers: [1, 3],
    explanation: {
      correct: "O Amazon S3 suporta criptografia em repouso no lado do servidor usando chaves gerenciadas pelo próprio S3 (SSE-S3) ou chaves gerenciadas pelo AWS KMS (SSE-KMS).",
      incorrect: {
        0: "TDE é uma tecnologia de criptografia de bancos de dados relacionais (como Oracle e SQL Server).",
        2: "TLS é um protocolo de criptografia de dados em trânsito, não em repouso.",
        4: "SSL é o predecessor do TLS, usado para criptografia em trânsito."
      }
    }
  },
  {
    id: 113,
    domain: "Conceitos de Nuvem",
    question: "Qual opção é uma perspectiva que inclui recursos básicos do AWS Cloud Adoption Framework (AWS CAF)?",
    options: [
      "Sustentabilidade",
      "Eficiência de desempenho",
      "Governança",
      "Confiabilidade"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "As seis perspectivas do AWS CAF são: Negócios, Pessoas, Governança, Plataforma, Segurança e Operações.",
      incorrect: {
        0: "Sustentabilidade é um pilar do AWS Well-Architected Framework, não do AWS CAF.",
        1: "Eficiência de desempenho é um pilar do AWS Well-Architected Framework.",
        3: "Confiabilidade é um pilar do AWS Well-Architected Framework."
      }
    }
  },
  {
    id: 114,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa está executando e gerenciando seu próprio ambiente Docker em instâncias do Amazon EC2. A empresa deseja uma alternativa para ajudar a gerenciar o tamanho do cluster, a programação e a manutenção do ambiente. Qual serviço da AWS atende a esses requisitos?",
    options: [
      "AWS Lambda",
      "Amazon RDS",
      "AWS Fargate",
      "Amazon Athena"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS Fargate é um mecanismo de computação serverless para contêineres (compatível com ECS e EKS) que elimina a necessidade de provisionar, dimensionar ou manter servidores EC2.",
      incorrect: {
        0: "AWS Lambda executa funções de código orientado a eventos, não gerencia clusters Docker completos.",
        1: "Amazon RDS gerencia bancos de dados relacionais.",
        3: "Amazon Athena executa consultas SQL em dados armazenados no Amazon S3."
      }
    }
  },
  {
    id: 115,
    domain: "Faturamento, Preços e Suporte",
    question: "Quais das opções a seguir são benefícios de usar o AWS Trusted Advisor? (Escolha dois.)",
    options: [
      "Fornecimento de orquestração de contêineres de alto desempenho.",
      "Criação e rotação de chaves de criptografia.",
      "Detectando recursos subutilizados para economizar custos.",
      "Melhorar a segurança monitorando proativamente o ambiente AWS.",
      "Implementação de marcação forçada em recursos da AWS"
    ],
    correctAnswers: [2, 3],
    explanation: {
      correct: "O AWS Trusted Advisor analisa sua conta AWS para identificar recursos ociosos/subutilizados (reduzindo custos) e detectar falhas comuns de segurança (como portas abertas e falta de MFA).",
      incorrect: {
        0: "Orquestração de contêineres é feita pelo Amazon ECS ou EKS.",
        1: "Criação e rotação de chaves é feita pelo AWS KMS.",
        4: "Políticas de tags obrigatórias são aplicadas via Tag Policies no AWS Organizations."
      }
    }
  },
  {
    id: 116,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma plataforma de e-learning precisa executar um aplicativo durante 2 meses por ano. O aplicativo será implantado em instâncias do Amazon EC2. Qualquer tempo de inatividade do aplicativo durante esses 2 meses deve ser evitado. Qual opção de compra do EC2 atenderá a esses requisitos de maneira MAIS econômica?",
    options: [
      "Instâncias Reservadas",
      "Hosts Dedicados",
      "Instâncias Spot",
      "Instâncias Sob Demanda"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Para cargas de trabalho sazonais de curta duração (apenas 2 meses por ano) que não toleram interrupções, as Instâncias Sob Demanda (On-Demand) são a escolha mais econômica, pois não exigem compromisso anual.",
      incorrect: {
        0: "Instâncias Reservadas exigem compromisso mínimo de 1 ou 3 anos, gerando desperdício nos 10 meses ociosos.",
        1: "Hosts Dedicados são servidores físicos exclusivos com custo elevado.",
        2: "Instâncias Spot podem ser interrompidas pela AWS a qualquer momento, violando a regra de evitar inatividade."
      }
    }
  },
  {
    id: 117,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa está armazenando dados confidenciais de clientes em um bucket do Amazon S3. A empresa deseja proteger os dados contra exclusão ou substituição acidental. Qual recurso do S3 a empresa deve usar para atender a esses requisitos?",
    options: [
      "Regras do ciclo de vida",
      "Versionamento",
      "Políticas de bucket",
      "Criptografia do lado do servidor"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Versionamento do Amazon S3 preserva todas as variantes de um objeto no bucket, permitindo restaurar versões anteriores caso um arquivo seja excluído ou sobrescrito acidentalmente.",
      incorrect: {
        0: "Regras do ciclo de vida automatizam a transição de objetos entre classes de armazenamento ou a expiração deles.",
        2: "Políticas de bucket controlam permissões de acesso, não evitam sobrescritas por usuários autorizados.",
        3: "Criptografia protege a confidencialidade dos dados em repouso, não contra exclusão."
      }
    }
  },
  {
    id: 118,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual opção é uma localização física da infraestrutura global da AWS?",
    options: [
      "AWS DataSync",
      "Região AWS",
      "Amazon Connect",
      "AWS Organizations"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "Uma Região AWS é uma localização geográfica física no mundo onde a AWS agrupa múltiplos data centers isolados (Zonas de Disponibilidade).",
      incorrect: {
        0: "AWS DataSync é um serviço de transferência de dados.",
        2: "Amazon Connect é um serviço de contact center em nuvem.",
        3: "AWS Organizations é um serviço de gerenciamento centralizado de contas."
      }
    }
  },
  {
    id: 119,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa deseja proteger suas informações, sistemas e ativos da Nuvem AWS enquanto executa tarefas de avaliação e mitigação de riscos. Qual pilar do AWS Well-Architected Framework é apoiado por essas metas?",
    options: [
      "Segurança",
      "Confiabilidade",
      "Excelência operacional",
      "Eficiência de desempenho"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O pilar de Segurança do AWS Well-Architected Framework foca na proteção de informações, sistemas e ativos por meio de avaliações de risco e estratégias de mitigação.",
      incorrect: {
        1: "Confiabilidade foca na recuperação de falhas e disponibilidade contínua.",
        2: "Excelência operacional foca na execução e monitoramento de sistemas para entregar valor de negócio.",
        3: "Eficiência de desempenho foca no uso otimizado de recursos computacionais."
      }
    }
  },
  {
    id: 120,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual é o propósito de ter um gateway de internet dentro de uma VPC?",
    options: [
      "Para criar uma conexão VPN com a VPC.",
      "Para impor restrições de largura de banda ao tráfego da Internet.",
      "Para balancear a carga do tráfego da Internet nas instâncias do Amazon EC2.",
      "Para permitir a comunicação entre a VPC e a Internet."
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Internet Gateway é um componente horizontalmente escalável e redundante da VPC que permite a comunicação de entrada e saída entre instâncias em sub-redes públicas e a internet.",
      incorrect: {
        0: "Conexões VPN utilizam um Virtual Private Gateway ou Transit Gateway.",
        1: "O Internet Gateway não impõe restrições de largura de banda.",
        2: "O balanceamento de carga é realizado pelo Elastic Load Balancing (ELB)."
      }
    }
  },
  {
    id: 121,
    domain: "Segurança e Conformidade",
    question: "Quais tarefas são responsabilidades do cliente, de acordo com o modelo de responsabilidade compartilhada da AWS? (Escolha dois.)",
    options: [
      "Configurar o grupo de segurança fornecido pela AWS.",
      "Classificar os ativos da empresa na Nuvem AWS.",
      "Determine quais zonas de disponibilidade usar para buckets do Amazon S3.",
      "Corrigir ou atualizar o Amazon DynamoDB.",
      "Selecione instâncias do Amazon EC2 para executar o AWS Lambda."
    ],
    correctAnswers: [0, 1],
    explanation: {
      correct: "O cliente é responsável pela segurança 'na' nuvem, o que inclui configurar regras de Security Groups e gerenciar/classificar seus próprios dados e ativos.",
      incorrect: {
        2: "O Amazon S3 replica dados automaticamente entre várias Zonas de Disponibilidade sem configuração manual do cliente.",
        3: "O Amazon DynamoDB é um serviço gerenciado; a AWS aplica todas as atualizações.",
        4: "O AWS Lambda é serverless; a AWS gerencia toda a infraestrutura subjacente."
      }
    }
  },
  {
    id: 122,
    domain: "Conceitos de Nuvem",
    question: "Quais das alternativas a seguir são pilares do AWS Well-Architected Framework? (Escolha dois.)",
    options: [
      "Disponibilidade",
      "Confiabilidade",
      "Escalabilidade",
      "Design responsivo",
      "Excelência operacional"
    ],
    correctAnswers: [1, 4],
    explanation: {
      correct: "Os seis pilares oficiais do AWS Well-Architected Framework são: Excelência Operacional, Segurança, Confiabilidade, Eficiência de Desempenho, Otimização de Custos e Sustentabilidade.",
      incorrect: {
        0: "Disponibilidade é uma característica arquitetural, não um dos seis pilares.",
        2: "Escalabilidade é um benefício da nuvem, não um pilar.",
        3: "Design responsivo é um conceito de interface front-end."
      }
    }
  },
  {
    id: 123,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço ou recurso da AWS é usado para enviar mensagens de texto e e-mail de aplicativos distribuídos?",
    options: [
      "Amazon EC2",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Alertas do Amazon CloudWatch",
      "Amazon Simple Queue Service (Amazon SQS)"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon SNS é um serviço de mensagens pub/sub totalmente gerenciado que envia notificações push, SMS (mensagens de texto) e e-mails para assinantes e sistemas distribuídos.",
      incorrect: {
        0: "Amazon EC2 fornece servidores virtuais na nuvem.",
        2: "Alertas do CloudWatch disparam ações com base em métricas, utilizando o SNS por baixo dos panos para enviar notificações.",
        3: "Amazon SQS é um serviço de filas para troca de mensagens entre aplicações, não envia SMS ou e-mails diretamente."
      }
    }
  },
  {
    id: 124,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa possui 5 TB de dados armazenados no Amazon S3. A empresa planeja ocasionalmente realizar consultas nos dados para análise. Qual serviço da AWS a empresa deve usar para executar essas consultas da maneira MAIS econômica?",
    options: [
      "Amazon Redshift",
      "Amazon Kinesis",
      "Amazon RDS",
      "Amazon Athena"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon Athena é um serviço de consulta interativa serverless que permite analisar dados diretamente no Amazon S3 usando SQL padrão, pagando apenas por terabyte verificado — ideal para consultas ocasionais.",
      incorrect: {
        0: "Amazon Redshift exige manter um cluster de data warehouse provisionado, sendo mais caro para consultas esporádicas.",
        1: "Amazon Kinesis processa fluxos contínuos de dados em tempo real.",
        2: "Amazon RDS é um banco de dados relacional transacional, inadequado para consultar arquivos estáticos no S3."
      }
    }
  },
  {
    id: 125,
    domain: "Faturamento, Preços e Suporte",
    question: "Qual serviço da AWS é sempre fornecido gratuitamente?",
    options: [
      "AWS WAF",
      "Elastic Load Balancers",
      "Amazon S3",
      "AWS Identity and Access Management (IAM)"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS IAM é um recurso fundamental de controle de acesso oferecido sem custo adicional para todas as contas da AWS.",
      incorrect: {
        0: "AWS WAF cobra por ACLs da web, regras e volume de requisições inspecionadas.",
        1: "Elastic Load Balancers cobram por hora de execução e capacidade utilizada (LCUs).",
        2: "Amazon S3 cobra pelo armazenamento ocupado, requisições e transferência de dados após o nível gratuito."
      }
    }
  },
  {
    id: 126,
    domain: "Segurança e Conformidade",
    question: "Uma empresa deseja monitorar grupos de segurança mal configurados que permitem acesso irrestrito a portas específicas. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "Amazon GuardDuty",
      "AWS Health Dashboard"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Trusted Advisor possui verificações nativas na categoria de Segurança que alertam quando Security Groups permitem acesso irrestrito (0.0.0.0/0) a portas sensíveis.",
      incorrect: {
        1: "Amazon CloudWatch monitora métricas de desempenho e logs.",
        2: "Amazon GuardDuty detecta atividades maliciosas e ameaças ativas.",
        3: "AWS Health Dashboard informa sobre o status operacional dos serviços da AWS."
      }
    }
  },
  {
    id: 127,
    domain: "Segurança e Conformidade",
    question: "Qual serviço da AWS pode identificar quando uma instância do Amazon EC2 foi encerrada?",
    options: [
      "Amazon EventBridge",
      "AWS CloudTrail",
      "AWS Compute Optimizer",
      "AWS Identity and Access Management (IAM)"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O AWS CloudTrail registra todas as chamadas de API na conta, incluindo a chamada TerminateInstances, mostrando quem encerrou a instância EC2 e quando.",
      incorrect: {
        0: "Amazon EventBridge roteia eventos em tempo real entre serviços, não é o repositório de auditoria histórica.",
        2: "AWS Compute Optimizer recomenda tipos ideais de instâncias com base em métricas de uso.",
        3: "AWS IAM gerencia permissões e identidades."
      }
    }
  },
  {
    id: 128,
    domain: "Conceitos de Nuvem",
    question: "Qual recurso do AWS Cloud Adoption Framework (AWS CAF) pertence à perspectiva das pessoas?",
    options: [
      "Gestão de eventos",
      "Arquitetura de dados",
      "Fluência na nuvem",
      "Parceria estratégica"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "Fluência na nuvem (Cloud Fluency), transformação da força de trabalho e evolução cultural são capacidades centrais da perspectiva de Pessoas (People) do AWS CAF.",
      incorrect: {
        0: "Gestão de eventos pertence à perspectiva de Operações.",
        1: "Arquitetura de dados pertence à perspectiva de Plataforma.",
        3: "Parceria estratégica pertence à perspectiva de Negócios."
      }
    }
  },
  {
    id: 129,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa de comércio eletrônico migrou sua infraestrutura de TI de um data center local para a Nuvem AWS. Qual custo é de responsabilidade direta da empresa?",
    options: [
      "Custo de segurança física para o data center AWS",
      "Custo de energia para os servidores AWS.",
      "Custo da infraestrutura de hardware na AWS.",
      "Custo das licenças de software aplicativo."
    ],
    correctAnswers: [3],
    explanation: {
      correct: "A empresa continua responsável pelos custos de licenciamento de softwares de terceiros ou aplicativos que ela própria instala e gerencia na nuvem.",
      incorrect: {
        0: "A segurança física dos data centers é coberta pela AWS.",
        1: "O consumo de energia e refrigeração dos servidores é responsabilidade da AWS.",
        2: "A aquisição e manutenção do hardware físico são responsabilidades da AWS."
      }
    }
  },
  {
    id: 130,
    domain: "Segurança e Conformidade",
    question: "Qual dos seguintes serviços pode ser usado para bloquear o tráfego de rede para uma instância? (Escolha dois.)",
    options: [
      "Amazon CloudWatch",
      "Security groups (Grupos de Segurança)",
      "Amazon Virtual Private Cloud (Amazon VPC) Flow logs",
      "Network ACLs (ACLs de Rede)",
      "AWS CloudTrail"
    ],
    correctAnswers: [1, 3],
    explanation: {
      correct: "Security Groups (no nível da instância) e Network ACLs (no nível da sub-rede) atuam como firewalls virtuais que controlam e bloqueiam o tráfego de rede para instâncias EC2.",
      incorrect: {
        0: "Amazon CloudWatch monitora métricas e logs, não bloqueia tráfego.",
        2: "VPC Flow Logs apenas registra metadados do tráfego de rede para análise.",
        4: "AWS CloudTrail audita chamadas de API na conta."
      }
    }
  },
  {
    id: 131,
    domain: "Conceitos de Nuvem",
    question: "O que significa o conceito de agilidade na computação em nuvem AWS? (Escolha dois.)",
    options: [
      "O baixo custo de entrada na computação em nuvem",
      "A capacidade de experimentar rapidamente.",
      "A velocidade com que a AWS cria novas regiões da AWS.",
      "A velocidade com que os recursos da AWS são implementados.",
      "A eliminação do desperdício de capacidade"
    ],
    correctAnswers: [1, 3],
    explanation: {
      correct: "Na nuvem AWS, agilidade significa a velocidade com que novos recursos de TI são disponibilizados aos desenvolvedores e a facilidade de experimentar e inovar rapidamente com baixo risco.",
      incorrect: {
        0: "Baixo custo inicial refere-se à troca de despesas de capital por variáveis.",
        2: "A expansão global da AWS refere-se ao alcance global, não à agilidade operacional do cliente.",
        4: "A eliminação de desperdício refere-se à elasticidade e otimização de custos."
      }
    }
  },
  {
    id: 132,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa deseja receber uma notificação quando um limite de custo específico da AWS for atingido. Quais serviços ou ferramentas da AWS a empresa pode usar para atender a esse requisito? (Escolha dois.)",
    options: [
      "Cost Explorer",
      "Amazon CloudWatch",
      "AWS Cost and Usage Report",
      "Amazon Simple Queue Service (Amazon SQS)",
      "AWS Budgets"
    ],
    correctAnswers: [1, 4],
    explanation: {
      correct: "O AWS Budgets envia alertas personalizados quando gastos ultrapassam orçamentos definidos, e os alarmes de cobrança do Amazon CloudWatch (Billing Alarms) também notificam quando a fatura estimada atinge um limite.",
      incorrect: {
        0: "Cost Explorer permite visualizar e analisar custos históricos, sem alertas automáticos de limite.",
        2: "AWS Cost and Usage Report exporta arquivos detalhados de faturamento para o S3.",
        3: "Amazon SQS é um serviço de filas de mensagens entre aplicações."
      }
    }
  },
  {
    id: 133,
    domain: "Segurança e Conformidade",
    question: "Uma empresa possui uma conta AWS. A empresa deseja auditar sua senha e acessar detalhes de rotação de chaves para fins de conformidade. Qual serviço ou ferramenta da AWS atenderá a esse requisito?",
    options: [
      "AWS Audit Manager",
      "IAM Credential Report",
      "IAM Access Analyzer",
      "AWS Artifact"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O IAM Credential Report gera um relatório em CSV listando todos os usuários da conta e o status de suas credenciais (senhas, chaves de acesso, data da última rotação e MFA).",
      incorrect: {
        0: "AWS Audit Manager auxilia na coleta contínua de evidências para auditorias de conformidade geral.",
        2: "IAM Access Analyzer identifica recursos compartilhados externamente.",
        3: "AWS Artifact fornece relatórios de conformidade da própria infraestrutura da AWS."
      }
    }
  },
  {
    id: 134,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa executa milhares de simulações simultâneas usando o AWS Batch. Cada simulação não tem estado, é tolerante a falhas e dura até 3 horas. Qual modelo de precificação permite à empresa otimizar custos e atender a esses requisitos?",
    options: [
      "Instâncias Spot",
      "Instâncias Sob Demanda",
      "Instâncias Reservadas",
      "Instâncias Dedicadas"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "Cargas de trabalho sem estado (stateless) e tolerantes a falhas são o caso de uso ideal para Instâncias Spot, que oferecem descontos de até 90% sobre o preço sob demanda.",
      incorrect: {
        1: "Instâncias Sob Demanda são mais caras e desnecessárias quando a aplicação tolera interrupções.",
        2: "Instâncias Reservadas exigem compromisso de 1 a 3 anos.",
        3: "Instâncias Dedicadas têm alto custo e são voltadas a requisitos de conformidade."
      }
    }
  },
  {
    id: 135,
    domain: "Faturamento, Preços e Suporte",
    question: "Em que nível de suporte os usuários recebem acesso a um concierge de suporte?",
    options: [
      "Basic Support",
      "Developer Support",
      "Business Support",
      "Enterprise Support"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "A equipe de Concierge Support (especialistas em faturamento e gestão de contas) está disponível exclusivamente no plano AWS Enterprise Support.",
      incorrect: {
        0: "Basic Support oferece apenas suporte básico de faturamento e fóruns.",
        1: "Developer Support oferece suporte técnico por e-mail em horário comercial.",
        2: "Business Support oferece suporte técnico 24/7, mas não inclui Concierge Support nem TAM."
      }
    }
  },
  {
    id: 136,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa está migrando para a Nuvem AWS. A empresa deseja compreender e identificar possíveis configurações incorretas de segurança ou comportamentos inesperados. A empresa deseja priorizar quaisquer controles de proteção de que possa precisar. Qual recurso de perspectiva de segurança do AWS Cloud Adoption Framework (AWS CAF) atenderá a esses requisitos?",
    options: [
      "Gerenciamento de identidade e acesso",
      "Engenharia de plataforma",
      "Disponibilidade e gestão de continuidade",
      "Detecção de ameaças"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "A capacidade de Detecção de ameaças (Threat Detection) na perspectiva de Segurança do AWS CAF ajuda a identificar configurações incorretas e comportamentos anômalos para priorizar controles de proteção.",
      incorrect: {
        0: "Gerenciamento de identidade e acesso foca em autenticação e autorização de usuários.",
        1: "Engenharia de plataforma pertence à perspectiva de Plataforma.",
        2: "Disponibilidade e gestão de continuidade pertence à perspectiva de Operações."
      }
    }
  },
  {
    id: 137,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual dos seguintes é um serviço de banco de dados grafos totalmente gerenciado na AWS?",
    options: [
      "Amazon FSx",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Neptune"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon Neptune é um serviço de banco de dados de grafos rápido, confiável e totalmente gerenciado, otimizado para armazenar e navegar por relacionamentos altamente conectados.",
      incorrect: {
        0: "Amazon FSx é um serviço de sistemas de arquivos gerenciados.",
        1: "Amazon DynamoDB é um banco de dados NoSQL de chave-valor e documentos.",
        2: "Amazon Aurora é um banco de dados relacional."
      }
    }
  },
  {
    id: 138,
    domain: "Faturamento, Preços e Suporte",
    question: "Qual recurso da AWS oferece uma plataforma gratuita para os usuários da AWS ingressarem em grupos da comunidade, fazerem perguntas, encontrarem respostas e lerem artigos gerados pela comunidade sobre práticas recomendadas?",
    options: [
      "AWS re:Post",
      "AWS Knowledge Center",
      "AWS Enterprise Support",
      "AWS IQ"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS re:Post é o serviço gratuito de perguntas e respostas impulsionado pela comunidade da AWS, substituindo os antigos fóruns da AWS.",
      incorrect: {
        1: "AWS Knowledge Center contém artigos oficiais de perguntas frequentes criados pelos engenheiros da AWS.",
        2: "AWS Enterprise Support é o plano pago mais alto de suporte técnico.",
        3: "AWS IQ permite contratar especialistas certificados terceirizados sob demanda para projetos pagos."
      }
    }
  },
  {
    id: 139,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa migrar um banco de dados PostgreSQL local para o Amazon RDS. Qual serviço ou ferramenta da AWS a empresa deve usar para atender a esse requisito?",
    options: [
      "AWS Database Migration Service (AWS DMS)",
      "Cloud Adoption Readiness Tool",
      "AWS Migration Hub",
      "AWS Application Migration Service"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Database Migration Service (AWS DMS) permite migrar bancos de dados relacionais e não relacionais para a AWS de forma rápida e segura com tempo de inatividade mínimo.",
      incorrect: {
        1: "Cloud Adoption Readiness Tool avalia a prontidão organizacional para a nuvem.",
        2: "AWS Migration Hub fornece um painel centralizado para acompanhar o progresso de várias migrações.",
        3: "AWS Application Migration Service migra servidores completos (lift-and-shift), não bancos de dados especificamente."
      }
    }
  },
  {
    id: 140,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço da AWS converte texto em vozes realistas?",
    options: [
      "Amazon Transcribe",
      "Amazon Textract",
      "Amazon Rekognition",
      "Amazon Polly"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon Polly utiliza aprendizado profundo para sintetizar fala humana realista a partir de texto (Text-to-Speech).",
      incorrect: {
        0: "Amazon Transcribe faz o inverso: converte fala/áudio em texto (Speech-to-Text).",
        1: "Amazon Textract extrai texto, manuscritos e dados estruturados de documentos digitalizados.",
        2: "Amazon Rekognition analisa imagens e vídeos."
      }
    }
  },
  {
    id: 141,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa pesquisar texto em documentos armazenados no Amazon S3. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon Rekognition",
      "Amazon Kendra",
      "Amazon Polly",
      "Amazon Lex"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon Kendra é um serviço de pesquisa inteligente corporativa alimentado por machine learning que indexa e busca respostas em documentos não estruturados armazenados no S3 e outros repositórios.",
      incorrect: {
        0: "Amazon Rekognition analisa imagens e vídeos.",
        2: "Amazon Polly converte texto em áudio.",
        3: "Amazon Lex constrói interfaces de conversação (chatbots) com voz e texto."
      }
    }
  },
  {
    id: 142,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa deseja um serviço de banco de dados de série temporal que facilite o armazenamento e a análise de trilhões de eventos todos os dias. Qual serviço da AWS atenderá a esse requisito?",
    options: [
      "Amazon Timestream",
      "Amazon Forecast",
      "Amazon DocumentDB (with MongoDB compatibility)",
      "Amazon Neptune"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O Amazon Timestream é um banco de dados de séries temporais (time-series) rápido, escalável e serverless criado especificamente para IoT e aplicações operacionais que geram trilhões de eventos diários.",
      incorrect: {
        1: "Amazon Forecast utiliza machine learning para gerar previsões de séries temporais.",
        2: "Amazon DocumentDB é um banco de dados de documentos compatível com MongoDB.",
        3: "Amazon Neptune é um banco de dados de grafos."
      }
    }
  },
  {
    id: 143,
    domain: "Segurança e Conformidade",
    question: "Quais dos itens a seguir são recursos de ACLs de rede conforme usados na Nuvem AWS? (Escolha dois.)",
    options: [
      "Eles avaliam todas as regras antes de permitir o tráfego.",
      "Tem estado (stateful).",
      "Eles operam no nível da instância.",
      "Eles processam as regras em ordem, começando pela regra de número mais baixo, ao decidir se permitem o tráfego.",
      "Não tem estado (stateless)."
    ],
    correctAnswers: [3, 4],
    explanation: {
      correct: "As Network ACLs (NACLs) são sem estado (stateless — o tráfego de retorno precisa ser explicitamente permitido) e avaliam as regras em ordem crescente pelo número da regra.",
      incorrect: {
        0: "Avaliar todas as regras antes de decidir é o comportamento dos Security Groups, não das NACLs.",
        1: "Security Groups são stateful; NACLs são stateless.",
        2: "Security Groups operam no nível da instância; NACLs operam no nível da sub-rede."
      }
    }
  },
  {
    id: 144,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual dos itens a seguir é um serviço gerenciado da AWS usado especificamente para extrair, transformar e carregar dados (ETL)?",
    options: [
      "AWS Glue",
      "AWS Snowball Edge",
      "Amazon Athena",
      "Amazon S3"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Glue é um serviço serverless de integração de dados que facilita descobrir, preparar, extrair, transformar e carregar (ETL) dados para análise.",
      incorrect: {
        1: "AWS Snowball Edge é um dispositivo físico de transferência de dados e computação de borda.",
        2: "Amazon Athena executa consultas SQL interativas no S3.",
        3: "Amazon S3 é armazenamento de objetos."
      }
    }
  },
  {
    id: 145,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa deseja armazenar dados no Amazon S3. A empresa raramente acessa os dados e os dados podem ser regenerados se necessário. A empresa deseja armazenar os dados na classe de armazenamento mais econômica. Qual classe de armazenamento S3 atenderá a esse requisito?",
    options: [
      "S3 Intelligent-Tiering",
      "S3 Standard-Infrequent Access (S3 Standard-IA)",
      "S3 Standard",
      "S3 One Zone-Infrequent Access (S3 One Zone-IA)"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "A classe S3 One Zone-IA armazena dados em uma única Zona de Disponibilidade por um custo 20% menor que o S3 Standard-IA, sendo ideal para dados raramente acessados e facilmente recriáveis.",
      incorrect: {
        0: "S3 Intelligent-Tiering cobra taxa de monitoramento e move dados automaticamente entre camadas Multi-AZ.",
        1: "S3 Standard-IA replica dados em pelo menos três Zonas de Disponibilidade, custando mais que o One Zone-IA.",
        2: "S3 Standard é projetado para dados acessados com frequência e tem custo mais alto."
      }
    }
  },
  {
    id: 146,
    domain: "Segurança e Conformidade",
    question: "Uma empresa está usando o Amazon DynamoDB para seu banco de dados de aplicativos. Quais tarefas são de responsabilidade da AWS, de acordo com o modelo de responsabilidade compartilhada da AWS? (Escolha dois.)",
    options: [
      "Classificar os dados.",
      "Fornece terminais públicos para armazenar e recuperar dados.",
      "Gerenciar a camada de infraestrutura e o sistema operacional.",
      "Configurar permissões de acesso.",
      "Gerenciar opções de criptografia."
    ],
    correctAnswers: [1, 2],
    explanation: {
      correct: "Como o Amazon DynamoDB é um serviço gerenciado serverless, a AWS gerencia toda a infraestrutura subjacente, o sistema operacional e fornece os endpoints públicos de API para acesso.",
      incorrect: {
        0: "Classificar os dados é sempre responsabilidade do cliente.",
        3: "Configurar políticas e permissões de acesso no IAM é responsabilidade do cliente.",
        4: "Escolher e gerenciar as chaves/opções de criptografia pertence ao cliente."
      }
    }
  },
  {
    id: 147,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa está hospedando um aplicativo na Nuvem AWS. A empresa deseja verificar se os serviços subjacentes da AWS e a infraestrutura geral da AWS estão operando normalmente. Qual combinação de serviços da AWS a empresa pode usar para coletar as informações necessárias? (Escolha dois.)",
    options: [
      "AWS Personal Health Dashboard",
      "AWS Service Catalog",
      "AWS Service Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Systems Manager"
    ],
    correctAnswers: [0, 2],
    explanation: {
      correct: "O AWS Service Health Dashboard exibe o status geral da infraestrutura global dos serviços da AWS, enquanto o AWS Personal Health Dashboard fornece alertas personalizados sobre eventos que impactam especificamente os recursos da sua conta.",
      incorrect: {
        1: "AWS Service Catalog gerencia catálogos de produtos de TI aprovados.",
        3: "AWS Trusted Advisor fornece recomendações de otimização e melhores práticas.",
        4: "AWS Systems Manager gerencia operações e automação de instâncias."
      }
    }
  },
  {
    id: 148,
    domain: "Segurança e Conformidade",
    question: "Uma organização quer detectar atividades potencialmente maliciosas com análise contínua de sinais de ameaças. Qual serviço é adequado?",
    options: [
      "AWS WAF",
      "AWS CloudFormation",
      "Amazon GuardDuty",
      "Amazon Route 53"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O Amazon GuardDuty é um serviço de detecção inteligente de ameaças que monitora continuamente logs do CloudTrail, VPC Flow Logs e DNS usando machine learning para identificar atividades maliciosas.",
      incorrect: {
        0: "AWS WAF bloqueia exploits web na camada HTTP/HTTPS.",
        1: "AWS CloudFormation provisiona infraestrutura como código.",
        3: "Amazon Route 53 é um serviço gerenciado de DNS."
      }
    }
  },
  {
    id: 149,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Um sistema precisa executar código em resposta ao upload de arquivos S3 sem gerenciar servidores. Qual serviço é adequado?",
    options: [
      "Amazon EBS",
      "AWS Lambda",
      "Amazon EC2 Dedicated Hosts",
      "AWS Direct Connect"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O AWS Lambda permite executar código serverless em resposta direta a eventos (como um upload S3 ObjectCreated) sem provisionar ou gerenciar servidores.",
      incorrect: {
        0: "Amazon EBS é armazenamento em bloco para instâncias EC2.",
        2: "Amazon EC2 Dedicated Hosts são servidores físicos dedicados.",
        3: "AWS Direct Connect é uma conexão de rede dedicada."
      }
    }
  },
  {
    id: 150,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual afirmação descreve corretamente uma Região AWS?",
    options: [
      "Um único rack em um data center",
      "Uma rede de distribuição de conteúdo",
      "Um endereço IP público reservado",
      "Área geográfica que contém múltiplas Zonas de Disponibilidade"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Cada Região AWS é uma localização geográfica independente composta por múltiplas Zonas de Disponibilidade (AZs) isoladas e fisicamente separadas.",
      incorrect: {
        0: "Uma Região contém vários data centers completos, não um único rack.",
        1: "Rede de distribuição de conteúdo descreve o Amazon CloudFront.",
        2: "Endereço IP público reservado descreve um Elastic IP."
      }
    }
  },
  {
    id: 151,
    domain: "Segurança e Conformidade",
    question: "Uma SCP permite uma ação, mas a política IAM da role não a autoriza. Qual é o resultado esperado?",
    options: [
      "O serviço ignora políticas IAM",
      "A SCP concede automaticamente a ação",
      "A role recebe permissões de administrador",
      "A ação não é permitida apenas pela SCP"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Service Control Policies (SCPs) definem apenas o limite máximo de permissões (guardrails), mas não concedem permissões por si só. A ação precisa ser explicitamente permitida pela política do IAM da entidade.",
      incorrect: {
        0: "As políticas IAM sempre são avaliadas dentro da conta.",
        1: "SCPs nunca concedem permissões efetivas sozinhas; elas apenas filtram o que pode ser permitido.",
        2: "Nenhuma permissão administrativa é atribuída automaticamente."
      }
    }
  },
  {
    id: 152,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma equipe quer orquestrar uma sequência de etapas, com decisões e tentativas de repetição entre serviços. Qual serviço usar?",
    options: [
      "Amazon EBS",
      "Amazon CloudFront",
      "AWS Step Functions",
      "AWS Batch"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS Step Functions é um serviço de orquestração serverless baseado em máquinas de estado que coordena fluxos de trabalho com ramificações condicionais, tratamento de erros e tentativas de repetição (retries).",
      incorrect: {
        0: "Amazon EBS fornece armazenamento em blocos para instâncias EC2.",
        1: "Amazon CloudFront é uma rede de entrega de conteúdo (CDN).",
        3: "AWS Batch agenda e executa trabalhos de computação em lote."
      }
    }
  },
  {
    id: 153,
    domain: "Conceitos de Nuvem",
    question: "Uma aplicação recebe pedidos e os processa de forma assíncrona para que picos não sobrecarreguem o serviço de processamento. Qual princípio é evidenciado?",
    options: [
      "Armazenamento exclusivamente em blocos",
      "Dependência síncrona rígida",
      "Desacoplamento por filas",
      "Escalonamento vertical obrigatório"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O desacoplamento por filas (como o Amazon SQS) absorve picos de tráfego como um buffer intermediário, permitindo que os consumidores processem mensagens no seu próprio ritmo sem falhas em cascata.",
      incorrect: {
        0: "Tipo de armazenamento não resolve acoplamento entre serviços.",
        1: "Dependência síncrona rígida causaria queda no sistema durante picos de acesso.",
        3: "Escalonamento vertical aumenta o tamanho de um servidor único, não desacopla componentes."
      }
    }
  },
  {
    id: 154,
    domain: "Conceitos de Nuvem",
    question: "Qual é uma vantagem de automatizar a infraestrutura com modelos repetíveis?",
    options: [
      "Impedir qualquer mudança futura",
      "Garantir que recursos não gerem cobrança",
      "Dispensar controle de acesso",
      "Reduzir erros manuais e obter implantações consistentes"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "A Infraestrutura como Código (IaC) elimina configurações manuais propensas a falhas humanas e garante que ambientes de desenvolvimento, homologação e produção sejam implantados de forma idêntica.",
      incorrect: {
        0: "Templates podem e devem ser versionados e atualizados continuamente.",
        1: "Recursos provisionados via IaC são cobrados normalmente conforme o uso.",
        2: "O controle de acesso (IAM) continua sendo obrigatório e auditado."
      }
    }
  },
  {
    id: 155,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma equipe precisa executar contêineres usando Kubernetes gerenciado. Qual serviço atende?",
    options: [
      "Amazon ECR",
      "AWS Elastic Beanstalk",
      "Amazon ECS apenas",
      "Amazon EKS"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon Elastic Kubernetes Service (Amazon EKS) é o serviço totalmente gerenciado para executar e orquestrar clusters Kubernetes na AWS.",
      incorrect: {
        0: "Amazon ECR é um registro privado para armazenar imagens Docker.",
        1: "AWS Elastic Beanstalk implanta aplicações web sem focar em orquestração Kubernetes.",
        2: "Amazon ECS utiliza o orquestrador proprietário da AWS, não a API padrão do Kubernetes."
      }
    }
  },
  {
    id: 156,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma aplicação deve servir conteúdo estático com baixa latência a usuários distribuídos pelo mundo. Qual componente da infraestrutura global é mais relevante?",
    options: [
      "Volumes EBS",
      "Políticas SCP",
      "Grupos IAM",
      "Locais de borda"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Os Locais de borda (Edge Locations) são pontos de presença globais usados pelo Amazon CloudFront para armazenar conteúdo estático em cache próximo aos usuários finais.",
      incorrect: {
        0: "Volumes EBS são discos locais vinculados a uma única Zona de Disponibilidade.",
        1: "Políticas SCP gerenciam limites de permissões no AWS Organizations.",
        2: "Grupos IAM organizam permissões de usuários."
      }
    }
  },
  {
    id: 157,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Instâncias Linux em várias AZs precisam acessar um sistema de arquivos compartilhado por NFS. Qual serviço é mais apropriado?",
    options: [
      "Amazon S3 Glacier",
      "Amazon EFS",
      "Amazon EBS",
      "Amazon DynamoDB"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon Elastic File System (Amazon EFS) fornece armazenamento de arquivos elástico e compartilhado via protocolo NFSv4, acessível simultaneamente por múltiplas instâncias EC2 em várias Zonas de Disponibilidade.",
      incorrect: {
        0: "Amazon S3 Glacier é armazenamento frio para arquivamento de objetos.",
        2: "Amazon EBS é armazenamento em bloco anexado a instâncias dentro de uma única AZ.",
        3: "Amazon DynamoDB é um banco de dados NoSQL."
      }
    }
  },
  {
    id: 158,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa planeja migrar aplicações e deseja identificar dependências e organizar ondas de migração. Qual abordagem é mais apropriada?",
    options: [
      "Descobrir e avaliar o portfólio antes da migração",
      "Comprar servidores locais adicionais antes de começar",
      "Ignorar dependências entre aplicações",
      "Migrar todas as aplicações no mesmo dia"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "A fase de descoberta e avaliação do portfólio permite mapear dependências entre servidores e bancos de dados, reduzindo riscos e organizando ondas lógicas de migração.",
      incorrect: {
        1: "Comprar hardware local contraria o objetivo de migrar para a nuvem.",
        2: "Ignorar dependências causa indisponibilidade de sistemas interligados.",
        3: "Migrar tudo de uma vez sem planejamento aumenta drasticamente o risco operacional."
      }
    }
  },
  {
    id: 159,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma empresa quer comparar o custo total de propriedade de infraestrutura local com a nuvem. Qual conceito inclui custos de aquisição, operação e manutenção?",
    options: [
      "RPO",
      "TCO",
      "MFA",
      "DNS"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "TCO (Total Cost of Ownership - Custo Total de Propriedade) engloba todos os custos diretos e indiretos de manter um ambiente local (servidores, energia, refrigeração, espaço físico e equipe) versus a nuvem.",
      incorrect: {
        0: "RPO (Recovery Point Objective) define a perda máxima aceitável de dados medida em tempo.",
        2: "MFA (Multi-Factor Authentication) é autenticação multifator.",
        3: "DNS (Domain Name System) traduz nomes de domínio em endereços IP."
      }
    }
  },
  {
    id: 160,
    domain: "Segurança e Conformidade",
    question: "Uma empresa precisa disponibilizar acesso centralizado e federado para funcionários em várias contas AWS. Qual serviço atende?",
    options: [
      "AWS Shield",
      "Amazon Route 53",
      "AWS IAM Identity Center",
      "Amazon SQS"
    ],
    correctAnswers: [2],
    explanation: {
      correct: "O AWS IAM Identity Center (sucessor do AWS Single Sign-On) centraliza o gerenciamento de acesso único (SSO) e federação de identidades para múltiplas contas do AWS Organizations e aplicativos em nuvem.",
      incorrect: {
        0: "AWS Shield protege contra ataques DDoS.",
        1: "Amazon Route 53 é um serviço de DNS.",
        3: "Amazon SQS é um serviço de filas de mensagens."
      }
    }
  },
  {
    id: 161,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Um banco de dados instalado em EC2 necessita de armazenamento em blocos persistente. Qual serviço atende?",
    options: [
      "Amazon EFS",
      "AWS Snowball Edge",
      "Amazon S3",
      "Amazon EBS"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon Elastic Block Store (Amazon EBS) fornece volumes de armazenamento em blocos persistentes e de baixa latência, ideais para bancos de dados executados em instâncias EC2.",
      incorrect: {
        0: "Amazon EFS é um sistema de arquivos compartilhado via rede (NFS).",
        1: "AWS Snowball Edge é um dispositivo físico de transferência offline.",
        2: "Amazon S3 é armazenamento de objetos, inadequado para arquivos ativos de bancos transacionais."
      }
    }
  },
  {
    id: 162,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa distribuir requisições HTTP entre instâncias EC2 em múltiplas AZs. Qual recurso usar?",
    options: [
      "Amazon SQS",
      "Application Load Balancer",
      "AWS Direct Connect",
      "AWS KMS"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Application Load Balancer (ALB) opera na camada 7 (HTTP/HTTPS) e distribui automaticamente o tráfego web entre instâncias saudáveis em várias Zonas de Disponibilidade.",
      incorrect: {
        0: "Amazon SQS é um serviço de filas assíncronas.",
        2: "AWS Direct Connect estabelece conexão privada dedicada entre data center local e AWS.",
        3: "AWS KMS gerencia chaves de criptografia."
      }
    }
  },
  {
    id: 163,
    domain: "Segurança e Conformidade",
    question: "Uma organização usa várias contas AWS e quer estabelecer limites máximos de permissões para contas membro. Qual recurso usar?",
    options: [
      "Políticas de ciclo de vida do S3",
      "AWS Budgets",
      "Amazon CloudFront",
      "Service Control Policies do AWS Organizations"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "As Service Control Policies (SCPs) do AWS Organizations definem os limites máximos de permissões disponíveis para usuários e roles em contas membro.",
      incorrect: {
        0: "Políticas de ciclo de vida gerenciam a retenção e transição de objetos no S3.",
        1: "AWS Budgets monitora limites de gastos financeiros.",
        2: "Amazon CloudFront entrega conteúdo em cache globalmente."
      }
    }
  },
  {
    id: 164,
    domain: "Conceitos de Nuvem",
    question: "Uma organização deseja reduzir o impacto ambiental de suas cargas de trabalho. Qual pilar do AWS Well-Architected aborda diretamente essa meta?",
    options: [
      "Confiabilidade",
      "Segurança",
      "Excelência operacional",
      "Sustentabilidade"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O pilar de Sustentabilidade foca em minimizar os impactos ambientais da execução de cargas de trabalho na nuvem por meio da maximização da utilização e redução do consumo energético.",
      incorrect: {
        0: "Confiabilidade foca na recuperação de falhas e disponibilidade.",
        1: "Segurança foca na proteção de ativos e dados.",
        2: "Excelência operacional foca em automação e monitoramento de processos."
      }
    }
  },
  {
    id: 165,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa hospeda uma aplicação web que precisa de controle sobre o sistema operacional e a instalação de software. Qual serviço escolher?",
    options: [
      "AWS Lambda",
      "Amazon EC2",
      "Amazon SNS",
      "Amazon S3"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon EC2 fornece capacidade computacional redimensionável (IaaS) com controle administrativo total sobre o sistema operacional, pacotes e configurações.",
      incorrect: {
        0: "AWS Lambda abstrai completamente o sistema operacional.",
        2: "Amazon SNS é um serviço de mensagens e notificações.",
        3: "Amazon S3 é armazenamento de objetos."
      }
    }
  },
  {
    id: 166,
    domain: "Segurança e Conformidade",
    question: "Uma equipe quer saber quem alterou uma política de bucket ontem e por qual chamada de API. Qual serviço consultar?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch Metrics",
      "AWS Budgets",
      "VPC Flow Logs"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS CloudTrail registra o histórico completo de chamadas de API na conta, incluindo identidade do autor, horário, endereço IP de origem e parâmetros da alteração.",
      incorrect: {
        1: "Amazon CloudWatch Metrics monitora dados numéricos de desempenho.",
        2: "AWS Budgets acompanha limites de gastos.",
        3: "VPC Flow Logs captura tráfego de rede IP nas interfaces da VPC."
      }
    }
  },
  {
    id: 167,
    domain: "Conceitos de Nuvem",
    question: "Uma equipe quer identificar riscos de segurança, custo e confiabilidade em uma workload existente. Qual framework oferece orientação para essa revisão?",
    options: [
      "AWS Well-Architected Framework",
      "AWS Service Catalog",
      "AWS Organizations",
      "AWS Cloud Adoption Framework"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Well-Architected Framework (junto com a AWS Well-Architected Tool) fornece perguntas e melhores práticas nos seis pilares para revisar arquiteturas e identificar riscos técnicos.",
      incorrect: {
        1: "AWS Service Catalog gerencia catálogos internos de produtos de TI.",
        2: "AWS Organizations gerencia múltiplas contas AWS.",
        3: "AWS Cloud Adoption Framework orienta a transformação organizacional para a nuvem, não a revisão técnica de workloads."
      }
    }
  },
  {
    id: 168,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma startup pretende testar um novo aplicativo por duas semanas, sem comprar servidores e pagando apenas pelos recursos consumidos. Qual benefício da AWS é demonstrado?",
    options: [
      "Necessidade de estimar a capacidade para cinco anos",
      "Eliminação de qualquer custo operacional",
      "Obrigação de usar somente instâncias reservadas",
      "Substituição de despesas fixas por despesas variáveis"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "Ao eliminar o investimento inicial em hardware (despesa fixa / CapEx) e pagar apenas pelo consumo real durante as duas semanas (despesa variável / OpEx), a startup aproveita um dos principais benefícios econômicos da nuvem.",
      incorrect: {
        0: "A nuvem elimina a necessidade de adivinhar capacidade a longo prazo.",
        1: "Custos operacionais variáveis existem conforme o uso.",
        2: "Não há obrigação de reserva; o modelo sob demanda atende testes curtos."
      }
    }
  },
  {
    id: 169,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma instância EC2 em subnet pública possui IP público. Qual componente permite uma rota para a Internet?",
    options: [
      "AWS Storage Gateway",
      "Internet Gateway",
      "NAT Gateway obrigatório",
      "Amazon EFS"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "Para que uma sub-rede seja pública e permita comunicação bidirecional com a internet, a VPC precisa ter um Internet Gateway anexado e uma rota apontando para ele na tabela de rotas.",
      incorrect: {
        0: "AWS Storage Gateway integra armazenamento local à nuvem.",
        2: "NAT Gateway é usado para sub-redes privadas iniciarem tráfego de saída sem receber conexões de entrada.",
        3: "Amazon EFS é um sistema de arquivos NFS."
      }
    }
  },
  {
    id: 170,
    domain: "Faturamento, Preços e Suporte",
    question: "Uma equipe quer investigar quais serviços elevaram a fatura nos últimos três meses. Qual ferramenta usar?",
    options: [
      "AWS Artifact",
      "AWS Cost Explorer",
      "AWS CloudFormation",
      "AWS Pricing Calculator"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O AWS Cost Explorer oferece interface visual interativa para filtrar, agrupar e analisar custos e uso históricos por serviço, conta ou tag ao longo dos últimos meses.",
      incorrect: {
        0: "AWS Artifact disponibiliza relatórios de conformidade.",
        2: "AWS CloudFormation provisiona infraestrutura como código.",
        3: "AWS Pricing Calculator estima custos futuros antes da implantação."
      }
    }
  },
  {
    id: 171,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa quer usar serviços gerenciados para dedicar mais tempo à lógica de negócio e menos à manutenção de servidores. Qual benefício está sendo buscado?",
    options: [
      "Controle físico direto dos data centers",
      "Redução da sobrecarga operacional",
      "Obrigatoriedade de usar bare metal",
      "Necessidade de aplicar patches em todos os hosts AWS"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "Serviços gerenciados e serverless transferem tarefas indiferenciadas (como provisionamento, patches de SO e backups) para a AWS, reduzindo a sobrecarga operacional da equipe.",
      incorrect: {
        0: "Clientes não possuem controle físico sobre os data centers da AWS.",
        2: "Serviços gerenciados abstraem o hardware, ao contrário de servidores bare metal.",
        3: "Em serviços gerenciados, a AWS aplica os patches na infraestrutura subjacente."
      }
    }
  },
  {
    id: 172,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma equipe quer preparar e transformar dados por pipelines ETL gerenciados. Qual serviço usar?",
    options: [
      "Amazon Athena",
      "AWS CloudTrail",
      "Amazon Route 53",
      "AWS Glue"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS Glue oferece um catálogo de dados unificado e mecanismos ETL serverless para descobrir, limpar, transformar e carregar dados entre fontes.",
      incorrect: {
        0: "Amazon Athena executa consultas SQL ad-hoc diretamente no S3.",
        1: "AWS CloudTrail audita chamadas de API.",
        2: "Amazon Route 53 é um serviço de DNS."
      }
    }
  },
  {
    id: 173,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma organização quer minimizar o impacto de falhas de infraestrutura dentro de uma Região AWS. Qual estratégia é MAIS apropriada?",
    options: [
      "Concentrar instâncias em uma única subnet",
      "Implantar componentes em várias Zonas de Disponibilidade",
      "Criar uma segunda conta na mesma AZ",
      "Usar apenas uma instância com volume maior"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "Implantar recursos em múltiplas Zonas de Disponibilidade (Multi-AZ) dentro de uma Região protege a aplicação contra falhas de energia, rede ou desastres em um único data center.",
      incorrect: {
        0: "Uma sub-rede está vinculada a uma única Zona de Disponibilidade, criando ponto único de falha.",
        2: "Contas diferentes na mesma AZ compartilham a mesma infraestrutura física subjacente.",
        3: "Escalonar verticalmente uma única instância não elimina a falha caso a AZ fique indisponível."
      }
    }
  },
  {
    id: 174,
    domain: "Segurança e Conformidade",
    question: "Quais DUAS práticas ajudam a proteger o acesso à conta root da AWS?",
    options: [
      "Habilitar MFA",
      "Desabilitar alertas de login",
      "Criar access keys root para todas as aplicações",
      "Compartilhar credenciais root com operadores",
      "Evitar o uso da conta root em tarefas diárias"
    ],
    correctAnswers: [0, 4],
    explanation: {
      correct: "Ativar a autenticação multifator (MFA) no usuário root e restringir seu uso apenas a tarefas exclusivas da conta (criando usuários/roles IAM para o dia a dia) são práticas fundamentais.",
      incorrect: {
        1: "Alertas de login da conta root devem ser monitorados via CloudTrail/EventBridge, nunca desativados.",
        2: "Chaves de acesso do usuário root nunca devem ser criadas ou usadas em aplicações.",
        3: "As credenciais root jamais devem ser compartilhadas."
      }
    }
  },
  {
    id: 175,
    domain: "Segurança e Conformidade",
    question: "Qual serviço gerencia chaves criptográficas usadas por vários serviços AWS?",
    options: [
      "Amazon Athena",
      "Amazon Route 53",
      "AWS WAF",
      "AWS Key Management Service"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O AWS Key Management Service (AWS KMS) permite criar, rotacionar e controlar chaves de criptografia integradas nativamente a serviços como S3, EBS, RDS e DynamoDB.",
      incorrect: {
        0: "Amazon Athena executa consultas SQL no S3.",
        1: "Amazon Route 53 é um serviço de DNS.",
        2: "AWS WAF é um firewall de aplicação web."
      }
    }
  },
  {
    id: 176,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço traduz nomes de domínio e pode realizar verificações de integridade para roteamento DNS?",
    options: [
      "AWS CloudTrail",
      "Amazon EBS",
      "Amazon Inspector",
      "Amazon Route 53"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon Route 53 é um serviço web de DNS altamente disponível que traduz domínios em IPs e executa health checks para rotear tráfego apenas para endpoints saudáveis.",
      incorrect: {
        0: "AWS CloudTrail registra logs de auditoria de API.",
        1: "Amazon EBS fornece armazenamento em blocos.",
        2: "Amazon Inspector analisa vulnerabilidades em EC2 e contêineres."
      }
    }
  },
  {
    id: 177,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço é um registro gerenciado para armazenar imagens de contêiner?",
    options: [
      "Amazon Redshift",
      "Amazon ECR",
      "Amazon ECS",
      "Amazon EFS"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon Elastic Container Registry (Amazon ECR) é um registro de contêineres totalmente gerenciado que facilita armazenar, gerenciar e implantar imagens Docker e OCI.",
      incorrect: {
        0: "Amazon Redshift é um data warehouse em nuvem.",
        2: "Amazon ECS é um serviço de orquestração de contêineres.",
        3: "Amazon EFS é um sistema de arquivos compartilhado via NFS."
      }
    }
  },
  {
    id: 178,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Quais DUAS características são associadas ao Amazon S3?",
    options: [
      "Armazenamento de objetos",
      "Versionamento de objetos",
      "Volume de blocos anexado como disco de boot EC2",
      "Sistema de arquivos SMB nativo",
      "Banco de dados relacional gerenciado"
    ],
    correctAnswers: [0, 1],
    explanation: {
      correct: "O Amazon S3 é um serviço de armazenamento de objetos escalável e oferece versionamento nativo para manter histórico de alterações e proteger contra exclusões acidentais.",
      incorrect: {
        2: "Volumes de bloco para boot EC2 são fornecidos pelo Amazon EBS.",
        3: "Sistema de arquivos SMB nativo é fornecido pelo Amazon FSx for Windows File Server.",
        4: "Bancos relacionais gerenciados são fornecidos pelo Amazon RDS e Aurora."
      }
    }
  },
  {
    id: 179,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual classe de armazenamento S3 é apropriada para arquivamento de longo prazo com recuperação não imediata e custo reduzido?",
    options: [
      "S3 Standard",
      "S3 Glacier Deep Archive",
      "EBS gp3",
      "S3 Express One Zone"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O S3 Glacier Deep Archive é a classe de armazenamento mais econômica do Amazon S3, projetada para retenção de dados por 7 a 10 anos com tempo de recuperação de 12 a 48 horas.",
      incorrect: {
        0: "S3 Standard é voltado para dados acessados com frequência e acesso imediato.",
        2: "EBS gp3 é um volume de armazenamento em bloco de uso geral, não uma classe do S3.",
        3: "S3 Express One Zone é uma classe de altíssimo desempenho e baixa latência para acessos frequentes."
      }
    }
  },
  {
    id: 180,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço fornece aceleração de tráfego usando a rede global AWS e endereços IP estáticos anycast?",
    options: [
      "AWS Global Accelerator",
      "Amazon Route 53 apenas",
      "Amazon EFS",
      "AWS Snowball"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Global Accelerator atribui dois endereços IP estáticos anycast como ponto de entrada fixo e roteia o tráfego pela rede global otimizada da AWS até os endpoints regionais.",
      incorrect: {
        1: "Route 53 realiza resolução DNS, mas não fornece IPs estáticos anycast nem proxy de tráfego na rede troncal.",
        2: "Amazon EFS é armazenamento de arquivos NFS.",
        3: "AWS Snowball é um dispositivo físico de transferência de dados."
      }
    }
  },
  {
    id: 181,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço publica notificações para vários assinantes por tópicos?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon Athena",
      "Amazon EBS"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O Amazon Simple Notification Service (Amazon SNS) utiliza o modelo Publish/Subscribe (pub/sub), onde mensagens enviadas a um tópico são distribuídas simultaneamente a todos os assinantes (Lambda, SQS, HTTP, SMS, e-mail).",
      incorrect: {
        1: "Amazon SQS é um serviço de filas ponto-a-ponto onde cada mensagem é consumida por um único consumidor.",
        2: "Amazon Athena executa consultas SQL no S3.",
        3: "Amazon EBS fornece volumes em bloco."
      }
    }
  },
  {
    id: 182,
    domain: "Faturamento, Preços e Suporte",
    question: "Quais DUAS ferramentas ajudam a gerenciar custos AWS?",
    options: [
      "AWS WAF para relatórios de fatura",
      "Amazon Inspector para cobrança consolidada",
      "AWS Cost Explorer para analisar histórico",
      "AWS Shield para estimativas prévias",
      "AWS Budgets para alertas de orçamento"
    ],
    correctAnswers: [2, 4],
    explanation: {
      correct: "O AWS Cost Explorer permite analisar o histórico e tendências de gastos, enquanto o AWS Budgets monitora orçamentos definidos e dispara alertas proativos.",
      incorrect: {
        0: "AWS WAF é um firewall de aplicação web.",
        1: "Amazon Inspector verifica vulnerabilidades de software.",
        3: "AWS Shield protege contra ataques DDoS."
      }
    }
  },
  {
    id: 183,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa cria uma plataforma de comércio eletrônico acessível globalmente e deseja usar um serviço web DNS altamente disponível e escalável para conectar os usuários à plataforma. Qual serviço da AWS atenderá a esses requisitos?",
    options: [
      "Amazon Route 53",
      "Amazon VPC",
      "Amazon EC2",
      "Amazon RDS"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O Amazon Route 53 é o serviço DNS em nuvem altamente disponível e escalável da AWS, projetado para rotear usuários finais para aplicações globais com SLA de 100% de disponibilidade.",
      incorrect: {
        1: "Amazon VPC é a rede virtual privada onde os recursos são hospedados.",
        2: "Amazon EC2 fornece instâncias de computação.",
        3: "Amazon RDS gerencia bancos de dados relacionais."
      }
    }
  },
  {
    id: 184,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa de uma rede de entrega de conteúdo que forneça entrega segura de dados, vídeos, aplicativos e APIs para usuários em todo o mundo, com baixa latência e altas velocidades de transferência. Qual serviço da AWS atende a esses requisitos?",
    options: [
      "Amazon S3",
      "Elastic Load Balancing",
      "Amazon Elastic Transcoder",
      "Amazon CloudFront"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O Amazon CloudFront acelera a entrega de conteúdo estático e dinâmico, vídeos e APIs em escala global usando Edge Locations com suporte a HTTPS e integração nativa com AWS Shield e WAF.",
      incorrect: {
        0: "Amazon S3 armazena objetos em regiões específicas.",
        1: "Elastic Load Balancing balanceia tráfego dentro de uma região.",
        2: "Amazon Elastic Transcoder converte arquivos de mídia."
      }
    }
  },
  {
    id: 185,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Qual serviço da AWS permite implantar e gerenciar aplicativos rapidamente na nuvem sem precisar se preocupar com a infraestrutura subjacente, bastando fazer upload do código?",
    options: [
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "AWS Batch",
      "Amazon Lightsail"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O AWS Elastic Beanstalk gerencia automaticamente o provisionamento de capacidade, balanceamento de carga, auto scaling e monitoramento da integridade da aplicação após o envio do código.",
      incorrect: {
        1: "Amazon EC2 exige que você gerencie o sistema operacional e a infraestrutura.",
        2: "AWS Batch executa trabalhos em lote.",
        3: "Amazon Lightsail fornece servidores virtuais privados (VPS) que ainda exigem administração do servidor."
      }
    }
  },
  {
    id: 186,
    domain: "Tecnologia e Serviços em Nuvem",
    question: "Uma empresa precisa executar consultas SQL diretamente em arquivos CSV e Parquet armazenados no Amazon S3 sem provisionar servidores ou carregar dados em um banco. Qual serviço usar?",
    options: [
      "Amazon RDS",
      "Amazon Athena",
      "Amazon ElastiCache",
      "Amazon Neptune"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O Amazon Athena é um serviço de consulta interativa serverless que lê formatos abertos (CSV, JSON, ORC, Avro, Parquet) diretamente no S3 usando SQL padrão.",
      incorrect: {
        0: "Amazon RDS exige provisionar instâncias e importar os dados para tabelas relacionais.",
        2: "Amazon ElastiCache é um serviço de cache em memória (Redis/Memcached).",
        3: "Amazon Neptune é um banco de dados de grafos."
      }
    }
  },
  {
    id: 187,
    domain: "Segurança e Conformidade",
    question: "Qual serviço da AWS ajuda a proteger aplicativos contra ataques DDoS na camada de rede e transporte, oferecendo proteção básica automática sem custo adicional para todos os clientes AWS?",
    options: [
      "AWS WAF",
      "AWS Shield Standard",
      "Amazon GuardDuty",
      "AWS Firewall Manager"
    ],
    correctAnswers: [1],
    explanation: {
      correct: "O AWS Shield Standard é ativado automaticamente e gratuitamente para todos os clientes AWS, protegendo contra os ataques DDoS mais comuns nas camadas 3 e 4.",
      incorrect: {
        0: "AWS WAF é cobrado separadamente e atua na camada 7 (HTTP/HTTPS).",
        2: "Amazon GuardDuty é um serviço pago de detecção de ameaças.",
        3: "AWS Firewall Manager gerencia regras de firewall em múltiplas contas."
      }
    }
  },
  {
    id: 188,
    domain: "Conceitos de Nuvem",
    question: "Uma empresa deseja configurar suas cargas de trabalho para executar as funções pretendidas e se recuperar rapidamente de falhas. Qual pilar do AWS Well-Architected Framework se alinha a esses objetivos?",
    options: [
      "Confiabilidade",
      "Sustentabilidade",
      "Eficiência de desempenho",
      "Segurança"
    ],
    correctAnswers: [0],
    explanation: {
      correct: "O pilar de Confiabilidade garante que uma carga de trabalho desempenhe sua função pretendida de forma consistente e se recupere automaticamente de interrupções.",
      incorrect: {
        1: "Sustentabilidade foca na eficiência energética e ambiental.",
        2: "Eficiência de desempenho foca na seleção ideal de recursos computacionais.",
        3: "Segurança foca na proteção de dados e controle de acessos."
      }
    }
  },
  {
    id: 189,
    domain: "Segurança e Conformidade",
    question: "Uma empresa deseja identificar buckets do Amazon S3 que são compartilhados com outra conta da AWS. Qual serviço ou recurso da AWS atenderá a esses requisitos?",
    options: [
      "IAM credential report",
      "AWS Lake Formation",
      "Amazon CloudWatch",
      "IAM Access Analyzer"
    ],
    correctAnswers: [3],
    explanation: {
      correct: "O IAM Access Analyzer utiliza raciocínio automatizado para analisar políticas baseadas em recursos e identificar buckets S3, roles IAM ou chaves KMS compartilhados com entidades externas.",
      incorrect: {
        0: "IAM Credential Report audita senhas e chaves de acesso de usuários IAM.",
        1: "AWS Lake Formation facilita a criação e governança de data lakes.",
        2: "Amazon CloudWatch monitora métricas e logs."
      }
    }
  },
  {
    id: 190,
    domain: "Segurança e Conformidade",
    question: "Uma empresa está usando o Amazon DynamoDB. Qual tarefa é de responsabilidade da empresa, segundo o modelo de responsabilidade compartilhada da AWS?",
    options: [
      "Gerenciar permissões de acesso ao banco de dados.",
      "Proteja o sistema operacional.",
      "Corrigir o sistema operacional.",
      "Provisionar hosts."
    ],
    correctAnswers: [0],
    explanation: {
      correct: "Em serviços gerenciados como o Amazon DynamoDB, o cliente é responsável por configurar políticas do IAM para controlar quem pode ler ou gravar nas tabelas, além de gerenciar seus dados.",
      incorrect: {
        1: "A proteção do sistema operacional subjacente pertence à AWS.",
        2: "Aplicar patches no SO pertence à AWS.",
        3: "Provisionar e manter os servidores físicos pertence à AWS."
      }
    }
  }
];