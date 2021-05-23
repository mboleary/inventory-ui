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
            default: "",
            validation: {
                required: true,
                message: "Please enter a description"
            }
        },
        {
            id: "date_acquired",
            type: "datetime",
            label: "Date acquired",
            placeholder: "Enter a date",
            default: "",
            validation: {
                required: false,
                message: "Please enter a date"
            }
        },
        {
            id: "condition",
            type: "radio",
            label: "Condition",
            placeholder: "Select a condition",
            default: "",
            validation: {
                required: false,
                message: "Please select a condition"
            }
        }
    ]
}