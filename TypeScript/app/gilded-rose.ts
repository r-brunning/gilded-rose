import { handleAgedBrie, handleBackstagePasses, handleConjuredItems, handleNormalItems, AGED_BRIE, BACKSTAGE_PASSES, SULFURAS, CONJURED_PREFIX } from './itemsUtils';
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
      switch (true) {
        case item.name === AGED_BRIE:
          handleAgedBrie(item);
          break;
  
        case item.name === BACKSTAGE_PASSES:
          handleBackstagePasses(item);
          break;
  
        case item.name === SULFURAS:
          break;
  
        case item.name.startsWith(CONJURED_PREFIX):
          handleConjuredItems(item);
          break;
  
        default:
          handleNormalItems(item);
          break;
      }
      item.name !== SULFURAS && item.sellIn--;
    }
    return this.items;
  }
}
