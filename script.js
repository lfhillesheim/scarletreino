// ===== PRESCRIÇÃO DIGITAL - SCARLET PROTOCOLO =====
// Data da Formatura - 12 de Dezembro de 2026
const FORMATURE_DATE = new Date('2026-12-12T23:59:59');

// ===== FRASES MÉDICAS =====
const medicalQuotes = {
    neutral: [
        "A melhor médica é aquela que se cuida primeiro. Escute sua própria prescrição, Dra. Scarlet.",
        "Primeiro, não causar dano. Mas segundo, não se esquecer de treinar!",
        "Hipócrates não disse nada sobre pular treino, mas ele aprovaria a consistência.",
        "O corpo é o templo da medicina. Mantenha o templo em forma, doutora!",
        "Prescrição: 3x/semana de agachamento. Tomar com consistência.",
        "A oath hipocrática começa com você mesma. Cuide do seu corpo!",
        "Anatomia: glúteo máximo não cresce sozinho. Fisiologia: precisa de estímulo.",
        "Dra. Scarlet, o paciente mais importante é você mesma.",
        "Na medicina, prevenção é o melhor remédio. Na academia, consistência é!",
        "Seus futuros pacientes vão amar uma médica saudável e cheia de energia!"
    ],
    angry: [
        "DIAGNÓSTICO: Preguiça Aguda. TRATAMENTO: Ir pra academia AGORA!",
        "ALERTA: Níveis de sedentarismo em patamar crítico! Intervenção imediata necessária!",
        "Prescrição não seguida! Barriga em crescimento não planejado detectado!",
        "Dra. Scarlet, você sabe o prognóstico de quem não treina: remorso em dezembro!",
        "EMERGÊNCIA: Glúteo em risco de atrofia! Iniciar protocolo de thrust imediatamente!",
        "Sinais e sintomas: exclusão de treino. Conduta: VAI TREINAR!",
        "A formatura não espera, e a barriga também não! Consulta com o halter!",
        "Quebra de juramento hipocrático! Você prometeu treinar 3x/semana!",
        "Dra. Scarlet, seu caso está sendo encaminhado para o COACH de emergência!",
        "Prescrição: 1x dose de agachamento, via oral, imediato!"
    ],
    celebration: [
        "DOSE ADMINISTRADA COM SUCESSO! Paciente em evolução satisfatória! 🩺",
        "EXCELENTE ADERÊNCIA AO PROTOCOLO! Glúteos em franco desenvolvimento! 🍑",
        "Prognóstico: Excelente! Paciente comprometida com o tratamento!",
        "Dra. Scarlet aprovada em Ortopedia! Mais um dia dominado! 💪",
        "Prescrição cumprida! High five do estetoscópio! 🩺✋",
        "A+ em Consistência! Sua residência está garantida (e sua bunda too)!",
        "Protocolo obedecido! Remissão de sedentarismo confirmada!",
        "Doutora em treino! Mais uma dose administrada com sucesso!",
        "Que linda evolução clínica! Seu future self está aplaudindo!",
        "Prescrição: continuar sendo incrível! Tomar: banho de elogios!"
    ],
    pressure: [
        "⏰ Contagem regressiva: A formatura vem aí e seu corpo precisa estar pronto!",
        "O atestado de conclusão do curso exige uma médica formidável em todos os sentidos!",
        "Dezembro é o prazo de entrega. Seu corpo é o projeto final!",
        "Cada dia sem treino é um capítulo a menos da história da sua transformação!",
        "O juramento vai acontecer com você EM FORMA ou não? É pra ser SIM!",
        "Tempo de meia-vida do treino pulado: remorso eterno em dezembro!",
        "Sua formatura merece uma Scarlet radiante, forte e saudável!",
        "Protocolo de emergência: formatura chegando, bumbum precisa crescer!",
        "A data da formatura não muda. Seu corpo só muda se você treinar!",
        "Dra. Scarlet, o relógio biológico não para. Vamos administrar essa dose!"
    ]
};

