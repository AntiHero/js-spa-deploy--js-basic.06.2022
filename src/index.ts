function render(hash?: string) {
  const href = window.location.href;

  document.querySelector("#app")!.textContent = hash
    ? href.includes("#")
      ? href.replace(/#.*/, hash)
      : href + hash
    : window.location.href;
}

document.body.addEventListener("click", (ev) => {
  if ((ev.target as HTMLElement).matches("a")) {
    const hash = (ev.target as HTMLAnchorElement).hash;
    
    ev.preventDefault();

    if (!window.history) throw new Error("History API is not available");
    
    history.pushState({}, '', (ev.target as HTMLAnchorElement).href);
    
    render(hash);
  }
});

render();
