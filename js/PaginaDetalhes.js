const produtos = [
    {
      id: 1,
      nome: "Violão Gianini",
      imagem: "https://cdn.awsli.com.br/2500x2500/125/125927/produto/257383065/0bb4f7b0-732a-11ee-8d44-3efa858c5fe9-gdhp7ipvs9.jpg" ,
      preco: 379.00,
      descricao: "Um violão acessível com qualidade excelente para iniciantes ou músicos casuais. Sonoridade clássica e conforto na hora de tocar."
    },
    {
      id: 2,
      nome: "Baixo Waldman GBW",
      imagem: "https://m.media-amazon.com/images/I/51-izE89FmL.jpg" ,
      preco: 967.00,
      descricao: "Um baixo robusto com timbre poderoso e design moderno. Ideal para quem busca versatilidade em diversas estilos musicais."
    },
    {
      id: 3,
      nome: "Guitarra Fender",
      imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_e9_GSLVWR-ii3egOvmOy4kFkiVeU0VAefPIf9a8pItj7Qm3JYrWQ50-1CYUhCvgqDFyopjSS8VTgT6UMCOATe2CqC7QGDqhJb98dBtNO&usqp=CAE" ,
      preco: 818.00,
      descricao: "A lendária Fender com som limpo e alta performance. Perfeita para músicos que buscam um instrumento clássico e confiável."
    },
    {
      id: 4,
      nome: "Saxofone Yamaha",
      imagem: "https://cdn.discordapp.com/attachments/866817560774967297/1290482600766607440/D_NQ_NP_800805-CBT77465025669_072024-O.png?ex=66fd47d4&is=66fbf654&hm=9d26695d916fd2cf7e3948442a5952fc34099693b2146821241e563b497c87db&" ,
      preco: 1290.00,
      descricao: "Sonoridade rica e afinação impecável, perfeito para jazz, blues e música clássica. A Yamaha oferece durabilidade e precisão."
    },
    {
      id: 5,
      nome: "Kit Bateria Premium",
      imagem: "https://media.discordapp.net/attachments/866817560774967297/1290483148890832968/D_NQ_NP_778582-MLB78435888263_082024-O.png?ex=66fd4856&is=66fbf6d6&hm=e4bf0b697f90bb9824567a4bf3269a53cf603d5c09f3abfd938ee638f05f2390&=&format=webp&quality=lossless&width=625&height=552" ,
      preco: 1976.00,
      descricao: "Um kit completo e profissional, ideal para bateristas que procuram qualidade superior em cada batida. Som potente e componentes resistentes."
    },
    {
      id: 6,
      nome: "Clarinete NY 800",
      imagem: "https://cdn.discordapp.com/attachments/866817560774967297/1290483695589003357/shopping.png?ex=66fd48d9&is=66fbf759&hm=28419ef92e0687d36d99c0c4eea3b0d1e8faa9239850c0d800adca039538ae29&" ,
      preco: 1113.00,
      descricao: "Clarinete com excelente projeção de som e construção sólida. Uma escolha ideal tanto para estudantes quanto para músicos avançados."
    },
    {
      id: 7,
      nome: "Mesa de Mixagem",
      imagem: "https://cdn.discordapp.com/attachments/866817560774967297/1290483941484003408/D_NQ_NP_845393-MLM51667780835_092022-O.png?ex=66fd4913&is=66fbf793&hm=79581135201d20686c6a562cdb85f39b8e1a8d5dff1c7e3f090983d42f3f873e&" ,
      preco: 6299.00,
      descricao: "Com qualidade de estúdio e múltiplas entradas, esta mesa oferece controle total sobre suas mixagens. Ideal para gravações e apresentações ao vivo."
    },
    {
      id: 8,
      nome: "Microfone Dinâmico Samson",
      imagem: "https://cdn.discordapp.com/attachments/866817560774967297/1290484528594288751/D_NQ_NP_2X_959414-MLU77915047424_082024-F.png?ex=66fd499f&is=66fbf81f&hm=1aecf08538b73e7cf618f00ce0f579cae870affc02d874a445cac1aafbfe3851&" ,
      preco: 899.00,
      descricao: "Captação de som clara e precisa, ideal para vocalistas e palestrantes. Compacto, durável e com excelente custo-benefício."
    },
    {
      id: 9,
      nome: "Kalimba 17 Teclas",
      imagem: "https://cdn.discordapp.com/attachments/866817560774967297/1290486806386704494/1366691194e5353f95d.png?ex=66fd4bbe&is=66fbfa3e&hm=9ead88fdd2590b3b5d7ef322053285d1df1331ebf5d3a2e8e6f832e2df1335ce&" ,
      preco: 53.00,
      descricao: "Um instrumento portátil e divertido com som suave e melódico. Ótimo para relaxar ou adicionar um toque especial às suas composições."
    }
  ];
function carregarProduto(){
  var elemento = document.getElementById('vitrine')
  produtos.forEach(produto => {
    const novadiv = document.createElement('div')
    novadiv.classList.add ("produto")
    novadiv.innerHTML += `
      <h2>${produto.nome}</h2>
      <img src="${produto.imagem}" alt="${produto.nome}">
      <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      <button id = "botaoComprar">Comprar</button>`
  
    elemento.appendChild(novadiv)
    const botao = document.getElementById('botaoComprar')
    botao.addEventListener("click", function(){
      comprarProduto(produto.id)
    })
  })
}
function comprarProduto(id){
  console.log("Comprou o produto com id", id)
}
document.addEventListener("DOMContentLoaded", () => carregarProduto())
