module.exports = {
mode: "jit",
content: [
"./src/*.{vue,js,css}",
],
plugins: [require("daisyui")],
daisyui: {
styled: true,
themes: true,
base: true,
utils: true,
logs: false,
rtl: false,
},
};