document.addEventListener('DOMContentLoaded', () => {
const container = document.getElementById("lista-pokemones");



const fetchPosts = async () =>{
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        
        console.log(response.data.results);
        const listaDePokemones= response.data.results;
       
        listaDePokemones.forEach((post)=> {
            
            const element = document.createElement("ul");
            element.textContent ="NOMBRE DEL POKEMON: " + post.name;
            container.appendChild(element);
        });
       
    } catch (error) {
        console.log(error.console);
    }
};

    fetchPosts();
});