// ===== EXERCÍCIOS COMPLETOS =====
const exercises = {
    // DIA A - FORÇA
    squat: {
        title: '💪 Agachamento Livre com Barra',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Quadríceps, glúteos, core (prioridade)</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição da barra:</strong> Apoie nos trapézios superiores (high bar) ou um pouco abaixo nos deltoides posteriores (low bar)</li>
                <li><strong>Pés:</strong> Largura dos ombros, pontas levemente giradas para fora (15-30°)</li>
                <li><strong>Descida:</strong> Inicie movendo os quadris para trás, como sentar numa cadeira invisível</li>
                <li><strong>Coluna:</strong> Mantenha neutra, peito elevado, olhar fixo à frente</li>
                <li><strong>Profundidade:</strong> Desça até quebrar o paralelo (coxa paralela ao chão) ou um pouco abaixo</li>
                <li><strong>Subida:</strong> Empurre o chão com os calcanhares, mantenha joelhos alinhados</li>
                <li><strong>No topo:</strong> Contraia glúteos e quads, mas não estique 100% os joelhos</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li><strong>Respiração:</strong> Inspire em cima, segure descendo, expire subindo (braceamento abdominal)</li>
                <li>Imagine sentar numa cadeira muito baixa</li>
                <li>Pressione o chão: calcanhares, base do hálux, borda externa do pé</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Joelho valgo:</strong> Joelhos colapsando pra dentro = risco de lesão no LCA</li>
                <li><strong>Coluna arredondada:</strong> Perde a curva lombar = risco de lesão na coluna</li>
                <li><strong>Não descer suficiente:</strong> Parar antes do paralelo perde metade dos benefícios</li>
                <li><strong>Levantar os calcanhares:</strong> Indica falta de mobilidade de tornozelo ou quadril</li>
            </ul>
        `
    },
    row: {
        title: '💪 Remada Unilateral com Halter',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Dorsais (espessura), trapézio médio, bíceps</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Apoie joelho e mão esquerdos no banco, coluna paralela ao chão</li>
                <li><strong>Pegada:</strong> Haltere na mão direita, neutra (palma voltada para o corpo)</li>
                <li><strong>Partida:</strong> Braço estendido, ombro levemente à frente do tronco</li>
                <li><strong>Puxada:</strong> Puxe levando o cotovelo para trás e para cima, em direção ao quadril</li>
                <li><strong>Contração:</strong> No topo, aperte as costas por 1 segundo (escápula retraída)</li>
                <li><strong>Descida:</strong> Controlado, mantendo tensão nas costas</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Imagine um lápis na sua axila que você precisa segurar o tempo todo</li>
                <li>Puxe com os cotovelos, não com as mãos</li>
                <li>Mantenha o core contraído para não arredondar a coluna</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Arredondar as costas:</strong> Perde ativação de dorsais e sobrecarrega a coluna</li>
                <li><strong>Puxar só com o braço:</strong> Vira bíceps, não costas</li>
                <li><strong>Usar impulso:</strong> Balançar o tronco tira o foco das costas</li>
                <li><strong>Soltar rápido:</strong> Perde metade do estímulo na excêntrica</li>
            </ul>
        `
    },
    hipthrust: {
        title: '🍑 Hip Thrust com Barra (GLÚTEO!)',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> GLÚTEO MÁXIMO (prioridade absoluta!)</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Banco:</strong> Encoste as costas no banco, ajustado na altura da ESCÁPULA (não nas costas!)</li>
                <li><strong>Posição:</strong> Sente-se no chão, barra sobre os quadris - USE ALMOFADAS!</li>
                <li><strong>Pés:</strong> Largura dos quadris, afastados para estabilidade</li>
                <li><strong>Partida:</strong> Desça os glúteos quase até tocar o chão, mantendo tensão</li>
                <li><strong>Subida:</strong> Empurre os quadris para cima, contraindo FORTE o glúteo no topo</li>
                <li><strong>No topo:</strong> Pausa de 1-2 segundos, empinando o quadril (não hiperestenda a coluna!)</li>
                <li><strong>Descida:</strong> Controlado, mantendo tensão</li>
            </ul>
            <p><strong>💡 DICAS CRUCIAIS:</strong></p>
            <ul>
                <li><strong>A CHAVE é a contração no topo!</strong> Não só o movimento</li>
                <li>Se não sentir glúteo, ajuste a posição dos pés</li>
                <li>Use almofada! A barra direta nos quadris dói e limita a carga</li>
                <li>Imagine empurrar o chão com os pés, não levantar o tronco</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Não contrair o glúteo no topo:</strong> Passa reto e perde 80% do efeito</li>
                <li><strong>Estender demais a coluna:</strong> Dor lombar em vez de glúteo</li>
                <li><strong>Usar impulso:</strong> Jogar o tronco = ineficaz</li>
                <li><strong>Pés muito longes:</strong> Ativa demais isquiotibiais, pouco glúteo</li>
            </ul>
        `
    },
    bench: {
        title: '💪 Supino Reto com Halteres',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Peitoral esterno, deltoide anterior, tríceps</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Banco:</strong> Plano ou levemente inclinado (5-10°), pés firmes no chão</li>
                <li><strong>Posição:</strong> Deite, halteres na altura do peito, cotovelos a 45° do tronco</li>
                <li><strong>Empurrar:</strong> Suba levemente juntando os halteres em cima (como apertar algo)</li>
                <li><strong>No topo:</strong> Travas levemente (não estique 100%)</li>
                <li><strong>Descer:</strong> Controlado até os halteres tocarem o peito</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Retraia as escápulas (pressione contra o banco) o tempo todo</li>
                <li>Mantenha os pés no chão para estabilidade</li>
                <li>Imagine empurrar o chão com as mãos</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Cotovelos abertos (90°):</strong> Sobrecarga no ombro, mantenha 45°</li>
                <li><strong>Não descer o suficiente:</strong> Perde tensão muscular</li>
                <li><strong>Bater os halteres:</strong> Ruim para as articulações, controle</li>
                <li><strong>Perder retração escapular:</strong> Ombros pra frente = lesão</li>
            </ul>
        `
    },
    pulldown: {
        title: '💪 Puxada Frontal',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Dorsais (latíssimo do dorso), trapézio inferior</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Ajuste:</strong> Coxa presa sob o apoio, barra acima da cabeça</li>
                <li><strong>Pegada:</strong> Um pouco além da largura dos ombros, palmas voltadas pra você</li>
                <li><strong>Partida:</strong> Braços estendidos, ombros levemente elevados (escápulas protraídas)</li>
                <li><strong>Puxar:</strong> Inicie puxando cotovelos para baixo e para trás</li>
                <li><strong>No fundo:</strong> Barra toca ou passa do peito superior, contraia as costas</li>
                <li><strong>Descer:</strong> Controlado, mas pare antes de perder a tensão nas costas</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Puxe com os cotovelos, como cordas neles puxando para baixo</li>
                <li>No fundo, tente "esconder" as escápulas no bolso traseiro</li>
                <li>Foque em puxar cotovelos para TRÁS e para BAIXO</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Puxar atrás do pescoço:</strong> Risco de lesão no ombro!</li>
                <li><strong>Usar o corpo:</strong> Balançar tira das costas</li>
                <li><strong>Soltar rápido:</strong> Perde tensão e pode lesionar o ombro</li>
            </ul>
        `
    },
    ohp: {
        title: '💪 Desenvolvimento com Halteres',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Deltoide (todos), trapézio superior, tríceps</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Sentado é mais seguro para estabilidade</li>
                <li><strong>Partida:</strong> Halteres na altura dos ombros, palmas uma para a outra ou para frente</li>
                <li><strong>Empurrar:</strong> Em linha reta ou ligeiramente em direção ao centro</li>
                <li><strong>No topo:</strong> Braços estendidos mas não 100% travados (microflexão)</li>
                <li><strong>Descer:</strong> Controlado até os halteres tocarem/passarem dos ombros</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Aperte o core para não arquear as costas</li>
                <li>Empregue glúteos no banco para estabilidade</li>
                <li>Imagine empurrar o teto</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Arquear excessivamente:</strong> Lombopatia em potencial</li>
                <li><strong>Dor no ombro:</strong> Diminua a carga ou mude para Arnold press</li>
                <li><strong>Empurrar à frente:</strong> Perde foco do deltoide</li>
            </ul>
        `
    },
    facepull: {
        title: '⚡ Face Pull - Myo-Reps',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Deltoide posterior, trapézio médio, romboides (saúde do ombro)</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR (MYO-REPS):</strong></p>
            <ul>
                <li><strong>Equipamento:</strong> Polley alto, corda</li>
                <li><strong>Pegada:</strong> Segure as pontas da corda, palmas neutras ou uma para a outra</li>
                <li><strong>Ação:</strong> Puxe em direção ao rosto, separando as cordas no final</li>
                <li><strong>Cotovelos:</strong> Mantenha ALTOS, não deixe cair!</li>
                <li><strong>Contração:</strong> Aperte costas/ombros por 1 segundo</li>
            </ul>
            <p><strong>🔥 MÉTODO MYO-REPS:</strong></p>
            <ul>
                <li><strong>Série de ativação:</strong> 15 reps até 1-2 RIR (não até falha!)</li>
                <li><strong>Descanso:</strong> 15-20 segundos</li>
                <li><strong>Mini-séries:</strong> 3-5 reps, descanse 15-20s, repita até não conseguir mais</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Cotovelos caindo:</strong> Vira remada alta</li>
                <li><strong>Série de ativação até falha:</strong> Vai comprometer as mini-séries</li>
            </ul>
        `
    },

    // DIA B - HIPERTROFIA
    rdl: {
        title: '💪 Levantamento Romano (RDL)',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Isquiotibiais, glúteos, eretores da espinha</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Em pé, barra na frente das coxas, pés na largura dos quadris</li>
                <li><strong>Pernas:</strong> Quase retas, com leve flexão nos joelhos (NUNCA estique 100%!)</li>
                <li><strong>Início:</strong> Empurre os quadris para trás, mantendo a barra próxima do corpo</li>
                <li><strong>Descida:</strong> Desça até sentir alongar na posterior, mantendo coluna neutra</li>
                <li><strong>Fundo:</strong> Não precisa tocar o chão - vá até onde manter forma</li>
                <li><strong>Subida:</strong> Empina os quadris e contrai glúteos no topo</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Imagine empurrar a parede atrás de você com o bumbum</li>
                <li>Mantenha o peito aberto (coração pra fora) o tempo todo</li>
                <li>A barra deve "deslizar" nas coxas durante o movimento</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS - PERIGOSOS:</strong></p>
            <ul>
                <li><strong>Arredondar a coluna:</strong> HÉRNIA DE DISCO! Mantenha peito aberto!</li>
                <li><strong>Flexionar demais as pernas:</strong> Vira agachamento</li>
                <li><strong>Permitir que a barra se afaste:</strong> Sobrecarga lombar</li>
            </ul>
        `
    },
    incline: {
        title: '💪 Supino Inclinado com Halteres',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Peito superior (clavicular), deltoide anterior</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Banco:</strong> 30-45° de inclinação</li>
                <li><strong>Posição:</strong> Deite, halteres na altura do peito</li>
                <li><strong>Empurrar:</strong> Suba até os halteres se aproximarem no topo</li>
                <li><strong>Descer:</strong> Controlado até alongar o peito completamente</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Mantenha os pés no chão</li>
                <li>Escápulas retraídas o tempo todo</li>
                <li>Se o ombro dói, tente pegada neutra (palmas se olhando)</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Inclinação excessiva:</strong> Mais de 45° = muito ombro</li>
                <li><strong>Perder retração:</strong> Ombro vai pra frente = lesão</li>
            </ul>
        `
    },
    bulgarian: {
        title: '💪 Agachamento Búlgaro',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Glúteo, quadríceps unilateral, estabilidade</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> De frente para o banco, a um passo de distância</li>
                <li><strong>Pé de trás:</strong> Apoie a parte superior do pé no banco (lacetê)</li>
                <li><strong>Pé da frente:</strong> Este é que trabalha! Coloque na largura do quadril</li>
                <li><strong>Descida:</strong> Dobre a perna da frente até o joelho quase tocar o chão</li>
                <li><strong>Tronco:</strong> Pode inclinar levemente à frente, mas mantenha coluna neutra</li>
                <li><strong>Subida:</strong> Empurre pelo calcanhar do pé da frente</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>A perna de trás é só BALANÇO, a da frente faz todo o trabalho!</li>
                <li>Se sentir demais no anterior da coxa, afaste o pé da frente</li>
                <li>Se sentir demais no glúteo, aproxime o pé da frente</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Trabalhar com a perna de trás:</strong> ERRADO!</li>
                <li><strong>Não descer suficiente:</strong> Perde o benefício</li>
                <li><strong>Joelho valgo:</strong> Risco de lesão</li>
            </ul>
        `
    },
    cableRow: {
        title: '💪 Remada no Cabo',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Dorsais (espessura), trapézio médio, bíceps</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Sentado, pés na plataforma, joelhos levemente flexionados</li>
                <li><strong>Pegada:</strong> Barra reta ou neutra, além da largura dos ombros</li>
                <li><strong>Partida:</strong> Tronco ereto (não incline!), braços estendidos</li>
                <li><strong>Puxar:</strong> Puxe cotovelos para trás, mantendo tronco estável</li>
                <li><strong>No fundo:</strong> Contraia as costas por 1 segundo</li>
                <li><strong>Descer:</strong> Estenda mas não perca a postura</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Não incline o tronco - é remada, não "pendurada"</li>
                <li>Foque em puxar os cotovelos para trás</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Inclinar demais:</strong> Vira puxada</li>
                <li><strong>Usar impulso:</strong> Jogar o corpo tira das costas</li>
            </ul>
        `
    },
    lateral: {
        title: '💪 Elevação Lateral',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Deltoide MÉDIO = ombros largos</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Em pé, halteres nas mãos ao lado do corpo</li>
                <li><strong>Cotovelos:</strong> Levemente flexionados e TRAVADOS nesta posição</li>
                <li><strong>Elevação:</strong> Eleve até a altura dos ombros</li>
                <li><strong>No topo:</strong> Segure 1 segundo</li>
                <li><strong>Descida:</strong> Controlado</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Eleva levemente à frente, não diretamente ao lado</li>
                <li>Não precisa ir acima dos ombros - isso é trapézio</li>
                <li>Polegar pode apontar para baixo (inclinação leve)</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Impulso com o corpo:</strong> Balançar tira do ombro</li>
                <li><strong>Cotovelo esticando:</strong> Mantenha fixo</li>
                <li><strong>Carga muito pesada:</strong> Melhor leve com forma</li>
            </ul>
        `
    },
    curlEZ: {
        title: '💪 Rosca Direta Barra EZ',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Bíceps braquial, braquial</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Em pé, barra EZ na mão, pegada padrão</li>
                <li><strong>Cotovelos:</strong> COLADOS ao corpo o tempo todo</li>
                <li><strong>Subir:</strong> Flexione até a barra chegar no ombro</li>
                <li><strong>No topo:</strong> Contraia o bíceps por 1 segundo</li>
                <li><strong>Descer:</strong> Controlado, não solte a tensão até embaixo</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Mantenha os cotovelos "costurados" no corpo</li>
                <li>Desce até esticar quase completo</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Cotovelos saindo para frente:</strong> Tira do bíceps</li>
                <li><strong>Impulso do corpo:</strong> Trapaça</li>
                <li><strong>Soltar rápido:</strong> Perde metade do estímulo</li>
            </ul>
        `
    },
    legcurl: {
        title: '⚡ Mesa Flexora - Drop Set',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Isquiotibiais</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Deitado, alavanca atrás dos tornozelos</li>
                <li><strong>Ajuste:</strong> Almofada logo acima do calcanhar</li>
                <li><strong>Execução:</strong> Flexione até 90° ou contração máxima</li>
                <li><strong>No topo:</strong> Segure 1 segundo</li>
            </ul>
            <p><strong>🔥 DROP SET (sem descanso):</strong></p>
            <ul>
                <li><strong>Série 1:</strong> 10 reps</li>
                <li><strong>Redução 1:</strong> Diminua 20% IMEDIATAMENTE</li>
                <li><strong>Série 2:</strong> 8 reps</li>
                <li><strong>Redução 2:</strong> Diminua mais 20%</li>
                <li><strong>Série 3:</strong> AMRAP (o máximo que conseguir)</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Tronco saindo:</strong> Perde isquio, ganha lombar</li>
                <li><strong>Descansar demais:</strong> Perde o efeito</li>
            </ul>
        `
    },

    // DIA C - VOLUME/METABÓLICO
    legpress: {
        title: '💪 Leg Press 45°',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Quadríceps, glúteos</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Sente-se com TODA a costa no banco, nunca levante!</li>
                <li><strong>Pés:</strong> Na plataforma, na largura dos quadris</li>
                <li><strong>Descida:</strong> Desça até flexionar 90° (ou um pouco mais se mobilidade permitir)</li>
                <li><strong>No fundo:</strong> Segure 1 segundo, contrais quads/glúteo</li>
                <li><strong>Subida:</strong> Empurre, mas NÃO trave os joelhos</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Pés mais alto = mais glúteo</li>
                <li>Pés mais baixos = mais quadríceps</li>
                <li>Pés juntos = vasto lateral (parte de fora da coxa)</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Quadril levantando:</strong> Sobrecarga lombar DANGEROSA!</li>
                <li><strong>Travar joelhos:</strong> Perde tensão e pode lesionar</li>
                <li><strong>Não descer suficiente:</strong> Meio exercício</li>
            </ul>
        `
    },
    pullup: {
        title: '💪 Barra Fixa (ou Assistida)',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Dorsais, trapézio, bíceps - "shape em V"</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Pegada:</strong> Além da largura dos ombros, palmas pra frente</li>
                <li><strong>Partida:</strong> Braços estendidos, escápulas protraídas</li>
                <li><strong>Puxar:</strong> Puxe cotovelos para baixo e para os lados</li>
                <li><strong>No topo:</strong> Queixo deve PASSAR da barra, contraia costas</li>
                <li><strong>Descer:</strong> Controlado até braços quase retos (não solte o ombro!)</li>
            </ul>
            <p><strong>💡 SE DIFÍCIL:</strong></p>
            <ul>
                <li>Use máquina assistida</li>
                <li>Elastico: ajuda embaixo, mais difícil em cima</li>
                <li>Caixinha: pise e suba, desce sem usar</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Não passar o queixo:</strong> Movimento incompleto</li>
                <li><strong>Soltar o ombro:</strong> Lesão!</li>
                <li><strong>Balançar (kipping):</strong> Não conta!</li>
            </ul>
        `
    },
    pullthrough: {
        title: '💪 Cable Pull-Through',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Glúteo, isquiotibiais, sem carga axial!</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Equipamento:</strong> Polley BAIXO, corda</li>
                <li><strong>Posição:</strong> De costas pro cable, pernas afastadas</li>
                <li><strong>Corda:</strong> Passe entre as pernas, segure as pontas</li>
                <li><strong>Inclinar:</strong> Incline o tronco à frente mantendo coluna neutra</li>
                <li><strong>Voltar:</strong> Empine os quadris contraindo o glúteo forte!</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Foque em empinar o quadril usando o glúteo</li>
                <li>Não puxe com os braços - eles só seguram</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Arredondar:</strong> Perigo!</li>
                <li><strong>Puxar com os braços:</strong> Errado!</li>
            </ul>
        `
    },
    pushup: {
        title: '💪 Flexão de Braço',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Peitoral, tríceps, deltoide anterior, CORE</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Mãos além da largura dos ombros</li>
                <li><strong>Corpo:</strong> RÍGIDO como uma tábua! Core contraído</li>
                <li><strong>Descer:</strong> Até o peito quase tocar o chão</li>
                <li><strong>Subir:</strong> Empurre o chão até braços esticados</li>
            </ul>
            <p><strong>💡 SE DIFÍCIL:</strong></p>
            <ul>
                <li>De joelhos: mantenha quadril alinhado</li>
                <li>Mãos elevadas: apoie num banco</li>
                <li>Parede: inclinação reduzida</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Corpo vergando:</strong> Perde core, vira ineficaz</li>
                <li><strong>Não descer suficiente:</strong> Meio exercício</li>
                <li><strong>Cotovelos abertos:</strong> Sobrecarga</li>
            </ul>
        `
    },
    abduction: {
        title: '💪 Abdução de Quadril Sentada',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Glúteo MÉDIO = curva linda!</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Senta na máquina, costas coladas</li>
                <li><strong>Pernas:</strong> Joelhos juntos, pads por fora</li>
                <li><strong>Abrir:</strong> Abra o máximo com forma</li>
                <li><strong>No topo:</strong> Segure 1-2 segundos contraindo glúteo lateral</li>
                <li><strong>Fechar:</strong> Controlado, mas pare antes de perder tensão</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>Não use impulso</li>
                <li>Foque em ABRIR</li>
                <li>Para mais intensidade, pause 2 segundos no topo</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Não abrir suficiente:</strong> Range curto</li>
                <li><strong>Impulso:</strong> Jogar o peso tira do glúteo</li>
            </ul>
        `
    },
    tricepCable: {
        title: '💪 Tríceps Corda no Cabo',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Tríceps (cabeça longa e lateral)</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Equipamento:</strong> Polley ALTO, corda</li>
                <li><strong>Posição:</strong> Em pé ou sentado, coluna neutra</li>
                <li><strong>Cotovelos:</strong> COLADOS ao corpo</li>
                <li><strong>Empurrar:</strong> Empurre a corda para baixo</li>
                <li><strong>No fundo:</strong> SEPARE as mãos pros lados!</li>
                <li><strong>Subir:</strong> Controlado</li>
            </ul>
            <p><strong>💡 DICAS:</strong></p>
            <ul>
                <li>A separação no fundo é CHAVE</li>
                <li>Imagine que está empurrando o chão</li>
                <li>Mantenha os ombros baixos</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Cotovelos saindo:</strong> Tira do tríceps</li>
                <li><strong>Não separar as mãos:</strong> Perde a contração</li>
            </ul>
        `
    },
    kbSwing: {
        title: '🔥 Kettlebell Swing - EMOM',
        content: `
            <p><strong>GRUPO MUSCULAR:</strong> Cadeia posterior + condicionamento</p>
            <hr>
            <p><strong>📝 COMO EXECUTAR:</strong></p>
            <ul>
                <li><strong>Posição:</strong> Pés além dos ombros, KB entre as pernas</li>
                <li><strong>Pegada:</strong> Ambas as mãos, palmas voltadas pra você</li>
                <li><strong>Hip hinge:</strong> NÃO é agachamento! Empine quadril pra trás</li>
                <li><strong>Swing:</strong> Explode os quadis pra frente, KB até peito/ombros</li>
                <li><strong>Desce:</strong> Deixe a gravidade puxar, receba com glúteos carregados</li>
            </ul>
            <p><strong>🔥 EMOM (Every Minute On the Minute):</strong></p>
            <ul>
                <li>No início de cada minuto: faça 12 swings</li>
                <li>Descanse o RESTO do minuto</li>
                <li>Repita por 5 minutos</li>
            </ul>
            <p><strong>⚠️ ERROS COMUNS:</strong></p>
            <ul>
                <li><strong>Levantar com os braços:</strong> Errado! Quadril faz o trabalho</li>
                <li><strong>Arredondar:</strong> Use carga mais leve</li>
            </ul>
        `
    }
};

