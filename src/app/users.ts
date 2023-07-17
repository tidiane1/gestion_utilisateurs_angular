export class Users {
public Id: number;
public nom: string;
public prenom:string;
public pseudo: string;
public adresse: string;
public telephone: number;
public email:string;
public role: string;
public mot_de_pass: string;
public date_ajout: Date;
public date_modification:Date;
public suppression:number;

    constructor(Id: number, nom: string, prenom:string, pseudo: string, adresse: string, telephone: number, email:string, role: string, mot_de_pass: string, date_ajout: Date, date_modification:Date, suppression:number) {
this.Id = Id;
this.nom = nom;
this.prenom = prenom;
this.pseudo = pseudo;
this.adresse = adresse;
this.telephone = telephone;
this.email = email;
this.role = role;
this.mot_de_pass = mot_de_pass;
this.date_ajout = date_ajout;
this.date_modification = date_modification;
this.suppression = suppression;
}
}