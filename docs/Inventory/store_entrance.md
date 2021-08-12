---
sidebar_position: 1
sidebar_label: "Store Entrance"
---

# Store Entrance

This is where all the products which has been exited from the factory will be scanned to.

## MORE EXPLANATION

After a product has been produced from the factory, it has to be moved or exited from the factory to the store. This module (STORE ENTRANCE) is created to track the number of the products that are entering the store.

The Store Entrance Modules Contains the following Fields

1.  **User:** This is the name of the user that is entering or scanning the product to the store.
2.  **Entrance Location:** This is a list of the store locations we have in the factory. The user is meant to select the name of the store he/she is scanning the product to. As at the time of writing this documentation we have three Store locations which they can move products to, this includes (I) PM2 STORE (II) PM3 STORE (III) WASTE PAPER STORE [Click here to check the Full meaning of the abbreviation used in this write up e.g PM2](www.lecrosoft.com)
3.  **Date:** This is where the user will specify the date the product(s) is/are entering the store.
4.  **Barcode:** This alphanumeric character uniquely identifies a particular product. [Learn More](www.lecrosoft.com)
5.  **Status:** This can only be in two states ( NULL or Exited ). It shows NULL if a product is newly scanned into the store entrance Table and Shows Exited if the said product has been Exited from the store.
    Additionally, it checks the database and indicate if the barcode you have entered has already been scanned to the store before. This is done to avoid double entry of a product and data redundancy.
6.  **Product:** This is the name of the product that correlate with the barcode you entered in the barcode field.
7.  **Weight:** This is the weight of the product which is being scanned.
8.  **View Entries:** This is a link in which when clicked would enable the user to view the list of product in the store.
