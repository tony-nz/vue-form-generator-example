import { Form } from "@tony-nz/vue-form-generator/src/types/VueFormGenerator";
export const form: Array<Form> = [
  {
    name: "Basic details",
    description: "This is a description for the form",
    children: [
      {
        label: "General",
        class: "col-span-6",
        description: "General settings for the user",
        fields: [
          {
            type: "text",
            label: "Given Name",
            hint: "Please enter the given name...",
            placeholder: "John",
            id: "givenName",
            required: true,
            class: "col-span-6",
          },
          {
            type: "text",
            label: "Family Name",
            placeholder: "Smith",
            id: "familyName",
            required: true,
            class: "col-span-6",
          },
          {
            type: "text",
            label: "Full Name",
            placeholder: "John Smith",
            id: "fullName",
            required: false,
          },
          {
            type: "select",
            label: "Gender",
            id: "gender",
            options: [
              { name: "Female", id: "female" },
              { name: "Male", id: "male" },
            ],
            required: true,
          },
        ],
      },
      {
        label: "Advanced",
        description: "Advanced settings for the user",
        class: "col-span-6",
        fields: [
          {
            type: "select",
            label: "Organization",
            id: "orgUnitPath",
            hint: "Please select a organization...",
            required: false,
            optionsUrl: "/api/sms/google/organization",
            optionValue: "orgUnitPath",
            optionsLabel: "orgUnitPath",
          },
          {
            type: "switch",
            label: "Archived",
            id: "archived",
            options: ["true", "false"],
            required: false,
          },
          {
            type: "switch",
            label: "Is Admin",
            id: "isAdmin",
            options: ["true", "false"],
            required: false,
          },
          {
            type: "switch",
            label: "Include In Global Address List",
            id: "includeInGlobalAddressList",
            options: ["true", "false"],
            required: false,
          },
          {
            type: "switch",
            label: "Change Password At Next Login",
            id: "changePasswordAtNextLogin",
            options: ["true", "false"],
            required: true,
          },
        ],
      },
    ],
  },
  {
    name: "Extra details",
    description: "This is a description for the form",
    children: [
      {
        label: "Recovery",
        class: "col-span-6",
        description: "Recovery settings for the user",
        fields: [
          {
            type: "text",
            label: "Primary Email",
            placeholder: "john@gmail.com",
            id: "primaryEmail",
            required: false,
          },
          {
            type: "text",
            label: "Recovery Email",
            placeholder: "john.smith@gmail.com",
            id: "recoveryEmail",
            required: false,
          },
          {
            type: "text",
            label: "Recovery Phone",
            placeholder: "021 503 088",
            id: "recoveryPhone",
            required: false,
          },
        ],
      },
      {
        label: "Misc",
        class: "col-span-6",
        description: "Miscellaneous settings for the user",
        fields: [
          {
            type: "editor",
            label: "Critical Information",
            id: "criticalInformation",
            required: false,
            editorStyle: "height: 150px;",
            display: "accordion",
          },
          {
            type: "switch",
            label: "Suspended",
            placeholder: "Disable the user from accessing their account",
            id: "suspended",
            options: ["true", "false"],
            required: false,
          },
          {
            type: "text",
            label: "Suspended Reason",
            placeholder: "E.g. user no longer at organization (Type: Yes)",
            id: "suspendedReason",
            required: false,
            conditional: {
              field: "suspended",
              value: 1, // true
            },
          },
          {
            type: "text",
            label: "Suspended Reason More",
            placeholder: "E.g. user no longer at organization",
            id: "suspendedReason2",
            required: false,
            conditional: {
              field: "suspendedReason",
              value: "Yes", // true
            },
          },
        ],
      },
    ],
  },
];
