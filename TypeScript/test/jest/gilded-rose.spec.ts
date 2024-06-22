import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should decrease sellIn and quality for normal items by one', () => {
    const gildedRose = new GildedRose([new Item('normal item', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('normal item');
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it('should decrease sellIn and quality for normal items by two once sell by date is passed', () => {
    const gildedRose = new GildedRose([new Item('normal item', 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('normal item');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(18);
  });
});
