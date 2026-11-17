/* 1. Imatge ampliada en clicar una de les miniatures */
document.addEventListener("DOMContentLoaded", function () {
  const imatges = document.querySelectorAll(".galeria img");
  const overlay = document.getElementById("overlay-img");
  const overlayImg = document.getElementById("overlay-img-src");

  imatges.forEach(function (img) {
    img.addEventListener("click", function () {
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.style.display = "flex";
    });
  });

  // Es tanca clicant a qualsevol lloc o amb la tecla Escape
  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      overlay.style.display = "none";
    }
  });
});

/* 2. Resaltar la secció amb onmouseover / onmouseout */
function resaltar() {
  const seccio = document.getElementById("seccio");
  seccio.style.backgroundColor = "#001E50";
  seccio.style.color = "white";
  document.getElementById("textOcult").style.display = "block";
}

function restaurar() {
  const seccio = document.getElementById("seccio");
  seccio.style.backgroundColor = "";
  seccio.style.color = "";
  document.getElementById("textOcult").style.display = "none";
}

/* 2b. Text sota cada foto: canvia amb el ratolí (mateixa idea que "Els nostres models") */
function resaltarModel(figura) {
  figura.classList.add("actiu");
}

function restaurarModel(figura) {
  figura.classList.remove("actiu");
}

/* 3. Rellotge: temps que portem a la pàgina fins a la propera recàrrega */
document.addEventListener("DOMContentLoaded", function () {
  const inici = Date.now();

  function dosDigits(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function actualitzar() {
    const segons = Math.floor((Date.now() - inici) / 1000);
    const h = Math.floor(segons / 3600);
    const m = Math.floor((segons % 3600) / 60);
    const s = segons % 60;
    document.getElementById("rellotge").textContent =
      dosDigits(h) + ":" + dosDigits(m) + ":" + dosDigits(s);
  }

  actualitzar();
  setInterval(actualitzar, 1000);
});

/* 4. Validació del formulari */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btnRegistrar").addEventListener("click", function () {
    const nom = document.getElementById("nom").value.trim();
    const cognom = document.getElementById("cognom").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    if (!nom || !cognom || !email || !pass1 || !pass2) {
      alert("Cal omplir tots els camps.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Introdueix un correu electrònic vàlid.");
      return;
    }
    if (pass1.length < 8) {
      alert("La contrasenya ha de tenir com a mínim 8 caràcters.");
      return;
    }
    if (pass1 !== pass2) {
      alert("Les contrasenyes no coincideixen.");
      return;
    }
    alert("T'has registrat correctament!");
  });
});
