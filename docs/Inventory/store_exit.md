---
sidebar_position: 2
sidebar_label: "Store Exit"
---

# Store Exit

This module is use to keep track of the products that are leaving the store.

1. Checks for the availability of the product in the **_/bpl_storentrance_** table using the barcode and returns false if it's not found. Otherwise, it displays the details of the product (product name and weight)
2. Changes the product's status with that barcode in the **_/bpl_storeentrance_** table to Exited and inserts the product's details to the **_/bpl_storeexit_** table.
3. Reduces the product quantity and its equivalent weight from the BPL Stock report But removes the row from the BPL stock table if the initial quantity is equal to 1.

## This Module consist of the following fields
