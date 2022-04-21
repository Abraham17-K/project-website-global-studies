window.onload = function () {
     // if (location.protocol !== "https:") {
     //      location.protocol = "https:";
     // }
     resizeColumn()
     window.addEventListener("resize", resizeColumn);
}

function resizeColumn() {
     const column1 = document.getElementById("column-1")
     const column2 = document.getElementById("column-2")
     column1.style.height = `${column2.offsetHeight}px`
}