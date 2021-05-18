/**
 * Contains the form schema
 */

export const assetTableSchema = [
    {
        label: "Name",
        field: "name",
        format: "string"
    },
    {
        label: "Type",
        field: "type",
        format: "string"
    },
    {
        label: "Description",
        field: "description",
        format: "long"
    },
    {
        label: "Date acquired",
        field: "date_acquired",
        format: "datetime"
    },
    {
        label: "Condition",
        field: "condition",
        format: "string"
    },
    {
        label: "Make / Manufacturer",
        field: "manufacturer",
        format: "string"
    },
    {
        label: "Model Number",
        field: "model_number",
        format: "string"
    },

]