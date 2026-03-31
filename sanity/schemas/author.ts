import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Autori',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nume',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagine',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Text Alternativ',
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Biografie',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'role',
      title: 'Rol',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
