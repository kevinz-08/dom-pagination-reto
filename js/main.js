const API_URL = 'https://dattebayo-api.onrender.com/characters';

const characters_per_page = 4;
const total_characters = 20;
const total_pages = Math.ceil(total_characters/characters_per_page)

const fetchCharacters = async (page = 1) => {
    try {
        const response = await fetch('https://dattebayo-api.onrender.com/characters')
        const data = await response.json()
        const characters = data.slice(0, 20);

        const start = (page - 1) * characters_per_page;
        const end = page * characters_per_page;
        return characters.slice(start, end);

    } catch (error) {
        console.error(error); return [];
    }
    
}