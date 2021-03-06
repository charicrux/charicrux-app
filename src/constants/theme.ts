export interface ITheme {
    palette: {
        primary: string,
        secondary: string,
        purple: string,
        red: string,
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
    grey: "#797979",
};

const theme:ITheme = {
    palette: {
        primary: "#16152F",
        secondary: "#202143",
        purple: "#6C63FF",
        red: "#FF5733",
    }, 
    theme:themePalette,
};

export { theme };