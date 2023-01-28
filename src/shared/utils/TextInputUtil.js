export const removeE = (id) => {

    var inputBox = document.getElementById(id);

    var invalidChars = [
        "-",
        "+",
        "e",
    ];

    inputBox.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    });
}


export const checkNullElement =async (id) => {
    return (document.getElementById(id) != null && document.getElementById(id) != undefined)
}