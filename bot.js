export const start = () => console.log("Au Beep Au Boop");
export const ready = () => console.log('Ready!');

export const getAnswer = message => {
    if (message === 'ping') {
        return ping();
    } else if (message.match(/^o(i|la)|boas?$/i)) {
        return hello();
    } else if (message.startsWith("!magic8")) {
        return magic8();
    } else if (message.includes('outplayed')) {
        return outplayed();
    }
};

// possible answer functions
const ping = () => {
    return "pong";
};

const hello = () => {
    return "Hello";
};

const magic8 = () => {
    const replies = [
        "Definitivamente!",
        "Não vás por aí...",
        "Não prevejo um futuro muito brilhante",
        "Segue o coração das cartas",
        "É melhor não te responder agora",
        "Pensa por ti e decide!",
        "Sim",
        "Não"
    ];

    let i = Math.floor(replies.length * Math.random());
    let reply = replies[i];
    return reply;
};

const outplayed = () => {
    return "És um nabo/nabiça!";
};
