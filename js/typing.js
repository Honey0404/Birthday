const msg = `Happy Birthday, My Love ❤️
Eight months may not seem like a long time to the world, but to me, they have been the most beautiful months of my life. Somewhere between our conversations, our laughter, and the countless moments we've shared, you became more than just a part of my life—you became my home.
You are the first thought that makes me smile in the morning and the last thought that comforts me at night.
I love you more than words will ever be able to explain, and with every passing day, that love only grows stronger.
Happy Birthday, my beautiful girl.
Love You Forever ❤️`;

function startTyping() {
    const t = document.getElementById('typed');
    if (t.dataset.done) return;

    let i = 0;

    (function w() {
        if (i < msg.length) {
            const ch = msg.charAt(i++);

            if (ch === '\n') {
                t.innerHTML += '<br>';
            } else {
                t.innerHTML += ch;
            }

            setTimeout(w, 30);
        } else {
            t.dataset.done = 1;
        }
    })();
}
