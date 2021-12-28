export interface ITheme {
    palette: {
        primary: string,
        secondary: string,
    },
    theme: {
        background:string,
        secondary: string,
        icon: string,
        text: string,
        grey: string,
    },
}

const themePalette = {
    background: "#16152F",
    secondary: "#202143",
    icon: "",
    text: "#fff",
    grey: ""
};

const theme:ITheme = {
    palette: {
        primary: "#16152F",
        secondary: "#202143",
    }, 
    theme:themePalette,
};

export { theme };