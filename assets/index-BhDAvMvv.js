(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/In_Stars_and_Time/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      if (cspNonce) {
        link.setAttribute("nonce", cspNonce);
      }
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const toggleBtn = document.querySelector(".mob-open-nav");
const body = document.querySelector("body");
const mobMenu = document.querySelector(".mob-menu");
const mobMenuBox = document.querySelector(".mob-menu-box");
const links = document.querySelectorAll(".link");
toggleBtn == null ? void 0 : toggleBtn.addEventListener("click", toggleNav);
links.forEach((link) => {
  link.addEventListener("click", closeNav);
});
function toggleNav() {
  mobMenu == null ? void 0 : mobMenu.classList.toggle("is-hidden");
  body == null ? void 0 : body.classList.toggle("no-scroll");
  mobMenuBox == null ? void 0 : mobMenuBox.classList.toggle("is-visible");
  toggleBtn == null ? void 0 : toggleBtn.classList.toggle("active");
  if (mobMenu == null ? void 0 : mobMenu.classList.contains("is-hidden")) {
    toggleBtn == null ? void 0 : toggleBtn.classList.replace("mob-close-nav", "mob-open-nav");
  } else {
    toggleBtn == null ? void 0 : toggleBtn.classList.replace("mob-open-nav", "mob-close-nav");
  }
}
function closeNav() {
  mobMenu == null ? void 0 : mobMenu.classList.add("is-hidden");
  body == null ? void 0 : body.classList.remove("no-scroll");
  mobMenuBox == null ? void 0 : mobMenuBox.classList.remove("is-visible");
  toggleBtn == null ? void 0 : toggleBtn.classList.replace("mob-close-nav", "mob-open-nav");
}
__vitePreload(() => import("./index-DnDVOhFa.js").then((n) => n.i), true ? [] : void 0);