// ===== ESTADO DO PACIENTE =====
let state = {
    currentWeek: 1,
    completedExercises: [], // { week, day, ex, date }
    totalDoses: 0,
    streak: 0,
    lastDoseDate: null,
    lastCheckDate: null,
    skipDays: 0,
    history: [], // { date, day, time }
    rewards: { 4: false, 11: false, 20: false, 500: false },
    dailyQuote: null,
    dailyQuoteDate: null
};

// ===== INICIALIZAÇÃO =====
function init() {
    loadState();
    updateCountdown();
    updatePatientStatus();
    updateVitals();
    updateMilestones();
    updateWeekInfo();
    loadDailyQuote();
    checkSkipDays();
    renderHistory();

    // Event listeners
    setupListeners();

    // Countdown timer
    setInterval(updateCountdown, 1000);
}

// ===== LOAD/SAVE =====
function loadState() {
    const saved = localStorage.getItem('scarletRx');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        } catch(e) {
            console.error('Erro ao carregar estado');
        }
    }
}

function saveState() {
    localStorage.setItem('scarletRx', JSON.stringify(state));
}

// ===== COUNTDOWN =====
function updateCountdown() {
    const now = new Date();
    const diff = FORMATURE_DATE - now;

    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));

    const cdEl = document.getElementById('countdownNumber');
    if (cdEl) {
        cdEl.textContent = days + ' dias';
    }
}

