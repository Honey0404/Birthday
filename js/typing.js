const msg = `Happy Birthday, My Love ❤️

Eight months may not seem like a long time to the world, but to me, they have been the most beautiful months of my life. Somewhere between our conversations, our laughter, and the countless moments we've shared, you became more than just a part of my life—you became my home.

You are the first thought that makes me smile in the morning and the last thought that comforts me at night. You have brought so much happiness, warmth, and meaning into my world that I cannot imagine it without you.

If I could give you one gift today, it would be the ability to see yourself through my eyes. Then you would know how deeply you are loved, how precious you are, and how grateful I am for every moment with you.

On your birthday, I don't just celebrate the day you were born—I celebrate the day the world was blessed with someone who would one day become my greatest blessing.

I love you more than words will ever be able to explain, and with every passing day, that love only grows stronger.

Happy Birthday, my beautiful girl.

Forever yours ❤️

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