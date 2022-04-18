import { ICatalog, ICategories, IData, IviApi } from "./IviApi";


export class Application {

    private _ivi: IviApi;


    protected _category: HTMLSelectElement = document.getElementById('category') as HTMLSelectElement;
    protected _genre: HTMLSelectElement = document.getElementById('genre') as HTMLSelectElement;

    protected _categories: ICategories[] = [];
    protected _selectedCategory: number = 0;
    protected _selectedGenre: number = 0

    constructor () {
        this._ivi = new IviApi;
    }

    protected initSelection(selection: HTMLSelectElement, items: IData[]){
        if ( selection) {
            selection.innerHTML = '';

            items.forEach((item, index)=>{
                const option = document.createElement('option');
                option.value = index.toString();
                option.innerText = item.title;
                selection.append(option);
            })
        }
    }


    protected getCard(film: ICatalog): HTMLElement {
        const cardItem = (document.getElementById('card') as HTMLTemplateElement).content.cloneNode(true) as HTMLElement;

        (cardItem.querySelector('.card_image') as HTMLElement).setAttribute('src', film.poster_originals[0].path);
        (cardItem.querySelector('.card_title') as HTMLElement).innerText = film.title;
        (cardItem.querySelector('.card_description') as HTMLElement).innerText = film.synopsis;
        (cardItem.querySelector('.card_link') as HTMLElement).setAttribute('href',`https://www.ivi.ru/watch/${film.hru || film.id}/?utm_source=alice`);

        return cardItem;

    }

    protected async getFilms (): Promise<void> {
        const genre = this._categories[this._selectedCategory].genres[this._selectedGenre].id;
        const films = await this._ivi.getCatalog(genre);

        const content = document.getElementById('content') as HTMLElement;

        content.innerHTML = '';

        films.forEach((film)=>{
            const card = this.getCard(film);
            content.append(card);
        })

    }

    protected _categoryChange(e: Event): void {
        this._selectedCategory = +this._category.value;
        this.initSelection(this._genre, this._categories[this._selectedCategory].genres);
        this._selectedGenre = 0;
        this.getFilms();
    }

    protected _genreChange(e: Event): void {
        this._selectedGenre = +this._genre.value;

        this.getFilms();
    }

    async run(): Promise<void> {
        this._categories = await this._ivi.getCategories();
        this.initSelection(this._category, this._categories);
        this.initSelection(this._genre, this._categories[this._selectedCategory].genres);

        this._category.addEventListener('change', this._categoryChange.bind(this));

        this._genre.addEventListener('change', this._genreChange.bind(this));

        this.getFilms();
    }
}