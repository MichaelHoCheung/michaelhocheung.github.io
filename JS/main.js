// =========== Custom Cursor =========
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

// let links = Array.from(document.querySelectorAll("a, button"));

// console.log(links);

// links.forEach((link) => {
//     link.addEventListener("mouseover", () => {
//         innerCursor.classList.add("grow");
//     });
//     link.addEventListener("mouseleave", () => {
//         innerCursor.classList.remove("grow");
//     });
// });

let interactiveElements = Array.from(document.querySelectorAll("a, button"));

interactiveElements.forEach((element) => {
    // Use a single event listener for both mouseover and mouseleave
    element.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });
    element.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});






// =================== Work Page =================
// ================================================== 



// =========== Easyfilter =========
// === Animation ===
$(function(){
    $('#easy-filter-wrap').easyFilter();
});


$('#easy-filter-wrap').easyFilter({
    
    // or 'fade'
    animation: 'fade',
    
    // duration of the animation
    duration: 400
    
});


// === Active Button  ===
    const filterButtons = document.querySelectorAll('.controls__btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
        // Remove the 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add the 'active' class to the clicked button
        event.target.classList.add('active');
      });
    });
  