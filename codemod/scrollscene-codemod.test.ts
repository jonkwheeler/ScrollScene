import { describe, expect, it } from 'vitest'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const { transformSource } = require('./scrollscene-codemod.js')

describe('scrollscene-codemod', function() {
  it('rewrites new ScrollScene to createScrollScene', function() {
    const input =
      "import { ScrollScene } from 'scrollscene'\nconst x = new ScrollScene({ triggerElement: el })\nx.Scene.on('enter', fn)\n"
    const out = transformSource(input)
    expect(out).toContain('createScrollScene')
    expect(out).not.toContain('new ScrollScene')
    expect(out).toContain('x.scene.on')
    expect(out).not.toContain('x.Scene')
  })

  it('rewrites new ScrollObserver imports and constructors', function() {
    const input =
      "import { ScrollObserver } from '../ScrollObserver'\nconst o = new ScrollObserver({ triggerElement: el })\n"
    const out = transformSource(input)
    expect(out).toContain('createScrollObserver')
    expect(out).not.toContain('new ScrollObserver')
  })

  it('is idempotent on already-migrated code', function() {
    const input =
      "import { createScrollScene } from 'scrollscene'\nconst x = createScrollScene({ triggerElement: el })\nx.scene.on('enter', fn)\n"
    expect(transformSource(input)).toBe(input)
  })

  it('does not rewrite scrollMagic.Controller class access', function() {
    const input = "const c = new scrollMagic.Controller()\nconst s = new scrollMagic.Scene()\n"
    expect(transformSource(input)).toBe(input)
  })

  it('rewrites ScrollMagicSsr to ScrollMagic and dedupes imports', function() {
    const input =
      "import { ScrollMagicSsr } from 'scrollscene'\nconst SM = ScrollMagicSsr\n"
    const out = transformSource(input)
    expect(out).toContain("import { ScrollMagic } from 'scrollscene'")
    expect(out).toContain('const SM = ScrollMagic')
    expect(out).not.toContain('ScrollMagicSsr')

    const both =
      "import { ScrollMagic, ScrollMagicSsr } from 'scrollscene'\n"
    expect(transformSource(both)).toBe("import { ScrollMagic } from 'scrollscene'\n")
  })
})
