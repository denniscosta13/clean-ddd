import { Slug } from "./slug";

it('should be able to create a slug', () => {
    const slug = Slug.createFromText('Examplo de Título')

    expect(slug.value).toEqual('examplo-de-titulo')
})