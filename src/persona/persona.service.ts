import { Injectable } from '@nestjs/common';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonaService {
    /** Local persona list. */
    private personaList: Persona[] = []

    /**
     * Return a persona list.
     */
    public getPersonaList(): Persona[] {
        return this.personaList;
    }

    /**
     * Insert a persona.
     */
    public postPersona(persona: Persona): Persona[] {
        this.personaList = [...this.personaList, persona];
        return this.personaList;
    }

    /**
     * Update a persona.
     */
    public updatePersona(persona: Persona): Persona[] {
        this.personaList
            .forEach((x) => {
                if (x.id === persona.id) {
                    x = { ...persona }
                }
            });

        return this.personaList;
    }

    /**
     * Delete a persona.
     */
    public deletePersona(id: string): Persona[] {
        this.personaList = this.personaList.filter((x) => id !== x.id.toString());
        return this.personaList;
    }
}
