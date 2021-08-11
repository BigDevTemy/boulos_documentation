---
sidebar_position: 1
sidebar_label: "Barcode Creation"
---

# Factory Production

This is also known as barcode creation or Jumboreel creation. It is used in the factory to generate barcodes for Jumboreels.

## Creating Barcodes for Jumboreels

The following fields are required when creating barcodes for Jumboreels.

```
- Customer
- Product
- Core Diameter
- Paper Machine (PM)
- Hardroll Cart
- Joints
- Weight (kg)
```

A combination of the date and paper machine, provided in the input fields will automatically generate a barcode for that Jumboreel product along with a barcode count in sequential order.  
For example, production is created with a date of 2021-05-27 and a PM of 2, the barcode will be:  
`21-05-27-M2-001`.

Once another production is created on this day with the same PM, the barcode becomes `21-05-27-M2-002`, and so on.  
If production is created on the same day with a different PM, this time PM3, the barcode count starts from 001.  
Hence, the barcode will be `21-05-27-M3-001`.

Next, we'll describe these fields with more specificity.

## Description of Fields

In this part, you will understand the data that each field requires in the creation of a product.

### Customer

Jumboreels are only created only per customer request. Hence, the customer field is required. The production table is linked with the customer table via the Customer ID. Click here to learn more about customer-related data.

### Product

The user will need to specify the product which requires a particular Jumboreel. The production table is linked with the products table via the Product ID. Click here to learn more about product-related data.

### Core Diameter

### Paper Machine

This refers to the location in which the Jumboreel is being created. Currently, we have three locations which are:

```
1. Paper Machine (PM) 2
2. Paper Machine (PM) 3
3. Gambini
```

But, Jumboreel production currently happens in either PM 2 or PM3. At least one must be specified.

### Hardroll Cart

This specifies a list of letters between A and L and is used to generate the Hardroll number. The Hardroll number is obtained by a combination of:

```
1. Paper Machine (M2/M3)
2. Date of creation in YMD format. For example, 210527 signifying May 27th, 2021.
3. Hardroll Cart.
```

The hardroll cart count increases for every new entry. For example, two productions were created on the 27th May 2021 in PM2 and a hardroll cart of A. The hardroll numbers generated will be: M2210527-1A and M2210527-2A respectively.

### Joints

### Weight

## Result of Factory Production

```
1. Selects the Customer ID from the `/bpl_customers` table based on the Customer Name selected and adds the ID to the `/bpl_production` table.
2. Selects the Product ID from the `/bpl_products` table based on the Product Name selected and adds the ID to the `/bpl_production` table.
3. The data is inserted into the `/bpl_production` table.
```
