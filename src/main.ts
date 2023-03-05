import "./style.css";

// Color scheme as defined in settings.json
let colorScheme: { [key: string]: string } = {
    background: "#000000",
    black: "#777C7D",
    blue: "#5C83B7",
    brightBlack: "#767875",
    brightBlue: "#729FCF",
    brightCyan: "#34E2E2",
    brightGreen: "#8AE234",
    brightPurple: "#AD7FA8",
    brightRed: "#EF2929",
    brightWhite: "#EEEEEC",
    brightYellow: "#FCE94F",
    cursorColor: "#FFFFFF",
    cyan: "#06989A",
    foreground: "#FFFFFF",
    green: "#4E9A06",
    name: "VSCode WSL",
    purple: "#907295",
    red: "#DB4646",
    selectionBackground: "#F0F0F0",
    white: "#CCCCCC",
    yellow: "#C4A000",
};

// 0 black
// 1 red
// 2 green
// 3 yellow
// 4 blue
// 5 magenta
// 6 cyan
// 7 white

// prettier-ignore
let colorAliases = [
    ["foreground",          "      m  "],
    ["foreground",          "     1m  "],
    ["black",               "    30m  "],
    ["brightBlack",         "  1;30m  "],
    ["red",                 "    31m  "],
    ["brightRed",           "  1;31m  "],
    ["green",               "    32m  "],
    ["brightGreen",         "  1;32m  "],
    ["yellow",              "    33m  "],
    ["brightYellow",        "  1;33m  "],
    ["blue",                "    34m  "],
    ["brightBlue",          "  1;34m  "],
    ["purple",              "    35m  "],
    ["brightPurple",        "  1;35m  "],
    ["cyan",                "    36m  "],
    ["brightCyan",          "  1;36m  "],
    ["white",               "    37m  "],
    ["brightWhite",         "  1;37m  "],
    // ["background",          ""],
    // ["cursorColor",         ""],
    // ["name",                ""],
    // ["selectionBackground", ""],
];

function adjustColors(bg: string, fg: string): [string, string] {
    return [bg, fg];
}

function renderDemo(): string {
    let lines: [string?] = [];

    colorAliases.forEach(([fg, code]) => {
        let line: [string?] = [code];
        colorAliases.forEach(([bg, _]) => {
            if (bg === "foreground") {
                return;
            }
            let [adjustedBg, adjustedFg] = adjustColors(
                colorScheme[bg],
                colorScheme[fg]
            );
            line.push(
                `<span style='color: ${adjustedFg}; \
                background-color: ${adjustedBg}'> ●●● </span> `
            );
        });
        lines.push(line.join(""));
    });

    return lines.join("\n");
}

document.querySelector<HTMLDivElement>("#demo")!.innerHTML = `
          40m   90m   41m   91m   42m   92m   43m   93m   \
44m   94m   45m   95m   46m   96m   47m   97m
${renderDemo()}

`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
