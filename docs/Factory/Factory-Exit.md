---
sidebar_position: 2
sidebar_label: "Factory Exit"
---

# Factory Exit

Factory Exit describes the process whereby Jumboreels created in the Factory is being moved to the associated store location. For instance, a product created in the PM3 factory is exited and entered into the PM3 Store.

`URL: /bil/bpl_factory_exit`

## Exiting Products from the Factory

Below are the steps required to exit a product from the factory.

1. Using the `barcode`, check if the product exists in the `bpl_production` and has a `status` of `NULL`.
2. If a product is found, it returns true. This means it can be exited from the factory. It returns false if the product doesn't exist in the `bpl_production` table **_OR_** has a status of `Exited`

## Result of Factory Exit

1. The Exited Product is inserted into the `bpl_factoryexit` table and the `status` of the product in the `bpl_production` table is updated to `Exited`
