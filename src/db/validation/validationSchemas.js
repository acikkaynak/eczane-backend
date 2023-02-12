const locationValidationSchema = {
  name: {
    type: 'string',
    required: true,
  },
  phone: {
    type: 'any',
  },
  address: {
    type: 'string',
    required: true,
  },
  additionalAddressDetails: {
    type: 'string',
  },
  workingHours: {
    type: 'string',
  },
  latitude: {
    type: 'any',
    required: true,
  },
  longitude: {
    type: 'any',
    required: true,
  },
  cityId: {
    type: 'number',
    required: true,
  },
  districtId: {
    type: 'number',
    required: true,
  },
  typeId: {
    type: 'number',
    required: true,
  },
  code: {
    type: 'string',
  },
  subTypeId: {
    type: 'number',
    required: true,
  },
}

const typeValidationShema = {
  name: {
    type: 'string',
    required: true,
  },
}

export { locationValidationSchema, typeValidationShema }
