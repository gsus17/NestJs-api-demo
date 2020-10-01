import { Injectable } from '@nestjs/common';
import { Country } from './entities/country.entity';

@Injectable()
export class PaisesService {

    /** Local Country list. */
    private countryList: Country[] = []

    /**
     * Return a country list.
     */
    public getCountryList(): Country[] {
        return this.countryList;
    }

    /**
     * Insert a Country.
     */
    public postCountry(country: Country): Country[] {
        this.countryList = [...this.countryList, country];
        return this.countryList;
    }

    /**
     * Update a Country.
     */
    public updateCountry(country: Country): Country[] {
        this.countryList
            .forEach((x) => {
                if (x.id === country.id) {
                    x = { ...country }
                }
            });

        return this.countryList;
    }

    /**
     * Delete a Country.
     */
    public deleteCountry(id: string): Country[] {
        this.countryList = this.countryList.filter((x) => id !== x.id);
        return this.countryList;
    }
}
