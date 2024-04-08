import {defineType} from 'sanity'

export default defineType({
  name: 'projectSet',
  title: 'Project Set',
  type: 'document',
  description: `Groupings of projects.`,
  fields: [
    {
      name: 'heading',
      title: 'Title',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'fallbackProjectTypeLabel',
      title: 'Fallback Project-Type Label',
      type: 'string',
      description: `
        For example, "Feature" for the Narrative project set. This label
        that will appear on if you don't set a project type on a specific project.
      `,
      validation: (rule: any) => rule.required(),
    },
  ]
})