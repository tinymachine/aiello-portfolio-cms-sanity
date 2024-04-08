export default {
  name: 'about',
  title: 'About',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: `
        The heading that appears above the About section.
      `,
      validation: (rule: any) => rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'text',
          rows: 2,
          validation: (rule: any) => rule.required()
        }
      ]
    },
    {
      name: 'email_button',
      title: 'Email',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Email Address',
          type: 'email',
          validation: (rule: any) => rule.custom((value: any) => 
            (rule.valueOfField('label') && value === undefined)
              ? 'The label below will not appear without entering an email address.'
              : true
          ).warning()
        },
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          description: `E.g. 'Email me'`,
          validation: (rule: any) => rule.custom((value: any) =>
            (rule.valueOfField('address') && value === undefined)
              ? 'This field cannot be empty.'
              : true
          )
        }
      ]
    },
    {
      name: 'social_links',
      title: 'Social Links',
      type: 'array',
      of: [{
          name: 'inline',
          title: 'Social Link',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule: any) => rule.required()
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule: any) => rule.required()
            }
          ]
      }]
    },
    {
      title: 'Bio', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    }
  ]
}