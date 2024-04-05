export type Proyecto = {
    id: string,
    nombre: string,
    intro: string,
    preview: string,
    web: string,
    repositorio?: {textlink: string, url: string}[],
    descripcion: string,
    tecnologiasIntro: Array<string>
    tecnologias: Array<string>,
}