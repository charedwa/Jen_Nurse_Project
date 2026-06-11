/*
 * Hospice Nurse Pocket Toolkit — app logic
 * Careberry.org · vanilla JS, no dependencies.
 *
 * Renders the home grid + all sections from window.hospiceToolkit (assets/hospice-toolkit-data.js),
 * provides instant client-side search (section names, card titles, tags, body text), accessible
 * accordions, and section navigation. No network calls, no storage, no PHI collected.
 */
(function () {
  "use strict";

  var DATA = window.hospiceToolkit || [];

  // Decorative emoji per section (visual only — no clinical meaning).
  var ICONS = {
    emergency: "🚨", eligibility: "📋", assessment: "📊", symptoms: "💊",
    comms: "🗣️", idg: "👥", compliance: "✅", supplies: "🧰",
    family: "💬", sources: "ℹ️"
  };
  // Soft tint behind each tile icon, keyed by section tone.
  var TONE_TINT = {
    primary: "#e3f1f5", accent: "#e6f4ec", warning: "#fbf6e7", danger: "#fbeceb"
  };

  var els = {};
  var searchIndex = [];
  var currentSection = "home";

  /* ---------- helpers ---------- */
  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // Wrap tables for horizontal scroll on small screens, with a visible cue.
  function makeTablesScrollable(html) {
    if (html.indexOf("<table") === -1) return html;
    html = html.replace(/<table/g, '<div class="table-scroll"><table');
    html = html.replace(/<\/table>/g, "</table></div>");
    return html;
  }
  function stripHtml(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }

  /* ---------- build search index ---------- */
  function buildIndex() {
    DATA.forEach(function (section) {
      section.cards.forEach(function (card) {
        var text = stripHtml(card.contentHtml);
        searchIndex.push({
          sectionId: section.id,
          sectionTitle: section.title,
          cardId: card.id,
          cardTitle: card.title,
          text: text,
          // single lowercase haystack: section + title + tags + body
          hay: (section.title + " " + card.title + " " + (card.tags || []).join(" ") + " " + text).toLowerCase()
        });
      });
    });
  }

  /* ---------- render home ---------- */
  function renderHome() {
    var grid = el("homeGrid");
    var html = "";
    DATA.forEach(function (section) {
      var icon = ICONS[section.id] || "•";
      if (section.id === "emergency") {
        html +=
          '<button class="tile emergency" data-section="' + section.id + '">' +
            '<span class="tile-icon">' + icon + "</span>" +
            '<span class="tile-text">' +
              '<span class="tile-name">' + esc(section.title) + ":</span> " +
              '<span class="tile-sub">' + esc(section.description) + "</span>" +
            "</span>" +
            '<span class="tile-arrow" aria-hidden="true">›</span>' +
          "</button>";
      } else {
        var tint = TONE_TINT[section.tone] || "#eef1f3";
        html +=
          '<button class="tile" data-section="' + section.id + '">' +
            '<span class="tile-icon" style="background:' + tint + '">' + icon + "</span>" +
            '<span class="tile-name">' + esc(section.title) + "</span>" +
            '<span class="tile-sub">' + esc(section.description) + "</span>" +
          "</button>";
      }
    });
    grid.innerHTML = html;
  }

  /* ---------- render all section views ---------- */
  function renderSections() {
    var container = el("sections");
    var html = "";
    DATA.forEach(function (section) {
      html += '<div class="view" id="view-' + section.id + '" role="region" aria-label="' + esc(section.title) + '">';
      html += '<div class="section-intro ' + (section.tone || "primary") + '">' + esc(section.description) + "</div>";
      section.cards.forEach(function (card) {
        var bodyId = "body-" + card.id;
        var headId = "head-" + card.id;
        var pages = (card.sourcePages && card.sourcePages.length)
          ? '<p class="muted" style="margin-top:10px">Source: PDF p. ' + card.sourcePages.join(", ") + "</p>"
          : "";
        html +=
          '<div class="card" id="card-' + card.id + '">' +
            '<button class="card-header" id="' + headId + '" aria-expanded="false" aria-controls="' + bodyId + '">' +
              '<span class="card-title">' + esc(card.title) + "</span>" +
              '<span class="chevron" aria-hidden="true">▾</span>' +
            "</button>" +
            '<div class="card-body" id="' + bodyId + '" role="region" aria-labelledby="' + headId + '" hidden>' +
              makeTablesScrollable(card.contentHtml) + pages +
            "</div>" +
          "</div>";
      });
      html += "</div>";
    });
    container.innerHTML = html;
    addScrollCues(container);
  }

  // Add a small "scroll →" hint above any table that overflows.
  function addScrollCues(scope) {
    var wraps = scope.querySelectorAll(".table-scroll");
    Array.prototype.forEach.call(wraps, function (w) {
      var cue = document.createElement("span");
      cue.className = "scroll-cue";
      cue.textContent = "Scroll table sideways →";
      w.parentNode.insertBefore(cue, w);
    });
  }

  /* ---------- navigation ---------- */
  function showSection(id) {
    var prev = el("view-" + currentSection);
    if (prev) prev.classList.remove("active");
    if (id === "home") {
      el("homeView").classList.add("active");
      el("appHeader").classList.remove("has-back");
      el("headerTitle").textContent = "Hospice Nurse Pocket Toolkit";
      el("headerSub").textContent = "Mobile quick reference for hospice field care";
    } else {
      el("homeView").classList.remove("active");
      var view = el("view-" + id);
      if (view) view.classList.add("active");
      var section = DATA.filter(function (s) { return s.id === id; })[0];
      el("appHeader").classList.add("has-back");
      el("headerTitle").textContent = section ? section.title : "Toolkit";
      el("headerSub").textContent = section ? section.description : "";
    }
    currentSection = id;
    clearSearch();
    window.scrollTo(0, 0);
  }

  function goHome() { showSection("home"); }

  function toggleCard(header) {
    var expanded = header.getAttribute("aria-expanded") === "true";
    header.setAttribute("aria-expanded", String(!expanded));
    var body = el(header.getAttribute("aria-controls"));
    if (body) body.hidden = expanded;
  }

  function openCardInSection(sectionId, cardId) {
    showSection(sectionId);
    var header = document.querySelector('#card-' + cardId + ' .card-header');
    var card = el("card-" + cardId);
    if (header && header.getAttribute("aria-expanded") !== "true") toggleCard(header);
    if (card) {
      // let the section render/scroll settle first
      window.requestAnimationFrame(function () {
        card.scrollIntoView({ block: "start", behavior: "smooth" });
        card.classList.add("flash");
        setTimeout(function () { card.classList.remove("flash"); }, 1500);
      });
    }
  }

  /* ---------- search ---------- */
  function buildPreview(text, q) {
    var lc = text.toLowerCase();
    var i = lc.indexOf(q);
    var start = 0, snippet;
    if (i === -1) {
      snippet = text.slice(0, 120);
    } else {
      start = Math.max(0, i - 45);
      snippet = (start > 0 ? "…" : "") + text.slice(start, i + q.length + 75);
    }
    // highlight all occurrences of q in the snippet
    var safe = esc(snippet);
    var re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return safe.replace(re, "<mark>$1</mark>") + (text.length > start + 120 ? "…" : "");
  }

  function runSearch(raw) {
    var q = raw.trim().toLowerCase();
    var box = el("searchResults");
    var content = el("homeView");

    if (q.length < 2) { clearSearch(); return; }

    var hits = searchIndex.filter(function (r) { return r.hay.indexOf(q) !== -1; });
    // title/tag matches first
    hits.sort(function (a, b) {
      var at = (a.cardTitle.toLowerCase().indexOf(q) !== -1) ? 0 : 1;
      var bt = (b.cardTitle.toLowerCase().indexOf(q) !== -1) ? 0 : 1;
      return at - bt;
    });

    var html = '<div class="results-meta">' + hits.length + ' result' + (hits.length === 1 ? "" : "s") + ' for “' + esc(raw.trim()) + '”</div>';
    if (!hits.length) {
      html += '<div class="no-results">No matches. Try a symptom, diagnosis, medication, scale, or documentation term.</div>';
    } else {
      hits.slice(0, 40).forEach(function (r) {
        html +=
          '<button class="result-card" data-section="' + r.sectionId + '" data-card="' + r.cardId + '">' +
            '<span class="result-section">' + esc(r.sectionTitle) + "</span>" +
            '<span class="result-title">' + esc(r.cardTitle) + "</span>" +
            '<span class="result-preview">' + buildPreview(r.text, q) + "</span>" +
          "</button>";
      });
    }
    box.innerHTML = html;
    box.classList.add("show");
    // hide whatever view is active behind the results
    content.classList.remove("active");
    var sv = el("view-" + currentSection);
    if (sv) sv.classList.remove("active");
    el("clearBtn").classList.add("show");
  }

  function clearSearch() {
    var box = el("searchResults");
    box.classList.remove("show");
    box.innerHTML = "";
    el("searchInput").value = "";
    el("clearBtn").classList.remove("show");
    // restore the view we were on
    if (currentSection === "home") el("homeView").classList.add("active");
    else { var v = el("view-" + currentSection); if (v) v.classList.add("active"); }
  }

  /* ---------- events ---------- */
  function wire() {
    el("backBtn").addEventListener("click", goHome);

    // delegate tile + result + card-header clicks
    document.body.addEventListener("click", function (e) {
      var tile = e.target.closest ? e.target.closest("[data-section]") : null;
      if (tile && tile.classList.contains("tile")) {
        // brief selection highlight before navigating, for tap feedback
        tile.classList.add("tile-selected");
        setTimeout(function () {
          tile.classList.remove("tile-selected");
          showSection(tile.getAttribute("data-section"));
        }, 160);
        return;
      }
      var result = e.target.closest ? e.target.closest(".result-card") : null;
      if (result) { openCardInSection(result.getAttribute("data-section"), result.getAttribute("data-card")); return; }
      var head = e.target.closest ? e.target.closest(".card-header") : null;
      if (head) { toggleCard(head); return; }
    });

    var input = el("searchInput");
    input.addEventListener("input", function () { runSearch(input.value); });
    input.addEventListener("keydown", function (e) { if (e.key === "Escape") clearSearch(); });
    el("clearBtn").addEventListener("click", function () { clearSearch(); input.focus(); });

    // floating to-top button
    var toTop = el("toTop");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) toTop.classList.add("show");
      else toTop.classList.remove("show");
    }, { passive: true });
    toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  /* ---------- init ---------- */
  function init() {
    els.app = el("app");
    if (!DATA.length) {
      el("sections").innerHTML = '<div class="no-results">Toolkit content failed to load.</div>';
      return;
    }
    buildIndex();
    renderHome();
    renderSections();
    wire();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
