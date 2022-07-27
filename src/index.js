function toReadable (number) {
    const arr = Array.from(String(number), Number);
    const len = arr.length;
    let readableString ='';
    switch (len) {
        case 3:
            
            break;
        case 2:
            switch (arr[len-2] == 1) {
                case 0:
                    readableString += 'ten';
                    break;
                case 1:
                    readableString += 'eleven';
                    break;
                case 2:
                    readableString += 'twelve';
                    break;
                case 3:
                    readableString += 'thirteen';
                    break;
                case 4:
                    readableString += 'fourteen';
                    break;
                case 5:
                    readableString += 'fivteen';
                    break;
                case 6:
                    readableString += 'sixteen';
                    break;
                case 7:
                    readableString += 'seventeen';
                    break;
                case 8:
                    readableString += 'eighteen';
                    break;
                case 9:
                    readableString += 'nineteen';
                    break;
            }
            return readableString;
            break;
    }
        switch (arr[len-1]) {
            case 0:
                if (len == 1)
                    readableString = 'zero';
                break;
            case 1:
                readableString += 'one';
                break;
            case 2:
                readableString += 'two';
                break;
            case 3:
                readableString += 'three';
                break;
            case 4:
                readableString += 'four';
                break;
            case 5:
                readableString += 'five';
                break;
            case 6:
                readableString += 'six';
                break;
            case 7:
                readableString += 'seven';
                break;
            case 8:
                readableString += 'eight';
                break;
            case 9:
                readableString += 'nine';
                break;
        
        }            

    //return arr;
    return readableString;
}

console.log(toReadable(11));
