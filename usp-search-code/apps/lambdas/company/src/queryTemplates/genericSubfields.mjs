const subFields = ['raw', 'sanitised'];

const genericSubfields = (fieldName) => subFields.map((subField) => `${fieldName}.${subField}`);

export default genericSubfields;
