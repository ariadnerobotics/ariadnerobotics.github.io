<script>
    const companyNameElem = document.querySelector('.company-name h1');
    let text = companyNameElem.innerText;
    companyNameElem.innerText = "";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            companyNameElem.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 150);  // Adjust speed by changing the timeout value
        }
    }

    typeText();
</script>
