
export interface IRequest {
    status: boolean;
    data: any;
}

export interface IData {
    id: number;
    title: string;
}

export interface IPoster {
    path: string;
}

export interface ICatalog {
    hru?: string;
    description: string;
    id: number
    object_type: string;
    poster_originals: IPoster[];
    synopsis: string;
    title: string;
}

export interface IGenres extends IData {

}


export interface ICategories extends IData {
    genres: IGenres[]
}


export class IviApi {

    protected async _send (url: string): Promise<IRequest> {
        try {
        const responce = await fetch(url);
        const json = await responce.json();

        return {
            status: true,
            data: json.result
        };
        } catch {
            return {
                status: false,
                data: null
            };
        }
    }

     async getCategories(): Promise<ICategories[]> {
         const result = await this._send('https://api.ivi.ru/mobileapi/categories/v5/?app_version=870');

         return result.data;
     }

     async getCatalog(genre: number): Promise<ICatalog[]> {
         const result = await this._send(`https://api.ivi.ru/mobileapi/catalogue/v5/?genre=${genre}&sort=pop&from=0&to=99&fields=id,title,compilation,object_type,fake,hru,poster_originals,description,synopsis&app_version=870`);
         return result.data;
     }
}