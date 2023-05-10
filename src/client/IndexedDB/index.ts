import Dexie from 'dexie';
import { IDbUser } from './staff/loadStaff';
import { IDbPlace } from './places/loadPlaces';
import { IDbDepartment } from './departments/loadDepartments';

class MapAppDb extends Dexie {
  staff: Dexie.Table<IDbUser, number>;
  places: Dexie.Table<IDbPlace, number>;
  departments: Dexie.Table<IDbDepartment, number>;
  
  constructor() {  
    super("interactive_map");

    this.version(1).stores({
      staff: 'id, name, username, floor, [floor+mapid], [floor+workplaceid], isBirthday, inVacation',
      places: 'id, name, level, mapid, [level+mapid]',
      departments: 'id, name, level, mapid, [level+mapid]',
    });
    
    // The following lines are needed for it to work across typescipt using babel-preset-typescript:
    this.staff = this.table("staff");
    this.places = this.table("places");
    this.departments = this.table("departments");
  }
}

const mapAppDb = new MapAppDb();

export {
  mapAppDb,
}