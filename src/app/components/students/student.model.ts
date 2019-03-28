export class Student {
  public name: String;
  public lastName: String;
  public gender: String;
  public grade: Number;
  public dateOfBirth: String;
  public phone: Number;
  public email: String;

  constructor(name: String, lastName: String, gender: String, grade: Number, dateOfBirth: String, phone: Number, email: String){
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
    this.grade = grade;
    this.dateOfBirth = dateOfBirth;
    this.phone = phone;
    this.email = email;
  }
}
