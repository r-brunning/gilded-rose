import { handleAgedBrie, handleBackstagePasses, handleConjuredItems, handleNormalItems } from './itemsUtils';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case 'Aged Brie':
          handleAgedBrie(item);
          break;

        case 'Backstage passes to a TAFKAL80ETC concert':
          handleBackstagePasses(item);
          break;

        case 'Sulfuras, Hand of Ragnaros':
          break;

        default:
          item.name.startsWith('Conjured') ? handleConjuredItems(item) : handleNormalItems(item);
          break;
      }
      item.name !== 'Sulfuras, Hand of Ragnaros' && item.sellIn--;
    }
    return this.items;
  }
}
