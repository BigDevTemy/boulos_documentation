---
sidebar_position: 2
sidebar_label: 'Stock Remaining'
---
# Stock Remaining

This reporting module displays individual details of the available store product in stock.
The explicit details ranges from the following:

 -  Barcode Code 
 -  HardRoll Number
 -  Product
 -  Location
 -  Date Of Entrance
 -  Weight


 Additionally, this reporting module works to simplifiy the entire Stock report which is grouped by product name, and give above details to identify each.



## User Access Level.

The below user level are granted access level:
```

- Admin
- All Reports User
- B.P.L Report User
- B.P.L Production and Store User
- B.P.L Store User

```

## Field Description. 
 
   Barcode

   ```
    This field uniquely identify each product.
   ```

   HardRoll Number

   ```
    This field display HardRoll Number has created during the bpl_production.
   ```

  Product   

   ```

    This field connote the product name as created from the production.

   ```
  Location   

   ```

    This display the store location where the product is warehoused.
    
  ```

  Date Of Entrance   

   ```

    This field captures the date the product was scanned into the store.
    
   ```
   Weight   

   ```
    
    The weight of the product as initially inputted upon the product creation ** bpl_production ** is displayed on this reporting page.
    
   ```

   ## Table Creation And Relationship

    The store entrance table name is `bpl_storeentrance`.

  ## Table Relationship.

  Its joined to `storelocations.id` table On ``location_id``


 