// ===== PATIENT STATUS =====
function updatePatientStatus() {
    const avatar = document.getElementById('avatarEmoji');
    const status = document.getElementById('pcStatus');
    const diagnosis = document.getElementById('pcDiagnosis');
    const speech = document.getElementById('pcSpeech');
    const card = document.getElementById('patientCard');

    // Reset
    card.classList.remove('angry', 'happy');

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (state.skipDays >= 3) {
        // MUITO FURIOSA
        avatar.textContent = '🤬';
        status.textContent = 'Status: Crítico';
        diagnosis.textContent = 'Diagnóstico: Sedentarismo Grave';
        speech.textContent = getRandom(medicalQuotes.angry);
        card.classList.add('angry');
        showSkipAlert();
    } else if (state.skipDays >= 1) {
        // FURIOSA
        avatar.textContent = '😤';
        status.textContent = 'Status: Em Observação';
        diagnosis.textContent = 'Diagnóstico: Não-aderência ao Protocolo';
        speech.textContent = `Já fazem ${state.skipDays} dia(s) sem dose administrada...`;
        card.classList.add('angry');
        showSkipAlert();
    } else if (state.lastDoseDate === today) {
        // FELIZ
        avatar.textContent = '🥰';
        status.textContent = 'Status: Excelente';
        diagnosis.textContent = 'Diagnóstico: Em Evolução Satisfatória';
        speech.textContent = getRandom(medicalQuotes.celebration);
        card.classList.add('happy');
        hideSkipAlert();
    } else if (state.lastDoseDate === yesterday) {
        // NEUTRO BOM
        avatar.textContent = '😊';
        status.textContent = 'Status: Estável';
        diagnosis.textContent = 'Diagnóstico: Boa Aderência';
        speech.textContent = getRandom(medicalQuotes.neutral);
        hideSkipAlert();
    } else {
        // NEUTRO
        avatar.textContent = '🙂';
        status.textContent = 'Status: Em Acompanhamento';
        diagnosis.textContent = 'Diagnóstico: Protocolo Pendente';

        // Checa se é dia de treino
        const dayOfWeek = new Date().getDay();
        if (dayOfWeek === 1 || dayOfWeek === 3 || dayOfWeek === 5) {
            speech.textContent = getRandom(medicalQuotes.pressure);
        } else {
            speech.textContent = getRandom(medicalQuotes.neutral);
        }
        hideSkipAlert();
    }
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ===== SKIP ALERT =====
function showSkipAlert() {
    const alert = document.getElementById('skipAlert');
    const msg = document.getElementById('alertMsg');
    if (alert) {
        alert.style.display = 'block';
        msg.textContent = `${state.skipDays} dia(s) sem administração da dose. Prognóstico: arrependimento em dezembro.`;
    }
}

function hideSkipAlert() {
    const alert = document.getElementById('skipAlert');
    if (alert) alert.style.display = 'none';
}

// ===== VITALS =====
function updateVitals() {
    document.getElementById('streakValue').textContent = state.streak;
    document.getElementById('totalWorkouts').textContent = state.totalDoses;
    document.getElementById('skipDays').textContent = state.skipDays;

    // Weekly progress
    const today = new Date();
    const startOfWeek = getMonday(today);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);

    const thisWeekDoses = state.history.filter(h => {
        const d = new Date(h.date);
        return d >= startOfWeek && d <= endOfWeek;
    }).length;

    document.getElementById('weekProgress').textContent = `${thisWeekDoses}/3`;
}

