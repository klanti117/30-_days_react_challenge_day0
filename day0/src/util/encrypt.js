
const morseCode = new Map();
   morseCode.set("A", ".-")
   morseCode.set("B", "-...")
   morseCode.set("C", "-.-.")
   morseCode.set("D", "-..")
   morseCode.set("E", ".")
   morseCode.set("F", "..-.")
   morseCode.set("G", "--.")
   morseCode.set("H", "....")
   morseCode.set("I", "..")
   morseCode.set("J", ".---")
   morseCode.set("K", "-.-")
   morseCode.set("L", ".-..")
   morseCode.set("M", "--")
   morseCode.set("N", "-.")
   morseCode.set("O", "---")
   morseCode.set("P", ".--.")
   morseCode.set("Q", "--.-")
   morseCode.set("R", ".-.")
   morseCode.set("S", "...")
   morseCode.set("T", "-")
   morseCode.set("U", "..-")
   morseCode.set("W", ".--")
   morseCode.set("X", "-..-")
   morseCode.set("Y", "-.--")
   morseCode.set("Z", "--..")
   morseCode.set(" ", " ")
   morseCode.set("?", "?")
   morseCode.set("!", "!")
   morseCode.set(".", ".")
   morseCode.set(",", ",")

export const strToMorseCode = (str) =>{
  let value=''
  str = str.toUpperCase()
  for(let i=0;i<str.length;i++){
    value+=morseCode.get(str[i])
  }
  return value
}
