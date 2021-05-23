# Project Specifications

This project is divided into 3 parts:

1. HTML Form Frontend
    - The user fills out the information in the form
    - Form communicates with APIs to upload data and files

2. Response REST API Connected to SQLite DB
    - receives data from frontend form
    - Sends data to the frontend form

3. File Upload API
    - Saves files that are uploaded
    - Gets files by an upload ID

## Data Components and Definitions

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