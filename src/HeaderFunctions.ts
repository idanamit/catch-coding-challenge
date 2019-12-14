const HeaderFunctions = () => {
    window.onscroll = function () {
        onScroll()
    };

    function onScroll() {
        const header = document.getElementById("page-header");
        if (header) {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                header.style.padding = "10px 0";
                header.style.fontSize = "15px";
            } else {
                header.style.padding = "30px 0";
                header.style.fontSize = "25px";
            }
        }
    }
};

export default HeaderFunctions;