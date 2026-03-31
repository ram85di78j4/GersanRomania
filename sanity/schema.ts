import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project'
import article from './schemas/article'
import category from './schemas/category'
import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, article, category, author],
}
