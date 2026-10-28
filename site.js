// Edit these links. Every element with a matching data-link attribute, on every page, picks them up.
const REGISTER_URL = "https://forms.gle/REPLACE_ME";
const RULES_URL = "rules.html";
const DISCORD_URL = ""; // Leave empty to hide the Discord mention.
const CONTACT_EMAIL = "support@nurbly.com";

const links = { register: REGISTER_URL, rules: RULES_URL, discord: DISCORD_URL, email: "mailto:" + CONTACT_EMAIL,
  sponsor: "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Sponsoring the Nurbly Build Challenge") };
document.querySelectorAll("[data-link]").forEach(a => { a.href = links[a.dataset.link]; });
document.querySelectorAll('[data-link="email"]').forEach(a => { a.textContent = CONTACT_EMAIL; });
if (!DISCORD_URL) document.querySelectorAll('[data-needs="discord"]').forEach(el => el.remove());
