  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const answers = {
      q1: "3",
      q2: "3",
      q3: "2",
      q4: "3"
    };

    let score = 0;

    Object.keys(answers).forEach(q => {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      const box = document.querySelector(`fieldset.${q}`);
      box.querySelectorAll(".result").forEach(el => el.remove());

      if (!selected) return;

      const correct = selected.value === answers[q];
      const p = document.createElement("p");
      p.className = "result";
      p.style.fontWeight = "bold";
      p.style.color = correct ? "lime" : "red";
      p.textContent = correct ? "✅ Correct!" : "❌ Wrong!";
      box.appendChild(p);

      if (correct) score++;
    });

    alert(`You scored ${score} out of 4`);
  });