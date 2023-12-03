function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach((b) => {
        b.addEventListener('click', showMore)
    });

    function showMore(event) {
        let btn = event.target;
        let profile = btn.parentElement;
        let children = Array.from(profile.children);


        let radioButtonUnlocked = children[4];
        let info = children[9];
        if (!radioButtonUnlocked.checked) {
            return;
        }

        //toggle functions
        if (btn.textContent === "Show more") {
            info.style.display = 'block'
            btn.textContent = 'Hide it'
        } else if (btn.textContent === 'Hide it') {
            info.style.display = 'none'
            btn.textContent = 'Show more'
        }
    }
}