function preLoaderFunction() {
  // preloader
  setTimeout(() => {
    const preloader = document.querySelector(".site-preloader");

    preloader.addEventListener("transitionend", (event) => {
      if (event.propertyName === "opacity") {
        preloader.parentNode.removeChild(preloader);
      }
    });
    preloader.classList.add("site-preloader__fade");
  }, 300);
}

export default preLoaderFunction;
