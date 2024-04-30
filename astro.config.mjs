import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import {defineCOnfig} from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://JhoanSLC.github.io',
});