function getMonday(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
}

// ===== MILESTONES =====
function updateMilestones() {
    const milestones = [
        { num: 4, el: 'mile4', status: 'ms4-status' },
        { num: 11, el: 'mile11', status: 'ms11-status' },
        { num: 20, el: 'mile20', status: 'ms20-status' },
        { num: 500, el: 'mile500', status: 'ms500-status' }
    ];

    milestones.forEach(m => {
        const el = document.getElementById(m.el);
        const statusEl = document.getElementById(m.status);

        if (state.totalDoses >= m.num) {
            el.classList.add('unlocked');
            statusEl.textContent = 'CONQUISTADO!';
            state.rewards[m.num] = true;
        } else {
            el.classList.remove('unlocked');
            const remaining = m.num - state.totalDoses;
            statusEl.textContent = `Faltam ${remaining} doses`;
        }
    });

    saveState();
}

// ===== WEEK INFO =====
function updateWeekInfo() {
    document.getElementById('weekNum').textContent = state.currentWeek;

    const cycle = Math.ceil(state.currentWeek / 4);
    const phaseEl = document.getElementById('wnPhase');

    if (cycle === 1) {
        phaseEl.textContent = 'Fase 1: Acumulação';
    } else if (cycle === 2) {
        phaseEl.textContent = 'Fase 2: Força';
    } else {
        phaseEl.textContent = 'Fase 3: Hipertrofia';
    }
}

