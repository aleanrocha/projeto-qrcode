const qrContainer = document.querySelector("#container")
const qrText = document.querySelector("#qr-form input")
const qrBtn = document.querySelector("#qr-form button")
const qrImg = document.querySelector("#qr-code img")

// Funções

async function getQr() {
  const qrTextValue = qrText.value
  const qrURL =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrTextValue}`
  const response = await fetch(qrURL)
  const qrUrlImage = response.url
  qrImg.setAttribute("src", `${qrUrlImage}`)
  qrImg.addEventListener("load", () => {
    qrContainer.classList.add("active")
    qrBtn.textContent ="Código gerado!"
  })
}

function genereteQr() {
  if (!qrText.value) {
    alert("⚠️ Por favor, Digite a URL ou texto!")
    return
  }
  qrBtn.textContent = "Gerando código..."
  getQr()
}

// Eventos

qrBtn.addEventListener("click", genereteQr)
qrText.addEventListener("input", () => qrBtn.textContent =" Gerar QRcode")
qrText.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && qrBtn.textContent !== "Código gerado!") genereteQr()
})
qrText.addEventListener("keyup", () => {
  if (!qrText.value) {
    qrContainer.classList.remove("active")
    qrBtn.textContent =" Gerar QRcode"
  }
})