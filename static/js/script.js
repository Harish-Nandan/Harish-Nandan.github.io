
//document.addEventListener('DOMContentLoaded', () => {
  //  const typewriter = document.getElementById('typewriter');
    //const text = typewriter.textContent;
    //typewriter.textContent = '';
    //let i = 0;

    //function type() {
      //  if (i < text.length) {
     //       typewriter.textContent += text.charAt(i);
       //     i++;
         //   setTimeout(type, 100); // Speed of typing (ms)
       // }
    //}
    //type();
//});


<script>
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Set default theme
    body.classList.add('dark-mode');

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Change icon based on mode
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = '🌙';
        } else {
            toggleButton.textContent = '☀️';
        }
    });
	
	document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        items.forEach(item => {
            const boxTop = item.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run once on page load
});
</script>