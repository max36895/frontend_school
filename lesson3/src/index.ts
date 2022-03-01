import {IviApi, ICategory, IGenres, ICatalog} from "./IviApi";


const ivi = new IviApi;


let selectedCategory = 0;
let selectedGenre = 0;
let categories: ICategory[];

const categoryEl = document.getElementById('category') as HTMLSelectElement;
const genreEl = document.getElementById('genre') as HTMLSelectElement;

function addSelectionValue(el: HTMLSelectElement, items: ICategory[] | IGenres[]): void {
    if (el) {
        el.innerHTML = '';
        items.forEach((item, index) => {
            const option = document.createElement('option');
            option.value = index.toString();
            option.innerText = item.title;
            el.add(option);
        });
    }
}


ivi.getCategory().then((items) => {
    categories = items;
    addSelectionValue(categoryEl, items);
    addSelectionValue(genreEl, items[0].genres);
    getFilms();
})

categoryEl.onchange = (e) => {
    // @ts-ignore
    selectedCategory = e.target.value;
    addSelectionValue(genreEl, categories[selectedCategory].genres);
    selectedGenre = 0;
    getFilms();
}
genreEl.onchange = (e) => {
    // @ts-ignore
    selectedGenre = e.target.value;
    getFilms();
}

function getFilms() {
    const genre: number = categories[selectedCategory].genres[selectedGenre].id;
    ivi.getCatalog(genre).then((items: ICatalog[]) => {
        const card = document.getElementById('card');
        const container = document.getElementById('content');
        container.innerHTML = '';
        items.forEach((item) => {
            const filmCard = document.createElement('div');
            filmCard.innerHTML = card.innerHTML;
            filmCard.classList.add('card');
            filmCard.querySelector('.card_image').setAttribute('src', item.poster_originals[0].path);
            filmCard.querySelector('.card_title').innerHTML = item.title;
            filmCard.querySelector('.card_description').innerHTML = item.synopsis;
            filmCard.querySelector('.card_link').setAttribute('href', `https://www.ivi.ru/watch/${item.id}`)
            container.append(filmCard);
        })

    })
}
