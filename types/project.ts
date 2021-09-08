export default interface Project {
	PRID:number;
	Name:string;
	Autoren:string;
	BeschreibungKurz:string;
	BeschreibungLang:string;
	Kategorie_FK:number;
	Plattform_FK:number;
	Aktualisiert:string;
	Downloads:number;
	Tags:string[];
}