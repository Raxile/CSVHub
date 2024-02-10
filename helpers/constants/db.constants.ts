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

export const DB_RESPONSE_MESSAGE: {
  STUDENTS_FOUND_SUCCESSFULLY: string;
  STUDENT_ADD_SUCCESSFULLY: string;
  STUDENT_DELETE_SUCCESSFULLY: string;
  STUDENT_UPDATED_SUCCESSFULLY: string;
} = {
  STUDENTS_FOUND_SUCCESSFULLY: 'Students found Successfully',
  STUDENT_ADD_SUCCESSFULLY: 'Student Added Successfully',
  STUDENT_DELETE_SUCCESSFULLY: 'is Deleted Successfully',
  STUDENT_UPDATED_SUCCESSFULLY: 'Student Updated Successfully',
};

export const ERROR_MESSAGE: {
  404: string;
  500: string;
} = {
  404: 'Not Found!',
  500: 'Internal Server Error',
};

export const PAGINATION_DEFAULT_VALUE: {
  PAGE_SIZE: string;
  PAGE_NUMBER: string;
} = {
  PAGE_SIZE: '10',
  PAGE_NUMBER: '0',
};
