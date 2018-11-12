class courses{

    constructor(name ,time ,date ,rooms){
            this.name=name;
            this.time=time;
            this.date=date;
            this.rooms=rooms;
    }

    toString(){

        return "dersin adı:" +this.name +"dersin zamanı:" + this.time + "ders günü:" +this.date+"dersin sınıfları: "+this.rooms   
    }

}

class students {

    constructer(id, name,gpa ,courses){
        this.id=id;
        this.name=name;
        this.gpa=gpa;
        this.courses;
        
    }

    toString() {
        return "ogrenci id::" +this.id +"ogrenci adi:" + this.name + "ogrenci gpa:" +this.gpa+"ogrenci courses: "+this.courses   
    }
}


