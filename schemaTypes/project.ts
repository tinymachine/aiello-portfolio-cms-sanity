import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule: any) => rule.required()
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      description: `E.g. "Feature", "Short", "Commercial", "Music Video", etc.`,
      validation: (rule: any) => rule.optional(),
    },
    {
      name: 'director',
      title: 'Director',
      type: 'string',
      validation: (rule: any) => rule.required()
    },
    {
      name: 'colorAccent',
      title: 'Accent Color',
      type: 'color',
      description: `This sets the color of the project’s title text.`,
      validation: (rule: any) => rule.optional()
    },
    {
      name: 'clips',
      title: 'Clips',
      type: 'array',
      description: `Enter URLs for video clips.`,
      of: [
        {
          name: 'inline',
          title: 'Clip',
          type: 'url',
          validation: (rule: any) => rule.required()
        }
      ]
    },
    {
      name: 'stills',
      title: 'Stills',
      type: 'array',
      of: [
        {
          name: 'inline',
          title: 'Still',
          type: 'image',
          validation: (rule: any) => rule.required()
        }
      ]
    },
    defineField({
      name: 'featuredStill',
      title: 'Featured Still',
      type: 'image',
      description: `This will appear as the project image on the home page.`,
      validation: (rule: any) => rule.required()
    })
  ]
})