var cards = document.querySelector(".cards_games_list")
var listGames= [
    {
        "nome": "Don't Starve Together",
        "url_image": "https://upload.wikimedia.org/wikipedia/en/d/d2/Don%27t_Starve_cover.jpg",
        "dispositivos":[
            'fa-steam', 'fa-windows', 'fa-linux', 'fa-apple'
        ],
        "lojas":[
            {
                "nome": "Nuuvem",
                "preco": "09,51",
                "url_game_loja":"https://www.nuuvem.com/br-pt/item/dont-starve-together",
                "url_logo":"https://asset.brandfetch.io/idDzb5HIaZ/id35ff2Z_f.svg"
            },{
                "nome": "Green man gaming",
                "preco": "25,19",
                "url_game_loja":"https://www.greenmangaming.com/games/dont-starve-together-pc/",
                "url_logo": ""
            },{
                "nome": "Steam",
                "preco": "20,69",
                "url_game_loja":"https://store.steampowered.com/app/219740/Dont_Starve/",
                "url_logo":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png"
            }
        ],
        "descricao":"Don't Starve é um jogo eletrônico de ação-aventura com elementos de sobrevivência e roguelike desenvolvido e publicado pela Klei Entertainment. O jogo foi inicialmente lançado através do software Steam da Valve Corporation para Microsoft Windows, Linux e OS X no dia 23 de abril de 2013.",
        "personages":[
            {
                "nome":"Wilson",
                "url_image":'https://steamuserimages-a.akamaihd.net/ugc/757095817927234527/7AF93849222BE80F1CFFC59B3F44583D14705054/',
                "url_pag":"https://dontstarve.fandom.com/pt/wiki/Wilson"
            },
            {
                "nome":"Willow",
                "url_image":'https://steamuserimages-a.akamaihd.net/ugc/757095817927328702/DFA42256101CCF4EDE486FF27FF381A7A6557EC4/',
                "url_pag":"https://dontstarve.fandom.com/pt/wiki/Willow"
            },
            {
                "nome":"Wendy",
                "url_image":'https://steamuserimages-a.akamaihd.net/ugc/757095817927346410/6F54BBE9856CA78AEE4AB0AE2CDA2C6EEBD56DC4/',
                "url_pag":"https://dontstarve.fandom.com/pt/wiki/Wendy"
            },
            {
                "nome":"Wigfrid",
                "url_image":'https://steamuserimages-a.akamaihd.net/ugc/757095817927385895/54AC06824ACD7B2B22BF45B6753FCA725C0F5429/',
                "url_pag":"https://dontstarve.fandom.com/pt/wiki/Wigfrid"
            }
        ],
        "categorias":['Sobrevivência', 'Aventura', 'Indie'],
        "empresa": {
            "nome":"Klei",
            "url_empresa":"https://store.steampowered.com/franchise/klei"
        }
    }
]
console.log("carregando")
for(let i = 0;i < listGames.length;i++){
    let dispo = 0;
    let categorias = 0;
    var persons = 0;
    listGames[i].lojas.forEach((loja) => {
        cards.innerHTML +=`
        <div class="card_face">
            <div class="card_game">
                <div class="card_image">
                    <img src="${listGames[i].url_image}" alt="${listGames[i].nome}">
                </div>
                <div class="card_content">
                    <button id="btn_hidden_back"><span>${listGames[i].nome} <i class="fa-solid fa-arrow-right"></i></span></button>
                    <ul id="card_content_dispositivos_${dispo}">
                    </ul>
                </div>
                <div class="card_price">
                    <a href="${loja.url_game_loja}" target="_blank"><input type="button" value="R$ ${loja.preco}"></a>
                    <span class="card_price_store">
                        <img src="${loja.url_logo}" alt="${loja.nome}">
                        <p>${loja.nome}</p>
                    </span>
                </div>
            </div>
            <div class="card_back">
                <div class="card_back_content">
                    <h3>Sobre</h3>
                    <p>${listGames[i].descricao}</p>
                </div>

                <div class="card_back_persons">
                    <ul id="card_back_persons_${persons}">
                    
                    </ul>
                </div>

                <div class="card_back_categoria">
                    <ul id="card_back_categoria_${categorias}">
                    </ul>
                </div>
                <div class="card_back_confir">
                    <a href="${listGames[i].empresa.url_empresa}" target="_blank">Confira tudo de ${listGames[i].empresa.nome} no Steam</a>
                </div>
                
                <div class="card_back_btn">
                    <button id="btn_hidden_front"><span><i class="fa-solid fa-arrow-left"></i> ${listGames[i].nome}</span></button>
                </div>
            </div>
        </div>
        `
        
        for(let disp = 0;disp < listGames[i].dispositivos.length;disp++){
            const dispositivos = document.querySelector(`#card_content_dispositivos_${dispo}`)
            dispositivos.innerHTML += `<li><i class="fa-brands ${listGames[i].dispositivos[disp]}"></i></li>`
        }

        listGames[i].personages.forEach((personagem) => {
            const personagenss = document.querySelector(`#card_back_persons_${persons}`)
            personagenss.innerHTML += `<li><a href="${personagem.url_pag}" target="_blank"><img src="${personagem.url_image}" alt="${personagem.nome}"></a></li>`
        });

        for(let cat = 0;cat < listGames[i].categorias.length;cat++){
            const categoriass = document.querySelector(`#card_back_categoria_${categorias}`)
            categoriass.innerHTML += `<li>${listGames[i].categorias[cat]}</li>`
        }
        dispo++;
        persons++;
        categorias++
    });
}


