 export const str: string = "NEGIE1";
 const reverseStr = (str: string) => {
    const strEnd: string = str.substring(str.length - 1)
    const splitStr = str.split("").slice(0, str.length - 1).reverse().concat(strEnd).join("");
    return console.log(splitStr.toString())
}

reverseStr(str)

const sentence: string = "Saya sangat senang mengerjakan soal algoritma"

const longest = (str: string): void => {
    const splitStr = str.split(" ")
    let result: string | undefined = "";

    for (let i: number = 0; i < splitStr.length; i++) {
        if (splitStr[i].length > splitStr[splitStr.length - 1].length) {
            result = splitStr[i]

        }

    }
    return console.log(`${result}: ${result.length} character `)
}

longest(sentence)

const INPUT: string[] = ['xc', 'dz', 'bbb', 'dz']
const QUERY: string[] = ['bbb', 'ac', 'dz']


const hitungTampil = (inputArr: string[], queryArr: string[]) => {
    let result: number[] = [];
    for (let i = 0; i < queryArr.length; i++) {
        let counter = 0;
        for (let j = 0; j < inputArr.length; j++) {
            if (queryArr[i] == inputArr[j]) {
                counter = counter + 1
            }
        }
        result.push(counter)
    }

    return console.log(result)

}

hitungTampil(INPUT, QUERY)


const matrix: number[][] = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

const penguranganMatrix = (matrix: number[][]): number => {
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][matrix.length - i - 1];
    }

    return diagonal1 - diagonal2;
}
console.log(penguranganMatrix(matrix));

