const SERVICE_ENDPOINT = {
  API: '/api',
  VERSION: '/V1',
  STUDENTS: '/students',
  FEATURE: {
    ADD: '/add',
    EDIT: '/edit',
    DELETE: '/delete',
  },
};

const {
  API,
  VERSION,
  STUDENTS,
  FEATURE: { ADD, EDIT, DELETE },
} = SERVICE_ENDPOINT;

export const GET_STUDENTS_API_ENDPOINT = `${API}${VERSION}${STUDENTS}`;
export const ADD_STUDENT_API_ENDPOINT = `${API}${VERSION}${STUDENTS}${ADD}`;
export const EDIT_STUDENT_API_ENDPOINT = `${API}${VERSION}${STUDENTS}${EDIT}`;
export const DELETE_STUDENT_API_ENDPOINT = `${API}${VERSION}${STUDENTS}${DELETE}`;
