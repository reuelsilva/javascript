function compra(){

    let prod = window.prompt('Qual produto você está comprando?');
    while(prod == ''){
        prod = window.prompt('Qual produto você está comprando?');
    }

    let preco = NaN;
    while(isNaN(preco)){
        preco = Number.parseFloat(window.prompt(`Quanto custa o ${prod} que você está comprando?`));
    }

    let pag = NaN;
    while(isNaN(pag)){
        pag = Number.parseFloat(window.prompt(`Quanto pagou no ${prod} que você está comprando?`));
    }

    if(pag >= preco){
        let troco = pag - preco;
        window.alert(`Você comprou ${prod} que custou R$ ${preco.toFixed(2).replace('.', ',')}.\nDeu R$ ${pag.toFixed(2).replace('.', ',')} em dinheiro e vai receber R$ ${troco.toFixed(2).replace('.', ',')} de troco.\nVolte sempre!`);
    }else{
        window.alert(`Compra inválida!\nO valor pago é insuficiente.`);
    }
    
}