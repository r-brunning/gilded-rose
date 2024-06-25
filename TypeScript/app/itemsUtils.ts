import { Item } from "./gilded-rose";

export const MIN_QUALITY = 0;
export const MAX_QUALITY = 50;

export function handleAgedBrie(item: Item) {
  if (item.sellIn > 0) {
    increaseQuality(item);
  } else {
    increaseQuality(item, 2);
  }
}

export function handleBackstagePasses(item: Item) {
  if (item.sellIn > 10) {
    increaseQuality(item);
  } else if (item.sellIn > 5) {
    increaseQuality(item, 2);
  } else if (item.sellIn > 0) {
    increaseQuality(item, 3);
  } else {
    item.quality = 0;
  }
}

export function handleNormalItems(item: Item) {
  if (item.sellIn > 0) {
    decreaseQuality(item);
  } else {
    decreaseQuality(item, 2);
  }
}

export function handleConjuredItems(item: Item) {
  if (item.sellIn > 0) {
    decreaseQuality(item, 2);
  } else {
    decreaseQuality(item, 4);
  }
}

export function increaseQuality(item: Item, amount: number = 1) {
  item.quality = Math.min(item.quality + amount, MAX_QUALITY);
}

export function decreaseQuality(item: Item, amount: number = 1) {
  item.quality = Math.max(item.quality - amount, MIN_QUALITY);
}
