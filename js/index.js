function squareEquation() {
var a=document.form.znach1.value;
var b=document.form.znach2.value;
var c=document.form.znach3.value;
var d = b * b - 4 * a * c;
var x1,x2;

    if (d > 0) {
        x1 = (- b + Math.sqrt(d)) / (2 * a);
        x2 = (- b - Math.sqrt(d)) / (2 * a);
        document.form.text.value=x1;
        document.form.text1.value=x2;
    }
    if (d === 0) {
        x1 = (- b + Math.sqrt(d)) / (2 * a);
        x2 = (- b + Math.sqrt(d)) / (2 * a);
        document.form.text.value=x1;
        document.form.text1.value=x2;
    }
    if (d < 0) {
        document.write('недійсна');
    }
 }
 