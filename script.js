window.addEventListener('load', () => {
    // We wrap this in setTimeout(..., 0) to ensure the load event 
    // has fully completed and the timestamp is populated.
    setTimeout(() => {
        // 1. Calculate Load Time
        const t = window.performance.timing;
        const loadTime = t.loadEventEnd - t.navigationStart;
        const domTime = t.domComplete - t.domInteractive;

        // Check if elements exist
        const elLoad = document.getElementById('perf-load');
        const elDom = document.getElementById('perf-dom');
        const elWeight = document.getElementById('perf-weight');

        if (elLoad) elLoad.innerText = loadTime + "ms";
        if (elDom) elDom.innerText = domTime + "ms";

        // 2. Calculate Page Weight (approximate)
        if (elWeight) {
            const htmlSize = document.documentElement.outerHTML.length;
            const kb = (htmlSize / 1024).toFixed(2);
            elWeight.innerText = kb + "KB (Raw)";
        }

        // Console easter egg
        console.log("%c Welcome to the source.", "background: #000; color: #0f0; font-size: 20px");
        console.log("This site is hand-coded to ensure maximum velocity.");
    }, 0);
});
