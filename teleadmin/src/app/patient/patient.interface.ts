export interface Patient {
  _id: string;
  name: string;
  surname: string;
  gender: string;
  city: string;
  street: string;
  secu: string;
  email: string;
  phone: string;
  birthday: Date;
  sessions: object[];
  photo: string;
  doctor: string;
  allergy: string;
  vaccins: string;
  notes: string;
}
