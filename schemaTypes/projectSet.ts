import { defineType } from 'sanity'
import { FolderIcon } from '@sanity/icons'

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
      validation: (rule: any) => rule.required()
    },
    {
      name: 'fallbackProjectTypeLabel',
      title: 'Fallback Project-Type Label',
      type: 'string',
      description: `
        For example, "Feature" for the Narrative project set. This label
        will be used if you don't set a project type on a specific project.
      `,
      validation: (rule: any) => rule.required()
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title }) {
      return {
        title,
        media: FolderIcon
      }
    }
  }
})
