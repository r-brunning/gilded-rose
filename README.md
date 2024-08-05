# Gilded Rose Refactoring Exercise

## Introduction

This is my response to the Gilded Rose Kata. The task was to help a small inn manage its inventory by refactoring the code, adding tests, and implementing new functionality. The goal was to enhance the system's readability, maintainability, and reliability.

## Requirements

The kata requirements can be found [here](https://github.com/emilybache/GildedRose-Refactoring-Kata).

## Implementation

1. **Initial Testing**: Added tests for the existing code before refactoring to ensure stability.
2. **Refactored Code**:
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

   - **Switch Statement**: Updated to enhance readability.
   - **Item Name Constants**: Used constants for item names to improve maintainability and prevent errors.
   - **For-Of Loop**: Updated to improve readability.
   - **Helper Functions**: Extracted logic into `itemsUtils` for maintainability.
   - **Quality Checks**: Simplified conditionals using helper methods for quality range checks.
   - **Sulfuras Handling**: Clarified logic to ensure quality remains 80 and sellIn does not change.

## TDD for New Functionality

1. **Red**: Wrote failing tests for "Conjured" items.
2. **Green**: Implemented minimal code to pass tests.
3. **Refactor**: Cleaned up the code while keeping tests green.

## How to Run

1. Clone the repository.
2. Navigate to the TypeScript directory: `cd TypeScript`
3. Install dependencies: `npm install`
4. Run the tests: `npm run test:jest`