// ===== CHECK SKIP DAYS =====
function checkSkipDays() {
    const today = new Date().toDateString();

    if (state.lastCheckDate === today) return;

    state.lastCheckDate = today;

    if (state.lastDoseDate) {
        const last = new Date(state.lastDoseDate);
        const daysSince = Math.floor((new Date() - last) / (1000 * 60 * 60 * 24));

        // Se passou mais de 2 dias sem treino, conta como skip
        if (daysSince > 2) {
            state.skipDays = daysSince - 2; // Tem 2 dias de folga
        } else {
            state.skipDays = 0;
        }
    }

    saveState();
    updatePatientStatus();
    updateVitals();
}

// ===== DAILY QUOTE =====
function loadDailyQuote() {
    const today = new Date().toDateString();

    if (state.dailyQuoteDate === today) {
        document.getElementById('dqText').textContent = state.dailyQuote;
        return;
    }

    const allQuotes = [...medicalQuotes.neutral, ...medicalQuotes.celebration, ...medicalQuotes.pressure];
    state.dailyQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    state.dailyQuoteDate = today;

    document.getElementById('dqText').textContent = state.dailyQuote;
    saveState();
}

// ===== CHECKBOXES =====
function updateCheckboxes() {
    document.querySelectorAll('.ex-check').forEach(cb => {
        const day = cb.dataset.day;
        const ex = cb.dataset.ex;
        const key = `w${state.currentWeek}-${day}-${ex}`;

        const isCompleted = state.completedExercises.some(e => e.key === key);
        cb.checked = isCompleted;

        const exRow = cb.closest('.exercise-rx');
        if (isCompleted) {
            exRow.classList.add('completed');
        } else {
            exRow.classList.remove('completed');
        }
    });

    updateAdminButtons();
}

