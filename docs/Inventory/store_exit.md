---
sidebar_position: 2
sidebar_label: "Store Exit"
---

# Store Exit

This module basically keeps track of the products  leaving the store.

## More Explanation

- Checks for the availability of the product in the ``/bpl_storentrance`` table using the barcode and returns false if it's not found. Otherwise, it displays the details of the product (product name and weight)

- Changes the product's status with that barcode in the ``/bpl_storeentrance`` table to Exited and inserts the product's details to the ``/bpl_storeexit`` table.

- Reduces the product quantity and its equivalent weight from the BPL Stock report But removes the row from the BPL stock table if the initial quantity is equal to 1.

## Navigation Button

```
- View Entries
- Save
```

## Fields Description


The Store Exit modules contains the following fields

- User
   ````
    This is the name of the user that is entering or scanning the product to the store.  
    
    ````
- Entrance Location
    ````
    This is a list of the store locations we have in the factory. The user is meant to select the name of the store he/she is scanning the product to. As at the time of writing this documentation we have three Store locations which they can move products to, this includes (I) PM2 STORE (II) PM3 STORE (III) WASTE PAPER STORE [Click here to check the Full meaning of the abbreviation used in this write up e.g PM2](www.lecrosoft.com)  
        
    ````
- Barcode
    ````
    This alphanumeric character uniquely identifies a particular product. [Learn More](www.lecrosoft.com)
            
    ````
- Status
    ````
    This can only be in two states ( NULL or Exited ). It shows NULL if a product is newly scanned into the store entrance Table and Shows Exited if the said product has been Exited from the store.
    Additionally, it checks the database and indicate if the barcode you have entered has already been scanned to the store before. This is done to avoid double entry of a product and data redundancy.
            
    ````
- Product
    ````
    This is the name of the product that correlate with the barcode you entered in the barcode field
    ````
- Weight
    ````
    This is the weight of the product which is being scanned.

    ````
- View Entries
    ````
    This is a link in which when clicked would enable the user to view the list of product in the store.

    ````

## Table Creation And Relationship

    The store entrance table name is `bpl_storeexit`.

### Table structure

```
DROP TABLE IF EXISTS `bpl_storeexit`;
CREATE TABLE IF NOT EXISTS `bpl_storeexit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `barcode` varchar(20) CHARACTER SET utf8 NOT NULL,
  `location_id` tinyint(4) NOT NULL,
  `date` varchar(20) CHARACTER SET utf8 NOT NULL,
  `status` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `barcode` (`barcode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

```

## Table Relationship.

Its joined to `storelocations.id` table On ``location_id``

