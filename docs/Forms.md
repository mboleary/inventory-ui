# Forms

Since the default form system doesn't handle various data formats and REST APIs very well, I've had to build a wrapper to make this process smoother. Here's how it works:

## Interacting with the REST API

If this form is being used to generate a new entry, we can probably skip this step.

We'll first need to know the `id` of the entry to make a GET request for. This can be passed as a query parameter.

After making the request, we'll need to set the form data. This involves going through each input element and setting the appropriate value, or adding a input (type="hidden") to store the rest of the data.

To do this, we'll use the `genForm` function provided in the form utility, which will take an existing form and set the data properly, as well as handle serializing and deserializing the data to be submitted back to the REST API. It also provides functions to handle when the data is changed in an input element, and when the form is submitted.

## 

Fields for a column:

- field: field in the API that an input affects
- label: Label on the input
- type: Input type
    - ...HTML5 Inputs
    - hidden (meant to be either updated by other components, or not touched at all)
- component: Defines the use of a custom component
- required: true if the field is required
- options: Used in defining the options for a field
    - min
    - max
    - step
    - 


## Auto-generating the form from a schema

Forms can also be auto-generated based on a JSON schema provided

__Form Schema__: A group of field definitions that make up a form
- `id`: Form ID
- `rev`: Form Revision/Version
- `title`: Form Title
- `items`: See Form Items

__Form Items__: A subgroup of the Form Schema that defines the inputs that will appear on the form
- `id`: Field ID, this is how the data is stored
- `type`: The Type of the input
- `label`: The Label that appears above the input
- `placeholder`: Placeholder text to be displayed in the input (if applicable)
- `default`: Default Value
- `options`: Array of Options for Radio Buttons, Checkboxes, and Dropdown Menus
- `validation`: Validation options for an input. See the Form Validation Section for Details. Is omitted, then don't validate.
- `custom`: If this is a custom element, this tells the form generator which custom component to use

__Form Response__: A response for a form
- `id`: Response ID
- `form`: {
    `id`: Form ID that this response is associated with
    `rev`: Form Revision that this response was generated from
}
- `response`: Contains all data in a key-pair format where the key cooresponds to the Form Item's ID

__Column Settings__: Settings for Displaying the data in a table
- `form`: {
    `id`: Form ID that this response is associated with
    `rev`: Form Revision that this response was generated from
}
- `columns`: A List of settings describing how to show the data in a table.
    - `field`: The Field to show the data from in a response
    - 

## Supported Input Types

The following Input Types are supported

- text
- number
- checkbox
- radio
- color
- date
- email
- range
- tel
- url
- textarea
- hidden
- custom (makes an input for custom)

In addition, there is input validation.

## Form Validation

To specify a validation, you must put the following keys into the `validation` object on a Form Item.

Each Input Type has certain validation options:

__* (All Types)__
- `required` (Boolean): True if the input is required to be filled out
- `message` (String): String to be displayed if there is a validation problem

__Text, email__
- `minLength` (Number): Minimum number of characters
- `maxLength` (Number): Maximum Number of characters
- `match` (Regex): Regex that the input field should match

__Number__
- `min` (Number): Minimum Number to allow
- `max` (Number): Maximum Number to allow
- `step` (Number): Number to increment by

__Checkbox__
- `min` (Number): Minimum number of selections
- `max` (Number): Maximum Number of selections