function updateAdminButtons() {
    ['A', 'B', 'C'].forEach(day => {
        const btn = document.getElementById(`admin${day}`);
        const checkboxes = document.querySelectorAll(`.ex-check[data-day="${day}"]`);
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);

        btn.disabled = !allChecked;
    });
}

// ===== ADMINISTER DOSE =====
function administerDose(day) {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    // Marca todos como completo
    document.querySelectorAll(`.ex-check[data-day="${day}"]`).forEach(cb => {
        const ex = cb.dataset.ex;
        const key = `w${state.currentWeek}-${day}-${ex}`;

        if (!state.completedExercises.some(e => e.key === key)) {
            state.completedExercises.push({ key, date: today });
        }
        cb.closest('.exercise-rx').classList.add('completed');
    });

    // Atualiza stats
    if (state.lastDoseDate !== today) {
        state.totalDoses++;

        if (state.lastDoseDate === yesterday) {
            state.streak++;
        } else {
            state.streak = 1;
        }
    }

    state.lastDoseDate = today;
    state.skipDays = 0;

    // Adiciona ao histórico
    const now = new Date();
    state.history.unshift({
        date: today,
        day: day,
        time: now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    });

    saveState();
    updateVitals();
    updateMilestones();
    updatePatientStatus();
    renderHistory();
    updateAdminButtons();

    // Show success
    showSuccess(day);
}

