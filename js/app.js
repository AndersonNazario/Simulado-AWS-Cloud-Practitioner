document.addEventListener("DOMContentLoaded", () => {
  const EXAM_SIZE = 65;

  // Elementos de Tela
  const screenStart = document.getElementById("screen-start");
  const screenQuiz = document.getElementById("screen-quiz");
  const screenResult = document.getElementById("screen-result");

  // Elementos de Status e Controles
  const bankStatus = document.getElementById("bank-status");
  const btnStart = document.getElementById("btn-start");
  const btnConfirm = document.getElementById("btn-confirm");
  const btnNext = document.getElementById("btn-next");
  const btnRestart = document.getElementById("btn-restart");
  const btnExit = document.getElementById("btn-exit");

  // Elementos da Questão
  const questionCounter = document.getElementById("question-counter");
  const questionDomain = document.getElementById("question-domain");
  const scoreLive = document.getElementById("score-live");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const questionText = document.getElementById("question-text");
  const questionInstruction = document.getElementById("question-instruction");
  const optionsContainer = document.getElementById("options-container");

  // Elementos de Feedback
  const feedbackBox = document.getElementById("feedback-box");
  const feedbackHeader = document.getElementById("feedback-header");
  const explanationCorrectText = document.getElementById("explanation-correct-text");
  const explanationIncorrectList = document.getElementById("explanation-incorrect-list");

  // Estado da Aplicação
  let currentExam = [];
  let currentIndex = 0;
  let score = 0;
  let selectedIndices = [];
  let isAnswered = false;
  let domainStats = {};

  // Inicializa status do banco
  const totalAvailable = Array.isArray(QUESTIONS_DB) ? QUESTIONS_DB.length : 0;
  bankStatus.textContent = `${totalAvailable} questões no banco`;

  // Algoritmo Fisher-Yates para sorteio aleatório sem repetição
  function drawQuestions(pool, count) {
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  function startNewExam() {
    currentExam = drawQuestions(QUESTIONS_DB, EXAM_SIZE);
    currentIndex = 0;
    score = 0;
    domainStats = {};

    screenStart.classList.add("hide");
    screenResult.classList.add("hide");
    screenQuiz.classList.remove("hide");

    renderQuestion();
  }

  function renderQuestion() {
    const q = currentExam[currentIndex];
    const total = currentExam.length;
    selectedIndices = [];
    isAnswered = false;

    // Atualiza cabeçalho e barra
    questionCounter.textContent = `Questão ${currentIndex + 1} de ${total}`;
    questionDomain.textContent = q.domain;
    scoreLive.textContent = `Acertos: ${score}`;
    progressBarFill.style.width = `${((currentIndex) / total) * 100}%`;

    // Enunciado e instrução
    questionText.textContent = `${currentIndex + 1}. ${q.question}`;
    const requiredCount = q.correctAnswers.length;
    questionInstruction.textContent = requiredCount > 1
      ? `Selecione exatamente ${requiredCount} alternativas.`
      : "Selecione 1 alternativa.";

    // Reseta feedback e botões
    feedbackBox.classList.add("hide");
    btnConfirm.classList.remove("hide");
    btnConfirm.disabled = true;
    btnNext.classList.add("hide");
    btnNext.textContent = currentIndex === total - 1 ? "Ver Relatório Final" : "Próxima Questão →";

    // Renderiza alternativas
    optionsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E"];

    q.options.forEach((optText, idx) => {
      const label = document.createElement("label");
      label.className = "option-item";
      label.dataset.index = idx;

      const input = document.createElement("input");
      input.type = requiredCount > 1 ? "checkbox" : "radio";
      input.name = "quiz-option";
      input.value = idx;

      input.addEventListener("change", () => handleOptionSelect(idx, requiredCount, input));

      const span = document.createElement("span");
      span.textContent = `${letters[idx]}) ${optText}`;

      label.appendChild(input);
      label.appendChild(span);
      optionsContainer.appendChild(label);
    });
  }

  function handleOptionSelect(idx, maxAllowed, inputEl) {
    if (isAnswered) return;

    if (maxAllowed === 1) {
      selectedIndices = [idx];
    } else {
      if (inputEl.checked) {
        if (selectedIndices.length >= maxAllowed) {
          inputEl.checked = false;
          return;
        }
        selectedIndices.push(idx);
      } else {
        selectedIndices = selectedIndices.filter(item => item !== idx);
      }
    }

    // Atualiza visual de seleção
    document.querySelectorAll(".option-item").forEach(el => {
      const elIdx = Number(el.dataset.index);
      el.classList.toggle("selected", selectedIndices.includes(elIdx));
    });

    btnConfirm.disabled = selectedIndices.length !== maxAllowed;
  }

  function confirmAnswer() {
    if (isAnswered) return;
    isAnswered = true;

    const q = currentExam[currentIndex];
    const correctSet = new Set(q.correctAnswers);
    const isRight =
      selectedIndices.length === q.correctAnswers.length &&
      selectedIndices.every(val => correctSet.has(val));

    // Registra estatística do domínio
    if (!domainStats[q.domain]) {
      domainStats[q.domain] = { total: 0, correct: 0 };
    }
    domainStats[q.domain].total += 1;
    if (isRight) {
      score += 1;
      domainStats[q.domain].correct += 1;
    }

    scoreLive.textContent = `Acertos: ${score}`;

    // Trava inputs e destaca respostas
    const letters = ["A", "B", "C", "D", "E"];
    document.querySelectorAll(".option-item").forEach(el => {
      const idx = Number(el.dataset.index);
      el.classList.add("locked");
      el.querySelector("input").disabled = true;

      if (correctSet.has(idx)) {
        el.classList.add("correct");
      } else if (selectedIndices.includes(idx)) {
        el.classList.add("wrong");
      }
    });

    // Monta caixa de feedback detalhado
    feedbackHeader.className = `feedback-header ${isRight ? "is-correct" : "is-wrong"}`;
    feedbackHeader.textContent = isRight ? "✓ Resposta Correta!" : "✕ Resposta Incorreta";

    explanationCorrectText.textContent = q.explanation.correct;

    explanationIncorrectList.innerHTML = "<strong>Por que as outras estão incorretas:</strong>";
    q.options.forEach((_, idx) => {
      if (!correctSet.has(idx)) {
        const p = document.createElement("p");
        const reason = (q.explanation.incorrect && q.explanation.incorrect[idx])
          ? q.explanation.incorrect[idx]
          : "Esta opção não atende aos requisitos descritos no cenário.";
        p.innerHTML = `<strong>${letters[idx]}:</strong> ${reason}`;
        explanationIncorrectList.appendChild(p);
      }
    });

    feedbackBox.classList.remove("hide");
    btnConfirm.classList.add("hide");
    btnNext.classList.remove("hide");
  }

  function nextQuestion() {
    if (currentIndex < currentExam.length - 1) {
      currentIndex += 1;
      renderQuestion();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      showFinalReport();
    }
  }

  function showFinalReport() {
    screenQuiz.classList.add("hide");
    screenResult.classList.remove("hide");
    window.scrollTo({ top: 0, behavior: "smooth" });

    const total = currentExam.length;
    const pct = Math.round((score / total) * 100);

    document.getElementById("final-percentage").textContent = `${pct}%`;
    document.getElementById("final-fraction").textContent = `${score}/${total} acertos`;

    const verdictEl = document.getElementById("final-verdict");
    const msgEl = document.getElementById("final-message");

    if (pct >= 70) {
      verdictEl.textContent = "Excelente desempenho! Nível de aprovação atingido.";
      verdictEl.style.color = "var(--success)";
      msgEl.textContent = "Você demonstrou sólido domínio dos conceitos da AWS. Continue praticando para manter a consistência.";
    } else {
      verdictEl.textContent = "Bom treino! Continue revisando os pontos de atenção.";
      verdictEl.style.color = "var(--primary)";
      msgEl.textContent = "A meta recomendada para a prova oficial CLF-C02 é acima de 70%. Veja abaixo seus pontos fortes e onde focar.";
    }

    // Renderiza análise por domínio (ordenado dos pontos mais fortes para os mais fracos)
    const breakdown = document.getElementById("domains-breakdown");
    breakdown.innerHTML = "";

    const sortedDomains = Object.entries(domainStats).sort((a, b) => {
      const pctA = a[1].correct / a[1].total;
      const pctB = b[1].correct / b[1].total;
      return pctB - pctA;
    });

    sortedDomains.forEach(([domainName, stats]) => {
      const dPct = Math.round((stats.correct / stats.total) * 100);
      const isStrong = dPct >= 75;

      const row = document.createElement("div");
      row.className = "domain-row";
      row.innerHTML = `
        <div class="domain-row-header">
          <span>${domainName} (${stats.correct}/${stats.total} - ${dPct}%)</span>
          <span class="${isStrong ? "domain-tag-strong" : "domain-tag-weak"}">
            ${isStrong ? "★ Ponto Forte" : "Reforçar Estudo"}
          </span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${dPct}%; background: ${isStrong ? "var(--success)" : "var(--accent)"}"></div>
        </div>
      `;
      breakdown.appendChild(row);
    });
  }

  // Eventos
  btnStart.addEventListener("click", startNewExam);
  btnConfirm.addEventListener("click", confirmAnswer);
  btnNext.addEventListener("click", nextQuestion);
  btnRestart.addEventListener("click", startNewExam);
  btnExit.addEventListener("click", () => {
    screenResult.classList.add("hide");
    screenStart.classList.remove("hide");
  });
});