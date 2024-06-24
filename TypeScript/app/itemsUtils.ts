import { Item } from "./gilded-rose";

export const MIN_QUALITY = 0;
export const MAX_QUALITY = 50;

export function handleAgedBrie(item: Item) {
    if (canIncreaseValue(item)) item.quality++;
    if (item.sellIn <= 0 && canIncreaseValue(item)) item.quality++;
  }

  export function handleBackstagePasses(item: Item) {
    if (canIncreaseValue(item)) item.quality++;
    if (item.sellIn <= 10 && canIncreaseValue(item)) item.quality++;
    if (item.sellIn <= 5 && canIncreaseValue(item)) item.quality++;
    if (item.sellIn <= 0) item.quality = 0;
  }

  export function handleNormalItems(item: Item) {
    if (canDecreaseValue(item)) item.quality--;
    if (item.sellIn <= 0 && canDecreaseValue(item)) item.quality--;
  }

  export function canIncreaseValue(item: Item) {
    return item.quality < MAX_QUALITY;
  }

  export function canDecreaseValue(item: Item) {
    return item.quality > MIN_QUALITY;
  }
