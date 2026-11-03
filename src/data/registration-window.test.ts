import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getRegistrationWindow } from './registration-window.ts';

const openInstant = new Date('2027-02-28T23:59:59+01:00');
const closeInstant = new Date('2027-03-01T00:00:00+01:00');

const locales = ['fr', 'nl', 'en', 'de'] as const;

describe('getRegistrationWindow', () => {
  for (const locale of locales) {
    it(`is open just before the close for ${locale}`, () => {
      const reg = getRegistrationWindow(locale, openInstant);
      assert.equal(reg.isOpen, true);
      assert.equal(reg.editionLabel, '2026–2027');
      assert.equal(reg.contestPlatformUrl, `https://contest.be-oi.be/${locale}/`);
    });

    it(`is closed at the close instant for ${locale}`, () => {
      const reg = getRegistrationWindow(locale, closeInstant);
      assert.equal(reg.isOpen, false);
    });
  }

  it('formats the English end date as 28 February 2027 when closed', () => {
    const reg = getRegistrationWindow('en', closeInstant);
    assert.equal(reg.endDateLabel, '28 February 2027');
  });

  it('formats the French end date as 28 février 2027 when closed', () => {
    const reg = getRegistrationWindow('fr', closeInstant);
    assert.equal(reg.endDateLabel, '28 février 2027');
  });

  it('formats the Dutch end date as 28 februari 2027 when closed', () => {
    const reg = getRegistrationWindow('nl', closeInstant);
    assert.equal(reg.endDateLabel, '28 februari 2027');
  });

  it('formats the German end date as 28. Februar 2027 when closed', () => {
    const reg = getRegistrationWindow('de', closeInstant);
    assert.equal(reg.endDateLabel, '28. Februar 2027');
  });
});
