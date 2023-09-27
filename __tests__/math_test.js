import { expect } from "@jest/globals";
const { matemaatilisedArvutused } = require('../test');

test('matemaatilised arvutused', () => {
    expect(matemaatilisedArvutused(10, 5)).toEqual({ summa: 15, vahe: 5, jagatis: 2, korrutis: 100 });
});
