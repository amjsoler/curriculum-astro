import type Tecnologia from "./Tecnologia.ts";

export default interface Experiencia {
    empresa: string,
    duracion: string,
    descripcion: string,
    tecnologias: Array<Tecnologia>
}