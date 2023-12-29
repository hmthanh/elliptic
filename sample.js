let EC = require("elliptic").ec

// Create and initialize EC context
// (better do it once and reuse it)
let ec = new EC("secp256k1")

// Generate keys
let key = ec.genKeyPair()

// Sign the message's hash (input must be an array, or a hex-string)
let msgHash = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let signature= key.sign(msgHash)
console.log(signature.toDER())

// Export DER encoded signature in Array
let derSign = signature.toDER()

// // Verify signature
// console.log(key.verify(msgHash, derSign))

// // CHECK WITH NO PRIVATE KEY

// let pubPoint = key.getPublic()
// let x = pubPoint.getX()
// let y = pubPoint.getY()

// // Public Key MUST be either:
// // 1) '04' + hex string of x + hex string of y; or
// // 2) object with two hex string properties (x and y); or
// // 3) object with two buffer properties (x and y)
// let pub = pubPoint.encode("hex", true) // case 1
// // pub = { x: x.toString("hex"), y: y.toString("hex") } // case 2
// // pub = { x: x.toBuffer(), y: y.toBuffer() } // case 3
// // pub = { x: x.toArrayLike(Buffer), y: y.toArrayLike(Buffer) } // case 3

// // Import public key
// let pubkey = ec.keyFromPublic(pub, "hex")

// // Signature MUST be either:
// // 1) DER-encoded signature as hex-string; or
// // 2) DER-encoded signature as buffer; or
// // 3) object with two hex-string properties (r and s); or
// // 4) object with two buffer properties (r and s)

// let signature = "3046022100..." // case 1
// // signature = new Buffer("...") // case 2
// // signature = { r: "b1fc...", s: "9c42..." } // case 3

// // Verify signature
// console.log(key.verify(msgHash, signature))
