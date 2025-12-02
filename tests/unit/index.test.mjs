import { describe, test, expect } from '@jest/globals'


describe( 'index.mjs', () => {
    test( 'exports an empty object', async () => {
        const module = await import( '../../src/index.mjs' )

        expect( module ).toBeDefined()
        expect( typeof module ).toBe( 'object' )
    } )
} )
