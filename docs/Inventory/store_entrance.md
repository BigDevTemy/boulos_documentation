---
sidebar_position: 1
sidebar_label: "Store Entrance"
---

# Store Entrance

This is where all the products which has been exited from the factory will be scanned to.


## More Explanation
```
- After a product has been produced from the factory, it has to be moved or exited from the factory to the store.  

This module (STORE ENTRANCE) is created to track the number of the products that are entering the store.
```

## Navigation Button

```
    - View Entries

    - Save

```

## Field Description

The Store Entrance Modules Contains the following Fields

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

    The store entrance table name is `bpl_storeentrance`.

### Table structure

```
DROP TABLE IF EXISTS `bpl_storeentrance`;
CREATE TABLE IF NOT EXISTS `bpl_storeentrance` (
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



    