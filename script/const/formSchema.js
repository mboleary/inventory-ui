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

];

export const assetFormSchema = {
    id: "",
    rev: "",
    title: "Asset editpage",
    items: [
        {
            id: "id",
            type: "hidden"
        },
        {
            id: "created_at",
            type: "hidden"
        },
        {
            id: "updated_at",
            type: "hidden"
        },
        {
            id: "deleted",
            type: "hidden"
        },
        {
            id: "name",
            type: "text",
            label: "Name",
            placeholder: "Enter a name",
            default: "",
            validation: {
                required: true,
                message: "Please enter a name"
            }
        },
        {
            id: "type",
            type: "text",
            label: "Type",
            placeholder: "Enter a type",
            default: "",
            validation: {
                required: true,
                message: "Please enter a type"
            }
        },
        {
            id: "description",
            type: "textarea",
            label: "Description",
            placeholder: "Enter a description",
            default: ""
        },
        {
            id: "date_acquired",
            type: "datetime",
            label: "Date acquired",
            placeholder: "Enter a date",
            default: ""
        },
        {
            id: "acquired_from",
            type: "text",
            label: "Acquired from",
            placeholder: "Enter where the item was acquired from",
            default: ""
        },
        {
            id: "acquired_value",
            type: "number",
            label: "Acquired value",
            placeholder: "Enter how much was paid for the item",
            default: "0"
        },
        {
            id: "manufacturer",
            type: "text",
            label: "Manufacturer",
            placeholder: "Enter a manufacturer",
            default: "",
            validation: {
                required: true,
                message: "Please enter a manufacturer"
            }
        },
        {
            id: "model_number",
            type: "text",
            label: "Model number",
            placeholder: "Enter a model number",
            default: "",
            validation: {
                required: true,
                message: "Please enter a model number"
            }
        },
        {
            id: "serial_number",
            type: "text",
            label: "Serial number",
            placeholder: "Enter a serial number",
            default: "",
            validation: {
                required: true,
                message: "Please enter a serial number"
            }
        },
        {
            id: "condition",
            type: "radio",
            label: "Condition",
            placeholder: "Select a condition",
            default: "",
            options: [
                "Like new",
                "Sealed in box",
                "Not working"
            ]
        },
        {
            id: "condition_description",
            type: "textarea",
            label: "Condition description",
            placeholder: "Enter a condition description",
            default: ""
        },
        {
            id: "estimated_current_value",
            type: "number",
            label: "Estimated value",
            placeholder: "Enter how much the item is worth now",
            default: "0"
        },
    ]
}