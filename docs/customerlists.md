---
sidebar_position: 3
sidebar_label: 'Customers List'
---


# Customer List

This module is used to manage new and old customers transacting with the company.  
The page defaultly loads all customers already created.

## Navigation Button

````
    New

    - This module is used to create new customers. 

    Edit

   - This section is used update existing customer information on the `bpl_customers` table.
     To activate this button, the precise customer row is highlighted and then a click on `Edit` button navigate to an Edit page where the editting can be effected.

    Delete

    - This section is used basically for customer deletion from the `bpl_customers` table.
      To activate this button, the precise customer row is highlighted and then a click on `Delete` button will pop a modal to confirm the deletion request.

````

## Field Description


- Label
   ````
    This textfield accepts customer's name.
    
    ````
- Customer
    ```
    This textfield accepts customer's name.

    ````
- Customer Type

    ````
    A dropdown Select Option for the user to pick from.
    
    Either Local or Export.
            
    ````
- Port 
    ````
    This field captures the customer's port address
            
    ````
- Email
    ````
    This field captures the customer's Email address

    ````
- Fax

    ````
    This field captures the customer's Fax number.

    ````
- Phonenumber

    ````
    This field captures the customer's Phonenumber.

    ````
- Country

    ````
    This select option dropdown provide user to select customer's country.

    ````
- Address

    ````
    This field captures the customer's Address.


    ````
- Product

    ````
    The product the customer is willingly to trade with.

    ````


## Table Creation And Relationship

    The store entrance table name is `bpl_customers`.

### Table structure

```
DROP TABLE IF EXISTS `bpl_customers`;
CREATE TABLE IF NOT EXISTS `bpl_customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(10) DEFAULT NULL,
  `customername` varchar(255) CHARACTER SET utf8 NOT NULL,
  `customerlabel` varchar(20) CHARACTER SET utf8 NOT NULL,
  `customercountry` varchar(50) CHARACTER SET utf8 NOT NULL,
  `customeraddress` text CHARACTER SET utf8 NOT NULL,
  `customertelephone` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `port` varchar(100) CHARACTER SET utf8 NOT NULL,
  `fax` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `products` json DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `customername` (`customername`),
  UNIQUE KEY `customerlabel` (`customerlabel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## Table Relationship.



