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

const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
  
  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case 'Aged Brie':
          if (this.canIncreaseValue(item)) item.quality++;
          if (item.sellIn <= 0 && this.canIncreaseValue(item)) item.quality++;
          break;
  
        case 'Backstage passes to a TAFKAL80ETC concert':
          if (this.canIncreaseValue(item)) item.quality++;
          if (item.sellIn <= 10 && this.canIncreaseValue(item)) item.quality++;
          if (item.sellIn <= 5 && this.canIncreaseValue(item)) item.quality++;
          if (item.sellIn <= 0) item.quality = 0;
          break;
  
        case 'Sulfuras, Hand of Ragnaros':
          break;
  
        default:
          if (this.canDecreaseValue(item)) item.quality--;
          if (item.sellIn <= 0 && this.canDecreaseValue(item)) item.quality--;
          break;
      }
      item.name !== 'Sulfuras, Hand of Ragnaros' && item.sellIn--;
    }
    return this.items;
  }
  
  private canIncreaseValue(item: Item) {
    return item.quality < MAX_QUALITY;
  }
  
  private canDecreaseValue(item: Item) {
    return item.quality > MIN_QUALITY;
  }
}
