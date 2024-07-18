

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  basePath: '/database',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
