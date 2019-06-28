const mockData = [
    {
      Items: [
        {
          fields: [
            {
              name: 'firstName',
              component: 'input',
              caption: 'First Name',
              initialValue: 'Ram',
              validationRule: '^(?!\\s*$).+'
            },
            {
              name: 'lastName',
              component: 'input',
              caption: 'Last Name',
              initialValue: 'Kalyta',
              validationRule: '^.{6,}$'
            },
            {
              name: 'middleName',
              component: 'input',
              caption: 'Middle Name',
              initialValue: 'Dmytrovych'
            },
            {
              name: 'dateOfBirth',
              component: 'input',
              type: 'date',
              caption: 'Date of Birth',
              initialValue: '26/07/1988'
            },
            {
              name: 'gender',
              component: 'radio',
              caption: 'Gender',
              options: [
                { value: 'MALE', title: 'Male' },
                { value: 'FEMALE', title: 'Female' }
              ],
              initialValue: 'MALE'
            },
            {
              name: 'isINDIACitizen',
              component: 'radio',
              caption: 'Is Citizen of India',
              options: [
                { value: 'TRUE', title: 'YES' },
                { value: 'FALSE', title: 'NO' }
              ],
              initialValue: undefined
            },
            {
              name: 'Aadhar Number',
              type: 'number',
              component: 'input',
              caption: 'SSN',
              initialValue: '123456789012'
            },
            {
              name: 'maritalStatus',
              component: 'select',
              caption: 'Marital Status',
              options: [
                { value: 'MARRIED', title: 'Married' },
                { value: 'DIVORCED', title: 'Divorced' },
                { value: 'WINDOW', title: 'Window' },
                { value: 'SEPARATED', title: 'Separated' },
                { value: 'SINGLE', title: 'Single' }
              ],
              initialValue: 'MARRIED'
            },
            {
              name: 'maidenName',
              component: 'input',
              caption: 'Maiden Name'
            }
          ]
        }
      ]
    }
    
  ]
  
  export default mockData