export default function getListStudentsIds(array_obj) {
  if (Array.isArray(array_obj)) {
    return array_obj.map(obj => obj.id);
  } else {
    return [];
  }
}