// ===== HISTORY =====
function renderHistory() {
    const container = document.getElementById('historyEntries');

    if (state.history.length === 0) {
        container.innerHTML = `
            <div class="history-empty">
                <span class="he-emoji">📁</span>
                <span class="he-text">Nenhuma dose administrada ainda</span>
            </div>
        `;
        return;
    }

    container.innerHTML = state.history.map((h, i) => {
        const date = new Date(h.date);
        const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const dayName = dayNames[date.getDay()];
        const dateStr = date.toLocaleDateString('pt-BR');

        return `
            <div class="history-entry">
                <div class="he-day">${h.day}</div>
                <div class="he-info">
                    <div class="he-time">Protocolo ${h.day} completado</div>
                    <div class="he-date">${dayName}, ${dateStr} às ${h.time}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== SUCCESS OVERLAY =====
function showSuccess(day) {
    const overlay = document.getElementById('successOverlay');
    const subtitle = document.getElementById('successSubtitle');
    const streakEl = document.getElementById('successStreak');
    const totalEl = document.getElementById('successTotal');

    const dayNames = { A: 'Força', B: 'Hipertrofia', C: 'Volume' };
    subtitle.textContent = `Protocolo ${day} (${dayNames[day]}) completo!`;
    streakEl.textContent = `🔥 Streak: ${state.streak}`;
    totalEl.textContent = `💉 Total: ${state.totalDoses}`;

    overlay.classList.add('active');

    // Confetti effect
    createConfetti();
}

function createConfetti() {
    const colors = ['#10b981', '#ec4899', '#8b5cf6', '#f59e0b'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            z-index: 201;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            pointer-events: none;
        `;
        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 1000;
        const xDrift = (Math.random() - 0.5) * 200;

        confetti.animate([
            { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) translateX(${xDrift}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => confetti.remove();
    }
}

// ===== MODAL =====
function showEx(id) {
    const ex = exercises[id];
    if (!ex) return;

    document.getElementById('mpTitle').textContent = ex.title;
    document.getElementById('mpBody').innerHTML = ex.content;
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

// ===== HISTORY TOGGLE =====
function toggleHistory() {
    const content = document.getElementById('historyContent');
    const btn = document.getElementById('historyToggle');

    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        btn.textContent = 'Expandir ▼';
    } else {
        content.classList.add('expanded');
        btn.textContent = 'Recolher ▲';
    }
}

// ===== EVENT LISTENERS =====
function setupListeners() {
    // Tabs
    document.querySelectorAll('.pp-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const day = tab.dataset.day;

            document.querySelectorAll('.pp-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.pp-day').forEach(d => d.classList.remove('active'));
            document.getElementById(`day${day}`).classList.add('active');
        });
    });

    // Checkboxes
    document.querySelectorAll('.ex-check').forEach(cb => {
        cb.addEventListener('change', () => updateAdminButtons());
    });

    // Admin buttons
    document.getElementById('adminA').addEventListener('click', () => administerDose('A'));
    document.getElementById('adminB').addEventListener('click', () => administerDose('B'));
    document.getElementById('adminC').addEventListener('click', () => administerDose('C'));

    // Modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'modalOverlay') closeModal();
    });

    // Success
    document.getElementById('successBtn').addEventListener('click', () => {
        document.getElementById('successOverlay').classList.remove('active');
    });

    // History toggle
    document.getElementById('historyToggle').addEventListener('click', toggleHistory);

    // Week nav
    document.getElementById('prevWeek').addEventListener('click', () => {
        if (state.currentWeek > 1) {
            state.currentWeek--;
            saveState();
            updateWeekInfo();
            updateCheckboxes();
        }
    });

    document.getElementById('nextWeek').addEventListener('click', () => {
        state.currentWeek++;
        saveState();
        updateWeekInfo();
        updateCheckboxes();
    });
}

// ===== INICIA =====
document.addEventListener('DOMContentLoaded', () => {
    init();
    updateCheckboxes();
});

// ===== GLOBAL PARA O HTML =====
window.showEx = showEx;
