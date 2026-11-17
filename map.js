/* Highlights only known state/territory shapes; query text never becomes a selector. */
(function () {
  "use strict";

  function updateLicensedLocations() {
    var shapes = Array.from(document.querySelectorAll("g.state > path"));
    var codes = new Set();
    var names = new Map();

    shapes.forEach(function (shape) {
      var code = Array.from(shape.classList).find(function (value) {
        return /^[a-z]{2}$/.test(value);
      });
      if (!code) return;
      codes.add(code);
      var title = shape.querySelector("title");
      names.set(code, title ? title.textContent.trim() : code.toUpperCase());
    });

    var params = new URLSearchParams(window.location.search);
    var licensed = new Set((params.get("states") || "")
      .split(",")
      .map(function (code) { return code.trim().toLowerCase(); })
      .filter(function (code) { return codes.has(code); }));

    shapes.forEach(function (shape) {
      var code = Array.from(shape.classList).find(function (value) {
        return codes.has(value);
      });
      shape.classList.toggle("licensed", licensed.has(code));
    });

    var dcCircle = document.querySelector("circle.dc");
    if (dcCircle) dcCircle.classList.toggle("licensed", licensed.has("dc"));

    var description = document.getElementById("crm-map-description");
    if (description) {
      var locations = Array.from(licensed).map(function (code) { return names.get(code); });
      description.textContent = locations.length
        ? "Gold areas indicate these licensed states and territories: " + locations.join(", ") + "."
        : "No licensed states or territories were supplied to this map.";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateLicensedLocations, { once: true });
  } else {
    updateLicensedLocations();
  }
}());
