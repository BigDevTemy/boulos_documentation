---
sidebar_position: 2
sidebar_label: 'Proforma Invoice'
---

# Proforma Invoice

    This module of the software is basically used to transact with the company international customers. 
    The landing page of the software defaultly loads all proforma invoices already been worked or or created.


## Access Level.

    The access level is restricted to some users.

## Navigation Button

    - New 

        This button on click navigate to another page where the order ID is inputted for dealing.

    - Generate Proforma

        After the **order ID** is inputted , this button is clicked on to generate a form for the user to input the proforma details for the order.
    


## Field Description.

    Number
      
        This field is automatically generated upon page load.  
            
        The naming convention is formed from the customer's details with the company.

        This details is fetch from the customer's profile on **bpl_customers* table.

        For Instance profoma number BPL/GH/EVERPACK/051 means:

            BPL - Belpaprus Limited.

            GH  - Ghana (The Customer's Country)

            EVERPACK - Customer's name.

            051 - This counts the number of proforma invoice generated per day. This means the said proforma invoice is the 51th for the day.     

    Date

          This captures the date for the proforma invoice.
       
    Freight

        This field determines the height of the container to be used to send the product to the customer.

    Container Quantity

        The amount of container required for the shipment.

    Freight Price per Container

        The transport charge price of each of the container.

    Terms of Delivery

        This dropdown display a list of terms of delivery as provided by the company.

    Shipment

        The shipment type either **Truck** , **Vessel**.

    Payment

        This dropdown list the payment types as created by the company.

    
    Currency
        This field captures the currency the payment will be made

    For Account of

        This field captures the bank of the customer.

    Customer Ref

    NXP Number

        This captures the NXP number for the export.

_  After all the above required field are filled. The Save button is then hit, for the proforma invoice creation_

## Table Creation 

        DROP TABLE IF EXISTS `bpl_proforma`;
        CREATE TABLE IF NOT EXISTS `bpl_proforma` (
    `order_id` int(11) NOT NULL,
    `customer_ref` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
    `freight` varchar(100) CHARACTER SET utf8 NOT NULL,
    `container` int(11) NOT NULL,
    `freight_price` float NOT NULL,
    `terms` varchar(100) CHARACTER SET utf8 NOT NULL,
    `shipment` varchar(100) CHARACTER SET utf8 NOT NULL,
    `payment_term_id` int(11) NOT NULL,
    `nxp` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
    `currency_id` int(11) NOT NULL,
    `account_id` int(11) NOT NULL,
    `date` varchar(11) CHARACTER SET utf8 NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NULL DEFAULT NULL,
    `deleted_at` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`order_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

## Table Relationship

    ` sales_order `     Table ON `order_id`
    ` currency `        Table ON `currency_id`
    ` account `         Table ON `account_id`
    `bpl_payment_terms` Table ON `payment_term_id`


        

        




