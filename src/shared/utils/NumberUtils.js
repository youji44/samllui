export const returnTwoDecimals = (elementId) => {
    var input = document.getElementById(elementId),
        countDecimals = function (value) {
            if (Math.floor(value) === value)
                return 0;

            if (value.toString().split(".")[1])
                return value.toString().split(".")[1].length || 0;

        },
        updateValue = function (val) {
            if (countDecimals(val) > 3) {
                input.value = input.getAttribute('oldValue');
            }
        };
    input.oninput = function () {
        updateValue(this.value);
        input.setAttribute('oldValue', this.value);
    }
}

export const numberIsBetween = (num1, num2, value) => value > num1 && value < num2;
export const numberIsBetweenWithequalBoundy = (num1, num2, value) => value >= num1 && value <= num2;