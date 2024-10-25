const code = "XYZ:1234-L"
function parsePartCode (codestring){
    let partcode = codestring.split (":")
    let part = partcode [1]
    let dashpart = part.split ("-")
    return {
        letters:partcode[0],
        numbers:dashpart [0],
        size:dashpart[1]
    }
}
call = parsePartCode (code)
console.log (`
    
   this is the code ${call.letters}
    ${call.numbers}
    ${call.size}
    `)