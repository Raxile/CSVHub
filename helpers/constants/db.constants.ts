export const DB_ERROR_MESSAGE: {
  NO_ENV: string;
} = {
  NO_ENV: 'Invalid/Missing environment variable: "MONGODB_URI"',
};

export const SCHEMA_VALIDATION_MESSAGE: {
  NAME: {
    REQUIRED: string;
    MAX_LIMIT: string;
  };
  EMAIL: {
    REQUIRED: string;
  };
  DATE_OF_BIRTH: {
    REQUIRED: string;
  };
  ADDRESS: {
    REQUIRED: string;
  };
  COUNTRY: {
    REQUIRED: string;
  };
} = {
  NAME: {
    REQUIRED: 'Please provide a name for this Student.',
    MAX_LIMIT: 'Name cannot be more than 60 characters.',
  },
  EMAIL: {
    REQUIRED: 'Please provide a email.',
  },
  DATE_OF_BIRTH: {
    REQUIRED: 'Please provide a Date of birth.',
  },
  ADDRESS: {
    REQUIRED: 'Please provide a address.',
  },
  COUNTRY: {
    REQUIRED: 'Please provide a country.',
  },
};
