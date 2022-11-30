var dataRef = new Firebase('https://padaria-29216-default-rtdb.firebaseio.com/')

dataRef.on('value', function (snapshot) {
  var t = snapshot.val()
  var count = 0

  for (var key in t) {
    var valor = t[key]

    console.log('chave', key)
    console.log('valor', valor)

    if (key === 'funcionarios') {
      var _itemsKey = Object.entries(valor)

      count++

      for (const [key2, value2] of _itemsKey) {
        $('#tbFuncionarios tbody').append(
          `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.telefone}</td> +
    
                        <td>${value2.cargo}</td> +

                        <td>${value2.email}</td> +
    
                    </tr>`
        )
      }
      
    }

    if (key === 'produtos') {
      var _itemsKey = Object.entries(valor)

      count++

      for (const [key2, value2] of _itemsKey) {
        $('#tbProdutos tbody').append(
          `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.nome}</td> +
    
                        <td>${value2.tamanho}</td> +
    
                        <td>${value2.preço}</td> +
    
                    </tr>`
        )
      }
      
    }
  }
})
