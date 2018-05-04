function reloader() {
  console.log("Injected the tweek script successfully!");
  setInterval(() => { window.localStorage.clear() }, 0);
  setTimeout(() => { window.location.reload() }, 18000);
}

reloader();
