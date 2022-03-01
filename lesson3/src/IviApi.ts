interface ISend<T> {
    status: boolean;
    data: T;
}

export interface IGenres {
    id: number;
    title: string;
}

export interface ICategory {
    id: number;
    title: string;
    genres: IGenres[];
}

export interface ICatalog {
    description: string;
    id: number;
    poster_originals: [{ path: string }];
    synopsis: string;
    title: string;
}

export class IviApi {
    private async send<T>(url: string): Promise<ISend<T>> {
        if (url) {
            const response = await fetch(url);
            const json = await response.json();
            return {
                status: true,
                data: json.result
            }
        } else {
            return {
                status: false,
                data: null
            }
        }

    }

    async getCategory(): Promise<ICategory[]> {
        const result = await this.send<ICategory[]>('https://api.ivi.ru/mobileapi/categories/v5/?app_version=870');
        return result.data
    }

    async getCatalog(genre: number): Promise<ICatalog[]> {
        const result = await this.send<ICatalog[]>(`https://api.ivi.ru/mobileapi/catalogue/v5/?genre=${genre}&sort=pop&from=0&to=20&fields=id,title,compilation,object_type,fake,hru,poster_originals,description,synopsis&app_version=870`);
        return result.data;
    }
}
