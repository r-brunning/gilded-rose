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

  it('should not allow the quality of an item to be negative', () => {
    const gildedRose = new GildedRose([new Item('normal item', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0); 
  });

  it('should ensure the quality of Aged Brie increases as it gets older', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBeGreaterThan(20);
  });

  it('should ensure the quality of an item is never more than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBeLessThanOrEqual(50);
  });

  it('should ensure the quality of Sulfuras, Hand of Ragnaros is always 80 and never decreases, and sellIn does not change', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(80);
  });  

  it('should increase quality of Backstage passes by 2 when there are 10 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(22);
  });
  
  it('should increase quality of Backstage passes by 3 when there are 5 days or less', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(23);
  });

  it('should ensure quality drops to 0 after the concert', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it('should ensure Conjured items degrade in quality by 2 before the expiry date is passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 20, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(19);
    expect(items[0].quality).toBe(8);
  });

  it('should ensure Conjured items degrade in quality by 4 after the expiry date is passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(6);
  });
});
