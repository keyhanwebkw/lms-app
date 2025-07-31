export function separate(num : any) {
    num += '';
    num = num.replace(',', '');
    let x = num.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y))
        y = y.replace(rgx, '$1' + ',' + '$2');

    return y + z;
}