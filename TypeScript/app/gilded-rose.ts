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
      if (item.name === 'Sulfuras, Hand of Ragnaros') continue;

      if (item.name === 'Aged Brie' || item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.canIncreaseValue(item) && item.quality++;

        if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          item.sellIn < 11 && this.canIncreaseValue(item) && item.quality++;
          item.sellIn < 6 && this.canIncreaseValue(item) && item.quality++;
        }
      } else {
        this.canDecreaseValue(item) && item.quality--;
      }

      item.sellIn -= 1;

      if (item.sellIn < 0) {
        if (item.name === 'Aged Brie') {
          this.canIncreaseValue(item) && item.quality++;
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          item.quality = 0;
        } else if (this.canDecreaseValue(item)) {
          item.quality--;
        }
      }
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
