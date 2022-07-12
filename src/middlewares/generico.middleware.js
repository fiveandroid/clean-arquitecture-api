const imprimir = (request, response, next) => {
  console.log(request.method, "Estamos en el middleware");
  next()
}

module.exports = imprimir