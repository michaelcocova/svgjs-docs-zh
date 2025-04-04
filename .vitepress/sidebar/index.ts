
import { DefaultTheme } from 'vitepress'
import advanced from './advanced.ts'
import animating from './animating.ts'
import containerElements from './container-elements.ts'
import elements from './elements.ts'
import introduction from './introduction.ts'
import other from './other.ts'

export default {
    "/": [...introduction, ...containerElements, ...elements, ...animating, ...advanced, ...other]
} satisfies DefaultTheme.Sidebar