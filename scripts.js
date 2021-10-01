let display = document.querySelector('input[type="text"]');
let radios = document.querySelectorAll('input[type="radio"]');

let tema1 = {
    thememainbg: 'hsl(222, 26%, 31%)',
    themetogglekeypadbg: 'hsl(223, 31% , 20%)',
    themescreenbg: 'hsl(224, 36%, 15%)',
    themeresetdeletebg: 'hsl(225, 21%, 49%)',
    themeresetdeleteshadow: 'hsl(224, 28%, 35%)',
    themetoggleequalbg: 'hsl(6, 63%, 50%)',
    themeequalshadow: 'hsl(6, 70%, 34%)',
    themenumbersbg: 'hsl(30, 25%, 89%)',
    themenumbersshadow: 'hsl(28, 16%, 65%)',
    themenumberscolor: 'hsl(221, 14% , 31%)',
    themeresetdeletecolor: 'hsl(0, 0, 100%)',
    themeequalcolor: 'hsl(0, 0, 100%)',
    themecalcthemecolor: 'rgb(255, 255, 255)',
}

let tema2 = {
    thememainbg: 'hsl(0, 0%, 90%)',
    themetogglekeypadbg: 'hsl(0, 5%, 81%)',
    themescreenbg: 'hsl(0, 0%, 93%)',
    themeresetdeletebg: 'hsl(185, 42%, 37%)',
    themeresetdeleteshadow: 'hsl(185, 58%, 25%)',
    themetoggleequalbg: 'hsl(25, 98%, 40%)',
    themeequalshadow: 'hsl(25, 99%, 27%)',
    themenumbersbg: 'hsl(45, 7%, 89%)',
    themenumbersshadow: 'hsl(35, 11%, 61%)',
    themenumberscolor: 'hsl(60, 10%, 19%)',
    themeresetdeletecolor: 'hsl(0, 0, 100%)',
    themeequalcolor: 'hsl(0, 0, 100%)',
    themecalcthemecolor: 'hsl(60, 10%, 19%)',
}

let tema3 = {
    thememainbg: 'hsl(268, 75%, 9%)',
    themetogglekeypadbg: 'hsl(268, 71%, 12%)',
    themescreenbg: 'hsl(268, 71%, 12%)',
    themeresetdeletebg: 'hsl(281, 89%, 26%)',
    themeresetdeleteshadow: 'hsl(285, 91%, 52%)',
    themetoggleequalbg: 'hsl(176, 100%, 44%)',
    themeequalshadow: 'hsl(177, 92%, 70%)',
    themenumbersbg: 'hsl(268, 47%, 21%)',
    themenumbersshadow: 'hsl(290, 70%, 36%)',
    themenumberscolor: 'hsl(52, 100%, 62%)',
    themeresetdeletecolor: 'hsl(0, 0, 100%)',
    themeequalcolor: 'hsl(198, 20%, 13%)',
    themecalcthemecolor: 'hsl(52, 100%, 62%)',
}

let elementos = [
    '--thememainbg',
    '--themetogglekeypadbg',
    '--themescreenbg',
    '--themeresetdeletebg',
    '--themeresetdeleteshadow',
    '--themetoggleequalbg',
    '--themeequalshadow',
    '--themenumbersbg',
    '--themenumbersshadow',
    '--themenumberscolor',
    '--themeresetdeletecolor',
    '--themeequalcolor',
    '--themecalcthemecolor',
];

radios.forEach(radio => {
    radio.addEventListener('click', (e) => {
        let target = e.target.id;
        let check = e.target.checked;
        switch (target) {
            case 'tema-1':
                setTheme(tema1);
                break;
            case 'tema-2':
                setTheme(tema2);
                break;
            case 'tema-3':
                setTheme(tema3);
                break;

            default:
                break;
        }


    })



})


function setTheme(tema) {
    let styleTarget = document.documentElement.style;

    elementos.forEach(prop => {
        let withOutDash = prop.slice(2);
        styleTarget.setProperty(prop, tema[`${withOutDash}`]);
    })
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        display.value = "";
    }
});