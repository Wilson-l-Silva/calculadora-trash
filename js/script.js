let functions = (function () {

    function init() {
        alert('chamou');
    }

    return {
        init
    }
})();

document.addEventListener("DOMContentLoaded", functions.init);

