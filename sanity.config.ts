import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'
import {PresentationIcon, CogIcon, UserIcon} from '@sanity/icons'

const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore"
])

const singletonTypes = new Set([
  "about",
  "reel",
  "settings"
])

const hiddenDocumentTypes = new Set([
  "projectSet"
])

export default defineConfig({
  name: 'default',
  title: 'drewaiello.com CMS',

  projectId: 'oqzk4lvk',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([

            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Settings")
              .id("settings")
              .icon(CogIcon)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("settings")
                  .documentId("2056a8f6-5dc4-49ec-9f1e-6f67e51a0236")
                  .title('Settings')
              ),
            S.listItem()
              .title("Reel")
              .id("reel")
              .icon(PresentationIcon)
              .child(
                S.document()
                  .schemaType("reel")
                  .documentId("7a71c716-9502-4ce6-8a03-5e56cdf5c7a5")
                  .title('Reel')
              ),
            S.listItem()
              .title("About")
              .id("about")
              .icon(UserIcon)
              .child(
                S.document()
                  .schemaType("about")
                  .documentId("bec7189e-36af-4acc-af7f-672dab53f11f")
                  .title('About')
              ),
            S.divider(),

            // Remaining document types
            ...S.documentTypeListItems().filter(
              listItem =>
                !(new Set([
                  ...singletonTypes,
                  ...hiddenDocumentTypes
                ]).has(listItem.getId() as string))
            )
          ]),
    }),
    visionTool(),
    colorInput()
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
